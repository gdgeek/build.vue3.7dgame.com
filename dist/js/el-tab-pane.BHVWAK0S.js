import{s as e,aq as a,bR as t,t as l,z as s,an as o,d as n,A as r,b as i,r as u,I as d,Y as v,ap as c,e as b,h as p,i as f,g as m,n as h,_ as y,F as g,bS as $,bT as C,c as P,o as x,bJ as w,l as T,E as k,bU as B,ak as N,a5 as S,K as R,y as E,k as A,bV as F,bf as _,M as K,at as q,a6 as L,bW as V,X as j,b3 as z,Z as M,a4 as W,p as U,q as X,G as Y}from"./index.Cjef_Z7z.js";import{t as G,U as H}from"./event.CIKxL71l.js";import{c as I}from"./strings.C83A8Pxk.js";const J=(l,s)=>{const o={},n=e([]);return{children:n,addChild:e=>{o[e.uid]=e,n.value=((e,l,s)=>a(e.subTree).filter((e=>{var a;return t(e)&&(null==(a=e.type)?void 0:a.name)===l&&!!e.component})).map((e=>e.component.uid)).map((e=>s[e])).filter((e=>!!e)))(l,s,o)},removeChild:e=>{delete o[e],n.value=n.value.filter((a=>a.uid!==e))}}},O=Symbol("tabsRootContextKey"),Z=l({tabs:{type:s(Array),default:()=>o([])}}),D="ElTabBar",Q=n({name:D});var ee=y(n({...Q,props:Z,setup(e,{expose:a}){const t=e,l=g(),s=r(O);s||G(D,"<el-tabs><el-tab-bar /></el-tabs>");const o=i("tabs"),n=u(),y=u(),$=()=>y.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y",r="x"===n?"left":"top";return t.tabs.every((t=>{var s,n;const i=null==(n=null==(s=l.parent)?void 0:s.refs)?void 0:n[`tab-${t.uid}`];if(!i)return!1;if(!t.active)return!0;e=i[`offset${I(r)}`],a=i[`client${I(o)}`];const u=window.getComputedStyle(i);return"width"===o&&(a-=Number.parseFloat(u.paddingLeft)+Number.parseFloat(u.paddingRight),e+=Number.parseFloat(u.paddingLeft)),!1})),{[o]:`${a}px`,transform:`translate${I(n)}(${e}px)`}})();return d((()=>t.tabs),(async()=>{await v(),$()}),{immediate:!0}),c(n,(()=>$())),a({ref:n,update:$}),(e,a)=>(b(),p("div",{ref_key:"barRef",ref:n,class:f([m(o).e("active-bar"),m(o).is(m(s).props.tabPosition)]),style:h(y.value)},null,6))}}),[["__file","tab-bar.vue"]]);const ae=l({panes:{type:s(Array),default:()=>o([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),te="ElTabNav",le=n({name:te,props:ae,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:t}){const l=r(O);l||G(te,"<el-tabs><tab-nav /></el-tabs>");const s=i("tabs"),o=$(),n=C(),b=u(),p=u(),f=u(),m=u(),h=u(!1),y=u(0),g=u(!1),E=u(!0),A=P((()=>["top","bottom"].includes(l.props.tabPosition)?"width":"height")),F=P((()=>({transform:`translate${"width"===A.value?"X":"Y"}(-${y.value}px)`}))),_=()=>{if(!b.value)return;const e=b.value[`offset${I(A.value)}`],a=y.value;if(!a)return;const t=a>e?a-e:0;y.value=t},K=()=>{if(!b.value||!p.value)return;const e=p.value[`offset${I(A.value)}`],a=b.value[`offset${I(A.value)}`],t=y.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;y.value=l},q=async()=>{const e=p.value;if(!(h.value&&f.value&&b.value&&e))return;await v();const a=f.value.querySelector(".is-active");if(!a)return;const t=b.value,s=["top","bottom"].includes(l.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),r=s?e.offsetWidth-n.width:e.offsetHeight-n.height,i=y.value;let u=i;s?(o.left<n.left&&(u=i-(n.left-o.left)),o.right>n.right&&(u=i+o.right-n.right)):(o.top<n.top&&(u=i-(n.top-o.top)),o.bottom>n.bottom&&(u=i+(o.bottom-n.bottom))),u=Math.max(u,0),y.value=Math.min(u,r)},L=()=>{var a;if(!p.value||!b.value)return;e.stretch&&(null==(a=m.value)||a.update());const t=p.value[`offset${I(A.value)}`],l=b.value[`offset${I(A.value)}`],s=y.value;l<t?(h.value=h.value||{},h.value.prev=s,h.value.next=s+l<t,t-s<l&&(y.value=t-l)):(h.value=!1,s>0&&(y.value=0))},V=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=R;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus({preventScroll:!0}),n[i].click(),j()},j=()=>{E.value&&(g.value=!0)},z=()=>g.value=!1;return d(o,(e=>{"hidden"===e?E.value=!1:"visible"===e&&setTimeout((()=>E.value=!0),50)})),d(n,(e=>{e?setTimeout((()=>E.value=!0),50):E.value=!1})),c(f,L),x((()=>setTimeout((()=>q()),0))),w((()=>L())),a({scrollToActiveTab:q,removeFocus:z}),()=>{const a=h.value?[T("span",{class:[s.e("nav-prev"),s.is("disabled",!h.value.prev)],onClick:_},[T(k,null,{default:()=>[T(B,null,null)]})]),T("span",{class:[s.e("nav-next"),s.is("disabled",!h.value.next)],onClick:K},[T(k,null,{default:()=>[T(N,null,null)]})])]:null,o=e.panes.map(((a,o)=>{var n,r,i,u;const d=a.uid,v=a.props.disabled,c=null!=(r=null!=(n=a.props.name)?n:a.index)?r:`${o}`,b=!v&&(a.isClosable||e.editable);a.index=`${o}`;const p=b?T(k,{class:"is-icon-close",onClick:e=>t("tabRemove",a,e)},{default:()=>[T(S,null,null)]}):null,f=(null==(u=(i=a.slots).label)?void 0:u.call(i))||a.props.label,m=!v&&a.active?0:-1;return T("div",{ref:`tab-${d}`,class:[s.e("item"),s.is(l.props.tabPosition),s.is("active",a.active),s.is("disabled",v),s.is("closable",b),s.is("focus",g.value)],id:`tab-${c}`,key:`tab-${d}`,"aria-controls":`pane-${c}`,role:"tab","aria-selected":a.active,tabindex:m,onFocus:()=>j(),onBlur:()=>z(),onClick:e=>{z(),t("tabClick",a,c,e)},onKeydown:e=>{!b||e.code!==R.delete&&e.code!==R.backspace||t("tabRemove",a,e)}},[f,p])}));return T("div",{ref:f,class:[s.e("nav-wrap"),s.is("scrollable",!!h.value),s.is(l.props.tabPosition)]},[a,T("div",{class:s.e("nav-scroll"),ref:b},[T("div",{class:[s.e("nav"),s.is(l.props.tabPosition),s.is("stretch",e.stretch&&["top","bottom"].includes(l.props.tabPosition))],ref:p,style:F.value,role:"tablist",onKeydown:V},[e.type?null:T(ee,{ref:m,tabs:[...e.panes]},null),o])])])}}}),se=l({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:s(Function),default:()=>!0},stretch:Boolean}),oe=e=>K(e)||q(e),ne=n({name:"ElTabs",props:se,emits:{[H]:e=>oe(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>oe(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>oe(e),tabAdd:()=>!0},setup(e,{emit:a,slots:t,expose:l}){var s;const o=i("tabs"),n=P((()=>["left","right"].includes(e.tabPosition))),{children:r,addChild:c,removeChild:b}=J(g(),"ElTabPane"),p=u(),f=u(null!=(s=e.modelValue)?s:"0"),m=async(t,l=!1)=>{var s,o,n;if(f.value!==t&&!_(t))try{!1!==await(null==(s=e.beforeLeave)?void 0:s.call(e,t,f.value))&&(f.value=t,l&&(a(H,t),a("tabChange",t)),null==(n=null==(o=p.value)?void 0:o.removeFocus)||n.call(o))}catch(r){}},h=(e,t,l)=>{e.props.disabled||(m(t,!0),a("tabClick",e,l))},y=(e,t)=>{e.props.disabled||_(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},$=()=>{a("edit",void 0,"add"),a("tabAdd")};d((()=>e.modelValue),(e=>m(e))),d(f,(async()=>{var e;await v(),null==(e=p.value)||e.scrollToActiveTab()})),E(O,{props:e,currentName:f,registerPane:e=>{r.value.push(e)},sortPane:c,unregisterPane:b}),l({currentName:f});const C=({render:e})=>e();return()=>{const a=t["add-icon"],l=e.editable||e.addable?T("div",{class:[o.e("new-tab"),n.value&&o.e("new-tab-vertical")],tabindex:"0",onClick:$,onKeydown:e=>{e.code===R.enter&&$()}},[a?A(t,"add-icon"):T(k,{class:o.is("icon-plus")},{default:()=>[T(F,null,null)]})]):null,s=T("div",{class:[o.e("header"),n.value&&o.e("header-vertical"),o.is(e.tabPosition)]},[T(C,{render:()=>{const a=r.value.some((e=>e.slots.label));return T(le,{ref:p,currentName:f.value,editable:e.editable,type:e.type,panes:r.value,stretch:e.stretch,onTabClick:h,onTabRemove:y},{$stable:!a})}},null),l]),i=T("div",{class:o.e("content")},[A(t,"default")]);return T("div",{class:[o.b(),o.m(e.tabPosition),{[o.m("card")]:"card"===e.type,[o.m("border-card")]:"border-card"===e.type}]},[i,s])}}}),re=l({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ie="ElTabPane",ue=n({name:ie});var de=y(n({...ue,props:re,setup(e){const a=e,t=g(),l=L(),s=r(O);s||G(ie,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=i("tab-pane"),n=u(),v=P((()=>a.closable||s.props.closable)),c=V((()=>{var e;return s.currentName.value===(null!=(e=a.name)?e:n.value)})),h=u(c.value),y=P((()=>{var e;return null!=(e=a.name)?e:n.value})),$=V((()=>!a.lazy||h.value||c.value));d(c,(e=>{e&&(h.value=!0)}));const C=j({uid:t.uid,slots:l,props:a,paneName:y,active:c,index:n,isClosable:v});return s.registerPane(C),x((()=>{s.sortPane(C)})),z((()=>{s.unregisterPane(C.uid)})),(e,a)=>m($)?M((b(),p("div",{key:0,id:`pane-${m(y)}`,class:f(m(o).b()),role:"tabpanel","aria-hidden":!m(c),"aria-labelledby":`tab-${m(y)}`},[A(e.$slots,"default")],10,["id","aria-hidden","aria-labelledby"])),[[W,m(c)]]):U("v-if",!0)}}),[["__file","tab-pane.vue"]]);const ve=X(ne,{TabPane:de}),ce=Y(de);export{ve as E,ce as a};
