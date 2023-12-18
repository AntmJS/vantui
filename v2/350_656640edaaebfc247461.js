'use strict'
;(self.webpackChunk_antmjs_vantui = self.webpackChunk_antmjs_vantui || []).push(
  [
    [350],
    {
      350: function (s, n, a) {
        a.r(n),
          (n.default = {
            tile: 'Dialog弹出框',
            docs: '<h1>Dialog 弹出框</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。</p>\n<blockquote>\n<p>注意：1.8.0 以下的版本取消按钮会触发 catch。1.8.0 及以后的版本取消按钮会触发 then 需要通过返回的 value 为 confirm 或者 cancel 来判断是否点了确认还是取消</p>\n</blockquote>\n</div><div class="card"><h3 id="%E5%BC%95%E5%85%A5"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引入</h3>\n<p>在 Taro 文件中引入组件</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n</code></pre>\n</div>\n</div><h2>代码演示</h2>\n<div class="card"><h3 id="%E6%8F%90%E7%A4%BA%E5%BC%B9%E7%AA%97"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>提示弹窗</h3>\n<ul>\n<li>alart 用于提示一些消息，只包含一个确认按钮。</li>\n<li>confirm 用于确认消息，包含取消和确认按钮。</li>\n</ul>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [value, setValue] = react.<span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>)\n  <span class="hljs-keyword">const</span> alert = react.<span class="hljs-title function_">useCallback</span>(<span class="hljs-function">(<span class="hljs-params">title</span>) =&gt;</span> {\n    <span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">alert</span>({\n      <span class="hljs-attr">title</span>: title || <span class="hljs-string">&#x27;&#x27;</span>,\n      <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;弹窗内容&#x27;</span>,\n      <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;vanDialog0&#x27;</span>,\n    }).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;dialog result&#x27;</span>, value)\n    })\n  })\n\n  <span class="hljs-keyword">const</span> confirm = react.<span class="hljs-title function_">useCallback</span>(<span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">confirm</span>({\n      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;标题&#x27;</span>,\n      <span class="hljs-attr">message</span>: (\n        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Input</span>\n          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入内容&quot;</span>\n          <span class="hljs-attr">value</span>=<span class="hljs-string">{value}</span>\n          <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> setValue(e.detail.value)}\n        /&gt;</span>\n      ),\n      <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;vanDialog0&#x27;</span>,\n    }).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;dialog result&#x27;</span>, value)\n    })\n  }, [value])\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;vanDialog0&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;提示弹窗&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> alert(&#x27;提示一下&#x27;)} /&gt;\n      <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;提示弹窗（无标题）&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> alert()} /&gt;\n      <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;确认弹窗&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{confirm}</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E5%9C%86%E8%A7%92%E6%8C%89%E9%92%AE%E9%A3%8E%E6%A0%BC"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>圆角按钮风格</h3>\n<p>将 theme 选项设置为 <code>roundButton</code> 可以展示圆角按钮风格的弹窗。</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> alert = react.<span class="hljs-title function_">useCallback</span>(<span class="hljs-function">(<span class="hljs-params">title</span>) =&gt;</span> {\n    <span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">alert</span>({\n      <span class="hljs-attr">title</span>: title || <span class="hljs-string">&#x27;&#x27;</span>,\n      <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;弹窗内容&#x27;</span>,\n      <span class="hljs-attr">theme</span>: <span class="hljs-string">&#x27;roundButton&#x27;</span>,\n      <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;#vanDialog1&#x27;</span>,\n    }).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;dialog result&#x27;</span>, value)\n    })\n  })\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;vanDialog1&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;提示弹窗&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> alert(&#x27;提示一下&#x27;)} /&gt;\n      <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;提示弹窗（无标题）&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> alert()} /&gt;\n    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E5%BC%82%E6%AD%A5%E5%85%B3%E9%97%AD"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>异步关闭</h3>\n<p>通过 <code>beforeClose</code> 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> alert = react.<span class="hljs-title function_">useCallback</span>(<span class="hljs-function">(<span class="hljs-params">title</span>) =&gt;</span> {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeClose</span> = (<span class="hljs-params">action</span>) =&gt;\n      <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-keyword">if</span> (action === <span class="hljs-string">&#x27;confirm&#x27;</span>) {\n            <span class="hljs-title function_">resolve</span>(<span class="hljs-literal">true</span>)\n          } <span class="hljs-keyword">else</span> {\n            <span class="hljs-comment">// 拦截取消操作</span>\n            <span class="hljs-title function_">resolve</span>(<span class="hljs-literal">false</span>)\n          }\n        }, <span class="hljs-number">1000</span>)\n      })\n    <span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">alert</span>({\n      <span class="hljs-attr">title</span>: title || <span class="hljs-string">&#x27;&#x27;</span>,\n      <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;弹窗内容&#x27;</span>,\n      <span class="hljs-attr">theme</span>: <span class="hljs-string">&#x27;roundButton&#x27;</span>,\n      <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;vanDialog2&#x27;</span>,\n      beforeClose,\n    }).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;dialog result&#x27;</span>, value)\n    })\n  })\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;vanDialog2&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;异步关闭&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> alert(&#x27;点击等待1s关闭&#x27;)} /&gt;\n    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E7%BB%84%E4%BB%B6%E8%B0%83%E7%94%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>组件调用</h3>\n<p>如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [show, setShow] = react.<span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>)\n  <span class="hljs-keyword">const</span> [value, setValue] = react.<span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>)\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>\n        <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;vanDialog3&quot;</span>\n        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>\n        <span class="hljs-attr">showCancelButton</span>\n        <span class="hljs-attr">confirmButtonOpenType</span>=<span class="hljs-string">&quot;getUserInfo&quot;</span>\n        <span class="hljs-attr">show</span>=<span class="hljs-string">{show}</span>\n        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> setShow(false)}\n      &gt;\n        <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入内容&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> setValue(e.detail)} /&gt;\n        <span class="hljs-tag">&lt;<span class="hljs-name">Image</span>\n          <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo-image&quot;</span>\n          <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;240px&quot;</span>\n          <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg&quot;</span>\n        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Image</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;组件调用&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> setShow(true)} /&gt;\n    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="DialogProps%20%3Ca%20href%3D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>DialogProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dialog.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>-</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>width</td>\n<td>-</td>\n<td><em>  string ¦ number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>zIndex</td>\n<td>-</td>\n<td><em>  number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>theme</td>\n<td>-</td>\n<td><em>  &quot;round-button&quot;<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>cancelButtonColor</td>\n<td>-</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>confirmButtonColor</td>\n<td>-</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onConfirm</td>\n<td>-</td>\n<td><em>  (event: {<br/>    detail: {<br/>      action: string<br/>      dialog?: {<br/>        dialog: any<br/>      }<br/>    }<br/>  }) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>-</td>\n<td><em>  (event: {<br/>    detail: {<br/>      action: string<br/>      dialog?: {<br/>        dialog: any<br/>      }<br/>    }<br/>  }) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>-</td>\n<td><em>  (event: {<br/>    detail: string<br/>  }) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>message</td>\n<td>-</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>selector</td>\n<td>-</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>ariaLabel</td>\n<td>-</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>-</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>-</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>transition</td>\n<td>-</td>\n<td><em>  &quot;fade&quot; ¦ &quot;none&quot;<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>asyncClose</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>beforeClose</td>\n<td>-</td>\n<td><em>  (<br/>    action: string<br/>  ) =&gt;<br/>    ¦ Promise&lt;<br/>        void ¦ boolean<br/>      &gt;<br/>    ¦ void<br/>    ¦ boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>messageAlign</td>\n<td>-</td>\n<td><em>  &quot;left&quot; ¦ &quot;right&quot;<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>confirmButtonText</td>\n<td>-</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>cancelButtonText</td>\n<td>-</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>showConfirmButton</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>showCancelButton</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>closeOnClickOverlay</td>\n<td>-</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>confirmButtonOpenType</td>\n<td>-</td>\n<td><em>  TaroButtonProps.OpenType<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>renderTitle</td>\n<td>-</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考<a href="https://antmjs.github.io/vantui/#/config-provider">ConfigProvider 组件</a></p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--dialog-width</td>\n<td><code> 640px;</code></td>\n</tr>\n<tr>\n<td>--dialog-small-screen-width</td>\n<td><code> 90%;</code></td>\n</tr>\n<tr>\n<td>--dialog-font-size</td>\n<td><code> @font-size-lg;</code></td>\n</tr>\n<tr>\n<td>--dialog-border-radius</td>\n<td><code> 32px;</code></td>\n</tr>\n<tr>\n<td>--dialog-background-color</td>\n<td><code> @white;</code></td>\n</tr>\n<tr>\n<td>--dialog-header-font-weight</td>\n<td><code> @font-weight-bold;</code></td>\n</tr>\n<tr>\n<td>--dialog-header-line-height</td>\n<td><code> 48px;</code></td>\n</tr>\n<tr>\n<td>--dialog-header-padding-top</td>\n<td><code> @padding-lg;</code></td>\n</tr>\n<tr>\n<td>--dialog-header-isolated-padding</td>\n<td><code> @padding-lg 0;</code></td>\n</tr>\n<tr>\n<td>--dialog-message-padding</td>\n<td><code> @padding-lg;</code></td>\n</tr>\n<tr>\n<td>--dialog-message-font-size</td>\n<td><code> @font-size-md;</code></td>\n</tr>\n<tr>\n<td>--dialog-message-line-height</td>\n<td><code> 40px;</code></td>\n</tr>\n<tr>\n<td>--dialog-message-max-height</td>\n<td><code> 60vh;</code></td>\n</tr>\n<tr>\n<td>--dialog-has-title-message-text-color</td>\n<td><code> @gray-7;</code></td>\n</tr>\n<tr>\n<td>--dialog-has-title-message-padding-top</td>\n<td><code> @padding-xs;</code></td>\n</tr>\n<tr>\n<td>--dialog-cancel-button-color</td>\n<td><code> @gray-7;</code></td>\n</tr>\n<tr>\n<td>--dialog-confirm-button-color</td>\n<td><code> @text-link-color;</code></td>\n</tr>\n</tbody>\n</table>\n</div>',
            h3Ids:
              '介绍:::引入:::提示弹窗:::圆角按钮风格:::异步关闭:::组件调用:::DialogProps <a href=:::样式变量',
            codePath: [],
          })
      },
    },
  ],
)