import React, { useState, useEffect, memo } from 'react'
import MarkdownBox from '../components/markdown/index.js'

let historyMd = ''

const Docs = function Docs() {
  const [md, setMd] = useState(historyMd)

  useEffect(() => {
    mdAction()
    window.addEventListener('hashchange', mdAction)
  }, [])

  const mdAction = function () {
    const hashArr = location.hash.split('?')
    const target = hashArr[0].replace('#/', '')
    historyMd = __vantui_base__.md[target]
    setMd(__vantui_base__.md[target])
    const t = __vantui_base__?.routers.find((item) => item.path === target)
    document.title = t.title
  }

  return <MarkdownBox>{md}</MarkdownBox>
}

export default memo(Docs)
