import{aX as e,b5 as a,d as t,r as s,aF as i,c as r,a8 as l,o as u,aA as n,ab as o,e as d,h as c,l as p,w as v,bq as f,g,a1 as m,D as y,f as h,p as w,B as b,a0 as _,b8 as k,bs as j,aZ as x}from"./index.Cjef_Z7z.js";/* empty css                        */import{b as S,c as J}from"./verse.nA12XwYw.js";import"./v4.aGgpFg1T.js";const N={class:"script"},O={key:0,class:"clearfix"},E=["src"],C=t({__name:"script",setup(t){const C=s(!1),$=s(),q=s(),A=i(),L=r((()=>parseInt(A.query.id)));let M=!1;const W=r((()=>null!==$.value&&q.value.editable));let z=new Map;const B=async t=>{if(null!==q.value)if(q.value.editable){if($.value=q.value.script,await J(q.value.id,{blockly:t.data,lua:t.script}),$.value){const s=await((t,s)=>{const i=e.join("v1","verse-scripts",t.toString());return a({url:i,method:"put",data:s})})($.value.id,{workspace:JSON.stringify(t.data),script:t.script});q.value.script=s.data}else{const s=await(t=>{const s=e.join("v1","verse-scripts");return a({url:s,method:"post",data:t})})({verse_id:q.value.id,workspace:JSON.stringify(t.data),script:t.script});q.value.script=s.data}n({message:"保存成功",type:"success"})}else n({message:"没有编辑权限",type:"error"});else n({message:"没有信息",type:"error"})},D=async e=>{if(!e.data.action)return;const a=e.data;"ready"===a.action?(M=!0,X()):"post"===a.action?await B(a.data):"post:no-change"===a.action&&n({message:"没有修改",type:"info"})},F=()=>{K("save",{language:"lua",data:{}})},I=s(null),K=(e,a={})=>{I.value&&I.value.contentWindow?I.value.contentWindow.postMessage({from:"script.verse.web",action:e,data:JSON.parse(JSON.stringify(a))},"*"):n({type:"error"})},X=()=>{var e;if(!q.value)return;if(!M)return;const a=(null==(e=q.value.verseCode)?void 0:e.blockly)?JSON.parse(q.value.verseCode.blockly):{};K("init",{language:["lua","js"],style:["base","verse"],data:a,parameters:{index:q.value.id,resource:Z.value}})},Z=r((()=>{const e=[],a=[];return q.value.metas.forEach((t=>{let s=JSON.parse(t.events||"{}");s.inputs=s.inputs||[],s.outputs=s.outputs||[],s.inputs.forEach((a=>{const s=z.get(t.id);e.push({title:`${s.title}:${a.title}`,index:s.uuid,uuid:a.uuid})})),s.outputs.forEach((e=>{const s=z.get(t.id);a.push({title:`${s.title}:${e.title}`,index:s.uuid,uuid:e.uuid})}))})),{events:{inputs:e,outputs:a}}}));return l((()=>{window.removeEventListener("message",D)})),u((async()=>{window.addEventListener("message",D);try{C.value=!0;const e=await S(L.value,"metas, module, share,script, verseCode");q.value=e.data,X()}catch(e){n({message:e.message,type:"error"})}finally{C.value=!1}})),(e,a)=>{const t=o("font-awesome-icon"),s=_,i=k,r=j,l=f,u=x;return d(),c("div",N,[p(l,null,{default:v((()=>[p(r,null,{default:v((()=>[p(u,{loading:g(C),class:"box-card"},{header:v((()=>[g(q)?(d(),c("div",O,[m(y(g(q).name)+" / 【脚本】 ",1),p(i,{style:{float:"right"}},{default:v((()=>[g(W)?(d(),h(s,{key:0,type:"primary",size:"small",onClick:F},{default:v((()=>[p(t,{icon:"save"}),m(" 保存脚本 ")])),_:1})):w("",!0)])),_:1})])):w("",!0)])),default:v((()=>[p(l,null,{default:v((()=>[p(r,{style:{margin:"0",padding:"0",height:"70vh"}},{default:v((()=>[b("iframe",{style:{margin:"0",padding:"0",height:"100%",width:"100%"},id:"editor",ref_key:"editor",ref:I,src:g("https://blockly.4mr.cn")},null,8,E)])),_:1})])),_:1})])),_:1},8,["loading"])])),_:1})])),_:1})])}}});export{C as default};
