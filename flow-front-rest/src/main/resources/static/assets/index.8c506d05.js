import{A as n}from"./index.195c0b8d.js";import{a as G,V as N,S as v,bH as O,$ as T,bm as $,m as s,b_ as z,_ as i}from"./index.d7db7941.js";import{a as E}from"./useSize.03a1e437.js";var I=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},V=G({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:I(),setup:function(e,p){var S=p.slots,t=p.attrs,f=N("avatar-group",e),u=f.prefixCls,_=f.direction;return E(e),function(){var a,d=e.maxPopoverPlacement,b=d===void 0?"top":d,o=e.maxCount,h=e.maxStyle,g=e.maxPopoverTrigger,j=g===void 0?"hover":g,P=(a={},v(a,u.value,!0),v(a,"".concat(u.value,"-rtl"),_.value==="rtl"),v(a,"".concat(t.class),!!t.class),a),A=O(S,e),l=T(A).map(function(y,C){return $(y,{key:"avatar-key-".concat(C)})}),c=l.length;if(o&&o<c){var x=l.slice(0,o),k=l.slice(o,c);return x.push(s(z,{key:"avatar-popover-key",content:k,trigger:j,placement:b,overlayClassName:"".concat(u.value,"-popover")},{default:function(){return[s(n,{style:h},{default:function(){return["+".concat(c-o)]}})]}})),s("div",i(i({},t),{},{class:P,style:t.style}),[x])}return s("div",i(i({},t),{},{class:P,style:t.style}),[l])}}}),m=V;n.Group=m;n.install=function(r){return r.component(n.name,n),r.component(m.name,m),r};
