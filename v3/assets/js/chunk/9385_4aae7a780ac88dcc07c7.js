/*! For license information please see 9385_4aae7a780ac88dcc07c7.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[9385],{"98840":function(t,n,o){"use strict";o.d(n,{"a":function(){return createCommonjsModule},"b":function(){return a},"c":function(){return c},"g":function(){return getDefaultExportFromCjs}});var i=o(99361),s=o(1858),u=o.n(s),a=void 0!==u()?u():"undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function createCommonjsModule(t,n,o){return t(o={"path":n,"exports":{},"require":function require(t,n){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}var c=createCommonjsModule((function(t){!function(){var n={}.hasOwnProperty;function r(){for(var t=[],o=0;o<arguments.length;o++){var s=arguments[o];if(s){var u=(0,i.Z)(s);if("string"===u||"number"===u)t.push(s);else if(Array.isArray(s)){if(s.length){var a=r.apply(null,s);a&&t.push(a)}}else if("object"===u)if(s.toString===Object.prototype.toString)for(var c in s)n.call(s,c)&&s[c]&&t.push(c);else t.push(s.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}()}))},"9385":function(t,n,o){"use strict";o.r(n),o.d(n,{"taro_navigator_core":function(){return l}});var i=o(22583),s=o.n(i),u=o(47109),a=o(3829),c=o(98840),l=function(){function e(t){(0,u.r)(this,t),this.onSuccess=(0,u.c)(this,"cuccess",7),this.onFail=(0,u.c)(this,"fail",7),this.onComplete=(0,u.c)(this,"Complete",7),this.openType="navigate",this.isHover=!1,this.delta=0}return e.prototype.onClick=function(){var t=this,n=t.openType,o=t.onSuccess,i=t.onFail,u=t.onComplete,c=s().resolve();switch(n){case"navigate":c=(0,a.T8)({"url":this.url});break;case"redirect":c=(0,a.gB)({"url":this.url});break;case"switchTab":c=(0,a.MR)({"url":this.url});break;case"reLaunch":c=(0,a.UY)({"url":this.url});break;case"navigateBack":c=(0,a.n)({"delta":this.delta});break;case"exit":c=s().reject(new Error('navigator:fail 暂不支持"openType: exit"'))}c&&c.then((function(t){o.emit(t)})).catch((function(t){i.emit(t)})).finally((function(){u.emit()}))},e.prototype.render=function(){var t,n=this.isHover,o=this.hoverClass;return(0,u.h)(u.H,{"class":(0,c.c)((t={},t[o]=n,t))})},e}();l.style=".navigator-hover{background:#efefef}"},"42142":function(t,n,o){var i=o(31585);t.exports=i},"74030":function(t,n,o){o(25067),t.exports=o(98576)},"36516":function(t,n,o){t.exports=o(79987)},"79987":function(t,n,o){o(5363);var i=o(42142);t.exports=i},"25067":function(t,n,o){var i=o(93085),s=o(98576);i({"global":!0,"forced":s.globalThis!==s},{"globalThis":s})},"5363":function(t,n,o){o(25067)},"31585":function(t,n,o){var i=o(74030);t.exports=i},"1858":function(t,n,o){t.exports=o(36516)}}]);