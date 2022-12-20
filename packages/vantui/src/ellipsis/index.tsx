import { useState, useRef, useCallback, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { createSelectorQuery, useReady } from '@tarojs/taro'
import { EllipsisProps } from '../../types/ellipsis'
import { getRect } from '../common/utils'

const preCls = 'van-ellipsis'
const chineseReg = /^[\u4e00-\u9fa5]+$/
const digitReg = /^[0-9]+$/
const letterUpperReg = /^[A-Z]+$/
const letterLowerReg = /^[a-z]+$/
const defaultWidthBase = [14, 10, 7, 8.4, 10] // 中、英(大)、英(小)、数字、其他字符的基础宽度

export default function Ellipsis({
  children,
  symbol = '...',
  expandText = '展开',
  collapseText = '收起',
  rows = 2,
  className = '',
  defaultExpand = false,
  hiddenAction = false,
}: EllipsisProps): React.ReactNode {
  const [content, setContent] = useState('')
  const [expand, setExpand] = useState(defaultExpand)
  const randomRef = useRef(Math.random().toString(36).slice(-8))

  const getCutChildren = useCallback(
    ({
      containerWidth,
      symbolWidth,
      actionWidth,
      widthBase = defaultWidthBase,
    }) => {
      const strWidth = containerWidth * rows - symbolWidth - actionWidth
      let width = 0
      let cutIndex = 0
      for (let i = 0; i < children.length; i++) {
        const stringItem = children[i] || ''
        if (chineseReg.test(stringItem)) {
          width = Number(width + (widthBase[0] || 1))
        } else if (letterUpperReg.test(stringItem)) {
          width = Number(width + (widthBase[1] || 1))
        } else if (letterLowerReg.test(stringItem)) {
          width = Number(width + (widthBase[2] || 1))
        } else if (digitReg.test(stringItem)) {
          width = Number(width + (widthBase[3] || 1))
        } else {
          width = Number(width + (widthBase[4] || 1))
        }

        if (width <= strWidth) {
          cutIndex = i
        } else {
          break
        }
      }

      return children.slice(0, cutIndex)
    },
    [children, rows],
  )

  const getAllWidth = useCallback(async () => {
    const containerDom: any = await getRect(
      null,
      `.${preCls}-hidden_${randomRef.current}`,
    )

    const containerDomC: any = await getComputeStyle(
      `.${preCls}-hidden_${randomRef.current}`,
    )

    const symbolDom: any = await getRect(
      null,
      `.${preCls}-hidden-symbol_${randomRef.current}`,
    )

    const actionDom: any = await getRect(
      null,
      `.${preCls}-hidden-action_${randomRef.current}`,
    )

    if (containerDom.width && symbolDom.width) {
      let fontSize = 14
      if (containerDomC) fontSize = containerDomC.fontSize
      const newChildren = getCutChildren({
        containerWidth: containerDom.width,
        symbolWidth: symbolDom ? symbolDom.width : 0,
        actionWidth: actionDom ? actionDom.width : 0,
        widthBase: [
          fontSize,
          fontSize * 0.72,
          fontSize * 0.53,
          fontSize * 0.4,
          fontSize * 0.75,
        ],
      })
      setContent(newChildren)
    }
  }, [getCutChildren])

  const handleExpand = useCallback(() => {
    setExpand(!expand)
  }, [expand])

  useEffect(() => {
    setTimeout(() => {
      getAllWidth()
    }, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children])

  useReady(() => {
    setTimeout(() => {
      getAllWidth()
    }, 100)
  })

  return (
    <View className={`${preCls}-wrapper`}>
      <View className={`${preCls}-show`}>
        <Text className={`${preCls} ${className}`}>
          {expand ? children : content}
        </Text>
        {!expand && <Text className={`${preCls}-symbol`}>{symbol}</Text>}
        {!hiddenAction && (
          <Text className={`${preCls}-action`} onClick={handleExpand}>
            {expand ? collapseText : expandText}
          </Text>
        )}
      </View>

      <View
        className={`${preCls} ${preCls}-hidden ${preCls}-hidden_${randomRef.current} ${className}`}
      >
        {children}
        <Text
          className={`${preCls}-symbol ${preCls}-hidden-symbol_${randomRef.current}`}
        >
          {symbol}
        </Text>
        {!hiddenAction && (
          <Text
            className={`${preCls}-action ${preCls}-hidden-action_${randomRef.current}`}
          >
            {expand ? collapseText : expandText}
          </Text>
        )}
      </View>
    </View>
  )
}

function getComputeStyle(target) {
  return new Promise((resolve) => {
    const query = createSelectorQuery()
    query
      .select(target)
      .fields(
        {
          computedStyle: [
            'width',
            'height',
            'lineHeight',
            'paddingTop',
            'paddingBottom',
            'fontSize',
          ],
        },
        (res) => {
          const data = {}
          Object.keys(res).map((key) => {
            const item = res[key]
            data[key] =
              typeof item === 'string' ? Number(item.replace('px', '')) : item
          })
          resolve(data)
        },
      )
      .exec()
  })
}
