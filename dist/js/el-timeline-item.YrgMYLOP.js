import{d as e,b as s,y as t,al as a,k as i,t as l,v as o,c as n,e as m,h as c,B as p,i as r,g as d,n as u,f as v,w as f,C as y,E as g,p as b,D as h,_ as k,q as w,G as T}from"./index.Cjef_Z7z.js";const S=e({name:"ElTimeline",setup(e,{slots:l}){const o=s("timeline");return t("timeline",l),()=>a("ul",{class:[o.b()]},[i(l,"default")])}}),B=l({timestamp:{type:String,default:""},hideTimestamp:Boolean,center:Boolean,placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:o},hollow:Boolean}),E=e({name:"ElTimelineItem"});var $=k(e({...E,props:B,setup(e){const t=e,a=s("timeline-item"),l=n((()=>[a.e("node"),a.em("node",t.size||""),a.em("node",t.type||""),a.is("hollow",t.hollow)]));return(e,s)=>(m(),c("li",{class:r([d(a).b(),{[d(a).e("center")]:e.center}])},[p("div",{class:r(d(a).e("tail"))},null,2),e.$slots.dot?b("v-if",!0):(m(),c("div",{key:0,class:r(d(l)),style:u({backgroundColor:e.color})},[e.icon?(m(),v(d(g),{key:0,class:r(d(a).e("icon"))},{default:f((()=>[(m(),v(y(e.icon)))])),_:1},8,["class"])):b("v-if",!0)],6)),e.$slots.dot?(m(),c("div",{key:1,class:r(d(a).e("dot"))},[i(e.$slots,"dot")],2)):b("v-if",!0),p("div",{class:r(d(a).e("wrapper"))},[e.hideTimestamp||"top"!==e.placement?b("v-if",!0):(m(),c("div",{key:0,class:r([d(a).e("timestamp"),d(a).is("top")])},h(e.timestamp),3)),p("div",{class:r(d(a).e("content"))},[i(e.$slots,"default")],2),e.hideTimestamp||"bottom"!==e.placement?b("v-if",!0):(m(),c("div",{key:1,class:r([d(a).e("timestamp"),d(a).is("bottom")])},h(e.timestamp),3))],2)],2))}}),[["__file","timeline-item.vue"]]);const _=w(S,{TimelineItem:$}),x=T($);export{x as E,_ as a};
