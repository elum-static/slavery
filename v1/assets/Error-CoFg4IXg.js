import{c as e,T as r,y as n,s as t,W as a,X as s,v as c,J as i,K as d,m as l,V as o,M as u,Y as g}from"./index-BqfxQRN7.js";const h=()=>{const c=()=>{s()};return e(a,{mode:"lower",get title(){return e(r,{color:"primary",weight:"black",size:"medium",children:"Что-то пошло не так"})},get description(){return e(r,{color:"secondary",weight:"regular",size:"small",align:"center",children:"Приложение не может связаться с сервером. Попробуйте еще раз немного позже."})},get children(){return e(n,{streched:!0,padding:!1,get children(){return[e(t,{onClick:c,mode:"outline",streched:!0,children:"Закрыть"}),e(t,{type:"accent",streched:!0,children:"Повторить"})]}})}})},m=r=>e(c,{fixed:!0,get nav(){return r.nav},get children(){return e(h,{})}}),v=r=>{const[n,t]=i(r,["nav"]),a=d(n.nav);return e(o,l({get nav(){return n.nav},get activePanel(){return a()}},t,{get children(){return e(u,{nav:g,component:m})}}))};export{v as default};
