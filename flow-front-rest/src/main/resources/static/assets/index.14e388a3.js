import{a as bt,V as yt,b6 as p,$ as gt,S as i,m as t,b7 as pt,aJ as _t,T as _,b8 as q,b9 as ht,ba as Ct}from"./index.f3fe0f3f.js";import"./index.72846525.js";import{R as h,C as s}from"./index.17a7febc.js";import{T as H}from"./index.f8e018fb.js";var xt=H.TabPane,Tt=function(){return{prefixCls:String,title:_.any,extra:_.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:_.any,tabList:{type:Array},tabBarExtraContent:_.any,activeTabKey:String,defaultActiveTabKey:String,cover:_.any,onTabChange:{type:Function}}},mt=bt({compatConfig:{MODE:3},name:"ACard",props:Tt(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(e,X){var r=X.slots,T=yt("card",e),Y=T.prefixCls,Z=T.direction,P=T.size,tt=function(c){var l=c.map(function(o,v){return q(o)&&!ht(o)||!q(o)?t("li",{style:{width:"".concat(100/c.length,"%")},key:"action-".concat(v)},[t("span",null,[o])]):null});return l},at=function(c){var l;(l=e.onTabChange)===null||l===void 0||l.call(e,c)},et=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l;return c.forEach(function(o){o&&Ct(o.type)&&o.type.__ANT_CARD_GRID&&(l=!0)}),l};return function(){var f,c,l,o,v,m,d,b,K=e.headStyle,nt=K===void 0?{}:K,k=e.bodyStyle,S=k===void 0?{}:k,j=e.loading,D=e.bordered,rt=D===void 0?!0:D,L=e.type,y=e.tabList,lt=e.hoverable,R=e.activeTabKey,ot=e.defaultActiveTabKey,z=e.tabBarExtraContent,G=z===void 0?p((f=r.tabBarExtraContent)===null||f===void 0?void 0:f.call(r)):z,O=e.title,$=O===void 0?p((c=r.title)===null||c===void 0?void 0:c.call(r)):O,w=e.extra,E=w===void 0?p((l=r.extra)===null||l===void 0?void 0:l.call(r)):w,I=e.actions,B=I===void 0?p((o=r.actions)===null||o===void 0?void 0:o.call(r)):I,N=e.cover,V=N===void 0?p((v=r.cover)===null||v===void 0?void 0:v.call(r)):N,C=gt((m=r.default)===null||m===void 0?void 0:m.call(r)),a=Y.value,it=(d={},i(d,"".concat(a),!0),i(d,"".concat(a,"-loading"),j),i(d,"".concat(a,"-bordered"),rt),i(d,"".concat(a,"-hoverable"),!!lt),i(d,"".concat(a,"-contain-grid"),et(C)),i(d,"".concat(a,"-contain-tabs"),y&&y.length),i(d,"".concat(a,"-").concat(P.value),P.value),i(d,"".concat(a,"-type-").concat(L),!!L),i(d,"".concat(a,"-rtl"),Z.value==="rtl"),d),dt=S.padding===0||S.padding==="0px"?{padding:"24px"}:void 0,u=t("div",{class:"".concat(a,"-loading-block")},null),ct=t("div",{class:"".concat(a,"-loading-content"),style:dt},[t(h,{gutter:8},{default:function(){return[t(s,{span:22},{default:function(){return[u]}})]}}),t(h,{gutter:8},{default:function(){return[t(s,{span:8},{default:function(){return[u]}}),t(s,{span:15},{default:function(){return[u]}})]}}),t(h,{gutter:8},{default:function(){return[t(s,{span:6},{default:function(){return[u]}}),t(s,{span:18},{default:function(){return[u]}})]}}),t(h,{gutter:8},{default:function(){return[t(s,{span:13},{default:function(){return[u]}}),t(s,{span:9},{default:function(){return[u]}})]}}),t(h,{gutter:8},{default:function(){return[t(s,{span:4},{default:function(){return[u]}}),t(s,{span:3},{default:function(){return[u]}}),t(s,{span:16},{default:function(){return[u]}})]}})]),W=R!==void 0,ut=(b={size:"large"},i(b,W?"activeKey":"defaultActiveKey",W?R:ot),i(b,"onChange",at),i(b,"class","".concat(a,"-head-tabs")),b),F,J=y&&y.length?t(H,ut,{default:function(){return[y.map(function(n){var M=n.tab,x=n.slots,U=x==null?void 0:x.tab;pt(!x,"Card","tabList slots is deprecated, Please use `customTab` instead.");var A=M!==void 0?M:r[U]?r[U](n):null;return A=_t(r,"customTab",n,function(){return[A]}),t(xt,{tab:A,key:n.key,disabled:n.disabled},null)})]},rightExtra:G?function(){return G}:null}):null;($||E||J)&&(F=t("div",{class:"".concat(a,"-head"),style:nt},[t("div",{class:"".concat(a,"-head-wrapper")},[$&&t("div",{class:"".concat(a,"-head-title")},[$]),E&&t("div",{class:"".concat(a,"-extra")},[E])]),J]));var st=V?t("div",{class:"".concat(a,"-cover")},[V]):null,ft=t("div",{class:"".concat(a,"-body"),style:S},[j?ct:C]),vt=B&&B.length?t("ul",{class:"".concat(a,"-actions")},[tt(B)]):null;return t("div",{class:it,ref:"cardContainerRef"},[F,st,C&&C.length?ft:null,vt])}}}),At=mt;export{At as C};
