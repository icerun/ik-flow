var t=(m,o,n)=>new Promise((r,c)=>{var d=s=>{try{a(n.next(s))}catch(l){c(l)}},e=s=>{try{a(n.throw(s))}catch(l){c(l)}},a=s=>s.done?r(s.value):Promise.resolve(s.value).then(d,e);a((n=n.apply(m,o)).next())});import{w as f,c1 as u,j as i,cG as h,a9 as y,eb as F,dL as w,an as p}from"./index.741c5d36.js";function b(m){const o=f(null),n=f(!1);function r(){return t(this,null,function*(){const e=i(o);return e||w("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),yield p(),e})}function c(e){u(()=>{o.value=null,n.value=null}),!(i(n)&&h()&&e===i(o))&&(o.value=e,n.value=!0,y(()=>m,()=>{m&&e.setProps(F(m))},{immediate:!0,deep:!0}))}return[c,{scrollToField:(e,a)=>t(this,null,function*(){(yield r()).scrollToField(e,a)}),setProps:e=>t(this,null,function*(){(yield r()).setProps(e)}),updateSchema:e=>t(this,null,function*(){(yield r()).updateSchema(e)}),resetSchema:e=>t(this,null,function*(){(yield r()).resetSchema(e)}),clearValidate:e=>t(this,null,function*(){(yield r()).clearValidate(e)}),resetFields:()=>t(this,null,function*(){r().then(e=>t(this,null,function*(){yield e.resetFields()}))}),removeSchemaByField:e=>t(this,null,function*(){var a;(a=i(o))==null||a.removeSchemaByField(e)}),getFieldsValue:()=>{var e;return(e=i(o))==null?void 0:e.getFieldsValue()},setFieldsValue:e=>t(this,null,function*(){(yield r()).setFieldsValue(e)}),appendSchemaByField:(e,a,s)=>t(this,null,function*(){(yield r()).appendSchemaByField(e,a,s)}),submit:()=>t(this,null,function*(){return(yield r()).submit()}),validate:e=>t(this,null,function*(){return(yield r()).validate(e)}),validateFields:e=>t(this,null,function*(){return(yield r()).validateFields(e)})}]}export{b as u};
