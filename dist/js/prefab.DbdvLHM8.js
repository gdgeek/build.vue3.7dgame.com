import{b5 as t,aX as e,bX as a}from"./index.Cjef_Z7z.js";const r=a=>t({url:e.join("v1","prefabs",a.toString()),method:"delete"}),o=a=>t({url:e.join("v1","prefabs"),method:"post",data:a}),s=(r,o="")=>t({url:e.join("v1","prefabs",r.toString()+a.stringify({expand:o},!0)),method:"get"}),i=(r="-created_at",o="",s=0,i="image,author")=>{const n=[];return"name"===r?r="title":"-name"===r&&(r="-title"),n.expand=i,n.sort=r,""!==o&&(n["MetaSearch[title]"]=o),s>1&&(n.page=s),t({url:e.join("v1","prefabs"+a.stringify(n,!0)),method:"get"})},n=(a,r)=>t({url:e.join("v1","prefabs",a.toString()),method:"put",data:r});export{s as a,n as b,r as d,i as g,o as p};