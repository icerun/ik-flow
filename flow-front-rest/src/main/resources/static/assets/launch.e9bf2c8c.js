var h=(t,r,e)=>new Promise((a,m)=>{var u=s=>{try{o(e.next(s))}catch(n){m(n)}},l=s=>{try{o(e.throw(s))}catch(n){m(n)}},o=s=>s.done?a(s.value):Promise.resolve(s.value).then(u,l);o((e=e.apply(t,r)).next())});import{P as D}from"./index.1b5d0750.js";import{f6 as v,h as B,L as C,a as L,f7 as A,v as F,bA as P,bQ as T,aF as c,o as E,i as b,z as i,m as p,B as d,t as R,l as _,E as x}from"./index.f3fe0f3f.js";import S from"./ActionButtons.9accc8a6.js";import k from"./FormContainer.e75eaa4b.js";import w from"./BaseActionButtons.09d5c555.js";import M from"./ProcessBackButton.213292eb.js";import{S as N}from"./index.be9b0bc6.js";import{T as $}from"./index.5c6ad28f.js";import I from"./ProcessHeader.66d0c5d0.js";import{h as K,q as V}from"./process.023768c5.js";import"./index.e70aa727.js";import"./index.f1d0cead.js";import"./useSize.5ce57631.js";import"./eagerComputed.cc2dc322.js";import"./useWindowSizeFn.8e1e2f4b.js";import"./useContentViewHeight.d39ef36d.js";import"./ArrowLeftOutlined.677a463d.js";import"./index.3b80093e.js";import"./transButton.b11946f6.js";import"./index.218af737.js";import"./index.00811394.js";import"./useFlexGapSupport.396b27be.js";import"./index.30e23674.js";import"./CopyOutlined.09a0657f.js";import"./index.78295ba6.js";import"./index.2ddefb41.js";import"./index.51e867e3.js";import"./get.ac77a413.js";import"./index.17a7febc.js";import"./index.033bc9aa.js";import"./FullscreenOutlined.a1ca65d7.js";import"./index.96f04a94.js";import"./index.d7bd09aa.js";import"./throttleByAnimationFrame.963da602.js";import"./Viewer.ca2e1abd.js";import"./PlusOutlined.c106decb.js";import"./ApartmentOutlined.17036e74.js";import"./index.f8e018fb.js";import"./useRefs.e4782df1.js";import"./index.bc06cf2e.js";function W(t){let r,e=document.body;if(Reflect.has(t,"target")||Reflect.has(t,"props")){const o=t;r=o.props||{},e=o.target||document.body}else r=t;const a=v(r,void 0,!0);return[()=>{const o=B(e);!o||a.open(o)},()=>{a.close()},o=>{a.setTip(o)}]}const q=L({components:{ProcessHeader:I,PageWrapper:D,FormContainer:k,ActionButtons:S,BaseActionButtons:w,ProcessBackButton:M,Space:N,Tag:$,Loading:A},setup(){const t=F(),r=F({}),{createMessage:e}=x(),a=P(),{currentRoute:m}=T(),{params:{modelKey:u}}=B(m),[l,o]=W({tip:"\u63D0\u4EA4\u4E2D..."});K({modelKey:u}).then(n=>{r.value=n});function s(){return h(this,null,function*(){l();try{const n=yield B(t).getFormData(!0),g=yield V({formData:JSON.stringify(n),processDefinitionKey:u}),{data:f}=g;f.success?(e.success(f.msg),setTimeout(()=>{o(),a("/process/launched")},500)):(o(),e.error(f.msg))}catch(n){o()}})}return{modelBaseInfo:r,formContainerRef:t,doLaunch:s}}}),z={class:"pb-2"},G={class:"desc-wrap"};function H(t,r,e,a,m,u){const l=c("ProcessBackButton"),o=c("BaseActionButtons"),s=c("action-buttons"),n=c("Tag"),g=c("Space"),f=c("FormContainer"),y=c("PageWrapper");return E(),b(y,{class:"!mt-4 process-container",contentClass:"flex"},{title:i(()=>[p(l),d(" "+R(t.modelBaseInfo.name||"-")+" ",1),p(o)]),extra:i(()=>[p(s,{onDoLaunch:t.doLaunch},null,8,["onDoLaunch"])]),footer:i(()=>[_("div",z,[p(g,null,{default:i(()=>[_("span",null,[d(" \u6D41\u7A0BBP\uFF1A"),p(n,null,{default:i(()=>[d("\u5F20\u4E09")]),_:1})]),_("span",null,[d(" \u5F52\u5C5E\u90E8\u95E8\uFF1A"),p(n,null,{default:i(()=>[d("\u674E\u56DB")]),_:1})])]),_:1})])]),default:i(()=>[_("div",G,[p(f,{ref:"formContainerRef"},null,512)])]),_:1})}var wo=C(q,[["render",H]]);export{wo as default};
