/*! For license information please see 74_0c96805919d864f22365.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[74],{"98840":function(e,o,n){"use strict";n.d(o,{"a":function(){return createCommonjsModule},"b":function(){return c},"c":function(){return a},"g":function(){return getDefaultExportFromCjs}});var i=n(99361),s=n(1858),u=n.n(s),c=void 0!==u()?u():"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,o,n){return e(n={"path":o,"exports":{},"require":function require(e,o){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var a=createCommonjsModule((function(e){!function(){var o={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var u=(0,i.Z)(s);if("string"===u||"number"===u)e.push(s);else if(Array.isArray(s)){if(s.length){var c=r.apply(null,s);c&&e.push(c)}}else if("object"===u)if(s.toString===Object.prototype.toString)for(var a in s)o.call(s,a)&&s[a]&&e.push(a);else e.push(s.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}))},"49605":function(e,o,n){"use strict";n.r(o),n.d(o,{"taro_view_core":function(){return p}});var i=n(21463),s=n.n(i),u=n(45932),c=n.n(u),a=n(57961),h=n.n(a),l=n(47109),f=n(98840),p=function(){function t(e){(0,l.r)(this,e),this.onLongPress=(0,l.c)(this,"longpress",7),this.hoverStartTime=50,this.hoverStayTime=400,this.hover=!1,this.touch=!1,this.startTime=0}return t.prototype.onTouchStart=function(){var e=this;this.hoverClass&&(this.touch=!0,setTimeout((function(){e.touch&&(e.hover=!0)}),this.hoverStartTime)),this.timeoutEvent=setTimeout((function(){e.onLongPress.emit()}),350),this.startTime=Date.now()},t.prototype.onTouchMove=function(){clearTimeout(this.timeoutEvent)},t.prototype.onTouchEnd=function(){var e=this;Date.now()-this.startTime<350&&clearTimeout(this.timeoutEvent),this.hoverClass&&(this.touch=!1,setTimeout((function(){e.touch||(e.hover=!1)}),this.hoverStayTime))},t.prototype.componentDidRender=function(){var e,o=this.el;s()(e=o.childNodes).call(e,(function(e){e.nodeType===document.COMMENT_NODE&&e["s-cn"]&&(e["s-cn"]=!1)}))},t.prototype.render=function(){var e,o=(0,f.c)(((e={})[""+this.hoverClass]=this.hover,e)),n={};return this.animation&&(n.animation=this.animation,n["data-animation"]=this.animation),(0,l.h)(l.H,c()({"class":o},n),(0,l.h)("slot",null))},h()(t.prototype,"el",{"get":function get(){return(0,l.g)(this)},"enumerable":!1,"configurable":!0}),t}();p.style="body,html{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}taro-view-core{display:block}"},"42142":function(e,o,n){var i=n(31585);e.exports=i},"74030":function(e,o,n){n(25067),e.exports=n(98576)},"36516":function(e,o,n){e.exports=n(79987)},"79987":function(e,o,n){n(5363);var i=n(42142);e.exports=i},"25067":function(e,o,n){n(93085)({"global":!0},{"globalThis":n(98576)})},"5363":function(e,o,n){n(25067)},"31585":function(e,o,n){var i=n(74030);e.exports=i},"1858":function(e,o,n){e.exports=n(36516)}}]);