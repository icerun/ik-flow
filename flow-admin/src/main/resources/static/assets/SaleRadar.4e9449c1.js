import{a as r,w as i,a9 as s,az as n,aB as l,o as d,k as m,B as p,n as u,bp as c}from"./index.741c5d36.js";import{C as f}from"./index.49b87a49.js";import"./index.97f32770.js";/* empty css               */import{u as h}from"./useECharts.de7f7ec2.js";import"./index.8f63e937.js";import"./index.196769f5.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./useRefs.31b824e4.js";import"./PlusOutlined.5bbe1aad.js";const x=r({components:{Card:f},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(t){const e=i(null),{setOptions:a}=h(e);return s(()=>t.loading,()=>{t.loading||a({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"2017",max:100},{text:"2017",max:100},{text:"2018",max:100},{text:"2019",max:100},{text:"2020",max:100},{text:"2021",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),{chartRef:e}}});function g(t,e,a,w,y,S){const o=l("Card");return d(),m(o,{title:"\u9500\u552E\u7EDF\u8BA1",loading:t.loading},{default:p(()=>[u("div",{ref:"chartRef",style:c({width:t.width,height:t.height})},null,4)]),_:1},8,["loading"])}var V=n(x,[["render",g]]);export{V as default};
