var u=Object.defineProperty;var o=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var s=(a,e,t)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,i=(a,e)=>{for(var t in e||(e={}))n.call(e,t)&&s(a,t,e[t]);if(o)for(var t of o(e))l.call(e,t)&&s(a,t,e[t]);return a};import{u as p}from"./useECharts.de7f7ec2.js";import{b as c}from"./props.f48aca0b.js";import{a as m,w as h,O as f,o as d,i as y,bp as b}from"./index.741c5d36.js";const A=m({__name:"VisitAnalysisBar",props:i({},c),setup(a){const e=h(null),{setOptions:t}=p(e);return f(()=>{t({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"]},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})}),(r,g)=>(d(),y("div",{ref_key:"chartRef",ref:e,style:b({height:r.height,width:r.width})},null,4))}});export{A as default};
