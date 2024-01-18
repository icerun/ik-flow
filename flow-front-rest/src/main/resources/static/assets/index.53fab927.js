import{T as C,_ as a,$ as ke,m as L,cY as q,R as A,bm as B,B as le,cZ as se,a3 as ee,c_ as Te,at as be,Q as oe,S as P,bF as te,a as de,cR as Ce,aA as Le,v as xe,e as N,X as Me,Z as Pe,V as He}from"./index.f3fe0f3f.js";var ze=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},$e=function(e){var t=/[height|width]$/;return t.test(e)},ie=function(e){var t="",i=Object.keys(e);return i.forEach(function(r,n){var o=e[r];r=ze(r),$e(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",n<i.length-1&&(t+=" and ")}),t};function G(l){var e="";return typeof l=="string"?l:l instanceof Array?(l.forEach(function(t,i){e+=ie(t),i<l.length-1&&(e+=", ")}),e):ie(l)}var Ae={accessibility:{type:Boolean,default:!0},adaptiveHeight:{type:Boolean,default:!1},afterChange:C.any.def(null),arrows:{type:Boolean,default:!0},autoplay:{type:Boolean,default:!1},autoplaySpeed:C.number.def(3e3),beforeChange:C.any.def(null),centerMode:{type:Boolean,default:!1},centerPadding:C.string.def("50px"),cssEase:C.string.def("ease"),dots:{type:Boolean,default:!1},dotsClass:C.string.def("slick-dots"),draggable:{type:Boolean,default:!0},unslick:{type:Boolean,default:!1},easing:C.string.def("linear"),edgeFriction:C.number.def(.35),fade:{type:Boolean,default:!1},focusOnSelect:{type:Boolean,default:!1},infinite:{type:Boolean,default:!0},initialSlide:C.number.def(0),lazyLoad:C.any.def(null),verticalSwiping:{type:Boolean,default:!1},asNavFor:C.any.def(null),pauseOnDotsHover:{type:Boolean,default:!1},pauseOnFocus:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},responsive:C.array,rows:C.number.def(1),rtl:{type:Boolean,default:!1},slide:C.string.def("div"),slidesPerRow:C.number.def(1),slidesToScroll:C.number.def(1),slidesToShow:C.number.def(1),speed:C.number.def(500),swipe:{type:Boolean,default:!0},swipeEvent:C.any.def(null),swipeToSlide:{type:Boolean,default:!1},touchMove:{type:Boolean,default:!0},touchThreshold:C.number.def(5),useCSS:{type:Boolean,default:!0},useTransform:{type:Boolean,default:!0},variableWidth:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},waitForAnimate:{type:Boolean,default:!0},children:C.array,__propsSymbol__:C.any},ue=Ae,Oe={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},We=Oe;function V(l,e,t){return Math.max(e,Math.min(l,t))}var E=function(e){var t=["touchstart","touchmove","wheel"];t.includes(e.type)||e.preventDefault()},F=function(e){for(var t=[],i=fe(e),r=ce(e),n=i;n<r;n++)e.lazyLoadedList.indexOf(n)<0&&t.push(n);return t},fe=function(e){return e.currentSlide-Re(e)},ce=function(e){return e.currentSlide+Ee(e)},Re=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},Ee=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},Z=function(e){return e&&e.offsetWidth||0},Q=function(e){return e&&e.offsetHeight||0},he=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i,r=e.startX-e.curX,n=e.startY-e.curY,o=Math.atan2(n,r);return i=Math.round(o*180/Math.PI),i<0&&(i=360-Math.abs(i)),i<=45&&i>=0||i<=360&&i>=315?"left":i>=135&&i<=225?"right":t===!0?i>=35&&i<=135?"up":"down":"vertical"},X=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t},j=function(e,t){var i={};return t.forEach(function(r){return i[r]=e[r]}),i},Be=function(e){var t=e.children.length,i=e.listRef,r=Math.ceil(Z(i)),n=e.trackRef,o=Math.ceil(Z(n)),s;if(e.vertical)s=r;else{var d=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(d*=r/100),s=Math.ceil((r-d)/e.slidesToShow)}var g=i&&Q(i.querySelector('[data-index="0"]')),y=g*e.slidesToShow,h=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(h=t-1-e.initialSlide);var c=e.lazyLoadedList||[],p=F(a(a({},e),{},{currentSlide:h,lazyLoadedList:c}));c=c.concat(p);var f={slideCount:t,slideWidth:s,listWidth:r,trackWidth:o,currentSlide:h,slideHeight:g,listHeight:y,lazyLoadedList:c};return e.autoplaying===null&&e.autoplay&&(f.autoplaying="playing"),f},De=function(e){var t=e.waitForAnimate,i=e.animating,r=e.fade,n=e.infinite,o=e.index,s=e.slideCount,d=e.lazyLoad,g=e.currentSlide,y=e.centerMode,h=e.slidesToScroll,c=e.slidesToShow,p=e.useCSS,f=e.lazyLoadedList;if(t&&i)return{};var u=o,v,w,S,k={},m={},b=n?o:V(o,0,s-1);if(r){if(!n&&(o<0||o>=s))return{};o<0?u=o+s:o>=s&&(u=o-s),d&&f.indexOf(u)<0&&(f=f.concat(u)),k={animating:!0,currentSlide:u,lazyLoadedList:f,targetSlide:u},m={animating:!1,targetSlide:u}}else v=u,u<0?(v=u+s,n?s%h!==0&&(v=s-s%h):v=0):!X(e)&&u>g?u=v=g:y&&u>=s?(u=n?s:s-1,v=n?0:s-1):u>=s&&(v=u-s,n?s%h!==0&&(v=0):v=s-c),!n&&u+c>=s&&(v=s-c),w=_(a(a({},e),{},{slideIndex:u})),S=_(a(a({},e),{},{slideIndex:v})),n||(w===S&&(u=v),w=S),d&&(f=f.concat(F(a(a({},e),{},{currentSlide:u})))),p?(k={animating:!0,currentSlide:v,trackStyle:ve(a(a({},e),{},{left:w})),lazyLoadedList:f,targetSlide:b},m={animating:!1,currentSlide:v,trackStyle:D(a(a({},e),{},{left:S})),swipeLeft:null,targetSlide:b}):k={currentSlide:v,trackStyle:D(a(a({},e),{},{left:S})),lazyLoadedList:f,targetSlide:b};return{state:k,nextState:m}},_e=function(e,t){var i,r,n,o=e.slidesToScroll,s=e.slidesToShow,d=e.slideCount,g=e.currentSlide,y=e.targetSlide,h=e.lazyLoad,c=e.infinite,p=d%o!==0,f=p?0:(d-g)%o;if(t.message==="previous")r=f===0?o:s-f,n=g-r,h&&!c&&(i=g-r,n=i===-1?d-1:i),c||(n=y-o);else if(t.message==="next")r=f===0?o:f,n=g+r,h&&!c&&(n=(g+o)%d+f),c||(n=y+o);else if(t.message==="dots")n=t.index*t.slidesToScroll;else if(t.message==="children"){if(n=t.index,c){var u=Ge(a(a({},e),{},{targetSlide:n}));n>t.currentSlide&&u==="left"?n=n-d:n<t.currentSlide&&u==="right"&&(n=n+d)}}else t.message==="index"&&(n=Number(t.index));return n},Ne=function(e,t,i){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":e.keyCode===37?i?"next":"previous":e.keyCode===39?i?"previous":"next":""},Ie=function(e,t,i){return e.target.tagName==="IMG"&&E(e),!t||!i&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}},Fe=function(e,t){var i=t.scrolling,r=t.animating,n=t.vertical,o=t.swipeToSlide,s=t.verticalSwiping,d=t.rtl,g=t.currentSlide,y=t.edgeFriction,h=t.edgeDragged,c=t.onEdge,p=t.swiped,f=t.swiping,u=t.slideCount,v=t.slidesToScroll,w=t.infinite,S=t.touchObject,k=t.swipeEvent,m=t.listHeight,b=t.listWidth;if(!i){if(r)return E(e);n&&o&&s&&E(e);var T,x={},H=_(t);S.curX=e.touches?e.touches[0].pageX:e.clientX,S.curY=e.touches?e.touches[0].pageY:e.clientY,S.swipeLength=Math.round(Math.sqrt(Math.pow(S.curX-S.startX,2)));var R=Math.round(Math.sqrt(Math.pow(S.curY-S.startY,2)));if(!s&&!f&&R>10)return{scrolling:!0};s&&(S.swipeLength=R);var W=(d?-1:1)*(S.curX>S.startX?1:-1);s&&(W=S.curY>S.startY?1:-1);var Y=Math.ceil(u/v),z=he(t.touchObject,s),O=S.swipeLength;return w||(g===0&&(z==="right"||z==="down")||g+1>=Y&&(z==="left"||z==="up")||!X(t)&&(z==="left"||z==="up"))&&(O=S.swipeLength*y,h===!1&&c&&(c(z),x.edgeDragged=!0)),!p&&k&&(k(z),x.swiped=!0),n?T=H+O*(m/b)*W:d?T=H-O*W:T=H+O*W,s&&(T=H+O*W),x=a(a({},x),{},{touchObject:S,swipeLeft:T,trackStyle:D(a(a({},t),{},{left:T}))}),Math.abs(S.curX-S.startX)<Math.abs(S.curY-S.startY)*.8||S.swipeLength>10&&(x.swiping=!0,E(e)),x}},Xe=function(e,t){var i=t.dragging,r=t.swipe,n=t.touchObject,o=t.listWidth,s=t.touchThreshold,d=t.verticalSwiping,g=t.listHeight,y=t.swipeToSlide,h=t.scrolling,c=t.onSwipe,p=t.targetSlide,f=t.currentSlide,u=t.infinite;if(!i)return r&&E(e),{};var v=d?g/s:o/s,w=he(n,d),S={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(h||!n.swipeLength)return S;if(n.swipeLength>v){E(e),c&&c(w);var k,m,b=u?f:p;switch(w){case"left":case"up":m=b+ne(t),k=y?re(t,m):m,S.currentDirection=0;break;case"right":case"down":m=b-ne(t),k=y?re(t,m):m,S.currentDirection=1;break;default:k=b}S.triggerSlideHandler=k}else{var T=_(t);S.trackStyle=ve(a(a({},t),{},{left:T}))}return S},Ye=function(e){for(var t=e.infinite?e.slideCount*2:e.slideCount,i=e.infinite?e.slidesToShow*-1:0,r=e.infinite?e.slidesToShow*-1:0,n=[];i<t;)n.push(i),i=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return n},re=function(e,t){var i=Ye(e),r=0;if(t>i[i.length-1])t=i[i.length-1];else for(var n in i){if(t<i[n]){t=r;break}r=i[n]}return t},ne=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var i,r=e.listRef,n=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(n).every(function(d){if(e.vertical){if(d.offsetTop+Q(d)/2>e.swipeLeft*-1)return i=d,!1}else if(d.offsetLeft-t+Z(d)/2>e.swipeLeft*-1)return i=d,!1;return!0}),!i)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,s=Math.abs(i.dataset.index-o)||1;return s}else return e.slidesToScroll},J=function(e,t){return t.reduce(function(i,r){return i&&e.hasOwnProperty(r)},!0)?null:console.error("Keys Missing:",e)},D=function(e){J(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var t,i,r=e.slideCount+2*e.slidesToShow;e.vertical?i=r*e.slideHeight:t=qe(e)*e.slideWidth;var n={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",d=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";n=a(a({},n),{},{WebkitTransform:o,transform:s,msTransform:d})}else e.vertical?n.top=e.left:n.left=e.left;return e.fade&&(n={opacity:1}),t&&(n.width=t+"px"),i&&(n.height=i+"px"),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?n.marginTop=e.left+"px":n.marginLeft=e.left+"px"),n},ve=function(e){J(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=D(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},_=function(e){if(e.unslick)return 0;J(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t=e.slideIndex,i=e.trackRef,r=e.infinite,n=e.centerMode,o=e.slideCount,s=e.slidesToShow,d=e.slidesToScroll,g=e.slideWidth,y=e.listWidth,h=e.variableWidth,c=e.slideHeight,p=e.fade,f=e.vertical,u=0,v,w,S=0;if(p||e.slideCount===1)return 0;var k=0;if(r?(k=-$(e),o%d!==0&&t+d>o&&(k=-(t>o?s-(t-o):o%d)),n&&(k+=parseInt(s/2))):(o%d!==0&&t+d>o&&(k=s-o%d),n&&(k=parseInt(s/2))),u=k*g,S=k*c,f?v=t*c*-1+S:v=t*g*-1+u,h===!0){var m,b=i;if(m=t+$(e),w=b&&b.childNodes[m],v=w?w.offsetLeft*-1:0,n===!0){m=r?t+$(e):t,w=b&&b.children[m],v=0;for(var T=0;T<m;T++)v-=b&&b.children[T]&&b.children[T].offsetWidth;v-=parseInt(e.centerPadding),v+=w&&(y-w.offsetWidth)/2}}return v},$=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},I=function(e){return e.unslick||!e.infinite?0:e.slideCount},qe=function(e){return e.slideCount===1?1:$(e)+e.slideCount+I(e)},Ge=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+je(e)?"left":"right":e.targetSlide<e.currentSlide-Ue(e)?"right":"left"},je=function(e){var t=e.slidesToShow,i=e.centerMode,r=e.rtl,n=e.centerPadding;if(i){var o=(t-1)/2+1;return parseInt(n)>0&&(o+=1),r&&t%2===0&&(o+=1),o}return r?0:t-1},Ue=function(e){var t=e.slidesToShow,i=e.centerMode,r=e.rtl,n=e.centerPadding;if(i){var o=(t-1)/2+1;return parseInt(n)>0&&(o+=1),!r&&t%2===0&&(o+=1),o}return r?t-1:0},ae=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},U=function(e){var t,i,r,n;e.rtl?n=e.slideCount-1-e.index:n=e.index;var o=n<0||n>=e.slideCount;e.centerMode?(r=Math.floor(e.slidesToShow/2),i=(n-e.currentSlide)%e.slideCount===0,n>e.currentSlide-r-1&&n<=e.currentSlide+r&&(t=!0)):t=e.currentSlide<=n&&n<e.currentSlide+e.slidesToShow;var s;e.targetSlide<0?s=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?s=e.targetSlide-e.slideCount:s=e.targetSlide;var d=n===s;return{"slick-slide":!0,"slick-active":t,"slick-center":i,"slick-cloned":o,"slick-current":d}},Ke=function(e){var t={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(t.width=e.slideWidth+(typeof e.slideWidth=="number"?"px":"")),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight)+"px":t.left=-e.index*parseInt(e.slideWidth)+"px",t.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t},K=function(e,t){return e.key+"-"+t},Ve=function(e,t){var i,r=[],n=[],o=[],s=t.length,d=fe(e),g=ce(e);return t.forEach(function(y,h){var c,p={message:"children",index:h,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(h)>=0?c=y:c=L("div");var f=Ke(a(a({},e),{},{index:h})),u=c.props.class||"",v=U(a(a({},e),{},{index:h}));if(r.push(q(c,{key:"original"+K(c,h),tabindex:"-1","data-index":h,"aria-hidden":!v["slick-active"],class:A(v,u),style:a(a({outline:"none"},c.props.style||{}),f),onClick:function(){e.focusOnSelect&&e.focusOnSelect(p)}})),e.infinite&&e.fade===!1){var w=s-h;w<=$(e)&&s!==e.slidesToShow&&(i=-w,i>=d&&(c=y),v=U(a(a({},e),{},{index:i})),n.push(q(c,{key:"precloned"+K(c,i),class:A(v,u),tabindex:"-1","data-index":i,"aria-hidden":!v["slick-active"],style:a(a({},c.props.style||{}),f),onClick:function(){e.focusOnSelect&&e.focusOnSelect(p)}}))),s!==e.slidesToShow&&(i=s+h,i<g&&(c=y),v=U(a(a({},e),{},{index:i})),o.push(q(c,{key:"postcloned"+K(c,i),tabindex:"-1","data-index":i,"aria-hidden":!v["slick-active"],class:A(v,u),style:a(a({},c.props.style||{}),f),onClick:function(){e.focusOnSelect&&e.focusOnSelect(p)}})))}}),e.rtl?n.concat(r,o).reverse():n.concat(r,o)},ge=function(e,t){var i=t.attrs,r=t.slots,n=Ve(i,ke(r==null?void 0:r.default())),o=i.onMouseenter,s=i.onMouseover,d=i.onMouseleave,g={onMouseenter:o,onMouseover:s,onMouseleave:d},y=a({class:"slick-track",style:i.trackStyle},g);return L("div",y,[n])};ge.inheritAttrs=!1;var Ze=ge,Qe=function(e){var t;return e.infinite?t=Math.ceil(e.slideCount/e.slidesToScroll):t=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,t},Se=function(e,t){for(var i=t.attrs,r=i.slideCount,n=i.slidesToScroll,o=i.slidesToShow,s=i.infinite,d=i.currentSlide,g=i.appendDots,y=i.customPaging,h=i.clickHandler,c=i.dotsClass,p=i.onMouseenter,f=i.onMouseover,u=i.onMouseleave,v=Qe({slideCount:r,slidesToScroll:n,slidesToShow:o,infinite:s}),w={onMouseenter:p,onMouseover:f,onMouseleave:u},S=[],k=function(){var T=(m+1)*n-1,x=s?T:V(T,0,r-1),H=x-(n-1),R=s?H:V(H,0,r-1),W=A({"slick-active":s?d>=R&&d<=x:d===R}),Y={message:"dots",index:m,slidesToScroll:n,currentSlide:d};function z(O){O&&O.preventDefault(),h(Y)}S=S.concat(L("li",{key:m,class:W},[B(y({i:m}),{onClick:z})]))},m=0;m<v;m++)k();return B(g({dots:S}),a({class:c},w))};Se.inheritAttrs=!1;var Je=Se;function ye(){}function pe(l,e,t){t&&t.preventDefault(),e(l,t)}var we=function(e,t){var i=t.attrs,r=i.clickHandler,n=i.infinite,o=i.currentSlide,s=i.slideCount,d=i.slidesToShow,g={"slick-arrow":!0,"slick-prev":!0},y=function(u){pe({message:"previous"},r,u)};!n&&(o===0||s<=d)&&(g["slick-disabled"]=!0,y=ye);var h={key:"0","data-role":"none",class:g,style:{display:"block"},onClick:y},c={currentSlide:o,slideCount:s},p;return i.prevArrow?p=B(i.prevArrow(a(a({},h),c)),{key:"0",class:g,style:{display:"block"},onClick:y},!1):p=L("button",a({key:"0",type:"button"},h),[" ",le("Previous")]),p};we.inheritAttrs=!1;var me=function(e,t){var i=t.attrs,r=i.clickHandler,n=i.currentSlide,o=i.slideCount,s={"slick-arrow":!0,"slick-next":!0},d=function(p){pe({message:"next"},r,p)};X(i)||(s["slick-disabled"]=!0,d=ye);var g={key:"1","data-role":"none",class:A(s),style:{display:"block"},onClick:d},y={currentSlide:n,slideCount:o},h;return i.nextArrow?h=B(i.nextArrow(a(a({},g),y)),{key:"1",class:A(s),style:{display:"block"},onClick:d},!1):h=L("button",a({key:"1",type:"button"},g),[" ",le("Next")]),h};me.inheritAttrs=!1;var et=["animating"];function M(){}var tt={name:"InnerSlider",mixins:[se],inheritAttrs:!1,props:a({},ue),data:function(){this.preProps=a({},this.$props),this.list=null,this.track=null,this.callbackTimers=[],this.clickable=!0,this.debouncedResize=null;var e=this.ssrInit();return a(a({},We),{},{currentSlide:this.initialSlide,slideCount:this.children.length},e)},watch:{__propsSymbol__:function(){for(var e=this,t=this.$props,i=a(a({listRef:this.list,trackRef:this.track},t),this.$data),r=!1,n=0,o=Object.keys(this.preProps);n<o.length;n++){var s=o[n];if(!t.hasOwnProperty(s)){r=!0;break}if(!(ee(t[s])==="object"||typeof t[s]=="function"||ee(t[s])==="symbol")&&t[s]!==this.preProps[s]){r=!0;break}}this.updateState(i,r,function(){e.currentSlide>=t.children.length&&e.changeSlide({message:"index",index:t.children.length-t.slidesToShow,currentSlide:e.currentSlide}),!e.preProps.autoplay&&t.autoplay?e.handleAutoPlay("playing"):t.autoplay?e.handleAutoPlay("update"):e.pause("paused")}),this.preProps=a({},t)}},mounted:function(){var e=this;if(this.__emit("init"),this.lazyLoad){var t=F(a(a({},this.$props),this.$data));t.length>0&&(this.setState(function(i){return{lazyLoadedList:i.lazyLoadedList.concat(t)}}),this.__emit("lazyLoad",t))}this.$nextTick(function(){var i=a({listRef:e.list,trackRef:e.track,children:e.children},e.$props);e.updateState(i,!0,function(){e.adaptHeight(),e.autoplay&&e.handleAutoPlay("playing")}),e.lazyLoad==="progressive"&&(e.lazyLoadTimer=setInterval(e.progressiveLazyLoad,1e3)),e.ro=new Te(function(){e.animating?(e.onWindowResized(!1),e.callbackTimers.push(setTimeout(function(){return e.onWindowResized()},e.speed))):e.onWindowResized()}),e.ro.observe(e.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(r){r.onfocus=e.$props.pauseOnFocus?e.onSlideFocus:null,r.onblur=e.$props.pauseOnFocus?e.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",e.onWindowResized):window.attachEvent("onresize",e.onWindowResized)})},beforeUnmount:function(){var e;this.animationEndCallback&&clearTimeout(this.animationEndCallback),this.lazyLoadTimer&&clearInterval(this.lazyLoadTimer),this.callbackTimers.length&&(this.callbackTimers.forEach(function(t){return clearTimeout(t)}),this.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",this.onWindowResized):window.detachEvent("onresize",this.onWindowResized),this.autoplayTimer&&clearInterval(this.autoplayTimer),(e=this.ro)===null||e===void 0||e.disconnect()},updated:function(){if(this.checkImagesLoad(),this.__emit("reInit"),this.lazyLoad){var e=F(a(a({},this.$props),this.$data));e.length>0&&(this.setState(function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}}),this.__emit("lazyLoad"))}this.adaptHeight()},methods:{listRefHandler:function(e){this.list=e},trackRefHandler:function(e){this.track=e},adaptHeight:function(){if(this.adaptiveHeight&&this.list){var e=this.list.querySelector('[data-index="'.concat(this.currentSlide,'"]'));this.list.style.height=Q(e)+"px"}},onWindowResized:function(e){var t=this;this.debouncedResize&&this.debouncedResize.cancel(),this.debouncedResize=be(function(){return t.resizeWindow(e)},50),this.debouncedResize()},resizeWindow:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,i=Boolean(this.track);if(!!i){var r=a(a({listRef:this.list,trackRef:this.track,children:this.children},this.$props),this.$data);this.updateState(r,t,function(){e.autoplay?e.handleAutoPlay("update"):e.pause("paused")}),this.setState({animating:!1}),clearTimeout(this.animationEndCallback),delete this.animationEndCallback}},updateState:function(e,t,i){var r=Be(e);e=a(a(a({},e),r),{},{slideIndex:r.currentSlide});var n=_(e);e=a(a({},e),{},{left:n});var o=D(e);(t||this.children.length!==e.children.length)&&(r.trackStyle=o),this.setState(r,i)},ssrInit:function(){var e=this.children;if(this.variableWidth){var t=0,i=0,r=[],n=$(a(a(a({},this.$props),this.$data),{},{slideCount:e.length})),o=I(a(a(a({},this.$props),this.$data),{},{slideCount:e.length}));e.forEach(function(k){var m,b,T=((m=k.props.style)===null||m===void 0||(b=m.width)===null||b===void 0?void 0:b.split("px")[0])||0;r.push(T),t+=T});for(var s=0;s<n;s++)i+=r[r.length-1-s],t+=r[r.length-1-s];for(var d=0;d<o;d++)t+=r[d];for(var g=0;g<this.currentSlide;g++)i+=r[g];var y={width:t+"px",left:-i+"px"};if(this.centerMode){var h="".concat(r[this.currentSlide],"px");y.left="calc(".concat(y.left," + (100% - ").concat(h,") / 2 ) ")}return{trackStyle:y}}var c=e.length,p=a(a(a({},this.$props),this.$data),{},{slideCount:c}),f=$(p)+I(p)+c,u=100/this.slidesToShow*f,v=100/f,w=-v*($(p)+this.currentSlide)*u/100;this.centerMode&&(w+=(100-v*u/100)/2);var S={width:u+"%",left:w+"%"};return{slideWidth:v+"%",trackStyle:S}},checkImagesLoad:function(){var e=this,t=this.list&&this.list.querySelectorAll&&this.list.querySelectorAll(".slick-slide img")||[],i=t.length,r=0;Array.prototype.forEach.call(t,function(n){var o=function(){return++r&&r>=i&&e.onWindowResized()};if(!n.onclick)n.onclick=function(){return n.parentNode.focus()};else{var s=n.onclick;n.onclick=function(){s(),n.parentNode.focus()}}n.onload||(e.$props.lazyLoad?n.onload=function(){e.adaptHeight(),e.callbackTimers.push(setTimeout(e.onWindowResized,e.speed))}:(n.onload=o,n.onerror=function(){o(),e.__emit("lazyLoadError")}))})},progressiveLazyLoad:function(){for(var e=[],t=a(a({},this.$props),this.$data),i=this.currentSlide;i<this.slideCount+I(t);i++)if(this.lazyLoadedList.indexOf(i)<0){e.push(i);break}for(var r=this.currentSlide-1;r>=-$(t);r--)if(this.lazyLoadedList.indexOf(r)<0){e.push(r);break}e.length>0?(this.setState(function(n){return{lazyLoadedList:n.lazyLoadedList.concat(e)}}),this.__emit("lazyLoad",e)):this.lazyLoadTimer&&(clearInterval(this.lazyLoadTimer),delete this.lazyLoadTimer)},slideHandler:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=this.$props,n=r.asNavFor,o=r.currentSlide,s=r.beforeChange,d=r.speed,g=r.afterChange,y=De(a(a(a({index:e},this.$props),this.$data),{},{trackRef:this.track,useCSS:this.useCSS&&!i})),h=y.state,c=y.nextState;if(!!h){s&&s(o,h.currentSlide);var p=h.lazyLoadedList.filter(function(f){return t.lazyLoadedList.indexOf(f)<0});this.$attrs.onLazyLoad&&p.length>0&&this.__emit("lazyLoad",p),!this.$props.waitForAnimate&&this.animationEndCallback&&(clearTimeout(this.animationEndCallback),g&&g(o),delete this.animationEndCallback),this.setState(h,function(){n&&t.asNavForIndex!==e&&(t.asNavForIndex=e,n.innerSlider.slideHandler(e)),c&&(t.animationEndCallback=setTimeout(function(){var f=c.animating,u=oe(c,et);t.setState(u,function(){t.callbackTimers.push(setTimeout(function(){return t.setState({animating:f})},10)),g&&g(h.currentSlide),delete t.animationEndCallback})},d))})}},changeSlide:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=a(a({},this.$props),this.$data),r=_e(i,e);if(!(r!==0&&!r)&&(t===!0?this.slideHandler(r,t):this.slideHandler(r),this.$props.autoplay&&this.handleAutoPlay("update"),this.$props.focusOnSelect)){var n=this.list.querySelectorAll(".slick-current");n[0]&&n[0].focus()}},clickHandler:function(e){this.clickable===!1&&(e.stopPropagation(),e.preventDefault()),this.clickable=!0},keyHandler:function(e){var t=Ne(e,this.accessibility,this.rtl);t!==""&&this.changeSlide({message:t})},selectHandler:function(e){this.changeSlide(e)},disableBodyScroll:function(){var e=function(i){i=i||window.event,i.preventDefault&&i.preventDefault(),i.returnValue=!1};window.ontouchmove=e},enableBodyScroll:function(){window.ontouchmove=null},swipeStart:function(e){this.verticalSwiping&&this.disableBodyScroll();var t=Ie(e,this.swipe,this.draggable);t!==""&&this.setState(t)},swipeMove:function(e){var t=Fe(e,a(a(a({},this.$props),this.$data),{},{trackRef:this.track,listRef:this.list,slideIndex:this.currentSlide}));!t||(t.swiping&&(this.clickable=!1),this.setState(t))},swipeEnd:function(e){var t=Xe(e,a(a(a({},this.$props),this.$data),{},{trackRef:this.track,listRef:this.list,slideIndex:this.currentSlide}));if(!!t){var i=t.triggerSlideHandler;delete t.triggerSlideHandler,this.setState(t),i!==void 0&&(this.slideHandler(i),this.$props.verticalSwiping&&this.enableBodyScroll())}},touchEnd:function(e){this.swipeEnd(e),this.clickable=!0},slickPrev:function(){var e=this;this.callbackTimers.push(setTimeout(function(){return e.changeSlide({message:"previous"})},0))},slickNext:function(){var e=this;this.callbackTimers.push(setTimeout(function(){return e.changeSlide({message:"next"})},0))},slickGoTo:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e=Number(e),isNaN(e))return"";this.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"index",index:e,currentSlide:t.currentSlide},i)},0))},play:function(){var e;if(this.rtl)e=this.currentSlide-this.slidesToScroll;else if(X(a(a({},this.$props),this.$data)))e=this.currentSlide+this.slidesToScroll;else return!1;this.slideHandler(e)},handleAutoPlay:function(e){this.autoplayTimer&&clearInterval(this.autoplayTimer);var t=this.autoplaying;if(e==="update"){if(t==="hovered"||t==="focused"||t==="paused")return}else if(e==="leave"){if(t==="paused"||t==="focused")return}else if(e==="blur"&&(t==="paused"||t==="hovered"))return;this.autoplayTimer=setInterval(this.play,this.autoplaySpeed+50),this.setState({autoplaying:"playing"})},pause:function(e){this.autoplayTimer&&(clearInterval(this.autoplayTimer),this.autoplayTimer=null);var t=this.autoplaying;e==="paused"?this.setState({autoplaying:"paused"}):e==="focused"?(t==="hovered"||t==="playing")&&this.setState({autoplaying:"focused"}):t==="playing"&&this.setState({autoplaying:"hovered"})},onDotsOver:function(){this.autoplay&&this.pause("hovered")},onDotsLeave:function(){this.autoplay&&this.autoplaying==="hovered"&&this.handleAutoPlay("leave")},onTrackOver:function(){this.autoplay&&this.pause("hovered")},onTrackLeave:function(){this.autoplay&&this.autoplaying==="hovered"&&this.handleAutoPlay("leave")},onSlideFocus:function(){this.autoplay&&this.pause("focused")},onSlideBlur:function(){this.autoplay&&this.autoplaying==="focused"&&this.handleAutoPlay("blur")},customPaging:function(e){var t=e.i;return L("button",null,[t+1])},appendDots:function(e){var t=e.dots;return L("ul",{style:{display:"block"}},[t])}},render:function(){var e,t=this,i=A("slick-slider",this.$attrs.class,{"slick-vertical":this.vertical,"slick-initialized":!0}),r=a(a({},this.$props),this.$data),n=j(r,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),o=this.$props.pauseOnHover;n=a(a({},n),{},{focusOnSelect:this.focusOnSelect&&this.clickable?this.selectHandler:null,ref:this.trackRefHandler,onMouseleave:o?this.onTrackLeave:M,onMouseover:o?this.onTrackOver:M});var s;if(this.dots===!0&&this.slideCount>=this.slidesToShow){var d=j(r,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","infinite","appendDots"]);d.customPaging=this.customPaging,d.appendDots=this.appendDots;var g=this.$slots,y=g.customPaging,h=g.appendDots;y&&(d.customPaging=y),h&&(d.appendDots=h);var c=this.$props.pauseOnDotsHover;d=a(a({},d),{},{clickHandler:this.changeSlide,onMouseover:c?this.onDotsOver:M,onMouseleave:c?this.onDotsLeave:M}),s=L(Je,d,null)}var p,f,u=j(r,["infinite","centerMode","currentSlide","slideCount","slidesToShow"]);u.clickHandler=this.changeSlide;var v=this.$slots,w=v.prevArrow,S=v.nextArrow;w&&(u.prevArrow=w),S&&(u.nextArrow=S),this.arrows&&(p=L(we,u,null),f=L(me,u,null));var k=null;this.vertical&&(k={height:typeof this.listHeight=="number"?"".concat(this.listHeight,"px"):this.listHeight});var m=null;this.vertical===!1?this.centerMode===!0&&(m={padding:"0px "+this.centerPadding}):this.centerMode===!0&&(m={padding:this.centerPadding+" 0px"});var b=a(a({},k),m),T=this.touchMove,x=(e={ref:this.listRefHandler,class:"slick-list",style:b,onClick:this.clickHandler,onMousedown:T?this.swipeStart:M,onMousemove:this.dragging&&T?this.swipeMove:M,onMouseup:T?this.swipeEnd:M,onMouseleave:this.dragging&&T?this.swipeEnd:M},P(e,te?"onTouchstartPassive":"onTouchstart",T?this.swipeStart:M),P(e,te?"onTouchmovePassive":"onTouchmove",this.dragging&&T?this.swipeMove:M),P(e,"onTouchend",T?this.touchEnd:M),P(e,"onTouchcancel",this.dragging&&T?this.swipeEnd:M),P(e,"onKeydown",this.accessibility?this.keyHandler:M),e),H={class:i,dir:"ltr",style:this.$attrs.style};return this.unslick&&(x={class:"slick-list",ref:this.listRefHandler},H={class:i}),L("div",H,[this.unslick?"":p,L("div",x,[L(Ze,n,{default:function(){return[t.children]}})]),this.unslick?"":f,this.unslick?"":s])}},it=de({name:"Slider",mixins:[se],inheritAttrs:!1,props:a({},ue),data:function(){return this._responsiveMediaHandlers=[],{breakpoint:null}},mounted:function(){var e=this;if(this.responsive){var t=this.responsive.map(function(r){return r.breakpoint});t.sort(function(r,n){return r-n}),t.forEach(function(r,n){var o;n===0?o=G({minWidth:0,maxWidth:r}):o=G({minWidth:t[n-1]+1,maxWidth:r}),ae()&&e.media(o,function(){e.setState({breakpoint:r})})});var i=G({minWidth:t.slice(-1)[0]});ae()&&this.media(i,function(){e.setState({breakpoint:null})})}},beforeUnmount:function(){this._responsiveMediaHandlers.forEach(function(e){e.mql.removeListener(e.listener)})},methods:{innerSliderRefHandler:function(e){this.innerSlider=e},media:function(e,t){var i=window.matchMedia(e),r=function(o){var s=o.matches;s&&t()};i.addListener(r),r(i),this._responsiveMediaHandlers.push({mql:i,query:e,listener:r})},slickPrev:function(){var e;(e=this.innerSlider)===null||e===void 0||e.slickPrev()},slickNext:function(){var e;(e=this.innerSlider)===null||e===void 0||e.slickNext()},slickGoTo:function(e){var t,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;(t=this.innerSlider)===null||t===void 0||t.slickGoTo(e,i)},slickPause:function(){var e;(e=this.innerSlider)===null||e===void 0||e.pause("paused")},slickPlay:function(){var e;(e=this.innerSlider)===null||e===void 0||e.handleAutoPlay("play")}},render:function(){var e=this,t,i;this.breakpoint?(i=this.responsive.filter(function(u){return u.breakpoint===e.breakpoint}),t=i[0].settings==="unslick"?"unslick":a(a({},this.$props),i[0].settings)):t=a({},this.$props),t.centerMode&&(t.slidesToScroll>1,t.slidesToScroll=1),t.fade&&(t.slidesToShow>1,t.slidesToScroll>1,t.slidesToShow=1,t.slidesToScroll=1);var r=Ce(this)||[];r=r.filter(function(u){return typeof u=="string"?!!u.trim():!!u}),t.variableWidth&&(t.rows>1||t.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),t.variableWidth=!1);for(var n=[],o=null,s=0;s<r.length;s+=t.rows*t.slidesPerRow){for(var d=[],g=s;g<s+t.rows*t.slidesPerRow;g+=t.slidesPerRow){for(var y=[],h=g;h<g+t.slidesPerRow;h+=1){var c;if(t.variableWidth&&(c=r[h].props)!==null&&c!==void 0&&c.style&&(o=r[h].props.style.width),h>=r.length)break;y.push(B(r[h],{key:100*s+10*g+h,tabindex:-1,style:{width:"".concat(100/t.slidesPerRow,"%"),display:"inline-block"}}))}d.push(L("div",{key:10*s+g},[y]))}t.variableWidth?n.push(L("div",{key:s,style:{width:o}},[d])):n.push(L("div",{key:s},[d]))}if(t==="unslick"){var p="regular slider "+(this.className||"");return L("div",{class:p},[r])}else n.length<=t.slidesToShow&&(t.unslick=!0);var f=a(a(a({},this.$attrs),t),{},{children:n,ref:this.innerSliderRefHandler});return L(tt,a(a({},f),{},{__propsSymbol__:[]}),this.$slots)}}),rt=["class","style"],nt=function(){return{effect:String,dots:{type:Boolean,default:!0},vertical:{type:Boolean,default:void 0},autoplay:{type:Boolean,default:void 0},easing:String,beforeChange:Function,afterChange:Function,prefixCls:String,accessibility:{type:Boolean,default:void 0},nextArrow:C.any,prevArrow:C.any,pauseOnHover:{type:Boolean,default:void 0},adaptiveHeight:{type:Boolean,default:void 0},arrows:{type:Boolean,default:!1},autoplaySpeed:Number,centerMode:{type:Boolean,default:void 0},centerPadding:String,cssEase:String,dotsClass:String,draggable:{type:Boolean,default:!1},fade:{type:Boolean,default:void 0},focusOnSelect:{type:Boolean,default:void 0},infinite:{type:Boolean,default:void 0},initialSlide:Number,lazyLoad:String,rtl:{type:Boolean,default:void 0},slide:String,slidesToShow:Number,slidesToScroll:Number,speed:Number,swipe:{type:Boolean,default:void 0},swipeToSlide:{type:Boolean,default:void 0},swipeEvent:Function,touchMove:{type:Boolean,default:void 0},touchThreshold:Number,variableWidth:{type:Boolean,default:void 0},useCSS:{type:Boolean,default:void 0},slickGoTo:Number,responsive:Array,dotPosition:{type:String,default:void 0},verticalSwiping:{type:Boolean,default:!1}}},at=de({compatConfig:{MODE:3},name:"ACarousel",inheritAttrs:!1,props:nt(),setup:function(e,t){var i=t.slots,r=t.attrs,n=t.expose,o=xe(),s=function(u){var v,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;(v=o.value)===null||v===void 0||v.slickGoTo(u,w)};n({goTo:s,autoplay:function(u){var v,w;(v=o.value)===null||v===void 0||(w=v.innerSlider)===null||w===void 0||w.handleAutoPlay(u)},prev:function(){var u;(u=o.value)===null||u===void 0||u.slickPrev()},next:function(){var u;(u=o.value)===null||u===void 0||u.slickNext()},innerSlider:N(function(){var f;return(f=o.value)===null||f===void 0?void 0:f.innerSlider})}),Me(function(){Pe(e.vertical===void 0,"Carousel","`vertical` is deprecated, please use `dotPosition` instead.")});var d=He("carousel",e),g=d.prefixCls,y=d.direction,h=N(function(){return e.dotPosition?e.dotPosition:e.vertical!==void 0&&e.vertical?"right":"bottom"}),c=N(function(){return h.value==="left"||h.value==="right"}),p=N(function(){var f,u="slick-dots";return A((f={},P(f,u,!0),P(f,"".concat(u,"-").concat(h.value),!0),P(f,"".concat(e.dotsClass),!!e.dotsClass),f))});return function(){var f,u=e.dots,v=e.arrows,w=e.draggable,S=e.effect,k=r.class,m=r.style,b=oe(r,rt),T=S==="fade"?!0:e.fade,x=A(g.value,(f={},P(f,"".concat(g.value,"-rtl"),y.value==="rtl"),P(f,"".concat(g.value,"-vertical"),c.value),P(f,"".concat(k),!!k),f));return L("div",{class:x,style:m},[L(it,a(a(a({ref:o},e),b),{},{dots:!!u,dotsClass:p.value,arrows:v,draggable:w,fade:T,vertical:c.value}),i)])}}}),st=Le(at);export{st as C};
