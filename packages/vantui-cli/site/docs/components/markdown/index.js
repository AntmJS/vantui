import React from 'react'
import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
import './index.less'
// eslint-disable-next-line import/no-named-as-default
import toast, { Toaster } from 'react-hot-toast'

const config = {
  highlight: function (str, lang) {
    return hljs.highlight(str, { language: lang }).value
  },
  html: true,
}
const md = MarkdownIt(config)

function copyAction() {
  const codeBoxes = document.querySelectorAll('.docs-markdown-com pre code')
  if (!codeBoxes || !codeBoxes.length) {
    return
  }
  for (let i = 0; i < codeBoxes.length; i++) {
    const item = codeBoxes[i]
    let timer = null
    item.onclick = () => {
      if (timer) return
      const content = item.innerText
      copyToClipboard(content)
      toast.success('复制成功！', {
        style: { position: 'relative', top: 250, duration: 10000 },
      })
    }
  }
}

export default function MarkdownBox(props) {
  React.useEffect(function () {
    copyAction()
  }, [])

  const mdRender = React.useMemo(
    function () {
      // eslint-disable-next-line react/prop-types
      return markdownCardWrapper(md.render(props.children))
    },
    // eslint-disable-next-line react/prop-types
    [props.children],
  )

  return (
    <div className="docs-markdown-com">
      <Toaster style={{ top: 220 }} />
      <div
        dangerouslySetInnerHTML={{
          __html: mdRender,
        }}
      />
    </div>
  )
}

function copyToClipboard(str) {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)

  const selection = document.getSelection()

  if (!selection) {
    return
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false

  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)

  if (selected) {
    selection.removeAllRanges()
    selection.addRange(selected)
  }
}

function markdownCardWrapper(htmlCode) {
  const group = htmlCode
    .replace(/<h3/g, ':::<h3')
    .replace(/<h2/g, ':::<h2')
    .split(':::')

  return group
    .map((fragment) => {
      if (fragment.indexOf('<h3') !== -1) {
        return `<div class="card">${fragment}</div>`
      }

      return fragment
    })
    .join('')
}
