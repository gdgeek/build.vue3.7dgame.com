import{t as s,cb as a,d as e,U as l,b as o,c as n,e as t,h as c,B as i,k as r,i as p,g as u,f,w as d,l as k,a5 as m,j as g,E as y,p as b,n as v,T as C,_ as h,q as _}from"./index.Cjef_Z7z.js";const B=s({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:a},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),E={close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},S=e({name:"ElTag"});const T=_(h(e({...S,props:B,emits:E,setup(s,{emit:a}){const e=s,h=l(),_=o("tag"),B=n((()=>{const{type:s,hit:a,effect:l,closable:o,round:n}=e;return[_.b(),_.is("closable",o),_.m(s||"primary"),_.m(h.value),_.m(l),_.is("hit",a),_.is("round",n)]})),E=s=>{a("close",s)},S=s=>{a("click",s)};return(s,a)=>s.disableTransitions?(t(),c("span",{key:0,class:p(u(B)),style:v({backgroundColor:s.color}),onClick:S},[i("span",{class:p(u(_).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),f(u(y),{key:0,class:p(u(_).e("close")),onClick:g(E,["stop"])},{default:d((()=>[k(u(m))])),_:1},8,["class","onClick"])):b("v-if",!0)],6)):(t(),f(C,{key:1,name:`${u(_).namespace.value}-zoom-in-center`,appear:""},{default:d((()=>[i("span",{class:p(u(B)),style:v({backgroundColor:s.color}),onClick:S},[i("span",{class:p(u(_).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),f(u(y),{key:0,class:p(u(_).e("close")),onClick:g(E,["stop"])},{default:d((()=>[k(u(m))])),_:1},8,["class","onClick"])):b("v-if",!0)],6)])),_:3},8,["name"]))}}),[["__file","tag.vue"]]));export{T as E,B as t};
