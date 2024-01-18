var h=(o,l,r)=>new Promise((s,m)=>{var a=t=>{try{i(r.next(t))}catch(n){m(n)}},u=t=>{try{i(r.throw(t))}catch(n){m(n)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(a,u);i((r=r.apply(o,l)).next())});import{B as _}from"./TableImg.7ea72800.js";import{l as L}from"./BasicForm.35bf3188.js";import{u as A}from"./useTable.02d43016.js";import{b as T}from"./index.ef1baeca.js";import{L as y,g as w,c as k,s as F,d as b}from"./LoginLogModal.87cd841b.js";import{az as D,a as M,aB as p,o as C,i as S,p as c,B as d,C as R,k as v,l as $,G as P}from"./index.741c5d36.js";import{P as I}from"./perEnum.1877da10.js";import{A as N}from"./index.eacd3782.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./useForm.8dec0b63.js";import"./index.ffcec715.js";import"./index.6c70cdbc.js";import"./index.f51813a8.js";import"./useSize.aa4022ca.js";import"./useWindowSizeFn.54947215.js";import"./useContentViewHeight.1814e20c.js";import"./ArrowLeftOutlined.20c8fc9b.js";import"./index.0934399d.js";import"./transButton.76f8f88c.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./index.abe396df.js";import"./uuid.2b29000c.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./index.d23d5e7f.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.d982c887.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.ae783029.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.a7aa9d8e.js";import"./index.11816690.js";/* empty css              *//* empty css               */import"./index.249616b7.js";import"./index.7b2c1cea.js";import"./index.847bc6c1.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";const V=M({name:"LoginLog",components:{BasicTable:_,TableAction:L,LoginLogModal:y,Authority:N},setup(){const{createMessage:o,createConfirm:l}=P(),[r,{openModal:s}]=T(),[m,{reload:a,getSelectRows:u}]=A({title:"\u5217\u8868",api:w,columns:k,formConfig:{labelWidth:120,schemas:F,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},rowSelection:{type:"checkbox",columnWidth:30},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:60,title:"\u64CD\u4F5C",dataIndex:"action"}});function i(){s(!0,{isUpdate:!1})}function t(e){s(!0,{record:e,isUpdate:!0})}function n(e){b([e.id]).then(()=>{a()})}function f(){const e=u();if(e&&e.length<=0){o.warn("\u8BF7\u9009\u62E9\u884C\uFF01");return}l({iconType:"warning",title:"\u63D0\u793A",content:"\u786E\u5B9A\u8981\u5220\u9664\u6240\u9009\u884C\u5417\uFF1F",onOk:()=>h(this,null,function*(){const B=e.map(E=>E.id);yield b(B).then(()=>{a()})})})}function g(){a()}return{PerEnum:I,registerTable:m,registerModal:r,handleCreate:i,handleEdit:t,handleDelete:n,handleDeleteAll:f,handleSuccess:g}}});function x(o,l,r,s,m,a){const u=p("a-button"),i=p("Authority"),t=p("TableAction"),n=p("BasicTable"),f=p("LoginLogModal");return C(),S("div",null,[c(n,{onRegister:o.registerTable},{toolbar:d(()=>[c(i,{value:this.$options.name+":"+o.PerEnum.DELETE},{default:d(()=>[c(u,{type:"danger",onClick:o.handleDeleteAll},{default:d(()=>[R(" \u5220\u9664")]),_:1},8,["onClick"])]),_:1},8,["value"])]),bodyCell:d(({column:g,record:e})=>[g.key==="action"?(C(),v(t,{key:0,actions:[{tooltip:"\u5220\u9664",auth:this.$options.name+":"+o.PerEnum.DELETE,icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,e)}}]},null,8,["actions"])):$("",!0)]),_:1},8,["onRegister"]),c(f,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Wo=D(V,[["render",x]]);export{Wo as default};
