var p=(o,c,t)=>new Promise((n,i)=>{var l=e=>{try{a(t.next(e))}catch(s){i(s)}},r=e=>{try{a(t.throw(e))}catch(s){i(s)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(l,r);a((t=t.apply(o,c)).next())});import{az as u,a as _,b4 as h,w as d,O as v,aB as T,bS as b,y as g,o as y,i as B,p as D,an as S,j as f,fD as k}from"./index.741c5d36.js";import{_ as w}from"./index.8bbc42b5.js";import{g as L}from"./jobGradeType.d83217ce.js";import"./fromPairs.daf93cb7.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./useContextMenu.6304c937.js";import"./index.d23d5e7f.js";import"./get.9f08d1a5.js";const $=_({name:"JobGradeTypeList",components:{BasicTree:w,Spin:h},emits:["select"],setup(o,{emit:c}){const t=d([]),n=d(!1),i=d(null);function l(){return p(this,null,function*(){n.value=!0,L().then(a=>{t.value=a,S(()=>{var e;f(t).length<10&&((e=f(i))==null||e.filterByLevel(1))})}).finally(()=>{n.value=!1})})}function r(a,e){const s=k(t.value,m=>m.id===a[0],{id:"id",pid:"pid",children:"children"});c("select",s)}return v(()=>{l()}),{treeData:t,treeLoading:n,basicTreeRef:i,handleSelect:r}}}),C={class:"bg-white m-4 mr-0 overflow-hidden"};function E(o,c,t,n,i,l){const r=T("BasicTree"),a=b("loading");return g((y(),B("div",C,[D(r,{title:"\u804C\u7EA7\u5206\u7C7B",toolbar:"",search:"",clickRowToExpand:!1,treeData:o.treeData,replaceFields:{key:"id",title:"name"},onSelect:o.handleSelect,ref:"basicTreeRef"},null,8,["treeData","onSelect"])])),[[a,o.treeLoading]])}var O=u($,[["render",E]]);export{O as default};
