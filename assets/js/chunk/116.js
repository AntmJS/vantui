(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{"291":function(t,n,i){"use strict";i.r(n),i.d(n,"taro_textarea_core",(function(){return a}));var o=i(57);function fixControlledValue(t){return null!=t?t:""}var a=function(){function e(t){var n=this;Object(o.g)(this,t),this.onInput=Object(o.c)(this,"input",7),this.onFocus=Object(o.c)(this,"focus",7),this.onBlur=Object(o.c)(this,"blur",7),this.onChange=Object(o.c)(this,"change",7),this.onLineChange=Object(o.c)(this,"linechange",7),this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.autoHeight=!1,this.nativeProps={},this.line=1,this.hanldeInput=function(t){t.stopPropagation(),n.handleLineChange(),n.onInput.emit({"value":t.target.value,"cursor":t.target.value.length})},this.handleFocus=function(t){n.onFocus.emit({"value":t.target.value})},this.handleBlur=function(t){n.onBlur.emit({"value":t.target.value})},this.handleChange=function(t){t.stopPropagation(),n.onChange.emit({"value":t.target.value})},this.handleLineChange=function(){var t=n.getNumberOfLines();t!==n.line&&(n.line=t,n.onLineChange.emit({"height":n.textareaRef.clientHeight,"lineCount":n.line}))},this.calculateContentHeight=function(t,n){var i=t.style.height,o=t.offsetHeight,a=t.scrollHeight,r=t.style.overflow;if(!(o>=a))return a;if(t.style.height=o+n+"px",t.style.overflow="hidden",a<t.scrollHeight){for(;t.offsetHeight>=t.scrollHeight;)t.style.height=(o-=n)+"px";for(;t.offsetHeight<t.scrollHeight;)t.style.height=o+++"px";return t.style.height=i,t.style.overflow=r,o}},this.getNumberOfLines=function(){var t=n.textareaRef,i=window.getComputedStyle?window.getComputedStyle(t):t.style,o=parseInt(i.lineHeight,10),a=n.calculateContentHeight(t,o);return Math.floor(a/o)}}return e.prototype.componentDidLoad=function(){var t=this;Object.defineProperty(this.el,"value",{"get":function get(){return t.textareaRef.value},"set":function set(n){return t.value=n},"configurable":!0}),this.autoFocus&&this.textareaRef.focus()},e.prototype.render=function(){var t=this,n=this,i=n.value,a=n.placeholder,r=n.disabled,h=n.maxlength,l=n.autoFocus,u=n.autoHeight,s=n.name,c=n.nativeProps,g=n.hanldeInput,f=n.handleFocus,p=n.handleBlur,d=n.handleChange,v={};return u&&(v.rows=this.line),Object(o.e)("textarea",Object.assign({"ref":function ref(n){n&&(t.textareaRef=n)},"class":"taro-textarea "+(u?"auto-height":""),"value":fixControlledValue(i),"placeholder":a,"name":s,"disabled":r,"maxlength":h,"autofocus":l,"onInput":g,"onFocus":f,"onBlur":p,"onChange":d},c,v))},Object.defineProperty(e.prototype,"el",{"get":function get(){return Object(o.d)(this)},"enumerable":!1,"configurable":!0}),e}();a.style="taro-textarea-core{display:block;width:300px}taro-textarea-core .auto-height{height:auto}.taro-textarea{-webkit-appearance:none;cursor:auto;width:100%;height:150px;border:0;display:block;position:relative;line-height:1.5}.taro-textarea:focus{outline:none}"}}]);