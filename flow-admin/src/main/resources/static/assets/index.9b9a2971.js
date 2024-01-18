import{B as x}from"./TableImg.7ea72800.js";import{l as V}from"./BasicForm.35bf3188.js";import{u as O}from"./useTable.02d43016.js";import{b as W,d as $,p as N,s as U}from"./modelInfo.de66f1bc.js";import{P as G}from"./index.ffcec715.js";import H from"./FlowCategoryTree.0fd541a2.js";import{b as S}from"./index.ef1baeca.js";import{M as K,c as j,s as z}from"./ModelInfoModal.51c4a9d4.js";import L from"./index.8b9134fb.js";import{az as q,a as J,fB as Q,b0 as X,w as m,an as Y,aB as r,bS as Z,y as ee,o as P,k as T,B as c,p as i,C as oe,l as te,j as A,G as ne}from"./index.741c5d36.js";import{T as ae}from"./index.abe396df.js";import{A as re}from"./index.f51813a8.js";import{B as le}from"./index.11816690.js";import{a as ie}from"./app.369d282d.js";import{A as se}from"./index.eacd3782.js";import{D as ue}from"./DeleteOutlined.d4d5ebae.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./useForm.8dec0b63.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./uuid.2b29000c.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./useSize.aa4022ca.js";import"./useWindowSizeFn.54947215.js";import"./index.d23d5e7f.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.d982c887.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.ae783029.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.a7aa9d8e.js";/* empty css              *//* empty css               */import"./index.249616b7.js";import"./transButton.76f8f88c.js";import"./index.7b2c1cea.js";import"./index.847bc6c1.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";import"./index.6c70cdbc.js";import"./useContentViewHeight.1814e20c.js";import"./ArrowLeftOutlined.20c8fc9b.js";import"./index.0934399d.js";import"./index.8bbc42b5.js";import"./useContextMenu.6304c937.js";import"./category.52677796.js";import"./index.260a512e.js";import"./index.3f5de854.js";import"./throttleByAnimationFrame.40d5ccf9.js";import"./index.af1d0b64.js";import"./index.esm.0355b274.js";const{createMessage:I}=ne(),pe=J({name:"Bpmn",components:{BasicTable:x,PageWrapper:G,FlowCategoryTree:H,ModelInfoModal:K,TableAction:V,Avatar:re,Badge:le,Popconfirm:Q,Tag:ae,DeleteOutlined:ue,Authority:se,BpmnPreviewModal:L},setup(){X();const[o,{openModal:d,setModalProps:f}]=S(),[w,{openModal:y,setModalProps:_}]=S();m({});const l=m({}),s=m(null),a=m(!1),[h,{getForm:g,reload:n}]=O({title:"\u5217\u8868",api:W,columns:j,formConfig:{labelWidth:120,schemas:z,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"\u64CD\u4F5C",dataIndex:"action"}});Y(()=>{const{updateSchema:e}=g();ie().then(t=>{e([{field:"appSn",componentProps:{options:t,labelField:"id"}}])})});function C(){if(!A(l).code){I.warning("\u8BF7\u9009\u62E9\u5206\u7C7B\uFF01",2);return}d(!0,{record:{categoryCode:A(l).code},isUpdate:!1}),f({maskClosable:!1,footer:null,width:"100%",canFullscreen:!1,destroyOnClose:!0,defaultFullscreen:!0,useWrapper:!0})}function b(e,t){const{status:B}=e;return[{icon:"ant-design:eye",tooltip:"\u6D41\u7A0B\u56FE\u9884\u89C8",label:"",onClick:u.bind(null,e)},{icon:"ant-design:play-circle-filled",tooltip:"\u53D1\u5E03",label:"",popConfirm:{title:"\u786E\u8BA4\u53D1\u5E03\u5417?",confirm:M.bind(null,e),placement:"left"},ifShow:B===2},{icon:"ant-design:stop-twotone",tooltip:"\u505C\u7528",label:"",popConfirm:{title:"\u786E\u8BA4\u505C\u7528\u5417?",confirm:F.bind(null,e),placement:"left"},ifShow:B===3||B===2},{icon:"clarity:note-edit-line",tooltip:"\u4FEE\u6539",label:"",onClick:p.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664",label:"",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:v.bind(null,e),placement:"left"}}]}function u(e){y(!0,{modelKey:e.modelKey,isUpdate:!0}),_({title:`\u9884\u89C8-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"\u5173\u95ED"})}function p(e){d(!0,{record:e,isUpdate:!0}),f({maskClosable:!1,footer:null,width:"100%",destroyOnClose:!0,canFullscreen:!1,defaultFullscreen:!0})}function v(e){$([e.id]).then(t=>{n()})}function M(e){a.value=!0,N(e.modelId).then(t=>{n(),I.success("\u53D1\u5E03\u6210\u529F\uFF01",2)}).finally(()=>{a.value=!1})}function F(e){a.value=!0,U(e.modelId).then(t=>{n()}).finally(()=>{a.value=!1})}function E(){n()}function k(){}function D(e){l.value=e,s.value=e.code;let t={categoryCode:e?e.code:""};n({searchInfo:t})}function R(e){if(!e)try{let t={categoryCode:s.value||""};setTimeout(()=>{n({searchInfo:t})},200)}catch(t){}}return{loadingRef:a,registerTable:h,registerBpmnPreviewModal:w,registerModal:o,handlePublish:M,handleStop:F,createActions:b,handleCreate:C,handleEdit:p,cancelDeleteRole:k,handleDelete:v,handleSuccess:E,handleSelect:D,handleModelInfoVisibleChange:R}}});function me(o,d,f,w,y,_){const l=r("FlowCategoryTree"),s=r("a-button"),a=r("TableAction"),h=r("BasicTable"),g=r("ModelInfoModal"),n=r("BpmnPreviewModal"),C=r("PageWrapper"),b=Z("loading");return ee((P(),T(C,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:c(()=>[i(l,{class:"w-1/4 xl:w-1/5",onSelect:o.handleSelect},null,8,["onSelect"]),i(h,{onRegister:o.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:c(()=>[i(s,{type:"primary",onClick:o.handleCreate},{default:c(()=>[oe(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:c(({column:u,record:p})=>[u.key==="action"?(P(),T(a,{key:0,actions:o.createActions(p,u)},null,8,["actions"])):te("",!0)]),_:1},8,["onRegister"]),i(g,{onRegister:o.registerModal,onSuccess:o.handleSuccess,onVisibleChange:o.handleModelInfoVisibleChange},null,8,["onRegister","onSuccess","onVisibleChange"]),i(n,{onRegister:o.registerBpmnPreviewModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})),[[b,o.loadingRef]])}var Fo=q(pe,[["render",me],["__scopeId","data-v-7121f513"]]);export{Fo as default};
