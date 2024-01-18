import{m as u,r as $,aA as j,a as I,V as H,v as R,w as N,K as U,ar as O,J as M,cI as z,f9 as W,Y as J,_ as T,S as w,d0 as X,x as Y,y as q,cm as G,d9 as Q,L as Z,c2 as D,br as K,fa as tt,b as et,e as E,h as _,cj as L,aF as S,o as b,f as ot,i as P,j as B,p as nt,F as rt}from"./index.bd2622a4.js";import{c as V,u as at}from"./index.c7e31164.js";import it from"./SessionTimeoutLogin.062c3986.js";import{s as st,g as ct}from"./scrollTo.3e7accaf.js";import{t as lt}from"./throttleByAnimationFrame.fc5d90b2.js";import"./FullscreenOutlined.0d0c0c2d.js";import"./index.248b5bf2.js";import"./useWindowSizeFn.67ef7ff7.js";import"./uniqBy.41fe84d3.js";import"./_baseIteratee.a0786c1b.js";import"./get.20c5cbf9.js";import"./useContentViewHeight.8f4c0ff9.js";import"./index.fb349c07.js";import"./useRefs.4ffc2415.js";import"./PlusOutlined.f9ed6f81.js";import"./RedoOutlined.36268724.js";import"./index.c4d4ea51.js";import"./lock.b9c78e66.js";import"./Login.0c7fa9c4.js";import"./LoginForm.77c68f1d.js";import"./index.ed2abe14.js";import"./index.aa874616.js";import"./index.34f9998b.js";import"./useFlexGapSupport.4d2f8b85.js";import"./useSize.8a6ae0ee.js";import"./index.43820172.js";import"./LoginFormTitle.c39afabc.js";import"./GithubFilled.338ee789.js";import"./index.0e48b9d8.js";import"./ForgetPasswordForm.c4b40c5c.js";import"./index.a002d195.js";import"./RegisterForm.d34e57e4.js";import"./index.c7a7383a.js";import"./MobileForm.29ea7803.js";import"./QrCodeForm.de34020d.js";import"./download.d61a3495.js";var ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},pt=ut;function x(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable}))),n.forEach(function(r){mt(t,r,o[r])})}return t}function mt(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var A=function(e,o){var n=x({},e,o.attrs);return u($,x({},n,{icon:pt}),null)};A.displayName="VerticalAlignTopOutlined";A.inheritAttrs=!1;var gt=A,vt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},ft=I({compatConfig:{MODE:3},name:"ABackTop",inheritAttrs:!1,props:vt(),setup:function(e,o){var n=o.slots,r=o.attrs,d=o.emit,p=H("back-top",e),c=p.prefixCls,g=p.direction,i=R(),v=N({visible:!1,scrollEvent:null}),C=function(){return i.value&&i.value.ownerDocument?i.value.ownerDocument:window},F=function(s){var l=e.target,m=l===void 0?C:l,f=e.duration;st(0,{getContainer:m,duration:f}),d("click",s)},h=lt(function(a){var s=e.visibilityHeight,l=ct(a.target,!0);v.visible=l>s}),y=function(){var s=e.target,l=s||C,m=l();v.scrollEvent=Q(m,"scroll",function(f){h(f)}),h({target:m})},k=function(){v.scrollEvent&&v.scrollEvent.remove(),h.cancel()};return U(function(){return e.target},function(){k(),O(function(){y()})}),M(function(){O(function(){y()})}),z(function(){O(function(){y()})}),W(function(){k()}),J(function(){k()}),function(){var a,s,l=u("div",{class:"".concat(c.value,"-content")},[u("div",{class:"".concat(c.value,"-icon")},[u(gt,null,null)])]),m=T(T({},r),{},{onClick:F,class:(a={},w(a,"".concat(c.value),!0),w(a,"".concat(r.class),r.class),w(a,"".concat(c.value,"-rtl"),g.value==="rtl"),a)}),f=X("fade");return u(G,f,{default:function(){return[Y(u("div",T(T({},m),{},{ref:i}),[((s=n.default)===null||s===void 0?void 0:s.call(n))||l]),[[q,v.visible]])]}})}}}),dt=j(ft);const Tt=I({name:"LayoutFeatures",components:{BackTop:dt,LayoutLockPage:V(()=>D(()=>import("./index.0ebea972.js"),["assets/index.0ebea972.js","assets/index.bd2622a4.js","assets/index.376ee235.css","assets/LockPage.882cda5c.js","assets/LockPage.afa0c1ae.css","assets/lock.b9c78e66.js","assets/header.d801b988.js"])),SettingDrawer:V(()=>D(()=>import("./index.758dfb3f.js").then(function(t){return t.i}),["assets/index.758dfb3f.js","assets/index.fbe1d78d.css","assets/index.bd2622a4.js","assets/index.376ee235.css","assets/index.c7e31164.js","assets/index.e590ad8d.css","assets/FullscreenOutlined.0d0c0c2d.js","assets/index.248b5bf2.js","assets/index.fbb444ab.css","assets/useWindowSizeFn.67ef7ff7.js","assets/uniqBy.41fe84d3.js","assets/_baseIteratee.a0786c1b.js","assets/get.20c5cbf9.js","assets/useContentViewHeight.8f4c0ff9.js","assets/index.fb349c07.js","assets/index.729371a4.css","assets/useRefs.4ffc2415.js","assets/PlusOutlined.f9ed6f81.js","assets/RedoOutlined.36268724.js","assets/index.c4d4ea51.js","assets/lock.b9c78e66.js","assets/ArrowLeftOutlined.31e20ceb.js","assets/index.43820172.js","assets/index.3a3c1369.css"])),SessionTimeoutLogin:it},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e,getSettingButtonPosition:o,getFullContent:n}=K(),r=tt(),{prefixCls:d}=et("setting-drawer-feature"),{getShowHeader:p}=at(),c=E(()=>r.getSessionTimeout),g=E(()=>{if(!_(e))return!1;const i=_(o);return i===L.AUTO?!_(p)||_(n):i===L.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:g,prefixCls:d,getIsSessionTimeout:c}}});function _t(t,e,o,n,r,d){const p=S("LayoutLockPage"),c=S("BackTop"),g=S("SettingDrawer"),i=S("SessionTimeoutLogin");return b(),ot(rt,null,[u(p),t.getUseOpenBackTop?(b(),P(c,{key:0,target:t.getTarget},null,8,["target"])):B("",!0),t.getIsFixedSettingDrawer?(b(),P(g,{key:1,class:nt(t.prefixCls)},null,8,["class"])):B("",!0),t.getIsSessionTimeout?(b(),P(i,{key:2})):B("",!0)],64)}var oe=Z(Tt,[["render",_t]]);export{oe as default};
