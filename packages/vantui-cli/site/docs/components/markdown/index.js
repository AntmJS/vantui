import React, { useEffect, useMemo, memo } from 'react'
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

function MarkdownBox(props) {
  useEffect(function () {
    setTimeout(() => {
      copyAction()
      scrollTargetInit()
    }, 133)
  }, [])

  const mdRender = useMemo(
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
        const h3Title = fragment.split('h3>')[1].replace('</', '')

        const newFragment = fragment.replace(
          '<h3>',
          `<h3 id="${encodeURIComponent(
            h3Title,
          )}"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>`,
        )
        return `<div class="card">
        ${newFragment}
        </div>`
      }

      return fragment
    })
    .join('')
}

function scrollTargetInit() {
  const h3Title = document.querySelectorAll('.docs-markdown-com .card h3')
  if (!h3Title || !h3Title.length) {
    return
  }
  console.info('_______________')
  for (let i = 0; i < h3Title.length; i++) {
    const item = h3Title[i]
    item.onclick = () => {
      item.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })

      const hash = window.location.hash.split('?')[0]

      window.location.hash = `${hash}?target=${item.id}`
    }
  }
}

export default memo(MarkdownBox)
