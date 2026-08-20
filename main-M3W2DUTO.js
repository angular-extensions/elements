import"./chunk-TO3ERS7E.js";import"./chunk-WBPNYA25.js";import{e as Or,g as Wr,h as Qr,i as Ht,j as Wt}from"./chunk-OUX2Y43Q.js";import{a as Yr,b as _e,c as ye}from"./chunk-PLJYMIPD.js";import{c as Tr}from"./chunk-SBZUIR5V.js";import{a as Ji,b as z,c as Nr,d as Ve,e as fe,f as ie,g as tn,h as en,i as _t,l as Vr,m as jr}from"./chunk-5NUDGQC2.js";import{A as li,C as ne,D as Hr,c as $i,d as mt,f as Nt,h as Pr,j as Zi,k as oi,l as Dr,m as Ar,n as Rr,o as Ir,p as Lr,q as Fr,s as ai,t as kt,u as nn,v as rn,w as Br,x as zr,z as sn}from"./chunk-HJXE7Z53.js";import{a as ze}from"./chunk-HXKOH4UM.js";import{a as $r,b as Zr,c as Jr}from"./chunk-MYE6UUAZ.js";import{a as ts,b as es,c as is,d as ns,e as rs,f as ss}from"./chunk-JJILP7MB.js";import{a as ue,b as q}from"./chunk-JFL4WWRP.js";import{a as Ur,b as Gr,c as ge,d as ci,e as qr,f as Kr,g as Xr}from"./chunk-TBOL6PYU.js";import{$b as wr,Ab as At,Bb as Ft,C as cr,Ca as Re,Cb as A,D as St,Db as R,E as Ui,F as dr,Fa as gr,Ha as C,Hb as Yi,Ia as _r,Ib as ni,Ja as Lt,Jb as X,Ka as Ki,Kb as ri,La as pe,Lb as p,Ma as Ie,Mb as Zt,Nb as Ct,O as Gi,P as De,Q as vt,R as mr,Rb as Rt,S as x,Sb as Jt,T as hr,Ta as E,Tb as te,Ua as B,V as F,Va as G,W as N,Wa as wt,Xa as Xi,Y as et,Z as Kt,_ as m,_b as br,a as Oe,aa as pr,ab as yr,ba as qi,c as ei,ca as ur,cb as Le,cc as kr,d as O,dc as ee,e as ar,eb as ft,fa as Xt,fb as it,ga as Yt,gb as nt,ib as Fe,j as lr,ja as Z,jb as Ne,ka as at,kb as Be,kc as xr,lb as lt,mb as u,mc as si,na as he,nb as f,o as L,oa as Q,ob as P,p as Pe,pb as ct,qb as rt,ra as Ae,rb as vr,rc as Sr,sc as Cr,tb as $t,uc as Er,vb as gt,w as ii,wa as bt,wc as Mr,x as jt,xb as dt,y as Dt,ya as U,yb as st,za as fr,zb as D}from"./chunk-EULORU2D.js";import{a as $,b as sr,c as or}from"./chunk-OSQMNGTH.js";var S=(function(r){return r[r.State=0]="State",r[r.Transition=1]="Transition",r[r.Sequence=2]="Sequence",r[r.Group=3]="Group",r[r.Animate=4]="Animate",r[r.Keyframes=5]="Keyframes",r[r.Style=6]="Style",r[r.Trigger=7]="Trigger",r[r.Reference=8]="Reference",r[r.AnimateChild=9]="AnimateChild",r[r.AnimateRef=10]="AnimateRef",r[r.Query=11]="Query",r[r.Stagger=12]="Stagger",r})(S||{}),Et="*";function os(r,e=null){return{type:S.Sequence,steps:r,options:e}}function on(r){return{type:S.Style,styles:r,offset:null}}var Bt=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(e=0,t=0){this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},ve=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(e){this.players=e;let t=0,i=0,n=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++t==s&&this._onFinish()}),o.onDestroy(()=>{++i==s&&this._onDestroy()}),o.onStart(()=>{++n==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let t=e*this.totalTime;this.players.forEach(i=>{let n=i.totalTime?Math.min(1,t/i.totalTime):1;i.setPosition(n)})}getPosition(){let e=this.players.reduce((t,i)=>t===null||i.totalTime>t.totalTime?i:t,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},je="!";function as(r){return new x(3e3,!1)}function aa(){return new x(3100,!1)}function la(){return new x(3101,!1)}function ca(r){return new x(3001,!1)}function da(r){return new x(3003,!1)}function ma(r){return new x(3004,!1)}function cs(r,e){return new x(3005,!1)}function ds(){return new x(3006,!1)}function ms(){return new x(3007,!1)}function hs(r,e){return new x(3008,!1)}function ps(r){return new x(3002,!1)}function us(r,e,t,i,n){return new x(3010,!1)}function fs(){return new x(3011,!1)}function gs(){return new x(3012,!1)}function _s(){return new x(3200,!1)}function ys(){return new x(3202,!1)}function vs(){return new x(3013,!1)}function bs(r){return new x(3014,!1)}function ws(r){return new x(3015,!1)}function ks(r){return new x(3016,!1)}function xs(r,e){return new x(3404,!1)}function ha(r){return new x(3502,!1)}function Ss(r){return new x(3503,!1)}function Cs(){return new x(3300,!1)}function Es(r){return new x(3504,!1)}function Ms(r){return new x(3301,!1)}function Ts(r,e){return new x(3302,!1)}function Os(r){return new x(3303,!1)}function Ps(r,e){return new x(3400,!1)}function Ds(r){return new x(3401,!1)}function As(r){return new x(3402,!1)}function Rs(r,e){return new x(3505,!1)}function zt(r){switch(r.length){case 0:return new Bt;case 1:return r[0];default:return new ve(r)}}function dn(r,e,t=new Map,i=new Map){let n=[],s=[],o=-1,a=null;if(e.forEach(l=>{let c=l.get("offset"),d=c==o,h=d&&a||new Map;l.forEach((w,v)=>{let g=v,y=w;if(v!=="offset")switch(g=r.normalizePropertyName(g,n),y){case je:y=t.get(v);break;case Et:y=i.get(v);break;default:y=r.normalizeStyleValue(v,g,y,n);break}h.set(g,y)}),d||s.push(h),a=h,o=c}),n.length)throw ha(n);return s}function di(r,e,t,i){switch(e){case"start":r.onStart(()=>i(t&&an(t,"start",r)));break;case"done":r.onDone(()=>i(t&&an(t,"done",r)));break;case"destroy":r.onDestroy(()=>i(t&&an(t,"destroy",r)));break}}function an(r,e,t){let i=t.totalTime,n=!!t.disabled,s=mi(r.element,r.triggerName,r.fromState,r.toState,e||r.phaseName,i??r.totalTime,n),o=r._data;return o!=null&&(s._data=o),s}function mi(r,e,t,i,n="",s=0,o){return{element:r,triggerName:e,fromState:t,toState:i,phaseName:n,totalTime:s,disabled:!!o}}function ht(r,e,t){let i=r.get(e);return i||r.set(e,i=t),i}function mn(r){let e=r.indexOf(":"),t=r.substring(1,e),i=r.slice(e+1);return[t,i]}var pa=typeof document>"u"?null:document.documentElement;function hi(r){let e=r.parentNode||r.host||null;return e===pa?null:e}function ua(r){return r.substring(1,6)=="ebkit"}var re=null,ls=!1;function Is(r){re||(re=fa()||{},ls=re.style?"WebkitAppearance"in re.style:!1);let e=!0;return re.style&&!ua(r)&&(e=r in re.style,!e&&ls&&(e="Webkit"+r.charAt(0).toUpperCase()+r.slice(1)in re.style)),e}function fa(){return typeof document<"u"?document.body:null}function hn(r,e){for(;e;){if(e===r)return!0;e=hi(e)}return!1}function pn(r,e,t){if(t)return Array.from(r.querySelectorAll(e));let i=r.querySelector(e);return i?[i]:[]}var ga=1e3,un="{{",_a="}}",fn="ng-enter",pi="ng-leave",He="ng-trigger",We=".ng-trigger",gn="ng-animating",ui=".ng-animating";function It(r){if(typeof r=="number")return r;let e=r.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:ln(parseFloat(e[1]),e[2])}function ln(r,e){return e==="s"?r*ga:r}function Qe(r,e,t){return r.hasOwnProperty("duration")?r:va(r,e,t)}var ya=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function va(r,e,t){let i,n=0,s="";if(typeof r=="string"){let o=r.match(ya);if(o===null)return e.push(as(r)),{duration:0,delay:0,easing:""};i=ln(parseFloat(o[1]),o[2]);let a=o[3];a!=null&&(n=ln(parseFloat(a),o[4]));let l=o[5];l&&(s=l)}else i=r;if(!t){let o=!1,a=e.length;i<0&&(e.push(aa()),o=!0),n<0&&(e.push(la()),o=!0),o&&e.splice(a,0,as(r))}return{duration:i,delay:n,easing:s}}function Ls(r){return r.length?r[0]instanceof Map?r:r.map(e=>new Map(Object.entries(e))):[]}function Mt(r,e,t){e.forEach((i,n)=>{let s=fi(n);t&&!t.has(n)&&t.set(n,r.style[s]),r.style[s]=i})}function Qt(r,e){e.forEach((t,i)=>{let n=fi(i);r.style[n]=""})}function be(r){return Array.isArray(r)?r.length==1?r[0]:os(r):r}function Fs(r,e,t){let i=e.params||{},n=_n(r);n.length&&n.forEach(s=>{i.hasOwnProperty(s)||t.push(ca(s))})}var cn=new RegExp(`${un}\\s*(.+?)\\s*${_a}`,"g");function _n(r){let e=[];if(typeof r=="string"){let t;for(;t=cn.exec(r);)e.push(t[1]);cn.lastIndex=0}return e}function we(r,e,t){let i=`${r}`,n=i.replace(cn,(s,o)=>{let a=e[o];return a==null&&(t.push(da(o)),a=""),a.toString()});return n==i?r:n}var ba=/-+([a-z0-9])/g;function fi(r){return r.replace(ba,(...e)=>e[1].toUpperCase())}function Ns(r,e){return r===0||e===0}function Bs(r,e,t){if(t.size&&e.length){let i=e[0],n=[];if(t.forEach((s,o)=>{i.has(o)||n.push(o),i.set(o,s)}),n.length)for(let s=1;s<e.length;s++){let o=e[s];n.forEach(a=>o.set(a,gi(r,a)))}}return e}function pt(r,e,t){switch(e.type){case S.Trigger:return r.visitTrigger(e,t);case S.State:return r.visitState(e,t);case S.Transition:return r.visitTransition(e,t);case S.Sequence:return r.visitSequence(e,t);case S.Group:return r.visitGroup(e,t);case S.Animate:return r.visitAnimate(e,t);case S.Keyframes:return r.visitKeyframes(e,t);case S.Style:return r.visitStyle(e,t);case S.Reference:return r.visitReference(e,t);case S.AnimateChild:return r.visitAnimateChild(e,t);case S.AnimateRef:return r.visitAnimateRef(e,t);case S.Query:return r.visitQuery(e,t);case S.Stagger:return r.visitStagger(e,t);default:throw ma(e.type)}}function gi(r,e){return window.getComputedStyle(r)[e]}var In=(()=>{class r{validateStyleProperty(t){return Is(t)}containsElement(t,i){return hn(t,i)}getParentElement(t){return hi(t)}query(t,i,n){return pn(t,i,n)}computeStyle(t,i,n){return n||""}animate(t,i,n,s,o,a=[],l){return new Bt(n,s)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=F({token:r,factory:r.\u0275fac})}return r})(),oe=class{static NOOP=new In},ae=class{};var wa=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),wi=class extends ae{normalizePropertyName(e,t){return fi(e)}normalizeStyleValue(e,t,i,n){let s="",o=i.toString().trim();if(wa.has(t)&&i!==0&&i!=="0")if(typeof i=="number")s="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&n.push(cs(e,i))}return o+s}};var ki="*";function ka(r,e){let t=[];return typeof r=="string"?r.split(/\s*,\s*/).forEach(i=>xa(i,t,e)):t.push(r),t}function xa(r,e,t){if(r[0]==":"){let l=Sa(r,t);if(typeof l=="function"){e.push(l);return}r=l}let i=r.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return t.push(ws(r)),e;let n=i[1],s=i[2],o=i[3];e.push(zs(n,o));let a=n==ki&&o==ki;s[0]=="<"&&!a&&e.push(zs(o,n))}function Sa(r,e){switch(r){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,i)=>parseFloat(i)>parseFloat(t);case":decrement":return(t,i)=>parseFloat(i)<parseFloat(t);default:return e.push(ks(r)),"* => *"}}var _i=new Set(["true","1"]),yi=new Set(["false","0"]);function zs(r,e){let t=_i.has(r)||yi.has(r),i=_i.has(e)||yi.has(e);return(n,s)=>{let o=r==ki||r==n,a=e==ki||e==s;return!o&&t&&typeof n=="boolean"&&(o=n?_i.has(r):yi.has(r)),!a&&i&&typeof s=="boolean"&&(a=s?_i.has(e):yi.has(e)),o&&a}}var Xs=":self",Ca=new RegExp(`s*${Xs}s*,?`,"g");function Ys(r,e,t,i){return new xn(r).build(e,t,i)}var Vs="",xn=class{_driver;constructor(e){this._driver=e}build(e,t,i){let n=new Sn(t);return this._resetContextStyleTimingState(n),pt(this,be(e),n)}_resetContextStyleTimingState(e){e.currentQuerySelector=Vs,e.collectedStyles=new Map,e.collectedStyles.set(Vs,new Map),e.currentTime=0}visitTrigger(e,t){let i=t.queryCount=0,n=t.depCount=0,s=[],o=[];return e.name.charAt(0)=="@"&&t.errors.push(ds()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(t),a.type==S.State){let l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(d=>{l.name=d,s.push(this.visitState(l,t))}),l.name=c}else if(a.type==S.Transition){let l=this.visitTransition(a,t);i+=l.queryCount,n+=l.depCount,o.push(l)}else t.errors.push(ms())}),{type:S.Trigger,name:e.name,states:s,transitions:o,queryCount:i,depCount:n,options:null}}visitState(e,t){let i=this.visitStyle(e.styles,t),n=e.options&&e.options.params||null;if(i.containsDynamicStyles){let s=new Set,o=n||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{_n(l).forEach(c=>{o.hasOwnProperty(c)||s.add(c)})})}),s.size&&t.errors.push(hs(e.name,[...s.values()]))}return{type:S.State,name:e.name,style:i,options:n?{params:n}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let i=pt(this,be(e.animation),t),n=ka(e.expr,t.errors);return{type:S.Transition,matchers:n,animation:i,queryCount:t.queryCount,depCount:t.depCount,options:se(e.options)}}visitSequence(e,t){return{type:S.Sequence,steps:e.steps.map(i=>pt(this,i,t)),options:se(e.options)}}visitGroup(e,t){let i=t.currentTime,n=0,s=e.steps.map(o=>{t.currentTime=i;let a=pt(this,o,t);return n=Math.max(n,t.currentTime),a});return t.currentTime=n,{type:S.Group,steps:s,options:se(e.options)}}visitAnimate(e,t){let i=Oa(e.timings,t.errors);t.currentAnimateTimings=i;let n,s=e.styles?e.styles:on({});if(s.type==S.Keyframes)n=this.visitKeyframes(s,t);else{let o=e.styles,a=!1;if(!o){a=!0;let c={};i.easing&&(c.easing=i.easing),o=on(c)}t.currentTime+=i.duration+i.delay;let l=this.visitStyle(o,t);l.isEmptyStep=a,n=l}return t.currentAnimateTimings=null,{type:S.Animate,timings:i,style:n,options:null}}visitStyle(e,t){let i=this._makeStyleAst(e,t);return this._validateStyleAst(i,t),i}_makeStyleAst(e,t){let i=[],n=Array.isArray(e.styles)?e.styles:[e.styles];for(let a of n)typeof a=="string"?a===Et?i.push(a):t.errors.push(ps(a)):i.push(new Map(Object.entries(a)));let s=!1,o=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(o=a.get("easing"),a.delete("easing")),!s)){for(let l of a.values())if(l.toString().indexOf(un)>=0){s=!0;break}}}),{type:S.Style,styles:i,easing:o,offset:e.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(e,t){let i=t.currentAnimateTimings,n=t.currentTime,s=t.currentTime;i&&s>0&&(s-=i.duration+i.delay),e.styles.forEach(o=>{typeof o!="string"&&o.forEach((a,l)=>{let c=t.collectedStyles.get(t.currentQuerySelector),d=c.get(l),h=!0;d&&(s!=n&&s>=d.startTime&&n<=d.endTime&&(t.errors.push(us(l,d.startTime,d.endTime,s,n)),h=!1),s=d.startTime),h&&c.set(l,{startTime:s,endTime:n}),t.options&&Fs(a,t.options,t.errors)})})}visitKeyframes(e,t){let i={type:S.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(fs()),i;let n=1,s=0,o=[],a=!1,l=!1,c=0,d=e.steps.map(j=>{let H=this._makeStyleAst(j,t),J=H.offset!=null?H.offset:Ta(H.styles),K=0;return J!=null&&(s++,K=H.offset=J),l=l||K<0||K>1,a=a||K<c,c=K,o.push(K),H});l&&t.errors.push(gs()),a&&t.errors.push(_s());let h=e.steps.length,w=0;s>0&&s<h?t.errors.push(ys()):s==0&&(w=n/(h-1));let v=h-1,g=t.currentTime,y=t.currentAnimateTimings,T=y.duration;return d.forEach((j,H)=>{let J=w>0?H==v?1:w*H:o[H],K=J*T;t.currentTime=g+y.delay+K,y.duration=K,this._validateStyleAst(j,t),j.offset=J,i.styles.push(j)}),i}visitReference(e,t){return{type:S.Reference,animation:pt(this,be(e.animation),t),options:se(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:S.AnimateChild,options:se(e.options)}}visitAnimateRef(e,t){return{type:S.AnimateRef,animation:this.visitReference(e.animation,t),options:se(e.options)}}visitQuery(e,t){let i=t.currentQuerySelector,n=e.options||{};t.queryCount++,t.currentQuery=e;let[s,o]=Ea(e.selector);t.currentQuerySelector=i.length?i+" "+s:s,ht(t.collectedStyles,t.currentQuerySelector,new Map);let a=pt(this,be(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=i,{type:S.Query,selector:s,limit:n.limit||0,optional:!!n.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:se(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(vs());let i=e.timings==="full"?{duration:0,delay:0,easing:"full"}:Qe(e.timings,t.errors,!0);return{type:S.Stagger,animation:pt(this,be(e.animation),t),timings:i,options:null}}};function Ea(r){let e=!!r.split(/\s*,\s*/).find(t=>t==Xs);return e&&(r=r.replace(Ca,"")),r=r.replace(/@\*/g,We).replace(/@\w+/g,t=>We+"-"+t.slice(1)).replace(/:animating/g,ui),[r,e]}function Ma(r){return r?$({},r):null}var Sn=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(e){this.errors=e}};function Ta(r){if(typeof r=="string")return null;let e=null;if(Array.isArray(r))r.forEach(t=>{if(t instanceof Map&&t.has("offset")){let i=t;e=parseFloat(i.get("offset")),i.delete("offset")}});else if(r instanceof Map&&r.has("offset")){let t=r;e=parseFloat(t.get("offset")),t.delete("offset")}return e}function Oa(r,e){if(r.hasOwnProperty("duration"))return r;if(typeof r=="number"){let s=Qe(r,e).duration;return yn(s,0,"")}let t=r;if(t.split(/\s+/).some(s=>s.charAt(0)=="{"&&s.charAt(1)=="{")){let s=yn(0,0,"");return s.dynamic=!0,s.strValue=t,s}let n=Qe(t,e);return yn(n.duration,n.delay,n.easing)}function se(r){return r?(r=$({},r),r.params&&(r.params=Ma(r.params))):r={},r}function yn(r,e,t){return{duration:r,delay:e,easing:t}}function Ln(r,e,t,i,n,s,o=null,a=!1){return{type:1,element:r,keyframes:e,preStyleProps:t,postStyleProps:i,duration:n,delay:s,totalTime:n+s,easing:o,subTimeline:a}}var Ge=class{_map=new Map;get(e){return this._map.get(e)||[]}append(e,t){let i=this._map.get(e);i||this._map.set(e,i=[]),i.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}},Pa=1,Da=":enter",Aa=new RegExp(Da,"g"),Ra=":leave",Ia=new RegExp(Ra,"g");function $s(r,e,t,i,n,s=new Map,o=new Map,a,l,c=[]){return new Cn().buildKeyframes(r,e,t,i,n,s,o,a,l,c)}var Cn=class{buildKeyframes(e,t,i,n,s,o,a,l,c,d=[]){c=c||new Ge;let h=new En(e,t,c,n,s,d,[]);h.options=l;let w=l.delay?It(l.delay):0;h.currentTimeline.delayNextStep(w),h.currentTimeline.setStyles([o],null,h.errors,l),pt(this,i,h);let v=h.timelines.filter(g=>g.containsAnimation());if(v.length&&a.size){let g;for(let y=v.length-1;y>=0;y--){let T=v[y];if(T.element===t){g=T;break}}g&&!g.allowOnlyTimelineStyles()&&g.setStyles([a],null,h.errors,l)}return v.length?v.map(g=>g.buildKeyframes()):[Ln(t,[],[],[],0,w,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let i=t.subInstructions.get(t.element);if(i){let n=t.createSubContext(e.options),s=t.currentTimeline.currentTime,o=this._visitSubInstructions(i,n,n.options);s!=o&&t.transformIntoNewTimeline(o)}t.previousNode=e}visitAnimateRef(e,t){let i=t.createSubContext(e.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,i),this.visitReference(e.animation,i),t.transformIntoNewTimeline(i.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,i){for(let n of e){let s=n?.delay;if(s){let o=typeof s=="number"?s:It(we(s,n?.params??{},t.errors));i.delayNextStep(o)}}}_visitSubInstructions(e,t,i){let s=t.currentTimeline.currentTime,o=i.duration!=null?It(i.duration):null,a=i.delay!=null?It(i.delay):null;return o!==0&&e.forEach(l=>{let c=t.appendInstructionToTimeline(l,o,a);s=Math.max(s,c.duration+c.delay)}),s}visitReference(e,t){t.updateOptions(e.options,!0),pt(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let i=t.subContextCount,n=t,s=e.options;if(s&&(s.params||s.delay)&&(n=t.createSubContext(s),n.transformIntoNewTimeline(),s.delay!=null)){n.previousNode.type==S.Style&&(n.currentTimeline.snapshotCurrentStyles(),n.previousNode=xi);let o=It(s.delay);n.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>pt(this,o,n)),n.currentTimeline.applyStylesToKeyframe(),n.subContextCount>i&&n.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let i=[],n=t.currentTimeline.currentTime,s=e.options&&e.options.delay?It(e.options.delay):0;e.steps.forEach(o=>{let a=t.createSubContext(e.options);s&&a.delayNextStep(s),pt(this,o,a),n=Math.max(n,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(o=>t.currentTimeline.mergeTimelineCollectedStyles(o)),t.transformIntoNewTimeline(n),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let i=e.strValue,n=t.params?we(i,t.params,t.errors):i;return Qe(n,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let i=t.currentAnimateTimings=this._visitTiming(e.timings,t),n=t.currentTimeline;i.delay&&(t.incrementTime(i.delay),n.snapshotCurrentStyles());let s=e.style;s.type==S.Keyframes?this.visitKeyframes(s,t):(t.incrementTime(i.duration),this.visitStyle(s,t),n.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let i=t.currentTimeline,n=t.currentAnimateTimings;!n&&i.hasCurrentStyleProperties()&&i.forwardFrame();let s=n&&n.easing||e.easing;e.isEmptyStep?i.applyEmptyStep(s):i.setStyles(e.styles,s,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let i=t.currentAnimateTimings,n=t.currentTimeline.duration,s=i.duration,a=t.createSubContext().currentTimeline;a.easing=i.easing,e.styles.forEach(l=>{let c=l.offset||0;a.forwardTime(c*s),a.setStyles(l.styles,l.easing,t.errors,t.options),a.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(n+s),t.previousNode=e}visitQuery(e,t){let i=t.currentTimeline.currentTime,n=e.options||{},s=n.delay?It(n.delay):0;s&&(t.previousNode.type===S.Style||i==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=xi);let o=i,a=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!n.optional,t.errors);t.currentQueryTotal=a.length;let l=null;a.forEach((c,d)=>{t.currentQueryIndex=d;let h=t.createSubContext(e.options,c);s&&h.delayNextStep(s),c===t.element&&(l=h.currentTimeline),pt(this,e.animation,h),h.currentTimeline.applyStylesToKeyframe();let w=h.currentTimeline.currentTime;o=Math.max(o,w)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let i=t.parentContext,n=t.currentTimeline,s=e.timings,o=Math.abs(s.duration),a=o*(t.currentQueryTotal-1),l=o*t.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":l=a-l;break;case"full":l=i.currentStaggerTime;break}let d=t.currentTimeline;l&&d.delayNextStep(l);let h=d.currentTime;pt(this,e.animation,t),t.previousNode=e,i.currentStaggerTime=n.currentTime-h+(n.startTime-i.currentTimeline.startTime)}},xi={},En=class r{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=xi;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(e,t,i,n,s,o,a,l){this._driver=e,this.element=t,this.subInstructions=i,this._enterClassName=n,this._leaveClassName=s,this.errors=o,this.timelines=a,this.currentTimeline=l||new Si(this._driver,t,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let i=e,n=this.options;i.duration!=null&&(n.duration=It(i.duration)),i.delay!=null&&(n.delay=It(i.delay));let s=i.params;if(s){let o=n.params;o||(o=this.options.params={}),Object.keys(s).forEach(a=>{(!t||!o.hasOwnProperty(a))&&(o[a]=we(s[a],o,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let i=e.params={};Object.keys(t).forEach(n=>{i[n]=t[n]})}}return e}createSubContext(e=null,t,i){let n=t||this.element,s=new r(this._driver,n,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(n,i||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=xi,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,i){let n={duration:t??e.duration,delay:this.currentTimeline.currentTime+(i??0)+e.delay,easing:""},s=new Mn(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,n,e.stretchStartingKeyframe);return this.timelines.push(s),n}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,i,n,s,o){let a=[];if(n&&a.push(this.element),e.length>0){e=e.replace(Aa,"."+this._enterClassName),e=e.replace(Ia,"."+this._leaveClassName);let l=i!=1,c=this._driver.query(this.element,e,l);i!==0&&(c=i<0?c.slice(c.length+i,c.length):c.slice(0,i)),a.push(...c)}return!s&&a.length==0&&o.push(bs(t)),a}},Si=class r{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(e,t,i,n){this._driver=e,this.element=t,this.startTime=i,this._elementTimelineStylesLookup=n,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new r(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Pa,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[t,i]of this._globalTimelineStyles)this._backFill.set(t,i||Et),this._currentKeyframe.set(t,Et);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,i,n){t&&this._previousKeyframe.set("easing",t);let s=n&&n.params||{},o=La(e,this._globalTimelineStyles);for(let[a,l]of o){let c=we(l,s,i);this._pendingStyles.set(a,c),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??Et),this._updateStyle(a,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,i)=>{let n=this._styleSummary.get(i);(!n||t.time>n.time)&&this._updateStyle(i,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,i=this._keyframes.size===1&&this.duration===0,n=[];this._keyframes.forEach((a,l)=>{let c=new Map([...this._backFill,...a]);c.forEach((d,h)=>{d===je?e.add(h):d===Et&&t.add(h)}),i||c.set("offset",l/this.duration),n.push(c)});let s=[...e.values()],o=[...t.values()];if(i){let a=n[0],l=new Map(a);a.set("offset",0),l.set("offset",1),n=[a,l]}return Ln(this.element,n,s,o,this.duration,this.startTime,this.easing,!1)}},Mn=class extends Si{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(e,t,i,n,s,o,a=!1){super(e,t,o.delay),this.keyframes=i,this.preStyleProps=n,this.postStyleProps=s,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:i,easing:n}=this.timings;if(this._stretchStartingKeyframe&&t){let s=[],o=i+t,a=t/o,l=new Map(e[0]);l.set("offset",0),s.push(l);let c=new Map(e[0]);c.set("offset",js(a)),s.push(c);let d=e.length-1;for(let h=1;h<=d;h++){let w=new Map(e[h]),v=w.get("offset"),g=t+v*i;w.set("offset",js(g/o)),s.push(w)}i=o,t=0,n="",e=s}return Ln(this.element,e,this.preStyleProps,this.postStyleProps,i,t,n,!0)}};function js(r,e=3){let t=Math.pow(10,e-1);return Math.round(r*t)/t}function La(r,e){let t=new Map,i;return r.forEach(n=>{if(n==="*"){i??=e.keys();for(let s of i)t.set(s,Et)}else for(let[s,o]of n)t.set(s,o)}),t}function Hs(r,e,t,i,n,s,o,a,l,c,d,h,w){return{type:0,element:r,triggerName:e,isRemovalTransition:n,fromState:t,fromStyles:s,toState:i,toStyles:o,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:d,totalTime:h,errors:w}}var vn={},Ci=class{_triggerName;ast;_stateStyles;constructor(e,t,i){this._triggerName=e,this.ast=t,this._stateStyles=i}match(e,t,i,n){return Fa(this.ast.matchers,e,t,i,n)}buildStyles(e,t,i){let n=this._stateStyles.get("*");return e!==void 0&&(n=this._stateStyles.get(e?.toString())||n),n?n.buildStyles(t,i):new Map}build(e,t,i,n,s,o,a,l,c,d){let h=[],w=this.ast.options&&this.ast.options.params||vn,v=a&&a.params||vn,g=this.buildStyles(i,v,h),y=l&&l.params||vn,T=this.buildStyles(n,y,h),j=new Set,H=new Map,J=new Map,K=n==="void",de={params:Zs(y,w),delay:this.ast.options?.delay},Ot=d?[]:$s(e,t,this.ast.animation,s,o,g,T,de,c,h),tt=0;return Ot.forEach(ot=>{tt=Math.max(ot.duration+ot.delay,tt)}),h.length?Hs(t,this._triggerName,i,n,K,g,T,[],[],H,J,tt,h):(Ot.forEach(ot=>{let Ut=ot.element,me=ht(H,Ut,new Set);ot.preStyleProps.forEach(Gt=>me.add(Gt));let er=ht(J,Ut,new Set);ot.postStyleProps.forEach(Gt=>er.add(Gt)),Ut!==t&&j.add(Ut)}),Hs(t,this._triggerName,i,n,K,g,T,Ot,[...j.values()],H,J,tt))}};function Fa(r,e,t,i,n){return r.some(s=>s(e,t,i,n))}function Zs(r,e){let t=$({},e);return Object.entries(r).forEach(([i,n])=>{n!=null&&(t[i]=n)}),t}var Tn=class{styles;defaultParams;normalizer;constructor(e,t,i){this.styles=e,this.defaultParams=t,this.normalizer=i}buildStyles(e,t){let i=new Map,n=Zs(e,this.defaultParams);return this.styles.styles.forEach(s=>{typeof s!="string"&&s.forEach((o,a)=>{o&&(o=we(o,n,t));let l=this.normalizer.normalizePropertyName(a,t);o=this.normalizer.normalizeStyleValue(a,l,o,t),i.set(a,o)})}),i}};function Na(r,e,t){return new On(r,e,t)}var On=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(e,t,i){this.name=e,this.ast=t,this._normalizer=i,t.states.forEach(n=>{let s=n.options&&n.options.params||{};this.states.set(n.name,new Tn(n.style,s,i))}),Ws(this.states,"true","1"),Ws(this.states,"false","0"),t.transitions.forEach(n=>{this.transitionFactories.push(new Ci(e,n,this.states))}),this.fallbackTransition=Ba(e,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,i,n){return this.transitionFactories.find(o=>o.match(e,t,i,n))||null}matchStyles(e,t,i){return this.fallbackTransition.buildStyles(e,t,i)}};function Ba(r,e,t){let i=[(o,a)=>!0],n={type:S.Sequence,steps:[],options:null},s={type:S.Transition,animation:n,matchers:i,options:null,queryCount:0,depCount:0};return new Ci(r,s,e)}function Ws(r,e,t){r.has(e)?r.has(t)||r.set(t,r.get(e)):r.has(t)&&r.set(e,r.get(t))}var za=new Ge,Pn=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i}register(e,t){let i=[],n=[],s=Ys(this._driver,t,i,n);if(i.length)throw Ss(i);this._animations.set(e,s)}_buildPlayer(e,t,i){let n=e.element,s=dn(this._normalizer,e.keyframes,t,i);return this._driver.animate(n,s,e.duration,e.delay,e.easing,[],!0)}create(e,t,i={}){let n=[],s=this._animations.get(e),o,a=new Map;if(s?(o=$s(this._driver,t,s,fn,pi,new Map,new Map,i,za,n),o.forEach(d=>{let h=ht(a,d.element,new Map);d.postStyleProps.forEach(w=>h.set(w,null))})):(n.push(Cs()),o=[]),n.length)throw Es(n);a.forEach((d,h)=>{d.forEach((w,v)=>{d.set(v,this._driver.computeStyle(h,v,Et))})});let l=o.map(d=>{let h=a.get(d.element);return this._buildPlayer(d,new Map,h)}),c=zt(l);return this._playersById.set(e,c),c.onDestroy(()=>this.destroy(e)),this.players.push(c),c}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let i=this.players.indexOf(t);i>=0&&this.players.splice(i,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw Ms(e);return t}listen(e,t,i,n){let s=mi(t,"","","");return di(this._getPlayer(e),i,s,n),()=>{}}command(e,t,i,n){if(i=="register"){this.register(e,n[0]);return}if(i=="create"){let o=n[0]||{};this.create(e,t,o);return}let s=this._getPlayer(e);switch(i){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(n[0]));break;case"destroy":this.destroy(e);break}}},Qs="ng-animate-queued",Va=".ng-animate-queued",bn="ng-animate-disabled",ja=".ng-animate-disabled",Ha="ng-star-inserted",Wa=".ng-star-inserted",Qa=[],Js={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Ua={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Tt="__ng_removed",qe=class{namespaceId;value;options;get params(){return this.options.params}constructor(e,t=""){this.namespaceId=t;let i=e&&e.hasOwnProperty("value"),n=i?e.value:e;if(this.value=qa(n),i){let s=e,{value:o}=s,a=or(s,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let i=this.options.params;Object.keys(t).forEach(n=>{i[n]==null&&(i[n]=t[n])})}}},Ue="void",wn=new qe(Ue),Dn=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(e,t,i){this.id=e,this.hostElement=t,this._engine=i,this._hostClassName="ng-tns-"+e,xt(t,this._hostClassName)}listen(e,t,i,n){if(!this._triggers.has(t))throw Ts(i,t);if(i==null||i.length==0)throw Os(t);if(!Ka(i))throw Ps(i,t);let s=ht(this._elementListeners,e,[]),o={name:t,phase:i,callback:n};s.push(o);let a=ht(this._engine.statesByElement,e,new Map);return a.has(t)||(xt(e,He),xt(e,He+"-"+t),a.set(t,wn)),()=>{this._engine.afterFlush(()=>{let l=s.indexOf(o);l>=0&&s.splice(l,1),this._triggers.has(t)||a.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw Ds(e);return t}trigger(e,t,i,n=!0){let s=this._getTrigger(t),o=new Ke(this.id,t,e),a=this._engine.statesByElement.get(e);a||(xt(e,He),xt(e,He+"-"+t),this._engine.statesByElement.set(e,a=new Map));let l=a.get(t),c=new qe(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),a.set(t,c),l||(l=wn),!(c.value===Ue)&&l.value===c.value){if(!$a(l.params,c.params)){let y=[],T=s.matchStyles(l.value,l.params,y),j=s.matchStyles(c.value,c.params,y);y.length?this._engine.reportError(y):this._engine.afterFlush(()=>{Qt(e,T),Mt(e,j)})}return}let w=ht(this._engine.playersByElement,e,[]);w.forEach(y=>{y.namespaceId==this.id&&y.triggerName==t&&y.queued&&y.destroy()});let v=s.matchTransition(l.value,c.value,e,c.params),g=!1;if(!v){if(!n)return;v=s.fallbackTransition,g=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:v,fromState:l,toState:c,player:o,isFallbackTransition:g}),g||(xt(e,Qs),o.onStart(()=>{ke(e,Qs)})),o.onDone(()=>{let y=this.players.indexOf(o);y>=0&&this.players.splice(y,1);let T=this._engine.playersByElement.get(e);if(T){let j=T.indexOf(o);j>=0&&T.splice(j,1)}}),this.players.push(o),w.push(o),o}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,i)=>{this._elementListeners.set(i,t.filter(n=>n.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(i=>i.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let i=this._engine.driver.query(e,We,!0);i.forEach(n=>{if(n[Tt])return;let s=this._engine.fetchNamespacesByElement(n);s.size?s.forEach(o=>o.triggerLeaveAnimation(n,t,!1,!0)):this.clearElementCache(n)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(n=>this.clearElementCache(n)))}triggerLeaveAnimation(e,t,i,n){let s=this._engine.statesByElement.get(e),o=new Map;if(s){let a=[];if(s.forEach((l,c)=>{if(o.set(c,l.value),this._triggers.has(c)){let d=this.trigger(e,c,Ue,n);d&&a.push(d)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,o),i&&zt(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),i=this._engine.statesByElement.get(e);if(t&&i){let n=new Set;t.forEach(s=>{let o=s.name;if(n.has(o))return;n.add(o);let l=this._triggers.get(o).fallbackTransition,c=i.get(o)||wn,d=new qe(Ue),h=new Ke(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:l,fromState:c,toState:d,player:h,isFallbackTransition:!0})})}}removeNode(e,t){let i=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let n=!1;if(i.totalAnimations){let s=i.players.length?i.playersByQueriedElement.get(e):[];if(s&&s.length)n=!0;else{let o=e;for(;o=o.parentNode;)if(i.statesByElement.get(o)){n=!0;break}}}if(this.prepareLeaveAnimationListeners(e),n)i.markElementAsRemoved(this.id,e,!1,t);else{let s=e[Tt];(!s||s===Js)&&(i.afterFlush(()=>this.clearElementCache(e)),i.destroyInnerAnimations(e),i._onRemovalComplete(e,t))}}insertNode(e,t){xt(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(i=>{let n=i.player;if(n.destroyed)return;let s=i.element,o=this._elementListeners.get(s);o&&o.forEach(a=>{if(a.name==i.triggerName){let l=mi(s,i.triggerName,i.fromState.value,i.toState.value);l._data=e,di(i.player,a.phase,l,a.callback)}}),n.markedForDestroy?this._engine.afterFlush(()=>{n.destroy()}):t.push(i)}),this._queue=[],t.sort((i,n)=>{let s=i.transition.ast.depCount,o=n.transition.ast.depCount;return s==0||o==0?s-o:this._engine.driver.containsElement(i.element,n.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}},An=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(e,t)=>{};_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,i){this.bodyNode=e,this.driver=t,this._normalizer=i}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(i=>{i.queued&&e.push(i)})}),e}createNamespace(e,t){let i=new Dn(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(i,t):(this.newHostElements.set(t,i),this.collectEnterElement(t)),this._namespaceLookup[e]=i}_balanceNamespaceList(e,t){let i=this._namespaceList,n=this.namespacesByHostElement;if(i.length-1>=0){let o=!1,a=this.driver.getParentElement(t);for(;a;){let l=n.get(a);if(l){let c=i.indexOf(l);i.splice(c+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}o||i.unshift(e)}else i.push(e);return n.set(t,e),e}register(e,t){let i=this._namespaceLookup[e];return i||(i=this.createNamespace(e,t)),i}registerTrigger(e,t,i){let n=this._namespaceLookup[e];n&&n.register(t,i)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(e);this.namespacesByHostElement.delete(i.hostElement);let n=this._namespaceList.indexOf(i);n>=0&&this._namespaceList.splice(n,1),i.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,i=this.statesByElement.get(e);if(i){for(let n of i.values())if(n.namespaceId){let s=this._fetchNamespace(n.namespaceId);s&&t.add(s)}}return t}trigger(e,t,i,n){if(vi(t)){let s=this._fetchNamespace(e);if(s)return s.trigger(t,i,n),!0}return!1}insertNode(e,t,i,n){if(!vi(t))return;let s=t[Tt];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;let o=this.collectedLeaveElements.indexOf(t);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){let o=this._fetchNamespace(e);o&&o.insertNode(t,i)}n&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),xt(e,bn)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),ke(e,bn))}removeNode(e,t,i){if(vi(t)){let n=e?this._fetchNamespace(e):null;n?n.removeNode(t,i):this.markElementAsRemoved(e,t,!1,i);let s=this.namespacesByHostElement.get(t);s&&s.id!==e&&s.removeNode(t,i)}else this._onRemovalComplete(t,i)}markElementAsRemoved(e,t,i,n,s){this.collectedLeaveElements.push(t),t[Tt]={namespaceId:e,setForRemoval:n,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,t,i,n,s){return vi(t)?this._fetchNamespace(e).listen(t,i,n,s):()=>{}}_buildInstruction(e,t,i,n,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,i,n,e.fromState.options,e.toState.options,t,s)}destroyInnerAnimations(e){let t=this.driver.query(e,We,!0);t.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,ui,!0),t.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return zt(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[Tt];if(t&&t.setForRemoval){if(e[Tt]=Js,t.namespaceId){this.destroyInnerAnimations(e);let i=this._fetchNamespace(t.namespaceId);i&&i.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(bn)&&this.markElementAsDisabled(e,!1),this.driver.query(e,ja,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,n)=>this._balanceNamespaceList(i,n)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let n=this.collectedEnterElements[i];xt(n,Ha)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{t=this._flushAnimations(i,e)}finally{for(let n=0;n<i.length;n++)i[n]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let n=this.collectedLeaveElements[i];this.processLeaveNode(n)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],t.length?zt(t).onDone(()=>{i.forEach(n=>n())}):i.forEach(n=>n())}}reportError(e){throw As(e)}_flushAnimations(e,t){let i=new Ge,n=[],s=new Map,o=[],a=new Map,l=new Map,c=new Map,d=new Set;this.disabledNodes.forEach(_=>{d.add(_);let b=this.driver.query(_,Va,!0);for(let k=0;k<b.length;k++)d.add(b[k])});let h=this.bodyNode,w=Array.from(this.statesByElement.keys()),v=qs(w,this.collectedEnterElements),g=new Map,y=0;v.forEach((_,b)=>{let k=fn+y++;g.set(b,k),_.forEach(M=>xt(M,k))});let T=[],j=new Set,H=new Set;for(let _=0;_<this.collectedLeaveElements.length;_++){let b=this.collectedLeaveElements[_],k=b[Tt];k&&k.setForRemoval&&(T.push(b),j.add(b),k.hasAnimation?this.driver.query(b,Wa,!0).forEach(M=>j.add(M)):H.add(b))}let J=new Map,K=qs(w,Array.from(j));K.forEach((_,b)=>{let k=pi+y++;J.set(b,k),_.forEach(M=>xt(M,k))}),e.push(()=>{v.forEach((_,b)=>{let k=g.get(b);_.forEach(M=>ke(M,k))}),K.forEach((_,b)=>{let k=J.get(b);_.forEach(M=>ke(M,k))}),T.forEach(_=>{this.processLeaveNode(_)})});let de=[],Ot=[];for(let _=this._namespaceList.length-1;_>=0;_--)this._namespaceList[_].drainQueuedTransitions(t).forEach(k=>{let M=k.player,W=k.element;if(de.push(M),this.collectedEnterElements.length){let Y=W[Tt];if(Y&&Y.setForMove){if(Y.previousTriggersValues&&Y.previousTriggersValues.has(k.triggerName)){let qt=Y.previousTriggersValues.get(k.triggerName),yt=this.statesByElement.get(k.element);if(yt&&yt.has(k.triggerName)){let ti=yt.get(k.triggerName);ti.value=qt,yt.set(k.triggerName,ti)}}M.destroy();return}}let Pt=!h||!this.driver.containsElement(h,W),ut=J.get(W),Vt=g.get(W),I=this._buildInstruction(k,i,Vt,ut,Pt);if(I.errors&&I.errors.length){Ot.push(I);return}if(Pt){M.onStart(()=>Qt(W,I.fromStyles)),M.onDestroy(()=>Mt(W,I.toStyles)),n.push(M);return}if(k.isFallbackTransition){M.onStart(()=>Qt(W,I.fromStyles)),M.onDestroy(()=>Mt(W,I.toStyles)),n.push(M);return}let rr=[];I.timelines.forEach(Y=>{Y.stretchStartingKeyframe=!0,this.disabledNodes.has(Y.element)||rr.push(Y)}),I.timelines=rr,i.append(W,I.timelines);let oa={instruction:I,player:M,element:W};o.push(oa),I.queriedElements.forEach(Y=>ht(a,Y,[]).push(M)),I.preStyleProps.forEach((Y,qt)=>{if(Y.size){let yt=l.get(qt);yt||l.set(qt,yt=new Set),Y.forEach((ti,Qi)=>yt.add(Qi))}}),I.postStyleProps.forEach((Y,qt)=>{let yt=c.get(qt);yt||c.set(qt,yt=new Set),Y.forEach((ti,Qi)=>yt.add(Qi))})});if(Ot.length){let _=[];Ot.forEach(b=>{_.push(Rs(b.triggerName,b.errors))}),de.forEach(b=>b.destroy()),this.reportError(_)}let tt=new Map,ot=new Map;o.forEach(_=>{let b=_.element;i.has(b)&&(ot.set(b,b),this._beforeAnimationBuild(_.player.namespaceId,_.instruction,tt))}),n.forEach(_=>{let b=_.element;this._getPreviousPlayers(b,!1,_.namespaceId,_.triggerName,null).forEach(M=>{ht(tt,b,[]).push(M),M.destroy()})});let Ut=T.filter(_=>Ks(_,l,c)),me=new Map;Gs(me,this.driver,H,c,Et).forEach(_=>{Ks(_,l,c)&&Ut.push(_)});let Gt=new Map;v.forEach((_,b)=>{Gs(Gt,this.driver,new Set(_),l,je)}),Ut.forEach(_=>{let b=me.get(_),k=Gt.get(_);me.set(_,new Map([...b?.entries()??[],...k?.entries()??[]]))});let Wi=[],ir=[],nr={};o.forEach(_=>{let{element:b,player:k,instruction:M}=_;if(i.has(b)){if(d.has(b)){k.onDestroy(()=>Mt(b,M.toStyles)),k.disabled=!0,k.overrideTotalTime(M.totalTime),n.push(k);return}let W=nr;if(ot.size>1){let ut=b,Vt=[];for(;ut=ut.parentNode;){let I=ot.get(ut);if(I){W=I;break}Vt.push(ut)}Vt.forEach(I=>ot.set(I,W))}let Pt=this._buildAnimation(k.namespaceId,M,tt,s,Gt,me);if(k.setRealPlayer(Pt),W===nr)Wi.push(k);else{let ut=this.playersByElement.get(W);ut&&ut.length&&(k.parentPlayer=zt(ut)),n.push(k)}}else Qt(b,M.fromStyles),k.onDestroy(()=>Mt(b,M.toStyles)),ir.push(k),d.has(b)&&n.push(k)}),ir.forEach(_=>{let b=s.get(_.element);if(b&&b.length){let k=zt(b);_.setRealPlayer(k)}}),n.forEach(_=>{_.parentPlayer?_.syncPlayerEvents(_.parentPlayer):_.destroy()});for(let _=0;_<T.length;_++){let b=T[_],k=b[Tt];if(ke(b,pi),k&&k.hasAnimation)continue;let M=[];if(a.size){let Pt=a.get(b);Pt&&Pt.length&&M.push(...Pt);let ut=this.driver.query(b,ui,!0);for(let Vt=0;Vt<ut.length;Vt++){let I=a.get(ut[Vt]);I&&I.length&&M.push(...I)}}let W=M.filter(Pt=>!Pt.destroyed);W.length?Xa(this,b,W):this.processLeaveNode(b)}return T.length=0,Wi.forEach(_=>{this.players.push(_),_.onDone(()=>{_.destroy();let b=this.players.indexOf(_);this.players.splice(b,1)}),_.play()}),Wi}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,i,n,s){let o=[];if(t){let a=this.playersByQueriedElement.get(e);a&&(o=a)}else{let a=this.playersByElement.get(e);if(a){let l=!s||s==Ue;a.forEach(c=>{c.queued||!l&&c.triggerName!=n||o.push(c)})}}return(i||n)&&(o=o.filter(a=>!(i&&i!=a.namespaceId||n&&n!=a.triggerName))),o}_beforeAnimationBuild(e,t,i){let n=t.triggerName,s=t.element,o=t.isRemovalTransition?void 0:e,a=t.isRemovalTransition?void 0:n;for(let l of t.timelines){let c=l.element,d=c!==s,h=ht(i,c,[]);this._getPreviousPlayers(c,d,o,a,t.toState).forEach(v=>{let g=v.getRealPlayer();g.beforeDestroy&&g.beforeDestroy(),v.destroy(),h.push(v)})}Qt(s,t.fromStyles)}_buildAnimation(e,t,i,n,s,o){let a=t.triggerName,l=t.element,c=[],d=new Set,h=new Set,w=t.timelines.map(g=>{let y=g.element;d.add(y);let T=y[Tt];if(T&&T.removedBeforeQueried)return new Bt(g.duration,g.delay);let j=y!==l,H=Ya((i.get(y)||Qa).map(tt=>tt.getRealPlayer())).filter(tt=>{let ot=tt;return ot.element?ot.element===y:!1}),J=s.get(y),K=o.get(y),de=dn(this._normalizer,g.keyframes,J,K),Ot=this._buildPlayer(g,de,H);if(g.subTimeline&&n&&h.add(y),j){let tt=new Ke(e,a,y);tt.setRealPlayer(Ot),c.push(tt)}return Ot});c.forEach(g=>{ht(this.playersByQueriedElement,g.element,[]).push(g),g.onDone(()=>Ga(this.playersByQueriedElement,g.element,g))}),d.forEach(g=>xt(g,gn));let v=zt(w);return v.onDestroy(()=>{d.forEach(g=>ke(g,gn)),Mt(l,t.toStyles)}),h.forEach(g=>{ht(n,g,[]).push(v)}),v}_buildPlayer(e,t,i){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,i):new Bt(e.duration,e.delay)}},Ke=class{namespaceId;triggerName;element;_player=new Bt;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(e,t,i){this.namespaceId=e,this.triggerName=t,this.element=i}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,i)=>{t.forEach(n=>di(e,i,void 0,n))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){ht(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function Ga(r,e,t){let i=r.get(e);if(i){if(i.length){let n=i.indexOf(t);i.splice(n,1)}i.length==0&&r.delete(e)}return i}function qa(r){return r??null}function vi(r){return r&&r.nodeType===1}function Ka(r){return r=="start"||r=="done"}function Us(r,e){let t=r.style.display;return r.style.display=e??"none",t}function Gs(r,e,t,i,n){let s=[];t.forEach(l=>s.push(Us(l)));let o=[];i.forEach((l,c)=>{let d=new Map;l.forEach(h=>{let w=e.computeStyle(c,h,n);d.set(h,w),(!w||w.length==0)&&(c[Tt]=Ua,o.push(c))}),r.set(c,d)});let a=0;return t.forEach(l=>Us(l,s[a++])),o}function qs(r,e){let t=new Map;if(r.forEach(a=>t.set(a,[])),e.length==0)return t;let i=1,n=new Set(e),s=new Map;function o(a){if(!a)return i;let l=s.get(a);if(l)return l;let c=a.parentNode;return t.has(c)?l=c:n.has(c)?l=i:l=o(c),s.set(a,l),l}return e.forEach(a=>{let l=o(a);l!==i&&t.get(l).push(a)}),t}function xt(r,e){r.classList?.add(e)}function ke(r,e){r.classList?.remove(e)}function Xa(r,e,t){zt(t).onDone(()=>r.processLeaveNode(e))}function Ya(r){let e=[];return to(r,e),e}function to(r,e){for(let t=0;t<r.length;t++){let i=r[t];i instanceof ve?to(i.players,e):e.push(i)}}function $a(r,e){let t=Object.keys(r),i=Object.keys(e);if(t.length!=i.length)return!1;for(let n=0;n<t.length;n++){let s=t[n];if(!e.hasOwnProperty(s)||r[s]!==e[s])return!1}return!0}function Ks(r,e,t){let i=t.get(r);if(!i)return!1;let n=e.get(r);return n?i.forEach(s=>n.add(s)):e.set(r,i),t.delete(r),!0}var xe=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(e,t)=>{};constructor(e,t,i){this._driver=t,this._normalizer=i,this._transitionEngine=new An(e.body,t,i),this._timelineEngine=new Pn(e.body,t,i),this._transitionEngine.onRemovalComplete=(n,s)=>this.onRemovalComplete(n,s)}registerTrigger(e,t,i,n,s){let o=e+"-"+n,a=this._triggerCache[o];if(!a){let l=[],c=[],d=Ys(this._driver,s,l,c);if(l.length)throw xs(n,l);a=Na(n,d,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(t,n,a)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,i,n){this._transitionEngine.insertNode(e,t,i,n)}onRemove(e,t,i){this._transitionEngine.removeNode(e,t,i)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,i,n){if(i.charAt(0)=="@"){let[s,o]=mn(i),a=n;this._timelineEngine.command(s,t,o,a)}else this._transitionEngine.trigger(e,t,i,n)}listen(e,t,i,n,s){if(i.charAt(0)=="@"){let[o,a]=mn(i);return this._timelineEngine.listen(o,t,a,s)}return this._transitionEngine.listen(e,t,i,n,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function Za(r,e){let t=null,i=null;return Array.isArray(e)&&e.length?(t=kn(e[0]),e.length>1&&(i=kn(e[e.length-1]))):e instanceof Map&&(t=kn(e)),t||i?new Ja(r,t,i):null}var Ja=(()=>{class r{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(t,i,n){this._element=t,this._startStyles=i,this._endStyles=n;let s=r.initialStylesByElement.get(t);s||r.initialStylesByElement.set(t,s=new Map),this._initialStyles=s}start(){this._state<1&&(this._startStyles&&Mt(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Mt(this._element,this._initialStyles),this._endStyles&&(Mt(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(r.initialStylesByElement.delete(this._element),this._startStyles&&(Qt(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Qt(this._element,this._endStyles),this._endStyles=null),Mt(this._element,this._initialStyles),this._state=3)}}return r})();function kn(r){let e=null;return r.forEach((t,i)=>{tl(i)&&(e=e||new Map,e.set(i,t))}),e}function tl(r){return r==="display"||r==="position"}var Ei=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(e,t,i,n){this.element=e,this.keyframes=t,this.options=i,this._specialStyles=n,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let e=this.keyframes,t=this._triggerWebAnimation(this.element,e,this.options);if(!t)return this._onFinish(),null;this.domPlayer=t,this._finalKeyframe=e.length?e[e.length-1]:new Map;let i=()=>this._onFinish();return t.addEventListener("finish",i),this.onDestroy(()=>{t.removeEventListener("finish",i)}),t}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(i=>{t.push(Object.fromEntries(i))}),t}_triggerWebAnimation(e,t,i){let n=this._convertKeyframesToObject(t);try{return e.animate(n,i)}catch(s){return null}}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){let e=this._buildPlayer();e&&(this.hasStarted()||(this._onStartFns.forEach(t=>t()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),e.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=e*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,n)=>{n!=="offset"&&e.set(n,this._finished?i:gi(this.element,n))}),this.currentSnapshot=e}triggerCallback(e){let t=e==="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},Mi=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}containsElement(e,t){return hn(e,t)}getParentElement(e){return hi(e)}query(e,t,i){return pn(e,t,i)}computeStyle(e,t,i){return gi(e,t)}animate(e,t,i,n,s,o=[]){let a=n==0?"both":"forwards",l={duration:i,delay:n,fill:a};s&&(l.easing=s);let c=new Map,d=o.filter(v=>v instanceof Ei);Ns(i,n)&&d.forEach(v=>{v.currentSnapshot.forEach((g,y)=>c.set(y,g))});let h=Ls(t).map(v=>new Map(v));h=Bs(e,h,c);let w=Za(e,h);return new Ei(e,h,l,w)}};var bi="@",eo="@.disabled",Ti=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(e,t,i,n){this.namespaceId=e,this.delegate=t,this.engine=i,this._onDestroy=n}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,i,n=!0){this.delegate.insertBefore(e,t,i),this.engine.onInsert(this.namespaceId,t,e,n)}removeChild(e,t,i,n){if(n){this.delegate.removeChild(e,t,i,n);return}this.parentNode(t)&&this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,n){this.delegate.setAttribute(e,t,i,n)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,n){this.delegate.setStyle(e,t,i,n)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){t.charAt(0)==bi&&t==eo?this.disableAnimations(e,!!i):this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i,n){return this.delegate.listen(e,t,i,n)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}},Rn=class extends Ti{factory;constructor(e,t,i,n,s){super(t,i,n,s),this.factory=e,this.namespaceId=t}setProperty(e,t,i){t.charAt(0)==bi?t.charAt(1)=="."&&t==eo?(i=i===void 0?!0:!!i,this.disableAnimations(e,i)):this.engine.process(this.namespaceId,e,t.slice(1),i):this.delegate.setProperty(e,t,i)}listen(e,t,i,n){if(t.charAt(0)==bi){let s=el(e),o=t.slice(1),a="";return o.charAt(0)!=bi&&([o,a]=il(o)),this.engine.listen(this.namespaceId,s,o,a,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,i,l)})}return this.delegate.listen(e,t,i,n)}};function el(r){switch(r){case"body":return document.body;case"document":return document;case"window":return window;default:return r}}function il(r){let e=r.indexOf("."),t=r.substring(0,e),i=r.slice(e+1);return[t,i]}var Oi=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(e,t,i){this.delegate=e,this.engine=t,this._zone=i,t.onRemovalComplete=(n,s)=>{s?.removeChild(null,n)}}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(!e||!t?.data?.animation){let c=this._rendererCache,d=c.get(n);if(!d){let h=()=>c.delete(n);d=new Ti("",n,this.engine,h),c.set(n,d)}return d}let s=t.id,o=t.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);let a=c=>{Array.isArray(c)?c.forEach(a):this.engine.registerTrigger(s,o,e,c.name,c)};return t.data.animation.forEach(a),new Rn(this,o,n,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,i){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(i));return}let n=this._animationCallbacksBuffer;n.length==0&&queueMicrotask(()=>{this._zone.run(()=>{n.forEach(s=>{let[o,a]=s;o(a)}),this._animationCallbacksBuffer=[]})}),n.push([t,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(e){this.engine.flush(),this.delegate.componentReplaced?.(e)}};var rl=(()=>{class r extends xe{constructor(t,i,n){super(t,i,n)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||r)(Kt(at),Kt(oe),Kt(ae))};static \u0275prov=F({token:r,factory:r.\u0275fac})}return r})();function sl(){return new wi}function ol(){return new Oi(m(Sr),m(xe),m(Q))}var io=[{provide:ae,useFactory:sl},{provide:xe,useClass:rl},{provide:pe,useFactory:ol}],Fc=[{provide:oe,useClass:In},{provide:Re,useValue:"NoopAnimations"},...io],al=[{provide:oe,useFactory:()=>new Mi},{provide:Re,useFactory:()=>"BrowserAnimations"},...io];function no(){return _r("NgEagerAnimations"),[...al]}var Fn="Service workers are disabled or not supported by this browser",Se=class{serviceWorker;worker;registration;events;constructor(e,t){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=new ei(i=>i.error(new x(5601,!1)));else{let i=null,n=new O;this.worker=new ei(c=>(i!==null&&c.next(i),n.subscribe(d=>c.next(d))));let s=()=>{let{controller:c}=e;c!==null&&(i=c,n.next(i))};e.addEventListener("controllerchange",s),s(),this.registration=this.worker.pipe(De(()=>e.getRegistration().then(c=>{if(!c)throw new x(5601,!1);return c})));let o=new O;this.events=o.asObservable();let a=c=>{let{data:d}=c;d?.type&&o.next(d)};e.addEventListener("message",a),t?.get(Le,null,{optional:!0})?.onDestroy(()=>{e.removeEventListener("controllerchange",s),e.removeEventListener("message",a)})}}postMessage(e,t){return new Promise(i=>{this.worker.pipe(St(1)).subscribe(n=>{n.postMessage($({action:e},t)),i()})})}postMessageWithOperation(e,t,i){let n=this.waitForOperationCompleted(i),s=this.postMessage(e,t);return Promise.all([s,n]).then(([,o])=>o)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let t;return typeof e=="string"?t=i=>i.type===e:t=i=>e.includes(i.type),this.events.pipe(Dt(t))}nextEventOfType(e){return this.eventsOfType(e).pipe(St(1))}waitForOperationCompleted(e){return new Promise((t,i)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(Dt(n=>n.nonce===e),St(1),L(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).subscribe({next:t,error:i})})}get isEnabled(){return!!this.serviceWorker}},so=(()=>{class r{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new O;constructor(t){if(this.sw=t,!t.isEnabled){this.messages=jt,this.notificationClicks=jt,this.notificationCloses=jt,this.pushSubscriptionChanges=jt,this.subscription=jt;return}this.messages=this.sw.eventsOfType("PUSH").pipe(L(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(L(n=>n.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(L(n=>n.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(L(n=>n.data)),this.pushManager=this.sw.registration.pipe(L(n=>n.pushManager));let i=this.pushManager.pipe(De(n=>n.getSubscription()));this.subscription=new ei(n=>{let s=i.subscribe(n),o=this.subscriptionChanges.subscribe(n);return()=>{s.unsubscribe(),o.unsubscribe()}})}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Fn));let i={userVisibleOnly:!0},n=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(n.length));for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return i.applicationServerKey=s,new Promise((o,a)=>{this.pushManager.pipe(De(l=>l.subscribe(i)),St(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),o(l)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Fn));let t=i=>{if(i===null)throw new x(5602,!1);return i.unsubscribe().then(n=>{if(!n)throw new x(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((i,n)=>{this.subscription.pipe(St(1),De(t)).subscribe({next:i,error:n})})}decodeBase64(t){return atob(t)}static \u0275fac=function(i){return new(i||r)(Kt(Se))};static \u0275prov=F({token:r,factory:r.\u0275fac})}return r})(),Ce=(()=>{class r{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=jt,this.unrecoverable=jt;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Fn));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let t=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new x(5601,!1));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static \u0275fac=function(i){return new(i||r)(Kt(Se))};static \u0275prov=F({token:r,factory:r.\u0275fac})}return r})(),oo=new et("");function ll(){let r=m(Xe);if(!("serviceWorker"in navigator&&r.enabled!==!1))return;let e=m(oo),t=m(Q),i=m(Le);t.runOutsideAngular(()=>{let n=navigator.serviceWorker,s=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",s),i.onDestroy(()=>{n.removeEventListener("controllerchange",s)})}),t.runOutsideAngular(()=>{let n,{registrationStrategy:s}=r;if(typeof s=="function")n=new Promise(o=>s().subscribe(()=>o()));else{let[o,...a]=(s||"registerWhenStable:30000").split(":");switch(o){case"registerImmediately":n=Promise.resolve();break;case"registerWithDelay":n=ro(+a[0]||0);break;case"registerWhenStable":n=Promise.race([i.whenStable(),ro(+a[0])]);break;default:throw new x(5600,!1)}}n.then(()=>{i.destroyed||navigator.serviceWorker.register(e,{scope:r.scope,updateViaCache:r.updateViaCache,type:r.type}).catch(o=>console.error(hr(5604,!1)))})})}function ro(r){return new Promise(e=>setTimeout(e,r))}function cl(){let r=m(Xe),e=m(Z),t=!0;return new Se(t&&r.enabled!==!1?navigator.serviceWorker:void 0,e)}var Xe=class{enabled;updateViaCache;type;scope;registrationStrategy};function dl(r,e={}){return pr([so,Ce,{provide:oo,useValue:r},{provide:Xe,useValue:e},{provide:Se,useFactory:cl},yr(ll)])}var ao=(()=>{class r{static register(t,i={}){return{ngModule:r,providers:[dl(t,i)]}}static \u0275fac=function(i){return new(i||r)};static \u0275mod=B({type:r});static \u0275inj=N({providers:[so,Ce]})}return r})();var lo=Nr();function go(r){return new Pi(r.get(ie),r.get(at))}var Pi=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||"",this._previousHTMLStyles.top=e.style.top||"",e.style.left=z(-this._previousScrollPosition.left),e.style.top=z(-this._previousScrollPosition.top),e.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,i=e.style,n=t.style,s=i.scrollBehavior||"",o=n.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,e.classList.remove("cdk-global-scrollblock"),lo&&(i.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),lo&&(i.scrollBehavior=s,n.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,i=this._viewportRuler.getViewportSize();return t.scrollHeight>i.height||t.scrollWidth>i.width}};function _o(r,e){return new Di(r.get(Ve),r.get(Q),r.get(ie),e)}var Di=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,i,n){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=i,this._config=n}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(Dt(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ye=class{enable(){}disable(){}attach(){}};function Nn(r,e){return e.some(t=>{let i=r.bottom<t.top,n=r.top>t.bottom,s=r.right<t.left,o=r.left>t.right;return i||n||s||o})}function co(r,e){return e.some(t=>{let i=r.top<t.top,n=r.bottom>t.bottom,s=r.left<t.left,o=r.right>t.right;return i||n||s||o})}function yo(r,e){return new Ai(r.get(Ve),r.get(ie),r.get(Q),e)}var Ai=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,i,n){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=i,this._config=n}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:n}=this._viewportRuler.getViewportSize();Nn(t,[{width:i,height:n,bottom:n,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},vo=(()=>{class r{_injector=m(Z);constructor(){}noop=()=>new Ye;close=t=>_o(this._injector,t);block=()=>go(this._injector);reposition=t=>yo(this._injector,t);static \u0275fac=function(i){return new(i||r)};static \u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Ee=class{positionStrategy;scrollStrategy=new Ye;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let i of t)e[i]!==void 0&&(this[i]=e[i])}}};var Ri=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var bo=(()=>{class r{_attachedOverlays=[];_document=m(at);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let i=this._attachedOverlays.indexOf(t);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,i,n){return n.observers.length<1?!1:t.eventPredicate?t.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||r)};static \u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),wo=(()=>{class r extends bo{_ngZone=m(Q);_renderer=m(pe).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let i=this._attachedOverlays;for(let n=i.length-1;n>-1;n--){let s=i[n];if(this.canReceiveEvent(s,t,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(n){return(t||(t=bt(r)))(n||r)}})();static \u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),ko=(()=>{class r extends bo{_platform=m(mt);_ngZone=m(Q);_renderer=m(pe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let i=this._document.body,n={capture:!0},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(i,"pointerdown",this._pointerDownListener,n),s.listen(i,"click",this._clickListener,n),s.listen(i,"auxclick",this._clickListener,n),s.listen(i,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=$i(t)};_clickListener=t=>{let i=$i(t),n=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let o=s.length-1;o>-1;o--){let a=s[o],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,l))){if(mo(a.overlayElement,i)||mo(a.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static \u0275fac=(()=>{let t;return function(n){return(t||(t=bt(r)))(n||r)}})();static \u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function mo(r,e){let t=typeof ShadowRoot<"u"&&ShadowRoot,i=e;for(;i;){if(i===r)return!0;i=t&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var xo=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return r})(),So=(()=>{class r{_platform=m(mt);_containerElement;_document=m(at);_styleLoader=m(ze);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||Ji()){let n=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let s=0;s<n.length;s++)n[s].remove()}let i=this._document.createElement("div");i.classList.add(t),Ji()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(xo)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Bn=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,i,n){this._renderer=t,this._ngZone=i,this.element=e.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",n)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents="none",e.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function zn(r){return r&&r.nodeType===1}var Ii=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new O;_attachments=new O;_detachments=new O;_positionStrategy;_scrollStrategy;_locationChanges=Oe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new O;_outsidePointerEvents=new O;_afterNextRenderRef;constructor(e,t,i,n,s,o,a,l,c,d=!1,h,w){this._portalOutlet=e,this._host=t,this._pane=i,this._config=n,this._ngZone=s,this._keyboardDispatcher=o,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=h,this._renderer=w,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Lt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=$($({},this._config),e),this._updateElementSize()}setDirection(e){this._config=sr($({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e=="string"?e:e.value:"ltr"}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=z(this._config.width),e.height=z(this._config.height),e.minWidth=z(this._config.minWidth),e.minHeight=z(this._config.minHeight),e.maxWidth=z(this._config.maxWidth),e.maxHeight=z(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?"":"none"}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;zn(e)?e.after(this._host):e?.type==="parent"?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(e){}}_attachBackdrop(){let e="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Bn(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,i){let n=Zi(t||[]).filter(s=>!!s);n.length&&(i?e.classList.add(...n):e.classList.remove(...n))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=Lt(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}},ho="cdk-overlay-connected-position-bounding-box",hl=/([A-Za-z%]+)$/;function Co(r,e){return new Li(e,r.get(ie),r.get(at),r.get(mt),r.get(So))}var Li=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new O;_resizeSubscription=Oe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,i,n,s){this._viewportRuler=t,this._document=i,this._platform=n,this._overlayContainer=s,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(ho),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,i=this._viewportRect,n=this._containerRect,s=[],o;for(let a of this._preferredPositions){let l=this._getOriginPoint(e,n,a),c=this._getOverlayPoint(l,t,a),d=this._getOverlayFit(c,t,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){s.push({position:a,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!o||o.overlayFit.visibleArea<d.visibleArea)&&(o={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:t})}if(s.length){let a=null,l=-1;for(let c of s){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&le(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ho),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof U?this._origin.nativeElement:zn(this._origin)?this._origin:null}_getOriginPoint(e,t,i){let n;if(i.originX=="center")n=e.left+e.width/2;else{let o=this._isRtl()?e.right:e.left,a=this._isRtl()?e.left:e.right;n=i.originX=="start"?o:a}t.left<0&&(n-=t.left);let s;return i.originY=="center"?s=e.top+e.height/2:s=i.originY=="top"?e.top:e.bottom,t.top<0&&(s-=t.top),{x:n,y:s}}_getOverlayPoint(e,t,i){let n;i.overlayX=="center"?n=-t.width/2:i.overlayX==="start"?n=this._isRtl()?-t.width:0:n=this._isRtl()?0:-t.width;let s;return i.overlayY=="center"?s=-t.height/2:s=i.overlayY=="top"?0:-t.height,{x:e.x+n,y:e.y+s}}_getOverlayFit(e,t,i,n){let s=uo(t),{x:o,y:a}=e,l=this._getOffset(n,"x"),c=this._getOffset(n,"y");l&&(o+=l),c&&(a+=c);let d=0-o,h=o+s.width-i.width,w=0-a,v=a+s.height-i.height,g=this._subtractOverflows(s.width,d,h),y=this._subtractOverflows(s.height,w,v),T=g*y;return{visibleArea:T,isCompletelyWithinViewport:s.width*s.height===T,fitsInViewportVertically:y===s.height,fitsInViewportHorizontally:g==s.width}}_canFitWithFlexibleDimensions(e,t,i){if(this._hasFlexibleDimensions){let n=i.bottom-t.y,s=i.right-t.x,o=po(this._overlayRef.getConfig().minHeight),a=po(this._overlayRef.getConfig().minWidth),l=e.fitsInViewportVertically||o!=null&&o<=n,c=e.fitsInViewportHorizontally||a!=null&&a<=s;return l&&c}return!1}_pushOverlayOnScreen(e,t,i){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let n=uo(t),s=this._viewportRect,o=Math.max(e.x+n.width-s.width,0),a=Math.max(e.y+n.height-s.height,0),l=Math.max(s.top-i.top-e.y,0),c=Math.max(s.left-i.left-e.x,0),d=0,h=0;return n.width<=s.width?d=c||-o:d=e.x<this._getViewportMarginStart()?s.left-i.left-e.x:0,n.height<=s.height?h=l||-a:h=e.y<this._getViewportMarginTop()?s.top-i.top-e.y:0,this._previousPushAmount={x:d,y:h},{x:e.x+d,y:e.y+h}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!pl(this._lastScrollVisibility,i)){let n=new Ri(e,i);this._positionChanges.next(n)}this._lastScrollVisibility=i}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,n=e.overlayY;e.overlayX==="center"?i="center":this._isRtl()?i=e.overlayX==="start"?"right":"left":i=e.overlayX==="start"?"left":"right";for(let s=0;s<t.length;s++)t[s].style.transformOrigin=`${i} ${n}`}_calculateBoundingBoxRect(e,t){let i=this._viewportRect,n=this._isRtl(),s,o,a;if(t.overlayY==="top")o=e.y,s=i.height-o+this._getViewportMarginBottom();else if(t.overlayY==="bottom")a=i.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),s=i.height-a+this._getViewportMarginTop();else{let v=Math.min(i.bottom-e.y+i.top,e.y),g=this._lastBoundingBoxSize.height;s=v*2,o=e.y-v,s>g&&!this._isInitialRender&&!this._growAfterOpen&&(o=e.y-g/2)}let l=t.overlayX==="start"&&!n||t.overlayX==="end"&&n,c=t.overlayX==="end"&&!n||t.overlayX==="start"&&n,d,h,w;if(c)w=i.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=e.x-this._getViewportMarginStart();else if(l)h=e.x,d=i.right-e.x-this._getViewportMarginEnd();else{let v=Math.min(i.right-e.x+i.left,e.x),g=this._lastBoundingBoxSize.width;d=v*2,h=e.x-v,d>g&&!this._isInitialRender&&!this._growAfterOpen&&(h=e.x-g/2)}return{top:o,left:h,bottom:a,right:w,width:d,height:s}}_setBoundingBoxStyles(e,t){let i=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right="auto",n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let s=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;n.width=z(i.width),n.height=z(i.height),n.top=z(i.top)||"auto",n.bottom=z(i.bottom)||"auto",n.left=z(i.left)||"auto",n.right=z(i.right)||"auto",t.overlayX==="center"?n.alignItems="center":n.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?n.justifyContent="center":n.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",s&&(n.maxHeight=z(s)),o&&(n.maxWidth=z(o))}this._lastBoundingBoxSize=i,le(this._boundingBox.style,n)}_resetBoundingBoxStyles(){le(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){le(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(e,t){let i={},n=this._hasExactPosition(),s=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(n){let d=this._viewportRuler.getViewportScrollPosition();le(i,this._getExactOverlayY(t,e,d)),le(i,this._getExactOverlayX(t,e,d))}else i.position="static";let a="",l=this._getOffset(t,"x"),c=this._getOffset(t,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),i.transform=a.trim(),o.maxHeight&&(n?i.maxHeight=z(o.maxHeight):s&&(i.maxHeight="")),o.maxWidth&&(n?i.maxWidth=z(o.maxWidth):s&&(i.maxWidth="")),le(this._pane.style,i)}_getExactOverlayY(e,t,i){let n={top:"",bottom:""},s=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,i)),e.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;n.bottom=`${o-(s.y+this._overlayRect.height)}px`}else n.top=z(s.y);return n}_getExactOverlayX(e,t,i){let n={left:"",right:""},s=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,i));let o;if(this._isRtl()?o=e.overlayX==="end"?"left":"right":o=e.overlayX==="end"?"right":"left",o==="right"){let a=this._document.documentElement.clientWidth;n.right=`${a-(s.x+this._overlayRect.width)}px`}else n.left=z(s.x);return n}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),i=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:co(e,i),isOriginOutsideView:Nn(e,i),isOverlayClipped:co(t,i),isOverlayOutsideView:Nn(t,i)}}_subtractOverflows(e,...t){return t.reduce((i,n)=>i-Math.max(n,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+e-this._getViewportMarginEnd(),bottom:i.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t==="x"?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&Zi(e).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof U)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,i=e.height||0;return{top:e.y,bottom:e.y+i,left:e.x,right:e.x+t,height:i,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();e&&(t.style.display="block");let i=t.getBoundingClientRect();return e&&(t.style.display=""),i}};function le(r,e){for(let t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r}function po(r){if(typeof r!="number"&&r!=null){let[e,t]=r.split(hl);return!t||t==="px"?parseFloat(e):null}return r||null}function uo(r){return{top:Math.floor(r.top),right:Math.floor(r.right),bottom:Math.floor(r.bottom),left:Math.floor(r.left),width:Math.floor(r.width),height:Math.floor(r.height)}}function pl(r,e){return r===e?!0:r.isOriginClipped===e.isOriginClipped&&r.isOriginOutsideView===e.isOriginOutsideView&&r.isOverlayClipped===e.isOverlayClipped&&r.isOverlayOutsideView===e.isOverlayOutsideView}var fo="cdk-global-overlay-wrapper";function Ni(r){return new Fi}var Fi=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(fo),this._isDisposed=!1}top(e=""){return this._bottomOffset="",this._topOffset=e,this._alignItems="flex-start",this}left(e=""){return this._xOffset=e,this._xPosition="left",this}bottom(e=""){return this._topOffset="",this._bottomOffset=e,this._alignItems="flex-end",this}right(e=""){return this._xOffset=e,this._xPosition="right",this}start(e=""){return this._xOffset=e,this._xPosition="start",this}end(e=""){return this._xOffset=e,this._xPosition="end",this}width(e=""){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=""){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=""){return this.left(e),this._xPosition="center",this}centerVertically(e=""){return this.top(e),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:n,height:s,maxWidth:o,maxHeight:a}=i,l=(n==="100%"||n==="100vw")&&(!o||o==="100%"||o==="100vw"),c=(s==="100%"||s==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,h=this._xOffset,w=this._overlayRef.getConfig().direction==="rtl",v="",g="",y="";l?y="flex-start":d==="center"?(y="center",w?g=h:v=h):w?d==="left"||d==="end"?(y="flex-end",v=h):(d==="right"||d==="start")&&(y="flex-start",g=h):d==="left"||d==="start"?(y="flex-start",v=h):(d==="right"||d==="end")&&(y="flex-end",g=h),e.position=this._cssPosition,e.marginLeft=l?"0":v,e.marginTop=c?"0":this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=l?"0":g,t.justifyContent=y,t.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,i=t.style;t.classList.remove(fo),i.justifyContent=i.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position="",this._overlayRef=null,this._isDisposed=!0}},Eo=(()=>{class r{_injector=m(Z);constructor(){}global(){return Ni()}flexibleConnectedTo(t){return Co(this._injector,t)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Mo=new et("OVERLAY_DEFAULT_CONFIG");function Bi(r,e){r.get(ze).load(xo);let t=r.get(So),i=r.get(at),n=r.get(ai),s=r.get(Le),o=r.get(ue),a=r.get(Ie,null,{optional:!0})||r.get(pe).createRenderer(null,null),l=new Ee(e),c=r.get(Mo,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||o.value,"showPopover"in i.body?l.usePopover=e?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),h=i.createElement("div");d.id=n.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),h.appendChild(d),l.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let w=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return zn(w)?w.after(h):w?.type==="parent"?w.element.appendChild(h):t.getContainerElement().appendChild(h),new Ii(new zr(d,s,r),h,d,l,r.get(Q),r.get(wo),i,r.get(xr),r.get(ko),e?.disableAnimations??r.get(Re,null,{optional:!0})==="NoopAnimations",r.get(ur),a)}var To=(()=>{class r{scrollStrategies=m(vo);_positionBuilder=m(Eo);_injector=m(Z);constructor(){}create(t){return Bi(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||r)};static \u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Vn=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=B({type:r});static \u0275inj=N({providers:[To],imports:[q,li,en,en]})}return r})();function ul(r,e){if(r&1){let t=$t();u(0,"div",1)(1,"button",2),gt("click",function(){Xt(t);let n=dt();return Yt(n.action())}),p(2),f()()}if(r&2){let t=dt();C(2),Ct(" ",t.data.action," ")}}var fl=["label"];function gl(r,e){}var _l=Math.pow(2,31)-1,$e=class{_overlayRef;instance;containerInstance;_afterDismissed=new O;_afterOpened=new O;_onAction=new O;_durationTimeoutId;_dismissedByAction=!1;constructor(e,t){this._overlayRef=t,this.containerInstance=e,e._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(e){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(e,_l))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Oo=new et("MatSnackBarData"),Me=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},yl=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=G({type:r,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return r})(),vl=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=G({type:r,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return r})(),bl=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=G({type:r,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return r})(),Po=(()=>{class r{snackBarRef=m($e);data=m(Oo);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,n){i&1&&(u(0,"div",0),p(1),f(),it(2,ul,3,1,"div",1)),i&2&&(C(),Ct(" ",n.data.message,`
`),C(),nt(n.hasAction?2:-1))},dependencies:[Ht,yl,vl,bl],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return r})(),jn="_mat-snack-bar-enter",Hn="_mat-snack-bar-exit",wl=(()=>{class r extends Br{_ngZone=m(Q);_elementRef=m(U);_changeDetectorRef=m(ee);_platform=m(mt);_animationsDisabled=ne();snackBarConfig=m(Me);_document=m(at);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=m(Z);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new O;_onExit=new O;_onEnter=new O;_animationState="void";_live;_label;_role;_liveElementId=m(ai).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),i}attachTemplatePortal(t){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),i}attachDomPortal=t=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),i};onAnimationEnd(t){t===Hn?this._completeExit():t===jn&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Lt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(jn)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(jn)},200)))}exit(){return this._destroyed?lr(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Lt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Hn)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Hn),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(o=>t.classList.add(o)):t.classList.add(i)),this._exposeToModals();let n=this._label.nativeElement,s="mdc-snackbar__label";n.classList.toggle(s,!n.querySelector(`.${s}`))}_exposeToModals(){let t=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<i.length;n++){let s=i[n],o=s.getAttribute("aria-owns");this._trackedModals.add(s),o?o.indexOf(t)===-1&&s.setAttribute("aria-owns",o+" "+t):s.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let i=t.getAttribute("aria-owns");if(i){let n=i.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,i=t.querySelector("[aria-hidden]"),n=t.querySelector("[aria-live]");if(i&&n){let s=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(s=document.activeElement),i.removeAttribute("aria-hidden"),n.appendChild(i),s?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,n){if(i&1&&Ft(sn,7)(fl,7),i&2){let s;A(s=R())&&(n._portalOutlet=s.first),A(s=R())&&(n._label=s.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,n){i&1&&gt("animationend",function(o){return n.onAnimationEnd(o.animationName)})("animationcancel",function(o){return n.onAnimationEnd(o.animationName)}),i&2&&X("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[wt],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,n){i&1&&(u(0,"div",1)(1,"div",2,0)(3,"div",3),Xi(4,gl,0,0,"ng-template",4),f(),P(5,"div"),f()()),i&2&&(C(5),ft("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[sn],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return r})(),kl=new et("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Me}),Wn=(()=>{class r{_live=m(Lr);_injector=m(Z);_breakpointObserver=m(oi);_parentSnackBar=m(r,{optional:!0,skipSelf:!0});_defaultConfig=m(kl);_animationsDisabled=ne();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Po;snackBarContainerComponent=wl;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,i){return this._attach(t,i)}openFromTemplate(t,i){return this._attach(t,i)}open(t,i="",n){let s=$($({},this._defaultConfig),n);return s.data={message:t,action:i},s.announcementMessage===t&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,i){let n=i&&i.viewContainerRef&&i.viewContainerRef.injector,s=Z.create({parent:n||this._injector,providers:[{provide:Me,useValue:i}]}),o=new nn(this.snackBarContainerComponent,i.viewContainerRef,s),a=t.attach(o);return a.instance.snackBarConfig=i,a.instance}_attach(t,i){let n=$($($({},new Me),this._defaultConfig),i),s=this._createOverlay(n),o=this._attachSnackBarContainer(s,n),a=new $e(o,s);if(t instanceof Ki){let l=new rn(t,null,{$implicit:n.data,snackBarRef:a});a.instance=o.attachTemplatePortal(l)}else{let l=this._createInjector(n,a),c=new nn(t,void 0,l),d=o.attachComponentPortal(c);a.instance=d.instance}return this._breakpointObserver.observe(kt.HandsetPortrait).pipe(vt(s.detachments())).subscribe(l=>{s.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(a,n),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(t,i){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let i=new Ee;i.direction=t.direction;let n=Ni(this._injector),s=t.direction==="rtl",o=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!s||t.horizontalPosition==="end"&&s,a=!o&&t.horizontalPosition!=="center";return o?n.left("0"):a?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),i.positionStrategy=n,i.disableAnimations=this._animationsDisabled,Bi(this._injector,i)}_createInjector(t,i){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return Z.create({parent:n||this._injector,providers:[{provide:$e,useValue:i},{provide:Oo,useValue:t.data}]})}static \u0275fac=function(i){return new(i||r)};static \u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Do=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=B({type:r});static \u0275inj=N({providers:[Wn],imports:[Vn,li,Wt,Po,q]})}return r})();var Ze={version:"21.0.1",production:!0};var ji=["*"],Sl=["content"],Cl=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],El=["mat-drawer","mat-drawer-content","*"];function Ml(r,e){if(r&1){let t=$t();u(0,"div",1),gt("click",function(){Xt(t);let n=dt();return Yt(n._onBackdropClicked())}),f()}if(r&2){let t=dt();X("mat-drawer-shown",t._isShowingBackdrop())}}function Tl(r,e){r&1&&(u(0,"mat-drawer-content"),D(1,2),f())}var Ol=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Pl=["mat-sidenav","mat-sidenav-content","*"];function Dl(r,e){if(r&1){let t=$t();u(0,"div",1),gt("click",function(){Xt(t);let n=dt();return Yt(n._onBackdropClicked())}),f()}if(r&2){let t=dt();X("mat-drawer-shown",t._isShowingBackdrop())}}function Al(r,e){r&1&&(u(0,"mat-sidenav-content"),D(1,2),f())}var Rl=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Il=new et("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Gn=new et("MAT_DRAWER_CONTAINER"),zi=(()=>{class r extends fe{_platform=m(mt);_changeDetectorRef=m(ee);_container=m(Un);constructor(){let t=m(U),i=m(Ve),n=m(Q);super(t,i,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:i}=this._container;return t!=null&&t.mode!=="over"&&t.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,n){i&2&&(ni("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),X("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[Rt([{provide:fe,useExisting:r}]),wt],ngContentSelectors:ji,decls:1,vars:0,template:function(i,n){i&1&&(st(),D(0))},encapsulation:2,changeDetection:0})}return r})(),Qn=(()=>{class r{_elementRef=m(U);_focusTrapFactory=m(Ir);_focusMonitor=m(Pr);_platform=m(mt);_ngZone=m(Q);_renderer=m(Ie);_interactivityChecker=m(Rr);_doc=m(at);_container=m(Gn,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=_t(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=_t(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(_t(t))}_opened=Ae(!1);_openedVia=null;_animationStarted=new O;_animationEnd=new O;openedChange=new he(!0);_openedStream=this.openedChange.pipe(Dt(t=>t),L(()=>{}));openedStart=this._animationStarted.pipe(Dt(()=>this.opened),Ui(void 0));_closedStream=this.openedChange.pipe(Dt(t=>!t),L(()=>{}));closedStart=this._animationStarted.pipe(Dt(()=>!this.opened),Ui(void 0));_destroyed=new O;onPositionChanged=new he;_content;_modeChanged=new O;_injector=m(Z);_changeDetectorRef=m(ee);constructor(){this.openedChange.pipe(vt(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,i=this._elementRef.nativeElement;return[t.listen(i,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Fr(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(i,"transitionend",this._handleTransitionEvent),t.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,i){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{s(),o(),t.removeAttribute("tabindex")},s=this._renderer.listen(t,"blur",n),o=this._renderer.listen(t,"mousedown",n)})),t.focus(i)}_focusByCssSelector(t,i){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,i)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Lt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,i){t&&i&&(this._openedVia=i);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,i,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&i&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(s=>{this.openedChange.pipe(St(1)).subscribe(o=>s(o?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,n=i.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,i)),n.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=t=>{let i=this._elementRef.nativeElement;t.target===i&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["mat-drawer"]],viewQuery:function(i,n){if(i&1&&Ft(Sl,5),i&2){let s;A(s=R())&&(n._content=s.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,n){i&2&&(ft("align",null)("tabIndex",n.mode!=="side"?"-1":null),ni("visibility",!n._container&&!n.opened?"hidden":null),X("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ji,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,n){i&1&&(st(),u(0,"div",1,0),D(2),f())},dependencies:[fe],encapsulation:2,changeDetection:0})}return r})(),Un=(()=>{class r{_dir=m(ue,{optional:!0});_element=m(U);_ngZone=m(Q);_changeDetectorRef=m(ee);_animationDisabled=ne();_transitionsEnabled=!1;_allDrawers;_drawers=new fr;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=_t(t)}_autosize=m(Il);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:_t(t)}_backdropOverride=null;backdropClick=new he;_start=null;_end=null;_left=null;_right=null;_destroyed=new O;_doCheckSubject=new O;_contentMargins={left:null,right:null};_contentMarginChanges=new O;get scrollable(){return this._userContent||this._content}_injector=m(Z);constructor(){let t=m(mt),i=m(ie);this._dir?.change.pipe(vt(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(vt(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Gi(this._allDrawers),vt(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Gi(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(cr(10),vt(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,i-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();i+=n,t-=n}}t=t||null,i=i||null,(t!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:t,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(vt(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(vt(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(vt(this._drawers.changes)).subscribe(()=>{Lt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(vt(ii(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let i=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?i.add(n):i.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(i,n,s){if(i&1&&At(s,zi,5)(s,Qn,5),i&2){let o;A(o=R())&&(n._content=o.first),A(o=R())&&(n._allDrawers=o)}},viewQuery:function(i,n){if(i&1&&Ft(zi,5),i&2){let s;A(s=R())&&(n._userContent=s.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,n){i&2&&X("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Rt([{provide:Gn,useExisting:r}])],ngContentSelectors:El,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,n){i&1&&(st(Cl),it(0,Ml,1,2,"div",0),D(1),D(2,1),it(3,Tl,2,0,"mat-drawer-content")),i&2&&(nt(n.hasBackdrop?0:-1),C(3),nt(n._content?-1:3))},dependencies:[zi],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return r})(),Vi=(()=>{class r extends zi{static \u0275fac=(()=>{let t;return function(n){return(t||(t=bt(r)))(n||r)}})();static \u0275cmp=E({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Rt([{provide:fe,useExisting:r}]),wt],ngContentSelectors:ji,decls:1,vars:0,template:function(i,n){i&1&&(st(),D(0))},encapsulation:2,changeDetection:0})}return r})(),qn=(()=>{class r extends Qn{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=_t(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Nt(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Nt(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=bt(r)))(n||r)}})();static \u0275cmp=E({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,n){i&2&&(ft("tabIndex",n.mode!=="side"?"-1":null)("align",null),ni("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),X("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Rt([{provide:Qn,useExisting:r}]),wt],ngContentSelectors:ji,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,n){i&1&&(st(),u(0,"div",1,0),D(2),f())},dependencies:[fe],encapsulation:2,changeDetection:0})}return r})(),Ao=(()=>{class r extends Un{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=bt(r)))(n||r)}})();static \u0275cmp=E({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(i,n,s){if(i&1&&At(s,Vi,5)(s,qn,5),i&2){let o;A(o=R())&&(n._content=o.first),A(o=R())&&(n._allDrawers=o)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,n){i&2&&X("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[Rt([{provide:Gn,useExisting:r},{provide:Un,useExisting:r}]),wt],ngContentSelectors:Pl,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,n){i&1&&(st(Ol),it(0,Dl,1,2,"div",0),D(1),D(2,1),it(3,Al,2,0,"mat-sidenav-content")),i&2&&(nt(n.hasBackdrop?0:-1),C(3),nt(n._content?-1:3))},dependencies:[Vi],styles:[Rl],encapsulation:2,changeDetection:0})}return r})(),Ro=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=B({type:r});static \u0275inj=N({imports:[tn,q,tn]})}return r})();var Te=(()=>{class r{isXSmallScreen;isSmallScreen;isMediumScreen;isLargeScreen;isXLargeScreen;columnCount;isSmallOrSmaller;isLargeOrBigger;breakpointObserver=m(oi);constructor(){this.isXSmallScreen=this.breakpointObserver.observe([kt.XSmall]).pipe(L(t=>t.matches)),this.isSmallScreen=this.breakpointObserver.observe([kt.Small]).pipe(L(t=>t.matches)),this.isMediumScreen=this.breakpointObserver.observe([kt.Medium]).pipe(L(t=>t.matches)),this.isLargeScreen=this.breakpointObserver.observe([kt.Large]).pipe(L(t=>t.matches)),this.isXLargeScreen=this.breakpointObserver.observe([kt.XLarge]).pipe(L(t=>t.matches)),this.columnCount=Pe([this.isXSmallScreen,this.isSmallScreen,this.isMediumScreen,this.isLargeScreen]).pipe(L(([t,i,n,s])=>t?1:i||n?2:s?3:4)),this.isSmallOrSmaller=this.breakpointObserver.observe([kt.XSmall,kt.Small]).pipe(L(t=>t.matches)),this.isLargeOrBigger=this.breakpointObserver.observe([kt.Large,kt.XLarge]).pipe(L(t=>t.matches))}static \u0275fac=function(i){return new(i||r)};static \u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Io=(()=>{class r{swUpdate=m(Ce);snackbar=m(Wn);checkUpdate(){this.swUpdate.versionUpdates.pipe(St(1)).subscribe(t=>{t.type==="VERSION_DETECTED"&&this.snackbar.open("There is a new version of the docs available","Reload page",{horizontalPosition:"center",verticalPosition:"top"}).onAction().pipe(St(1)).subscribe(()=>{this.swUpdate.activateUpdate().then(()=>window.location.reload())})})}static \u0275fac=function(i){return new(i||r)};static \u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Lo=(()=>{class r{ngOnInit(){}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["demo-sponsor"]],decls:23,vars:0,consts:[[1,"wrapper"],[1,"description"],[1,"main"],["href","https://omniboard.dev","target","_blank","rel","noopener"],["controls","","poster","https://omniboard.dev/omniboard-getting-started.png"],["src","https://omniboard.dev/omniboard-getting-started.mp4","type","video/mp4"]],template:function(i,n){i&1&&(ct(0,"h2"),p(1,"Sponsors"),rt(),ct(2,"blockquote"),p(3," Are you currently working in an "),ct(4,"strong"),p(5,"enterprise polyrepo environment"),rt(),p(6,` with many applications and found yourself thinking you could provide so much more value only if you had better overview to plan, track progress and just get things done?
`),rt(),ct(7,"div",0)(8,"div",1)(9,"p",2),p(10," Try "),ct(11,"strong")(12,"a",3),p(13,"Omniboard"),rt(),p(14,", the best tool for lead software engineers and architects"),rt(),p(15," that helps them to get an overview to drive change in the "),ct(16,"strong"),p(17,"polyrepo"),rt(),p(18," environment by querying and tracking all their code bases! "),rt(),ct(19,"p"),p(20," The free plan let's you get a full overview of all your projects with your first dashboard, tracking up to 3 different things! "),rt()(),ct(21,"video",4),vr(22,"source",5),rt()())},styles:["[_nghost-%COMP%]{display:block;padding:40px}h2[_ngcontent-%COMP%]{font-weight:700}blockquote[_ngcontent-%COMP%]{font-size:24px;line-height:48px;margin:40px 100px;font-style:normal}.wrapper[_ngcontent-%COMP%]{display:flex}.wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:50%;padding:20px}.wrapper[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{border-radius:10px}.wrapper[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.wrapper[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{font-size:18px}.responsive[_nghost-%COMP%]   blockquote[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   blockquote[_ngcontent-%COMP%]{font-size:16px;line-height:32px;margin:0 0 20px}.responsive[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{flex-direction:column}.responsive[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}"]})}return r})();var Fl=["*",[["mat-toolbar-row"]]],Nl=["*","mat-toolbar-row"],Bl=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=G({type:r,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return r})(),Fo=(()=>{class r{_elementRef=m(U);_platform=m(mt);_document=m(at);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["mat-toolbar"]],contentQueries:function(i,n,s){if(i&1&&At(s,Bl,5),i&2){let o;A(o=R())&&(n._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,n){i&2&&(ri(n.color?"mat-"+n.color:""),X("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Nl,decls:2,vars:0,template:function(i,n){i&1&&(st(Fl),D(0),D(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return r})();var No=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=B({type:r});static \u0275inj=N({imports:[q]})}return r})();function Vl(r,e){if(r&1){let t=$t();u(0,"button",15),gt("click",function(){Xt(t);let n=dt();return Yt(n.toggle.emit())}),u(1,"mat-icon",16),p(2),f()()}if(r&2){let t=dt();C(2),Ct(" ",t.navOpened()?"close":"menu"," ")}}function jl(r,e){r&1&&P(0,"img",6)}function Hl(r,e){r&1&&(u(0,"a",7),p(1," Follow @tomastrajan "),f())}function Wl(r,e){r&1&&(u(0,"button",17),p(1," HOME "),f(),u(2,"button",18),p(3," DOCS "),f(),u(4,"button",19),p(5," EXAMPLES "),f())}var Vo=(()=>{class r{#t=m(Te);navOpened=wr(!1);toggle=br();isResponsiveLayout=Tr(this.#t.isSmallOrSmaller);static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["demo-toolbar"]],inputs:{navOpened:[1,"navOpened"]},outputs:{toggle:"toggle"},decls:17,vars:5,consts:[["color","primary"],["mat-icon-button","",1,"menu"],[1,"spacer-responsive"],["mat-icon-button","","routerLink","home",1,"logo"],["inline","","svgIcon","logo","aria-hidden","false","aria-label","@angular-extensions/elements"],[1,"project-name"],["alt","downloads per month","src","https://img.shields.io/npm/dm/@angular-extensions/elements"],["href","https://twitter.com/tomastrajan?ref_src=twsrc%5Etfw","data-lang","en","data-show-count","false",1,"twitter-follow-button"],[1,"spacer"],["mat-icon-button","","href","https://github.com/angular-extensions/elements","target","_blank"],["svgIcon","github","aria-hidden","false","aria-label","GitHub"],["mat-icon-button","","href","https://www.npmjs.com/package/@angular-extensions/elements","target","_blank"],["svgIcon","npm","aria-hidden","false","aria-label","npm"],["mat-icon-button","","href","https://twitter.com/tomastrajan","target","_blank"],["svgIcon","twitter","aria-hidden","false","aria-label","Twitter"],["mat-icon-button","",1,"menu",3,"click"],["aria-hidden","false","aria-label","Menu"],["mat-flat-button","","routerLink","home","routerLinkActive","active","color","primary"],["mat-flat-button","","routerLink","docs","routerLinkActive","active","color","primary"],["mat-flat-button","","routerLink","examples","routerLinkActive","active","color","primary"]],template:function(i,n){i&1&&(u(0,"mat-toolbar",0),it(1,Vl,3,1,"button",1),P(2,"span",2),u(3,"a",3),P(4,"mat-icon",4),f(),u(5,"span",5),p(6),f(),it(7,jl,1,0,"img",6),it(8,Hl,2,0,"a",7),P(9,"span",8),it(10,Wl,6,0),u(11,"a",9),P(12,"mat-icon",10),f(),u(13,"a",11),P(14,"mat-icon",12),f(),u(15,"a",13),P(16,"mat-icon",14),f()()),i&2&&(C(),nt(n.isResponsiveLayout()?1:-1),C(5),Ct(" ",n.isResponsiveLayout()?"":"@angular-extensions/","elements "),C(),nt(n.isResponsiveLayout()!==void 0?7:-1),C(),nt(n.isResponsiveLayout()!==void 0?8:-1),C(2),nt(n.isResponsiveLayout()===!1?10:-1))},dependencies:[ge,ci,ye,_e,Wt,Ht,Wr,No,Fo],styles:["mat-toolbar[_ngcontent-%COMP%]{gap:10px}.spacer[_ngcontent-%COMP%]{flex:1 0 auto}.menu[_ngcontent-%COMP%]{margin:0 10px 0 0}a.logo[_ngcontent-%COMP%]{padding:0}a.logo[_ngcontent-%COMP%]     svg{transform:scale(2);vertical-align:-webkit-baseline-middle}a[_ngcontent-%COMP%]:hover{color:#fff}.responsive[_nghost-%COMP%]   .spacer-responsive[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   .spacer-responsive[_ngcontent-%COMP%]{flex:1 0 auto}"]})}return r})();var jo=(()=>{class r{year=new Date().getFullYear();version=Ze.version;static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["demo-footer"]],decls:9,vars:3,consts:[["mat-button","","href","https://twitter.com/tomastrajan","target","_blank",1,"signature",3,"disableRipple"],["src","assets/tomastrajan.webp","alt","Tomas Trajan"]],template:function(i,n){i&1&&(u(0,"span"),p(1),f(),u(2,"a",0)(3,"span"),p(4,"Made with \u2764\uFE0F by "),f(),P(5,"img",1),p(6,` @tomastrajan
`),f(),u(7,"span"),p(8),f()),i&2&&(C(),Ct("\xA9 ",n.year),C(),lt("disableRipple",!0),C(6),Zt(n.version))},dependencies:[Wt,Ht],styles:["[_nghost-%COMP%]{padding:20px;display:flex;align-items:center;text-align:center}[_nghost-%COMP%]   .signature[_ngcontent-%COMP%]{flex:1 0 auto}[_nghost-%COMP%]   .signature[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:36px}.responsive[_nghost-%COMP%]   .signature[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   .signature[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}"]})}return r})();var Ho=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=B({type:r});static \u0275inj=N({imports:[q]})}return r})();var Wo=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=B({type:r});static \u0275inj=N({imports:[q]})}return r})();var Ql=["*"],Ul=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Gl=["unscopedContent"],ql=["text"],Kl=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Xl=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Yl=new et("ListOption"),$l=(()=>{class r{_elementRef=m(U);constructor(){}static \u0275fac=function(i){return new(i||r)};static \u0275dir=G({type:r,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return r})(),Zl=(()=>{class r{_elementRef=m(U);constructor(){}static \u0275fac=function(i){return new(i||r)};static \u0275dir=G({type:r,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return r})(),Jl=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=G({type:r,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return r})(),Qo=(()=>{class r{_listOption=m(Yl,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||r)};static \u0275dir=G({type:r,hostVars:4,hostBindings:function(i,n){i&2&&X("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return r})(),tc=(()=>{class r extends Qo{static \u0275fac=(()=>{let t;return function(n){return(t||(t=bt(r)))(n||r)}})();static \u0275dir=G({type:r,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[wt]})}return r})(),ec=(()=>{class r extends Qo{static \u0275fac=(()=>{let t;return function(n){return(t||(t=bt(r)))(n||r)}})();static \u0275dir=G({type:r,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[wt]})}return r})(),ic=new et("MAT_LIST_CONFIG"),Kn=(()=>{class r{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=_t(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(_t(t))}_disabled=Ae(!1);_defaultOptions=m(ic,{optional:!0});static \u0275fac=function(i){return new(i||r)};static \u0275dir=G({type:r,hostVars:1,hostBindings:function(i,n){i&2&&ft("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return r})(),nc=(()=>{class r{_elementRef=m(U);_ngZone=m(Q);_listBase=m(Kn,{optional:!0});_platform=m(mt);_hostElement;_isButtonElement;_noopAnimations=ne();_avatars;_icons;set lines(t){this._explicitLines=Nt(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=_t(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(_t(t))}_disabled=Ae(!1);_subscriptions=new Oe;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){m(ze).load(Hr);let t=m(jr,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Vr(this,this._ngZone,this._hostElement,this._platform,m(Z)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ii(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let s=this._titles.length===0&&i===1;n.classList.toggle("mdc-list-item__primary-text",s),n.classList.toggle("mdc-list-item__secondary-text",!s)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(i){return new(i||r)};static \u0275dir=G({type:r,contentQueries:function(i,n,s){if(i&1&&At(s,tc,4)(s,ec,4),i&2){let o;A(o=R())&&(n._avatars=o),A(o=R())&&(n._icons=o)}},hostVars:4,hostBindings:function(i,n){i&2&&(ft("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),X("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return r})();var Uo=(()=>{class r extends nc{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=_t(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=bt(r)))(n||r)}})();static \u0275cmp=E({type:r,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,n,s){if(i&1&&At(s,Zl,5)(s,$l,5)(s,Jl,5),i&2){let o;A(o=R())&&(n._lines=o),A(o=R())&&(n._titles=o),A(o=R())&&(n._meta=o)}},viewQuery:function(i,n){if(i&1&&Ft(Gl,5)(ql,5),i&2){let s;A(s=R())&&(n._unscopedContent=s.first),A(s=R())&&(n._itemText=s.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,n){i&2&&(ft("aria-current",n._getAriaCurrent()),X("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[wt],ngContentSelectors:Xl,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,n){i&1&&(st(Kl),D(0),u(1,"span",1),D(2,1),D(3,2),u(4,"span",2,0),gt("cdkObserveContent",function(){return n._updateItemLines(!0)}),D(6,3),f()(),D(7,4),D(8,5),P(9,"div",3))},dependencies:[Dr],encapsulation:2,changeDetection:0})}return r})();var Go=(()=>{class r extends Kn{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(n){return(t||(t=bt(r)))(n||r)}})();static \u0275cmp=E({type:r,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Rt([{provide:Kn,useExisting:r}]),wt],ngContentSelectors:Ql,decls:1,vars:0,template:function(i,n){i&1&&(st(),D(0))},styles:[Ul],encapsulation:2,changeDetection:0})}return r})();var qo=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=B({type:r});static \u0275inj=N({imports:[Ar,Qr,Wo,q,Ho]})}return r})();function sc(r,e){if(r&1&&(u(0,"a",6),p(1),f()),r&2){let t=e.$implicit;lt("routerLink",t.url),C(),Ct(" ",t.label," ")}}function oc(r,e){if(r&1&&Ne(0,sc,2,2,"a",6,Fe),r&2){let t=dt().$implicit;Be(t.children)}}function ac(r,e){if(r&1&&(u(0,"a",5,0)(2,"mat-icon",3),p(3),f(),p(4),f(),it(5,oc,2,0)),r&2){let t=e.$implicit,i=Yi(1);lt("routerLink",t.url),C(3),Zt(t.children&&i.isActive?"expand_more":"chevron_right"),C(),Ct(" ",t.label," "),C(),nt(t.children&&i.isActive?5:-1)}}var lc=[{label:"HOME",url:"home"},{label:"DOCS",url:"docs",children:[{label:"Getting started",url:"docs/getting-started"},{label:"How it works",url:"docs/how-it-works"},{label:"Configuration",url:"docs/configuration"},{label:"Use cases",url:"docs/use-cases"},{label:"Change detection",url:"docs/change-detection"},{label:"API",url:"docs/api"},{label:"FAQ",url:"docs/faq"}]},{label:"EXAMPLES",url:"examples",children:[{label:"Basic",url:"examples/basic"},{label:"Advanced",url:"examples/advanced"},{label:"Dynamic",url:"examples/dynamic"},{label:"Testing",url:"examples/testing"}]},{label:"CONTRIBUTE",url:"contribute"},{label:"CHANGELOG",url:"changelog"}],Ko=(()=>{class r{navigation=lc;static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["demo-navigation"]],decls:9,vars:0,consts:[["rla","routerLinkActive"],[1,"spacer"],["mat-list-item","","href","https://angularexperts.io/blog","target","_blank",1,"image-link"],["matListIcon",""],["src","assets/logo/angular-experts.png","alt","Angular Experts Blog"],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["mat-list-item","","routerLinkActive","active",1,"sub-nav",3,"routerLink"]],template:function(i,n){i&1&&(P(0,"div",1),u(1,"mat-nav-list"),Ne(2,ac,6,4,null,null,Fe),u(4,"a",2)(5,"mat-icon",3),p(6,"chevron_right"),f(),p(7," MADE BY "),P(8,"img",4),f()()),i&2&&(C(2),Be(n.navigation))},dependencies:[ge,ci,ye,_e,qo,Go,Uo],styles:["[_nghost-%COMP%]{position:relative}.spacer[_ngcontent-%COMP%]{min-width:250px}mat-nav-list[_ngcontent-%COMP%]{padding-top:0;position:fixed;top:64px;max-height:calc(100% - 64px);overflow-y:auto;overflow-x:hidden}a[mat-list-item][_ngcontent-%COMP%]{width:250px}a[mat-list-item].sub-nav[_ngcontent-%COMP%]{width:auto;padding-left:32px!important;font-size:1em!important}a[mat-list-item].active[_ngcontent-%COMP%]     .mdc-list-item__primary-text{font-weight:700!important}.image-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:35px;margin:0 0 0 10px}.responsive[_nghost-%COMP%]   mat-nav-list[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   mat-nav-list[_ngcontent-%COMP%]{top:56px;max-height:calc(100% - 56px)}"]})}return r})();var Xo=(()=>{class r{matIconRegistry=m(Yr);domSanitizer=m(Mr);registerIcon(){this.matIconRegistry.addSvgIcon("github",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/logo/github.svg")),this.matIconRegistry.addSvgIcon("npm",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/logo/npm.svg")),this.matIconRegistry.addSvgIcon("twitter",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/logo/twitter.svg")),this.matIconRegistry.addSvgIcon("logo",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/logo/logo.svg"))}static \u0275fac=function(i){return new(i||r)};static \u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var cc=["sidenav"],Yo=(()=>{class r{demoRootCssClass="";sidenav;navOpened;navToggled=new ar(!1);isSmallOrSmaller;sidenavMode;responsiveLayoutService=m(Te);swUpdate=m(Ce);refreshService=m(Io);registerIconService=m(Xo);constructor(){this.registerIconService.registerIcon()}ngOnInit(){this.swUpdate.isEnabled&&this.refreshService.checkUpdate(),this.isSmallOrSmaller=Pe([this.responsiveLayoutService.isSmallOrSmaller,this.responsiveLayoutService.isLargeOrBigger]).pipe(dr(1),mr(([t,i])=>{this.demoRootCssClass="",t&&(this.demoRootCssClass="responsive"),i&&(this.demoRootCssClass="responsive-large")}),L(([t])=>t)),this.navOpened=Pe([this.isSmallOrSmaller,this.navToggled]).pipe(L(([t,i])=>t?i:!0)),this.sidenavMode=this.isSmallOrSmaller.pipe(L(t=>t?"push":"side"))}onNavToggle(){this.navToggled.next(!this.navToggled.value)}onBackdropClick(){this.navToggled.next(!1)}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["demo-root"]],viewQuery:function(i,n){if(i&1&&Ft(cc,5),i&2){let s;A(s=R())&&(n.sidenav=s.first)}},hostVars:2,hostBindings:function(i,n){i&2&&ri(n.demoRootCssClass)},decls:12,vars:12,consts:[[3,"toggle","navOpened"],[3,"backdropClick","hasBackdrop"],["disableClose","",3,"mode","opened"]],template:function(i,n){i&1&&(u(0,"demo-toolbar",0),Jt(1,"async"),gt("toggle",function(){return n.onNavToggle()}),f(),u(2,"mat-sidenav-container",1),Jt(3,"async"),gt("backdropClick",function(){return n.onBackdropClick()}),u(4,"mat-sidenav",2),Jt(5,"async"),Jt(6,"async"),P(7,"demo-navigation"),f(),u(8,"mat-sidenav-content"),P(9,"router-outlet")(10,"demo-sponsor"),f()(),P(11,"demo-footer")),i&2&&(lt("navOpened",te(1,4,n.navOpened)),C(2),lt("hasBackdrop",te(3,6,n.isSmallOrSmaller)),C(2),lt("mode",te(5,8,n.sidenavMode))("opened",te(6,10,n.navOpened)))},dependencies:[Ur,Lo,Vo,jo,Ko,Ro,qn,Ao,Vi,si],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   demo-toolbar[_ngcontent-%COMP%]{z-index:100;position:fixed;width:100%;box-shadow:0 -10px 10px 10px #00000080}[_nghost-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]{padding-top:64px;flex:1 0 auto}[_nghost-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{padding-top:64px}.responsive[_nghost-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]{padding-top:56px}.responsive[_nghost-%COMP%]   mat-sidenav[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{padding-top:56px}"]})}return r})();var $o=(()=>{class r{ngOnInit(){}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["demo-root-error"]],decls:2,vars:0,template:function(i,n){i&1&&(ct(0,"p"),p(1,"Loading failed (root) \u26A0\uFE0F..."),rt())},encapsulation:2})}return r})();var Zo={provide:$r,useValue:{coreLibraryLoader:()=>import("./chunk-PXYTUF3E.js"),languages:{typescript:()=>import("./chunk-UYKVXQ3W.js"),xml:()=>import("./chunk-4CY4MCTH.js")}}};var Hi=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let e=Math.max(...this.tracker);return e>1?this.rowCount+e-1:this.rowCount}positions;update(e,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(e),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(i=>this._trackTile(i))}_trackTile(e){let t=this._findMatchingGap(e.colspan);return this._markTilePosition(t,e),this.columnIndex=t+e.colspan,new Xn(this.rowIndex,t)}_findMatchingGap(e){e>this.tracker.length;let t=-1,i=-1;do{if(this.columnIndex+e>this.tracker.length){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}if(t=this.tracker.indexOf(0,this.columnIndex),t==-1){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}i=this._findGapEndIndex(t),this.columnIndex=t+1}while(i-t<e||i==0);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let e=0;e<this.tracker.length;e++)this.tracker[e]=Math.max(0,this.tracker[e]-1)}_findGapEndIndex(e){for(let t=e+1;t<this.tracker.length;t++)if(this.tracker[t]!=0)return t;return this.tracker.length}_markTilePosition(e,t){for(let i=0;i<t.colspan;i++)this.tracker[e+i]=t.rowspan}},Xn=class{row;col;constructor(e,t){this.row=e,this.col=t}};var Yn=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=B({type:r});static \u0275inj=N({imports:[q]})}return r})();var Jo=["*"];var dc=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`,ta=new et("MAT_GRID_LIST"),tr=(()=>{class r{_element=m(U);_gridList=m(ta,{optional:!0});_rowspan=1;_colspan=1;constructor(){}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(Nt(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(Nt(t))}_setStyle(t,i){this._element.nativeElement.style[t]=i}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(i,n){i&2&&ft("rowspan",n.rowspan)("colspan",n.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:Jo,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(i,n){i&1&&(st(),ct(0,"div",0),D(1),rt())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2,changeDetection:0})}return r})();var mc=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,Je=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(e,t,i,n){this._gutterSize=ea(e),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=i,this._direction=n}getBaseTileSize(e,t){return`(${e}% - (${this._gutterSize} * ${t}))`}getTilePosition(e,t){return t===0?"0":ce(`(${e} + ${this._gutterSize}) * ${t}`)}getTileSize(e,t){return`(${e} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(e,t,i){let n=100/this._cols,s=(this._cols-1)/this._cols;this.setColStyles(e,i,n,s),this.setRowStyles(e,t,n,s)}setColStyles(e,t,i,n){let s=this.getBaseTileSize(i,n),o=this._direction==="rtl"?"right":"left";e._setStyle(o,this.getTilePosition(s,t)),e._setStyle("width",ce(this.getTileSize(s,e.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(e){return`${this._rowspan} * ${this.getTileSize(e,1)}`}getComputedHeight(){return null}},$n=class extends Je{fixedRowHeight;constructor(e){super(),this.fixedRowHeight=e}init(e,t,i,n){super.init(e,t,i,n),this.fixedRowHeight=ea(this.fixedRowHeight),mc.test(this.fixedRowHeight)}setRowStyles(e,t){e._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),e._setStyle("height",ce(this.getTileSize(this.fixedRowHeight,e.rowspan)))}getComputedHeight(){return["height",ce(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["height",null]),e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}},Zn=class extends Je{rowHeightRatio;baseTileHeight;constructor(e){super(),this._parseRatio(e)}setRowStyles(e,t,i,n){let s=i/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(s,n),e._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),e._setStyle("paddingTop",ce(this.getTileSize(this.baseTileHeight,e.rowspan)))}getComputedHeight(){return["paddingBottom",ce(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["paddingBottom",null]),e._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(e){let t=e.split(":");t.length,this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}},Jn=class extends Je{setRowStyles(e,t){let i=100/this._rowspan,n=(this._rows-1)/this._rows,s=this.getBaseTileSize(i,n);e._setStyle("top",this.getTilePosition(s,t)),e._setStyle("height",ce(this.getTileSize(s,e.rowspan)))}reset(e){e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}};function ce(r){return`calc(${r})`}function ea(r){return r.match(/([A-Za-z%]+)$/)?r:`${r}px`}var hc="fit",ia=(()=>{class r{_element=m(U);_dir=m(ue,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;constructor(){}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(Nt(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`}get rowHeight(){return this._rowHeight}set rowHeight(t){let i=`${t??""}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),t===hc?this._tileStyler=new Jn:t&&t.indexOf(":")>-1?this._tileStyler=new Zn(t):this._tileStyler=new $n(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new Hi);let t=this._tileCoordinator,i=this._tiles.filter(s=>!s._gridList||s._gridList===this),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,n),i.forEach((s,o)=>{let a=t.positions[o];this._tileStyler.setStyle(s,a.row,a.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["mat-grid-list"]],contentQueries:function(i,n,s){if(i&1&&At(s,tr,5),i&2){let o;A(o=R())&&(n._tiles=o)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(i,n){i&2&&ft("cols",n.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[Rt([{provide:ta,useExisting:r}])],ngContentSelectors:Jo,decls:2,vars:0,template:function(i,n){i&1&&(st(),ct(0,"div"),D(1),rt())},styles:[dc],encapsulation:2,changeDetection:0})}return r})(),na=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=B({type:r});static \u0275inj=N({imports:[Yn,q,Yn]})}return r})();function uc(r,e){if(r&1&&(u(0,"mat-grid-tile")(1,"mat-card")(2,"mat-card-header")(3,"div",12)(4,"mat-icon",13),p(5),f()(),u(6,"mat-card-title"),p(7),f(),P(8,"mat-card-subtitle",14),f()()()),r&2){let t=e.$implicit;C(5),Zt(t.icon),C(2),Zt(t.title),C(),lt("innerHTML",t.subtitle,gr)}}var ra=(()=>{class r{columnCount;features=gc;codeExampleComponent=fc;responsiveLayoutService=m(Te);ngOnInit(){this.columnCount=this.responsiveLayoutService.columnCount}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=E({type:r,selectors:[["demo-home"]],decls:74,vars:4,consts:[[1,"intro"],["inline","","svgIcon","logo","aria-hidden","false","aria-label","@angular-extensions/elements"],[1,"cta"],["mat-flat-button","","color","accent","routerLink","/docs/getting-started"],["mat-flat-button","","color","primary","routerLink","/docs/how-it-works"],["mat-flat-button","","color","warn","routerLink","/examples"],["mat-stroked-button","","href","https://medium.com/@tomastrajan/the-best-way-to-lazy-load-angular-elements-97a51a5c2007","target","_blank"],["mat-stroked-button","","href","https://www.youtube.com/watch?v=X__jkPGYRUs","target","_blank"],["mat-stroked-button","","href","https://open.spotify.com/episode/2PI6K8sdxeBweDw3JtmJX8","target","_blank"],["color","accent"],["language","typescript",3,"highlight"],["rowHeight","150","gutterSize","18",3,"cols"],["mat-card-avatar",""],["color","primary"],[3,"innerHTML"]],template:function(i,n){i&1&&(u(0,"div",0),P(1,"mat-icon",1),u(2,"h1"),p(3,"ANGULAR EXTENSIONS ELEMENTS"),f(),u(4,"h3"),p(5," The easiest way to lazy load Angular Elements or any other web components "),P(6,"br"),p(7," in your Angular application! "),f()(),u(8,"div",2)(9,"button",3),p(10," Get started "),f(),u(11,"button",4),p(12," Learn more "),f(),u(13,"button",5),p(14," Explore examples "),f()(),u(15,"div",2)(16,"a",6)(17,"mat-icon"),p(18,"book"),f(),p(19," Read blog post "),f(),u(20,"a",7)(21,"mat-icon"),p(22,"play_circle_outline"),f(),p(23," Watch presentation "),f(),u(24,"a",8)(25,"mat-icon"),p(26,"audiotrack"),f(),p(27," Listen to podcast "),f()(),u(28,"h2"),p(29,"Quickstart"),f(),u(30,"ol")(31,"li"),p(32," Install "),u(33,"code",9),p(34,"npm i @angular-extensions/elements"),f()(),u(35,"li"),p(36," Add "),u(37,"code"),p(38," import { LazyElementDirective } from '@angular-extensions/elements'; "),f()(),u(39,"li"),p(40," Append "),u(41,"code"),p(42,"LazyElementDirective"),f(),p(43," to the "),u(44,"code"),p(45,"imports: []"),f(),p(46," of your "),u(47,"code"),p(48,"MyOrgComponent"),f()(),u(49,"li"),p(50," Add new "),u(51,"code"),p(52,"schemas: []"),f(),p(53," property with "),u(54,"code"),p(55,"CUSTOM_ELEMENTS_SCHEMA"),f(),p(56," value to "),u(57,"code"),p(58,"@Component"),f(),p(59," decorator of your "),u(60,"code"),p(61,"MyOrgComponent"),f()(),u(62,"li"),p(63," Use "),u(64,"code"),p(65,"*axLazyElement"),f(),p(66," directive on an element you wish to load and pass in the url of the element bundle "),P(67,"pre",10),f()(),u(68,"h2"),p(69,"Features"),f(),u(70,"mat-grid-list",11),Jt(71,"async"),Ne(72,uc,9,3,"mat-grid-tile",null,Fe),f()),i&2&&(C(67),lt("highlight",n.codeExampleComponent),C(3),lt("cols",te(71,2,n.columnCount)),C(2),Be(n.features))},dependencies:[ge,Wt,Ht,ye,_e,ss,ts,rs,ns,is,es,na,ia,tr,Jr,Zr,si],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:40px}[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]{text-align:center;margin:0 0 40px}[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]:before{font-family:Lato;z-index:-1;content:"";position:absolute;top:0;left:0;right:0;height:500px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23e53531' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23cf2525' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d7313e' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23a91d28' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23c92541' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b1203a' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23c6214e' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23981638' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23a01547' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23a0113d' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23b70e4f' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23890c46' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");background-position:top center;background-repeat:no-repeat;background-size:1600px 500px;transform:rotate(180deg);overflow:hidden}[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3em;line-height:1.1em;font-weight:700}[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.8em;line-height:1.3em;opacity:.5;margin:0}[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:170px;margin:0 0 50px}[_nghost-%COMP%]   .cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   .cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:5px;padding:5px 35px}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5em;text-transform:uppercase;margin:50px 0 15px}[_nghost-%COMP%]   pre[_ngcontent-%COMP%]{margin:20px 0 0;line-height:1.3em}[_nghost-%COMP%]   ol[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   mat-grid-list[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{width:calc(100% - 4px)}[_nghost-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:16px}[_nghost-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:10px}[_nghost-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{height:80px;overflow:hidden;text-overflow:ellipsis}[_nghost-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px}.responsive[_nghost-%COMP%]   .cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   .cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .responsive[_nghost-%COMP%]   .cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   .cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%}.responsive[_nghost-%COMP%]   code[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   code[_ngcontent-%COMP%]{white-space:normal;padding:0 8px 1px}`]})}return r})(),fc=`@Component({
  selector: 'my-org-component',
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <!-- will be lazy loaded and uses standard Angular template bindings -->
    <some-element
      *axLazyElement="elementUrl"
      [data]="data"
      (dataChange)="handleChange($event)"
    >
    </some-element>
  \`
})
export class MyOrgComponent {
  elementUrl = 'https://your-org.com/elements/some-element.js';

  data: SomeData;

  handleChange(change: Partial<SomeData>) {
    // ...
  }
}
`,gc=[{title:"Lightweight",subtitle:"The library is extremely lightweight, all in all it is less than 5kb (or 1.5kb gzipped), epic!",icon:"cloud_queue"},{title:"Simple API",subtitle:"Just grab <code>*axLazyElement</code> directive set the element bundle url and you are ready to go!",icon:"sentiment_satisfied_alt"},{title:"Loading indicator support",subtitle:"Define optional custom loading indicator to be displayed before the element is ready...",icon:"hourglass_empty"},{title:"Lazy loading",subtitle:"This is as lazy as it gets! The request to load a bundle will be triggered only when the element appears in the template of some component!",icon:"schedule"},{title:"Angular template binding",subtitle:"Use standard Angular template binding for both properties and events as you would for any other Angular component!",icon:"view_compact"},{title:"Performance",subtitle:"Elements are loaded just once, even if you use it on multiple pages or even multiple time on single page!",icon:"offline_bolt"},{title:"Flexible",subtitle:"Support cutting edge web APIs and standards like ES Modules and Import Maps!",icon:"code"},{title:"Supports everything",subtitle:"Angular elements, web components, basically any custom element you can get your hands on...",icon:"category"}];var sa=[{path:"home",component:ra},{path:"docs",loadChildren:()=>import("./chunk-NT4WLWEA.js")},{path:"examples",loadChildren:()=>import("./chunk-BSYZG3NE.js")},{path:"contribute",loadChildren:()=>import("./chunk-FAC7JL5K.js")},{path:"changelog",loadChildren:()=>import("./chunk-7VN6HNFR.js")},{path:"**",redirectTo:"home"}];Ze.production&&void 0;Cr(Yo,{providers:[kr(),no(),Er(),{provide:Gr,useValue:{useHash:!0,scrollOffset:[0,100]}},qr(sa,Kr({scrollPositionRestoration:"enabled",anchorScrolling:"enabled"}),Xr({onSameUrlNavigation:"reload"})),Or({rootOptions:{errorComponent:$o}}),Zo,qi(ao.register("ngsw-worker.js",{enabled:Ze.production})),qi(Do)]}).catch(r=>console.error(r));
