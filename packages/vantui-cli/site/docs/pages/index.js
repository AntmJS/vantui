import React from 'react'
import MarkdownBox from '../components/markdown/index.js'

export default function Docs() {
  const [md, setMd] = React.useState('')

  React.useEffect(() => {
    mdAction()
    window.addEventListener('hashchange', mdAction)
  }, [])

  const mdAction = function () {
    const target = location.hash.replace('#/', '')

    setMd(__vantui_base__.md[target])
    const t = __vantui_base__?.routers.find((item) => item.path === target)
    document.title = t.title
  }

  return <>{md ? <MarkdownBox>{md}</MarkdownBox> : ''}</>
}
