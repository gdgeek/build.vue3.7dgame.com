import{d as e,r as t,o as a,e as s,h as n,B as i,bo as l,aF as o,aG as r,c,ab as u,Z as d,g as p,l as m,w as f,b7 as x,D as v,p as g,f as w,a1 as y,aA as h,aZ as j,a0 as b,b6 as z,b8 as _,aP as C,aQ as U,aw as F}from"./index.Cjef_Z7z.js";import{v as B}from"./el-loading.agIF5qHh.js";/* empty css                        */import{E as S,a as k}from"./el-table-column.FEOgbw0b.js";import"./el-checkbox.BNElqDuN.js";import"./el-tooltip.l0sNRNKZ.js";import"./el-popper.D6CqizVa.js";/* empty css               */import{E}from"./el-progress.PN_p2x_b.js";import{c as T,b as A,e as O,d as M,p as P}from"./index.BecrVcGQ.js";import{M as V,C as H,B as R,F as q,a as D,L as N,b as W,S as Z,c as L,P as G,W as I,O as J,D as Q,d as Y,A as K,E as X,e as $,V as ee,f as te}from"./meta-verse.Cs153j9I.js";import{p as ae}from"./files.CLq6jidy.js";/* empty css                       *//* empty css                 *//* empty css                   */import{E as se}from"./index.CGmOhrBq.js";import"./event.CIKxL71l.js";import"./index.BXnlD_Jm.js";import"./isEqual.BYfoMfE6.js";import"./_Uint8Array.ClFFuwof.js";import"./_initCloneObject.BBOceheS.js";import"./index.nlXv4Th5.js";import"./v4.aGgpFg1T.js";import"./meta.CuRRPSDl.js";import"./verse.nA12XwYw.js";import"./meta-resource.CIz2o1Ak.js";import"./index.CPFVFN5s.js";import"./aria.D6AGjDMk.js";class ne extends N{load(e,t,a,s){const n=this,i=new W(n.manager);i.setPath(n.path),i.setResponseType("arraybuffer"),i.setRequestHeader(n.requestHeader),i.load(e,(function(a){try{t(n.parse(a))}catch(i){s&&s(i),n.manager.itemError(e)}}),a,s)}parse(e){const t=new DataView(e),a=t.getUint32(0,!0),s=t.getUint32(4,!0);if(542658390!==a)return;if(150!==s)return;const n=[0,4294967295,4291624959,4288282623,4284940287,4281597951,4278255615,4294954239,4291611903,4288269567,4284927231,4281584895,4278242559,4294941183,4291598847,4288256511,4284914175,4281571839,4278229503,4294928127,4291585791,4288243455,4284901119,4281558783,4278216447,4294915071,4291572735,4288230399,4284888063,4281545727,4278203391,4294902015,4291559679,4288217343,4284875007,4281532671,4278190335,4294967244,4291624908,4288282572,4284940236,4281597900,4278255564,4294954188,4291611852,4288269516,4284927180,4281584844,4278242508,4294941132,4291598796,4288256460,4284914124,4281571788,4278229452,4294928076,4291585740,4288243404,4284901068,4281558732,4278216396,4294915020,4291572684,4288230348,4284888012,4281545676,4278203340,4294901964,4291559628,4288217292,4284874956,4281532620,4278190284,4294967193,4291624857,4288282521,4284940185,4281597849,4278255513,4294954137,4291611801,4288269465,4284927129,4281584793,4278242457,4294941081,4291598745,4288256409,4284914073,4281571737,4278229401,4294928025,4291585689,4288243353,4284901017,4281558681,4278216345,4294914969,4291572633,4288230297,4284887961,4281545625,4278203289,4294901913,4291559577,4288217241,4284874905,4281532569,4278190233,4294967142,4291624806,4288282470,4284940134,4281597798,4278255462,4294954086,4291611750,4288269414,4284927078,4281584742,4278242406,4294941030,4291598694,4288256358,4284914022,4281571686,4278229350,4294927974,4291585638,4288243302,4284900966,4281558630,4278216294,4294914918,4291572582,4288230246,4284887910,4281545574,4278203238,4294901862,4291559526,4288217190,4284874854,4281532518,4278190182,4294967091,4291624755,4288282419,4284940083,4281597747,4278255411,4294954035,4291611699,4288269363,4284927027,4281584691,4278242355,4294940979,4291598643,4288256307,4284913971,4281571635,4278229299,4294927923,4291585587,4288243251,4284900915,4281558579,4278216243,4294914867,4291572531,4288230195,4284887859,4281545523,4278203187,4294901811,4291559475,4288217139,4284874803,4281532467,4278190131,4294967040,4291624704,4288282368,4284940032,4281597696,4278255360,4294953984,4291611648,4288269312,4284926976,4281584640,4278242304,4294940928,4291598592,4288256256,4284913920,4281571584,4278229248,4294927872,4291585536,4288243200,4284900864,4281558528,4278216192,4294914816,4291572480,4288230144,4284887808,4281545472,4278203136,4294901760,4291559424,4288217088,4284874752,4281532416,4278190318,4278190301,4278190267,4278190250,4278190216,4278190199,4278190165,4278190148,4278190114,4278190097,4278251008,4278246656,4278237952,4278233600,4278224896,4278220544,4278211840,4278207488,4278198784,4278194432,4293787648,4292673536,4290445312,4289331200,4287102976,4285988864,4283760640,4282646528,4280418304,4279304192,4293848814,4292730333,4290493371,4289374890,4287137928,4286019447,4283782485,4282664004,4280427042,4279308561];let i,l=8;const o=[];for(;l<t.byteLength;){let a="";for(let e=0;e<4;e++)a+=String.fromCharCode(t.getUint8(l++));const s=t.getUint32(l,!0);if(l+=4,l+=4,"SIZE"===a){const e=t.getUint32(l,!0);l+=4;const a=t.getUint32(l,!0);l+=4;const r=t.getUint32(l,!0);l+=4,i={palette:n,size:{x:e,y:a,z:r}},o.push(i),l+=s-12}else if("XYZI"===a){const a=t.getUint32(l,!0);l+=4,i.data=new Uint8Array(e,l,4*a),l+=4*a}else if("RGBA"===a){const e=[0];for(let a=0;a<256;a++)e[a+1]=t.getUint32(l,!0),l+=4;i.palette=e}else l+=s}return o}}class ie extends V{constructor(e){const t=e.data,a=e.size,s=e.palette,n=[],i=[],l=[0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1],o=[1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0],r=[0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1],c=[0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0],u=[0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0],d=[0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1],p=new H;function m(e,t,s,l,o,r,c){t-=a.x/2,s-=a.z/2,l+=a.y/2;for(let a=0;a<18;a+=3)p.setRGB(o,r,c,Z),n.push(e[a+0]+t,e[a+1]+s,e[a+2]+l),i.push(p.r,p.g,p.b)}const f=a.x,x=a.x*a.y,v=new Uint8Array(a.x*a.y*a.z);for(let h=0;h<t.length;h+=4){v[t[h+0]+t[h+1]*f+t[h+2]*x]=255}let g=!1;for(let h=0;h<t.length;h+=4){const e=t[h+0],n=t[h+1],i=t[h+2],p=s[t[h+3]],w=(255&p)/255,y=(p>>8&255)/255,j=(p>>16&255)/255;(w>0||y>0||j>0)&&(g=!0);const b=e+n*f+i*x;0!==v[b+1]&&e!==a.x-1||m(o,e,i,-n,w,y,j),0!==v[b-1]&&0!==e||m(l,e,i,-n,w,y,j),0!==v[b+f]&&n!==a.y-1||m(c,e,i,-n,w,y,j),0!==v[b-f]&&0!==n||m(r,e,i,-n,w,y,j),0!==v[b+x]&&i!==a.z-1||m(d,e,i,-n,w,y,j),0!==v[b-x]&&0!==i||m(u,e,i,-n,w,y,j)}const w=new R;w.setAttribute("position",new q(n,3)),w.computeVertexNormals();const y=new D;g&&(w.setAttribute("color",new q(i,3)),y.vertexColors=!0),super(w,y)}}const le=e({__name:"Voxel",props:{file:{type:Object,required:!0},target:{type:Number,default:1.5}},emits:["loaded","progress"],setup(e,{expose:l,emit:o}){const r=e,c=o,u=t(null),d=new L;let p=null,m=null,f=!1;const x=(e,t)=>{const a=new ee;return a.x=parseFloat(e.x.toFixed(t)),a.y=parseFloat(e.y.toFixed(t)),a.z=parseFloat(e.z.toFixed(t)),a};l({screenshot:()=>new Promise(((e,t)=>{if(!m||!p||!d)return t("Renderer or Camera or Scene is not initialized");f=!0,m.setSize(512,512),p.aspect=1,p.updateProjectionMatrix(),m.render(d,p);m.domElement.toBlob((a=>{if(!a)return t("Failed to create blob");const s=u.value;if(!s)return t("Element #three not found");const n=s.clientWidth,i=s.clientHeight;m&&p?(m.setSize(n,i),m.render(d,p),p.aspect=n/i,p.updateProjectionMatrix(),f=!1,e(a)):(f=!1,t("Renderer or Camera is not initialized"))}),"image/jpeg")}))});return a((()=>{const e=u.value;if(e){const t=e.clientWidth,a=e.clientHeight;p=new G(75,t/a,.1,1e3),p.position.set(0,0,2),m=new I({preserveDrawingBuffer:!0,antialias:!0}),m.setViewport(0,0,t,a),m.setSize(t,a),m.setClearColor(15663103,1),e.appendChild(m.domElement);const s=new J(p,m.domElement),n=new Q(16777215,1);n.position.set(-.5,0,.7),d.add(n),d.add(new Y(16777215,3)),d.add(new K(16777215,1));(new X).listenTo(e,(()=>{if(!f&&m&&p){const t=e.clientWidth,a=e.clientHeight;m.setSize(t,a),p.aspect=t/a,p.updateProjectionMatrix()}}));const i=()=>{m&&p&&(requestAnimationFrame(i),s.update(),m.render(d,p))};i(),(()=>{if(!r.file||!r.file.url)return;const e=new ne,t=T(r.file.url);e.load(t,(e=>{const t=e[0],a=new ie(t),s=(new $).setFromObject(a),n=new ee;s.getCenter(n);const i=new ee;s.getSize(i);const l=r.target/i.x;a.position.set(-n.x*l,-n.y*l,-n.z*l),a.scale.set(l,l,l),null==d||d.add(a),c("loaded",{count:t.data.length/4,size:x(i,5),center:x(new ee(n.x,n.y,n.z),5)})}),(e=>{c("progress",parseFloat((e.loaded/e.total*100).toFixed(1)))}))})()}})),(e,t)=>(s(),n("div",null,[i("div",{ref_key:"three",ref:u,style:{height:"300px",width:"100%"}},null,512)]))}}),oe=e=>(C("data-v-45a60f1e"),e=e(),U(),e),re={class:"document-index"},ce=oe((()=>i("b",{id:"title"},"体素名称：",-1))),ue={key:0},de={class:"box-item"},pe=oe((()=>i("br",null,null,-1))),me=oe((()=>i("br",null,null,-1))),fe=oe((()=>i("b",null,"体素信息",-1))),xe={class:"box-item"},ve={style:{"margin-top":"10px","margin-bottom":"30px"}},ge=oe((()=>i("i",{class:"el-icon-edit"},null,-1))),we=oe((()=>i("i",{class:"el-icon-delete"},null,-1))),ye=oe((()=>i("br",null,null,-1))),he=F(e({__name:"view",setup(e){const C=t(!1);let U=t(null);const F=t(0),T=t(!1),V=l().store,H=o(),R=r(),q=c((()=>H.query.id)),D=c((()=>null!=U.value&&null!==U.value.info)),N=c((()=>{if(null!=U.value&&D.value){const e=JSON.parse(U.value.info);return[{item:"模型名称",text:U.value.name},{item:"创建者",text:U.value.author.nickname},{item:"创建时间",text:U.value.created_at},{item:"文件大小",text:U.value.file.size+"字节"},{item:"体素尺寸",text:A(e.size)},{item:"体素中心",text:A(e.center)},{item:"体素数量",text:e.count}]}return[]})),W=t(null),Z=c((()=>D.value?JSON.parse(U.value.info):null));c((()=>D.value?Z.value.size:"等待更新"));c((()=>D.value?Z.value.center:"等待更新"));const L=e=>{},G=async()=>{try{const{value:t}=await se.prompt("用此模型创建【宇宙】","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:U.value.name,inputErrorMessage:"请填写相应名称"});if(t){C.value=!0;try{await te("Voxel",t,U.value);h.success("你创建了新的场景: "+t),setTimeout((()=>{R.push("/meta-verse/index")}),300)}catch(e){h.error("创建失败: "+e)}finally{C.value=!1}}else h.info("取消输入")}catch{h.info("取消输入")}},I=async()=>{try{await se.confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,type:"warning"}),await M(U.value.id),h.success("删除成功!"),R.push("/resource/voxel/index")}catch{h.info("已取消删除")}},J=async()=>{try{const{value:e}=await se.prompt("请输入新名称","修改模型名称",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,inputValue:U.value.name});e?(await Q(U.value.id,e),h.success("新的模型名称: "+e)):h.info("取消输入")}catch{h.info("取消输入")}},Q=async(e,t)=>{const a={name:t};try{const t=await P(e,a);U.value.name=t.data.name}catch(s){}},Y=async(e,t,a,s,n)=>{const i={md5:e,key:e+t,filename:s.name,url:V.fileUrl(e,t,n,"screenshot/voxel")},l=await ae(i);await(async(e,t)=>{const a={image_id:e,info:JSON.stringify(t)};try{const e=await P(U.value.id,a);U.value.image_id=e.data.image_id,U.value.info=e.data.info,T.value=!1}catch(s){}})(l.data.id,a)},K=async e=>{var t;if(D.value)return void(T.value=!1);const a=await(null==(t=W.value)?void 0:t.screenshot());if(a){const t=new File([a],U.value.name,{type:"image/jpeg",lastModified:(new Date).getTime()}),s=".jpg",n=await V.fileMD5(t),i=await V.publicHandler();await V.fileHas(n,s,i,"screenshot/voxel")||await V.fileUpload(n,s,t,(()=>{}),i,"screenshot/voxel"),await Y(n,s,e,t,i)}};return a((()=>{(async()=>{T.value=!0;try{const e=await O(q.value);U.value=e.data}catch(e){}})()})),(e,t)=>{const a=E,l=j,o=u("font-awesome-icon"),r=b,c=z,h=S,T=k,A=_,O=x,M=B;return d((s(),n("div",re,[m(O,{gutter:20,style:{margin:"28px 18px 0"}},{default:f((()=>[m(c,{sm:16},{default:f((()=>[m(l,{class:"box-card"},{header:f((()=>[ce,p(U)?(s(),n("span",ue,v(p(U).name),1)):g("",!0)])),default:f((()=>[d((s(),n("div",de,[p(U)?(s(),w(le,{key:0,ref_key:"three",ref:W,file:p(U).file,onLoaded:K,onProgress:L},null,8,["file"])):g("",!0)])),[[M,!1]]),m(a,{percentage:p(F)},null,8,["percentage"])])),_:1}),pe,d((s(),w(l,{class:"box-card"},{default:f((()=>[m(r,{style:{width:"100%"},type:"primary",size:"small",onClick:G},{default:f((()=>[m(o,{icon:"plus"}),y("  用体素创建【宇宙】 ")])),_:1})])),_:1})),[[M,!1]]),me])),_:1}),m(c,{sm:8},{default:f((()=>[m(l,{class:"box-card"},{header:f((()=>[fe,y(": ")])),default:f((()=>[i("div",xe,[m(T,{data:p(N),stripe:""},{default:f((()=>[m(h,{prop:"item",label:"条目"}),m(h,{prop:"text",label:"内容"})])),_:1},8,["data"]),i("aside",ve,[m(A,{style:{float:"right"}},{default:f((()=>[m(r,{type:"success",size:"small",onClick:J},{default:f((()=>[ge,y(" 改名 ")])),_:1}),m(r,{type:"danger",size:"small",onClick:I},{default:f((()=>[we,y(" 删除 ")])),_:1})])),_:1})])])])),_:1}),ye])),_:1})])),_:1})])),[[M,p(C)]])}}}),[["__scopeId","data-v-45a60f1e"]]);export{he as default};