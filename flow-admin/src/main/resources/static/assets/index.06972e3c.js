import{M as _,a as w}from"./index.2ffdce80.js";import{P as g}from"./index.ffcec715.js";import{az as h,a as D,w as m,aB as t,o as V,k as B,B as n,n as s,p as r,C as c,j as M}from"./index.741c5d36.js";import{C as E}from"./index.49b87a49.js";import"./index.97f32770.js";/* empty css               */import"./index.ef1baeca.js";import"./useWindowSizeFn.54947215.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.6c70cdbc.js";import"./index.f51813a8.js";import"./useSize.aa4022ca.js";import"./eagerComputed.1e0895dc.js";import"./useContentViewHeight.1814e20c.js";import"./ArrowLeftOutlined.20c8fc9b.js";import"./index.0934399d.js";import"./transButton.76f8f88c.js";import"./index.8f63e937.js";import"./index.196769f5.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./useRefs.31b824e4.js";import"./PlusOutlined.5bbe1aad.js";const F=D({components:{MarkDown:_,PageWrapper:g,MarkdownViewer:w,ACard:E},setup(){const e=m(null),o=m(`
# title

# content
`);function i(){const a=M(e);if(!a)return;a.getVditor().setTheme("dark")}function p(a){o.value=a}function l(){o.value=""}return{value:o,toggleTheme:i,markDownRef:e,handleChange:p,clearValue:l}}}),A={class:"mt-2"};function b(e,o,i,p,l,a){const u=t("a-button"),d=t("MarkDown"),f=t("MarkdownViewer"),k=t("a-card"),v=t("PageWrapper");return V(),B(v,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:n(()=>[s("div",null,[r(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:n(()=>[c(" \u9ED1\u6697\u4E3B\u9898 ")]),_:1},8,["onClick"]),r(u,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:n(()=>[c(" \u6E05\u7A7A\u5185\u5BB9 ")]),_:1},8,["onClick"]),r(d,{value:e.value,"onUpdate:value":o[0]||(o[0]=C=>e.value=C),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),s("div",A,[r(k,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:n(()=>[r(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var Z=h(F,[["render",b]]);export{Z as default};
