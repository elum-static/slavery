import{h as e,P as r,a8 as t,w as n,d as a,x as i,m as s,a9 as o}from"./index-BWti72W9.js";import{T as c,P as d,V as l}from"./index-DGIp7ivs.js";import{B as u}from"./Button-Qh3pTLm4.js";import{B as m}from"./ButtonGroup-BwUMPwtG.js";const g=()=>{const n=()=>{t()};return e(r,{mode:"lower",get title(){return e(c,{color:"primary",weight:"black",size:"medium",children:"Что-то пошло не так"})},get description(){return e(c,{color:"secondary",weight:"regular",size:"small",align:"center",children:"Приложение не может связаться с сервером. Попробуйте еще раз немного позже."})},get children(){return e(m,{streched:!0,padding:!1,get children(){return[e(u,{onClick:n,mode:"outline",streched:!0,children:"Закрыть"}),e(u,{type:"accent",streched:!0,children:"Повторить"})]}})}})},h=r=>e(n,{fixed:!0,get nav(){return r.nav},get children(){return e(g,{})}}),p=r=>{const[t,n]=a(r,["nav"]),c=i(t.nav);return e(l,s({get nav(){return t.nav},get activePanel(){return c()}},n,{get children(){return e(d,{nav:o,component:h})}}))};export{p as default};
