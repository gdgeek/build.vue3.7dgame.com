import{H as e,bP as t,o as n,a8 as o,K as s,r,_ as a,d as u,y as c,I as d,g as i,N as l,k as f,Y as v,M as p,t as m,z as E,e as y,f as w,ci as h,q as b}from"./index.Cjef_Z7z.js";function L(e){return void 0===e}const T=(n,o)=>{if(!e)return!1;const s={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(o)],r=t(n,s);return["scroll","auto","overlay"].some((e=>r.includes(e)))},g=(t,n)=>{if(!e)return;let o=t;for(;o;){if([window,document,document.documentElement].includes(o))return window;if(T(o,n))return o;o=o.parentNode}return o};let k;const N=t=>{var n;if(!e)return 0;if(void 0!==k)return k;const o=document.createElement("div");o.className=`${t}-scrollbar__wrap`,o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const s=o.offsetWidth;o.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",o.appendChild(r);const a=r.offsetWidth;return null==(n=o.parentNode)||n.removeChild(o),k=s-a,k};function P(t,n){if(!e)return;if(!n)return void(t.scrollTop=0);const o=[];let s=n.offsetParent;for(;null!==s&&t!==s&&t.contains(s);)o.push(s),s=s.offsetParent;const r=n.offsetTop+o.reduce(((e,t)=>e+t.offsetTop),0),a=r+n.offsetHeight,u=t.scrollTop,c=u+t.clientHeight;r<u?t.scrollTop=r:a>c&&(t.scrollTop=a-t.clientHeight)}let _=[];const F=e=>{const t=e;t.key===s.esc&&_.forEach((e=>e(t)))},R="focus-trap.focus-after-trapped",S="focus-trap.focus-after-released",K={cancelable:!0,bubbles:!1},C={cancelable:!0,bubbles:!1},I="focusAfterTrapped",x="focusAfterReleased",H=Symbol("elFocusTrap"),A=r(),O=r(0),j=r(0);let q=0;const W=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0||e===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},$=(e,t)=>{for(const n of e)if(!B(n,t))return n},B=(e,t)=>{if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1},D=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),j.value=window.performance.now(),e!==n&&(e=>e instanceof HTMLInputElement&&"select"in e)(e)&&t&&e.select()}};function M(e,t){const n=[...e],o=e.indexOf(t);return-1!==o&&n.splice(o,1),n}const U=(()=>{let e=[];return{push:t=>{const n=e[0];n&&t!==n&&n.pause(),e=M(e,t),e.unshift(t)},remove:t=>{var n,o;e=M(e,t),null==(o=null==(n=e[0])?void 0:n.resume)||o.call(n)}}})(),z=()=>{A.value="pointer",O.value=window.performance.now()},Y=()=>{A.value="keyboard",O.value=window.performance.now()},G=e=>new CustomEvent("focus-trap.focusout-prevented",{...C,detail:e});var J=a(u({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[I,x,"focusin","focusout","focusout-prevented","release-requested"],setup(t,{emit:a}){const u=r();let f,m;const{focusReason:E}=(n((()=>{0===q&&(document.addEventListener("mousedown",z),document.addEventListener("touchstart",z),document.addEventListener("keydown",Y)),q++})),o((()=>{q--,q<=0&&(document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",Y))})),{focusReason:A,lastUserFocusTimestamp:O,lastAutomatedFocusTimestamp:j});var y;y=e=>{t.trapped&&!w.paused&&a("release-requested",e)},n((()=>{0===_.length&&document.addEventListener("keydown",F),e&&_.push(y)})),o((()=>{_=_.filter((e=>e!==y)),0===_.length&&e&&document.removeEventListener("keydown",F)}));const w={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},h=e=>{if(!t.loop&&!t.trapped)return;if(w.paused)return;const{key:n,altKey:o,ctrlKey:r,metaKey:u,currentTarget:c,shiftKey:d}=e,{loop:i}=t,l=n===s.tab&&!o&&!r&&!u,f=document.activeElement;if(l&&f){const t=c,[n,o]=(e=>{const t=W(e);return[$(t,e),$(t.reverse(),e)]})(t);if(n&&o)if(d||f!==o){if(d&&[n,t].includes(f)){const t=G({focusReason:E.value});a("focusout-prevented",t),t.defaultPrevented||(e.preventDefault(),i&&D(o,!0))}}else{const t=G({focusReason:E.value});a("focusout-prevented",t),t.defaultPrevented||(e.preventDefault(),i&&D(n,!0))}else if(f===t){const t=G({focusReason:E.value});a("focusout-prevented",t),t.defaultPrevented||e.preventDefault()}}};c(H,{focusTrapRef:u,onKeydown:h}),d((()=>t.focusTrapEl),(e=>{e&&(u.value=e)}),{immediate:!0}),d([u],(([e],[t])=>{e&&(e.addEventListener("keydown",h),e.addEventListener("focusin",T),e.addEventListener("focusout",g)),t&&(t.removeEventListener("keydown",h),t.removeEventListener("focusin",T),t.removeEventListener("focusout",g))}));const b=e=>{a(I,e)},L=e=>a(x,e),T=e=>{const n=i(u);if(!n)return;const o=e.target,s=e.relatedTarget,r=o&&n.contains(o);if(!t.trapped){s&&n.contains(s)||(f=s)}r&&a("focusin",e),w.paused||t.trapped&&(r?m=o:D(m,!0))},g=e=>{const n=i(u);if(!w.paused&&n)if(t.trapped){const o=e.relatedTarget;l(o)||n.contains(o)||setTimeout((()=>{if(!w.paused&&t.trapped){const e=G({focusReason:E.value});a("focusout-prevented",e),e.defaultPrevented||D(m,!0)}}),0)}else{const t=e.target;t&&n.contains(t)||a("focusout",e)}};async function k(){await v();const e=i(u);if(e){U.push(w);const n=e.contains(document.activeElement)?f:document.activeElement;f=n;if(!e.contains(n)){const o=new Event(R,K);e.addEventListener(R,b),e.dispatchEvent(o),o.defaultPrevented||v((()=>{let o=t.focusStartEl;p(o)||(D(o),document.activeElement!==o&&(o="first")),"first"===o&&((e,t=!1)=>{const n=document.activeElement;for(const o of e)if(D(o,t),document.activeElement!==n)return})(W(e),!0),document.activeElement!==n&&"container"!==o||D(e)}))}}}function N(){const e=i(u);if(e){e.removeEventListener(R,b);const t=new CustomEvent(S,{...K,detail:{focusReason:E.value}});e.addEventListener(S,L),e.dispatchEvent(t),t.defaultPrevented||"keyboard"!=E.value&&O.value>j.value&&!e.contains(document.activeElement)||D(null!=f?f:document.body),e.removeEventListener(S,L),U.remove(w)}}return n((()=>{t.trapped&&k(),d((()=>t.trapped),(e=>{e?k():N()}))})),o((()=>{t.trapped&&N(),u.value&&(u.value.removeEventListener("keydown",h),u.value.removeEventListener("focusin",T),u.value.removeEventListener("focusout",g),u.value=void 0)})),{onKeydown:h}}}),[["render",function(e,t,n,o,s,r){return f(e.$slots,"default",{handleKeydown:e.onKeydown})}],["__file","focus-trap.vue"]]);const Q=b(a(u({__name:"teleport",props:m({to:{type:E([String,Object]),required:!0},disabled:Boolean}),setup:e=>(e,t)=>e.disabled?f(e.$slots,"default",{key:0}):(y(),w(h,{key:1,to:e.to},[f(e.$slots,"default")],8,["to"]))}),[["__file","teleport.vue"]]));export{J as E,H as F,Q as a,g as b,N as g,L as i,P as s};
