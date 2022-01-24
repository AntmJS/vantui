(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"309":function(n,e,t){"use strict";t.d(e,"e",(function(){return isPlainObject})),t.d(e,"f",(function(){return isPromise})),t.d(e,"b",(function(){return isDef})),t.d(e,"d",(function(){return isObj})),t.d(e,"a",(function(){return isBoolean})),t.d(e,"c",(function(){return isImageUrl})),t.d(e,"g",(function(){return isVideoUrl}));var c=t(335),r=t.n(c);function isFunction(n){return"function"==typeof n}function isPlainObject(n){return null!==n&&"object"===r()(n)&&!Array.isArray(n)}function isPromise(n){return isPlainObject(n)&&isFunction(n.then)&&isFunction(n.catch)}function isDef(n){return null!=n}function isObj(n){var e=r()(n);return null!==n&&("object"===e||"function"===e)}function isBoolean(n){return"boolean"==typeof n}var i=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,o=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;function isImageUrl(n){return i.test(n)}function isVideoUrl(n){return o.test(n)}},"321":function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var c=t(5),r=t.n(c),i=t(6),o=t.n(i),l=t(14),a=t.n(l),s=t(15),u=t.n(s),f=t(298),d=t(26),b=(t(322),t(44)),p=function(n){a()(Index,n);var e=u()(Index);function Index(){return r()(this,Index),e.call(this)}return o()(Index,[{"key":"render","value":function render(){var n=this.props,e=n.padding,t=n.title,c=n.card;return Object(b.jsxs)(f.n,{"className":"custom-class demo-block van-clearfix "+(e?"demo-block--padding":""),"children":[t&&Object(b.jsx)(f.n,{"className":"demo-block__title","children":t}),c?Object(b.jsx)(f.n,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(d.Component)},"322":function(n,e,t){},"328":function(n,e,t){},"330":function(n,e,t){"use strict";t.d(e,"a",(function(){return Loading}));var c=t(305),r=t.n(c),i=t(308),o=t.n(i),l=t(306),a=t.n(l),s=t(334),u=t.n(s),f=t(317),d=t.n(f),b=t(299),p=t.n(b),j=t(302),h=t.n(j),x=t(301),v=t.n(x),g=t(303),m=t.n(g),y=t(300),O=t.n(y),S=t(304),k=t.n(S),T=t(298),_=t(26),w=t(297),I=t(311);function textStyle(n){return Object(w.c)({"font-size":Object(I.a)(n.textSize)})}var z=t(44),N=["vertical","type","color","size","textSize","className","children","style"];function ownKeys(n,e){var t=p()(n);if(h.a){var c=h()(n);e&&(c=v()(c).call(c,(function(e){return m()(n,e).enumerable}))),t.push.apply(t,c)}return t}function _objectSpread(n){for(var e=1;e<arguments.length;e++){var t,c=null!=arguments[e]?arguments[e]:{};if(e%2)O()(t=ownKeys(Object(c),!0)).call(t,(function(e){r()(n,e,c[e])}));else if(k.a)Object.defineProperties(n,k()(c));else{var i;O()(i=ownKeys(Object(c))).call(i,(function(e){Object.defineProperty(n,e,m()(c,e))}))}}return n}function Loading(n){var e,t=n.vertical,c=n.type,r=void 0===c?"circular":c,i=n.color,l=n.size,s=n.textSize,f=n.className,b=n.children,p=n.style,j=a()(n,N),h=Object(_.useState)(u()({"length":12})),x=o()(h,1)[0];return Object(z.jsxs)(T.n,_objectSpread(_objectSpread({"className":" "+w.b("loading",{"vertical":t})+" "+f,"style":w.c([p])},j),{},{"children":[Object(z.jsx)(T.n,{"className":"van-loading__spinner van-loading__spinner--"+r,"style":(e={"color":i,"size":l},Object(w.c)({"color":e.color,"width":Object(I.a)(e.size),"height":Object(I.a)(e.size)})),"children":"spinner"===r&&Object(z.jsx)(T.a,{"children":d()(x).call(x,(function(n,e){return Object(z.jsx)(T.n,{"className":"van-loading__dot"},"van-loading__dot_".concat(e))}))})}),Object(z.jsx)(T.n,{"className":"van-loading__text","style":textStyle({"textSize":s}),"children":b})]}))}e.b=Loading},"333":function(n,e,t){"use strict";t.d(e,"g",(function(){return range})),t.d(e,"d",(function(){return getSystemInfoSync})),t.d(e,"a",(function(){return addUnit})),t.d(e,"h",(function(){return requestAnimationFrame})),t.d(e,"f",(function(){return pickExclude})),t.d(e,"c",(function(){return getRect})),t.d(e,"b",(function(){return getAllRect})),t.d(e,"i",(function(){return toPromise}));t(75);var c,r=t(402),i=t.n(r),o=t(299),l=t.n(o),a=t(339),s=t.n(a),u=t(329),f=t.n(u),d=(t(296),t(924)),b=(t(927),t(34)),p=t(693),j=(t(31),t(309));t(343);function range(n,e,t){return Math.min(Math.max(n,e),t)}function getSystemInfoSync(){return null==c&&(c=Object(d.a)()),c}function addUnit(n){if(Object(j.b)(n))return/^-?\d+(\.\d+)?$/.test(""+n)?b.a.pxTransform(n):n}function requestAnimationFrame(n){return"devtools"===getSystemInfoSync().platform?setTimeout((function(){n()}),33.333333333333336):Object(p.a)().selectViewport().boundingClientRect().exec((function(){n()}))}function pickExclude(n,e){var t;return Object(j.e)(n)?i()(t=l()(n)).call(t,(function(t,c){return s()(e).call(e,c)||(t[c]=n[c]),t}),{}):{}}function getRect(n,e){return new f.a((function(t){var c=Object(p.a)();n&&(c=c.in(n)),c.select(e).boundingClientRect().exec((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t(n[0])}))}))}function getAllRect(n,e){return new f.a((function(t){var c=Object(p.a)();n&&(c=c.in(n)),c.selectAll(e).boundingClientRect().exec((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t(n[0])}))}))}function toPromise(n){return Object(j.f)(n)?n:f.a.resolve(n)}t.d(e,"e",(function(){return j.b}))},"334":function(n,e,t){n.exports=t(327)},"338":function(n,e,t){"use strict";t.d(e,"c",(function(){return c})),t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return i})),t.d(e,"e",(function(){return o})),t.d(e,"d",(function(){return l})),t.d(e,"f",(function(){return a}));var c=1010,r=1e3,i=805,o=805,l=800,a=600},"343":function(n,e,t){"use strict";t.d(e,"a",(function(){return canIUseModel})),t.d(e,"b",(function(){return canIUseNextTick}));t(75),t(353);var c,r=t(408),i=t.n(r),o=t(924),l=t(925);t(926);function gte(n){return function compareVersion(n,e){n=n.split("."),e=e.split(".");for(var t=Math.max(n.length,e.length);n.length<t;)n.push("0");for(;e.length<t;)e.push("0");for(var c=0;c<t;c++){var r=i()(n[c],10),o=i()(e[c],10);if(r>o)return 1;if(r<o)return-1}return 0}(function getSystemInfoSync(){return null==c&&(c=Object(o.a)()),c}().SDKVersion,n)>=0}function canIUseModel(){return gte("2.9.3")}function canIUseNextTick(){return Object(l.a)("nextTick")}},"352":function(n,e,t){"use strict";t.d(e,"a",(function(){return Button}));var c=t(299),r=t.n(c),i=t(302),o=t.n(i),l=t(301),a=t.n(l),s=t(303),u=t.n(s),f=t(300),d=t.n(f),b=t(304),p=t.n(b),j=t(305),h=t.n(j),x=t(306),v=t.n(x),g=t(34),m=t(298),y=t(297),O=t(315),S=t(330),k=t(365),T=t.n(k),_=t(312);function rootStyle(n){var e;if(!n.color)return"";var t={"color":n.plain?n.color:"#fff","background":n.plain?null:n.color};return-1!==T()(e=n.color).call(e,"gradient")?t.border=0:t["border-color"]=n.color,Object(_.a)([t])}var w=t(44),I=["type","size","block","round","plain","square","loading","disabled","hairline","color","loadingSize","loadingType","loadingText","icon","classPrefix","onClick","children","style","className"];function ownKeys(n,e){var t=r()(n);if(o.a){var c=o()(n);e&&(c=a()(c).call(c,(function(e){return u()(n,e).enumerable}))),t.push.apply(t,c)}return t}function _objectSpread(n){for(var e=1;e<arguments.length;e++){var t,c=null!=arguments[e]?arguments[e]:{};if(e%2)d()(t=ownKeys(Object(c),!0)).call(t,(function(e){h()(n,e,c[e])}));else if(p.a)Object.defineProperties(n,p()(c));else{var r;d()(r=ownKeys(Object(c))).call(r,(function(e){Object.defineProperty(n,e,u()(c,e))}))}}return n}function Button(n){var e,t=n.type,c=void 0===t?"default":t,r=n.size,i=void 0===r?"normal":r,o=n.block,l=n.round,a=n.plain,s=n.square,u=n.loading,f=n.disabled,d=n.hairline,b=n.color,p=n.loadingSize,j=void 0===p?g.a.pxTransform(40):p,h=n.loadingType,x=void 0===h?"circular":h,k=n.loadingText,T=n.icon,_=n.classPrefix,z=void 0===_?"van-icon":_,N=n.onClick,P=n.children,C=n.style,R=n.className,K=v()(n,I);return Object(w.jsx)(m.b,_objectSpread(_objectSpread({"className":" "+y.b("button",[c,i,{"block":o,"round":l,"plain":a,"square":s,"loading":u,"disabled":f,"hairline":d,"unclickable":f||u}])+" "+(d?"van-hairline--surround":"")+" ".concat(R||""),"hoverClass":"van-button--active hover-class","style":y.c([rootStyle({"plain":a,"color":b}),C]),"onClick":f||u?void 0:N},K),{},{"children":u?Object(w.jsxs)(m.n,{"style":"display: flex","children":[Object(w.jsx)(S.a,{"className":"loading-class","size":j,"type":x,"color":(e={"type":c,"color":b,"plain":a},e.plain?e.color?e.color:"#c9c9c9":"default"===e.type?"#c9c9c9":"#fff")}),k&&Object(w.jsx)(m.n,{"className":"van-button__loading-text","children":k})]}):Object(w.jsxs)(m.a,{"children":[T&&Object(w.jsx)(O.a,{"size":"1.2em","name":T,"classPrefix":z,"className":"van-button__icon","style":"line-height: inherit;"}),Object(w.jsx)(m.n,{"className":"van-button__text","children":P})]})}))}e.b=Button},"357":function(n,e,t){},"412":function(n,e,t){"use strict";t(307),t(328),t(316),t(319),t(357)},"482":function(n,e,t){"use strict";t.d(e,"a",(function(){return usePageScroll}));var c=t(26),r=t(34);function usePageScroll(n){Object(c.useEffect)((function(){var e=document;function listener(t){if(t.target){var c={"scrollTop":e.scrollingElement.scrollTop,"scrollLeft":e.scrollingElement.scrollLeft};n(c)}}return e.addEventListener("scroll",listener),function(){e.removeEventListener("scroll",listener)}})),r.a.usePageScroll((function(n){}))}},"494":function(n,e,t){},"495":function(n,e,t){"use strict";t.d(e,"a",(function(){return Sticky}));t(75);var c=t(305),r=t.n(c),i=t(306),o=t.n(i),l=t(308),a=t.n(l),s=t(329),u=t.n(s),f=t(402),d=t.n(f),b=t(299),p=t.n(b),j=t(302),h=t.n(j),x=t(301),v=t.n(x),g=t(303),m=t.n(g),y=t(300),O=t.n(y),S=t(304),k=t.n(S),T=t(26),_=t(298),w=t(297),I=t(333),z=t(338),N=t(309),P=t(482),C=t(312);function wrapStyle(n){return Object(C.a)({"transform":n.transform?"translate3d(0, "+n.transform+"px, 0)":"","top":n.fixed?n.offsetTop+"px":"","z-index":n.zIndex})}var R=t(44),K=["zIndex","offsetTop","scrollTop","disabled","container","onScroll","style","className","children"];function ownKeys(n,e){var t=p()(n);if(h.a){var c=h()(n);e&&(c=v()(c).call(c,(function(e){return m()(n,e).enumerable}))),t.push.apply(t,c)}return t}function _objectSpread(n){for(var e=1;e<arguments.length;e++){var t,c=null!=arguments[e]?arguments[e]:{};if(e%2)O()(t=ownKeys(Object(c),!0)).call(t,(function(e){r()(n,e,c[e])}));else if(k.a)Object.defineProperties(n,k()(c));else{var i;O()(i=ownKeys(Object(c))).call(i,(function(e){Object.defineProperty(n,e,m()(c,e))}))}}return n}function Sticky(n){var e,t=Object(T.useRef)(+new Date),c=Object(T.useState)({"height":0,"fixed":!1,"transform":0}),r=a()(c,2),i=r[0],l=r[1],s=n.zIndex,f=void 0===s?z.d:s,b=n.offsetTop,j=void 0===b?0:b,h=n.scrollTop,x=n.disabled,v=n.container,g=n.onScroll,m=n.style,y=n.className,O=n.children,S=o()(n,K),k=Object(T.useRef)({}),U=Object(T.useCallback)((function(){var n=null==v?void 0:v();return new u.a((function(e){return null==n?void 0:n.boundingClientRect().exec((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e(n[0])}))}))}),[v]),E=Object(T.useCallback)((function(n){var e,t=d()(e=p()(n)).call(e,(function(e,t){return n[t]!==i[t]&&(e[t]=n[t]),e}),{});p()(t).length>0&&l((function(n){return _objectSpread(_objectSpread({},n),t)})),null==g||g({"detail":{"scrollTop":k.current.scrollTop,"isFixed":n.fixed||i.fixed}})}),[g,i]),A=Object(T.useCallback)((function(n){x?E({"fixed":!1,"transform":0}):(k.current.scrollTop=n||k.current.scrollTop,"function"!=typeof v?Object(I.c)(null,".sticky-com-index".concat(t.current)).then((function(n){Object(N.b)(n)&&(j>=n.top?E({"fixed":!0,"height":n.height}):E({"fixed":!1}))})):u.a.all([Object(I.c)(null,".sticky-com-index".concat(t.current)),U()]).then((function(n){var e=a()(n,2),t=e[0],c=e[1];t&&c&&(j+t.height>c.height+c.top?E({"fixed":!1,"transform":c.height-t.height}):j>=t.top?E({"fixed":!0,"height":t.height,"transform":0}):E({"fixed":!1,"transform":0}))})).catch((function(n){console.log(n)})))}),[v,x,U,j,E]);return Object(T.useEffect)((function(){A(h)}),[h,v,x,j]),Object(P.a)((function(n){A(n.scrollTop)})),Object(R.jsx)(_.n,_objectSpread(_objectSpread({"className":"sticky-com-index".concat(t.current," ")+" van-sticky "+(y||""),"style":w.c([(e={"fixed":i.fixed,"height":i.height,"zIndex":f},Object(C.a)({"height":e.fixed?e.height+"px":"","z-index":e.zIndex})),m])},S),{},{"children":Object(R.jsx)(_.n,{"className":w.b("sticky-wrap",{"fixed":i.fixed})+" ".concat(y||""),"style":w.c([wrapStyle({"fixed":i.fixed,"offsetTop":j,"transform":i.transform,"zIndex":f}),m]),"children":O})}))}e.b=Sticky},"840":function(n,e,t){},"974":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return S}));t(307),t(494);var c=t(495),r=(t(412),t(352)),i=t(5),o=t.n(i),l=t(6),a=t.n(l),s=t(22),u=t.n(s),f=t(14),d=t.n(f),b=t(15),p=t.n(b),j=t(20),h=t.n(j),x=(t(75),t(298)),v=t(26),g=t(693),m=t(336),y=t(321),O=(t(840),t(44)),S=function(n){d()(Index,n);var e=p()(Index);function Index(){var n;return o()(this,Index),n=e.call(this),h()(u()(n),"state",{"container":null,"scrollTop":0,"offsetTop":0}),h()(u()(n),"onReady",(function(){n.setState({"container":function container(){return Object(g.a)().select("#container")}})})),h()(u()(n),"onScroll",(function(e){Object(g.a)().select("#scroller").boundingClientRect((function(t){console.log("#scroller:",t.top),n.setState({"scrollTop":e.detail.scrollTop,"offsetTop":t.top})})).exec()})),n}return a()(Index,[{"key":"componentDidMount","value":function componentDidMount(){this.onReady()}},{"key":"render","value":function render(){var n=this.state,e=n.container,t=n.scrollTop,i=n.offsetTop;return Object(O.jsxs)(m.a,{"title":"Sticky 粘性布局","children":[Object(O.jsx)(y.a,{"title":"基础用法","children":Object(O.jsx)(c.b,{"children":Object(O.jsx)(r.b,{"type":"primary","style":"margin-left: 15px","children":"基础用法"})})}),Object(O.jsx)(y.a,{"title":"吸顶距离","children":Object(O.jsx)(c.b,{"offsetTop":50,"children":Object(O.jsx)(r.b,{"type":"info","style":"margin-left: 115px","children":"吸顶距离"})})}),Object(O.jsx)(y.a,{"title":"指定容器","children":Object(O.jsx)(x.n,{"id":"container","style":"height: 150px; background-color: #fff;","children":Object(O.jsx)(c.b,{"container":e,"children":Object(O.jsx)(r.b,{"type":"warning","style":"margin-left: 215px;","children":"指定容器"})})})}),Object(O.jsx)(y.a,{"title":"嵌套在 scroll-view 内使用","children":Object(O.jsx)(x.j,{"onScroll":this.onScroll,"scrollY":!0,"id":"scroller","style":"height: 200px; background-color: #fff;","children":Object(O.jsx)(x.n,{"style":"height: 400px;","children":Object(O.jsx)(c.b,{"scrollTop":t,"offsetTop":i,"children":Object(O.jsx)(r.b,{"type":"warning","children":"嵌套在 scroll-view 内"})})})})}),Object(O.jsx)(x.n,{"className":"sticky-page"})]})}}]),Index}(v.Component)}}]);