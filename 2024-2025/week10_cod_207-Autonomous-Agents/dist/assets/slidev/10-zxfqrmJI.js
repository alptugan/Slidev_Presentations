import{d as u,y as m,o as i,b as d,e,h as a,c as p,k as _,q as f,s as h,A as l}from"../modules/vue-BlwDVrFw.js";import{b as c,N as n}from"../index-CvGsS6BN.js";import{p as v,u as y,f as b}from"./context-Ciwcj_k6.js";import"../modules/shiki-lPVX9pnm.js";const k={class:"h-full w-full"},w=["src"],$=u({__name:"iframe",props:{url:{type:String,required:!0},scale:{type:Number,required:!1}},setup(r){const o=r,s=m(()=>`${1/(o.scale||1)*100}%`);return(t,P)=>(i(),d("div",k,[e("div",{relative:"",style:a({width:s.value,height:s.value})},[e("iframe",{id:"frame",class:"w-full h-full",src:t.url,style:a(t.scale?{transform:`scale(${t.scale})`,transformOrigin:"top left"}:{})},null,12,w)],4)]))}}),g=c($,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/layouts/iframe.vue"]]),x=e("h1",null,"Examples on p5JS site",-1),B=e("p",null,"Click on files to run the codes.",-1),C={__name:"10",setup(r){return v(n),y(),(o,s)=>(i(),p(g,f(h(l(b)(l(n),9))),{default:_(()=>[x,B]),_:1},16))}},E=c(C,[["__file","/@slidev/slides/10.md"]]);export{E as default};