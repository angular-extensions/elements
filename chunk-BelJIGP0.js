import{Cn as fe,F as H,I as H1,Tn as gI,dr as ue,sr,un as ae,wn as g$1}from"./chunk-C4_gtfUn.js";var i=new WeakMap;var h=(()=>{class e{_appRef;_injector=g$1(fe);_environmentInjector=g$1(ae);load(t){let n=this._appRef=this._appRef||this._injector.get(sr),o=i.get(n);o||(o={loaders:new Set,refs:[]},i.set(n,o),n.onDestroy(()=>{i.get(n)?.refs.forEach(y=>y.destroy()),i.delete(n)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(H1(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||e)};static ɵprov=ue({token:e,factory:e.ɵfac})}return e})();var j=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=gI({type:e,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return e})();var a;function g(){if(a===void 0&&(a=null,typeof window<`u`)){let e=window;if(e.trustedTypes!==void 0)try{a=e.trustedTypes.createPolicy(`angular#components`,{createHTML:r=>r})}catch(r){console.error(r)}}return a}function w(e){return g()?.createHTML(e)||e}function k(e,r,t){e.innerHTML=w(t.sanitize(H.HTML,r)||``)}export{w as i,j as n,k as r,h as t};