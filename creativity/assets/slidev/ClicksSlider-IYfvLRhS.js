import{m as b}from"../modules/unplugin-icons-CgINTIV1.js";import{d as g,z as c,o as i,b as u,e as a,l as S,B as w,F as f,x as v,ag as B,ae as z,af as I,i as d,h as x,p as M,a as F}from"../modules/vue-vX1Bmlna.js";import{q as V,r as $,C as D,_ as L}from"../index-9ZR04hKL.js";const y=n=>(M("data-v-c549accf"),n=n(),F(),n),N=["title"],T={class:"flex gap-0.2 items-center min-w-16 font-mono mr1"},j=y(()=>a("div",{"flex-auto":""},null,-1)),q={"text-primary":""},A=y(()=>a("span",{op25:"","text-sm":""},"/",-1)),E={op50:"","text-sm":""},K={key:1,op50:"","flex-auto":"",pl1:""},R={relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~"},U=["min","max"],X=g({__name:"ClicksSlider",props:{clicksContext:{},readonly:{type:Boolean},active:{type:Boolean,default:!0}},setup(n){const s=n,t=c(()=>s.clicksContext.total),m=c(()=>V(0,s.clicksContext.clicksStart,t.value)),r=c(()=>t.value-m.value+1),o=c({get(){return s.clicksContext.current>t.value?-1:s.clicksContext.current},set(l){s.clicksContext.current=l}}),h=c(()=>$(m.value,t.value+1));function k(){s.readonly||(o.value<0||o.value>t.value)&&(o.value=0)}return(l,p)=>{const C=b;return i(),u("div",{class:d(["flex gap-1 items-center select-none",r.value&&s.clicksContext.isMounted?"":"op50"]),title:`Clicks in this slide: ${r.value}`},[a("div",T,[S(C,{"text-sm":"",op50:""}),o.value>=0&&o.value!==w(D)&&l.active?(i(),u(f,{key:0},[j,a("span",q,v(o.value),1),A,a("span",E,v(t.value),1)],64)):(i(),u("div",K,v(t.value),1))]),a("div",R,[(i(!0),u(f,null,B(h.value,e=>(i(),u("div",{key:e,border:"y main","of-hidden":"",relative:"",class:d([e===0?"rounded-l border-l":"",e===t.value?"rounded-r border-r":""]),style:x({width:r.value>0?`${1/r.value*100}%`:"100%"})},[a("div",{absolute:"","inset-0":"",class:d(e<=o.value&&l.active?"bg-primary op15":"")},null,2),a("div",{class:d([+e==+o.value&&l.active?"text-primary font-bold op100 border-primary":"op30 border-main",e===0?"rounded-l":"",e===t.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},v(e),3)],6))),128)),z(a("input",{"onUpdate:modelValue":p[0]||(p[0]=e=>o.value=e),class:d(["range",l.readonly?"pointer-events-none":""]),type:"range",min:m.value,max:t.value,step:1,absolute:"","inset-0":"","z-10":"",op0:"",style:x({"--thumb-width":`${1/(r.value+1)*100}%`}),onMousedown:k,onFocus:p[1]||(p[1]=e=>{var _;return(_=e.currentTarget)==null?void 0:_.blur()})},null,46,U),[[I,o.value]])])],10,N)}}}),O=L(X,[["__scopeId","data-v-c549accf"]]);export{O as C};
