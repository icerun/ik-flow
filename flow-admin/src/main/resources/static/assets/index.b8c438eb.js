import FramePage from"./index.af1d0b64.js";import{u as useFrameKeepAlive}from"./useFrameKeepAlive.bc2bf6e8.js";import{p as createVNode,s as AntdIcon,az as _export_sfc,a as defineComponent,cI as Dropdown,ba as Menu,bg as useRouter,j as unref,w as ref,bO as useMultipleTabStore,O as onMounted,an as nextTick,h as computed,aB as resolveComponent,o as openBlock,i as createElementBlock,B as withCtx}from"./index.741c5d36.js";import{g as getByModelId}from"./modelInfo.de66f1bc.js";import{T as Tabs}from"./index.97f32770.js";import"./useWindowSizeFn.54947215.js";import"./uniqBy.c3dbbda0.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./useRefs.31b824e4.js";import"./PlusOutlined.5bbe1aad.js";var PicLeftOutlined$2={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM608 660c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h512zM152 436h400v152H152V436zm552 210c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H712c-4.4 0-8 3.6-8 8v56zm8-204h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H712c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z"}}]},name:"pic-left",theme:"outlined"},PicLeftOutlinedSvg=PicLeftOutlined$2;function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),a.forEach(function(o){_defineProperty(e,o,r[o])})}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var PicLeftOutlined=function(t,r){var a=_objectSpread({},t,r.attrs);return createVNode(AntdIcon,_objectSpread({},a,{icon:PicLeftOutlinedSvg}),null)};PicLeftOutlined.displayName="PicLeftOutlined";PicLeftOutlined.inheritAttrs=!1;var PicLeftOutlined$1=PicLeftOutlined,index_vue_vue_type_style_index_0_lang="";const _sfc_main=defineComponent({name:"FormDesigner",components:{FramePage,Tabs,TabPane:Tabs.TabPane,PicLeftOutlined:PicLeftOutlined$1,Dropdown,Menu,MenuItem:Menu.Item},setup(){const{currentRoute}=useRouter(),{query:{modelId,modelKey,categoryCode}}=unref(currentRoute),processInfoDisabled=ref(!0),formUrl=ref(""),url=ref(""),formDesignerFrameRef=ref(),processModelId=ref(""),activeKey=ref("formDesigner"),frame=ref({}),tabStore=useMultipleTabStore(),router=useRouter(),currentTab=tabStore.getTabList.find(e=>e.fullPath===router.currentRoute.value.fullPath);function changeUrlArg(url,arg,val){let pattern=arg+"=([^&]*)",replaceText=arg+"="+val;return url.match(pattern)?url.replace(eval("/("+arg+"=)([^&]*)/gi"),replaceText):url.match("[?]")?url+"&"+replaceText:url+"?"+replaceText}function updateTabInfo(e){if(e&&e.modelId){processInfoDisabled.value=!1;let t=window.location.href;t=changeUrlArg(t,"modelId",e.modelId),t=changeUrlArg(t,"modelKey",e.modelKey),currentTab.meta.title="\u81EA\u5B9A\u4E49\u6D41\u7A0B-"+e.modelName,processModelId.value=e.modelId,history.pushState("","",t),url.value="/flow-bpmn/index.html#/bpmn/designer?modelId="+e.modelId+"&formType=0"}}function onSave(e){updateTabInfo(e)}onMounted(()=>{window.removeEventListener("message",e=>{}),window.addEventListener("message",e=>{const t=e.data;switch(t.cmd){case"returnFormJson":break;case"updateTabInfo":updateTabInfo(t.params.data);break}}),currentTab.meta.title.indexOf("\u8BBE\u8BA1\u6D41\u7A0B-")!==0&&(processModelId.value=modelId,modelId&&getByModelId(modelId).then(e=>{currentTab.meta.title&&currentTab.meta.title.indexOf("-"+e.name)===-1&&(currentTab.meta.title=currentTab.meta.title+"-"+e.name)}).catch(()=>{console.error("\u901A\u8FC7ModelId\u67E5\u8BE2modelInfo\u5931\u8D25\uFF01")}))}),modelId&&(processInfoDisabled.value=!1),nextTick(()=>{url.value="/flow-bpmn/index.html#/bpmn/designer?modelId="+modelId+"&formType=0",formUrl.value="/form-designer/index.html#/?modelKey="+modelKey+"&formType=custom&categoryCode="+categoryCode});const{getFramePages,hasRenderFrame,showIframe}=useFrameKeepAlive(),showFrame=computed(()=>unref(getFramePages).length>0);return{processInfoDisabled,formDesignerFrameRef,processModelId,getFramePages,hasRenderFrame,showIframe,showFrame,url,formUrl,frame,activeKey,modelKey,categoryCode,onSave}}}),_hoisted_1={class:"w-full h-full"};function _sfc_render(e,t,r,a,o,u){const n=resolveComponent("FramePage"),c=resolveComponent("TabPane"),l=resolveComponent("Tabs");return openBlock(),createElementBlock("div",_hoisted_1,[createVNode(l,{class:"form-designer",type:"card",tabBarStyle:{marginBottom:0},activeKey:e.activeKey,"onUpdate:activeKey":t[0]||(t[0]=s=>e.activeKey=s),style:{height:"100%"}},{default:withCtx(()=>[createVNode(c,{key:"formDesigner",tab:"\u8868\u5355\u8BBE\u8BA1"},{default:withCtx(()=>[createVNode(n,{ref:"formDesignerFrameRef",frameSrc:e.formUrl},null,8,["frameSrc"])]),_:1}),createVNode(c,{key:"processDesigner",tab:"\u6D41\u7A0B\u8BBE\u8BA1",disabled:e.processInfoDisabled},{default:withCtx(()=>[createVNode(n,{frameSrc:e.url},null,8,["frameSrc"])]),_:1},8,["disabled"])]),_:1},8,["activeKey"])])}var index=_export_sfc(_sfc_main,[["render",_sfc_render]]);export{index as default};
