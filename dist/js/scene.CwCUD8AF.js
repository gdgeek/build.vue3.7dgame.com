import{d as e,r as a,e as t,h as l,l as s,w as i,a1 as n,g as r,aR as o,aA as u,o as d,c,f as m,D as p,p as v,Q as g,B as f,aZ as h,a0 as _,b6 as w,b8 as y,b7 as b,aF as k,aG as x,a8 as j,bq as V,bs as C,aw as z}from"./index.Cjef_Z7z.js";import{E as S}from"./el-dialog.CzWkQxIR.js";/* empty css                   *//* empty css                        */import{E as P}from"./el-pagination.IwLhpCYo.js";/* empty css               */import"./el-select.BFERwip5.js";import"./el-popper.D6CqizVa.js";import{E as D}from"./el-skeleton-item.DaivCS9D.js";import{E}from"./el-divider.0YXSWCLC.js";import{M as O,L as M,W as q}from"./index.Dne7kV11.js";import{E as N}from"./el-form.D3OlyBar.js";import{g as R,a as U}from"./prefab.DbdvLHM8.js";/* empty css                       *//* empty css                 */import{E as B}from"./index.CGmOhrBq.js";import{E as J}from"./index.uO1bW3rE.js";import{g as T,p as A}from"./meta.CuRRPSDl.js";import{v as L}from"./v4.aGgpFg1T.js";import{b as W,a as I}from"./verse.nA12XwYw.js";import"./index.CPFVFN5s.js";import"./event.CIKxL71l.js";import"./index.nlXv4Th5.js";import"./use-dialog.DS-_ayZC.js";import"./isEqual.BYfoMfE6.js";import"./_Uint8Array.ClFFuwof.js";import"./index.BXnlD_Jm.js";import"./strings.C83A8Pxk.js";import"./castArray.rYmLHGWs.js";import"./_initCloneObject.BBOceheS.js";import"./aria.D6AGjDMk.js";const K=e({__name:"KnightDataDialog",setup(e,{expose:d}){const c=a({}),m=a({}),p=a(!1);let v=null;const g=async()=>{v&&v(c.value),p.value=!1},f=()=>{p.value=!1,u.warning("点击了取消")},h=({oldValue:e,newValue:a})=>{},_=()=>{p.value=!1};return d({open:({schema:e,callback:a,data:t})=>{m.value=e,v=a,c.value=t,p.value=!0}}),(e,a)=>{const u=N,d=S;return t(),l("div",null,[s(d,{modelValue:r(p),"onUpdate:modelValue":a[1]||(a[1]=e=>o(p)?p.value=e:null),width:"95%","show-close":!1,onClose:_},{title:i((()=>[n(" 输入数据 ")])),footer:i((()=>[s(u,{modelValue:r(c),"onUpdate:modelValue":a[0]||(a[0]=e=>o(c)?c.value=e:null),schema:r(m),onOnSubmit:g,onOnCancel:f,onOnChange:h},null,8,["modelValue","schema"])])),_:1},8,["modelValue"])])}}}),Q=f("b",null,"选择预设数据",-1),Z={class:"card-title",nowrap:""},F={style:{width:"100%","text-align":"center"}},G={class:"clearfix"},X=f("div",{class:"bottom clearfix"},null,-1),Y=f("br",null,null,-1),H=e({__name:"PrefabDialog",emits:["selected","cancel"],setup(e,{expose:k,emit:x}){const j=x,V=a(!1),C=a({items:[],sorted:"-created_at",searched:"",pagination:{current:1,count:1,size:20,total:20}}),z=a();let N=a(-1),U=a(null);const T=e=>e.title||e.name||"title",A=async()=>{const e=await R(C.value.sorted,C.value.searched,C.value.pagination.current,"image");C.value.items=e.data},L=async(e=null)=>{if(e){const a=await W("请输入Model名称");e.title=a,j("selected",e)}else j("selected",null);V.value=!1},W=e=>new Promise(((a,t)=>{B.prompt(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((({value:e})=>a(e))).catch((()=>{t(),u({type:"info",message:"取消输入"})}))})),I=()=>{j("cancel")},H=async e=>{C.value.pagination.current=e,await A()},$=async e=>{C.value.searched=e,await A()},ee=async e=>{C.value.sorted=e,await A()},ae=async()=>{C.value.searched="",await A()},te=e=>{};d((()=>{A()})),k({open:async(e,a)=>{C.value.items=[],C.value.sorted="-created_at",C.value.searched="",C.value.pagination={current:1,count:1,size:20,total:20},N.value=a,U.value=e,await A(),V.value=!0}});const le=c((()=>C.value.items.map((e=>({src:e.image.url,id:e.id?e.id.toString():void 0,name:e.title,data:e.data,info:e.info,uuid:e.uuid,image_id:e.image_id,image:e.image,created_at:e.created_at,resources:e.resources}))))),se=a({3e3:{rowPerView:8},1800:{rowPerView:6},1200:{rowPerView:4},500:{rowPerView:2}});return(e,a)=>{const u=J,d=E,c=h,k=_,x=D,j=P,N=w,R=y,U=b,B=S;return t(),l("div",null,[s(K,{ref_key:"knightData",ref:z,onSubmit:te},null,512),s(B,{modelValue:r(V),"onUpdate:modelValue":a[1]||(a[1]=e=>o(V)?V.value=e:null),width:"95%","show-close":!1,onClose:I},{title:i((()=>[s(O,{sorted:r(C).sorted,searched:r(C).searched,onSearch:$,onSort:ee},{default:i((()=>[s(u,null,{default:i((()=>[Q])),_:1})])),_:1},8,["sorted","searched"]),s(d,{"content-position":"left"},{default:i((()=>[""!==r(C).searched?(t(),m(u,{key:0,size:"small",closable:"",onClose:ae},{default:i((()=>[n(p(r(C).searched),1)])),_:1})):v("",!0)])),_:1})])),footer:i((()=>[s(U,{gutter:0},{default:i((()=>[s(N,{xs:16,sm:16,md:16,lg:16,xl:16},{default:i((()=>[s(j,{"current-page":r(C).pagination.current,"page-count":r(C).pagination.count,"page-size":r(C).pagination.size,total:r(C).pagination.total,layout:"prev, pager, next, jumper",background:"",onCurrentChange:H},null,8,["current-page","page-count","page-size","total"])])),_:1}),s(N,{xs:8,sm:8,md:8,lg:8,xl:8},{default:i((()=>[s(R,null,{default:i((()=>[s(k,{size:"small",onClick:a[0]||(a[0]=e=>V.value=!1)},{default:i((()=>[n("取消")])),_:1})])),_:1})])),_:1})])),_:1})])),default:i((()=>[r(C)&&r(C).items?(t(),l(g,{key:0},[null!==r(C)&&null!==r(C).items?(t(),m(r(q),{key:0,lazyload:!1,breakpoints:r(se),gutter:8,list:r(le),"column-count":3},{item:i((({item:e})=>[s(c,{style:{width:"220px"},class:"box-card"},{header:i((()=>[s(c,{shadow:"hover","body-style":{padding:"0px"}},{header:i((()=>[f("b",Z,p(T(e)),1)])),default:i((()=>[e.image?(t(),m(r(M),{key:0,style:{width:"100%",height:"180px"},fit:"contain",url:e.image.url},null,8,["url"])):v("",!0),f("div",F,p(e.created_at),1)])),_:2},1024)])),default:i((()=>[f("div",G,[s(k,{size:"small",onClick:a=>(({data:e})=>{L({data:e,setup:{}}),V.value=!1})({data:e})},{default:i((()=>[n("选择")])),_:2},1032,["onClick"])]),X])),_:2},1024),Y])),_:1},8,["breakpoints","list"])):v("",!0)],64)):(t(),m(x,{key:1}))])),_:1},8,["modelValue"])])}}}),$=f("b",null,"选择元数据",-1),ee={class:"card-title",nowrap:""},ae={style:{width:"100%","text-align":"center"}},te={class:"clearfix"},le=f("br",null,null,-1),se=e({__name:"MetaDialog",emits:["selected","cancel"],setup(e,{expose:d,emit:g}){const k=g,x=a(-1),j=a(null),V=a(!1),C=a({items:[],sorted:"-created_at",searched:"",pagination:{current:1,count:1,size:20,total:20}}),z=e=>e.title||e.name||"title",N=async()=>{const e=await T(C.value.sorted,C.value.searched,C.value.pagination.current,"image,verseMetas");C.value.items=e.data},R=e=>{C.value.sorted=e,N()},U=e=>{C.value.searched=e,N()},W=()=>{C.value.searched="",N()},I=async e=>{if(e){const a=await K("请输入Model名称");e.title=a,k("selected",e)}else k("selected",null);V.value=!1},K=e=>new Promise(((a,t)=>{B.prompt(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((({value:e})=>{a(e)})).catch((()=>{t(),u({type:"info",message:"取消输入"})}))})),Q=async()=>{const e=await K("请输入元数据名称"),a=await A({title:e||"新建元数据",custom:1,uuid:L()});I({data:a.data})},Z=()=>{k("cancel")},F=e=>{C.value.pagination.current=e,N()};d({open:async(e,a)=>{try{C.value={items:[],sorted:"-created_at",searched:"",pagination:{current:1,count:1,size:20,total:20}},x.value=a,j.value=e,await N(),V.value=!0}catch(t){}}});const G=c((()=>C.value.items.map((e=>{var a;return{src:null==(a=e.image)?void 0:a.url,id:e.id?e.id.toString():void 0,author_id:e.author_id,name:e.title,info:e.info,data:e.data,events:e.events,title:e.title,uuid:e.uuid,prefab:e.prefab,image_id:e.image_id,image:e.image,resources:e.resources,editable:e.editable,viewable:e.viewable,verseMetas:e.verseMetas}})))),X=a({3e3:{rowPerView:8},1800:{rowPerView:6},1200:{rowPerView:4},500:{rowPerView:2}});return(e,a)=>{const u=J,d=E,c=h,g=_,k=D,x=P,j=w,N=y,B=b,T=S;return t(),l("div",null,[s(T,{modelValue:r(V),"onUpdate:modelValue":a[1]||(a[1]=e=>o(V)?V.value=e:null),width:"95%","show-close":!1,onClose:Z},{title:i((()=>[s(O,{sorted:r(C).sorted,searched:r(C).searched,onSearch:U,onSort:R},{default:i((()=>[s(u,null,{default:i((()=>[$])),_:1})])),_:1},8,["sorted","searched"]),s(d,{"content-position":"left"},{default:i((()=>[""!==r(C).searched?(t(),m(u,{key:0,size:"small",closable:"",onClose:W},{default:i((()=>[n(p(r(C).searched),1)])),_:1})):v("",!0)])),_:1})])),footer:i((()=>[s(B,{gutter:0},{default:i((()=>[s(j,{xs:16,sm:16,md:16,lg:16,xl:16},{default:i((()=>[s(x,{"current-page":r(C).pagination.current,"page-count":r(C).pagination.count,"page-size":r(C).pagination.size,total:r(C).pagination.total,layout:"prev, pager, next, jumper",background:"",onCurrentChange:F},null,8,["current-page","page-count","page-size","total"])])),_:1}),s(j,{xs:8,sm:8,md:8,lg:8,xl:8},{default:i((()=>[s(N,null,{default:i((()=>[s(g,{type:"success",size:"small",onClick:Q},{default:i((()=>[n(" 新 建 ")])),_:1}),s(g,{size:"small",onClick:a[0]||(a[0]=e=>V.value=!1)},{default:i((()=>[n(" 取 消 ")])),_:1})])),_:1})])),_:1})])),_:1})])),default:i((()=>[null!==r(C)&&null!==r(C).items?(t(),m(r(q),{key:0,lazyload:!0,breakpoints:r(X),gutter:8,list:r(G),"column-count":3},{item:i((({item:e})=>[s(c,{style:{width:"220px"},class:"box-card"},{header:i((()=>[s(c,{shadow:"hover","body-style":{padding:"0px"}},{header:i((()=>[f("b",ee,p(z(e)),1)])),default:i((()=>[e.image?(t(),m(r(M),{key:0,style:{width:"100%",height:"180px"},fit:"contain",url:e.image.url},null,8,["url"])):v("",!0),f("div",ae,p(e.created_at),1)])),_:2},1024)])),default:i((()=>[f("div",te,[s(g,{size:"small",onClick:a=>I({data:e})},{default:i((()=>[n("选择")])),_:2},1032,["onClick"])])])),_:2},1024),le])),_:1},8,["breakpoints","list"])):(t(),m(k,{key:1}))])),_:1},8,["modelValue"])])}}}),ie={class:"verse-scene"},ne=z(e({__name:"scene",setup(e){const n=k(),r=x(),o=a(),m=a(),p=a();let v=!1;const g=a(),h=c((()=>{var e;return null==(e=n.query.title)?void 0:e.slice(2)})),_=c((()=>parseInt(n.query.id))),w=a(),y=()=>{},b=(e,a)=>{w.value&&w.value.contentWindow?w.value.contentWindow.postMessage({from:"scene.verse.web",action:e,data:JSON.parse(JSON.stringify(a))},"*"):u({message:"没有编辑器",type:"error"})},z=async({data:e,setup:a,title:t})=>{b("add-module",{data:e,setup:a,title:t})},S=async e=>{if(!e.data||!e.data.action)return;const a=e.data.action,t=e.data.data;switch(a){case"edit-meta":r.push({path:"/meta/scene",query:{id:t.meta_id}});break;case"setup-prefab":(async({meta_id:e,data:a,uuid:t})=>{var l;const s=await U(e);null==(l=o.value)||l.open({schema:JSON.parse(s.data.data),data:JSON.parse(a),callback:e=>{b("setup-module",{uuid:t,setup:e})}})})(t);break;case"add-meta":null==(l=p.value)||l.open(_.value),u({type:"info",message:"添加模块"});break;case"add-prefab":(()=>{var e;null==(e=m.value)||e.open(_.value),u({type:"info",message:"添加预设"})})();break;case"save-verse":(async e=>{if(!e.verse)return;const a=e.verse;g.value?(await I(_.value,{data:JSON.stringify(a)}),u({type:"success",message:"场景保存成功!!!"})):u({type:"info",message:"没有保存权限!"})})(t);break;case"goto":if("blockly.js"===t.target){const e=r.getRoutes().find((e=>"/verse/script"===e.path));if(e&&e.meta.title){const a=e.meta.title;r.push({path:"/verse/script",query:{id:_.value,title:a+h.value}})}}break;case"ready":if(!v){v=!0;const e=(await W(_.value,"metas, resources")).data;g.value=!!e&&e.editable,b("load",{id:_.value,data:e,saveable:g.value})}}var l};return d((()=>{window.addEventListener("message",S)})),j((()=>{window.removeEventListener("message",S)})),(e,a)=>{const n=C,r=V;return t(),l("div",ie,[s(K,{ref_key:"knightDataRef",ref:o},null,512),s(se,{onSelected:z,onCancel:y,ref_key:"metaDialogRef",ref:p},null,512),s(H,{onSelected:z,onCancel:y,ref_key:"prefabDialogRef",ref:m},null,512),s(r,null,{default:i((()=>[s(n,null,{default:i((()=>[f("iframe",{id:"editor",ref_key:"editor",ref:w,src:"https://editor.4mr.cn/three.js/editor/verse-editor.html",class:"content",height:"100%",width:"100%"},null,512)])),_:1})])),_:1})])}}}),[["__scopeId","data-v-50cfea64"]]);export{ne as default};