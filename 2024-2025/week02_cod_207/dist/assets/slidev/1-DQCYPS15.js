import{i as h,w as b}from"../modules/unplugin-icons-EHwHS_xy.js";import{d as g,y as x,o as u,b as k,e as t,f as $,h as w,c as y,k as C,A as r,a0 as S,l,q as P,s as B}from"../modules/vue-BVuX4LCl.js";import{u as _,p as z,f as H}from"./context-uhJEF11S.js";import{b as p,D as c}from"../index-DlPl-B9W.js";import"../modules/shiki-dFQwKQX3.js";function d(e){return e.startsWith("/")?"/Slidev_Presentations/2024-2025/week02_cod_207/dist/"+e.slice(1):e}function N(e,o=!1){const s=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),n={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?o?`linear-gradient(#0005, #0008), url(${d(e)})`:`url("${d(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return n.background||delete n.background,n}const V={class:"my-auto w-full"},W=g({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){_();const o=e,s=x(()=>N(o.background,!0));return(n,a)=>(u(),k("div",{class:"slidev-layout cover text-center",style:w(s.value)},[t("div",V,[$(n.$slots,"default")])],4))}}),A=p(W,[["__file","/opt/homebrew/lib/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),D=t("h1",null,"Creative Coding",-1),I=t("p",null,"How do computers work?, P5JS Setup, Hello World",-1),O={class:"pt-12"},R={href:"https://github.com/alptugan/Slidev_Presentations",target:"_blank",alt:"GitHub",class:"abs-br m-6 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},T={__name:"1",setup(e){z(c);const{$slidev:o,$nav:s,$clicksContext:n,$clicks:a,$page:j,$renderContext:q,$frontmatter:E}=_();return(F,i)=>{const m=h,v=b;return u(),y(A,P(B(r(H)(r(c),0))),{default:C(()=>[D,I,t("div",O,[t("span",{onClick:i[0]||(i[0]=(...f)=>r(o).nav.next&&r(o).nav.next(...f)),class:"px-2 p-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[S(" COD 207 - Week 02 Class "),l(m,{class:"inline"})])]),t("p",null,[t("a",R,[l(v)])])]),_:1},16)}}},M=p(T,[["__file","/@slidev/slides/1.md"]]);export{M as default};