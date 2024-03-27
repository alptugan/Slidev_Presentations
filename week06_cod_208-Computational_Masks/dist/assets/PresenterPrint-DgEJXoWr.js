import{d,S as _,T as p,h as m,g as h,N as u,b as a,e as t,Q as s,a as r,F as f,J as v,t as g,v as b,o as l,U as x,j as y,k as N,f as k,_ as w}from"./index-IEoCotoA.js";import{N as P}from"./NoteDisplay-B8hx8Jjm.js";const S={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>u.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(l(),a("div",{id:"page-root",style:g(r(b))},[t("div",S,[t("div",T,[t("h1",V,s(r(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(l(!0),a(f,null,v(i.value,(e,c)=>(l(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(r(x)),1),y(" "+s(e==null?void 0:e.title)+" ",1),j])]),N(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(l(),a("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
