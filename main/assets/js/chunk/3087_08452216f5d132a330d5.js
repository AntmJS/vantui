/*! For license information please see 3087_08452216f5d132a330d5.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3087],{"7430":function(e,t,r){r.d(t,{"pf":function(){return a},"G7":function(){return i},"Ho":function(){return c},"xv":function(){return l},"zx":function(){return s},"l0":function(){return u},"gx":function(){return p},"C3":function(){return f},"Ee":function(){return d},"nk":function(){return h},"Xz":function(){return m},"gO":function(){return v}});var n=r(2784),o=r(4123),a=((0,o.Z)("taro-cover-image-core"),(0,o.Z)("taro-cover-view-core"),(0,o.Z)("taro-match-media-core"),(0,o.Z)("taro-movable-area-core"),(0,o.Z)("taro-movable-view-core"),(0,o.Z)("taro-page-container-core"),(0,o.Z)("taro-root-portal-core"),(0,o.Z)("taro-scroll-view-core")),i=((0,o.Z)("taro-share-element-core"),(0,o.Z)("taro-swiper-core"),(0,o.Z)("taro-swiper-item-core"),(0,o.Z)("taro-view-core")),c=((0,o.Z)("taro-icon-core"),(0,o.Z)("taro-progress-core"),(0,o.Z)("taro-rich-text-core")),l=(0,o.Z)("taro-text-core"),s=(0,o.Z)("taro-button-core"),u=((0,o.Z)("taro-checkbox-core"),(0,o.Z)("taro-checkbox-group-core"),(0,o.Z)("taro-editor-core"),(0,o.Z)("taro-form-core")),p=((0,o.Z)("taro-keyboard-accessory-core"),(0,o.Z)("taro-label-core"),(0,o.Z)("taro-picker-core"),(0,o.Z)("taro-picker-view-core"),(0,o.Z)("taro-picker-view-column-core"),(0,o.Z)("taro-radio-core"),(0,o.Z)("taro-radio-group-core"),(0,o.Z)("taro-slider-core"),(0,o.Z)("taro-switch-core"),(0,o.Z)("taro-textarea-core")),f=((0,o.Z)("taro-functional-page-navigator-core"),(0,o.Z)("taro-navigator-core")),d=((0,o.Z)("taro-navigation-bar-core"),(0,o.Z)("taro-audio-core"),(0,o.Z)("taro-camera-core"),(0,o.Z)("taro-image-core")),h=((0,o.Z)("taro-live-player-core"),(0,o.Z)("taro-live-pusher-core"),(0,o.Z)("taro-video-core")),m=((0,o.Z)("taro-voip-room-core"),(0,o.Z)("taro-map-core"),(0,o.Z)("taro-canvas-core")),v=((0,o.Z)("taro-ad-core"),(0,o.Z)("taro-ad-custom-core"),(0,o.Z)("taro-official-account-core"),(0,o.Z)("taro-open-data-core"),(0,o.Z)("taro-web-view-core"),(0,o.Z)("taro-page-meta-core"),n.Fragment);(0,o.Z)("taro-custom-wrapper-core")},"4123":function(e,t,r){var n=r(6666),o=r(6234),a=r(6522),i=r(9249),c=r(7371),l=r(5754),s=r(1987),u=r(5058),p=r(8079),f=r(2784);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}f.createElement;var d="taro-scroll-view-core",h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||h.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,n,o){var a=e.ref.current,i=o[r],c=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&a.setAttribute(r,i),t===d){if("scrollTop"===r)return void(a.mpScrollTop=i);if("scrollLeft"===r)return void(a.mpScrollLeft=i);if("scrollIntoView"===r)return void(a.mpScrollIntoView=i)}if("function"==typeof i&&r.match(/^on[A-Z]/)){var l=r.substr(2).toLowerCase(),s=i;return t===d&&"scroll"===l&&(s=function fn(e){e instanceof CustomEvent&&i.apply(null,Array.from(arguments))}),e.eventHandlers.push([l,s]),a.addEventListener(l,s)}return"string"==typeof i||"number"==typeof i?(a.setAttribute(r,i),void(a[r]=i)):"boolean"==typeof i?i?(a[r]=!0,a.setAttribute(r,i)):(a[r]=!1,a.removeAttribute(r)):void(a[r]=i)}if("string"==typeof i)return void a.setAttribute(r,i);if(!i)return void a.removeAttribute(r);if(n)if("string"==typeof c)a.style.cssText="";else for(var u in c)updateStyle(a,u,"");for(var f in i)updateStyle(a,f,i[f])}else a.className=n?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),i=[];return n.forEach((function(e){a.indexOf(e)>-1?(i.push(e),a=a.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&i.push(e)})),(i=[].concat((0,p.Z)(i),(0,p.Z)(a))).join(" ")}(a,n,o):i}t.Z=function reactifyWebComponent(e){var t=function(t){(0,l.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,i.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,f.createRef)(),t}return(0,c.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(n){"children"===n||"key"===n||n in r.props||updateProp(r,e,n,t,r.props)})),Object.keys(this.props).forEach((function(n){updateProp(r,e,n,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,a.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,o.Z)(t,2),n=r[0],a=r[1];e.ref.current&&e.ref.current.removeEventListener(n,a)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,f.createElement)(e,o,r)}}]),Index}(f.Component);return f.forwardRef((function(e,r){return f.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"7277":function(e,t,r){r.d(t,{"Z":function(){return f}});var n=r(5333),o=r(6692),a=r(3184),i=r(2322),c=r(7430);function isArray(e){return e&&"[object Array]"===toString.call(e)}var l=new RegExp('{|}|"',"g");function keys(e){return JSON.stringify(e).replace(l,"").split(",").map((function(e){return e.split(":")[0]}))}var s="van-";function traversing(e,t){t&&("string"==typeof t||"number"==typeof t?e.push(t):isArray(t)?t.forEach((function(t){traversing(e,t)})):"object"==typeof t&&keys(t).forEach((function(r){t[r]&&e.push(r)})))}function style_style(e){return isArray(e)?e.filter((function(e){return null!=e&&""!==e})).map((function(e){return style_style(e)})).join(";")||"":"[object Object]"===toString.call(e)?keys(e).filter((function(t){return null!=e[t]&&""!==e[t]})).map((function(t){return[(r=t,null===(n=r.replace(new RegExp("[A-Z]","g"),(function(e){return"-"+e})))||void 0===n?void 0:n.toLowerCase()),[e[t]]].join(":");var r,n})).join(";")||"":e||""}var u=function memoize(e){var t={};return function(){var r=function serializer(e){if(1===e.length&&function isPrimitive(e){var t=typeof e;return"boolean"===t||"number"===t||"string"===t||"undefined"===t||null===e}(e[0]))return e[0];for(var t={},r=0;r<e.length;r++)t["key"+r]=e[r];return JSON.stringify(t)}(arguments);return void 0===t[r]&&(t[r]=function call(e,t){return 2===t.length?e(t[0],t[1]):1===t.length?e(t[0]):e()}(e,arguments)),t[r]}}((function _bem(e,t){var r=[];return traversing(r,t),function join(e,t){return e=s+e,(t=t.map((function(t){return e+"--"+t}))).unshift(e),t.join(" ")}(e,r)}));function Info(e){var t=e.dot,r=e.info,l=void 0===r?null:r,s=e.style,p=e.className,f=(0,a._)(e,["dot","info","style","className"]);return(0,i.jsx)(i.Fragment,{"children":(l||0===l||t)&&(0,i.jsx)(c.G7,(0,o._)((0,n._)({"className":"van-info "+u("info",{"dot":t})+"  "+p,"style":style_style([s])},f),{"children":t?"":l}))})}var p=r(2008);function addUnit(e){if(null!=e)return/^-?\d+(\.\d+)?$/.test(""+e)?p.ZPm.pxTransform(e):e}function isImage(e){return-1!==e.indexOf("/")}function rootClass(e){var t=[];if(e.classPrefix&&t.push(e.classPrefix),isImage(e.name))t.push("van-icon--image");else{var r=e.classPrefix?"".concat(e.classPrefix,"-").concat(e.name):e.name;t.push(r)}return t.join(" ")}var f=function Icon(e){var t,r=e.classPrefix,l=void 0===r?"van-icon":r,s=e.name,u=e.color,p=e.size,f=e.dot,d=e.info,h=e.style,m=e.className,v=(0,a._)(e,["classPrefix","name","color","size","dot","info","style","className"]);return(0,i.jsxs)(c.G7,(0,o._)((0,n._)({"className":rootClass({"classPrefix":l,"name":s})+" ".concat(m||""),"style":style_style([(t={"color":u,"size":p},style_style([{"color":t.color,"font-size":addUnit(t.size)}])),h])},v),{"children":[(d||0===d||f)&&(0,i.jsx)(Info,{"dot":f,"info":d,"className":"van-icon__info"}),isImage(s)&&(0,i.jsx)(c.Ee,{"src":s,"mode":"aspectFit","className":"van-icon__image"})]}))}},"3087":function(e,t,r){r.r(t),r.d(t,{"default":function(){return y}});var n=r(9249),o=r(7371),a=r(753),i=r(5754),c=r(6906),l=r(6666),s=r(2784),u=JSON.parse('[{"name":"开发指南","items":[{"path":"home","title":"介绍"},{"path":"quickstart","title":"快速上手"},{"path":"custom-style","title":"样式覆盖"},{"path":"theme","title":"定制主题"},{"path":"use-in-react","title":"如何在React中使用"},{"path":"contributing","title":"贡献指南"},{"path":"v2-to-v3","title":"v2升级到v3"},{"path":"comments","title":"typescript同步到文档"},{"path":"premium","title":"高级模版功能说明"}]},{"name":"基础组件","items":[{"path":"button","title":"Button 按钮"},{"path":"cell","title":"Cell 单元格"},{"path":"config-provider","title":"ConfigProvider 全局配置"},{"path":"icon","title":"Icon 图标"},{"path":"image","title":"Image 图片"},{"path":"image-viewer","title":"ImageViewer 图片查看"},{"path":"col","title":"Layout 布局"},{"path":"popup","title":"Popup 弹出层"},{"path":"common","title":"Style 内置样式"},{"path":"toast","title":"Toast 轻提示"},{"path":"transition","title":"transition 动画"}]},{"name":"表单组件","items":[{"path":"calendar","title":"Calendar 日历"},{"path":"cascader","title":"Cascader 级联选择"},{"path":"checkbox","title":"Checkbox 复选框"},{"path":"check-list","title":"CheckList 勾选列表"},{"path":"datetime-picker","title":"DatetimePicker 时间选择"},{"path":"field","title":"Field 输入框"},{"path":"form","title":"Form 表单"},{"path":"picker","title":"Picker 选择器"},{"path":"radio","title":"Radio 单选框"},{"path":"rate","title":"Rate 评分"},{"path":"search","title":"Search 搜索"},{"path":"slider","title":"Slider 滑块"},{"path":"stepper","title":"Stepper 步进器"},{"path":"switch","title":"Switch 开关"},{"path":"uploader","title":"Uploader 文件上传"}]},{"name":"反馈组件","items":[{"path":"action-sheet","title":"ActionSheet 动作面板"},{"path":"dialog","title":"Dialog 弹出框"},{"path":"dropdown-menu","title":"DropdownMenu 下拉菜单"},{"path":"loading","title":"Loading 加载"},{"path":"notify","title":"Notify 消息通知"},{"path":"overlay","title":"Overlay 遮罩层"},{"path":"share-sheet","title":"ShareSheet 分享面板"},{"path":"swipe-cell","title":"SwipeCell 滑动单元格"},{"path":"signature","title":"Signature 签名"}]},{"name":"展示组件","items":[{"path":"space","title":"Space 间距"},{"path":"table","title":"Table 表格"},{"path":"swiper","title":"Swiper 轮播"},{"path":"circle","title":"Circle 环形进度条"},{"path":"collapse","title":"Collapse 折叠面板"},{"path":"count-down","title":"CountDown 倒计时"},{"path":"divider","title":"Divider 分割线"},{"path":"result","title":"Result 操作结果"},{"path":"empty","title":"Empty 空状态"},{"path":"ellipsis","title":"Ellipsis 文本省略"},{"path":"notice-bar","title":"NoticeBar 通知栏"},{"path":"progress","title":"Progress 进度条"},{"path":"skeleton","title":"Skeleton 骨架屏"},{"path":"steps","title":"Steps 步骤条"},{"path":"sticky","title":"Sticky 粘性布局"},{"path":"tag","title":"Tag 标签"},{"path":"water-mark","title":"WaterMark 水印"},{"path":"number-keyboard","title":"NumberKeyboard 数字键盘"},{"path":"infinite-scroll","title":"InfiniteScroll 无限滚动"},{"path":"pull-to-refresh","title":"PullToRefresh 下拉刷新"},{"path":"virtual-list","title":"VirtualList 虚拟列表"},{"path":"waterfall-flow","title":"WaterfallFlow 瀑布流"}]},{"name":"导航组件","items":[{"path":"pagination","title":"Pagination 分页"},{"path":"grid","title":"Grid 宫格"},{"path":"index-bar","title":"IndexBar 索引栏"},{"path":"nav-bar","title":"NavBar 导航栏"},{"path":"sidebar","title":"Sidebar 侧边导航"},{"path":"tab","title":"Tab 标签页"},{"path":"tabbar","title":"Tabbar 标签栏"},{"path":"tree-select","title":"TreeSelect 分类选择"}]},{"name":"业务组件","items":[{"path":"area","title":"Area 省市区选择"},{"path":"sku","title":"Sku 商品规格选择"},{"path":"card","title":"Card 商品卡片"},{"path":"submit-bar","title":"SubmitBar 提交订单栏"},{"path":"goods-action","title":"GoodsAction 商品导航"}]}]'),p=r(7430),f=r(7277),d=r(5936),h=r(2322),m=function(e){(0,i.Z)(Index,e);var t=(0,c.Z)(Index);function Index(){var e;(0,n.Z)(this,Index);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),(0,l.Z)((0,a.Z)(e),"onClick",(function(e){var t=e.target.dataset.url;(0,d.s_)().length>9?(0,d.gB)({"url":"".concat(t)}):(0,d.T8)({"url":"".concat(t)})})),e}return(0,o.Z)(Index,[{"key":"render","value":function render(){var e=this,t=this.props.group;return(0,h.jsxs)(p.G7,{"className":"demo-home-nav","children":[(0,h.jsx)(p.G7,{"className":"demo-home-nav__title","children":t.name||t.title}),(0,h.jsx)(p.G7,{"className":"demo-home-nav__group","children":t.items.map((function(t){return(0,h.jsxs)(p.G7,{"className":"demo-home-nav__block","data-url":"/pages/"+t.path+"/index","onClick":e.onClick,"children":[t.title,(0,h.jsx)(f.Z,{"name":"arrow","className":"demo-home-nav__icon"})]},t.title)}))})]})}}]),Index}(s.Component),v=function(e){(0,i.Z)(Index,e);var t=(0,c.Z)(Index);function Index(){var e;(0,n.Z)(this,Index);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),(0,l.Z)((0,a.Z)(e),"state",{"list":u}),e}return(0,o.Z)(Index,[{"key":"render","value":function render(){var e=this.state.list;return(0,h.jsxs)(p.G7,{"className":"demo-home","children":[(0,h.jsxs)(p.G7,{"className":"demo-home__title","children":[(0,h.jsx)(p.Ee,{"mode":"aspectFit","className":"demo-home__image","src":"https://antm-js.gitee.io/resource/antmjs-vantui.jpg"}),(0,h.jsx)(p.G7,{"className":"demo-home__text","children":"@antmjs/vantui"})]}),(0,h.jsx)(p.G7,{"className":"demo-home__desc","children":"Taro-React H5-React通用的UI 组件库"}),(0,h.jsxs)(p.G7,{"className":"demo-home__desc","children":[(0,h.jsx)(p.G7,{"children":"已支持通过Taro编译的小程序、H5"}),(0,h.jsx)(p.G7,{"children":"已支持React应用"})]}),(e||[]).map((function(e,t){return["开发指南","有赞Vant-Weapp小程序文档"].includes(e.name)?"":(0,h.jsx)(p.G7,{"children":(0,h.jsx)(m,{"group":e})},t)}))]})}}]),Index}(s.Component),y=function(e){(0,i.Z)(Index,e);var t=(0,c.Z)(Index);function Index(){var e;return(0,n.Z)(this,Index),e=t.call(this),(0,l.Z)((0,a.Z)(e),"state",{"list":u}),e}return(0,o.Z)(Index,[{"key":"render","value":function render(){var e=this.state.list;return(0,h.jsx)(v,{"list":e||[]})}}]),Index}(s.Component)},"1837":function(e,t,r){var n=r(2784),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var n,a={},s=null,u=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{"$$typeof":o,"type":e,"key":s,"ref":u,"props":a,"_owner":c.current}}t.Fragment=a,t.jsx=q,t.jsxs=q},"2322":function(e,t,r){e.exports=r(1837)},"7612":function(e,t,r){function _define_property(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}r.d(t,{"j":function(){return _define_property},"_":function(){return _define_property}})},"5333":function(e,t,r){r.d(t,{"_":function(){return _object_spread}});var n=r(7612);function _object_spread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){(0,n.j)(e,t,r[t])}))}return e}},"6692":function(e,t,r){function _object_spread_props(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{"_":function(){return _object_spread_props}})},"3184":function(e,t,r){function _object_without_properties(e,t){if(null==e)return{};var r,n,o=function _object_without_properties_loose(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{"_":function(){return _object_without_properties}})}}]);