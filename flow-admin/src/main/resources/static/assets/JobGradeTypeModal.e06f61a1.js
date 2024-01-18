var C=Object.defineProperty,_=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var B=(u,t,e)=>t in u?C(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,E=(u,t)=>{for(var e in t||(t={}))I.call(t,e)&&B(u,e,t[e]);if(h)for(var e of h(t))M.call(t,e)&&B(u,e,t[e]);return u},b=(u,t)=>_(u,x(t));var f=(u,t,e)=>new Promise((n,r)=>{var d=o=>{try{a(e.next(o))}catch(i){r(i)}},l=o=>{try{a(e.throw(o))}catch(i){r(i)}},a=o=>o.done?n(o.value):Promise.resolve(o.value).then(d,l);a((e=e.apply(u,t)).next())});import{B as A,a as v}from"./index.ef1baeca.js";import{B as k}from"./BasicForm.35bf3188.js";import{u as N}from"./useForm.8dec0b63.js";import{bU as S,az as T,a as q,w as R,j as F,h as V,aB as w,o as $,k as j,B as O,p as G,aC as J}from"./index.741c5d36.js";import{T as U}from"./index.abe396df.js";import{c as L,s as z}from"./jobGradeType.d83217ce.js";import{F as W}from"./constantEnum.bf6653fb.js";const ae=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",align:"left"},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:u})=>{const e=~~u.status===1,n=e?"green":"red",r=e?"\u542F\u7528":"\u505C\u7528";return S(U,{color:n},()=>r)}},{title:"\u6392\u5E8F\u7F16\u53F7",dataIndex:"orderNo",width:100,align:"left"},{title:"\u5907\u6CE8",dataIndex:"note",align:"left"}],ne=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],H=[{field:"id",label:"",required:!1,component:"Input",show:!1},{field:"code",label:"\u7F16\u7801",required:!0,component:"Input",show:!0,colProps:{span:24}},{field:"name",label:"\u540D\u79F0",required:!0,component:"Input",show:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:80,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E80\uFF01"}],colProps:{span:24}},{field:"status",label:"\u72B6\u6001",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u505C\u7528"},colProps:{span:24}},{field:"orderNo",label:"\u6392\u5E8F\u7F16\u53F7",required:!1,component:"InputNumber",show:!0},{field:"note",label:"\u5907\u6CE8",required:!1,component:"InputTextArea",show:!0,rules:[{max:255,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E255\uFF01"}],colProps:{span:24}}],K=q({name:"JobGradeTypeModal",components:{BasicModal:A,BasicForm:k},emits:["success","register"],setup(u,{emit:t}){const e=R(!0),[n,{resetFields:r,updateSchema:d,setFieldsValue:l,validate:a}]=N({labelWidth:100,schemas:H,showActionButtonGroup:!1}),o=s=>[{trigger:"blur",validator:(m,g)=>g?L({id:s.id,field:s.field,fieldValue:g,fieldName:s.fieldName}).then(p=>p?Promise.resolve():Promise.reject(s.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(p=>Promise.reject(p)):Promise.resolve()}],[i,{setModalProps:c,closeModal:D}]=v(s=>f(this,null,function*(){yield r(),c({confirmLoading:!1}),e.value=!!(s!=null&&s.isUpdate);let m=s.record;yield d([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(W.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:40,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E40\uFF01"},...o({id:F(e)&&m&&m.id||"",field:"code",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),F(e)&&l(b(E({},s.record),{status:s.record.status===1}))})),P=V(()=>F(e)?"\u4FEE\u6539":"\u65B0\u589E");function y(){return f(this,null,function*(){try{c({confirmLoading:!0});const s=yield a();s.status=s.status?1:0,yield z(s),D(),t("success")}finally{c({confirmLoading:!1})}})}return{registerModal:i,registerForm:n,getTitle:P,handleSubmit:y}}});function Q(u,t,e,n,r,d){const l=w("BasicForm"),a=w("BasicModal");return $(),j(a,J(u.$attrs,{onRegister:u.registerModal,title:u.getTitle,onOk:u.handleSubmit}),{default:O(()=>[G(l,{onRegister:u.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var X=T(K,[["render",Q]]),le=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));export{X as J,le as a,ae as c,ne as s};
