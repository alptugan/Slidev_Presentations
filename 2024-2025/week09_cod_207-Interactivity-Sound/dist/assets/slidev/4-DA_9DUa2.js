import{x as q,y as R}from"../modules/unplugin-icons-DhrB5nhe.js";import{d as L,t as z,at as W,C as S,_ as M,y as w,au as j,o as r,b as f,f as D,A as o,c as m,g as K,i as g,h as T,e as s,k as A,l as J,m as U,q as G,s as O,a0 as i}from"../modules/vue-B20gB0Ey.js";import{c as F,I as Q,J as X,K as Y,b as _,L as H}from"../index-C7PkHVNw.js";import{u as N,p as Z,f as ss}from"./context-Bi9uQfLN.js";import"../modules/shiki-xZy_C6qk.js";const is=["title"],ls=L({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:F.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(p){const l=p,{$clicksContext:e}=N(),a=z(),c=Q();W(()=>{e.unregister(c)}),S(()=>{var t;(t=a.value)==null||t.classList.toggle("slidev-code-line-numbers",l.lines)}),M(()=>{var C;if(!e||!((C=l.ranges)!=null&&C.length))return;const{start:t,end:h,delta:k}=e.resolve(l.at,l.ranges.length-1);e.register(c,{max:h,delta:k});const d=w(()=>Math.max(0,e.current-t+1)),y=w(()=>l.finally==="last"?l.ranges.at(-1):l.finally.toString());S(()=>{if(!a.value)return;let u=l.ranges[d.value]??y.value;const v=u==="hide";a.value.classList.toggle(X,v),v&&(u=l.ranges[d.value+1]??y.value);const b=a.value.querySelector(".shiki"),E=Array.from(b.querySelectorAll("code > .line")),V=E.length;if(Y(u,V,l.startLine,n=>[E[n]]),l.maxHeight){const n=Array.from(b.querySelectorAll(".line.highlighted"));n.reduce((x,P)=>P.offsetHeight+x,0)>a.value.offsetHeight?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n.length>0&&n[Math.round((n.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:B,copy:$}=j();function I(){var h,k;const t=(k=(h=a.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:k.textContent;t&&$(t)}return(t,h)=>{const k=q,d=R;return r(),f("div",{ref_key:"el",ref:a,class:g(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":l.lines}]),style:T({"max-height":l.maxHeight,"overflow-y":l.maxHeight?"scroll":void 0,"--start":l.startLine})},[D(t.$slots,"default"),o(F).codeCopy?(r(),f("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:o(B)?"Copied":"Copy",onClick:h[0]||(h[0]=y=>I())},[o(B)?(r(),m(k,{key:0,class:"p-2 w-8 h-8"})):(r(),m(d,{key:1,class:"p-2 w-8 h-8"}))],8,is)):K("v-if",!0)],6)}}}),as=_(ls,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),es=L({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(p){const l=p;return(e,a)=>(r(),f("div",{class:g(["slidev-layout two-columns w-full h-full grid grid-cols-2",l.layoutClass])},[s("div",{class:g(["col-left",l.class])},[D(e.$slots,"default")],2),s("div",{class:g(["col-right",l.class])},[D(e.$slots,"right")],2)],2))}}),ts=_(es,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/layouts/two-cols.vue"]]),hs=s("h1",null,"In-class Exercise",-1),ns=s("p",null,"Replace the audio file and add buttons to play, stop, and pause the song.",-1),ks=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-javascript"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"var"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," song"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // Define variable")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," preload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  song"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," loadSound"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"RAW-all.mp3"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"  // load sound into the variable")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," setup"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  createCanvas"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"400"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 400"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // Canvas size")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  song"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"loop"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"();"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // enable loop for the sound. ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," draw"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  background"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"220"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // set background color")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," keyPressed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  if"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"key"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," =="),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"p"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    song"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"play"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"();"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"  // play the song")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  else"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," if"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"key"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," =="),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"s"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    song"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"stop"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"();"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // stop the song")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  else"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," if"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"key"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," =="),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"a"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    song"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"pause"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"();"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // pause the song")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1),rs={__name:"4",setup(p){return Z(H),N(),(l,e)=>{const a=as;return r(),m(ts,G(O(o(ss)(o(H),3))),{right:A(c=>[J(a,U({maxHeight:"400px"},{ranges:["1","3-5","7-11","13-15","17","18-20","22-24","26-29","all"]}),{default:A(()=>[ks]),_:1},16)]),default:A(()=>[hs,ns]),_:1},16)}}},us=_(rs,[["__file","/@slidev/slides/4.md"]]);export{us as default};