(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"575":function(t,n,e){"use strict";e.d(n,"e",(function(){return isPlainObject})),e.d(n,"f",(function(){return isPromise})),e.d(n,"b",(function(){return isDef})),e.d(n,"d",(function(){return isObj})),e.d(n,"a",(function(){return isBoolean})),e.d(n,"c",(function(){return isImageUrl})),e.d(n,"g",(function(){return isVideoUrl}));var a=e(591),r=e.n(a);function isFunction(t){return"function"==typeof t}function isPlainObject(t){return null!==t&&"object"===r()(t)&&!Array.isArray(t)}function isPromise(t){return isPlainObject(t)&&isFunction(t.then)&&isFunction(t.catch)}function isDef(t){return null!=t}function isObj(t){var n=r()(t);return null!==t&&("object"===n||"function"===n)}function isBoolean(t){return"boolean"==typeof t}var i=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,c=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;function isImageUrl(t){return i.test(t)}function isVideoUrl(t){return c.test(t)}},"578":function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return Page}));e(590);var a=e(574),r=e(568),i=e(90),c=e(737),o=e(77),s=e(64),u=(e(581),e(115));function Page(n){var e=n.title,l=n.className,d=void 0===l?"":l,f=n.children,m=i.a.useRouter().path;return Object(s.useEffect)((function(){"react"===t.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(c.a)({"scrollTop":0})}),[m]),i.a.useShareAppMessage((function(){return{"title":"AntM 组件库演示","path":m}})),Object(u.jsxs)(r.n,{"className":"demo-page ".concat(d),"children":[Object(u.jsxs)(r.n,{"className":"demo-nav","children":[Object(u.jsx)(a.b,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return Object(o.d)()}}),Object(u.jsxs)(r.n,{"className":"demo-nav__title","children":[e," "]})]}),f]})}}).call(this,e(236))},"579":function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var a=e(39),r=e(40),i=e(66),c=e(65),o=e(568),s=e(64),u=(e(582),e(115)),l=function(t){Object(i.a)(Index,t);var n=Object(c.a)(Index);function Index(){return Object(a.a)(this,Index),n.call(this)}return Object(r.a)(Index,[{"key":"render","value":function render(){var t=this.props,n=t.padding,e=t.title,a=t.card;return Object(u.jsxs)(o.n,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[e&&Object(u.jsx)(o.n,{"className":"demo-block__title","children":e}),a?Object(u.jsx)(o.n,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(s.Component)},"581":function(t,n,e){},"582":function(t,n,e){},"593":function(t,n,e){"use strict";e.d(n,"g",(function(){return range})),e.d(n,"d",(function(){return getSystemInfoSync})),e.d(n,"a",(function(){return addUnit})),e.d(n,"h",(function(){return requestAnimationFrame})),e.d(n,"f",(function(){return pickExclude})),e.d(n,"c",(function(){return getRect})),e.d(n,"b",(function(){return getAllRect})),e.d(n,"i",(function(){return toPromise}));var a,r=e(148),i=e.n(r),c=e(24),o=e.n(c),s=e(21),u=e.n(s),l=e(5),d=e.n(l),f=(e(567),e(863)),m=(e(866),e(90)),h=e(790),b=(e(77),e(575));e(596);function range(t,n,e){return Math.min(Math.max(t,n),e)}function getSystemInfoSync(){return null==a&&(a=Object(f.a)()),a}function addUnit(t){if(Object(b.b)(t))return/^-?\d+(\.\d+)?$/.test(""+t)?m.a.pxTransform(t):t}function requestAnimationFrame(t){return"devtools"===getSystemInfoSync().platform?setTimeout((function(){t()}),33.333333333333336):Object(h.a)().selectViewport().boundingClientRect().exec((function(){t()}))}function pickExclude(t,n){var e;return Object(b.e)(t)?i()(e=o()(t)).call(e,(function(e,a){return u()(n).call(n,a)||(e[a]=t[a]),e}),{}):{}}function getRect(t,n){return new d.a((function(e){var a=Object(h.a)();t&&(a=a.in(t)),a.select(n).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e(t[0])}))}))}function getAllRect(t,n){return new d.a((function(e){var a=Object(h.a)();t&&(a=a.in(t)),a.selectAll(n).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e(t[0])}))}))}function toPromise(t){return Object(b.f)(t)?t:d.a.resolve(t)}e.d(n,"e",(function(){return b.b}))},"596":function(t,n,e){"use strict";e.d(n,"a",(function(){return canIUseModel})),e.d(n,"b",(function(){return canIUseNextTick}));var a,r=e(117),i=e.n(r),c=e(863),o=e(864);e(865);function gte(t){return function compareVersion(t,n){t=t.split("."),n=n.split(".");for(var e=Math.max(t.length,n.length);t.length<e;)t.push("0");for(;n.length<e;)n.push("0");for(var a=0;a<e;a++){var r=i()(t[a],10),c=i()(n[a],10);if(r>c)return 1;if(r<c)return-1}return 0}(function getSystemInfoSync(){return null==a&&(a=Object(c.a)()),a}().SDKVersion,t)>=0}function canIUseModel(){return gte("2.9.3")}function canIUseNextTick(){return Object(o.a)("nextTick")}},"831":function(t,n,e){"use strict";e.d(n,"a",(function(){return O}));var a=e(174),r=e(40),i=e(39),c=e(6),o=e.n(c),s=e(27),u=e.n(s),l=e(32),d=e.n(l),f=e(10),m=e.n(f),h=new(Object(r.a)((function StyleSheet(){var t=this;Object(i.a)(this,StyleSheet),this.$style=null,this.sheet=null,this.appendStyleSheet=function(){if(t.$style){var n=document.getElementsByTagName("head")[0];t.$style.setAttribute("type","text/css"),t.$style.setAttribute("data-type","Taro"),n.appendChild(t.$style),t.sheet=t.$style.sheet}t.sheet&&!("insertRule"in t.sheet)&&console.warn("当前浏览器不支持 stylesheet.insertRule 接口")},this.add=function(n){var e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;null===t.sheet&&t.appendStyleSheet(),null===(e=t.sheet)||void 0===e||e.insertRule(n,a)},this.$style=document.createElement("style")}))),b="transitionend",v="transform",p=document.createElement("div");p.style.cssText="-webkit-animation-name:webkit;-moz-animation-name:moz;-ms-animation-name:ms;animation-name:standard;","standard"===p.style["animation-name"]?(b="transitionend",v="transform"):"webkit"===p.style["-webkit-animation-name"]?(b="webkitTransitionEnd",v="-webkit-transform"):"moz"===p.style["-moz-animation-name"]?(b="mozTransitionEnd",v="-moz-transform"):"ms"===p.style["-ms-animation-name"]&&(b="msTransitionEnd",v="-ms-transform");var j=0,g=function(){function Animation(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.duration,r=void 0===e?400:e,c=n.delay,s=void 0===c?0:c,u=n.timingFunction,l=void 0===u?"linear":u,d=n.transformOrigin,f=void 0===d?"50% 50% 0":d,m=n.unit,h=void 0===m?"px":m;Object(i.a)(this,Animation),this.rules=[],this.transform=["".concat(v,":")],this.steps=[],this.animationMap={},this.animationMapCount=0,this.setDefault(r,s,l,f),this.unit=h;var p="animation";this.id=++j,document.body.addEventListener(b,(function(n){var e=n.target;null===e.getAttribute(p)&&(p="data-animation");var r=e.getAttribute(p);if(null!==r){var i=r.split("__"),c=Object(a.a)(i,2),s=c[0],u=c[1];if(s==="taro-h5-poly-fill/".concat(t.id,"/create-animation")){var l,d,f,m,h,b=u.split("--"),v=Object(a.a)(b,2),j=v[0],g=v[1],O=Number(void 0===g?0:g);if(O<t.animationMap[o()(l="".concat(s,"__")).call(l,j)]-1)if(e.setAttribute(p,o()(d=o()(f="".concat(s,"__")).call(f,j,"--")).call(d,O+1)),"animation"===p)e.setAttribute("data-animation",o()(m=o()(h="".concat(s,"__")).call(h,j,"--")).call(m,O+1))}}}))}return Object(r.a)(Animation,[{"key":"transformUnit","value":function transformUnit(){for(var t=this,n=[],e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return u()(a).call(a,(function(e){var a;n.push(isNaN(e)?e:o()(a="".concat(e)).call(a,t.unit))})),n}},{"key":"setDefault","value":function setDefault(t,n,e,a){this.DEFAULT={"duration":t,"delay":n,"timingFunction":e,"transformOrigin":a}}},{"key":"matrix","value":function matrix(t,n,e,a,r,i){var c,s,u,l,d;return this.transform.push(o()(c=o()(s=o()(u=o()(l=o()(d="matrix(".concat(t,", ")).call(d,n,", ")).call(l,e,", ")).call(u,a,", ")).call(s,r,", ")).call(c,i,")")),this}},{"key":"matrix3d","value":function matrix3d(t,n,e,a,r,i,c,s,u,l,d,f,m,h,b,v){var p,j,g,O,y,k,x,_,w,S,I,A,D,N,C;return this.transform.push(o()(p=o()(j=o()(g=o()(O=o()(y=o()(k=o()(x=o()(_=o()(w=o()(S=o()(I=o()(A=o()(D=o()(N=o()(C="matrix3d(".concat(t,", ")).call(C,n,", ")).call(N,e,", ")).call(D,a,", ")).call(A,r,", ")).call(I,i,", ")).call(S,c,", ")).call(w,s,", ")).call(_,u,", ")).call(x,l,", ")).call(k,d,", ")).call(y,f,", ")).call(O,m,", ")).call(g,h,", ")).call(j,b,", ")).call(p,v,")")),this}},{"key":"rotate","value":function rotate(t){return this.transform.push("rotate(".concat(t,"deg)")),this}},{"key":"rotate3d","value":function rotate3d(t,n,e,a){var r,i,c;"number"!=typeof n?this.transform.push("rotate3d(".concat(t,")")):this.transform.push(o()(r=o()(i=o()(c="rotate3d(".concat(t,", ")).call(c,n||0,", ")).call(i,e||0,", ")).call(r,a||0,"deg)"));return this}},{"key":"rotateX","value":function rotateX(t){return this.transform.push("rotateX(".concat(t,"deg)")),this}},{"key":"rotateY","value":function rotateY(t){return this.transform.push("rotateY(".concat(t,"deg)")),this}},{"key":"rotateZ","value":function rotateZ(t){return this.transform.push("rotateZ(".concat(t,"deg)")),this}},{"key":"scale","value":function scale(t,n){var e;return this.transform.push(o()(e="scale(".concat(t,", ")).call(e,n,")")),this}},{"key":"scale3d","value":function scale3d(t,n,e){var a,r;return this.transform.push(o()(a=o()(r="scale3d(".concat(t,", ")).call(r,n,", ")).call(a,e,")")),this}},{"key":"scaleX","value":function scaleX(t){return this.transform.push("scaleX(".concat(t,")")),this}},{"key":"scaleY","value":function scaleY(t){return this.transform.push("scaleY(".concat(t,")")),this}},{"key":"scaleZ","value":function scaleZ(t){return this.transform.push("scaleZ(".concat(t,")")),this}},{"key":"skew","value":function skew(t,n){var e;return this.transform.push(o()(e="skew(".concat(t,", ")).call(e,n,")")),this}},{"key":"skewX","value":function skewX(t){return this.transform.push("skewX(".concat(t,")")),this}},{"key":"skewY","value":function skewY(t){return this.transform.push("skewY(".concat(t,")")),this}},{"key":"translate","value":function translate(t,n){var e,r=this.transformUnit(t,n),i=Object(a.a)(r,2);return t=i[0],n=i[1],this.transform.push(o()(e="translate(".concat(t,", ")).call(e,n,")")),this}},{"key":"translate3d","value":function translate3d(t,n,e){var r,i,c=this.transformUnit(t,n,e),s=Object(a.a)(c,3);return t=s[0],n=s[1],e=s[2],this.transform.push(o()(r=o()(i="translate3d(".concat(t,", ")).call(i,n,", ")).call(r,e,")")),this}},{"key":"translateX","value":function translateX(t){var n=this.transformUnit(t);return t=Object(a.a)(n,1)[0],this.transform.push("translateX(".concat(t,")")),this}},{"key":"translateY","value":function translateY(t){var n=this.transformUnit(t);return t=Object(a.a)(n,1)[0],this.transform.push("translateY(".concat(t,")")),this}},{"key":"translateZ","value":function translateZ(t){var n=this.transformUnit(t);return t=Object(a.a)(n,1)[0],this.transform.push("translateZ(".concat(t,")")),this}},{"key":"opacity","value":function opacity(t){return this.rules.push("opacity: ".concat(t)),this}},{"key":"backgroundColor","value":function backgroundColor(t){return this.rules.push("background-color: ".concat(t)),this}},{"key":"width","value":function width(t){var n=this.transformUnit(t);return t=Object(a.a)(n,1)[0],this.rules.push("width: ".concat(t)),this}},{"key":"height","value":function height(t){var n=this.transformUnit(t);return t=Object(a.a)(n,1)[0],this.rules.push("height: ".concat(t)),this}},{"key":"top","value":function top(t){var n=this.transformUnit(t);return t=Object(a.a)(n,1)[0],this.rules.push("top: ".concat(t)),this}},{"key":"right","value":function right(t){var n=this.transformUnit(t);return t=Object(a.a)(n,1)[0],this.rules.push("right: ".concat(t)),this}},{"key":"bottom","value":function bottom(t){var n=this.transformUnit(t);return t=Object(a.a)(n,1)[0],this.rules.push("bottom: ".concat(t)),this}},{"key":"left","value":function left(t){var n=this.transformUnit(t);return t=Object(a.a)(n,1)[0],this.rules.push("left: ".concat(t)),this}},{"key":"step","value":function step(){var t,n,e,a,r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=this.DEFAULT,s=i.duration,u=void 0===s?c.duration:s,l=i.delay,f=void 0===l?c.delay:l,h=i.timingFunction,b=void 0===h?c.timingFunction:h,p=i.transformOrigin,j=void 0===p?c.transformOrigin:p;return this.steps.push(d()(t=[m()(n=this.rules).call(n,(function(t){return"".concat(t,"!important")})).join(";"),"".concat(this.transform.join(" "),"!important"),o()(e="".concat(v,"-origin: ")).call(e,j),o()(a=o()(r="transition: all ".concat(u,"ms ")).call(r,b," ")).call(a,f,"ms")]).call(t,(function(t){return""!==t&&t!=="".concat(v,":")})).join(";")),this.rules=[],this.transform=["".concat(v,":")],this}},{"key":"createAnimationData","value":function createAnimationData(){var t,n,e=o()(t="taro-h5-poly-fill/".concat(this.id,"/create-animation__")).call(t,this.animationMapCount++);return this.animationMap[e]=this.steps.length,u()(n=this.steps).call(n,(function(t,n){var a,r,i,c,s,u=0===n?o()(a='[animation="'.concat(e,'"], [data-animation="')).call(a,e,'"]'):o()(r=o()(i=o()(c='[animation="'.concat(e,"--")).call(c,n,'"], [data-animation="')).call(i,e,"--")).call(r,n,'"]');h.add(o()(s="".concat(u," { ")).call(s,t," }"))})),this.steps=[],e}},{"key":"export","value":function _export(){return this.createAnimationData()}}]),Animation}(),O=function createAnimation(t){return new g(t)}},"834":function(t,n,e){},"883":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return K}));var a=e(39),r=e(40),i=e(175),c=e(66),o=e(65),s=e(91),u=e(64),l=e(578),d=e(579),f=(e(576),e(584),e(585),e(834),e(116)),m=e.n(f),h=e(55),b=e.n(h),v=e(24),p=e.n(v),j=e(571),g=e.n(j),O=e(32),y=e.n(O),k=e(570),x=e.n(k),_=e(27),w=e.n(_),S=e(173),I=e.n(S),A=e(572),D=e.n(A),N=e(573),C=e.n(N),U=e(577),T=e.n(U),E=e(5),R=e.n(E),X=e(90),F=e(831),Y=e(567),M=e(568),P=e(569),Z=e(593),$=e(574),z=e(583);var B=e(115),L=["text","mode","url","openType","delay","speed","scrollable","leftIcon","color","backgroundColor","background","wrapable","renderLeftIcon","renderRightIcon","onClick","onClose","style","className","children"];function ownKeys(t,n){var e=p()(t);if(g.a){var a=g()(t);n&&(a=y()(a).call(a,(function(n){return x()(t,n).enumerable}))),e.push.apply(e,a)}return e}function _objectSpread(t){for(var n=1;n<arguments.length;n++){var e,a=null!=arguments[n]?arguments[n]:{};if(n%2)w()(e=ownKeys(Object(a),!0)).call(e,(function(n){D()(t,n,a[n])}));else if(I.a)m()(t,I()(a));else{var r;w()(r=ownKeys(Object(a))).call(r,(function(n){b()(t,n,x()(a,n))}))}}return t}var V=0;var W=function NoticeBar(t){var n=Object(u.useState)({"ready":!1,"show":!0,"animationData":{"actions":[]},"unitag":0}),e=T()(n,2),a=e[0],r=e[1],i={"animation":null,"resetAnimation":null,"timer":null,"wrapWidth":void 0,"contentWidth":void 0,"duration":void 0},c=Object(u.useRef)(i),o=t.text,s=void 0===o?"":o,l=t.mode,d=void 0===l?"":l,f=t.url,m=void 0===f?"":f,h=t.openType,b=void 0===h?"navigate":h,v=t.delay,p=void 0===v?1:v,j=t.speed,g=void 0===j?60:j,O=t.scrollable,y=void 0===O?null:O,k=t.leftIcon,x=void 0===k?"":k,_=t.color,w=void 0===_?"#ed6a0c":_,S=t.backgroundColor,I=void 0===S?"#fffbe8":S,A=t.background,D=t.wrapable,N=t.renderLeftIcon,U=t.renderRightIcon,E=t.onClick,W=t.onClose,K=t.style,q=t.className,J=t.children,G=C()(t,L);Object(u.useEffect)((function(){r((function(t){return _objectSpread(_objectSpread({},t),{},{"unitag":V++})}))}),[]),X.a.useReady((function(){0})),Object(u.useEffect)((function(){c.current.resetAnimation=Object(F.a)({"duration":0,"timingFunction":"linear"}),r((function(t){return _objectSpread(_objectSpread({},t),{},{"ready":!0})}))}),[]),Object(u.useEffect)((function(){return s&&a.ready&&tt(),function(){c.current.timer&&clearTimeout(c.current.timer)}}),[s,g,a.ready]);var H,Q=Object(u.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];c.current.timer&&clearTimeout(c.current.timer),c.current.timer=null,r((function(n){return _objectSpread(_objectSpread({},n),{},{"animationData":c.current.resetAnimation.translateX(t?0:c.current.wrapWidth).step().export()})})),setTimeout((function(){Object(Z.h)((function(){r((function(t){return _objectSpread(_objectSpread({},t),{},{"animationData":c.current.animation.translateX(-c.current.contentWidth).step().export()})}))}))}),10),c.current.timer=setTimeout((function(){Q()}),c.current.duration)}),[]),tt=Object(u.useCallback)((function(){Object(Z.h)((function(){R.a.all([Object(Z.c)(null,".van-notice-bar__content_".concat(a.unitag)),Object(Z.c)(null,".van-notice-bar__wrap_".concat(a.unitag))]).then((function(t){var n=t[0],e=t[1];null!=n&&null!=e&&n.width&&e.width&&!1!==y&&Object(Y.a)((function(){(y||e.width<=n.width)&&(c.current.wrapWidth=e.width,c.current.contentWidth=n.width,c.current.duration=(e.width+n.width)/g*1e3,c.current.animation=Object(F.a)({"duration":c.current.duration,"timingFunction":"linear","delay":p}),Q(!0))}))}))}))}),[a.unitag,y,g,p,Q]),nt=Object(u.useCallback)((function(t){"closeable"===d&&(c.current.timer&&clearTimeout(c.current.timer),c.current.timer=null,r((function(t){return _objectSpread(_objectSpread({},t),{},{"show":!1})})),null==W||W(t))}),[d,W]);return a.show&&Object(B.jsxs)(M.n,_objectSpread(_objectSpread({"className":P.b("notice-bar",{"withicon":d,"wrapable":D})+" ".concat(q||""),"style":P.c([(H={"color":w,"backgroundColor":I,"background":A},Object(z.a)({"color":H.color,"background-color":H.backgroundColor,"background":H.background})),K])},G),{},{"onClick":E,"children":[x?Object(B.jsx)($.b,{"name":x,"className":"van-notice-bar__left-icon"}):N,Object(B.jsx)(M.n,{"className":"van-notice-bar__wrap van-notice-bar__wrap_".concat(a.unitag),"children":Object(B.jsxs)(M.n,{"className":"van-notice-bar__content van-notice-bar__content_".concat(a.unitag," ")+(!1!==y||D?"":"van-ellipsis"),"animation":a.animationData,"children":[s,!s&&J]})}),"closeable"===d?Object(B.jsx)($.b,{"className":"van-notice-bar__right-icon","name":"cross","onClick":nt}):"link"===d?Object(B.jsx)(M.h,{"url":m,"openType":b,"children":Object(B.jsx)($.b,{"className":"van-notice-bar__right-icon","name":"arrow"})}):U]}))};function Demo(){return Object(B.jsx)(W,{"leftIcon":"volume-o","text":"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"})}function demo2_Demo(){return Object(B.jsxs)(M.n,{"children":[Object(B.jsx)(W,{"scrollable":!0,"text":"技术是开发它的人的共同灵魂。"}),Object(B.jsx)(W,{"scrollable":!1,"text":"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"})]})}function demo3_Demo(){return Object(B.jsx)(W,{"wrapable":!0,"scrollable":!1,"text":"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"})}function demo4_Demo(){return Object(B.jsxs)(M.n,{"children":[Object(B.jsx)(W,{"mode":"closeable","text":"技术是开发它的人的共同灵魂。"}),Object(B.jsx)(W,{"mode":"link","text":"技术是开发它的人的共同灵魂。"})]})}function demo5_Demo(){return Object(B.jsx)(W,{"color":"#1989fa","background":"#ecf9ff","leftIcon":"info-o","text":"技术是开发它的人的共同灵魂。"})}function demo6_Demo(){return Object(B.jsx)(W,{"text":"技术是开发它的人的共同灵魂。技术是开发它的人的共同灵魂。","speed":20})}var K=function(t){Object(c.a)(Index,t);var n=Object(o.a)(Index);function Index(){var t;return Object(a.a)(this,Index),t=n.call(this),Object(s.a)(Object(i.a)(t),"state",{}),t}return Object(r.a)(Index,[{"key":"render","value":function render(){return Object(B.jsxs)(l.a,{"title":"NoticeBar 通知栏","className":"pages-notice-bar-index","children":[Object(B.jsx)(d.a,{"title":"基础用法","padding":!0,"children":Object(B.jsx)(Demo,{})}),Object(B.jsx)(d.a,{"title":"滚动播放","padding":!0,"children":Object(B.jsx)(demo2_Demo,{})}),Object(B.jsx)(d.a,{"title":"多行展示","padding":!0,"children":Object(B.jsx)(demo3_Demo,{})}),Object(B.jsx)(d.a,{"title":"通知栏模式","padding":!0,"children":Object(B.jsx)(demo4_Demo,{})}),Object(B.jsx)(d.a,{"title":"自定义样式","padding":!0,"children":Object(B.jsx)(demo5_Demo,{})}),Object(B.jsx)(d.a,{"title":"自定义滚动速率","padding":!0,"children":Object(B.jsx)(demo6_Demo,{})})]})}}]),Index}(u.Component)}}]);