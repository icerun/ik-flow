import{B as u}from"./TableImg.b364f8e8.js";import"./useForm.b09515ad.js";import{u as f}from"./useTable.1e5cd88d.js";import{P as d}from"./index.89952870.js";import{L as _,a as b,aF as i,o as m,f as h,m as g,z as p,i as T,B as v,t as B,j as k}from"./index.bd2622a4.js";import{T as o}from"./index.fb349c07.js";import{haveDownTableSchema as w,searchFormSchema as y}from"./data.7fcb6df8.js";import $ from"./ProcessHeader.096082ee.js";import x from"./LaunchButton.1f175a0e.js";import{b as C,c as I}from"./process.db9f2507.js";import"./index.ed2abe14.js";import"./index.011eee67.js";import"./index.a1f6a0e2.js";import"./index.c0db3e6e.js";import"./get.20c5cbf9.js";import"./useWindowSizeFn.67ef7ff7.js";import"./index.08f383df.js";import"./FullscreenOutlined.0d0c0c2d.js";import"./index.43820172.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.36268724.js";import"./eagerComputed.e93fe3c7.js";import"./scrollTo.3e7accaf.js";import"./index.9f418e95.js";import"./index.aa874616.js";import"./index.34f9998b.js";import"./useFlexGapSupport.4d2f8b85.js";import"./_baseIteratee.a0786c1b.js";import"./useSize.8a6ae0ee.js";import"./index.a002d195.js";import"./transButton.6e9f0377.js";import"./index.644e7005.js";import"./useRefs.4ffc2415.js";import"./download.d61a3495.js";import"./index.c7a7383a.js";import"./ClockCircleOutlined.3d5ad35f.js";import"./index.0e48b9d8.js";import"./uniqBy.41fe84d3.js";import"./index.11a0419a.js";import"./index.1c28d80e.js";import"./useContentViewHeight.8f4c0ff9.js";import"./ArrowLeftOutlined.31e20ceb.js";import"./index.2c861a83.js";import"./PlusOutlined.f9ed6f81.js";const P=b({components:{BasicTable:u,ProcessHeader:$,LaunchButton:x,PageWrapper:d,[o.name]:o,[o.TabPane.name]:o.TabPane},setup(){const[t,{getForm:r}]=f({api:C,title:"",columns:w,formConfig:{labelWidth:120,schemas:y,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return I().then(a=>{const{updateSchema:s}=r();s({field:"appSn",componentProps:{options:a}})}),{registerHaveDownTable:t}}}),S={class:"desc-wrap process"};function D(t,r,a,s,N,F){const n=i("router-link"),c=i("BasicTable");return m(),h("div",S,[g(c,{onRegister:t.registerHaveDownTable},{bodyCell:p(({column:l,record:e})=>[l.key==="formName"?(m(),T(n,{key:0,to:`/process/view/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:p(()=>[v(B(e.formName),1)]),_:2},1032,["to"])):k("",!0)]),_:1},8,["onRegister"])])}var ye=_(P,[["render",D]]);export{ye as default};
