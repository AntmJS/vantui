import { View, Text } from '@tarojs/components'
import { useMemo } from 'react'
import classNames from 'classnames'
import { HighlightProps } from '../../types/highlight'
import * as utils from '../wxs/utils'
import './index.less'

interface Chunk {
  start: number
  end: number
  highlight: boolean
}

export function Highlight(props: HighlightProps) {
  const { autoEscape, caseSensitive, keywords, sourceString } = props

  const highlightChunks = useMemo(() => {
    // 是否区分大小写
    const flags = caseSensitive ? 'g' : 'gi'
    // 转数组
    const _keywords = Array.isArray(keywords) ? keywords : [keywords]

    // 生成分组
    let chunks = _keywords
      .filter((keyword) => keyword)
      .reduce((chunks: Chunk[], keyword) => {
        // 是否自动转义
        if (autoEscape) {
          keyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        }

        // 用正则匹配
        const regex = new RegExp(keyword, flags)

        // 遍历关键词匹配值，最后生成 [{start, end, highlight: false}] 开始和结束值，高亮与否的数组
        let match
        while ((match = regex.exec(sourceString))) {
          const start = match.index
          const end = regex.lastIndex

          if (start >= end) {
            regex.lastIndex++
            continue
          }

          chunks.push({
            start,
            end,
            highlight: true,
          })
        }

        return chunks
      }, [])

    // 合并分组
    chunks = chunks
      .sort((a, b) => a.start - b.start)
      .reduce((chunks: Chunk[], currentChunk) => {
        const prevChunk = chunks[chunks.length - 1]

        if (!prevChunk || currentChunk.start > prevChunk.end) {
          const unhighlightStart = prevChunk ? prevChunk.end : 0
          const unhighlightEnd = currentChunk.start

          if (unhighlightStart !== unhighlightEnd) {
            chunks.push({
              start: unhighlightStart,
              end: unhighlightEnd,
              highlight: false,
            })
          }

          chunks.push(currentChunk)
        } else {
          prevChunk.end = Math.max(prevChunk.end, currentChunk.end)
        }

        return chunks
      }, [])

    const lastChunk = chunks[chunks.length - 1]

    // 没有关键词时，没匹配到 chunks 的时候
    if (!lastChunk) {
      chunks.push({
        start: 0,
        end: sourceString.length,
        highlight: false,
      })
    }

    if (lastChunk && lastChunk.end < sourceString.length) {
      chunks.push({
        start: lastChunk.end,
        end: sourceString.length,
        highlight: false,
      })
    }

    return chunks
  }, [autoEscape, caseSensitive, keywords, sourceString])

  const renderContent = () => {
    const {
      sourceString,
      // 高亮和非高亮样式名和标签名
      highlightClass,
      unhighlightClass,
    } = props

    return highlightChunks.map((chunk, index) => {
      const { start, end, highlight } = chunk
      // 取出文本
      const text = sourceString.slice(start, end)

      if (highlight) {
        return (
          <Text
            className={classNames(utils.bem('highlight'), highlightClass)}
            key={index}
          >
            {text}
          </Text>
        )
      }

      return (
        <Text className={unhighlightClass} key={index}>
          {text}
        </Text>
      )
    })
  }

  return <View>{renderContent()}</View>
}

export default Highlight
