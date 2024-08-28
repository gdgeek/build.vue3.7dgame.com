import{d as a,r as e,aF as t,aG as i,bo as s,c as l,o as n,e as o,h as r,l as c,w as u,b7 as m,g as d,D as p,p as f,B as v,Z as g,a1 as x,aA as y,aZ as w,b6 as h,a0 as j,b8 as b,aP as _,aQ as k,aw as O}from"./index.Cjef_Z7z.js";import{v as B}from"./el-loading.agIF5qHh.js";/* empty css                        */import{E as C,a as z}from"./el-table-column.FEOgbw0b.js";import"./el-checkbox.BNElqDuN.js";import"./el-tooltip.l0sNRNKZ.js";import"./el-popper.D6CqizVa.js";/* empty css               */import{q as T,c as E,r as P,n as U,m as q}from"./index.BecrVcGQ.js";import{p as I}from"./files.CLq6jidy.js";/* empty css                       *//* empty css                 *//* empty css                   */import{E as M}from"./index.CGmOhrBq.js";import"./event.CIKxL71l.js";import"./index.BXnlD_Jm.js";import"./isEqual.BYfoMfE6.js";import"./_Uint8Array.ClFFuwof.js";import"./_initCloneObject.BBOceheS.js";import"./index.nlXv4Th5.js";import"./v4.aGgpFg1T.js";import"./index.CPFVFN5s.js";import"./aria.D6AGjDMk.js";const S=a=>(_("data-v-6f0d573c"),a=a(),k(),a),Z={class:"document-index"},$=S((()=>v("b",{id:"title"},"图片名称：",-1))),A={key:0},D={class:"box-item",style:{"text-align":"center"}},F=["src"],H=S((()=>v("br",null,null,-1))),J=S((()=>v("b",null,"图片信息",-1))),L={class:"box-item"},N={style:{"margin-top":"10px","margin-bottom":"30px"}},Q=S((()=>v("i",{class:"el-icon-edit"},null,-1))),G=S((()=>v("i",{class:"el-icon-delete"},null,-1))),K=S((()=>v("br",null,null,-1))),R=O(a({__name:"view",setup(a){const _=e(null),k=t(),O=i(),S=s().store,R=e(null),V=e(null),W=e(!1),Y=l((()=>k.query.id)),X=l((()=>null!==R.value&&null!==R.value.info)),aa=l((()=>R.value&&X.value?[{item:"图片名称",text:R.value.name},{item:"创建者",text:R.value.author.nickname},{item:"创建时间",text:R.value.created_at},{item:"图片尺寸",text:T(JSON.parse(R.value.info).size)},{item:"文件大小",text:`${R.value.file.size}字节`}]:[])),ea=l((()=>E(V.value)));n((async()=>{try{W.value=!0;const a=await P(Y.value);R.value=a.data,V.value=a.data.file.url}catch(a){alert(a)}}));const ta=async(a,e)=>{const t=JSON.stringify({size:a});if(a.x<=1024){const a={image_id:R.value.file.id,info:t},e=await q(R.value.id,a);return R.value.image_id=e.data.image_id,R.value.info=e.data.info,void(W.value=!1)}const i=await((a,e,t)=>new Promise((i=>{const s="image/jpeg",l=document.createElement("canvas");l.width=e,l.height=t;const n=l.getContext("2d");n&&(n.drawImage(a,0,0,e,t),l.toBlob((a=>{if(a){const e=new File([a],"thumbnail.jpg",{type:s});i(e)}}),s))})))(e,512,a.y*(512/a.x)),s=await S.fileMD5(i),l=await S.publicHandler();await S.fileHas(s,i.type.split("/").pop(),l,"screenshot/picture")||await S.fileUpload(s,i.type.split("/").pop(),i,(()=>{}),l,"screenshot/picture"),await(async(a,e,t,i,s)=>{const l={md5:a,key:`${a}${e}`,filename:i.name,url:S.fileUrl(a,e,s,"screenshot/picture")};try{const a={image_id:(await I(l)).data.id,info:t},e=await q(R.value.id,a);R.value.image_id=e.data.image_id,R.value.info=e.data.info,W.value=!1}catch(n){}})(s,i.type.split("/").pop(),t,i,l)},ia=async()=>{if(X.value)W.value=!1;else if(_.value&&(_.value,_.value.crossOrigin="anonymous",_.value.complete)){const e=await(a=_.value,new Promise((e=>{const t=new Image;t.src=a.src,t.onload=()=>e({x:t.width,y:t.height}),t.complete&&e({x:t.width,y:t.height})})));await ta(e,_.value)}var a},sa=async()=>{try{await M.confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,type:"warning"}),await U(R.value.id),y.success("删除成功!"),O.push("/resource/picture/index")}catch{y.info("已取消删除")}},la=async()=>{try{const{value:a}=await M.prompt("请输入新名称","修改图片名称",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,inputValue:R.value.name});a?(await na(R.value.id,a),y.success("新的图片名称: "+a)):y.info("取消输入")}catch{y.info("取消输入")}},na=async(a,e)=>{const t={name:e};try{const e=await q(a,t);R.value.name=e.data.name}catch(i){}};return(a,e)=>{const t=w,i=h,s=C,l=z,n=j,y=b,k=m,O=B;return o(),r("div",Z,[c(k,{gutter:20,style:{margin:"28px 18px 0"}},{default:u((()=>[c(i,{sm:16},{default:u((()=>[c(t,{class:"box-card"},{header:u((()=>[$,d(R)?(o(),r("span",A,p(d(R).name),1)):f("",!0)])),default:u((()=>[v("div",D,[g(v("img",{id:"image",ref_key:"image",ref:_,"element-loading-text":"正在预处理","element-loading-background":"rgba(255,255, 255, 0.3)",style:{height:"300px",width:"100%"},src:d(ea),fit:"contain",onLoad:ia},null,40,F),[[O,d(W)]])])])),_:1}),H])),_:1}),c(i,{sm:8},{default:u((()=>[c(t,{class:"box-card"},{header:u((()=>[J,x(" : ")])),default:u((()=>[v("div",L,[c(l,{data:d(aa),stripe:""},{default:u((()=>[c(s,{prop:"item",label:"条目"}),c(s,{prop:"text",label:"内容"})])),_:1},8,["data"]),v("aside",N,[c(y,{style:{float:"right"}},{default:u((()=>[c(n,{type:"success",size:"small",onClick:la},{default:u((()=>[Q,x(" 改名 ")])),_:1}),c(n,{type:"danger",size:"small",onClick:sa},{default:u((()=>[G,x(" 删除 ")])),_:1})])),_:1})])])])),_:1}),K])),_:1})])),_:1})])}}}),[["__scopeId","data-v-6f0d573c"]]);export{R as default};
