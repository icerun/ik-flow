import{L as B,a as f,C as _,bX as w,bQ as v,h as P,aF as t,o as h,f as F,m as o,z as s,B as M,F as g}from"./index.f3fe0f3f.js";import{b as C}from"./index.033bc9aa.js";import k from"./index.96f04a94.js";import{A}from"./ApartmentOutlined.17036e74.js";import"./useWindowSizeFn.8e1e2f4b.js";import"./FullscreenOutlined.a1ca65d7.js";import"./index.1b5d0750.js";import"./index.e70aa727.js";import"./index.f1d0cead.js";import"./useSize.5ce57631.js";import"./eagerComputed.cc2dc322.js";import"./useContentViewHeight.d39ef36d.js";import"./ArrowLeftOutlined.677a463d.js";import"./index.3b80093e.js";import"./transButton.b11946f6.js";import"./index.5c6ad28f.js";import"./index.be9b0bc6.js";import"./useFlexGapSupport.396b27be.js";import"./index.d7bd09aa.js";import"./throttleByAnimationFrame.963da602.js";import"./index.2ddefb41.js";import"./Viewer.ca2e1abd.js";import"./process.023768c5.js";import"./PlusOutlined.c106decb.js";const E=f({name:"BaseActionButtons",components:{Button:_,Tooltip:w,ApartmentOutlined:A,BpmnPreviewModal:k},setup(e,{emit:l}){const{currentRoute:a}=v(),{params:{modelKey:m},query:{taskId:c,procInstId:u}}=P(a),[r,{openModal:n,setModalProps:p}]=C();function i(){n(!0,{modelKey:m,procInstId:u||"",isUpdate:!0}),p({width:900,minHeight:400,wrapperFooterOffset:20,useWrapper:!1,title:"\u67E5\u770B - \u56FE\u9884\u89C8",showOkBtn:!1,cancelText:"\u5173\u95ED"})}function d(){return Promise.resolve(!0)}return{registerBpmnPreviewModal:r,handleCloseFunc:d,showFlowDiagram:i}}});function I(e,l,a,m,c,u){const r=t("ApartmentOutlined"),n=t("Button"),p=t("Tooltip"),i=t("BpmnPreviewModal");return h(),F(g,null,[o(p,null,{title:s(()=>[M("\u67E5\u770B\u6D41\u7A0B\u56FE")]),default:s(()=>[o(n,{type:"link",onClick:e.showFlowDiagram},{icon:s(()=>[o(r)]),_:1},8,["onClick"])]),_:1}),o(i,{onRegister:e.registerBpmnPreviewModal},null,8,["onRegister"])],64)}var Z=B(E,[["render",I]]);export{Z as default};
