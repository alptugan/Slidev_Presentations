import{d as g,u as M,o as t,c as r,a as e,b,e as s,r as E,n as k,f as n,K as I,_ as w,g as N,h as p,w as x,i as f,j as O,s as _,k as u,F as z,l as $,m as A,p as B,q as C,t as P,v as R,x as T,y as U,z as j,A as H}from"./index-C8Ewokxi.js";import{s as y,a as h,b as V,i as L,c as D,w as F,d as G,e as K}from"./bottom-DulLvx5h.js";import{S as W,G as q,r as X,a as Y,b as J,N as Q}from"./SlidesShow-CBSOqlp8.js";import{P as Z}from"./PrintStyle-C331JsNJ.js";import"./DrawingPreview-BNgWIf-u.js";const ee="/Slidev_Presentations/week03_cod_208-Objects_Arrays/dist/assets/logo-BYkHSa_O.png",le={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=g({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:a}){const i=c,l=M(i,"modelValue",a);function o(){l.value=!1}return(d,v)=>(t(),r(I,null,[e(l)?(t(),b("div",le,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:v[0]||(v[0]=S=>o())}),s("div",{class:k(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[E(d.$slots,"default")],2)])):n("v-if",!0)],1024))}}),se=w(oe,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Modal.vue"]]),te={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ae=["innerHTML"],ie=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:ee,alt:"Slidev logo"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),O("dev ")])])],-1),ne=g({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:a}){const l=M(c,"modelValue",a),o=N(()=>typeof p.info=="string");return(d,v)=>(t(),r(se,{modelValue:e(l),"onUpdate:modelValue":v[0]||(v[0]=S=>f(l)?l.value=S:null),class:"px-6 py-4"},{default:x(()=>[s("div",te,[o.value?(t(),b("div",{key:0,class:"mb-4",innerHTML:e(p).info},null,8,ae)):n("v-if",!0),ie])]),_:1},8,["modelValue"]))}}),re=w(ne,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/InfoDialog.vue"]]),de=g({__name:"Controls",setup(c){const a=_(),i=_();return(m,l)=>(t(),b(z,null,[u(W,{modelValue:e(y),"onUpdate:modelValue":l[0]||(l[0]=o=>f(y)?y.value=o:null)},null,8,["modelValue"]),u(q),a.value?(t(),r(e(a),{key:0})):n("v-if",!0),i.value?(t(),r(e(i),{key:1,modelValue:e(h),"onUpdate:modelValue":l[1]||(l[1]=o=>f(h)?h.value=o:null)},null,8,["modelValue"])):n("v-if",!0),e(p).info?(t(),r(re,{key:2,modelValue:e(V),"onUpdate:modelValue":l[2]||(l[2]=o=>f(V)?V.value=o:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),ue=w(de,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Controls.vue"]]),ce=g({__name:"Play",setup(c){X();const a=$();function i(o){var d;D.value||((d=o.target)==null?void 0:d.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?T():U())}A(a);const m=N(()=>L.value||D.value);_();const l=_();return B(()=>import("./DrawingControls-BLd2bHNg.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(o=>l.value=o.default),(o,d)=>(t(),b(z,null,[e(C)?(t(),r(Z,{key:0})):n("v-if",!0),s("div",{id:"page-root",ref_key:"root",ref:a,class:k(["grid",e(K)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"]),style:P(e(R))},[u(Y,{class:"w-full h-full",style:P({background:"var(--slidev-slide-container-background, black)"}),width:e(C)?e(F).width.value:void 0,scale:e(G),"is-main":!0,onPointerdown:i},{default:x(()=>[u(J,{"render-context":"slide"})]),controls:x(()=>[s("div",{class:k(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[m.value?"!opacity-100 right-0":"opacity-0 p-2",e(j)?"pointer-events-none":""]])},[u(Q,{class:"m-auto",persist:m.value},null,8,["persist"])],2),!e(p).drawings.presenterOnly&&!e(H)&&l.value?(t(),r(e(l),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],6),u(ue)],64))}}),ge=w(ce,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Play.vue"]]);export{ge as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DrawingControls-BLd2bHNg.js","assets/index-C8Ewokxi.js","assets/index-DfCTaas6.css","assets/SlidesShow-CBSOqlp8.js","assets/bottom-DulLvx5h.js","assets/DrawingPreview-BNgWIf-u.js","assets/SlidesShow-D2ZN0qJa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}