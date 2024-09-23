'use strict'
;(self.webpackChunk_antmjs_vantui = self.webpackChunk_antmjs_vantui || []).push(
  [
    [9706],
    {
      4562: function (s, n, t) {
        t.r(n),
          (n.default = {
            tile: 'DatetimePicker时间选择',
            docs: '<h1>DatetimePicker 时间选择</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>用于选择时间，支持日期、时分等时间维度，通常与 <a href="#/popup">弹出层</a> 组件配合使用。</p>\n<blockquote>\n<p><code>v3.5</code>由于<code>picker</code>新增<code>mode=content</code>模式，当前 DatetimePicker 版本做了相应适配，这个模式下面 onInput 再确认的时候触发，value 支持字符串格式. 对之前版本平铺模式存在的影响，<code>onConfirm</code>输出的具体值为<code>YYYY-MM-DD HH:mm:ss</code>的时间格式，可以通过<code>formtValue</code>修改，如改成时间戳返回</p>\n</blockquote>\n</div><div class="card"><h3 id="%E5%BC%95%E5%85%A5"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引入</h3>\n<p>在 Taro 文件中引入组件</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">DatetimePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n</code></pre>\n</div>\n</div><h2>代码演示</h2>\n<div class="card"><h3 id="%E9%80%89%E6%8B%A9%E5%AE%8C%E6%95%B4%E6%97%B6%E9%97%B4"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>选择完整时间</h3>\n<p><code>value</code> 为 Date 对象。</p>\n  <div class="demo-code-show" id="datetime-picker__demo1_wrapper">\n  <div class="code-box">\n <div class="demo-code-tabs"><div class="code-tab-name code-tab-name-active" id="name0">demo1.tsx</div>\n<div class="copy-code-btn"></div></div>\n<div class="code-item code-item0">\n<pre><code class="language-tsx"><span class="hljs-comment">/* eslint-disable */</span>\n<span class="hljs-keyword">import</span> react <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DatetimePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [state, setState] = react.<span class="hljs-title function_">useState</span>({\n    <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2018</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>).<span class="hljs-title function_">getTime</span>(),\n    <span class="hljs-attr">currentDate</span>: <span class="hljs-string">&#x27;2020-12-12 09:09:12&#x27;</span>,\n  })\n\n  <span class="hljs-keyword">const</span> onInput = react.<span class="hljs-title function_">useCallback</span>(\n    <span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) {\n      <span class="hljs-title function_">setState</span>({\n        ...state,\n        <span class="hljs-attr">currentDate</span>: event.<span class="hljs-property">detail</span>.<span class="hljs-property">value</span>,\n      })\n    },\n    [state],\n  )\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>\n      <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;content&quot;</span>\n      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime&quot;</span>\n      <span class="hljs-attr">value</span>=<span class="hljs-string">{state.currentDate}</span>\n      <span class="hljs-attr">minDate</span>=<span class="hljs-string">{state.minDate}</span>\n      <span class="hljs-attr">onInput</span>=<span class="hljs-string">{onInput}</span>\n    /&gt;</span></span>\n  )\n}\n\n</code></pre>\n</div>\n  </div>\n  </div>\n</div><div class="card"><h3 id="%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>不同类型</h3>\n<p><code>value</code> 为 时间戳，<code>mode=content</code>的时候可以传入字符串如<code>2012年12月12日</code>，此时不支持传入 <code>formatter</code> 函数对选项文字进行处理。</p>\n  <div class="demo-code-show" id="datetime-picker__demo2_wrapper">\n  <div class="code-box">\n <div class="demo-code-tabs"><div class="code-tab-name code-tab-name-active" id="name0">demo2.tsx</div>\n<div class="copy-code-btn"></div></div>\n<div class="code-item code-item0">\n<pre><code class="language-tsx"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">View</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@tarojs/components&#x27;</span>\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span>, <span class="hljs-title class_">DatetimePicker</span>, <span class="hljs-title class_">Form</span>, <span class="hljs-title class_">FormItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> formIt = <span class="hljs-title class_">Form</span>.<span class="hljs-title function_">useForm</span>()\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">showFormFields</span> = (<span class="hljs-params"></span>) =&gt; {\n    formIt.<span class="hljs-title function_">validateFields</span>(<span class="hljs-function">(<span class="hljs-params">_, res</span>) =&gt;</span> {\n      <span class="hljs-title function_">alert</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(res))\n    })\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Form</span>\n        <span class="hljs-attr">initialValues</span>=<span class="hljs-string">{{</span>\n          <span class="hljs-attr">date:</span> &#x27;<span class="hljs-attr">2020-12-12</span> <span class="hljs-attr">00:00:00</span>&#x27;,\n          <span class="hljs-attr">dateMonth:</span> &#x27;<span class="hljs-attr">2021-01-01</span>&#x27;,\n          <span class="hljs-attr">time:</span> &#x27;<span class="hljs-attr">13:00</span>&#x27;,\n        }}\n        <span class="hljs-attr">form</span>=<span class="hljs-string">{formIt}</span>\n      &gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span>\n          <span class="hljs-attr">valueFormat</span>=<span class="hljs-string">{(e)</span> =&gt;</span> e.detail.value}\n          trigger=&quot;onInput&quot;\n          label=&quot;日期选择&quot;\n          name=&quot;date&quot;\n          controllFlexEnd\n          borderBottom\n        &gt;\n          <span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>\n            <span class="hljs-attr">showArrowRight</span>\n            <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;content&quot;</span>\n            <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>\n            <span class="hljs-attr">minDate</span>=<span class="hljs-string">{new</span> <span class="hljs-attr">Date</span>(<span class="hljs-attr">2018</span>, <span class="hljs-attr">0</span>, <span class="hljs-attr">1</span>)<span class="hljs-attr">.getTime</span>()}\n            <span class="hljs-attr">renderContent</span>=<span class="hljs-string">{(d)</span> =&gt;</span> {\n              if (d &amp;&amp; d.length) {\n                return ::::_QA::::_ABd[0]}年::::_ABd[1]}月::::_ABd[2]}日::::_QA\n              } else return &#x27;请选择&#x27;\n            }}\n          /&gt;\n        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span>\n          <span class="hljs-attr">valueFormat</span>=<span class="hljs-string">{(e)</span> =&gt;</span> e.detail.value}\n          trigger=&quot;onInput&quot;\n          label=&quot;年月选择&quot;\n          name=&quot;dateMonth&quot;\n          controllFlexEnd\n          borderBottom\n        &gt;\n          <span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>\n            <span class="hljs-attr">showArrowRight</span>\n            <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;content&quot;</span>\n            <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>\n            <span class="hljs-attr">minDate</span>=<span class="hljs-string">{new</span> <span class="hljs-attr">Date</span>(<span class="hljs-attr">2018</span>, <span class="hljs-attr">0</span>, <span class="hljs-attr">1</span>)<span class="hljs-attr">.getTime</span>()}\n            <span class="hljs-attr">renderContent</span>=<span class="hljs-string">{(d)</span> =&gt;</span> {\n              if (d &amp;&amp; d.length) {\n                return ::::_QA::::_ABd[0]}年::::_ABd[1]}月::::_QA\n              } else return &#x27;请选择&#x27;\n            }}\n          /&gt;\n        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span>\n          <span class="hljs-attr">valueFormat</span>=<span class="hljs-string">{(e)</span> =&gt;</span> e.detail.value}\n          trigger=&quot;onInput&quot;\n          label=&quot;时间选择&quot;\n          name=&quot;time&quot;\n          controllFlexEnd\n          borderBottom\n        &gt;\n          <span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>\n            <span class="hljs-attr">showArrowRight</span>\n            <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;content&quot;</span>\n            <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>\n            <span class="hljs-attr">minDate</span>=<span class="hljs-string">{new</span> <span class="hljs-attr">Date</span>(<span class="hljs-attr">2018</span>, <span class="hljs-attr">0</span>, <span class="hljs-attr">1</span>)<span class="hljs-attr">.getTime</span>()}\n          /&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>\n        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n        <span class="hljs-attr">block</span>\n        <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">marginTop:</span> &#x27;<span class="hljs-attr">20px</span>&#x27; }}\n        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showFormFields}</span>\n      &gt;</span>\n        确定\n      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>\n  )\n}\n\n</code></pre>\n</div>\n  </div>\n  </div>\n</div><div class="card"><h3 id="%E9%80%89%E9%A1%B9%E8%BF%87%E6%BB%A4%E5%99%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>选项过滤器</h3>\n<p>通过传入 <code>filter</code> 函数，可以对选项数组进行过滤，实现自定义时间间隔。</p>\n  <div class="demo-code-show" id="datetime-picker__demo3_wrapper">\n  <div class="code-box">\n <div class="demo-code-tabs"><div class="code-tab-name code-tab-name-active" id="name0">demo3.tsx</div>\n<div class="copy-code-btn"></div></div>\n<div class="code-item code-item0">\n<pre><code class="language-tsx"><span class="hljs-comment">/* eslint-disable */</span>\n<span class="hljs-keyword">import</span> react <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DatetimePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [state, setState] = react.<span class="hljs-title function_">useState</span>({\n    <span class="hljs-attr">currentDate</span>: <span class="hljs-string">&#x27;12:00&#x27;</span>,\n    <span class="hljs-attr">minHour</span>: <span class="hljs-number">10</span>,\n    <span class="hljs-attr">maxHour</span>: <span class="hljs-number">20</span>,\n  })\n\n  <span class="hljs-keyword">const</span> onInput = react.<span class="hljs-title function_">useCallback</span>(\n    <span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) {\n      <span class="hljs-title function_">setState</span>({\n        ...state,\n        <span class="hljs-attr">currentDate</span>: event.<span class="hljs-property">detail</span>,\n      })\n    },\n    [state],\n  )\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>\n      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>\n      <span class="hljs-attr">value</span>=<span class="hljs-string">{state.currentDate}</span>\n      <span class="hljs-attr">minHour</span>=<span class="hljs-string">{state.minHour}</span>\n      <span class="hljs-attr">maxHour</span>=<span class="hljs-string">{state.maxHour}</span>\n      <span class="hljs-attr">onInput</span>=<span class="hljs-string">{onInput}</span>\n      <span class="hljs-attr">filter</span>=<span class="hljs-string">{(type,</span> <span class="hljs-attr">options</span>) =&gt;</span> {\n        if (type === &#x27;minute&#x27;) {\n          return options.filter((option) =&gt; Number(option) % 5 === 0)\n        }\n\n        return options\n      }}\n    /&gt;</span>\n  )\n}\n\n</code></pre>\n</div>\n  </div>\n  </div>\n</div><div class="card"><h3 id="DatetimePickerProps%20"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>DatetimePickerProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/datetime-picker.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>选项的值，注意：DatetimePicker 为非受控组件，动态改变请使用组件实例方法<code>updateCurrentValue</code></td>\n<td><em>  attr:<br/>    ¦ string<br/>    ¦ number<br/>    ¦ Date<br/></em></td>\n<td>null</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>filter</td>\n<td>对选项数组进行过滤，实现自定义时间间隔</td>\n<td><em>  (<br/>    type: string,<br/>    values: (<br/>      ¦ string<br/>      ¦ number<br/>    )[]<br/>  ) =&gt; (number ¦ string)[]<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>时间类型，不建议动态修改</td>\n<td><em>  attr:<br/>    ¦ &quot;datetime&quot;<br/>    ¦ &quot;date&quot;<br/>    ¦ &quot;year-month&quot;<br/>    ¦ &quot;time&quot;<br/></em></td>\n<td>datetime</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>showToolbar</td>\n<td>是否显示顶部栏</td>\n<td><em>  boolean<br/></em></td>\n<td>true</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>选项格式化函数</td>\n<td><em>  (<br/>    type: string,<br/>    value: string ¦ number<br/>  ) =&gt; number ¦ string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>minDate</td>\n<td>可选的最小时间，精确到分钟</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>十年前</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>maxDate</td>\n<td>可选的最大时间，精确到分钟</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>十年后</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>minHour</td>\n<td>可选的最小小时，针对 type=time</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>0</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>maxHour</td>\n<td>可选的最大小时，针对 type=time</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>23</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>minMinute</td>\n<td>可选的最小分钟，针对 type=time</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>0</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>maxMinute</td>\n<td>可选的最大分钟，针对 type=time</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>59</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onInput</td>\n<td><code>mode!==content</code>当值变化时触发的事件,<code>mode===content</code>时确认按钮触发</td>\n<td><em>  (<br/>    e: DatetimePickerEventsByValue<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>当值变化时触发的事件</td>\n<td><em>  (<br/>    e: DatetimePickerEventsByInstance<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onConfirm</td>\n<td>点击完成按钮时触发的事件</td>\n<td><em>  (<br/>    e: DatetimePickerEventsByValue<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>点击取消按钮时触发的事件</td>\n<td><em>  () =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onTrigger</td>\n<td>弹窗修改外面的值</td>\n<td><em>  (<br/>    e: DatetimePickerEventsByValue<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>formatValue</td>\n<td>格式化确认按钮返回的数组数据</td>\n<td><em>  (<br/>    e: string[]<br/>  ) =&gt; string ¦ number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="onInput%E3%80%81onConfirm%20%E7%9A%84%E5%9B%9E"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>onInput、onConfirm 的回掉参数 <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/datetime-picker.d.ts">[详情]</a></h3>\n<p>继承了@taro/components 的 ITouchEvent</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>detail</td>\n<td>选项的值</td>\n<td><em>  {<br/>    value?:<br/>      ¦ string<br/>      ¦ number<br/>  }<br/></em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="onChange%20%E7%9A%84%E5%9B%9E%E6%8E%89%E5%8F%82%E6%95%B0%20%3Ca%20hr"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>onChange 的回掉参数 <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/datetime-picker.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>方法</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>detail</td>\n<td>包含每项的值 columns、当前时间 innerValue、手动设置列数据 setColumns、更新某列值 updateColumnValue</td>\n<td><em>  {<br/>    datetimePicker: {<br/>      columns: (<br/>        ¦ string<br/>        ¦ number<br/>      )[]<br/>      setColumns: (<br/>        columns: (<br/>          ¦ string<br/>          ¦ number<br/>        )[]<br/>      ) =&gt; void<br/>      innerValue: Date<br/>      updateColumnValue: (<br/>        value: string<br/>      ) =&gt; Promise<string><br/>    }<br/>  }<br/></em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%20%3Ca%20href%3D%22https%3A"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>组件实例 <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/datetime-picker.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>方法</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>columns</td>\n<td>-</td>\n<td><em>  (<br/>    ¦ string<br/>    ¦ number<br/>  )[]<br/></em></td>\n</tr>\n<tr>\n<td>setColumns</td>\n<td>-</td>\n<td><em>  (<br/>    columns: (<br/>      ¦ string<br/>      ¦ number<br/>    )[]<br/>  ) =&gt; void<br/></em></td>\n</tr>\n<tr>\n<td>innerValue</td>\n<td>-</td>\n<td><em>  Date<br/></em></td>\n</tr>\n<tr>\n<td>updateColumnValue</td>\n<td>-</td>\n<td><em>  (<br/>    value: string<br/>  ) =&gt; Promise<string><br/></em></td>\n</tr>\n<tr>\n<td>pickerInstance</td>\n<td>-</td>\n<td><em>  IPickerInstance<br/></em></td>\n</tr>\n<tr>\n<td>updateCurrentValue</td>\n<td>-</td>\n<td><em>  (<br/>    currentValue:<br/>      ¦ string<br/>      ¦ number<br/>      ¦ Date<br/>  ) =&gt; void<br/></em></td>\n</tr>\n</tbody>\n</table>\n</div>',
            h3Ids:
              '介绍:::引入:::选择完整时间:::不同类型:::选项过滤器:::DatetimePickerProps :::onInput、onConfirm 的回:::onChange 的回掉参数 <a hr:::组件实例 <a href="https:',
            codePath: [],
          })
      },
    },
  ],
)
