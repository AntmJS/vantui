"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[2246],{"2246":function(s,o,t){t.r(o),t.d(o,{"taro_progress_core":function(){return i}});var e=t(7109),i=function(){function r(s){(0,e.r)(this,s),this.percent=0,this.showInfo=!1,this.borderRadius=0,this.fontSize=16,this.strokeWidth=6,this.activeColor="#09BB07",this.backgroundColor="#EBEBEB",this.active=!1}return r.prototype.render=function(){var s=this,o=s.percent,t=s.showInfo,i=s.borderRadius,n=s.fontSize,a=s.strokeWidth,h=s.activeColor,c=o>100?100:o<0?0:o,u={"height":a+"px","backgroundColor":s.backgroundColor},p=s.active?"width 1s ease-in-out":"none",d={"width":c+"%","transition":p,"WebkitTransition":p,"backgroundColor":h,"borderRadius":i?i+"px":"0px"};return(0,e.h)(e.H,{"class":"weui-progress"},(0,e.h)("div",{"class":"weui-progress__bar","style":u},(0,e.h)("div",{"class":"weui-progress__inner-bar","style":d})),t&&(0,e.h)("div",{"class":"weui-progress__opr","style":{"font-size":n+"px"}},(0,e.h)("span",null,c,"%")))},r}()}}]);