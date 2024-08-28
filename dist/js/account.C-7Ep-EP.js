import{b5 as e,d as l,aD as a,c as r,r as s,e as o,h as d,l as t,w as u,aZ as i,f as m,i as p,p as n,a1 as v,D as c,aA as f,a0 as w,b6 as g,b7 as b,b8 as y,aP as _,aQ as h,B as x,aw as k}from"./index.Cjef_Z7z.js";import{E as j}from"./el-dialog.CzWkQxIR.js";/* empty css                   *//* empty css                        */import{a as P,E as V}from"./el-form.D3OlyBar.js";/* empty css               */import"./el-form-item.l0sNRNKZ.js";/* empty css                 */import{E}from"./index.BXnlD_Jm.js";import{E as U}from"./index.uO1bW3rE.js";import"./index.CPFVFN5s.js";import"./event.CIKxL71l.js";import"./index.nlXv4Th5.js";import"./use-dialog.DS-_ayZC.js";import"./castArray.rYmLHGWs.js";import"./_Uint8Array.ClFFuwof.js";import"./_initCloneObject.BBOceheS.js";const C=e=>(_("data-v-354cd82d"),e=e(),h(),e),q=C((()=>x("div",{class:"clearfix"},[x("h3",null,"账号设置"),x("small",null,"账号具体内容的配置和修改")],-1))),A={key:0},B={key:1},F=C((()=>x("br",null,null,-1))),R=k(l({__name:"account",setup(l){const _=a(),h=r((()=>_.userInfo.data)),x=s({email:null}),k=s(!1),C=s(),R=s(),D=s({oldPassword:null,password:null,checkPassword:null}),I={oldPassword:[{required:!0,message:"请输入旧密码",trigger:"blur"},{min:6,message:"密码长度应该大于6",trigger:"blur"},{validator:(e,l,a)=>{""===l?a(new Error("旧密码不能为空")):l===D.value.password?a(new Error("新密码不能和旧密码一致!")):a()},trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"密码长度应该大于6",trigger:"blur"},{validator:(e,l,a)=>{var r;""===l?a(new Error("请输入密码")):l===D.value.oldPassword?a(new Error("新密码不能和旧密码一致!")):(""!==D.value.checkPassword&&(null==(r=C.value)||r.validateField("checkPassword")),a())},trigger:"blur"}],checkPassword:[{required:!0,message:"请输入校验密码",trigger:"blur"},{validator:(e,l,a)=>{""===l?a(new Error("请再次输入密码")):l!==D.value.password?a(new Error("两次输入密码不一致!")):a()},trigger:"blur"}]},O=()=>{D.value.oldPassword=null,D.value.password=null,D.value.checkPassword=null},K=()=>{var l;null==(l=C.value)||l.validate((async l=>{if(l)try{await(a=D.value.oldPassword,r=D.value.password,e({url:"/servers/reset-password",method:"post",data:{oldPassword:a,password:r}})),f.success("密码修改成功")}catch(s){f.error("密码修改失败")}else f({type:"error",message:"表单校验未通过"});var a,r}))},M=async()=>{var l;null==(l=R.value)||l.validate((async l=>{if(l)try{await(a=x.value.email,e({url:"/servers/bind-email",method:"post",data:{email:a}})),f.success("绑定成功")}catch(r){f.error("绑定失败")}else f({type:"error",message:"表单校验未通过"});var a}))};return(e,l)=>{const a=w,r=E,s=P,f=U,_=V,N=g,Q=b,S=y,W=j,Y=i;return o(),d("div",null,[t(Y,{class:"box-card"},{header:u((()=>[q])),default:u((()=>[t(Q,{gutter:24},{default:u((()=>[t(N,{xs:16,sm:16,md:12,lg:10,xl:10},{default:u((()=>[t(_,{ref_key:"emailFormRef",ref:R,model:x.value,"label-width":"100px",style:{"min-width":"300px"}},{default:u((()=>[void 0!==h.value.email&&null!==h.value.email&&h.value.emailBind?(o(),m(s,{key:1,modelValue:x.value.email,"onUpdate:modelValue":l[1]||(l[1]=e=>x.value.email=e),label:"邮箱",prop:"email"},{default:u((()=>[t(f,null,{default:u((()=>[v(c(h.value.email),1)])),_:1})])),_:1},8,["modelValue"])):(o(),m(s,{key:0,label:"邮箱",prop:"email",rules:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}]},{default:u((()=>[t(r,{modelValue:x.value.email,"onUpdate:modelValue":l[0]||(l[0]=e=>x.value.email=e),autocomplete:"off",type:"email",placeholder:"绑定邮箱"},{append:u((()=>[h.value.emailBind?n("",!0):(o(),m(a,{key:0,onClick:M,class:p({"hover-blue":!0})},{default:u((()=>[null===h.value.email?(o(),d("div",A,"绑定")):(o(),d("div",B,"重新绑定"))])),_:1}))])),_:1},8,["modelValue"])])),_:1}))])),_:1},8,["model"])])),_:1})])),_:1}),F,t(Q,{gutter:24},{default:u((()=>[t(N,{xs:16,sm:16,md:10,lg:6,xl:6},{default:u((()=>[t(_,{"label-width":"100px",style:{"min-width":"300px"}},{default:u((()=>[t(s,{label:"账户密码"},{default:u((()=>[t(S,null,{default:u((()=>[t(a,{type:"warning",onClick:l[2]||(l[2]=e=>k.value=!0)},{default:u((()=>[v(" 修改密码 ")])),_:1}),t(a,{disabled:"",type:"warning",onClick:l[3]||(l[3]=e=>k.value=!0)},{default:u((()=>[v(" 找回密码 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),t(W,{modelValue:k.value,"onUpdate:modelValue":l[7]||(l[7]=e=>k.value=e),"close-on-click-modal":!1,style:{"min-width":"560px"},onClose:O},{header:u((()=>[v(" 修改密码 ")])),default:u((()=>[t(_,{ref_key:"passwordFormRef",ref:C,model:D.value,rules:I,"label-width":"80px"},{default:u((()=>[t(Q,{gutter:24},{default:u((()=>[t(N,{xs:20,sm:20,md:14,lg:14,xl:14,offset:4},{default:u((()=>[t(s,{label:"旧的密码",prop:"oldPassword",style:{"margin-bottom":"26px"}},{default:u((()=>[t(r,{modelValue:D.value.oldPassword,"onUpdate:modelValue":l[4]||(l[4]=e=>D.value.oldPassword=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(s,{label:"新的密码",prop:"password",style:{"margin-bottom":"26px"}},{default:u((()=>[t(r,{modelValue:D.value.password,"onUpdate:modelValue":l[5]||(l[5]=e=>D.value.password=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(s,{label:"确认密码",prop:"checkPassword",style:{"margin-bottom":"26px"}},{default:u((()=>[t(r,{modelValue:D.value.checkPassword,"onUpdate:modelValue":l[6]||(l[6]=e=>D.value.checkPassword=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(s,null,{default:u((()=>[t(a,{style:{width:"100%"},type:"primary",onClick:K},{default:u((()=>[v(" 确认修改 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])),_:1})])}}}),[["__scopeId","data-v-354cd82d"]]);export{R as default};