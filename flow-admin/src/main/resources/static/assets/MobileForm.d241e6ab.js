var _=(g,l,a)=>new Promise((c,i)=>{var p=o=>{try{n(a.next(o))}catch(r){i(r)}},m=o=>{try{n(a.throw(o))}catch(r){i(r)}},n=o=>o.done?c(o.value):Promise.resolve(o.value).then(p,m);n((a=a.apply(g,l)).next())});import{a as I,e as B,w as x,x as L,h,j as e,o as S,i as w,p as s,B as t,I as z,D as k,C as b,t as y,F as R,l as V}from"./index.741c5d36.js";/* empty css              *//* empty css               */import{C as D}from"./index.249616b7.js";import{u as E,a as N,L as M,_ as U,b as j}from"./LoginFormTitle.3c578754.js";import{F as C}from"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./useSize.aa4022ca.js";const X=I({__name:"MobileForm",setup(g){const l=C.Item,{t:a}=B(),{handleBackLogin:c,getLoginState:i}=E(),{getFormRules:p}=N(),m=x(),n=x(!1),o=L({mobile:"",sms:""}),{validForm:r}=j(m),F=h(()=>e(i)===M.MOBILE);function v(){return _(this,null,function*(){const d=yield r()})}return(d,u)=>e(F)?(S(),w(R,{key:0},[s(U,{class:"enter-x"}),s(e(C),{class:"p-4 enter-x",model:o,rules:e(p),ref_key:"formRef",ref:m},{default:t(()=>[s(e(l),{name:"mobile",class:"enter-x"},{default:t(()=>[s(e(z),{size:"large",value:o.mobile,"onUpdate:value":u[0]||(u[0]=f=>o.mobile=f),placeholder:e(a)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),s(e(l),{name:"sms",class:"enter-x"},{default:t(()=>[s(e(D),{size:"large",class:"fix-auto-fill",value:o.sms,"onUpdate:value":u[1]||(u[1]=f=>o.sms=f),placeholder:e(a)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),s(e(l),{class:"enter-x"},{default:t(()=>[s(e(k),{type:"primary",size:"large",block:"",onClick:v,loading:n.value},{default:t(()=>[b(y(e(a)("sys.login.loginButton")),1)]),_:1},8,["loading"]),s(e(k),{size:"large",block:"",class:"mt-4",onClick:e(c)},{default:t(()=>[b(y(e(a)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])],64)):V("",!0)}});export{X as default};
