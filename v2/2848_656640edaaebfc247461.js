'use strict'
;(self.webpackChunk_antmjs_vantui = self.webpackChunk_antmjs_vantui || []).push(
  [
    [2848],
    {
      2848: function (s, n, t) {
        t.r(n),
          (n.default = {
            tile: 'Uploader文件上传',
            docs: '<h1>Uploader 文件上传</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。</p>\n</div><div class="card"><h3 id="%E5%BC%95%E5%85%A5"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引入</h3>\n<p>在 Taro 文件中引入组件</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Uploader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n</code></pre>\n</div>\n</div><h2>代码演示</h2>\n<div class="card"><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>基础用法</h3>\n<p>文件上传完毕后会触发<code>afterRead</code>回调函数，获取到对应的文件的临时地址，然后再使用<code>wx.uploadFile</code>将图片上传到远程服务器上。</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [value, setValue] = react.<span class="hljs-title function_">useState</span>([\n    {\n      <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/leaf.jpg&#x27;</span>,\n      <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;图片1&#x27;</span>,\n    },\n    {\n      <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/tree.jpg&#x27;</span>,\n    },\n  ])\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">event</span>) =&gt; {\n    <span class="hljs-keyword">const</span> { file, name } = event.<span class="hljs-property">detail</span>\n    <span class="hljs-comment">// 可在此处新增云上传图片操作</span>\n    <span class="hljs-title function_">setValue</span>(value.<span class="hljs-title function_">concat</span>(file))\n  }\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">deleteAction</span> = (<span class="hljs-params">event</span>) =&gt; {\n    <span class="hljs-keyword">const</span> { index } = event.<span class="hljs-property">detail</span>\n    <span class="hljs-keyword">const</span> valueNew = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">parse</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(value))\n    valueNew.<span class="hljs-title function_">splice</span>(index, <span class="hljs-number">1</span>)\n    <span class="hljs-title function_">setValue</span>(valueNew)\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Uploader</span>\n      <span class="hljs-attr">fileList</span>=<span class="hljs-string">{value}</span>\n      <span class="hljs-attr">onAfterRead</span>=<span class="hljs-string">{afterRead}</span>\n      <span class="hljs-attr">onDelete</span>=<span class="hljs-string">{deleteAction}</span>\n      <span class="hljs-attr">deletable</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E4%B8%8A%E4%BC%A0%E7%8A%B6%E6%80%81"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>上传状态</h3>\n<p>通过<code>status</code>属性可以标识上传状态，<code>uploading</code>表示上传中，<code>failed</code>表示上传失败，<code>done</code>表示上传完成。</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [value, setValue] = react.<span class="hljs-title function_">useState</span>([\n    {\n      <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/leaf.jpg&#x27;</span>,\n      <span class="hljs-attr">status</span>: <span class="hljs-string">&#x27;uploading&#x27;</span>,\n      <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;上传中&#x27;</span>,\n    },\n    {\n      <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/tree.jpg&#x27;</span>,\n      <span class="hljs-attr">status</span>: <span class="hljs-string">&#x27;failed&#x27;</span>,\n      <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;上传失败&#x27;</span>,\n    },\n  ])\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">event</span>) =&gt; {\n    <span class="hljs-keyword">const</span> { file, name } = event.<span class="hljs-property">detail</span>\n    <span class="hljs-title function_">setValue</span>(value.<span class="hljs-title function_">concat</span>(file))\n  }\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">deleteAction</span> = (<span class="hljs-params">event</span>) =&gt; {\n    <span class="hljs-keyword">const</span> { index } = event.<span class="hljs-property">detail</span>\n    <span class="hljs-keyword">const</span> valueNew = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">parse</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(value))\n    valueNew.<span class="hljs-title function_">splice</span>(index, <span class="hljs-number">1</span>)\n    <span class="hljs-title function_">setValue</span>(valueNew)\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Uploader</span>\n      <span class="hljs-attr">fileList</span>=<span class="hljs-string">{value}</span>\n      <span class="hljs-attr">onAfterRead</span>=<span class="hljs-string">{afterRead}</span>\n      <span class="hljs-attr">onDelete</span>=<span class="hljs-string">{deleteAction}</span>\n      <span class="hljs-attr">deletable</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E9%99%90%E5%88%B6%E4%B8%8A%E4%BC%A0%E6%95%B0%E9%87%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>限制上传数量</h3>\n<p>通过<code>maxCount</code>属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [value, setValue] = react.<span class="hljs-title function_">useState</span>([\n    { <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/sand.jpg&#x27;</span> },\n  ])\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">event</span>) =&gt; {\n    <span class="hljs-keyword">const</span> { file, name } = event.<span class="hljs-property">detail</span>\n    <span class="hljs-title function_">setValue</span>(value.<span class="hljs-title function_">concat</span>(file))\n  }\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">deleteAction</span> = (<span class="hljs-params">event</span>) =&gt; {\n    <span class="hljs-keyword">const</span> { index } = event.<span class="hljs-property">detail</span>\n    <span class="hljs-keyword">const</span> valueNew = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">parse</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(value))\n    valueNew.<span class="hljs-title function_">splice</span>(index, <span class="hljs-number">1</span>)\n    <span class="hljs-title function_">setValue</span>(valueNew)\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Uploader</span>\n      <span class="hljs-attr">fileList</span>=<span class="hljs-string">{value}</span>\n      <span class="hljs-attr">onAfterRead</span>=<span class="hljs-string">{afterRead}</span>\n      <span class="hljs-attr">onDelete</span>=<span class="hljs-string">{deleteAction}</span>\n      <span class="hljs-attr">maxCount</span>=<span class="hljs-string">{2}</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%8A%E4%BC%A0%E6%A0%B7%E5%BC%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>自定义上传样式</h3>\n<p>通过插槽可以自定义上传区域的样式。</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [value, setValue] = react.<span class="hljs-title function_">useState</span>([])\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">event</span>) =&gt; {\n    <span class="hljs-keyword">const</span> { file, name } = event.<span class="hljs-property">detail</span>\n    <span class="hljs-title function_">setValue</span>(value.<span class="hljs-title function_">concat</span>(file))\n  }\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">deleteAction</span> = (<span class="hljs-params">event</span>) =&gt; {\n    <span class="hljs-keyword">const</span> { index } = event.<span class="hljs-property">detail</span>\n    <span class="hljs-keyword">const</span> valueNew = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">parse</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(value))\n    valueNew.<span class="hljs-title function_">splice</span>(index, <span class="hljs-number">1</span>)\n    <span class="hljs-title function_">setValue</span>(valueNew)\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Uploader</span> <span class="hljs-attr">fileList</span>=<span class="hljs-string">{value}</span> <span class="hljs-attr">onAfterRead</span>=<span class="hljs-string">{afterRead}</span> <span class="hljs-attr">onDelete</span>=<span class="hljs-string">{deleteAction}</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\n        上传图片\n      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Uploader</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E4%B8%8A%E4%BC%A0%E5%89%8D%E6%A0%A1%E9%AA%8C"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>上传前校验</h3>\n<p>将<code>useBeforeRead</code>属性设置为<code>true</code>，然后绑定 <code>beforeRead</code> 事件可以在上传前进行校验，调用 <code>callback</code> 方法传入 <code>true</code> 表示校验通过，传入 <code>false</code> 表示校验失败。</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [value, setValue] = react.<span class="hljs-title function_">useState</span>([])\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">event</span>) =&gt; {\n    <span class="hljs-keyword">const</span> { file, name } = event.<span class="hljs-property">detail</span>\n    <span class="hljs-title function_">setValue</span>(value.<span class="hljs-title function_">concat</span>(file))\n  }\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">deleteAction</span> = (<span class="hljs-params">event</span>) =&gt; {\n    <span class="hljs-keyword">const</span> { index } = event.<span class="hljs-property">detail</span>\n    <span class="hljs-keyword">const</span> valueNew = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">parse</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(value))\n    valueNew.<span class="hljs-title function_">splice</span>(index, <span class="hljs-number">1</span>)\n    <span class="hljs-title function_">setValue</span>(valueNew)\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Uploader</span>\n      <span class="hljs-attr">accept</span>=<span class="hljs-string">&quot;png&quot;</span>\n      <span class="hljs-attr">fileList</span>=<span class="hljs-string">{value}</span>\n      <span class="hljs-attr">onAfterRead</span>=<span class="hljs-string">{afterRead}</span>\n      <span class="hljs-attr">onDelete</span>=<span class="hljs-string">{deleteAction}</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="UploaderProps%20%3Ca%20hre"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>UploaderProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/uploader.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>disabled</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>uploadText</td>\n<td>-</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>useBeforeRead</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>afterRead</td>\n<td>-</td>\n<td><em>  any<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>beforeRead</td>\n<td>-</td>\n<td><em>  any<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>previewSize</td>\n<td>-</td>\n<td><em>  string ¦ number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>name</td>\n<td>-</td>\n<td><em>  string ¦ number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>accept</td>\n<td>-</td>\n<td><em>  attr:<br/>    ¦ &quot;all&quot;<br/>    ¦ &quot;media&quot;<br/>    ¦ &quot;image&quot;<br/>    ¦ &quot;file&quot;<br/>    ¦ &quot;video&quot;<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>fileList</td>\n<td>-</td>\n<td><em>  Array<any><br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>maxSize</td>\n<td>-</td>\n<td><em>  number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>maxCount</td>\n<td>-</td>\n<td><em>  number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>deletable</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>showUpload</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>previewImage</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>previewFullImage</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>imageFit</td>\n<td>-</td>\n<td><em>  attr:<br/>    ¦ keyof ImageProps.Mode<br/>    ¦ undefined<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>uploadIcon</td>\n<td>-</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>sizeType</td>\n<td>-</td>\n<td><em>  Array<string><br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>capture</td>\n<td>-</td>\n<td><em>  attr:<br/>    ¦ string<br/>    ¦ Array<string><br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>compressed</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>maxDuration</td>\n<td>-</td>\n<td><em>  number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>camera</td>\n<td>-</td>\n<td><em>  &quot;back&quot; ¦ &quot;front&quot;<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>-</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onError</td>\n<td>-</td>\n<td><em>  (<br/>    error: any<br/>  ) =&gt; any<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onDelete</td>\n<td>-</td>\n<td><em>  (<br/>    event: ITouchEvent<br/>  ) =&gt; any<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onBeforeRead</td>\n<td>-</td>\n<td><em>  (<br/>    event: ITouchEvent<br/>  ) =&gt; any<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onAfterRead</td>\n<td>-</td>\n<td><em>  (<br/>    event: ITouchEvent<br/>  ) =&gt; any<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onOversize</td>\n<td>-</td>\n<td><em>  (<br/>    event: ITouchEvent<br/>  ) =&gt; any<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onClickPreview</td>\n<td>-</td>\n<td><em>  (data: any) =&gt; any<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考<a href="https://antmjs.github.io/vantui/#/config-provider">ConfigProvider 组件</a></p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--uploader-size</td>\n<td><code> 160px;</code></td>\n</tr>\n<tr>\n<td>--uploader-icon-size</td>\n<td><code> 48px;</code></td>\n</tr>\n<tr>\n<td>--uploader-icon-color</td>\n<td><code> @gray-4;</code></td>\n</tr>\n<tr>\n<td>--uploader-text-color</td>\n<td><code> @gray-6;</code></td>\n</tr>\n<tr>\n<td>--uploader-text-font-size</td>\n<td><code> @font-size-sm;</code></td>\n</tr>\n<tr>\n<td>--uploader-upload-background-color</td>\n<td><code> @gray-1;</code></td>\n</tr>\n<tr>\n<td>--uploader-upload-active-color</td>\n<td><code> @active-color;</code></td>\n</tr>\n<tr>\n<td>--uploader-delete-color</td>\n<td><code> @white;</code></td>\n</tr>\n<tr>\n<td>--uploader-delete-icon-size</td>\n<td><code> 28px;</code></td>\n</tr>\n<tr>\n<td>--uploader-delete-background-color</td>\n<td><code> rgba(0, 0, 0, 0.7);</code></td>\n</tr>\n<tr>\n<td>--uploader-file-background-color</td>\n<td><code> @background-color;</code></td>\n</tr>\n<tr>\n<td>--uploader-file-icon-size</td>\n<td><code> 40px;</code></td>\n</tr>\n<tr>\n<td>--uploader-file-icon-color</td>\n<td><code> @gray-7;</code></td>\n</tr>\n<tr>\n<td>--uploader-file-name-padding</td>\n<td><code> 0 @padding-base;</code></td>\n</tr>\n<tr>\n<td>--uploader-file-name-margin-top</td>\n<td><code> @padding-xs;</code></td>\n</tr>\n<tr>\n<td>--uploader-file-name-font-size</td>\n<td><code> @font-size-sm;</code></td>\n</tr>\n<tr>\n<td>--uploader-file-name-text-color</td>\n<td><code> @gray-7;</code></td>\n</tr>\n<tr>\n<td>--uploader-mask-background-color</td>\n<td><code> fade(@gray-8, 88%);</code></td>\n</tr>\n<tr>\n<td>--uploader-mask-icon-size</td>\n<td><code> 44px;</code></td>\n</tr>\n<tr>\n<td>--uploader-mask-message-font-size</td>\n<td><code> @font-size-sm;</code></td>\n</tr>\n<tr>\n<td>--uploader-mask-message-line-height</td>\n<td><code> 28px;</code></td>\n</tr>\n<tr>\n<td>--uploader-loading-icon-size</td>\n<td><code> 44px;</code></td>\n</tr>\n<tr>\n<td>--uploader-loading-icon-color</td>\n<td><code> @white;</code></td>\n</tr>\n<tr>\n<td>--uploader-disabled-opacity</td>\n<td><code> @disabled-opacity;</code></td>\n</tr>\n</tbody>\n</table>\n</div>',
            h3Ids:
              '介绍:::引入:::基础用法:::上传状态:::限制上传数量:::自定义上传样式:::上传前校验:::UploaderProps <a hre:::样式变量',
            codePath: [],
          })
      },
    },
  ],
)