import{az as O,a as $,I as k,w as _,aB as a,o as A,k as I,B as l,p as t,C,l as U,n as M,j as B,G as V}from"./index.741c5d36.js";import{T as W}from"./index.abe396df.js";import{S as K}from"./index.7b2c1cea.js";import{A as L}from"./index.3f5de854.js";import{B as H,S as j}from"./TableImg.7ea72800.js";import{l as G}from"./BasicForm.35bf3188.js";import{u as J}from"./useTable.02d43016.js";import{g as q,a as x,d as Q,b as X}from"./role.5ac059fd.js";import{P as Y}from"./index.ffcec715.js";import Z from"./CompanyTree.e34b84d1.js";import{b as z}from"./index.ef1baeca.js";import{R as ee,s as N,c as oe,p as ne}from"./RoleModal.f6c3c513.js";import te from"./index.5320b86d.js";import{b as ae}from"./personal.84576458.js";import"./useFlexGapSupport.28e961f9.js";import"./throttleByAnimationFrame.40d5ccf9.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./useForm.8dec0b63.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./uuid.2b29000c.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useSize.aa4022ca.js";import"./useWindowSizeFn.54947215.js";import"./index.d23d5e7f.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.d982c887.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.ae783029.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.a7aa9d8e.js";import"./index.11816690.js";/* empty css              *//* empty css               */import"./index.249616b7.js";import"./transButton.76f8f88c.js";import"./index.847bc6c1.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";import"./index.6c70cdbc.js";import"./index.f51813a8.js";import"./useContentViewHeight.1814e20c.js";import"./ArrowLeftOutlined.20c8fc9b.js";import"./index.0934399d.js";import"./index.8bbc42b5.js";import"./useContextMenu.6304c937.js";import"./company.7aeaddd9.js";import"./constantEnum.bf6653fb.js";import"./OrgTree.999c350a.js";import"./dept.b36be69a.js";const{createMessage:le}=V(),re=$({name:"RoleManagement",components:{BasicTable:H,PageWrapper:Y,CompanyTree:Z,RoleModal:ee,PersonalSelector:te,TableAction:G,Input:k,Tag:W,Affix:L,Space:K,Search:k.Search,SettingOutlined:j},setup(){const[n,{openModal:b}]=z(),[F,{openModal:v,setModalProps:D}]=z(),i=_({}),d=_([]),u=_({}),f=_({});N.forEach(e=>{e&&(e.componentProps.onkeypress=o=>{o.keyCode===13&&p()})});const[h,{reload:p}]=J({title:"\u5217\u8868",api:q,columns:oe,formConfig:{labelWidth:120,schemas:N,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!1,pagination:!0,onExpand:(e,o)=>{e?(i.value=o,u.value[o.id]="",c(o.id,u.value[o.id])):d.value=[]},rowKey:"id",canResize:!1});function g(){b(!0,{isUpdate:!1})}function y(e,o){o.stopPropagation(),b(!0,{record:e,isUpdate:!0})}function c(e,o){x({roleId:e,personal:{keyword:o||""}}).then(r=>{f.value[e]=r})}function S(e,o){o.stopPropagation(),i.value=e,x({roleId:e.id}).then(r=>{v(!0,{selectorProps:{multiSelect:!0,selectedList:r.map(E=>({code:E.code,name:E.name}))}}),D({title:`\u8BBE\u7F6E\u89D2\u8272\u3010${e.name}\u3011\u4E0B\u7684\u4EBA\u5458`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})}).finally(()=>{})}function w(e){if(e.children&&e.children.length>0){le.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}Q([e.id]).then(o=>{p()})}function R(e){ae({roleId:e.roleId,personalId:e.personalId}).then(()=>{c(e.roleId,"")})}function T(){setTimeout(()=>{p()},200)}function s(e,o){c(e,o)}function m(e){JSON.stringify(e);const o=e.map(r=>({id:r.id,code:r.code}));X({roleId:B(i).id,personalList:o}).then(()=>{d.value=[B(i).id],c(B(i).id,u.value[B(i).id])})}function P(e){p({searchInfo:{companyId:e?e.id:""}})}return{personalColumns:ne,currentRole:i,rolePersonalData:f,onSearchPerson:s,searchPersonTxt:u,registerTable:h,registerModal:n,registerPersonalModal:F,handleCreate:g,handleEdit:y,handleAddPersonal:S,handleDelete:w,handleDeletePersonal:R,handleSuccess:T,handleSettingPersonalSuccess:m,handleSelect:P}}}),se={class:"manager-range",style:{"text-align":"right"}};function ie(n,b,F,v,D,i){const d=a("CompanyTree"),u=a("Affix"),f=a("a-button"),h=a("TableAction"),p=a("Search"),g=a("Tag"),y=a("Space"),c=a("SettingOutlined"),S=a("BasicTable"),w=a("RoleModal"),R=a("PersonalSelector"),T=a("PageWrapper");return A(),I(T,{dense:"",contentFullHeight:"",contentClass:"flex"},{default:l(()=>[t(u,{"offset-top":"8",class:"w-1/4 xl:w-1/5"},{default:l(()=>[t(d,{contentFullHeight:"",onSelect:n.handleSelect},null,8,["onSelect"])]),_:1}),t(S,{onRegister:n.registerTable,class:"personal w-3/4 xl:w-4/5"},{toolbar:l(()=>[t(f,{type:"primary",onClick:n.handleCreate},{default:l(()=>[C("\u65B0\u589E")]),_:1},8,["onClick"])]),bodyCell:l(({column:s,record:m})=>[s.key==="action"?(A(),I(h,{key:0,actions:[{tooltip:"\u6DFB\u52A0\u4EBA\u5458",icon:"ant-design:user-add",onClick:n.handleAddPersonal.bind(null,m)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:n.handleEdit.bind(null,m)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:P=>{P.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:n.handleDelete.bind(null,m),placement:"left"}}]},null,8,["actions"])):U("",!0)]),expandedRowRender:l(({record:s,index:m,indent:P,expanded:e})=>[t(S,{title:"",size:"small",columns:n.personalColumns,useSearchForm:!1,immediate:!1,showIndexColumn:!0,showTableSetting:!1,bordered:!0,pagination:!1,actionColumn:`{
              align: 'center'
            }`,rowKey:"id",canResize:!1,searchInfo:{roleId:s.id},dataSource:n.rolePersonalData[s.id],class:"w-4/4 xl:w-5/5"},{customName:l(({rec:o})=>[M("span",null,[C(" \u59D3\u540D "),t(p,{value:n.searchPersonTxt[s.id],"onUpdate:value":r=>n.searchPersonTxt[s.id]=r,placeholder:"\u59D3\u540D/\u5DE5\u53F7/\u624B\u673A",style:{width:"150px"},size:"small",allowClear:"",onSearch:r=>{n.onSearchPerson(s.id,r)}},null,8,["value","onUpdate:value","onSearch"])])]),action:l(({record:o})=>[t(h,{actions:[{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:n.handleDeletePersonal.bind(null,o),placement:"left"}}]},null,8,["actions"])]),setManagerRange:l(({record:o})=>[M("div",se,[t(y,{size:"small"},{default:l(()=>[t(g,{color:"processing"},{default:l(()=>[C("\u4E2D\u56FD\u77F3\u5316")]),_:1}),t(g,{color:"processing"},{default:l(()=>[C("\u4E2D\u56FD\u77F3\u5316")]),_:1})]),_:1}),t(c,{class:"ant-btn-link"})])]),_:2},1032,["columns","searchInfo","dataSource"])]),_:1},8,["onRegister"]),t(w,{onRegister:n.registerModal,onSuccess:n.handleSuccess},null,8,["onRegister","onSuccess"]),t(R,{onRegister:n.registerPersonalModal,onSuccess:n.handleSettingPersonalSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Co=O(re,[["render",ie]]);export{Co as default};
