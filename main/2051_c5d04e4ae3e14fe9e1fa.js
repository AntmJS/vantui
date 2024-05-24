"use strict";(self.webpackChunk_antmjs_vantui=self.webpackChunk_antmjs_vantui||[]).push([[2051],{2051:function(s,n,a){a.r(n),n.default={tile:"PullToRefresh下拉刷新",docs:'<h1>PullToRefresh 下拉刷新</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>在列表中通过手指下拉刷新加载新内容的交互操作。</p>\n</div><div class="card"><h3 id="%E5%BC%95%E7%94%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引用</h3>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">PullToRefresh</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>基本使用</h3>\n  <div class="demo-code-show" id="pull-to-refresh__demo1_wrapper">\n  <div class="code-box">\n <div class="demo-code-tabs"><div class="code-tab-name code-tab-name-active" id="name0">demo1.tsx</div>\n<div class="copy-code-btn"></div></div>\n<div class="code-item code-item0">\n<pre><code class="language-tsx"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">View</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@tarojs/components&#x27;</span>\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PullToRefresh</span>, <span class="hljs-title class_">IPullToRefreshProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> <span class="hljs-attr">onRefresh</span>: <span class="hljs-title class_">IPullToRefreshProps</span>[<span class="hljs-string">&#x27;onRefresh&#x27;</span>] = <span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-title function_">resolve</span>(<span class="hljs-literal">undefined</span>)\n      }, <span class="hljs-number">1000</span>)\n    })\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">PullToRefresh</span> <span class="hljs-attr">onRefresh</span>=<span class="hljs-string">{onRefresh}</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">padding:</span> &#x27;<span class="hljs-attr">0</span> <span class="hljs-attr">12px</span>&#x27; }}&gt;</span>\n        {new Array(10).fill(1).map((_, index) =&gt; (\n          <span class="hljs-tag">&lt;<span class="hljs-name">View</span>\n            <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">padding:</span> <span class="hljs-attr">12</span>, <span class="hljs-attr">background:</span> &#x27;#<span class="hljs-attr">fff</span>&#x27;, <span class="hljs-attr">marginBottom:</span> <span class="hljs-attr">12</span> }}\n            <span class="hljs-attr">key</span>=<span class="hljs-string">{</span>::::_QA<span class="hljs-attr">PullToRefresh</span>::::_AB<span class="hljs-attr">index</span>}::::_QA}\n          &gt;</span>\n            {index}\n          <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n        ))}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">PullToRefresh</span>&gt;</span></span>\n  )\n}\n\n</code></pre>\n</div>\n  </div>\n  </div>\n<p>解决和滚动操作冲突问题</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Index</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [scrollTop, setTop] = <span class="hljs-title function_">useState</span>(<span class="hljs-number">0</span>)\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onscroll</span> = (<span class="hljs-params">e</span>) =&gt; <span class="hljs-title function_">setTop</span>(e.<span class="hljs-property">detail</span>.<span class="hljs-property">scrollTop</span>)\n  <span class="hljs-comment">// ....</span>\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">PullToRefresh</span> <span class="hljs-attr">disable</span>=<span class="hljs-string">{scrollTop</span> &gt;</span> 0} onRefresh={onRefresh}&gt;\n      <span class="hljs-tag">&lt;<span class="hljs-name">ScrollView</span> <span class="hljs-attr">onScroll</span>=<span class="hljs-string">{onscroll}</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>xxxx<span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ScrollView</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">PullToRefresh</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="IPullToRefreshProps%20"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>IPullToRefreshProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/pull-to-refresh.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>children</td>\n<td>-</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>pullText</td>\n<td>下拉文案</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td><code>下拉刷新</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>releaseText</td>\n<td>放开文案</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td><code>松开刷新</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loadingText</td>\n<td>加载文案</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td><code>加载中...</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>renderLoading</td>\n<td>自定义加载</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>successText</td>\n<td>加载成功文案</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td><code>刷新成功</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onRefresh</td>\n<td>触发刷新方法，返回 Promise 成功</td>\n<td><em>  () =&gt; Promise<undefined><br/></em></td>\n<td>-</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>touchMaxStart</td>\n<td>可触发下拉的 y 轴间距，相对于 PullToRefresh 组件</td>\n<td><em>  number<br/></em></td>\n<td><code>300</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>headHeight</td>\n<td>高度</td>\n<td><em>  number<br/></em></td>\n<td><code>40</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disable</td>\n<td>是否禁用</td>\n<td><em>  boolean<br/></em></td>\n<td><code>false</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>successDuration</td>\n<td>成功状态展示时长</td>\n<td><em>  number<br/></em></td>\n<td><code>1000</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>touchMinTime</td>\n<td>触摸触发拖拽的最小停留时间</td>\n<td><em>  number<br/></em></td>\n<td><code>400</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>rectWrapper</td>\n<td>微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的 className(‘.xx’)或 id(#xx), 支持当前组件获取 rect 信息</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考<a href="https://antmjs.github.io/vantui/#/config-provider">ConfigProvider 组件</a></p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--pull-to-refresh-font-size</td>\n<td><code> @font-size-md;</code></td>\n</tr>\n<tr>\n<td>--pull-to-refresh-animation-duration</td>\n<td><code> 0.4s;</code></td>\n</tr>\n</tbody>\n</table>\n</div>',h3Ids:"介绍:::引用:::基本使用:::IPullToRefreshProps :::样式变量",codePath:[]}}}]);