import{o as n,b as d,e,d as L,g as x,W as w,c as h,n as M,_ as R,l as V,m as A,h as B,U as D,X as T,O as q,I as G,Y as $,Z as O,$ as U,a0 as F,a1 as W,s as Z,a2 as E,E as j,a3 as J,a4 as X,a5 as Y,z as K,a as s,k as o,R as Q,t as f,v as P,w as g,f as z,a6 as ee,V as te,i as se,F as oe,a7 as ne,a8 as le}from"./index-Cdy_qd_Y.js";import{h as ae,p as re,j as ie,k as ce,l as ue,s as N,S as de,g as _e}from"./bottom-057qP-hn.js";import{r as me,a as H,I,S as he,b as pe,N as ve,G as fe}from"./SlidesShow-SQFzOhmA.js";import{N as ge}from"./NoteDisplay-B34IewhP.js";import xe from"./DrawingControls-D1wbtWaN.js";import"./DrawingPreview-BtbDEfWF.js";const we={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ye=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),Ce=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"},null,-1),Se=[ye,Ce];function ke(l,a){return n(),d("svg",we,[...Se])}const be={name:"carbon-zoom-out",render:ke},$e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ze=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4z"},null,-1),Ne=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"},null,-1),Me=[ze,Ne];function Ve(l,a){return n(),d("svg",$e,[...Me])}const Be={name:"carbon-zoom-in",render:Ve},Fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pe=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),He=[Pe];function Ie(l,a){return n(),d("svg",Fe,[...He])}const Le={name:"carbon-renew",render:Ie},Re={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ae=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"},null,-1),De=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01z"},null,-1),Te=[Ae,De];function qe(l,a){return n(),d("svg",Re,[...Te])}const Ge={name:"carbon-time",render:qe},Oe="/Slidev_Presentations/week04_cod_208-Side_Scrolling_Game/dist/assets/logo-title-horizontal-BdJppU8-.png",Ue=L({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(l){const a=l,C=x(()=>{var r,i,t;return(t=(i=(r=w.value)==null?void 0:r.meta)==null?void 0:i.slide)==null?void 0:t.note}),S=x(()=>{var r,i,t;return(t=(i=(r=w.value)==null?void 0:r.meta)==null?void 0:i.slide)==null?void 0:t.noteHTML});return(r,i)=>(n(),h(ge,{class:M(a.class),note:C.value,"note-html":S.value},null,8,["class","note","note-html"]))}}),We=R(Ue,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteStatic.vue"]]),y=l=>(ne("data-v-18653104"),l=l(),le(),l),Ze={class:"bg-main h-full slidev-presenter"},Ee={class:"grid-section top flex"},je=y(()=>e("img",{src:Oe,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),Je=y(()=>e("div",{class:"flex-auto"},null,-1)),Xe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ye=y(()=>e("div",{class:"context"}," current ",-1)),Ke=y(()=>e("div",{class:"context"}," next ",-1)),Qe={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},et={class:"border-t border-main py-1 px-2 text-sm"},tt={class:"grid-section bottom"},st={class:"progress-bar"},ot=L({__name:"Presenter",setup(l){const a=V();me(),A(a);const C=B.titleTemplate.replace("%s",B.title||"Slidev");D({title:`Presenter - ${C}`}),V(!1);const{timer:S,resetTimer:r}=T(),i=q.map(v=>G(v)),t=x(()=>$.value.current<$.value.total?[w.value,$.value.current+1]:O.value?[U.value,0]:null),p=x(()=>t.value&&i[+t.value[0].path-1]);return F([w,W],()=>{p.value&&(p.value[0].value=t.value[1])},{immediate:!0}),Z(),E(()=>{const v=a.value.querySelector("#slide-content"),u=j(J()),k=X();F(()=>{if(!k.value||K.value||!ae.value)return;const c=v.getBoundingClientRect(),_=(u.x-c.left)/c.width*100,m=(u.y-c.top)/c.height*100;if(!(_<0||_>100||m<0||m>100))return{x:_,y:m}},c=>{Y.cursor=c})}),(v,u)=>{const k=Ge,c=Le,_=Be,m=be;return n(),d(oe,null,[e("div",Ze,[e("div",{class:M(["grid-container",`layout${s(re)}`])},[e("div",Ee,[je,Je,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:u[0]||(u[0]=(...b)=>s(r)&&s(r)(...b))},[o(k,{class:"absolute"}),o(c,{class:"absolute opacity-0"})]),e("div",Xe,Q(s(S)),1)]),e("div",{ref_key:"main",ref:a,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:f(s(P))},[o(H,{key:"main",class:"h-full w-full"},{default:g(()=>[o(pe,{"render-context":"presenter"})]),_:1}),Ye],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:f(s(P))},[t.value&&p.value?(n(),h(H,{key:"next",class:"h-full w-full"},{default:g(()=>[(n(),h(s(de),{is:t.value[0].component,key:t.value[0].path,"clicks-context":p.value[1],class:M(s(_e)(t.value[0])),route:t.value[0],"render-context":"previewNext"},null,8,["is","clicks-context","class","route"]))]),_:1})):z("v-if",!0),Ke],4),z(" Notes "),(n(),d("div",Qe,[(n(),h(We,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:f({fontSize:`${s(ie)}em`})},null,8,["style"])),e("div",et,[o(I,{title:"Increase font size",onClick:s(ce)},{default:g(()=>[o(_)]),_:1},8,["onClick"]),o(I,{title:"Decrease font size",onClick:s(ue)},{default:g(()=>[o(m)]),_:1},8,["onClick"]),z("v-if",!0)])])),e("div",tt,[o(ve,{persist:!0})]),(n(),h(xe,{key:2}))],2),e("div",st,[e("div",{class:"progress h-2px bg-primary transition-all",style:f({width:`${(s(ee)-1)/(s(te)-1)*100}%`})},null,4)])]),o(fe),o(he,{modelValue:s(N),"onUpdate:modelValue":u[2]||(u[2]=b=>se(N)?N.value=b:null)},null,8,["modelValue"])],64)}}}),ut=R(ot,[["__scopeId","data-v-18653104"],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Presenter.vue"]]);export{ut as default};