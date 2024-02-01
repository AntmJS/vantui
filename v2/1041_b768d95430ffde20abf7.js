"use strict";(self.webpackChunk_antmjs_vantui=self.webpackChunk_antmjs_vantui||[]).push([[1041,3465],{1041:function(s,n,a){a.r(n),n.default={tile:"Sku 商品规格选择",docs:'<h1>Sku 商品规格选择</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>基于商品规格和商品列表数据</p>\n</div><div class="card"><h3 id="%E5%BC%95%E5%85%A5"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引入</h3>\n<p>在 Taro 文件中引入组件</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Sku</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n</code></pre>\n</div><h2>代码演示</h2>\n<div class="card"><h3 id="%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>基本用法</h3>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> { sku, goodsList } = <span class="hljs-variable constant_">COMMON</span>\n  <span class="hljs-comment">// 选中的商品，可以获取自定义属性如：商品图片、价格、数量</span>\n  <span class="hljs-keyword">const</span> [currentGoods, setCurrent] = react.<span class="hljs-title function_">useState</span>()\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">itemDisable</span> = (<span class="hljs-params">goodsItem</span>) =&gt; {\n    <span class="hljs-keyword">if</span> (!goodsItem) <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>\n    <span class="hljs-comment">// 商品表可设定count为库存数，或者通过其它条件判断</span>\n    <span class="hljs-keyword">if</span> (goodsItem.<span class="hljs-property">count</span> === <span class="hljs-number">0</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Toast</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>当前选择商品：<span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">paddingBottom:</span> <span class="hljs-attr">10</span> }}&gt;</span>\n        HUAWEI手机【{currentGoods?.skuName || &#x27;--&#x27;}】\n      <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Sku</span>\n        <span class="hljs-attr">sku</span>=<span class="hljs-string">{sku}</span>\n        <span class="hljs-attr">goodsList</span>=<span class="hljs-string">{goodsList}</span>\n        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> setCurrent(e)}\n        clickAttrDisable={(e) =&gt; Toast.show(::::暂无库存::::)}\n        itemDisable={itemDisable}\n        itemRender={(it) =&gt; {\n          if (it.color) {\n            return (\n              <span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;sku-color-item&quot;</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">View</span>\n                  <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;color-item&quot;</span>\n                  <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">background:</span> <span class="hljs-attr">it.color</span> }}\n                &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>{it.name}<span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n              <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n            )\n          }\n\n          return it.name\n        }}\n      /&gt;\n    <span class="hljs-tag">&lt;/&gt;</span></span>\n  )\n}\n</code></pre>\n<p><code>sku</code> 数据格式如下</p>\n<p>须要保证<code>items[xx].id</code>是唯一的</p>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> sku = [\n  {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,\n    <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;颜色&#x27;</span>,\n    <span class="hljs-attr">items</span>: [\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;亮黑色&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">11</span>,\n        <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;#131111&#x27;</span>,\n        <span class="hljs-comment">// 自定义属性...</span>\n      },\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;釉白色&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">12</span>,\n        <span class="hljs-attr">mark</span>: <span class="hljs-string">&#x27;首发&#x27;</span>,\n        <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;#ffff&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;秘银色&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">13</span>,\n        <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;#d2cccc&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;夏日胡杨&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">14</span>,\n        <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;#dd5151&#x27;</span>,\n      },\n    ],\n  },\n  {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,\n    <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;版本&#x27;</span>,\n    <span class="hljs-attr">items</span>: [\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;8GB+128GB&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">21</span>,\n      },\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;8GB+256GB&#x27;</span>,\n        <span class="hljs-attr">id</span>: <span class="hljs-number">22</span>,\n      },\n    ],\n  },\n]\n</code></pre>\n<p><code>商品列表</code> 数据格式如下</p>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> goodsList = [\n  {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,\n    <span class="hljs-attr">skuIds</span>: [<span class="hljs-number">11</span>, <span class="hljs-number">21</span>], <span class="hljs-comment">// 可以无序</span>\n    <span class="hljs-attr">skuName</span>: <span class="hljs-string">&#x27;亮黑色&amp;8GB+128GB&#x27;</span>, <span class="hljs-comment">// 自定义属性</span>\n    <span class="hljs-comment">// 自定义属性...</span>\n  },\n  {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,\n    <span class="hljs-attr">skuIds</span>: [<span class="hljs-number">11</span>, <span class="hljs-number">22</span>],\n    <span class="hljs-attr">skuName</span>: <span class="hljs-string">&#x27;亮黑色&amp;8GB+256GB&#x27;</span>,\n    <span class="hljs-attr">count</span>: <span class="hljs-number">0</span>, <span class="hljs-comment">// 自定义属性</span>\n  },\n  {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,\n    <span class="hljs-attr">skuIds</span>: [<span class="hljs-number">12</span>, <span class="hljs-number">21</span>],\n    <span class="hljs-attr">skuName</span>: <span class="hljs-string">&#x27;釉白色&amp;8GB+128GB&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,\n    <span class="hljs-attr">skuIds</span>: [<span class="hljs-number">12</span>, <span class="hljs-number">22</span>],\n    <span class="hljs-attr">skuName</span>: <span class="hljs-string">&#x27;釉白色&amp;8GB+256GB&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,\n    <span class="hljs-attr">skuIds</span>: [<span class="hljs-number">21</span>, <span class="hljs-number">13</span>],\n    <span class="hljs-attr">skuName</span>: <span class="hljs-string">&#x27;秘银色&amp;8GB+128GB&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,\n    <span class="hljs-attr">skuIds</span>: [<span class="hljs-number">13</span>, <span class="hljs-number">22</span>],\n    <span class="hljs-attr">skuName</span>: <span class="hljs-string">&#x27;秘银色&amp;8GB+256GB&#x27;</span>,\n    <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// 无法选择的商品</span>\n  },\n  {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>,\n    <span class="hljs-attr">skuIds</span>: [<span class="hljs-number">14</span>, <span class="hljs-number">22</span>],\n    <span class="hljs-attr">skuName</span>: <span class="hljs-string">&#x27;夏日胡杨&amp;8GB+256GB&#x27;</span>,\n  },\n]\n</code></pre>\n</div><div class="card"><h3 id="SkuProps%20%3Ca%20href%3D%22ht"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>SkuProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/sku.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>样式名称</td>\n<td><em>  string<br/></em></td>\n<td>\'\'</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>goodsId</td>\n<td>默认选中的商品名称</td>\n<td><em>  number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>规格变化触发，回掉返回选中项商品，首次渲染没有传入<code>goodsId</code>，会触发</td>\n<td><em>  (<br/>    goods?: IGoodItem<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>clickAttrDisable</td>\n<td>点击 sku<code>disabled</code>的属性项触发</td>\n<td><em>  (<br/>    goods?: IGoodItem<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabledClassName</td>\n<td>不可选 sku 项样式名称</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>activeClassName</td>\n<td>选中 sku 项样式名称</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>goodsList</td>\n<td>产品包含的所有商品列表</td>\n<td><em>  IGoodItem[]<br/></em></td>\n<td>-</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>sku</td>\n<td>规格列表</td>\n<td><em>  ISkuItem[]<br/></em></td>\n<td>-</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>itemRender</td>\n<td>自定义规格项的内部渲染</td>\n<td><em>  (<br/>    attr: IAttrItem<br/>  ) =&gt; ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>itemDisable</td>\n<td>自定义当前规格项组合（即商品）是否可选, 回掉参数为空的时候直接返回 true</td>\n<td><em>  (<br/>    goodsItem?: IGoodItem<br/>  ) =&gt; boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="%E5%95%86%E5%93%81%E9%A1%B9%20IGoodItem%20%3Ca%20hre"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>商品项 IGoodItem <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/sku.d.ts">[详情]</a></h3>\n<p>其它属性不限</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>商品 ID</td>\n<td><em>  number<br/></em></td>\n</tr>\n<tr>\n<td>skuIds</td>\n<td>对应每个 sku 的 ID</td>\n<td><em>  number[]<br/></em></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否不可选择</td>\n<td><em>  boolean<br/></em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="Sku%20%E9%A1%B9%20ISkuItem%20%3Ca%20hr"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>Sku 项 ISkuItem <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/sku.d.ts">[详情]</a></h3>\n<p>其它属性不限， 须要保证不同类别的 sku 的 id 都是唯一的</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>Sku ID</td>\n<td><em>  number<br/></em></td>\n</tr>\n<tr>\n<td>name</td>\n<td>Sku 名称</td>\n<td><em>  string<br/></em></td>\n</tr>\n<tr>\n<td>items</td>\n<td>Sku 属性枚举</td>\n<td><em>  IAttrItem[]<br/></em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="Sku%20%E5%B1%9E%E6%80%A7%E9%A1%B9%20IAttrItem%20%3Ca"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>Sku 属性项 IAttrItem <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/sku.d.ts">[详情]</a></h3>\n<p>其它属性不限</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>属性 ID</td>\n<td><em>  number<br/></em></td>\n</tr>\n<tr>\n<td>name</td>\n<td>属性名称</td>\n<td><em>  string<br/></em></td>\n</tr>\n</tbody>\n</table>\n</div>',h3Ids:'介绍:::引入:::基本用法:::SkuProps <a href="ht:::商品项 IGoodItem <a hre:::Sku 项 ISkuItem <a hr:::Sku 属性项 IAttrItem <a'}}}]);