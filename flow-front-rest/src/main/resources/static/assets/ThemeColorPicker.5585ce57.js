import{L as m,a as l,dz as c,b as d,aF as u,o as r,f as o,F as f,aI as C,p as a,b0 as _,m as k}from"./index.f3fe0f3f.js";import{b as h}from"./index.f6a065e8.js";import"./index.b6dea2fc.js";import"./FullscreenOutlined.a1ca65d7.js";import"./index.5667d7d7.js";import"./useWindowSizeFn.8e1e2f4b.js";import"./uniqBy.28c373f9.js";import"./_baseIteratee.0c18463b.js";import"./get.ac77a413.js";import"./useContentViewHeight.d39ef36d.js";import"./index.f8e018fb.js";import"./useRefs.e4782df1.js";import"./PlusOutlined.c106decb.js";import"./RedoOutlined.523ef589.js";import"./index.72846525.js";import"./lock.b7e0a038.js";import"./ArrowLeftOutlined.677a463d.js";import"./index.78295ba6.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,b,g){const p=u("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(f,null,C(e.colorList||[],t=>(r(),o("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:_({background:t})},[k(p)],14,y))),128))],2)}var G=m(v,[["render",$]]);export{G as default};
