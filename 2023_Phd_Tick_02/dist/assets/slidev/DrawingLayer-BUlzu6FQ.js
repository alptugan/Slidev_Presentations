import{d as l,t as i,_ as u,D as m,E as c,o as p,b as d,i as f,A as s}from"../modules/vue-Bs3OavhV.js";import{u as _}from"./context-BnDXBkaP.js";import{u as v}from"./DrawingPreview-D-SeCwJ4.js";import{b as g}from"../index-D7rR3_2S.js";import"./index-B6rP1t_w.js";import"../modules/shiki-D5HeCZiV.js";const w=l({__name:"DrawingLayer",setup(b){const{drauu:e,drawingEnabled:n,loadCanvas:t}=v(),r=_().$scale,o=i();return u(()=>{e.mount(o.value,o.value.parentElement),m(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),t()}),c(()=>{e.unmount()}),(a,h)=>(p(),d("svg",{ref_key:"svg",ref:o,class:f(["w-full h-full absolute top-0",{"pointer-events-none":!s(n),"touch-none":s(n)}])},null,2))}}),B=g(w,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{B as default};