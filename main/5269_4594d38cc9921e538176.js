'use strict'
;(self.webpackChunk_antmjs_vantui = self.webpackChunk_antmjs_vantui || []).push(
  [
    [5269],
    {
      5269: function (s, a, n) {
        n.r(a),
          (a.default = {
            tile: 'Collapse折叠面板',
            docs: '<h1>Collapse 折叠面板</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。</p>\n</div><div class="card"><h3 id="%E5%BC%95%E5%85%A5"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引入</h3>\n<p>在 Taro 文件中引入组件</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Collapse</span>, <span class="hljs-title class_">CollapseItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n</code></pre>\n</div>\n</div><h2>代码演示</h2>\n<div class="card"><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>基础用法</h3>\n<p>通过<code>value</code>控制展开的面板列表，<code>activeNames</code>为数组格式。</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [values, setValues] = react.<span class="hljs-title function_">useState</span>([<span class="hljs-string">&#x27;1&#x27;</span>])\n  <span class="hljs-keyword">const</span> [dynamic, setdynamic] = react.<span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>)\n\n  react.<span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-title function_">setdynamic</span>(<span class="hljs-string">&#x27;【动态内容动态内容动态内容动态内容动态内容动态内容动态内容】&#x27;</span>)\n    }, <span class="hljs-number">1000</span>)\n  }, [])\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Collapse</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{values}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> setValues(e.detail)}&gt;\n      <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;有赞微商城&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n        提供多样店铺模板，快速搭建网上商城\n        {dynamic}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;有赞零售&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n        网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失\n        {dynamic}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;有赞美业&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\n        线上拓客，随时预约，贴心顺手的开单收银\n        {dynamic}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Collapse</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E6%89%8B%E9%A3%8E%E7%90%B4"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>手风琴</h3>\n<p>通过<code>accordion</code>可以设置为手风琴模式，最多展开一个面板，此时<code>activeName</code>为字符串格式。</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [values, setValues] = react.<span class="hljs-title function_">useState</span>([<span class="hljs-string">&#x27;1&#x27;</span>])\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Collapse</span> <span class="hljs-attr">accordion</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{values}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> setValues(e.detail)}&gt;\n      <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;有赞微商城&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n        提供多样店铺模板，快速搭建网上商城\n      <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;有赞零售&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n        网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失\n      <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;有赞美业&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n        线上拓客，随时预约，贴心顺手的开单收银\n      <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Collapse</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>事件监听</h3>\n<p><code>vanCollapse</code> 提供了 <code>change</code>, <code>open</code> 和 <code>close</code> 事件。<code>change</code> 事件在面板切换时触发，<code>open</code> 事件在面板展开时触发，<code>close</code> 事件在面板关闭时触发。</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [values, setValues] = react.<span class="hljs-title function_">useState</span>([<span class="hljs-string">&#x27;1&#x27;</span>])\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Collapse</span>\n        <span class="hljs-attr">value</span>=<span class="hljs-string">{values}</span>\n        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> setValues(e.detail)}\n        onOpen={(e) =&gt; Toast.show(::::_QA打开::::_ABe.detail}::::_QA)}\n        onClose={(e) =&gt; Toast.show(::::_QA关闭::::_ABe.detail}::::_QA)}\n      &gt;\n        <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;有赞微商城&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n          提供多样店铺模板，快速搭建网上商城\n        <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;有赞零售&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n          网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失\n        <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;有赞美业&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n          线上拓客，随时预约，贴心顺手的开单收银\n        <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">Collapse</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Toast</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;collapse-mess&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%87%E9%A2%98%E5%86%85%E5%AE%B9"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>自定义标题内容</h3>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [values, setValues] = react.<span class="hljs-title function_">useState</span>([<span class="hljs-string">&#x27;1&#x27;</span>])\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Collapse</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{values}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> setValues(e.detail)}&gt;\n      <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span>\n        <span class="hljs-attr">renderTitle</span>=<span class="hljs-string">{</span>\n          &lt;<span class="hljs-attr">View</span>&gt;</span>\n            有赞微商城\n            <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;question-o&quot;</span> /&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n        }\n        name=&quot;1&quot;\n      &gt;\n        提供多样店铺模板，快速搭建网上商城\n      <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;有赞零售&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n        网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失\n      <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;有赞美业&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n        线上拓客，随时预约，贴心顺手的开单收银\n      <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Collapse</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="CollapseProps%20%3Ca%20hre"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>CollapseProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/collapse.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>-</td>\n<td><em>  attr:<br/>    ¦ Array&lt;<br/>        string ¦ number<br/>      &gt;<br/>    ¦ string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>accordion</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>border</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>-</td>\n<td><em>  attr:<br/>    ¦ Array<ReactNode><br/>    ¦ ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>-</td>\n<td><em>  (<br/>    event: ITouchEvent<br/>  ) =&gt; any<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onOpen</td>\n<td>-</td>\n<td><em>  (<br/>    event: ITouchEvent<br/>  ) =&gt; any<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>-</td>\n<td><em>  (<br/>    event: ITouchEvent<br/>  ) =&gt; any<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="CollapseItemProps%20%3Ca"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>CollapseItemProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/collapse.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>-</td>\n<td><em>  string ¦ number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>-</td>\n<td><em>  string ¦ number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>value</td>\n<td>-</td>\n<td><em>  string ¦ number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>对应 Icon 的 name</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>label</td>\n<td>-</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>false</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>clickable</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>false</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>border</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>true</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>isLink</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>true</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>-</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>renderTitle</td>\n<td>-</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>renderIcon</td>\n<td>-</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>renderRightIcon</td>\n<td>isLink 设置为 false</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>renderValue</td>\n<td>-</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>-</td>\n<td><em>  &quot;large&quot;<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考<a href="https://antmjs.github.io/vantui/#/config-provider">ConfigProvider 组件</a></p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--collapse-item-transition-duration</td>\n<td><code> 0.3s;</code></td>\n</tr>\n<tr>\n<td>--collapse-item-content-padding</td>\n<td><code> 30px;</code></td>\n</tr>\n<tr>\n<td>--collapse-item-content-font-size</td>\n<td><code> 26px;</code></td>\n</tr>\n<tr>\n<td>--collapse-item-content-line-height</td>\n<td><code> 1.5;</code></td>\n</tr>\n<tr>\n<td>--collapse-item-content-text-color</td>\n<td><code> @gray-6;</code></td>\n</tr>\n<tr>\n<td>--collapse-item-content-background-color</td>\n<td><code> @white;</code></td>\n</tr>\n<tr>\n<td>--collapse-item-title-disabled-color</td>\n<td><code> @gray-5;</code></td>\n</tr>\n</tbody>\n</table>\n</div>',
            h3Ids:
              '介绍:::引入:::基础用法:::手风琴:::事件监听:::自定义标题内容:::CollapseProps <a hre:::CollapseItemProps <a:::样式变量',
            codePath: [],
          })
      },
    },
  ],
)
