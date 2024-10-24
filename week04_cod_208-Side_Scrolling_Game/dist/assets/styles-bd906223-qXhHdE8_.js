import{G as q}from"./graph-03626afa-CNQu5aup.js";import{ba as N,b4 as y,bb as M,a$ as _,b7 as G,bc as C,bd as E,b3 as $,bg as R,be as F,bh as D,bi as j,bj as U,bk as H,bl as W,bm as X}from"./index-Cdy_qd_Y.js";import{r as J}from"./index-b5c99bd1-D8swB0ci.js";import{c as K}from"./channel-649fb47b-DibGmG7x.js";function Q(e){return typeof e=="string"?new D([document.querySelectorAll(e)],[document.documentElement]):new D([U(e)],j)}function de(e,r){return!!e.children(r).length}function be(e){return L(e.v)+":"+L(e.w)+":"+L(e.name)}var Y=/:/g;function L(e){return e?String(e).replace(Y,"\\:"):""}function Z(e,r){r&&e.attr("style",r)}function pe(e,r,c){r&&e.attr("class",r).attr("class",c+" "+e.attr("class"))}function fe(e,r){var c=r.graph();if(W(c)){var a=c.transition;if(X(a))return a(e)}return e}function O(e,r){var c=e.append("foreignObject").attr("width","100000"),a=c.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var i=r.label;switch(typeof i){case"function":a.insert(i);break;case"object":a.insert(function(){return i});break;default:a.html(i)}Z(a,r.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var d=a.node().getBoundingClientRect();return c.attr("width",d.width).attr("height",d.height),c}const z={},ee=function(e){const r=Object.keys(e);for(const c of r)z[c]=e[c]},P=function(e,r,c,a,i,d){const u=a.select(`[id="${c}"]`);Object.keys(e).forEach(function(b){const l=e[b];let g="default";l.classes.length>0&&(g=l.classes.join(" ")),g=g+" flowchart-label";const w=N(l.styles);let t=l.text!==void 0?l.text:l.id,s;if(y.info("vertex",l,l.labelType),l.labelType==="markdown")y.info("vertex",l,l.labelType);else if(M(_().flowchart.htmlLabels)){const m={label:t.replace(/fa[blrs]?:fa-[\w-]+/g,k=>`<i class='${k.replace(":"," ")}'></i>`)};s=O(u,m).node(),s.parentNode.removeChild(s)}else{const m=i.createElementNS("http://www.w3.org/2000/svg","text");m.setAttribute("style",w.labelStyle.replace("color:","fill:"));const k=t.split(G.lineBreakRegex);for(const T of k){const v=i.createElementNS("http://www.w3.org/2000/svg","tspan");v.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),v.setAttribute("dy","1em"),v.setAttribute("x","1"),v.textContent=T,m.appendChild(v)}s=m}let p=0,o="";switch(l.type){case"round":p=5,o="rect";break;case"square":o="rect";break;case"diamond":o="question";break;case"hexagon":o="hexagon";break;case"odd":o="rect_left_inv_arrow";break;case"lean_right":o="lean_right";break;case"lean_left":o="lean_left";break;case"trapezoid":o="trapezoid";break;case"inv_trapezoid":o="inv_trapezoid";break;case"odd_right":o="rect_left_inv_arrow";break;case"circle":o="circle";break;case"ellipse":o="ellipse";break;case"stadium":o="stadium";break;case"subroutine":o="subroutine";break;case"cylinder":o="cylinder";break;case"group":o="rect";break;case"doublecircle":o="doublecircle";break;default:o="rect"}r.setNode(l.id,{labelStyle:w.labelStyle,shape:o,labelText:t,labelType:l.labelType,rx:p,ry:p,class:g,style:w.style,id:l.id,link:l.link,linkTarget:l.linkTarget,tooltip:d.db.getTooltip(l.id)||"",domId:d.db.lookUpDomId(l.id),haveCallback:l.haveCallback,width:l.type==="group"?500:void 0,dir:l.dir,type:l.type,props:l.props,padding:_().flowchart.padding}),y.info("setNode",{labelStyle:w.labelStyle,labelType:l.labelType,shape:o,labelText:t,rx:p,ry:p,class:g,style:w.style,id:l.id,domId:d.db.lookUpDomId(l.id),width:l.type==="group"?500:void 0,type:l.type,dir:l.dir,props:l.props,padding:_().flowchart.padding})})},V=function(e,r,c){y.info("abc78 edges = ",e);let a=0,i={},d,u;if(e.defaultStyle!==void 0){const n=N(e.defaultStyle);d=n.style,u=n.labelStyle}e.forEach(function(n){a++;const b="L-"+n.start+"-"+n.end;i[b]===void 0?(i[b]=0,y.info("abc78 new entry",b,i[b])):(i[b]++,y.info("abc78 new entry",b,i[b]));let l=b+"-"+i[b];y.info("abc78 new link id to be used is",b,l,i[b]);const g="LS-"+n.start,w="LE-"+n.end,t={style:"",labelStyle:""};switch(t.minlen=n.length||1,n.type==="arrow_open"?t.arrowhead="none":t.arrowhead="normal",t.arrowTypeStart="arrow_open",t.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":t.arrowTypeStart="arrow_cross";case"arrow_cross":t.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":t.arrowTypeStart="arrow_point";case"arrow_point":t.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":t.arrowTypeStart="arrow_circle";case"arrow_circle":t.arrowTypeEnd="arrow_circle";break}let s="",p="";switch(n.stroke){case"normal":s="fill:none;",d!==void 0&&(s=d),u!==void 0&&(p=u),t.thickness="normal",t.pattern="solid";break;case"dotted":t.thickness="normal",t.pattern="dotted",t.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":t.thickness="thick",t.pattern="solid",t.style="stroke-width: 3.5px;fill:none;";break;case"invisible":t.thickness="invisible",t.pattern="solid",t.style="stroke-width: 0;fill:none;";break}if(n.style!==void 0){const o=N(n.style);s=o.style,p=o.labelStyle}t.style=t.style+=s,t.labelStyle=t.labelStyle+=p,n.interpolate!==void 0?t.curve=C(n.interpolate,E):e.defaultInterpolate!==void 0?t.curve=C(e.defaultInterpolate,E):t.curve=C(z.curve,E),n.text===void 0?n.style!==void 0&&(t.arrowheadStyle="fill: #333"):(t.arrowheadStyle="fill: #333",t.labelpos="c"),t.labelType=n.labelType,t.label=n.text.replace(G.lineBreakRegex,`
`),n.style===void 0&&(t.style=t.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),t.labelStyle=t.labelStyle.replace("color:","fill:"),t.id=l,t.classes="flowchart-link "+g+" "+w,r.setEdge(n.start,n.end,t,a)})},te=function(e,r){return r.db.getClasses()},le=async function(e,r,c,a){y.info("Drawing flowchart");let i=a.db.getDirection();i===void 0&&(i="TD");const{securityLevel:d,flowchart:u}=_(),n=u.nodeSpacing||50,b=u.rankSpacing||50;let l;d==="sandbox"&&(l=$("#i"+r));const g=d==="sandbox"?$(l.nodes()[0].contentDocument.body):$("body"),w=d==="sandbox"?l.nodes()[0].contentDocument:document,t=new q({multigraph:!0,compound:!0}).setGraph({rankdir:i,nodesep:n,ranksep:b,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}});let s;const p=a.db.getSubGraphs();y.info("Subgraphs - ",p);for(let f=p.length-1;f>=0;f--)s=p[f],y.info("Subgraph - ",s),a.db.addVertex(s.id,{text:s.title,type:s.labelType},"group",void 0,s.classes,s.dir);const o=a.db.getVertices(),m=a.db.getEdges();y.info("Edges",m);let k=0;for(k=p.length-1;k>=0;k--){s=p[k],Q("cluster").append("text");for(let f=0;f<s.nodes.length;f++)y.info("Setting up subgraphs",s.nodes[f],s.id),t.setParent(s.nodes[f],s.id)}P(o,t,r,g,w,a),V(m,t);const T=g.select(`[id="${r}"]`),v=g.select("#"+r+" g");if(await J(v,t,["point","circle","cross"],"flowchart",r),R.insertTitle(T,"flowchartTitleText",u.titleTopMargin,a.db.getDiagramTitle()),F(t,T,u.diagramPadding,u.useMaxWidth),a.db.indexNodes("subGraph"+k),!u.htmlLabels){const f=w.querySelectorAll('[id="'+r+'"] .edgeLabel .label');for(const x of f){const S=x.getBBox(),h=w.createElementNS("http://www.w3.org/2000/svg","rect");h.setAttribute("rx",0),h.setAttribute("ry",0),h.setAttribute("width",S.width),h.setAttribute("height",S.height),x.insertBefore(h,x.firstChild)}}Object.keys(o).forEach(function(f){const x=o[f];if(x.link){const S=$("#"+r+' [id="'+f+'"]');if(S){const h=w.createElementNS("http://www.w3.org/2000/svg","a");h.setAttributeNS("http://www.w3.org/2000/svg","class",x.classes.join(" ")),h.setAttributeNS("http://www.w3.org/2000/svg","href",x.link),h.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),d==="sandbox"?h.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):x.linkTarget&&h.setAttributeNS("http://www.w3.org/2000/svg","target",x.linkTarget);const A=S.insert(function(){return h},":first-child"),B=S.select(".label-container");B&&A.append(function(){return B.node()});const I=S.select(".label");I&&A.append(function(){return I.node()})}}})},ue={setConf:ee,addVertices:P,addEdges:V,getClasses:te,draw:le},re=(e,r)=>{const c=K,a=c(e,"r"),i=c(e,"g"),d=c(e,"b");return H(a,i,d,r)},ae=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${re(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,we=ae;export{we as a,O as b,Z as c,fe as d,be as e,ue as f,pe as g,de as i,Q as s};
