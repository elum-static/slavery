(() => {var e = document.createElement('style');e.innerText = ".X{color:red}\n";document.head.appendChild(e)})();import{m as e,s as r,i as t,c as n,g as a,h as i,j as c,k as s,l,t as d,n as g,o as u,R as o,p as h,F as m,T as p,q as b,a as v,b as k,d as y,r as f,u as w}from"./index-PJktAmnc.js";import{V as z}from"./View-Cs3fjQ5d.js";import{G as _,A as U,B as x,a as j,S as B,b as R,D as P}from"./Default-8tTQmzvw.js";import{P as S}from"./Padding-BVyk1gyx.js";import{B as G}from"./Button-DLg0ZMxx.js";import{B as M}from"./ButtonGroup-lqmY2hIp.js";const V=e=>0===e?"gold":1===e?"silver":2===e?"bronze":"bgPrimary";var q=d("<div>");const A=d=>{const g=e({},d),[u,o]=r(g,["type","top","title","description","bottom","class","classList","children"]);return h=q(),t(h,n(s,{get when(){return u.top},get children(){var e=q();return t(e,(()=>u.top)),a((()=>i(e,c.BestUserRating__top))),e}}),null),t(h,n(s,{get when(){return u.title},get children(){var e=q();return t(e,(()=>u.title)),a((()=>i(e,c.BestUserRating__title))),e}}),null),t(h,n(s,{get when(){return u.description},get children(){var e=q();return t(e,(()=>u.description)),a((()=>i(e,c.BestUserRating__description))),e}}),null),t(h,n(s,{get when(){return u.bottom},get children(){var e=q();return t(e,(()=>u.bottom)),a((()=>i(e,c.BestUserRating__bottom))),e}}),null),a((e=>{var r=c.BestUserRating,t={[c[`BestUserRating__type--${u.type}`]]:!!u.type,[`${u.class}`]:!!u.class,...u.classList};return r!==e.e&&i(h,e.e=r),e.t=l(h,t,e.t),e}),{e:void 0,t:void 0}),h;var h};var C=d("<div>No buttons");const D=()=>{const[,e]=g(),[r,t]=u(o),a=[{type:h.Users,text:e().players},{type:h.Clans,text:e().clans},{type:h.MyClan,text:e().my_clan}];return n(_,{fixed:!0,background:"none",get children(){return n(M,{scroll:!0,streched:!0,get children(){return n(m,{each:a,get fallback(){return C()},children:(e,a)=>n(G,{get"data-index"(){return a()},onClick:()=>{t(e.type)},get type(){return r()===e.type?"accent":"secondary"},streched:!0,size:"middle",get children(){return n(p,{align:"center",weight:"bold",get color(){return r()===e.type?"black":"secondary"},size:"medium",get children(){return e.text}})}})})}})}})};var N=d("<div>No items");const I=[...Array(10).keys()].map((()=>({name:"DUROV",nickname:"Павел Дуров",avatar:"https://cdn.forbes.ru/forbes-static/new/2022/04/IMG-10983445-624a99e258c99.jpg",level:99}))),O=()=>n(M,{streched:!0,get children(){return n(m,{get each(){return I.slice(0,3)},get fallback(){return N()},children:(e,r)=>{const t=V(r());return n(A,{get"data-index"(){return r()},type:t,get top(){return n(U,{size:"bestUser",get src(){return e.avatar}})},get title(){return n(p,{weight:"black",color:"primary",size:"medium",get children(){return e.name}})},get description(){return n(p,{weight:"light",color:"primary",size:"small",get children(){return e.nickname}})},get bottom(){return n(M,{padding:!1,get children(){return[n(x,{get level(){return e.level}}),n(j,{background:t,padding:"square",align:"center",get children(){return n(p,{color:"black",weight:"black",size:"medium",get children(){return r()+1}})}})]}})}})}})}});var L=d("<div>No items");const T=[...Array(25).keys()].map((()=>({name:"DUROV",nickname:"Павел Дуров",avatar:"https://cdn.forbes.ru/forbes-static/new/2022/04/IMG-10983445-624a99e258c99.jpg",level:99}))),$=()=>n(_,{background:"none",get children(){return n(m,{get each(){return T.slice(3)},get fallback(){return L()},children:(e,r)=>n(S,{mode:"block",get"data-index"(){return r()},get children(){return n(B,{padding:"default",background:"secondary",get after(){return n(j,{padding:"smooth",background:"lightSecondary",get children(){return n(M,{padding:!1,get children(){return[n(x,{get level(){return e.level}}),n(j,{background:"bgPrimary",padding:"square",align:"center",get children(){return n(p,{color:"primary",weight:"black",size:"medium",get children(){return r()+1}})}})]}})}})},get before(){return n(U,{size:"default",get src(){return e.avatar}})},get description(){return n(p,{size:"small",weight:"regular",color:"primary",get children(){return e.nickname}})},get children(){return n(p,{size:"medium",weight:"black",color:"primary",get children(){return e.name}})}})}})})}}),F=()=>{const[e]=u(o);return n(s,{get when(){return e()===h.Users},get children(){return[n(O,{}),n($,{})]}})};var X=d("<div>No items");const E=[...Array(25).keys()].map((()=>({name:"☭USSR☭",avatar:"https://cdn.forbes.ru/forbes-static/new/2022/04/IMG-10983445-624a99e258c99.jpg",count_users:12012,balance:125125125125}))),H=()=>{const[,e]=g();return n(_,{background:"none",get children(){return n(m,{get each(){return E.slice(3)},get fallback(){return X()},children:(r,t)=>{const a=V(t());return n(S,{mode:"block",get"data-index"(){return t()},get children(){return n(B,{padding:"large",background:"secondary",get after(){return n(j,{background:a,padding:"square",align:"center",get children(){return n(p,{color:"bgPrimary"!==a?"black":"primary",weight:"black",size:"medium",get children(){return t()+1}})}})},get before(){return n(U,{mode:"app",size:"bestUser",get src(){return r.avatar}})},get description(){return[n(S,{mode:"smallVertical",get children(){return n(j,{get children(){return n(p,{whiteSpace:"nowrap",size:"small",weight:"black",color:"black",get children(){return[b((()=>r.count_users))," ",b((()=>{return t=r.count_users,e().dec_word_participants[t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2];var t}))]}})}})}}),n(p,{size:"small",weight:"black",color:"primary",get children(){return r.balance}})]},get children(){return n(p,{size:"medium",weight:"black",color:"primary",get children(){return r.name}})}})}})}})}})},J=()=>{const[e]=u(o);return n(s,{get when(){return e()===h.Clans},get children(){return n(H,{})}})};var K=d("<div>No items");const Q=[...Array(25).keys()].map((()=>({name:"DUROV",nickname:"Павел Дуров",avatar:"https://cdn.forbes.ru/forbes-static/new/2022/04/IMG-10983445-624a99e258c99.jpg",level:99}))),W=()=>n(_,{background:"none",get children(){return n(m,{get each(){return Q.slice(3)},get fallback(){return K()},children:(e,r)=>n(S,{mode:"block",get"data-index"(){return r()},get children(){return n(B,{padding:"medium",background:"secondary",get after(){return n(j,{padding:"smooth",background:"lightSecondary",get children(){return n(M,{padding:!1,get children(){return[n(x,{get level(){return e.level}}),n(j,{background:"bgPrimary",padding:"square",align:"center",get children(){return n(p,{color:"primary",weight:"black",size:"medium",get children(){return r()+1}})}})]}})}})},get before(){return n(U,{size:"default",get src(){return e.avatar}})},get description(){return n(p,{size:"small",weight:"regular",color:"primary",get children(){return e.nickname}})},get children(){return n(p,{size:"medium",weight:"black",color:"primary",get children(){return e.name}})}})}})})}}),Y=()=>{const[e]=u(o);return n(s,{get when(){return e()===h.MyClan},get children(){return n(W,{})}})},Z=e=>n(v,{blurSafeTop:!0,get header(){return n(D,{})},get nav(){return e.nav},get children(){return[n(S,{get children(){return n(R,{mode:"short"})}}),n(F,{}),n(J,{}),n(Y,{})]}}),ee="X",re=t=>{const[a,i]=r(t,["nav"]),c=k(a.nav);return n(z,e({get class(){return ee},get nav(){return a.nav},get activePanel(){return c()}},i,{get children(){return[n(y,{nav:f,component:P}),n(y,{nav:w,component:Z})]}}))};export{re as default};
