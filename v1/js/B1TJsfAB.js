import{c as e,T as r,P as t,o as n,a,s,b as i,m as c,d as o,p as d}from"./9_h6YRwQ.js";import{V as l}from"./DePVKU3M.js";import{B as m}from"./DYe5q-LP.js";import{B as u}from"./CBg97H9b.js";const g=()=>{const a=()=>{n()};return e(t,{mode:"lower",get title(){return e(r,{color:"primary",weight:"black",size:"medium",children:"Что-то пошло не так"})},get description(){return e(r,{color:"secondary",weight:"regular",size:"small",align:"center",children:"Приложение не может связаться с сервером. Попробуйте еще раз немного позже."})},get children(){return e(u,{streched:!0,padding:!1,get children(){return[e(m,{onClick:a,mode:"outline",streched:!0,children:"Закрыть"}),e(m,{type:"accent",streched:!0,children:"Повторить"})]}})}})},h=r=>e(a,{fixed:!0,get nav(){return r.nav},get children(){return e(g,{})}}),p=r=>{const[t,n]=s(r,["nav"]),a=i(t.nav);return e(l,c({get nav(){return t.nav},get activePanel(){return a()}},n,{get children(){return e(o,{nav:d,component:h})}}))};export{p as default};
