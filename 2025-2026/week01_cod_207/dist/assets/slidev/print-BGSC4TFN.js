import{d as _,a4 as u,z as h,f as s,g as t,t as o,T as c,F as f,aj as g,o as a,i as v,e as x,ad as b}from"../modules/vue-C95EQMLk.js";import{a as y,u as N,x as d}from"../index-DOEML2Kp.js";import{_ as k}from"./NoteDisplay.vue_vue_type_style_index_0_lang-DxQNWcBh.js";import"../modules/shiki-C55IPsIr.js";const T={id:"page-root"},w={class:"m-4"},L={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},j={class:"opacity-50"},z={key:0,class:"border-main mb-8"},A=_({__name:"print",setup(C){const{slides:m,total:p}=y();u(`
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
`),N({title:`Notes - ${d.title}`});const i=h(()=>m.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==""));return(e,n)=>(a(),s("div",T,[t("div",w,[t("div",L,[t("h1",V,o(c(d).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(a(!0),s(f,null,g(i.value,(l,r)=>(a(),s("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",j,o(l?.no)+"/"+o(c(p)),1),b(" "+o(l?.title)+" ",1),n[0]||(n[0]=t("div",{class:"flex-auto"},null,-1))])]),x(k,{"note-html":l.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(a(),s("hr",z)):v("v-if",!0)]))),128))])]))}});export{A as default};
