import{d as e,r as i,aG as a,e as s,h as r,l as t,w as o,B as p}from"./index.Cjef_Z7z.js";import{M as d}from"./index.BChJCKPw.js";import{o as l}from"./index.BecrVcGQ.js";import"./el-divider.0YXSWCLC.js";import"./el-progress.PN_p2x_b.js";import"./files.CLq6jidy.js";import"./v4.aGgpFg1T.js";const m=p("div",null,"选择图片并上传",-1),u=e({__name:"upload",setup(e){const p=i("image/gif, image/jpeg, image/png"),u=a(),n=async(e,i,a)=>{try{const a=await l({name:e,file_id:i});u.push({path:"/resource/picture/view",query:{id:a.data.id}})}catch(s){}a()};return(e,i)=>(s(),r("div",null,[t(d,{dir:"picture","file-type":p.value,onSaveResource:n},{default:o((()=>[m])),_:1},8,["file-type"])]))}});export{u as default};
