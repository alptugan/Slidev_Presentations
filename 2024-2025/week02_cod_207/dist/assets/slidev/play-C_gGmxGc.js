function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-WZPn_Gp8.js","assets/modules/unplugin-icons-EHwHS_xy.js","assets/modules/vue-BVuX4LCl.js","assets/modules/shiki-dFQwKQX3.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-CFvYv-_L.js","assets/index-DlPl-B9W.js","assets/index-BHbxazyJ.css","assets/slidev/index-D4GHMUWF.js","assets/slidev/SlidesShow-CgnTDIUM.js","assets/slidev/bottom-CQbwN1kc.js","assets/slidev/context-uhJEF11S.js","assets/bottom-Ew4diHxU.css","assets/slidev/title-renderer-TmyWyWAW.js","assets/SlidesShow-Bhexi3Jz.css","assets/DrawingControls-C5T1oZL5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b,c as w,u as $,_ as z}from"../index-DlPl-B9W.js";import{d as h,a6 as P,o as l,c as r,A as e,b as f,e as t,f as B,i as D,g as a,a7 as O,y as E,k as M,a5 as g,a0 as R,M as y,l as v,F as I,t as A,h as T}from"../modules/vue-BVuX4LCl.js";import{a as x,c as S,e as C,f as U,g as N,w as H,h as L,j}from"./index-D4GHMUWF.js";import{Q as F,G,r as Q,u as W,S as K,a as X,N as Y}from"./SlidesShow-CgnTDIUM.js";import{P as q}from"./PrintStyle-CJqIqdYp.js";import{u as J}from"./DrawingPreview-CFvYv-_L.js";import"../modules/shiki-dFQwKQX3.js";import"./bottom-CQbwN1kc.js";import"./context-uhJEF11S.js";import"../modules/unplugin-icons-EHwHS_xy.js";import"./title-renderer-TmyWyWAW.js";const Z="/Slidev_Presentations/2024-2025/week02_cod_207/dist/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(u,{emit:i}){const n=u,o=P(n,"modelValue",i);function s(){o.value=!1}return(c,d)=>(l(),r(O,null,[e(o)?(l(),f("div",ee,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:d[0]||(d[0]=m=>s())}),t("div",{class:D(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[B(c.$slots,"default")],2)])):a("v-if",!0)],1024))}}),le=b(oe,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Modal.vue"]]),se={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},te=["innerHTML"],ae=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),R("dev ")])])],-1),ie=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(u,{emit:i}){const o=P(u,"modelValue",i),s=E(()=>typeof w.info=="string");return(c,d)=>(l(),r(le,{modelValue:e(o),"onUpdate:modelValue":d[0]||(d[0]=m=>g(o)?o.value=m:null),class:"px-6 py-4"},{default:M(()=>[t("div",se,[s.value?(l(),f("div",{key:0,class:"mb-4",innerHTML:e(w).info},null,8,te)):a("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ne=b(ie,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=h({__name:"Controls",setup(u){const i=y(),n=y();return(_,o)=>(l(),f(I,null,[v(F,{modelValue:e(x),"onUpdate:modelValue":o[0]||(o[0]=s=>g(x)?x.value=s:null)},null,8,["modelValue"]),v(G),i.value?(l(),r(e(i),{key:0})):a("v-if",!0),n.value?(l(),r(e(n),{key:1,modelValue:e(S),"onUpdate:modelValue":o[1]||(o[1]=s=>g(S)?S.value=s:null)},null,8,["modelValue"])):a("v-if",!0),e(w).info?(l(),r(ne,{key:2,modelValue:e(C),"onUpdate:modelValue":o[2]||(o[2]=s=>g(C)?C.value=s:null)},null,8,["modelValue"])):a("v-if",!0)],64))}}),de=b(re,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Controls.vue"]]),ue=h({__name:"play",setup(u){Q();const{next:i,prev:n,isEmbedded:_,isPrintMode:o}=$(),{isDrawing:s}=J(),c=A();function d(p){var V;N.value||((V=p.target)==null?void 0:V.id)==="slide-container"&&(p.screenX/window.innerWidth>.6?i():n())}W(c);const m=E(()=>U.value||N.value);y();const k=y();return z(()=>import("./DrawingControls-WZPn_Gp8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(p=>k.value=p.default),(p,V)=>(l(),f(I,null,[e(o)?(l(),r(q,{key:0})):a("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:c,class:D(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[v(K,{class:"w-full h-full",style:T({background:"var(--slidev-slide-container-background, black)"}),width:e(o)?e(H).width.value:void 0,scale:e(L),"is-main":!0,onPointerdown:d},{default:M(()=>[v(X,{"render-context":"slide"})]),controls:M(()=>[e(o)?a("v-if",!0):(l(),f("div",{key:0,class:D(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[m.value?"!opacity-100 right-0":"opacity-0 p-2",e(s)?"pointer-events-none":""]])},[v(Y,{class:"m-auto",persist:m.value},null,8,["persist"])],2)),!e(w).drawings.presenterOnly&&!e(_)&&k.value?(l(),r(e(k),{key:1,class:"ml-0"})):a("v-if",!0)]),_:1},8,["style","width","scale"]),a("v-if",!0)],2),e(o)?a("v-if",!0):(l(),r(de,{key:1}))],64))}}),ke=b(ue,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/play.vue"]]);export{ke as default};