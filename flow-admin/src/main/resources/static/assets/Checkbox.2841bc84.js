import{a as E,au as T,w as f,a9 as $,S as H,_ as c,T as M,U as g,p as v,H as U}from"./index.741c5d36.js";var W=["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"],z={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:U.any,required:Boolean},J=E({compatConfig:{MODE:3},name:"Checkbox",inheritAttrs:!1,props:T(z,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(a,d){var t=d.attrs,h=d.emit,m=d.expose,o=f(a.checked===void 0?a.defaultChecked:a.checked),i=f();$(function(){return a.checked},function(){o.value=a.checked}),m({focus:function(){var e;(e=i.value)===null||e===void 0||e.focus()},blur:function(){var e;(e=i.value)===null||e===void 0||e.blur()}});var l=f(),x=function(e){if(!a.disabled){a.checked===void 0&&(o.value=e.target.checked),e.shiftKey=l.value;var r={target:c(c({},a),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e};a.checked!==void 0&&(i.value.checked=!!a.checked),h("change",r),l.value=!1}},C=function(e){h("click",e),l.value=e.shiftKey};return function(){var n,e=a.prefixCls,r=a.name,s=a.id,p=a.type,b=a.disabled,K=a.readonly,P=a.tabindex,B=a.autofocus,S=a.value,N=a.required,_=H(a,W),q=t.class,w=t.onFocus,D=t.onBlur,j=t.onKeydown,A=t.onKeypress,F=t.onKeyup,y=c(c({},_),t),O=Object.keys(y).reduce(function(k,u){return(u.substr(0,5)==="aria-"||u.substr(0,5)==="data-"||u==="role")&&(k[u]=y[u]),k},{}),R=M(e,q,(n={},g(n,"".concat(e,"-checked"),o.value),g(n,"".concat(e,"-disabled"),b),n)),V=c(c({name:r,id:s,type:p,readonly:K,disabled:b,tabindex:P,class:"".concat(e,"-input"),checked:!!o.value,autofocus:B,value:S},O),{},{onChange:x,onClick:C,onFocus:w,onBlur:D,onKeydown:j,onKeypress:A,onKeyup:F,required:N});return v("span",{class:R},[v("input",c({ref:i},V),null),v("span",{class:"".concat(e,"-inner")},null)])}}});export{J as V};
