import{h as e,P as r,ah as t,w as n,d as a,x as i,m as s,ai as c}from"./index-DYbyrIsq.js";import{T as o,P as d,V as l}from"./index-BQ3liw9k.js";import{a as u,B as h}from"./ButtonGroup-Bdm-IOFG.js";const g=()=>{const n=()=>{t()};return e(r,{mode:"lower",get title(){return e(o,{color:"primary",weight:"black",size:"medium",children:"Что-то пошло не так"})},get description(){return e(o,{color:"secondary",weight:"regular",size:"small",align:"center",children:"Приложение не может связаться с сервером. Попробуйте еще раз немного позже."})},get children(){return e(u,{streched:!0,padding:!1,get children(){return[e(h,{onClick:n,mode:"outline",streched:!0,children:"Закрыть"}),e(h,{type:"accent",streched:!0,children:"Повторить"})]}})}})},m=r=>e(n,{fixed:!0,get nav(){return r.nav},get children(){return e(g,{})}}),p=r=>{const[t,n]=a(r,["nav"]),o=i(t.nav);return e(l,s({get nav(){return t.nav},get activePanel(){return o()}},n,{get children(){return e(d,{nav:c,component:m})}}))};export{p as default};
