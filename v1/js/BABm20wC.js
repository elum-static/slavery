import{c as e,T as r,i as t,j as n,P as a,s,d as i,e as c,V as o,f as d,k as l}from"./4dRdjWN8.js";import{B as u}from"./CLo973_Q.js";import{B as g}from"./DOgl3RFL.js";const h=()=>{const a=()=>{n()};return e(t,{mode:"lower",get title(){return e(r,{color:"primary",weight:"black",size:"medium",children:"Что-то пошло не так"})},get description(){return e(r,{color:"secondary",weight:"regular",size:"small",align:"center",children:"Приложение не может связаться с сервером. Попробуйте еще раз немного позже."})},get children(){return e(g,{streched:!0,padding:!1,get children(){return[e(u,{onClick:a,mode:"outline",streched:!0,children:"Закрыть"}),e(u,{type:"accent",streched:!0,children:"Повторить"})]}})}})},m=r=>e(a,{fixed:!0,get nav(){return r.nav},get children(){return e(h,{})}}),p=r=>{const[t,n]=s(r,["nav"]),a=i(t.nav);return e(o,c({get nav(){return t.nav},get activePanel(){return a()}},n,{get children(){return e(d,{nav:l,component:m})}}))};export{p as default};
