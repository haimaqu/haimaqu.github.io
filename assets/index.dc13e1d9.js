import{d as g,u as E,a as P,c as y,r as u,w as d,o as L,s as _,b as O,e as T,f as w,g as R,h as p,i as A,j as S,N as V,k as C,n as I,l as b,m as D,p as $,q as N}from"./vendor.b7ba4a67.js";const x=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};x();const k=g({setup(l){E(s=>({"7ba5bd90-isFullScreenNum":o.value}));const r=P(),a=y(()=>r.path),n=u(),e=u(),t=u(!1),o=u(929);let c=null;return d(a,()=>{clearTimeout(c),c=setTimeout(()=>{},500)}),d(n,()=>{}),d(e,()=>{_.isFullscreen?(t.value=!0,o.value=1080):(t.value=!1,o.value=929)}),L(()=>{document.onkeydown=s=>{s&&s.keyCode===122&&(s.preventDefault(),_.toggle(),t.value=!t.value)},n.value=document.documentElement.clientWidth||document.body.clientWidth,e.value=document.documentElement.clientHeight||document.body.clientHeight,window.onresize=()=>{n.value=document.documentElement.clientWidth||document.body.clientWidth,e.value=document.documentElement.clientHeight||document.body.clientHeight}}),O(()=>{window.onresize=null,clearTimeout(c)}),(s,B)=>{const v=T("router-view");return w(),R("div",{id:"main-container",class:I(`main-container ${t.value?"full-screen":""}`)},[p(S(V),null,{default:A(()=>[p(v)]),_:1}),C(` {{ isFullScreen }}
    {{ isFullScreenNum }}
    {{ screenHeight }}
    {{ screenWidth }} `)],2)}}}),H="modulepreload",h={},W="./",i=function(r,a){return!a||a.length===0?r():Promise.all(a.map(n=>{if(n=`${W}${n}`,n in h)return;h[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":H,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((c,s)=>{o.addEventListener("load",c),o.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>r())};var F=[{path:"",name:"ChildPathOne",icon:"fire-knowledge",component:()=>i(()=>import("./childPathOne.945fc4f4.js"),["assets/childPathOne.945fc4f4.js","assets/vendor.b7ba4a67.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/childPathTwo",name:"ChildPathTwo",icon:"fire-upload",component:()=>i(()=>import("./childPathTwo.6506d8c4.js"),["assets/childPathTwo.6506d8c4.js","assets/vendor.b7ba4a67.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],q=[{path:"",name:"",component:()=>i(()=>import("./indexPage.f37b2d23.js"),["assets/indexPage.f37b2d23.js","assets/indexPage.22476885.css","assets/vendor.b7ba4a67.js","assets/mapComponent.89f821c9.js","assets/mapComponent.e351119c.css","assets/http.b155da42.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/measurePage/:id",name:"MeasurePage",component:()=>i(()=>import("./measurePage.ee5f3061.js"),["assets/measurePage.ee5f3061.js","assets/measurePage.50acf8c5.css","assets/vendor.b7ba4a67.js","assets/mapComponent.89f821c9.js","assets/mapComponent.e351119c.css","assets/http.b155da42.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/interactivePage",name:"InteractivePage",component:()=>i(()=>import("./interactivePage.d56cdb12.js"),["assets/interactivePage.d56cdb12.js","assets/interactivePage.c4fcffdd.css","assets/vendor.b7ba4a67.js","assets/mapComponent.89f821c9.js","assets/mapComponent.e351119c.css","assets/http.b155da42.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/seniorPage",name:"SeniorPage",component:()=>i(()=>import("./seniorPage.86ab2e08.js"),["assets/seniorPage.86ab2e08.js","assets/vendor.b7ba4a67.js"])},{path:"/specialPage",name:"SpecialPage",component:()=>i(()=>import("./specialPage.b86e979c.js"),["assets/specialPage.b86e979c.js","assets/vendor.b7ba4a67.js"])},{path:"/singlePath",name:"SinglePath",component:()=>i(()=>import("./singlePath.52cd5bdb.js"),["assets/singlePath.52cd5bdb.js","assets/vendor.b7ba4a67.js"])},{path:"/nestingPath",name:"NestingPath",component:()=>i(()=>import("./nestingPath.dee4617b.js"),["assets/nestingPath.dee4617b.js","assets/vendor.b7ba4a67.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:F}];function f(l,r=""){const a=[];return l.forEach(({path:n,name:e,component:t,children:o})=>{a.push(o?{path:`${r}${n}`,name:e,component:t,children:f(o,`${r}${n}`)}:{path:`${r}${n}`,name:e,component:t})}),a}const z=[{path:"/",name:"Login",component:()=>i(()=>import("./LoginPage.dc9140cf.js"),["assets/LoginPage.dc9140cf.js","assets/LoginPage.2cad1706.css","assets/vendor.b7ba4a67.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/index",name:"",redirect:"/index",component:()=>i(()=>import("./MainPage.36517c55.js"),["assets/MainPage.36517c55.js","assets/MainPage.3237a367.css","assets/vendor.b7ba4a67.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:f(q,"/index")},{path:"/piniaStudy",name:"PiniaStudy",component:()=>i(()=>import("./piniaStudy.8c852996.js"),["assets/piniaStudy.8c852996.js","assets/piniaStudy.a787ea3e.css","assets/vendor.b7ba4a67.js","assets/http.b155da42.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],M=b({history:D(),routes:z});const m=$(k);m.use(M);m.use(N());m.mount("#app");
