(() => {var e = document.createElement('style');e.innerText = ".wn{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}\n";document.head.appendChild(e)})();import{w as e,ao as r,c as t,W as n,T as a,m as i,a1 as s,a0 as l,y as d,s as c,u,P as g,ap as h,G as o,A as m,S as v,I as b,N as p,ah as w,F as x,aq as y,ar as f,a4 as k,as as z,aj as N,at as j,ak as C,z as P,v as R,J as S,K as V,V as q,M as A,au as F}from"./index-Xz3nCgln.js";const G=()=>{const[g]=e(r);return t(u,{get when(){return!g()},get children(){return t(n,{mode:"lower",get title(){return t(a,i(s,{children:"Вы не состоите в клане"}))},get description(){return t(a,i(l,{children:"Вступите в любой клан для получения данных рейтига."}))},get children(){return t(d,{padding:!1,streched:!0,get children(){return t(c,{mode:"outline",streched:!0,children:"Поиск клана"})}})}})}})},I="wn";var J=P("<div><div>"),K=P("<div>");const L=()=>{const[n]=e(r);return t(u,{get when(){return n()},get children(){return[t(g,{get children(){return t(a,{align:"center",weight:"black",color:"primary",size:"bigName",get children(){return n()?.name}})}}),t(g,{get children(){return t(h,{get children(){return[t(o,{style:{"min-width":"min-content"},width:"max-content",borderRadius:"large",get children(){return[t(m,{border:"medium",mode:"large",size:"extraLargeClan",get src(){return n()?.avatar??""}}),t(g,{style:{"max-width":"160px"},mode:"block",get children(){return t(v,{get before(){return t(b,{height:16})},get children(){return t(p,{align:"right",max:18,get value(){return n()?.balance??0}})}})}})]}}),t(o,{background:"none",borderRadius:"large",get children(){var e=J(),r=e.firstChild;return w(r,t(x,{get each(){return n()?.links},children:(e,r)=>{const n=y(e.url),i=f(e.url);return s=K(),w(s,t(v,{target:"_blank",get href(){return i.href},get expandable(){return t(k,{color:"secondary"===n?"secondary":"inherit",size:"small"})},background:n,padding:"medium",get before(){return z(n)},get children(){return t(a,{whiteSpace:"nowrap",weight:"medium",color:"primary",get children(){return i.title}})}}),null),w(s,t(g,{mode:"smallVertical"}),null),N((()=>j(s,"data-index",r()))),s;var s}})),w(e,t(c,{streched:!0,size:"middle",type:"accent",get children(){return t(a,{size:"small",weight:"bold",children:"Подробнее"})}}),null),N((()=>C(e,I))),e}})]}})}})]}})},M=e=>t(R,{get nav(){return e.nav},get children(){return[t(G,{}),t(L,{})]}}),T="N",W=e=>{const[r,n]=S(e,["nav"]),a=V(r.nav);return t(q,i({get class(){return T},get nav(){return r.nav},get activePanel(){return a()}},n,{get children(){return t(A,{nav:F,component:M})}}))};export{W as default};
