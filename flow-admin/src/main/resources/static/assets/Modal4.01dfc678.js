import{B as l,a as c}from"./index.ef1baeca.js";import{B as d}from"./BasicForm.35bf3188.js";import{u}from"./useForm.8dec0b63.js";import{a as f,w as B,az as g,an as h,aB as p,o as _,k as C,B as b,n as R,p as V,aC as v}from"./index.741c5d36.js";import"./useWindowSizeFn.54947215.js";import"./FullscreenOutlined.d8f1076a.js";/* empty css              *//* empty css               */import"./index.d23d5e7f.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.abe396df.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./index.249616b7.js";import"./get.9f08d1a5.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./useSize.aa4022ca.js";import"./transButton.76f8f88c.js";import"./index.7b2c1cea.js";import"./index.847bc6c1.js";import"./index.ae783029.js";import"./uuid.2b29000c.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";const n=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=f({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=B({}),[i,{}]=u({labelWidth:120,schemas:n,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){t.value={field2:o.data,field1:o.info}}function a(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:n,registerForm:i,model:t,handleVisibleChange:a}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,a){const o=p("BasicForm"),m=p("BasicModal");return _(),C(m,v(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:b(()=>[R("div",M,[V(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var co=g(F,[["render",D]]);export{co as default};
