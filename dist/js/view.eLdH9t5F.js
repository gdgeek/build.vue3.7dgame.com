import{d as a,aF as e,aG as t,bo as i,r as s,c as l,o,e as n,h as u,l as r,w as c,b7 as d,g as m,D as p,p as y,B as v,i as f,a1 as x,aA as g,aZ as b,b6 as j,a0 as h,b8 as w,aP as _,aQ as B,aw as k}from"./index.Cjef_Z7z.js";/* empty css                        */import{E as C,a as E}from"./el-table-column.FEOgbw0b.js";import"./el-checkbox.BNElqDuN.js";import"./el-tooltip.l0sNRNKZ.js";import"./el-popper.D6CqizVa.js";/* empty css               */import{B as z,z as I,y as P}from"./index.BecrVcGQ.js";import{p as T}from"./files.CLq6jidy.js";/* empty css                       *//* empty css                 *//* empty css                   */import{E as O}from"./index.CGmOhrBq.js";import"./event.CIKxL71l.js";import"./index.BXnlD_Jm.js";import"./isEqual.BYfoMfE6.js";import"./_Uint8Array.ClFFuwof.js";import"./_initCloneObject.BBOceheS.js";import"./index.nlXv4Th5.js";import"./v4.aGgpFg1T.js";import"./index.CPFVFN5s.js";import"./aria.D6AGjDMk.js";const U=a=>(_("data-v-001e611a"),a=a(),B(),a),$={class:"document-index"},q=U((()=>v("b",{id:"title"},"音频名称：",-1))),A={key:0},D={class:"box-item",style:{"text-align":"center"}},F={class:"audio-bgc"},H=U((()=>v("br",null,null,-1))),M={class:"audio-box"},Q=["src"],S=U((()=>v("br",null,null,-1))),Z=U((()=>v("b",null,"音频信息",-1))),G={class:"box-item"},J={style:{"margin-top":"10px","margin-bottom":"30px"}},K=U((()=>v("i",{class:"el-icon-edit"},null,-1))),L=U((()=>v("i",{class:"el-icon-delete"},null,-1))),N=U((()=>v("br",null,null,-1))),R=k(a({__name:"view",setup(a){const _=e(),B=t(),k=i().store,U=s(null),R=s(),V=s(!0),W=s(!1),Y=l((()=>U.value?[{item:"音频名称",text:U.value.name},{item:"创建者",text:U.value.author.nickname},{item:"创建时间",text:U.value.created_at},{item:"文件大小",text:`${U.value.file.size}字节`}]:[])),X=l((()=>_.query.id)),aa=l((()=>null!==U.value&&null!==U.value.info));o((async()=>{const a=await z(X.value);U.value=a.data,R.value=a.data.file.url}));const ea=()=>{const a=document.getElementById("audio");W.value?a.pause():a.play(),W.value=!W.value},ta=()=>{W.value=!0},ia=()=>{W.value=!1},sa=()=>{W.value=!1},la=()=>{if(aa.value)V.value=!1;else{const a=document.getElementById("audio");oa(a,{x:800,y:800})}},oa=async(a,e)=>{if(0!==e.x){const a=JSON.stringify({size:e}),t=await(async(a,e,t)=>new Promise(((a,i)=>{const s="image/jpeg",l=document.createElement("canvas"),o=document.getElementById("imgs");l.width=e,l.height=t;const n=l.getContext("2d");n&&(n.drawImage(o,0,0,e,t),l.toBlob((e=>{if(e){const t=new File([e],"thumbnail.jpg",{type:s});a(t)}}),s))})))(0,.5*e.x,.5*e.y),i=await k.fileMD5(t),s=await k.publicHandler();await k.fileHas(i,t.type.split("/").pop(),s,"screenshot/audio")||await k.fileUpload(i,t.type.split("/").pop(),t,(()=>{}),s,"screenshot/audio"),await(async(a,e,t,i,s)=>{const l={md5:a,key:`${a}${e}`,filename:i.name,url:k.fileUrl(a,e,s,"screenshot/audio")};try{const a={image_id:(await T(l)).data.id,info:t},e=await P(U.value.id,a);U.value.image_id=e.data.image_id,U.value.info=e.data.info,V.value=!1}catch(o){}})(i,t.type.split("/").pop(),a,t,s)}},na=async()=>{try{await O.confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await I(U.value.id),g.success("删除成功!"),B.push({path:"/resource/audio/index"})}catch{g.info("已取消删除")}},ua=async()=>{try{const{value:a}=await O.prompt("请输入新名称","修改图片名称",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,inputValue:U.value.name});a?(await ra(U.value.id,a),g.success("新的图片名称: "+a)):g.info("取消输入")}catch{g.info("取消输入")}},ra=async(a,e)=>{try{const t=await P(a,{name:e});U.value.name=t.data.name}catch(t){}};return(a,e)=>{const t=b,i=j,s=C,l=E,o=h,g=w,_=d;return n(),u("div",$,[r(_,{gutter:20,style:{margin:"28px 18px 0"}},{default:c((()=>[r(i,{sm:16},{default:c((()=>[r(t,{class:"box-card"},{header:c((()=>[q,m(U)?(n(),u("span",A,p(m(U).name),1)):y("",!0)])),default:c((()=>[v("img",{id:"imgs",src:"/media/bg/audio-cover.jpg",style:{display:"none"}}),v("div",D,[v("section",F,[H,v("div",M,[v("div",{class:f(["audio-record",{"audio-record-playfast":m(W)}]),onClick:ea},null,2),v("div",{class:f(["audio-record-image",{"audio-record-play":m(W)}]),onClick:ea},null,2)]),v("audio",{id:"audio",controls:"",style:{width:"95%",height:"84px"},src:m(R),preload:"auto",onPlay:ta,onPause:ia,onEnded:sa,onCanplaythrough:la},null,40,Q)])])])),_:1}),S])),_:1}),r(i,{sm:8},{default:c((()=>[r(t,{class:"box-card"},{header:c((()=>[Z,x(": ")])),default:c((()=>[v("div",G,[r(l,{data:m(Y),stripe:""},{default:c((()=>[r(s,{prop:"item",label:"条目"}),r(s,{prop:"text",label:"内容"})])),_:1},8,["data"]),v("aside",J,[r(g,{style:{float:"right"}},{default:c((()=>[r(o,{type:"primary",size:"small",onClick:ua},{default:c((()=>[K,x(" 改名 ")])),_:1}),r(o,{type:"primary",size:"small",onClick:na},{default:c((()=>[L,x(" 删除 ")])),_:1})])),_:1})])])])),_:1}),N])),_:1})])),_:1})])}}}),[["__scopeId","data-v-001e611a"]]);export{R as default};
