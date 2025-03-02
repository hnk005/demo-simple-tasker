import{r as d}from"./index-Dp_26h87.js";let M={data:""},F=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||M,_=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,H=/\/\*[^]*?\*\/|  +/g,A=/\n+/g,b=(e,t)=>{let r="",o="",n="";for(let a in e){let i=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+i+";":o+=a[1]=="f"?b(i,a):a+"{"+b(i,a[1]=="k"?"":t)+"}":typeof i=="object"?o+=b(i,t?t.replace(/([^,])+/g,s=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):a):i!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=b.p?b.p(a,i):a+":"+i+";")}return r+(t&&n?t+"{"+n+"}":n)+o},y={},N=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+N(e[r]);return t}return e},L=(e,t,r,o,n)=>{let a=N(e),i=y[a]||(y[a]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(a));if(!y[i]){let l=a!==e?e:(c=>{let u,f,m=[{}];for(;u=_.exec(c.replace(H,""));)u[4]?m.shift():u[3]?(f=u[3].replace(A," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][u[1]]=u[2].replace(A," ").trim();return m[0]})(e);y[i]=b(n?{["@keyframes "+i]:l}:l,r?"":"."+i)}let s=r&&y.g?y.g:null;return r&&(y.g=y[i]),((l,c,u,f)=>{f?c.data=c.data.replace(f,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(y[i],t,o,s),i},R=(e,t,r)=>e.reduce((o,n,a)=>{let i=t[a];if(i&&i.call){let s=i(r),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;i=l?"."+l:s&&typeof s=="object"?s.props?"":b(s,""):s===!1?"":s}return o+n+(i??"")},"");function j(e){let t=this||{},r=e.call?e(t.p):e;return L(r.unshift?r.raw?R(r,[].slice.call(arguments,1),t.p):r.reduce((o,n)=>Object.assign(o,n&&n.call?n(t.p):n),{}):r,F(t.target),t.g,t.o,t.k)}let z,I,T;j.bind({g:1});let h=j.bind({k:1});function U(e,t,r,o){b.p=t,z=e,I=r,T=o}function v(e,t){let r=this||{};return function(){let o=arguments;function n(a,i){let s=Object.assign({},a),l=s.className||n.className;r.p=Object.assign({theme:I&&I()},s),r.o=/ *go\d+/.test(l),s.className=j.apply(r,o)+(l?" "+l:"");let c=e;return e[0]&&(c=s.as||e,delete s.as),T&&c[0]&&T(s),z(c,s)}return t?t(n):n}}var V=e=>typeof e=="function",O=(e,t)=>V(e)?e(t):e,q=(()=>{let e=0;return()=>(++e).toString()})(),P=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),B=20,S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,B)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return S(e,{type:e.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(a=>a.id===o||o===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+n}))}}},D=[],x={toasts:[],pausedAt:void 0},w=e=>{x=S(x,e),D.forEach(t=>{t(x)})},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Z=(e={})=>{let[t,r]=d.useState(x),o=d.useRef(x);d.useEffect(()=>(o.current!==x&&r(x),D.push(r),()=>{let a=D.indexOf(r);a>-1&&D.splice(a,1)}),[]);let n=t.toasts.map(a=>{var i,s,l;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((i=e[a.type])==null?void 0:i.removeDelay)||(e==null?void 0:e.removeDelay),duration:a.duration||((s=e[a.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||Y[a.type],style:{...e.style,...(l=e[a.type])==null?void 0:l.style,...a.style}}});return{...t,toasts:n}},J=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||q()}),$=e=>(t,r)=>{let o=J(t,e,r);return w({type:2,toast:o}),o.id},p=(e,t)=>$("blank")(e,t);p.error=$("error");p.success=$("success");p.loading=$("loading");p.custom=$("custom");p.dismiss=e=>{w({type:3,toastId:e})};p.remove=e=>w({type:4,toastId:e});p.promise=(e,t,r)=>{let o=p.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let a=t.success?O(t.success,n):void 0;return a?p.success(a,{id:o,...r,...r==null?void 0:r.success}):p.dismiss(o),n}).catch(n=>{let a=t.error?O(t.error,n):void 0;a?p.error(a,{id:o,...r,...r==null?void 0:r.error}):p.dismiss(o)}),e};var K=(e,t)=>{w({type:1,toast:{id:e,height:t}})},W=()=>{w({type:5,time:Date.now()})},E=new Map,X=1e3,G=(e,t=X)=>{if(E.has(e))return;let r=setTimeout(()=>{E.delete(e),w({type:4,toastId:e})},t);E.set(e,r)},Q=e=>{let{toasts:t,pausedAt:r}=Z(e);d.useEffect(()=>{if(r)return;let a=Date.now(),i=t.map(s=>{if(s.duration===1/0)return;let l=(s.duration||0)+s.pauseDuration-(a-s.createdAt);if(l<0){s.visible&&p.dismiss(s.id);return}return setTimeout(()=>p.dismiss(s.id),l)});return()=>{i.forEach(s=>s&&clearTimeout(s))}},[t,r]);let o=d.useCallback(()=>{r&&w({type:6,time:Date.now()})},[r]),n=d.useCallback((a,i)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:c}=i||{},u=t.filter(g=>(g.position||c)===(a.position||c)&&g.height),f=u.findIndex(g=>g.id===a.id),m=u.filter((g,C)=>C<f&&g.visible).length;return u.filter(g=>g.visible).slice(...s?[m+1]:[0,m]).reduce((g,C)=>g+(C.height||0)+l,0)},[t]);return d.useEffect(()=>{t.forEach(a=>{if(a.dismissed)G(a.id,a.removeDelay);else{let i=E.get(a.id);i&&(clearTimeout(i),E.delete(a.id))}})},[t]),{toasts:t,handlers:{updateHeight:K,startPause:W,endPause:o,calculateOffset:n}}},ee=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,te=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ae=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,re=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ee} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${te} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ae} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,se=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,oe=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${se} 1s linear infinite;
`,ie=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ne=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,le=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ie} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ne} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ce=v("div")`
  position: absolute;
`,de=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ue=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,pe=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ue} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,me=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?d.createElement(pe,null,t):t:r==="blank"?null:d.createElement(de,null,d.createElement(oe,{...o}),r!=="loading"&&d.createElement(ce,null,r==="error"?d.createElement(re,{...o}):d.createElement(le,{...o})))},fe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ye="0%{opacity:0;} 100%{opacity:1;}",he="0%{opacity:1;} 100%{opacity:0;}",be=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ve=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,xe=(e,t)=>{let r=e.includes("top")?1:-1,[o,n]=P()?[ye,he]:[fe(r),ge(r)];return{animation:t?`${h(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},we=d.memo(({toast:e,position:t,style:r,children:o})=>{let n=e.height?xe(e.position||t||"top-center",e.visible):{opacity:0},a=d.createElement(me,{toast:e}),i=d.createElement(ve,{...e.ariaProps},O(e.message,e));return d.createElement(be,{className:e.className,style:{...n,...r,...e.style}},typeof o=="function"?o({icon:a,message:i}):d.createElement(d.Fragment,null,a,i))});U(d.createElement);var Ee=({id:e,className:t,style:r,onHeightUpdate:o,children:n})=>{let a=d.useCallback(i=>{if(i){let s=()=>{let l=i.getBoundingClientRect().height;o(e,l)};s(),new MutationObserver(s).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return d.createElement("div",{ref:a,className:t,style:r},n)},$e=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:P()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...n}},ke=j`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,k=16,Oe=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:n,containerStyle:a,containerClassName:i})=>{let{toasts:s,handlers:l}=Q(r);return d.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:k,left:k,right:k,bottom:k,pointerEvents:"none",...a},className:i,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map(c=>{let u=c.position||t,f=l.calculateOffset(c,{reverseOrder:e,gutter:o,defaultPosition:t}),m=$e(u,f);return d.createElement(Ee,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?ke:"",style:m},c.type==="custom"?O(c.message,c):n?n(c):d.createElement(we,{toast:c,position:u}))}))},je=p;export{le as CheckmarkIcon,re as ErrorIcon,oe as LoaderIcon,we as ToastBar,me as ToastIcon,Oe as Toaster,je as default,O as resolveValue,p as toast,Q as useToaster,Z as useToasterStore};
