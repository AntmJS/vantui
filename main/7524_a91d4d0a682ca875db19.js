'use strict'
;(self.webpackChunk_antmjs_vantui = self.webpackChunk_antmjs_vantui || []).push(
  [
    [7524],
    {
      7524: function (s, n, a) {
        a.r(n),
          (n.default = {
            tile: 'TreeSelect分类选择',
            docs: '<h1>TreeSelect 分类选择</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>用于从一组相关联的数据集合中进行选择。</p>\n</div><div class="card"><h3 id="%E5%BC%95%E5%85%A5"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引入</h3>\n<p>在 Taro 文件中引入组件</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">TreeSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n</code></pre>\n</div>\n</div><h2>代码演示</h2>\n<div class="card"><h3 id="%E5%8D%95%E9%80%89%E6%A8%A1%E5%BC%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>单选模式</h3>\n<p>可以在任意位置上使用 vanTreeSelect 标签。传入对应的数据即可。此组件支持单选或多选，具体行为完全基于事件 clickItem 的实现逻辑如何为属性 activeId 赋值，当 activeId 为数组时即为多选状态。</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> { items } = <span class="hljs-variable constant_">COMMON</span>\n  <span class="hljs-keyword">const</span> [state, changeState] = react.<span class="hljs-title function_">useState</span>({\n    <span class="hljs-attr">mainActiveIndex</span>: <span class="hljs-number">0</span>,\n    <span class="hljs-attr">activeId</span>: <span class="hljs-literal">null</span>,\n  })\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">setState</span> = (<span class="hljs-params">newState</span>) =&gt; {\n    <span class="hljs-title function_">changeState</span>({\n      ...state,\n      ...newState,\n    })\n  }\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickNav</span> = (<span class="hljs-params">{ detail = {} }</span>) =&gt; {\n    <span class="hljs-title function_">setState</span>({\n      <span class="hljs-attr">mainActiveIndex</span>: detail.<span class="hljs-property">index</span> || <span class="hljs-number">0</span>,\n    })\n  }\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickItem</span> = (<span class="hljs-params">{ detail = {} }</span>) =&gt; {\n    <span class="hljs-keyword">const</span> activeId = state.<span class="hljs-property">activeId</span> === detail.<span class="hljs-property">id</span> ? <span class="hljs-literal">null</span> : detail.<span class="hljs-property">id</span>\n    <span class="hljs-title function_">setState</span>({\n      activeId,\n    })\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">TreeSelect</span>\n      <span class="hljs-attr">items</span>=<span class="hljs-string">{items}</span>\n      <span class="hljs-attr">mainActiveIndex</span>=<span class="hljs-string">{state.mainActiveIndex}</span>\n      <span class="hljs-attr">activeId</span>=<span class="hljs-string">{state.activeId}</span>\n      <span class="hljs-attr">onClickNav</span>=<span class="hljs-string">{onClickNav}</span>\n      <span class="hljs-attr">onClickItem</span>=<span class="hljs-string">{onClickItem}</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n<p>传入数据结构</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> items = [\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;浙江&#x27;</span>,\n    <span class="hljs-attr">children</span>: [\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;杭州&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,\n      },\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;温州&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,\n      },\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;宁波&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,\n        <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,\n      },\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;义乌&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,\n      },\n    ],\n  },\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;江苏&#x27;</span>,\n    <span class="hljs-attr">children</span>: [\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;南京&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,\n      },\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;无锡&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,\n      },\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;徐州&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>,\n      },\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;苏州&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>,\n      },\n    ],\n  },\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;福建&#x27;</span>,\n    <span class="hljs-attr">children</span>: [\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;泉州&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>,\n      },\n      {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;厦门&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">10</span>,\n      },\n    ],\n  },\n]\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E5%A4%9A%E9%80%89%E6%A8%A1%E5%BC%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>多选模式</h3>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> { items } = <span class="hljs-variable constant_">COMMON</span>\n  <span class="hljs-keyword">const</span> [state, changeState] = react.<span class="hljs-title function_">useState</span>({\n    <span class="hljs-attr">mainActiveIndex</span>: <span class="hljs-number">0</span>,\n    <span class="hljs-attr">activeIds</span>: [],\n  })\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">setState</span> = (<span class="hljs-params">newState</span>) =&gt; {\n    <span class="hljs-title function_">changeState</span>({\n      ...state,\n      ...newState,\n    })\n  }\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickNav</span> = (<span class="hljs-params">{ detail = {} }</span>) =&gt; {\n    <span class="hljs-title function_">setState</span>({\n      <span class="hljs-attr">mainActiveIndex</span>: detail.<span class="hljs-property">index</span> || <span class="hljs-number">0</span>,\n    })\n  }\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickItem</span> = (<span class="hljs-params">{ detail = {} }</span>) =&gt; {\n    <span class="hljs-keyword">const</span> { activeIds } = state\n    <span class="hljs-keyword">if</span> (activeIds.<span class="hljs-title function_">includes</span>(detail.<span class="hljs-property">id</span>)) {\n      activeIds.<span class="hljs-title function_">splice</span>(activeIds.<span class="hljs-title function_">indexOf</span>(detail.<span class="hljs-property">id</span>), <span class="hljs-number">1</span>)\n    } <span class="hljs-keyword">else</span> {\n      activeIds.<span class="hljs-title function_">push</span>(detail.<span class="hljs-property">id</span>)\n    }\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">info</span>(activeIds)\n    <span class="hljs-title function_">setState</span>({\n      <span class="hljs-attr">activeIds</span>: [...activeIds],\n    })\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">TreeSelect</span>\n      <span class="hljs-attr">items</span>=<span class="hljs-string">{items}</span>\n      <span class="hljs-attr">mainActiveIndex</span>=<span class="hljs-string">{state.mainActiveIndex}</span>\n      <span class="hljs-attr">activeId</span>=<span class="hljs-string">{state.activeIds}</span>\n      <span class="hljs-attr">onClickNav</span>=<span class="hljs-string">{onClickNav}</span>\n      <span class="hljs-attr">onClickItem</span>=<span class="hljs-string">{onClickItem}</span>\n      <span class="hljs-attr">max</span>=<span class="hljs-string">{2}</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>自定义内容</h3>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">TreeSelect</span>\n      <span class="hljs-attr">items</span>=<span class="hljs-string">{[{</span> <span class="hljs-attr">text:</span> &#x27;<span class="hljs-attr">自定义</span>&#x27; }]}\n      <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;55vw&quot;</span>\n      <span class="hljs-attr">mainActiveIndex</span>=<span class="hljs-string">{0}</span>\n      <span class="hljs-attr">renderContent</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">Image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://img.yzcdn.cn/vant/apple-1.jpg&quot;</span> /&gt;</span>}\n    /&gt;</span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="TreeSelectProps%20%3Ca%20h"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>TreeSelectProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tree-select.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>items</td>\n<td>分类显示所需的数据</td>\n<td><em>  {<br/>    text: number ¦ string<br/>    badge?:<br/>      ¦ number<br/>      ¦ string<br/>    dot?: boolean<br/>    disabled?: boolean<br/>    children?: {<br/>      text:<br/>        ¦ number<br/>        ¦ string<br/>      id: number ¦ string<br/>      disabled?: boolean<br/>    }[]<br/>  }[]<br/></em></td>\n<td>[]</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>activeId</td>\n<td>右侧选中项的 id，支持传入数组</td>\n<td><em>  attr:<br/>    ¦ string<br/>    ¦ number<br/>    ¦ number[]<br/>    ¦ string[]<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>mainActiveIndex</td>\n<td>左侧选中项的索引</td>\n<td><em>  number<br/></em></td>\n<td>0</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>height</td>\n<td>高度，默认单位为 px</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>300</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>max</td>\n<td>右侧项最大选中个数</td>\n<td><em>  number<br/></em></td>\n<td>Infinity</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>selectedIcon</td>\n<td>自定义右侧栏选中状态的图标</td>\n<td><em>  string<br/></em></td>\n<td>success</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onClickItem</td>\n<td>点击右侧选择项时触发</td>\n<td><em>  (<br/>    event: TouchEvent &amp; {<br/>      detail: {<br/>        text: string<br/>        id:<br/>          ¦ string<br/>          ¦ number<br/>        disabled?: boolean<br/>      }<br/>    }<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onClickNav</td>\n<td>点击左侧导航时触发</td>\n<td><em>  (event: {<br/>    detail: {<br/>      index: number<br/>    }<br/>  }) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>renderContent</td>\n<td>自定义右侧的显示内容</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考<a href="https://antmjs.github.io/vantui/#/config-provider">ConfigProvider 组件</a></p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--tree-select-font-size</td>\n<td><code> @font-size-md;</code></td>\n</tr>\n<tr>\n<td>--tree-select-nav-background-color</td>\n<td><code> @background-color;</code></td>\n</tr>\n<tr>\n<td>--tree-select-content-background-color</td>\n<td><code> @white;</code></td>\n</tr>\n<tr>\n<td>--tree-select-nav-item-padding</td>\n<td><code> @padding-sm @padding-xs @padding-sm @padding-sm;</code></td>\n</tr>\n<tr>\n<td>--tree-select-item-height</td>\n<td><code> 88px;</code></td>\n</tr>\n<tr>\n<td>--tree-select-item-active-color</td>\n<td><code> var(--primary-color);</code></td>\n</tr>\n<tr>\n<td>--tree-select-item-disabled-color</td>\n<td><code> @gray-5;</code></td>\n</tr>\n</tbody>\n</table>\n</div>',
            h3Ids:
              '介绍:::引入:::单选模式:::多选模式:::自定义内容:::TreeSelectProps <a h:::样式变量',
            codePath: [],
          })
      },
    },
  ],
)
