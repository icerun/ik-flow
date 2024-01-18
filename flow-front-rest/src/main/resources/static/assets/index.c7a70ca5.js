import{a as E,O as T,v as A,K as W,Q as D,_ as o,R as q,S as h,m as x,T as U,U as X,V as H,W as J,X as Q,Y,J as Z,Z as z,$ as L}from"./index.d7db7941.js";var ee=["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"],ae={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:U.any,required:Boolean},ne=E({compatConfig:{MODE:3},name:"Checkbox",inheritAttrs:!1,props:T(ae,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(e,l){var u=l.attrs,r=l.emit,m=l.expose,b=A(e.checked===void 0?e.defaultChecked:e.checked),p=A();W(function(){return e.checked},function(){b.value=e.checked}),m({focus:function(){var a;(a=p.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=p.value)===null||a===void 0||a.blur()}});var k=A(),i=function(a){if(!e.disabled){e.checked===void 0&&(b.value=a.target.checked),a.shiftKey=k.value;var y={target:o(o({},e),{},{checked:a.target.checked}),stopPropagation:function(){a.stopPropagation()},preventDefault:function(){a.preventDefault()},nativeEvent:a};e.checked!==void 0&&(p.value.checked=!!e.checked),r("change",y),k.value=!1}},M=function(a){r("click",a),k.value=a.shiftKey};return function(){var n,a=e.prefixCls,y=e.name,f=e.id,_=e.type,B=e.disabled,d=e.readonly,t=e.tabindex,v=e.autofocus,P=e.value,w=e.required,S=D(e,ee),N=u.class,F=u.onFocus,I=u.onBlur,$=u.onKeydown,j=u.onKeypress,O=u.onKeyup,K=o(o({},S),u),c=Object.keys(K).reduce(function(g,s){return(s.substr(0,5)==="aria-"||s.substr(0,5)==="data-"||s==="role")&&(g[s]=K[s]),g},{}),V=q(a,N,(n={},h(n,"".concat(a,"-checked"),b.value),h(n,"".concat(a,"-disabled"),B),n)),R=o(o({name:y,id:f,type:_,readonly:d,disabled:B,tabindex:t,class:"".concat(a,"-input"),checked:!!b.value,autofocus:v,value:P},c),{},{onChange:i,onClick:M,onFocus:F,onBlur:I,onKeydown:$,onKeypress:j,onKeyup:O,required:w});return x("span",{class:V},[x("input",o({ref:p},R),null),x("span",{class:"".concat(a,"-inner")},null)])}}}),te=function(){return{name:String,prefixCls:String,options:{type:Array,default:function(){return[]}},disabled:Boolean,id:String}},de=function(){return o(o({},te()),{},{defaultValue:{type:Array},value:{type:Array},onChange:{type:Function},"onUpdate:value":{type:Function}})},oe=function(){return{prefixCls:String,defaultChecked:{type:Boolean,default:void 0},checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:U.any,name:String,id:String,indeterminate:{type:Boolean,default:void 0},type:{type:String,default:"checkbox"},autofocus:{type:Boolean,default:void 0},onChange:Function,"onUpdate:checked":Function,onClick:Function,skipGroup:{type:Boolean,default:!1}}},ue=function(){return o(o({},oe()),{},{indeterminate:{type:Boolean,default:!1}})},ce=Symbol("CheckboxGroupContext"),re=["indeterminate","skipGroup","id"],le=["onMouseenter","onMouseleave","onInput","class","style"],se=E({compatConfig:{MODE:3},name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:ue(),setup:function(e,l){var u=l.emit,r=l.attrs,m=l.slots,b=l.expose,p=X(),k=H("checkbox",e),i=k.prefixCls,M=k.direction,n=J(ce,void 0),a=Symbol("checkboxUniId");Q(function(){!e.skipGroup&&n&&n.registerValue(a,e.value)}),Y(function(){n&&n.cancelValue(a)}),Z(function(){z(e.checked!==void 0||n||e.value===void 0,"Checkbox","`value` is not validate prop, do you mean `checked`?")});var y=function(t){var v=t.target.checked;u("update:checked",v),u("change",t)},f=A(),_=function(){var t;(t=f.value)===null||t===void 0||t.focus()},B=function(){var t;(t=f.value)===null||t===void 0||t.blur()};return b({focus:_,blur:B}),function(){var d,t,v=L((d=m.default)===null||d===void 0?void 0:d.call(m)),P=e.indeterminate,w=e.skipGroup,S=e.id,N=S===void 0?p.id.value:S,F=D(e,re),I=r.onMouseenter,$=r.onMouseleave;r.onInput;var j=r.class,O=r.style,K=D(r,le),c=o(o({},F),{},{id:N,prefixCls:i.value},K);n&&!w?(c.onChange=function(){for(var g=arguments.length,s=new Array(g),G=0;G<g;G++)s[G]=arguments[G];u.apply(void 0,["change"].concat(s)),n.toggleOption({label:v,value:e.value})},c.name=n.name.value,c.checked=n.mergedValue.value.indexOf(e.value)!==-1,c.disabled=e.disabled||n.disabled.value,c.indeterminate=P):c.onChange=y;var V=q((t={},h(t,"".concat(i.value,"-wrapper"),!0),h(t,"".concat(i.value,"-rtl"),M.value==="rtl"),h(t,"".concat(i.value,"-wrapper-checked"),c.checked),h(t,"".concat(i.value,"-wrapper-disabled"),c.disabled),t),j),R=q(h({},"".concat(i.value,"-indeterminate"),P));return x("label",{class:V,style:O,onMouseenter:I,onMouseleave:$},[x(ne,o(o({},c),{},{class:R,ref:f}),null),v.length?x("span",null,[v]):null])}}});export{se as C,ne as V,ce as a,de as c};
