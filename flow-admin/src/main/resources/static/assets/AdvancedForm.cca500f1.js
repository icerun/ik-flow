import{B as c}from"./BasicForm.35bf3188.js";import{u as a}from"./useForm.8dec0b63.js";import{az as B,a as d,cE as f,aB as r,o as b,k as P,B as n,p as t}from"./index.741c5d36.js";import{P as h}from"./index.ffcec715.js";/* empty css              *//* empty css               */import"./index.d23d5e7f.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.abe396df.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./index.249616b7.js";import"./get.9f08d1a5.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./useSize.aa4022ca.js";import"./transButton.76f8f88c.js";import"./index.7b2c1cea.js";import"./index.ef1baeca.js";import"./useWindowSizeFn.54947215.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.847bc6c1.js";import"./index.ae783029.js";import"./uuid.2b29000c.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";import"./index.6c70cdbc.js";import"./index.f51813a8.js";import"./useContentViewHeight.1814e20c.js";import"./ArrowLeftOutlined.20c8fc9b.js";import"./index.0934399d.js";const s=()=>[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}];function C(){return[{field:"field10",component:"Input",label:"\u5B57\u6BB510",colProps:{span:8}},{field:"field11",component:"Input",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field12",component:"Input",label:"\u5B57\u6BB512",colProps:{span:8}},{field:"field13",component:"Input",label:"\u5B57\u6BB513",colProps:{span:8}}]}const F=d({components:{BasicForm:c,CollapseContainer:f,PageWrapper:h},setup(){const[o]=a({labelWidth:120,schemas:s(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),p=[];for(let e=14;e<30;e++)p.push({field:"field"+e,component:"Input",label:"\u5B57\u6BB5"+e,colProps:{span:8}});const[i]=a({labelWidth:120,schemas:[...s(),...C(),{field:"",component:"Divider",label:"\u66F4\u591A\u5B57\u6BB5"},...p],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:o,register1:i}}});function g(o,p,i,e,_,A){const l=r("BasicForm"),u=r("CollapseContainer"),m=r("PageWrapper");return b(),P(m,{title:"\u53EF\u6298\u53E0\u8868\u5355\u793A\u4F8B"},{default:n(()=>[t(u,{title:"\u57FA\u7840\u6536\u7F29\u793A\u4F8B"},{default:n(()=>[t(l,{onRegister:o.register},null,8,["onRegister"])]),_:1}),t(u,{title:"\u8D85\u8FC73\u884C\u81EA\u52A8\u6536\u8D77\uFF0C\u6298\u53E0\u65F6\u4FDD\u75592\u884C",class:"mt-4"},{default:n(()=>[t(l,{onRegister:o.register1},null,8,["onRegister"])]),_:1})]),_:1})}var fo=B(F,[["render",g]]);export{fo as default};
