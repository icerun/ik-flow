var F=Object.defineProperty;var u=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var d=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))_.call(t,o)&&d(e,o,t[o]);if(u)for(var o of u(t))v.call(t,o)&&d(e,o,t[o]);return e};var c=(e,t,o)=>new Promise((n,p)=>{var l=r=>{try{i(o.next(r))}catch(s){p(s)}},a=r=>{try{i(o.throw(r))}catch(s){p(s)}},i=r=>r.done?n(r.value):Promise.resolve(r.value).then(l,a);i((o=o.apply(e,t)).next())});import{B as k,a as $}from"./index.ef1baeca.js";import{B as b}from"./BasicForm.35bf3188.js";import{u as y}from"./useForm.8dec0b63.js";import{f as C,b as R}from"./module.data.1bd82942.js";import{az as S,a as E,w as L,j as g,h as O,aB as h,o as P,k as U,B as V,p as T,aC as j}from"./index.741c5d36.js";import"./useWindowSizeFn.54947215.js";import"./FullscreenOutlined.d8f1076a.js";/* empty css              *//* empty css               */import"./index.d23d5e7f.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.abe396df.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./index.249616b7.js";import"./get.9f08d1a5.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./useSize.aa4022ca.js";import"./transButton.76f8f88c.js";import"./index.7b2c1cea.js";import"./index.847bc6c1.js";import"./index.ae783029.js";import"./uuid.2b29000c.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";const z=E({name:"ModuleModal",components:{BasicModal:k,BasicForm:b},emits:["success","register"],setup(e,{emit:t}){const o=L(!0),[n,{resetFields:p,setFieldsValue:l,updateSchema:a,validate:i}]=y({labelWidth:100,schemas:C,showActionButtonGroup:!1}),[r,{setModalProps:s,closeModal:B}]=$(m=>c(this,null,function*(){p(),s({confirmLoading:!1}),o.value=!!(m!=null&&m.isUpdate),g(o)?(l(f({},m.record)),a([{field:"component",show:!1},{field:"url",show:!1}])):a([{field:"component",show:!0},{field:"url",show:!0}])})),M=O(()=>g(o)?"\u4FEE\u6539":"\u65B0\u589E");function w(){return c(this,null,function*(){try{s({confirmLoading:!0});const m=yield i();yield R(m),B(),t("success")}finally{s({confirmLoading:!1})}})}return{registerModal:r,registerForm:n,getTitle:M,handleSubmit:w}}});function A(e,t,o,n,p,l){const a=h("BasicForm"),i=h("BasicModal");return P(),U(i,j(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:V(()=>[T(a,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Co=S(z,[["render",A]]);export{Co as default};
