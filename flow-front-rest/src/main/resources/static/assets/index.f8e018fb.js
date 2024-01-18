import{v as _,Y as Ye,bb as Be,a as de,e as J,m as c,bc as ie,R as me,S as W,X as Ne,_ as w,bd as G,ad as B,J as Oe,K as pe,be as Mt,bf as Lt,bg as Nt,bh as Ot,T as Ze,ab as Dt,W as Kt,bi as Wt,a2 as vt,bj as Pe,bk as ct,bl as pt,bm as Ft,O as St,$ as jt,bn as $t,a6 as zt,bo as Ht,b7 as Xe,V as Vt,a3 as Gt,bp as Ut,bq as st,b5 as Xt}from"./index.f3fe0f3f.js";import{u as Yt}from"./useRefs.e4782df1.js";import{P as Zt}from"./PlusOutlined.c106decb.js";function qt(S){var e=_(),t=_(!1);function o(){for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];t.value||(Be.cancel(e.value),e.value=Be(function(){S.apply(void 0,i)}))}return Ye(function(){t.value=!0,Be.cancel(e.value)}),o}function Jt(S){var e=_([]),t=_(typeof S=="function"?S():S),o=qt(function(){var i=t.value;e.value.forEach(function(r){i=r(i)}),e.value=[],t.value=i});function a(i){e.value.push(i),o()}return[t,a]}var Qt=de({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var o=t.expose,a=t.attrs,i=_();function r(v){var f;(f=e.tab)!==null&&f!==void 0&&f.disabled||e.onClick(v)}o({domRef:i});function d(v){var f;v.preventDefault(),v.stopPropagation(),e.editable.onEdit("remove",{key:(f=e.tab)===null||f===void 0?void 0:f.key,event:v})}var l=J(function(){var v;return e.editable&&e.closable!==!1&&!((v=e.tab)!==null&&v!==void 0&&v.disabled)});return function(){var v,f,h=e.prefixCls,g=e.id,L=e.active,I=e.tab,F=I.key,E=I.tab,z=I.disabled,x=I.closeIcon,u=e.renderWrapper,R=e.removeAriaLabel,H=e.editable,N=e.onFocus,P="".concat(h,"-tab"),O=c("div",{key:F,ref:i,class:me(P,(v={},W(v,"".concat(P,"-with-remove"),l.value),W(v,"".concat(P,"-active"),L),W(v,"".concat(P,"-disabled"),z),v)),style:a.style,onClick:r},[c("div",{role:"tab","aria-selected":L,id:g&&"".concat(g,"-tab-").concat(F),class:"".concat(P,"-btn"),"aria-controls":g&&"".concat(g,"-panel-").concat(F),"aria-disabled":z,tabindex:z?null:0,onClick:function(D){D.stopPropagation(),r(D)},onKeydown:function(D){[ie.SPACE,ie.ENTER].includes(D.which)&&(D.preventDefault(),r(D))},onFocus:N},[typeof E=="function"?E():E]),l.value&&c("button",{type:"button","aria-label":R||"remove",tabindex:0,class:"".concat(P,"-remove"),onClick:function(D){D.stopPropagation(),d(D)}},[(x==null?void 0:x())||((f=H.removeIcon)===null||f===void 0?void 0:f.call(H))||"\xD7"])]);return u?u(O):O}}}),dt={width:0,height:0,left:0,top:0};function ea(S,e){var t=_(new Map);return Ne(function(){for(var o,a=new Map,i=S.value,r=e.value.get((o=i[0])===null||o===void 0?void 0:o.key)||dt,d=r.left+r.width,l=0;l<i.length;l+=1){var v=i[l].key,f=e.value.get(v);if(!f){var h;f=e.value.get((h=i[l-1])===null||h===void 0?void 0:h.key)||dt}var g=a.get(v)||w({},f);g.right=d-g.left-g.width,a.set(v,g)}t.value=new Map(a)}),t}var xt=de({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var o=t.expose,a=t.attrs,i=_();return o({domRef:i}),function(){var r=e.prefixCls,d=e.editable,l=e.locale;return!d||d.showAdd===!1?null:c("button",{ref:i,type:"button",class:"".concat(r,"-nav-add"),style:a.style,"aria-label":(l==null?void 0:l.addAriaLabel)||"Add tab",onClick:function(f){d.onEdit("add",{event:f})}},[d.addIcon?d.addIcon():"+"])}}}),ta={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Ze.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}},aa=de({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:ta,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var o=t.attrs,a=t.slots,i=G(!1),r=B(i,2),d=r[0],l=r[1],v=G(null),f=B(v,2),h=f[0],g=f[1],L=function(u){for(var R=e.tabs.filter(function(U){return!U.disabled}),H=R.findIndex(function(U){return U.key===h.value})||0,N=R.length,P=0;P<N;P+=1){H=(H+u+N)%N;var O=R[H];if(!O.disabled){g(O.key);return}}},I=function(u){var R=u.which;if(!d.value){[ie.DOWN,ie.SPACE,ie.ENTER].includes(R)&&(l(!0),u.preventDefault());return}switch(R){case ie.UP:L(-1),u.preventDefault();break;case ie.DOWN:L(1),u.preventDefault();break;case ie.ESC:l(!1);break;case ie.SPACE:case ie.ENTER:h.value!==null&&e.onTabClick(h.value,u);break}},F=J(function(){return"".concat(e.id,"-more-popup")}),E=J(function(){return h.value!==null?"".concat(F.value,"-").concat(h.value):null}),z=function(u,R){u.preventDefault(),u.stopPropagation(),e.editable.onEdit("remove",{key:R,event:u})};return Oe(function(){pe(h,function(){var x=document.getElementById(E.value);x&&x.scrollIntoView&&x.scrollIntoView(!1)},{flush:"post",immediate:!0})}),pe(d,function(){d.value||g(null)}),function(){var x,u=e.prefixCls,R=e.id,H=e.tabs,N=e.locale,P=e.mobile,O=e.moreIcon,U=O===void 0?((x=a.moreIcon)===null||x===void 0?void 0:x.call(a))||c(Mt,null,null):O,D=e.moreTransitionName,$=e.editable,ve=e.tabBarGutter,y=e.rtl,n=e.onTabClick,b="".concat(u,"-dropdown"),T=N==null?void 0:N.dropdownAriaLabel,K=W({},y?"marginRight":"marginLeft",ve);H.length||(K.visibility="hidden",K.order=1);var j=me(W({},"".concat(b,"-rtl"),y)),C=P?null:c(Ot,{prefixCls:b,trigger:["hover"],visible:d.value,transitionName:D,onVisibleChange:l,overlayClassName:j,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return c(Lt,{onClick:function(A){var X=A.key,re=A.domEvent;n(X,re),l(!1)},id:F.value,tabindex:-1,role:"listbox","aria-activedescendant":E.value,selectedKeys:[h.value],"aria-label":T!==void 0?T:"expanded dropdown"},{default:function(){return[H.map(function(A){var X,re,xe=$&&A.closable!==!1&&!A.disabled;return c(Nt,{key:A.key,id:"".concat(F.value,"-").concat(A.key),role:"option","aria-controls":R&&"".concat(R,"-panel-").concat(A.key),disabled:A.disabled},{default:function(){return[c("span",null,[typeof A.tab=="function"?A.tab():A.tab]),xe&&c("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(b,"-menu-item-remove"),onClick:function(ce){ce.stopPropagation(),z(ce,A.key)}},[((X=A.closeIcon)===null||X===void 0?void 0:X.call(A))||((re=$.removeIcon)===null||re===void 0?void 0:re.call($))||"\xD7"])]}})})]}})},default:function(){return c("button",{type:"button",class:"".concat(u,"-nav-more"),style:K,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":F.value,id:"".concat(R,"-more"),"aria-expanded":d.value,onKeydown:I},[U])}});return c("div",{class:me("".concat(u,"-nav-operations"),o.class),style:o.style},[C,c(xt,{prefixCls:u,locale:N,editable:$},null)])}}}),Tt=Symbol("tabsContextKey"),Ct=function(e){Dt(Tt,e)},kt=function(){return Kt(Tt,{tabs:_([]),prefixCls:_()})};de({compatConfig:{MODE:3},name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var o=t.slots;return Ct(Wt(e)),function(){var a;return(a=o.default)===null||a===void 0?void 0:a.call(o)}}});var na=.1,ft=.01,Le=20,bt=Math.pow(.995,Le);function ia(S,e){var t=G(),o=B(t,2),a=o[0],i=o[1],r=G(0),d=B(r,2),l=d[0],v=d[1],f=G(0),h=B(f,2),g=h[0],L=h[1],I=G(),F=B(I,2),E=F[0],z=F[1],x=_();function u(y){var n=y.touches[0],b=n.screenX,T=n.screenY;i({x:b,y:T}),clearInterval(x.value)}function R(y){if(!!a.value){y.preventDefault();var n=y.touches[0],b=n.screenX,T=n.screenY,K=b-a.value.x,j=T-a.value.y;e(K,j),i({x:b,y:T});var C=Date.now();L(C-l.value),v(C),z({x:K,y:j})}}function H(){if(!!a.value){var y=E.value;if(i(null),z(null),y){var n=y.x/g.value,b=y.y/g.value,T=Math.abs(n),K=Math.abs(b);if(Math.max(T,K)<na)return;var j=n,C=b;x.value=setInterval(function(){if(Math.abs(j)<ft&&Math.abs(C)<ft){clearInterval(x.value);return}j*=bt,C*=bt,e(j*Le,C*Le)},Le)}}}var N=_();function P(y){var n=y.deltaX,b=y.deltaY,T=0,K=Math.abs(n),j=Math.abs(b);K===j?T=N.value==="x"?n:b:K>j?(T=n,N.value="x"):(T=b,N.value="y"),e(-T,-T)&&y.preventDefault()}var O=_({onTouchStart:u,onTouchMove:R,onTouchEnd:H,onWheel:P});function U(y){O.value.onTouchStart(y)}function D(y){O.value.onTouchMove(y)}function $(y){O.value.onTouchEnd(y)}function ve(y){O.value.onWheel(y)}Oe(function(){var y,n;document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",$,{passive:!1}),(y=S.value)===null||y===void 0||y.addEventListener("touchstart",U,{passive:!1}),(n=S.value)===null||n===void 0||n.addEventListener("wheel",ve,{passive:!1})}),Ye(function(){document.removeEventListener("touchmove",D),document.removeEventListener("touchend",$)})}function mt(S,e){var t=_(S);function o(a){var i=typeof a=="function"?a(t.value):a;i!==t.value&&e(i,t.value),t.value=i}return[t,o]}var yt={width:0,height:0,left:0,top:0,right:0},ra=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:Ze.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}},ht=de({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:ra(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var o=t.attrs,a=t.slots,i=kt(),r=i.tabs,d=i.prefixCls,l=_(),v=_(),f=_(),h=_(),g=Yt(),L=B(g,2),I=L[0],F=L[1],E=J(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),z=mt(0,function(m,p){E.value&&e.onTabScroll&&e.onTabScroll({direction:m>p?"left":"right"})}),x=B(z,2),u=x[0],R=x[1],H=mt(0,function(m,p){!E.value&&e.onTabScroll&&e.onTabScroll({direction:m>p?"top":"bottom"})}),N=B(H,2),P=N[0],O=N[1],U=G(0),D=B(U,2),$=D[0],ve=D[1],y=G(0),n=B(y,2),b=n[0],T=n[1],K=G(null),j=B(K,2),C=j[0],Se=j[1],ye=G(null),A=B(ye,2),X=A[0],re=A[1],xe=G(0),he=B(xe,2),Te=he[0],ce=he[1],_e=G(0),Q=B(_e,2),De=Q[0],Re=Q[1],we=Jt(new Map),ge=B(we,2),Ke=ge[0],We=ge[1],Ae=ea(r,Ke),Et=J(function(){return"".concat(d.value,"-nav-operations-hidden")}),Ce=_(0),ke=_(0);Ne(function(){E.value?e.rtl?(Ce.value=0,ke.value=Math.max(0,$.value-C.value)):(Ce.value=Math.min(0,C.value-$.value),ke.value=0):(Ce.value=Math.min(0,X.value-b.value),ke.value=0)});var Fe=function(p){return p<Ce.value?Ce.value:p>ke.value?ke.value:p},qe=_(),Pt=G(),Je=B(Pt,2),je=Je[0],Qe=Je[1],$e=function(){Qe(Date.now())},ze=function(){clearTimeout(qe.value)},et=function(p,s){p(function(M){var k=Fe(M+s);return k})};ia(l,function(m,p){if(E.value){if(C.value>=$.value)return!1;et(R,m)}else{if(X.value>=b.value)return!1;et(O,p)}return ze(),$e(),!0}),pe(je,function(){ze(),je.value&&(qe.value=setTimeout(function(){Qe(0)},100))});var tt=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,s=Ae.value.get(p)||{width:0,height:0,left:0,right:0,top:0};if(E.value){var M=u.value;e.rtl?s.right<u.value?M=s.right:s.right+s.width>u.value+C.value&&(M=s.right+s.width-C.value):s.left<-u.value?M=-s.left:s.left+s.width>-u.value+C.value&&(M=-(s.left+s.width-C.value)),O(0),R(Fe(M))}else{var k=P.value;s.top<-P.value?k=-s.top:s.top+s.height>-P.value+X.value&&(k=-(s.top+s.height-X.value)),R(0),O(Fe(k))}},He=_(0),Ve=_(0);Ne(function(){var m,p,s,M,k,Y,Z,fe=Ae.value;["top","bottom"].includes(e.tabPosition)?(p="width",k=C.value,Y=$.value,Z=Te.value,s=e.rtl?"right":"left",M=Math.abs(u.value)):(p="height",k=X.value,Y=$.value,Z=De.value,s="top",M=-P.value);var ee=k;Y+Z>k&&Y<k&&(ee=k-Z);var le=r.value;if(!le.length){var oe;return oe=[0,0],He.value=oe[0],Ve.value=oe[1],oe}for(var be=le.length,V=be,te=0;te<be;te+=1){var ae=fe.get(le[te].key)||yt;if(ae[s]+ae[p]>M+ee){V=te-1;break}}for(var ue=0,q=be-1;q>=0;q-=1){var ne=fe.get(le[q].key)||yt;if(ne[s]<M){ue=q+1;break}}return m=[ue,V],He.value=m[0],Ve.value=m[1],m});var Ge=function(){var p,s,M,k,Y,Z=((p=l.value)===null||p===void 0?void 0:p.offsetWidth)||0,fe=((s=l.value)===null||s===void 0?void 0:s.offsetHeight)||0,ee=((M=h.value)===null||M===void 0?void 0:M.$el)||{},le=ee.offsetWidth||0,oe=ee.offsetHeight||0;Se(Z),re(fe),ce(le),Re(oe);var be=(((k=v.value)===null||k===void 0?void 0:k.offsetWidth)||0)-le,V=(((Y=v.value)===null||Y===void 0?void 0:Y.offsetHeight)||0)-oe;ve(be),T(V),We(function(){var te=new Map;return r.value.forEach(function(ae){var ue=ae.key,q=F.value.get(ue),ne=(q==null?void 0:q.$el)||q;ne&&te.set(ue,{width:ne.offsetWidth,height:ne.offsetHeight,left:ne.offsetLeft,top:ne.offsetTop})}),te})},at=J(function(){return[].concat(vt(r.value.slice(0,He.value)),vt(r.value.slice(Ve.value+1)))}),Bt=G(),nt=B(Bt,2),_t=nt[0],Rt=nt[1],se=J(function(){return Ae.value.get(e.activeKey)}),it=_(),rt=function(){Be.cancel(it.value)};pe([se,E,function(){return e.rtl}],function(){var m={};se.value&&(E.value?(e.rtl?m.right=Pe(se.value.right):m.left=Pe(se.value.left),m.width=Pe(se.value.width)):(m.top=Pe(se.value.top),m.height=Pe(se.value.height))),rt(),it.value=Be(function(){Rt(m)})}),pe([function(){return e.activeKey},se,Ae,E],function(){tt()},{flush:"post"}),pe([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return r.value}],function(){Ge()},{flush:"post"});var Ue=function(p){var s=p.position,M=p.prefixCls,k=p.extra;if(!k)return null;var Y=k==null?void 0:k({position:s});return Y?c("div",{class:"".concat(M,"-extra-content")},[Y]):null};return Ye(function(){ze(),rt()}),function(){var m,p=e.id,s=e.animated,M=e.activeKey,k=e.rtl,Y=e.editable,Z=e.locale,fe=e.tabPosition,ee=e.tabBarGutter,le=e.onTabClick,oe=o.class,be=o.style,V=d.value,te=!!at.value.length,ae="".concat(V,"-nav-wrap"),ue,q,ne,lt;E.value?k?(q=u.value>0,ue=u.value+C.value<$.value):(ue=u.value<0,q=-u.value+C.value<$.value):(ne=P.value<0,lt=-P.value+X.value<b.value);var Me={};fe==="top"||fe==="bottom"?Me[k?"marginRight":"marginLeft"]=typeof ee=="number"?"".concat(ee,"px"):ee:Me.marginTop=typeof ee=="number"?"".concat(ee,"px"):ee;var ot=r.value.map(function(Ie,ut){var Ee=Ie.key;return c(Qt,{id:p,prefixCls:V,key:Ee,tab:Ie,style:ut===0?void 0:Me,closable:Ie.closable,editable:Y,active:Ee===M,removeAriaLabel:Z==null?void 0:Z.removeAriaLabel,ref:I(Ee),onClick:function(At){le(Ee,At)},onFocus:function(){tt(Ee),$e(),l.value&&(k||(l.value.scrollLeft=0),l.value.scrollTop=0)}},a)});return c("div",{role:"tablist",class:me("".concat(V,"-nav"),oe),style:be,onKeydown:function(){$e()}},[c(Ue,{position:"left",prefixCls:V,extra:a.leftExtra},null),c(ct,{onResize:Ge},{default:function(){return[c("div",{class:me(ae,(m={},W(m,"".concat(ae,"-ping-left"),ue),W(m,"".concat(ae,"-ping-right"),q),W(m,"".concat(ae,"-ping-top"),ne),W(m,"".concat(ae,"-ping-bottom"),lt),m)),ref:l},[c(ct,{onResize:Ge},{default:function(){return[c("div",{ref:v,class:"".concat(V,"-nav-list"),style:{transform:"translate(".concat(u.value,"px, ").concat(P.value,"px)"),transition:je.value?"none":void 0}},[ot,c(xt,{ref:h,prefixCls:V,locale:Z,editable:Y,style:w(w({},ot.length===0?void 0:Me),{},{visibility:te?"hidden":null})},null),c("div",{class:me("".concat(V,"-ink-bar"),W({},"".concat(V,"-ink-bar-animated"),s.inkBar)),style:_t.value},null)])]}})])]}}),c(aa,w(w({},e),{},{removeAriaLabel:Z==null?void 0:Z.removeAriaLabel,ref:f,prefixCls:V,tabs:at.value,class:!te&&Et.value}),pt(a,["moreIcon"])),c(Ue,{position:"right",prefixCls:V,extra:a.rightExtra},null),c(Ue,{position:"right",prefixCls:V,extra:a.tabBarExtraContent},null)])}}}),la=de({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=kt(),o=t.tabs,a=t.prefixCls;return function(){var i=e.id,r=e.activeKey,d=e.animated,l=e.tabPosition,v=e.rtl,f=e.destroyInactiveTabPane,h=d.tabPane,g=a.value,L=o.value.findIndex(function(I){return I.key===r});return c("div",{class:"".concat(g,"-content-holder")},[c("div",{class:["".concat(g,"-content"),"".concat(g,"-content-").concat(l),W({},"".concat(g,"-content-animated"),h)],style:L&&h?W({},v?"marginRight":"marginLeft","-".concat(L,"00%")):null},[o.value.map(function(I){return Ft(I.node,{key:I.key,prefixCls:g,tabKey:I.key,id:i,animated:h,active:I.key===r,destroyInactiveTabPane:f})})])])}}}),gt=0,It=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:Ze.any}};function oa(S){return S.map(function(e){if(zt(e)){for(var t=w({},e.props||{}),o=0,a=Object.entries(t);o<a.length;o++){var i=B(a[o],2),r=i[0],d=i[1];delete t[r],t[Ht(r)]=d}var l=e.children||{},v=e.key!==void 0?e.key:void 0,f=t.tab,h=f===void 0?l.tab:f,g=t.disabled,L=t.forceRender,I=t.closable,F=t.animated,E=t.active,z=t.destroyInactiveTabPane;return w(w({key:v},t),{},{node:e,closeIcon:l.closeIcon,tab:h,disabled:g===""||g,forceRender:L===""||L,closable:I===""||I,animated:F===""||F,active:E===""||E,destroyInactiveTabPane:z===""||z})}return null}).filter(function(e){return e})}var ua=de({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:w(w({},St(It(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{},{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var o=t.attrs,a=t.slots;Xe(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Xe(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Xe(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var i=Vt("tabs",e),r=i.prefixCls,d=i.direction,l=i.size,v=i.rootPrefixCls,f=J(function(){return d.value==="rtl"}),h=J(function(){var n=e.animated,b=e.tabPosition;return n===!1||["left","right"].includes(b)?{inkBar:!1,tabPane:!1}:n===!0?{inkBar:!0,tabPane:!0}:w({inkBar:!0,tabPane:!1},Gt(n)==="object"?n:{})}),g=G(!1),L=B(g,2),I=L[0],F=L[1];Oe(function(){F(Ut())});var E=st(function(){var n;return(n=e.tabs[0])===null||n===void 0?void 0:n.key},{value:J(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),z=B(E,2),x=z[0],u=z[1],R=G(function(){return e.tabs.findIndex(function(n){return n.key===x.value})}),H=B(R,2),N=H[0],P=H[1];Ne(function(){var n=e.tabs.findIndex(function(T){return T.key===x.value});if(n===-1){var b;n=Math.max(0,Math.min(N.value,e.tabs.length-1)),u((b=e.tabs[n])===null||b===void 0?void 0:b.key)}P(n)});var O=st(null,{value:J(function(){return e.id})}),U=B(O,2),D=U[0],$=U[1],ve=J(function(){return I.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});Oe(function(){e.id||($("rc-tabs-".concat(gt)),gt+=1)});var y=function(b,T){var K;(K=e.onTabClick)===null||K===void 0||K.call(e,b,T);var j=b!==x.value;if(u(b),j){var C;(C=e.onChange)===null||C===void 0||C.call(e,b)}};return Ct({tabs:J(function(){return e.tabs}),prefixCls:r}),function(){var n,b=e.id,T=e.type,K=e.tabBarGutter,j=e.tabBarStyle,C=e.locale,Se=e.destroyInactiveTabPane,ye=e.renderTabBar,A=ye===void 0?a.renderTabBar:ye,X=e.onTabScroll,re=e.hideAdd,xe=e.centered,he={id:D.value,activeKey:x.value,animated:h.value,tabPosition:ve.value,rtl:f.value,mobile:I.value},Te;T==="editable-card"&&(Te={onEdit:function(Re,we){var ge,Ke=we.key,We=we.event;(ge=e.onEdit)===null||ge===void 0||ge.call(e,Re==="add"?We:Ke,Re)},removeIcon:function(){return c(Xt,null,null)},addIcon:a.addIcon?a.addIcon:function(){return c(Zt,null,null)},showAdd:re!==!0});var ce,_e=w(w({},he),{},{moreTransitionName:"".concat(v.value,"-slide-up"),editable:Te,locale:C,tabBarGutter:K,onTabClick:y,onTabScroll:X,style:j});A?ce=A(w(w({},_e),{},{DefaultTabBar:ht})):ce=c(ht,_e,pt(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var Q=r.value;return c("div",w(w({},o),{},{id:b,class:me(Q,"".concat(Q,"-").concat(ve.value),(n={},W(n,"".concat(Q,"-").concat(l.value),l.value),W(n,"".concat(Q,"-card"),["card","editable-card"].includes(T)),W(n,"".concat(Q,"-editable-card"),T==="editable-card"),W(n,"".concat(Q,"-centered"),xe),W(n,"".concat(Q,"-mobile"),I.value),W(n,"".concat(Q,"-editable"),T==="editable-card"),W(n,"".concat(Q,"-rtl"),f.value),n),o.class)}),[ce,c(la,w(w({destroyInactiveTabPane:Se},he),{},{animated:h.value}),null)])}}}),da=de({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:St(It(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var o=t.attrs,a=t.slots,i=t.emit,r=function(l){i("update:activeKey",l),i("change",l)};return function(){var d,l=oa(jt((d=a.default)===null||d===void 0?void 0:d.call(a)));return c(ua,w(w(w({},$t(e,["onUpdate:activeKey"])),o),{},{onChange:r,tabs:l}),a)}}});export{da as T};
