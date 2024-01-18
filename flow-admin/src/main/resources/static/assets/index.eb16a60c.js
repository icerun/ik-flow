import{p as u,s as $,V as j,a as F,K as H,w as N,x as R,a9 as U,an as O,O as z,cy as M,fc as W,N as Q,_ as T,U as w,d_ as X,y as q,z as G,bQ as J,dk as Y,az as Z,bv as D,bF as K,fE as tt,c as et,h as A,j as _,bN as L,aB as S,o as b,i as ot,k as P,l as B,r as rt,F as nt}from"./index.741c5d36.js";import{c as V,u as it}from"./index.9cfe730d.js";import at from"./SessionTimeoutLogin.b8b5583c.js";import{s as st,g as ct}from"./scrollTo.a7aa9d8e.js";import{t as lt}from"./throttleByAnimationFrame.40d5ccf9.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.260a512e.js";import"./useWindowSizeFn.54947215.js";import"./useContentViewHeight.1814e20c.js";import"./useFrameKeepAlive.bc2bf6e8.js";import"./uniqBy.c3dbbda0.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./index.1cbe5b78.js";import"./index.97f32770.js";import"./useRefs.31b824e4.js";import"./PlusOutlined.5bbe1aad.js";import"./RedoOutlined.d982c887.js";import"./index.8f63e937.js";import"./lock.0db9de73.js";import"./Login.22985cdd.js";import"./LoginForm.dfde7b70.js";import"./index.5fb5b3b2.js";import"./Checkbox.2841bc84.js";/* empty css              *//* empty css               */import"./index.d23d5e7f.js";import"./LoginFormTitle.3c578754.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./useSize.aa4022ca.js";import"./GithubFilled.f4989547.js";import"./WechatFilled.d98aa1c6.js";import"./index.196769f5.js";import"./ForgetPasswordForm.d30d80ce.js";import"./index.249616b7.js";import"./RegisterForm.ed6654c3.js";import"./index.2f746864.js";import"./MobileForm.d241e6ab.js";import"./QrCodeForm.034ebd0c.js";import"./index.30f21c40.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";var ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},pt=ut;function x(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),r.forEach(function(n){mt(t,n,o[n])})}return t}function mt(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var E=function(e,o){var r=x({},e,o.attrs);return u($,x({},r,{icon:pt}),null)};E.displayName="VerticalAlignTopOutlined";E.inheritAttrs=!1;var gt=E,vt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},ft=F({compatConfig:{MODE:3},name:"ABackTop",inheritAttrs:!1,props:vt(),setup:function(e,o){var r=o.slots,n=o.attrs,d=o.emit,p=H("back-top",e),c=p.prefixCls,g=p.direction,a=N(),v=R({visible:!1,scrollEvent:null}),C=function(){return a.value&&a.value.ownerDocument?a.value.ownerDocument:window},I=function(s){var l=e.target,m=l===void 0?C:l,f=e.duration;st(0,{getContainer:m,duration:f}),d("click",s)},h=lt(function(i){var s=e.visibilityHeight,l=ct(i.target,!0);v.visible=l>s}),y=function(){var s=e.target,l=s||C,m=l();v.scrollEvent=Y(m,"scroll",function(f){h(f)}),h({target:m})},k=function(){v.scrollEvent&&v.scrollEvent.remove(),h.cancel()};return U(function(){return e.target},function(){k(),O(function(){y()})}),z(function(){O(function(){y()})}),M(function(){O(function(){y()})}),W(function(){k()}),Q(function(){k()}),function(){var i,s,l=u("div",{class:"".concat(c.value,"-content")},[u("div",{class:"".concat(c.value,"-icon")},[u(gt,null,null)])]),m=T(T({},n),{},{onClick:I,class:(i={},w(i,"".concat(c.value),!0),w(i,"".concat(n.class),n.class),w(i,"".concat(c.value,"-rtl"),g.value==="rtl"),i)}),f=X("fade");return u(J,f,{default:function(){return[q(u("div",T(T({},m),{},{ref:a}),[((s=r.default)===null||s===void 0?void 0:s.call(r))||l]),[[G,v.visible]])]}})}}}),dt=j(ft);const Tt=F({name:"LayoutFeatures",components:{BackTop:dt,LayoutLockPage:V(()=>D(()=>import("./index.d4c95cc0.js"),["assets/index.d4c95cc0.js","assets/index.741c5d36.js","assets/index.f0ae4520.css","assets/LockPage.91de8eb6.js","assets/LockPage.ad5cabd1.css","assets/lock.0db9de73.js","assets/header.d801b988.js"])),SettingDrawer:V(()=>D(()=>import("./index.2ad701f5.js").then(function(t){return t.i}),["assets/index.2ad701f5.js","assets/index.bfe68b8f.js","assets/index.c39445e0.css","assets/index.741c5d36.js","assets/index.f0ae4520.css","assets/index.1cbe5b78.js","assets/index.464798c8.css","assets/ArrowLeftOutlined.20c8fc9b.js","assets/index.d23d5e7f.js","assets/index.3a3c1369.css","assets/index.9cfe730d.js","assets/index.d7032874.css","assets/FullscreenOutlined.d8f1076a.js","assets/index.260a512e.js","assets/index.39422f85.css","assets/useWindowSizeFn.54947215.js","assets/useContentViewHeight.1814e20c.js","assets/useFrameKeepAlive.bc2bf6e8.js","assets/uniqBy.c3dbbda0.js","assets/_baseIteratee.9655ef6b.js","assets/get.9f08d1a5.js","assets/index.97f32770.js","assets/index.b34048aa.css","assets/useRefs.31b824e4.js","assets/PlusOutlined.5bbe1aad.js","assets/RedoOutlined.d982c887.js","assets/index.8f63e937.js","assets/lock.0db9de73.js"])),SessionTimeoutLogin:at},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e,getSettingButtonPosition:o,getFullContent:r}=K(),n=tt(),{prefixCls:d}=et("setting-drawer-feature"),{getShowHeader:p}=it(),c=A(()=>n.getSessionTimeout),g=A(()=>{if(!_(e))return!1;const a=_(o);return a===L.AUTO?!_(p)||_(r):a===L.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:g,prefixCls:d,getIsSessionTimeout:c}}});function _t(t,e,o,r,n,d){const p=S("LayoutLockPage"),c=S("BackTop"),g=S("SettingDrawer"),a=S("SessionTimeoutLogin");return b(),ot(nt,null,[u(p),t.getUseOpenBackTop?(b(),P(c,{key:0,target:t.getTarget},null,8,["target"])):B("",!0),t.getIsFixedSettingDrawer?(b(),P(g,{key:1,class:rt(t.prefixCls)},null,8,["class"])):B("",!0),t.getIsSessionTimeout?(b(),P(a,{key:2})):B("",!0)],64)}var ue=Z(Tt,[["render",_t]]);export{ue as default};
