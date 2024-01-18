import{B as v}from"./TableImg.7ea72800.js";import{l as M}from"./BasicForm.35bf3188.js";import{u as F}from"./useTable.02d43016.js";import{j as R,k as I,l as P,m as A}from"./dictionary.4c084eb9.js";import{P as $}from"./index.ffcec715.js";import{az as N,a as V,w as W,aB as r,o as f,i as K,p as b,B as h,k as g,C as U,l as C,G as j}from"./index.741c5d36.js";import{b as z}from"./index.ef1baeca.js";import G from"./DictionaryModal.3ec81cb8.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./useForm.8dec0b63.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./index.abe396df.js";import"./uuid.2b29000c.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./useSize.aa4022ca.js";import"./useWindowSizeFn.54947215.js";import"./index.d23d5e7f.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.d982c887.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.ae783029.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.a7aa9d8e.js";import"./index.11816690.js";/* empty css              *//* empty css               */import"./index.249616b7.js";import"./transButton.76f8f88c.js";import"./index.7b2c1cea.js";import"./index.847bc6c1.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";import"./index.6c70cdbc.js";import"./index.f51813a8.js";import"./useContentViewHeight.1814e20c.js";import"./ArrowLeftOutlined.20c8fc9b.js";import"./index.0934399d.js";import"./constantEnum.bf6653fb.js";const{createMessage:L}=j(),O=V({name:"DictionaryTable",components:{BasicTable:v,DictionaryModal:G,PageWrapper:$,TableAction:M},setup(e,{emit:l}){const[y,{openModal:s,setModalProps:c}]=z(),i=W(""),[p,{reload:n,setProps:u,setTableData:m,setSelectedRowKeys:d}]=F({title:"\u6570\u636E\u5B57\u5178\u5217\u8868",api:R,columns:I,formConfig:{labelWidth:120,schemas:P,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,clickToRowSelect:!0,rowSelection:{type:"radio",columnWidth:40},useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,pagination:!0,rowKey:"id",actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action"}});function a(){if(i.value===""){L.warning("\u8BF7\u9009\u62E9\u6570\u636E\u7C7B\u578B\uFF01",2);return}c({title:"\u65B0\u589E\u5B57\u5178"}),s(!0,{record:{dicTypeId:i.value},isUpdate:!1})}function T(t){i.value=t,u({searchInfo:{dicTypeId:t}}),n({page:1})}function B(){m([]),i.value=""}function _(t,o){o.stopPropagation(),c({title:"\u4FEE\u6539\u5B57\u5178"}),s(!0,{record:t,isUpdate:!0})}function k(t,o){o.stopPropagation()}function D(t){A(t.id).then(()=>{n()})}function S(){setTimeout(()=>{n()},200)}function w(t){d([t.id]),l("handleSelect",t.id)}function E({keys:t,rows:o}){o&&o.length>0&&l("handleSelect",o[0].id)}return{registerTable:p,registerModal:y,dictTypeId:i,handleDeleteStop:k,clickDictionary:w,changeDictionary:E,filterByDictType:T,cleanTableData:B,handleCreate:a,handleEdit:_,handleDelete:D,handleSuccess:S}}}),q={class:"bg-white overflow-hidden dictionary"};function H(e,l,y,s,c,i){const p=r("a-button"),n=r("TableAction"),u=r("BasicTable"),m=r("DictionaryModal");return f(),K("div",q,[b(u,{onRegister:e.registerTable,onRowClick:e.clickDictionary,onSelectionChange:e.changeDictionary},{toolbar:h(()=>[e.dictTypeId!==""?(f(),g(p,{key:0,type:"primary",onClick:e.handleCreate},{default:h(()=>[U("\u65B0\u589E")]),_:1},8,["onClick"])):C("",!0)]),bodyCell:h(({column:d,record:a})=>[d.key==="action"?(f(),g(n,{key:0,actions:[{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,a)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e.handleDeleteStop.bind(null,a),popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,a),placement:"left"}}]},null,8,["actions"])):C("",!0)]),_:1},8,["onRegister","onRowClick","onSelectionChange"]),b(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Je=N(O,[["render",H]]);export{Je as default};
