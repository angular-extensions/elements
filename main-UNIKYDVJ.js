import{a as y$1,i as x$3,n as B$2,r as w$1}from"./chunk-B03JrT7s.js";import{$ as KI,$n as pw,$t as Xr$1,A as Fm,An as ia$1,Bn as kh,C as EI,Cn as fe$3,Cr as zm,Ct as QI,D as Et$2,Dn as gg,Dt as Rh,E as Er,En as gd,F as H$1,Fn as je$2,Ft as Tg,G as In$2,Gn as mn$2,Gt as Ve$3,H as II,Ht as Uu,It as Th,J as JI,Jn as nw,Jt as Vu,Kn as mr$1,L as Hh,Ln as k1,Lt as Tw,M as GI,Mn as ir$1,Mt as St$1,Nn as jD,Nt as TC,O as F1,On as hs$1,Ot as Rm,P as Gm,Pn as jI,Pt as TT,Q as KC,Qn as pt$2,Qt as Xn$2,R as Hi$1,Rn as kB,Rt as Ty,S as Dn$2,Sn as ew,T as Em,Tn as gI,Tr as zw,Tt as RB,U as Ih,Un as lm,Ut as Uw,V as I$3,Vn as km,Vt as Ur,W as Ii$2,Wn as lt$2,X as Jl$1,Xn as pe$3,Xt as Xc,Y as Ji$1,Yn as pD,Yt as W$3,Z as Js$1,Zn as ps$1,Zt as Xf,_ as Bw,_n as bT,_t as Ot$1,a as $u,an as Zh,ar as ra$1,b as De$1,bn as eg,br as z$1,c as Ah,cn as _h,cr as st$2,ct as Mt$2,d as B1,dn as ag,dr as ue$1,dt as OB,en as Yl$1,er as qh,et as Kd,f as BI,fn as al$1,fr as v$2,g as Bn$2,gr as xd,gt as On$2,h as Bm,hn as bC,hr as vs$1,ht as Om,in as Zg,ir as r2,it as LI,j as Fu,jn as ie$1,k as FI,kn as hv,kt as S$3,l as Am,lr as ta$1,lt as Nr,m as Bh,mn as av,mr as vr$1,mt as Oh,nn as Z$3,nr as qu,nt as Kt$1,o as A$2,on as Zm,or as sm,ot as Mh,p as Be$1,pn as ar$1,pr as vm,pt as OE,q as J$4,qn as ni$1,qt as Vm,r as $o$1,rn as ZI,rr as qv,s as Ad,sn as Zt$3,sr as sr$1,st as Mm,tn as Yv,tr as qo$1,tt as Ke$2,u as Aw,un as ae$3,ut as O1,v as C$2,vn as cv,vr as xm,w as Eh,wn as g,wr as zu,wt as Qt$3,x as Dm,xn as eu,y as CT,yn as ea$1,zn as kI,zt as Uh}from"./chunk-C4_gtfUn.js";import{i as w$2,t as h$4}from"./chunk-BelJIGP0.js";import{A as xe$3,C as q$5,D as w$3,E as vt$2,S as pn$2,T as v$3,_ as j$3,a as K$3,c as Qe$2,d as X$3,f as Xe$2,g as it$2,h as ie$2,i as J$5,l as Rn$2,m as _i$2,n as He$3,o as Mn$2,p as Ze$2,r as I$4,s as On$3,t as Et$3,u as Tn$2,v as ke$4,w as se$3,x as pi$2}from"./chunk-DkaxpU-d.js";import{n as m$3,t as I$5}from"./chunk-B2P_CqHU.js";var n=(()=>{class e{_listeners=[];notify(t,r){for(let o of this._listeners)o(t,r)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(r=>t!==r)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(r){return new(r||e)};static ɵprov=ue$1({token:e,factory:e.ɵfac})}return e})();var Ce$2=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty(`disabled`,t)}static ɵfac=function(i){return new(i||n)(In$2(Xr$1),In$2(Dn$2))};static ɵdir=Fu({type:n})}return n})();var Ge$1=(()=>{class n extends Ce$2{static ɵfac=(()=>{let t;return function(r){return(t||(t=Xf(n)))(r||n)}})();static ɵdir=Fu({type:n,features:[Th]})}return n})();var Ve$2=new I$3(``);var Ue$2={provide:Ve$2,useExisting:ni$1(()=>De),multi:!0};function He$2(){let n=pt$2()?pt$2().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var Le$1=new I$3(``);var De=(()=>{class n extends Ce$2{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode??=!He$2()}writeValue(t){let i=t??``;this.setProperty(`value`,i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static ɵfac=function(i){return new(i||n)(In$2(Xr$1),In$2(Dn$2),In$2(Le$1,8))};static ɵdir=Fu({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&Bh(`input`,function(l){return r._handleInput(l.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(l){return r._compositionEnd(l.target.value)})},standalone:!1,features:[Aw([Ue$2]),Th]})}return n})();function X$2(n){return n==null||Y$3(n)===0}function Y$3(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var be$2=new I$3(``);var We$1=new I$3(``);var qe$2=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var L=class{static min(e){return $e$3(e)}static max(e){return ze$2(e)}static required(e){return Ae$1(e)}static requiredTrue(e){return Ze$1(e)}static email(e){return Xe$1(e)}static minLength(e){return Ye$1(e)}static maxLength(e){return Ke$1(e)}static pattern(e){return Je(e)}static nullValidator(e){return S$2()}static compose(e){return Se$2(e)}static composeAsync(e){return Oe$2(e)}};function $e$3(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function ze$2(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function Ae$1(n){return X$2(n.value)?{required:!0}:null}function Ze$1(n){return n.value===!0?null:{required:!0}}function Xe$1(n){return X$2(n.value)||qe$2.test(n.value)?null:{email:!0}}function Ye$1(n){return e=>{let t=e.value?.length??Y$3(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function Ke$1(n){return e=>{let t=e.value?.length??Y$3(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function Je(n){if(!n)return S$2;let e,t;return typeof n==`string`?(t=``,n.charAt(0)!==`^`&&(t+=`^`),t+=n,n.charAt(n.length-1)!==`$`&&(t+=`$`),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(X$2(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function S$2(n){return null}function Me$1(n){return n!=null}function Ee$2(n){return ps$1(n)?je$2(n):n}function Fe$2(n){let e={};return n.forEach(t=>{e=t!=null?w$1(w$1({},e),t):e}),Object.keys(e).length===0?null:e}function we$3(n,e){return e.map(t=>t(n))}function Qe$1(n){return!n.validate}function Ne(n){return n.map(e=>Qe$1(e)?e:t=>e.validate(t))}function Se$2(n){if(!n)return null;let e=n.filter(Me$1);return e.length==0?null:function(t){return Fe$2(we$3(t,e))}}function Ie$2(n){return n!=null?Se$2(Ne(n)):null}function Oe$2(n){if(!n)return null;let e=n.filter(Me$1);return e.length==0?null:function(t){return Am(we$3(t,e).map(Ee$2)).pipe(ie$1(Fe$2))}}function xe$2(n){return n!=null?Oe$2(Ne(n)):null}function he$2(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function et$2(n){return n._rawValidators}function tt$1(n){return n._rawAsyncValidators}function W$2(n){return n?Array.isArray(n)?n:[n]:[]}function I$2(n,e){return Array.isArray(n)?n.includes(e):n===e}function fe$2(n,e){let t=W$2(e);return W$2(n).forEach(r=>{I$2(t,r)||t.push(r)}),t}function ge$2(n,e){return W$2(e).filter(t=>!I$2(n,t))}var O=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ie$2(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=xe$2(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}};var q$4=class extends O{name;get formDirective(){return null}get path(){return null}};var C$1=`VALID`;var N$2=`INVALID`;var p=`PENDING`;var V$2=`DISABLED`;var f$2=class{};var x$2=class extends f$2{value;source;constructor(e,t){super(),this.value=e,this.source=t}};var D=class extends f$2{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}};var b$3=class extends f$2{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}};var m$2=class extends f$2{status;source;constructor(e,t){super(),this.status=e,this.source=t}};var A$1=class extends f$2{source;constructor(e){super(),this.source=e}};function nt$3(n){return(R(n)?n.validators:n)||null}function it$1(n){return Array.isArray(n)?Ie$2(n):n||null}function rt$1(n,e){return(R(e)?e.asyncValidators:n)||null}function st$1(n){return Array.isArray(n)?xe$2(n):n||null}function R(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}var $=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Ii$2(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return ar$1(this.statusReactive)}set status(e){ar$1(()=>this.statusReactive.set(e))}_status=Uw(()=>this.statusReactive());statusReactive=Ii$2(void 0);get valid(){return this.status===C$1}get invalid(){return this.status===N$2}get pending(){return this.status===p}get disabled(){return this.status===V$2}get enabled(){return this.status!==V$2}errors;get pristine(){return ar$1(this.pristineReactive)}set pristine(e){ar$1(()=>this.pristineReactive.set(e))}_pristine=Uw(()=>this.pristineReactive());pristineReactive=Ii$2(!0);get dirty(){return!this.pristine}get touched(){return ar$1(this.touchedReactive)}set touched(e){ar$1(()=>this.touchedReactive.set(e))}_touched=Uw(()=>this.touchedReactive());touchedReactive=Ii$2(!1);get untouched(){return!this.touched}_events=new J$4;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(fe$2(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(fe$2(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ge$2(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ge$2(e,this._rawAsyncValidators))}hasValidator(e){return I$2(this._rawValidators,e)}hasAsyncValidator(e){return I$2(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(x$3(w$1({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new b$3(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),e.onlySelf||this._parent?._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new b$3(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(x$3(w$1({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new D(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new D(!0,i))}markAsPending(e={}){this.status=p;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new m$2(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(x$3(w$1({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=V$2,this.errors=null,this._forEachChild(r=>{r.disable(x$3(w$1({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new x$2(this.value,i)),this._events.next(new m$2(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(x$3(w$1({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=C$1,this._forEachChild(i=>{i.enable(x$3(w$1({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(x$3(w$1({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===C$1||this.status===p)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new x$2(this.value,t)),this._events.next(new m$2(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(x$3(w$1({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?V$2:C$1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=p,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let i=Ee$2(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(`.`)),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i?.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new m$2(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new st$2,this.statusChanges=new st$2}_calculateStatus(){return this._allControlsDisabled()?V$2:this.errors?N$2:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(p)?p:this._anyControlsHaveStatus(N$2)?N$2:C$1}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,e.onlySelf||this._parent?._updatePristine(e,t),r&&this._events.next(new D(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new b$3(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){R(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=it$1(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=st$1(this._rawAsyncValidators)}_updateHasRequiredValidator(){ar$1(()=>this._hasRequired.set(this.hasValidator(L.required)))}};function ot$2(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function at$2(n,e,t,i){switch(t){case`name`:n.setAttribute(e,t,i);break;case`disabled`:case`readonly`:case`required`:i?n.setAttribute(e,t,``):n.removeAttribute(e,t);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?n.setAttribute(e,t,i.toString()):n.removeAttribute(e,t);break}}var z=class{kind;context;control;message;constructor({kind:e,context:t,control:i}){this.kind=e,this.context=t,this.control=i}};var lt$1=(()=>{class n{_validator=S$2;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):S$2,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static ɵfac=function(i){return new(i||n)};static ɵdir=Fu({type:n,features:[Xc]})}return n})();var ut$1={provide:be$2,useExisting:ni$1(()=>Re$2),multi:!0};var Re$2=(()=>{class n extends lt$1{required;inputName=`required`;normalizeInput=TC;createValidator=t=>Ae$1;enabled(t){return t}static ɵfac=(()=>{let t;return function(r){return(t||(t=Xf(n)))(r||n)}})();static ɵdir=Fu({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&Ah(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[Aw([ut$1]),Th]})}return n})();var dt$2=new I$3(``);var Pe$1=new I$3(``,{factory:()=>K$2});var K$2=`always`;function ct$1(n,e){return[...e.path,n]}function pe$2(n,e,t=K$2){ft$1(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t===`always`)&&e.valueAccessor.setDisabledState?.(n.disabled),gt$1(n,e),mt$2(n,e),pt$1(n,e),ht$1(n,e)}function me$2(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function ht$1(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function ft$1(n,e){let t=et$2(n);e.validator!==null?n.setValidators(he$2(t,e.validator)):typeof t==`function`&&n.setValidators([t]);let i=tt$1(n);e.asyncValidator!==null?n.setAsyncValidators(he$2(i,e.asyncValidator)):typeof i==`function`&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();me$2(e._rawValidators,r),me$2(e._rawAsyncValidators,r)}function gt$1(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&ke$3(n,e)})}function pt$1(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&ke$3(n,e),n.updateOn!==`submit`&&n.markAsTouched()})}function ke$3(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function mt$2(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function vt$1(n,e){if(!n.hasOwnProperty(`model`))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function _t(n){return Object.getPrototypeOf(n.constructor)===Ge$1}function yt$2(n,e){if(!e)return null;let t,i,r;return e.forEach(s=>{s.constructor===De?t=s:_t(s)?i=s:r=s}),r||i||t||null}var Ct$3={provide:dt$2,useFactory:()=>{let n=g(v$1,{self:!0});return{setParseErrors:e=>{n.setParseErrorSource(e)},set onReset(e){n.onReset=e}}}};var v$1=class extends O{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof A$1&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=yt$2(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,t,i){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=i,this.injector?.get(pe$3)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(gg);if(!this.control||!e)return;let t=e.markForCheck.bind(e);this.subscription=new Z$3,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof A$1&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),e.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=ot$2(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Re$2))}ngControlUpdate(e,t){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,e.setCustomControlModelInput(i.value)),this.bindControlProperty(e,r,`touched`,i.touched),this.bindControlProperty(e,r,`dirty`,i.dirty),this.bindControlProperty(e,r,`valid`,i.valid),this.bindControlProperty(e,r,`invalid`,i.invalid),this.bindControlProperty(e,r,`pending`,i.pending),this.bindControlProperty(e,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(e,r,`required`,this.isRequired);let s=i.errors;if(r.errors!==s){r.errors=s;let l=this._convertErrors(s);e.setInputOnDirectives(`errors`,l)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(e,t,i,r){if(t[i]===r)return;t[i]=r;let s=e.setInputOnDirectives(i,r);this.isNativeFormElement&&!s&&(i===`disabled`||i===`required`)&&this.renderer&&at$2(this.renderer,e.nativeElement,i,r)}_convertErrors(e){if(e===null)return[];let t=this.control;return Object.entries(e).map(([i,r])=>new z({context:r,kind:i,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,i=Uw(()=>{let r=e();return r.length===0?null:r.reduce((s,l)=>(s[l.kind]=l,s),{})});this.parseErrorsValidator=(()=>t).bind(this),Kd(()=>{t=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}};var Z$2=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var $t$1=(()=>{class n extends Z$2{constructor(t){super(t)}static ɵfac=function(i){return new(i||n)(In$2(v$1,2))};static ɵdir=Fu({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(i,r){i&2&&Zh(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[Th]})}return n})();function ve$2(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function _e$1(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var Vt$3=class extends ${defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(nt$3(t),rt$1(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(t)&&(t.nonNullable||t.initialValueIsDefault)&&(_e$1(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){ar$1(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new A$1(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ve$2(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ve$2(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){_e$1(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Dt$1={provide:v$1,useExisting:ni$1(()=>bt$1)};var ye$2=Promise.resolve();var bt$1=(()=>{class n extends v$1{_changeDetectorRef;callSetDisabledState;control=new Vt$3;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name=``;isDisabled;model;options;update=new st$2;constructor(t,i,r,s,l,Te,je,Be){super(je,Be,s),this._changeDetectorRef=l,this.callSetDisabledState=Te,this._parent=t,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||`name`in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}`isDisabled`in t&&this._updateDisabled(t),vt$1(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(t){super.ngControlCreate(t)}ɵngControlUpdate(t){super.ngControlUpdate(t,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,pe$2(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(t){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,pe$2(this.control,this,t))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ye$2.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&TC(i);ye$2.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ct$1(t,this._parent):[t]}static ɵfac=function(i){return new(i||n)(In$2(q$4,9),In$2(be$2,10),In$2(We$1,10),In$2(Ve$2,10),In$2(gg,8),In$2(Pe$1,8),In$2(fe$3,8),In$2(Xr$1,8))};static ɵdir=Fu({type:n,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[Aw([Dt$1,Ct$3]),Th,Xc,II(null)]})}return n})();var At$2=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({})}return n})();var Zt$2=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Pe$1,useValue:t.callSetDisabledState??K$2}]}}static ɵfac=function(i){return new(i||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({imports:[At$2]})}return n})();function U$1(n){n||(n=g(pe$3));let e=new S$3(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(Gm(e))}function T$1(n,e){let t=e?.injector??g(fe$3),o=new vr$1(1),c=Kd(()=>{let r;try{r=n()}catch(i){ar$1(()=>o.error(i));return}ar$1(()=>o.next(r))},{injector:t,manualCleanup:!0});return t.get(pe$3).onDestroy(()=>{c.destroy(),o.complete()}),o.asObservable()}function F$1(n,e){let o=!e?.manualCleanup?e?.injector?.get(pe$3)??g(pe$3):null,c=h$3(e?.equal),r;e?.requireSync?r=Ii$2({kind:0},{equal:c}):r=Ii$2({kind:1,value:e?.initialValue},{equal:c});let i,v=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{r.set({kind:2,error:s}),i?.()},complete:()=>{i?.()}});if(e?.requireSync&&r().kind===0)throw new v$2(601,!1);return i=o?.onDestroy(v.unsubscribe.bind(v)),Uw(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new v$2(601,!1)}},{equal:e?.equal})}function h$3(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}var h$2=(function(n){return n[n.NORMAL=0]=`NORMAL`,n[n.NEGATED=1]=`NEGATED`,n[n.INVERTED=2]=`INVERTED`,n})(h$2||{});var E;var f$1;function ne(){if(f$1==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return f$1=!1,f$1;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)f$1=!0;else{let n=Element.prototype.scrollTo;n?f$1=!/\{\s*\[native code\]\s*\}/.test(n.toString()):f$1=!1}}return f$1}function m$1(){if(typeof document!=`object`||!document)return h$2.NORMAL;if(E==null){let n=document.createElement(`div`),i=n.style;n.dir=`rtl`,i.width=`1px`,i.overflow=`auto`,i.visibility=`hidden`,i.pointerEvents=`none`,i.position=`absolute`;let e=document.createElement(`div`),t=e.style;t.width=`2px`,t.height=`1px`,n.appendChild(e),document.body.appendChild(n),E=h$2.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,E=n.scrollLeft===0?h$2.NEGATED:h$2.INVERTED),n.remove()}return E}function Re$1(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}function Ie$1(n){return n==null?``:typeof n==`string`?n:`${n}px`}function Fe$1(n){return n!=null&&`${n}`!=`false`}var d=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(d||{});var B$1=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=d.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}};var ie=ke$4({passive:!0,capture:!0});var N$1=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ie)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,ie)))}_delegateEventHandler=i=>{let e=I$4(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}};var re={enterDuration:225,exitDuration:150};var fe$1=800;var oe$3=ke$4({passive:!0,capture:!0});var se$2=[`mousedown`,`touchstart`];var ae$2=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var pe$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=gI({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})();var j$2=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new N$1;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=w$3(t)),o&&o.get(h$4).load(pe$1)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=w$1(w$1({},re),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||_e(i,e,r),b=i-r.left,ce=e-r.top,w=o.enterDuration,l=document.createElement(`div`);l.classList.add(`mat-ripple-element`),l.style.left=`${b-a}px`,l.style.top=`${ce-a}px`,l.style.height=`${a*2}px`,l.style.width=`${a*2}px`,t.color!=null&&(l.style.backgroundColor=t.color),l.style.transitionDuration=`${w}ms`,this._containerElement.appendChild(l);let U=window.getComputedStyle(l),de=U.transitionProperty,W=U.transitionDuration,D=de===`none`||W===`0s`||W===`0s, 0s`||r.width===0&&r.height===0,u=new B$1(this,l,t,D);l.style.transform=`scale3d(1, 1, 1)`,u.state=d.FADING_IN,t.persistent||(this._mostRecentTransientRipple=u);let S=null;return!D&&(w||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let H=()=>{S&&(S.fallbackTimer=null),clearTimeout(G),this._finishRippleTransition(u)},x=()=>this._destroyRipple(u),G=setTimeout(x,w+100);l.addEventListener(`transitionend`,H),l.addEventListener(`transitioncancel`,x),S={onTransitionEnd:H,onTransitionCancel:x,fallbackTimer:G}}),this._activeRipples.set(u,S),(D||!w)&&this._finishRippleTransition(u),u}fadeOutRipple(i){if(i.state===d.FADING_OUT||i.state===d.HIDDEN)return;let e=i.element,t=w$1(w$1({},re),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity=`0`,i.state=d.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=w$3(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,se$2.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type===`mousedown`?this._onMousedown(i):i.type===`touchstart`?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ae$2.forEach(e=>{this._triggerElement.addEventListener(e,this,oe$3)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===d.FADING_IN?this._startFadeOutTransition(i):i.state===d.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=d.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=d.HIDDEN,e!==null&&(i.element.removeEventListener(`transitionend`,e.onTransitionEnd),i.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=q$5(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+fe$1;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!J$5(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===d.VISIBLE||i.config.terminateOnPointerUp&&i.state===d.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(se$2.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(ae$2.forEach(e=>i.removeEventListener(e,this,oe$3)),this._pointerUpEventsRegistered=!1))}};function _e(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var ge$1=new I$3(`mat-ripple-global-options`);var $e$2=(()=>{class n{_elementRef=g(Dn$2);_animationsDisabled=On$3();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=g(z$1),t=g(v$3),r=g(ge$1,{optional:!0}),o=g(fe$3);this._globalOptions=r||{},this._rippleRenderer=new j$2(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:w$1(w$1(w$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,t,w$1(w$1({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,w$1(w$1({},this.rippleConfig),e))}static ɵfac=function(t){return new(t||n)};static ɵdir=Fu({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(t,r){t&2&&Zh(`mat-ripple-unbounded`,r.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var me$1=20;var ve$1=(()=>{class n{_ngZone=g(z$1);_platform=g(v$3);_renderer=g(mn$2).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new J$4;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=me$1){return this._platform.isBrowser?new S$3(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(km(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):$o$1()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Et$2(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&t.push(o)}),t}_targetContainsElement(e,t){let r=w$3(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static ɵfac=function(t){return new(t||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac})}return n})();var Yt$2=(()=>{class n{elementRef=g(Dn$2);scrollDispatcher=g(ve$1);ngZone=g(z$1);dir=g(m$3,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new J$4;_renderer=g(Xr$1);_cleanupScroll;_elementScrolled=new J$4;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value==`rtl`;e.left??=r?e.end:e.start,e.right??=r?e.start:e.end,e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&m$1()!=h$2.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),m$1()==h$2.INVERTED?e.left=e.right:m$1()==h$2.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;ne()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t=`left`,r=`right`,o=this.elementRef.nativeElement;if(e==`top`)return o.scrollTop;if(e==`bottom`)return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value==`rtl`;return e==`start`?e=a?r:t:e==`end`&&(e=a?t:r),a&&m$1()==h$2.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&m$1()==h$2.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static ɵfac=function(t){return new(t||n)};static ɵdir=Fu({type:n,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return n})();var we$2=20;var qt$2=(()=>{class n{_platform=g(v$3);_listeners;_viewportSize=null;_change=new J$4;_document=g(W$3);constructor(){let e=g(z$1),t=g(mn$2).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen(`window`,`resize`,r),t.listen(`window`,`orientationchange`,r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect();return{top:-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,left:-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0}}change(e=we$2){return e>0?this._change.pipe(km(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac})}return n})();var le$3=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({})}return n})();var Qt$2=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({imports:[I$5,le$3,I$5,le$3]})}return n})();var S$1=new I$3(`LAZY_ELEMENT_CONFIGS`);var N=new I$3(`LAZY_ELEMENT_ROOT_OPTIONS`);var w=new I$3(`LAZY_ELEMENT_ROOT_GUARD`);var Tt$1=new I$3(`LAZY_ELEMENTS_REGISTRY`,{providedIn:`root`,factory:()=>new Map});var J$3;function It$1(){if(J$3===void 0&&(J$3=null,typeof window<`u`)){let n=window;n.trustedTypes!==void 0&&(J$3=n.trustedTypes.createPolicy(`angular-extensions#elements`,{createScriptURL:r=>r}))}return J$3}var b$2=class n{static controller=new AbortController;#o=g(De$1);#r=g(Tt$1);options=g(N,{optional:!0})??{};configs=[];ngOnDestroy(){n.controller?.abort(),n.controller=null}addConfigs(r){r.forEach(t=>{this.getElementConfig(t.tag)||(t.isAdded=!0,this.configs.push(t),(t.preload!==void 0?t.preload:this.options.preload)&&this.loadElement(t.url,t.tag,t.isModule,t.importMap,t.hooks))})}getElementConfig(r){return this.configs.find(t=>t.tag===r)}preload(r){let t=this.configs;r&&(t=this.configs.filter(e=>r.includes(e.tag))),t.forEach(e=>this.loadElement(e.url,e.tag,e.isModule,e.importMap,e.hooks))}loadElement(r,t,e,a,c){return B$2(this,null,function*(){let d=this.getElementConfig(t);if(e??=d?.isModule??this.options.isModule,a??=d?.importMap??this.options.importMap,r||(a?r=t:r=d.url),!this.#i(r)){let rt=function(){s.removeEventListener(`load`,p),s.removeEventListener(`error`,ot)},m=this.#n(r),u=c?.beforeLoad??d?.hooks?.beforeLoad??this.options?.hooks?.beforeLoad,l=c?.afterLoad??d?.hooks?.afterLoad??this.options?.hooks?.afterLoad;a&&(r=yield this.#e(r));let s=document.createElement(`script`);e&&(s.type=`module`),s.src=It$1()?.createScriptURL(r)??r;let p=()=>{l?this.#t(l,t).then(m.resolve).catch(m.reject):m.resolve(),rt()},ot=it=>{m.reject(it),rt(),this.#o.handleError(it)};s.addEventListener(`load`,p,{signal:n.controller?.signal}),s.addEventListener(`error`,ot,{signal:n.controller?.signal}),u?this.#t(u,t).then(()=>document.body.appendChild(s)).catch(m.reject):document.body.appendChild(s)}return this.#r.get(this.#a(r))})}#n(r){let t;return this.#r.set(this.#a(r),new Promise((e,a)=>t={resolve:e,reject:a})),t}#i(r){return this.#r.has(this.#a(r))}#a(r){return r.replace(/https?:\/\//,``)}#t(r,t){try{return Promise.resolve(r(t))}catch(e){return Promise.reject(e)}}#e(r){return B$2(this,null,function*(){let t=window.System;return t&&(yield t.prepareImport(),r=t.resolve(r)),r})}static ɵfac=function(t){return new(t||n)};static ɵprov=A$2({token:n,factory:n.ɵfac,providedIn:`root`})};function jt(n){return`provideAxLazyElements() multiple execution guard`}function ce$2(n={}){return Mt$2([{provide:S$1,useValue:n&&n.elementConfigs?n.elementConfigs:[],multi:!0},{provide:N,useValue:n.rootOptions?n.rootOptions:{}},{provide:w,useFactory:jt,deps:[[N,new av,new cv]]},{multi:!0,provide:St$1,useValue:()=>{g(w,{optional:!0});let r=g(b$2),t=g(S$1,{optional:!0});t&&t.length&&t.filter(e=>e.some(a=>!a.isAdded)).forEach(e=>r.addConfigs(e))}}])}function le$2(n=[]){return Mt$2([{provide:S$1,useValue:n&&n.length?n:[],multi:!0},{multi:!0,provide:St$1,useValue:()=>{g(w,{optional:!0});let r=g(b$2),t=g(S$1,{optional:!0});t&&t.length&&t.filter(e=>e.some(a=>!a.isAdded)).forEach(e=>r.addConfigs(e))}}])}var ye$1=(()=>{class n{#o=g(Ur);#r=g(pe$3);#n=g(ir$1);#i=g(gg);#a=g(Xn$2);#t=g(b$2);url=F1(null,{alias:`axLazyElement`});loadingTemplateRef=F1(null,{alias:`axLazyElementLoadingTemplate`});errorTemplateRef=F1(null,{alias:`axLazyElementErrorTemplate`});isModule=F1(void 0,{alias:`axLazyElementModule`});importMap=F1(!1,{alias:`axLazyElementImportMap`});loadingSuccess=F1(void 0,{alias:`axLazyElementLoadingSuccess`});loadingError=F1(void 0,{alias:`axLazyElementLoadingError`});#e=null;#m=T$1(this.url);ngOnInit(){OB(this.#o)||this.#s()}destroyEmbeddedView(){this.#e&&!this.#e.destroyed&&(this.#e.detach(),this.#e.destroy(),this.#e=null)}#s(){let t=this.#a,e=t._declarationTContainer?t._declarationTContainer.tagName||t._declarationTContainer.value:t._def.element.#a.nodes[0].element.name,a=this.#t.getElementConfig(e)||{},c=this.#t.options,d=a.loadingComponent||c.loadingComponent;this.#m.pipe(Yl$1(0,lm),qo$1(m=>{let u=this.loadingTemplateRef();return u?this.#n.createEmbeddedView(u):d&&this.#n.createComponent(d),je$2(this.#t.loadElement(m,e,this.isModule(),this.importMap(),a?.hooks)).pipe(Js$1(l=>{this.loadingError()?.(l),this.#n.clear();let s=a.errorComponent||c.errorComponent,p=this.errorTemplateRef();return p?(this.#n.createEmbeddedView(p),this.#i.markForCheck()):s&&(this.#n.createComponent(s),this.#i.markForCheck()),Zt$3}))}),Jl$1(()=>this.loadingSuccess()?.()),Be$1(()=>customElements.whenDefined(e)),U$1(this.#r)).subscribe({next:()=>{this.#n.clear(),this.#e=this.#n.createEmbeddedView(this.#a),this.#i.markForCheck()}})}static ɵfac=function(e){return new(e||n)};static ɵdir=Fu({type:n,selectors:[[``,`axLazyElement`,``]],inputs:{url:[1,`axLazyElement`,`url`],loadingTemplateRef:[1,`axLazyElementLoadingTemplate`,`loadingTemplateRef`],errorTemplateRef:[1,`axLazyElementErrorTemplate`,`errorTemplateRef`],isModule:[1,`axLazyElementModule`,`isModule`],importMap:[1,`axLazyElementImportMap`,`importMap`],loadingSuccess:[1,`axLazyElementLoadingSuccess`,`loadingSuccess`],loadingError:[1,`axLazyElementLoadingError`,`loadingError`]}})}return n})();var ke$2=(()=>{class n{tag=F1(null,{alias:`axLazyElementDynamic`});url=F1(null,{alias:`axLazyElementDynamicUrl`});loadingTemplateRef=F1(null,{alias:`axLazyElementDynamicLoadingTemplate`});errorTemplateRef=F1(null,{alias:`axLazyElementDynamicErrorTemplate`});isModule=F1(!1,{alias:`axLazyElementDynamicModule`});importMap=F1(!1,{alias:`axLazyElementDynamicImportMap`});loadingSuccess=F1(void 0,{alias:`axLazyElementLoadingSuccess`});loadingError=F1(void 0,{alias:`axLazyElementLoadingError`});#o=null;#r=g(pe$3);#n=g(Ur);#i=g(W$3);#a=g(Xr$1);#t=g(ir$1);#e=g(gg);#m=g(Xn$2);#s=g(b$2);ngOnInit(){if(OB(this.#n))return;let e=this.tag(),a=this.#s.getElementConfig(e)||{},c=this.#s.options,d=a.loadingComponent||c.loadingComponent,m=this.loadingTemplateRef();m?this.#t.createEmbeddedView(m):d&&this.#t.createComponent(d),je$2(this.#s.loadElement(this.url(),e,this.isModule(),this.importMap(),a?.hooks)).pipe(Be$1(()=>customElements.whenDefined(e)),U$1(this.#r)).subscribe({next:()=>{this.loadingSuccess()?.(),this.#t.clear();let l=this.#a.createElement;this.#a.createElement=(s,p)=>(s===`ax-lazy-element`&&(s=e),this.#i.createElement(s)),this.#o=this.#t.createEmbeddedView(this.#m),this.#a.createElement=l,this.#e.markForCheck()},error:l=>{this.loadingError()?.(l);let s=a.errorComponent||c.errorComponent;this.#t.clear();let p=this.errorTemplateRef();p?(this.#t.createEmbeddedView(p),this.#e.markForCheck()):s&&(this.#t.createComponent(s),this.#e.markForCheck())}})}destroyEmbeddedView(){this.#o&&!this.#o.destroyed&&(this.#o.detach(),this.#o.destroy(),this.#o=null)}static ɵfac=function(e){return new(e||n)};static ɵdir=Fu({type:n,selectors:[[``,`axLazyElementDynamic`,``]],inputs:{tag:[1,`axLazyElementDynamic`,`tag`],url:[1,`axLazyElementDynamicUrl`,`url`],loadingTemplateRef:[1,`axLazyElementDynamicLoadingTemplate`,`loadingTemplateRef`],errorTemplateRef:[1,`axLazyElementDynamicErrorTemplate`,`errorTemplateRef`],isModule:[1,`axLazyElementDynamicModule`,`isModule`],importMap:[1,`axLazyElementDynamicImportMap`,`importMap`],loadingSuccess:[1,`axLazyElementLoadingSuccess`,`loadingSuccess`],loadingError:[1,`axLazyElementLoadingError`,`loadingError`]}})}return n})();var Bt$1={capture:!0};var Vt$2=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var et$1=`mat-ripple-loader-uninitialized`;var nt$2=`mat-ripple-loader-class-name`;var At$1=`mat-ripple-loader-centered`;var q$3=`mat-ripple-loader-disabled`;var Ct$2=(()=>{class n{_document=g(W$3);_animationsDisabled=On$3();_globalRippleOptions=g(ge$1,{optional:!0});_platform=g(v$3);_ngZone=g(z$1);_injector=g(fe$3);_eventCleanups;_hosts=new Map;constructor(){let t=g(mn$2).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Vt$2.map(e=>t.listen(this._document,e,this._onInteraction,Bt$1)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(et$1,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(nt$2))&&t.setAttribute(nt$2,e.className||``),e.centered&&t.setAttribute(At$1,``),e.disabled&&t.setAttribute(q$3,``)}setDisabled(t,e){let a=this._hosts.get(t);a?(a.target.rippleDisabled=e,!e&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(t))):e?t.setAttribute(q$3,``):t.removeAttribute(q$3)}_onInteraction=t=>{let e=I$4(t);if(e instanceof HTMLElement){let a=e.closest(`[${et$1}="${this._globalRippleOptions?.namespace??``}"]`);a&&this._createRipple(a)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(nt$2)),t.append(e);let a=this._globalRippleOptions,c=this._animationsDisabled?0:a?.animation?.enterDuration??re.enterDuration,d=this._animationsDisabled?0:a?.animation?.exitDuration??re.exitDuration,m={rippleDisabled:this._animationsDisabled||a?.disabled||t.hasAttribute(q$3),rippleConfig:{centered:t.hasAttribute(At$1),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:c,exitDuration:d}}},u=new j$2(m,this._ngZone,e,this._platform,this._injector),l=!m.rippleDisabled;l&&u.setupTriggerEvents(t),this._hosts.set(t,{target:m,renderer:u,hasSetUpEvents:l}),t.removeAttribute(et$1)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac})}return n})();var Gt$1=[`*`,[[``,`progressIndicator`,``]]];var Yt$1=[`*`,`[progressIndicator]`];function Ut(n,r){n&1&&($u(0,`div`,1),KI(1,1),zu())}var Zt$1=new I$3(`MAT_BUTTON_CONFIG`);function Ot(n){return n==null?void 0:bC(n)}var at$1=(()=>{class n{_elementRef=g(Dn$2);_ngZone=g(z$1);_animationsDisabled=On$3();_config=g(Zt$1,{optional:!0});_focusMonitor=g(He$3);_cleanupClick;_renderer=g(Xr$1);_rippleLoader=g(Ct$2);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=F1(!1,{transform:TC});constructor(){g(h$4).load(Rn$2);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||n)};static ɵdir=Fu({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,a){e&2&&(Ah(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a._getAriaDisabled())(`tabindex`,a._getTabIndex()),pw(a.color?`mat-`+a.color:``),Zh(`mat-mdc-button-progress-indicator-shown`,a.showProgress())(`mat-mdc-button-disabled`,a.disabled)(`mat-mdc-button-disabled-interactive`,a.disabledInteractive)(`mat-unthemed`,!a.color)(`_mat-animation-noopable`,a._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,TC],disabled:[2,`disabled`,`disabled`,TC],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,TC],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,TC],tabIndex:[2,`tabIndex`,`tabIndex`,Ot],_tabindex:[2,`tabindex`,`_tabindex`,Ot],showProgress:[1,`showProgress`]}})}return n})();var $t=(()=>{class n extends at$1{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(e){return new(e||n)};static ɵcmp=gI({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Th],ngContentSelectors:Yt$1,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(e,a){e&1&&(QI(Gt$1),kh(0,`span`,0),KI(1),kI(2,Ut,2,0,`div`,1),kh(3,`span`,2)(4,`span`,3)),e&2&&(jD(2),FI(a.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();var Pt=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({imports:[I$5]})}return n})();var Ht=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var Xt$1=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function Jt$1(n,r){n&1&&($u(0,`div`,2),KI(1,3),zu())}var Ft=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var gn$2=(()=>{class n extends at$1{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=qt$1(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,a=this._appearance?Ft.get(this._appearance):null,c=Ft.get(t);a&&e.remove(...a),e.add(...c),this._appearance=t}static ɵfac=function(e){return new(e||n)};static ɵcmp=gI({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Th],ngContentSelectors:Xt$1,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(e,a){e&1&&(QI(Ht),kh(0,`span`,0),KI(1),$u(2,`span`,1),KI(3,1),zu(),KI(4,2),kI(5,Jt$1,2,0,`div`,2),kh(6,`span`,3)(7,`span`,4)),e&2&&(Zh(`mdc-button__ripple`,!a._isFab)(`mdc-fab__ripple`,a._isFab),jD(5),FI(a.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();function qt$1(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var hn$2=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({imports:[Pt,I$5]})}return n})();function V$1(i){return Error(`Unable to find icon with the name "${i}"`)}function X$1(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function q$2(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Y$2(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var a=class{url;svgText;options;svgElement=null;constructor(l,t,e){this.url=l,this.svgText=t,this.options=e}};var K$1=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=[`material-icons`,`mat-ligature-font`];constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace(``,t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace(``,t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new a(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let r=this._sanitizer.sanitize(H$1.HTML,n);if(!r)throw Y$2(n);let s=w$2(r);return this._addSvgIconConfig(t,e,new a(``,s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new a(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize(H$1.HTML,e);if(!o)throw Y$2(e);let r=w$2(o);return this._addSvgIconSetConfig(t,new a(``,r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(H$1.RESOURCE_URL,t);if(!e)throw q$2(t);let n=this._cachedIconsByUrl.get(e);return n?$o$1(C(n)):this._loadSvgIconFromConfig(new a(t,null)).pipe(Jl$1(o=>this._cachedIconsByUrl.set(e,o)),ie$1(o=>C(o)))}getNamedSvgIcon(t,e=``){let n=J$2(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):vm(V$1(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?$o$1(C(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(ie$1(e=>C(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return $o$1(n);return Am(e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Js$1(s=>{let f=`Loading icon set URL: ${this._sanitizer.sanitize(H$1.RESOURCE_URL,r.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(f)),$o$1(null)})))).pipe(ie$1(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw V$1(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(r,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Jl$1(e=>t.svgText=e),ie$1(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?$o$1(null):this._fetchIcon(t).pipe(Jl$1(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute(`id`),r.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(r),n);let s=this._svgElementFromString(w$2(`<svg></svg>`));return s.appendChild(r),this._setSvgAttributes(s,n)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let n=e.querySelector(`svg`);if(!n)throw Error(`<svg> tag not found`);return n}_toSvgElement(t){let e=this._svgElementFromString(w$2(`<svg></svg>`)),n=t.attributes;for(let o=0;o<n.length;o++){let{name:r,value:s}=n[o];r!==`id`&&e.setAttribute(r,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw X$1();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(H$1.RESOURCE_URL,e);if(!r)throw q$2(e);let s=this._inProgressUrlFetches.get(r);if(s)return s;let h=this._httpClient.get(r,{responseType:`text`,withCredentials:o}).pipe(ie$1(f=>w$2(f)),ra$1(()=>this._inProgressUrlFetches.delete(r)),ia$1());return this._inProgressUrlFetches.set(r,h),h}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(J$2(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return Z$1(o)?new a(o.url,null,o.options):new a(o,null)}}static ɵfac=function(e){return new(e||i)(C$2(Zg,8),C$2(bT),C$2(W$3,8),C$2(De$1))};static ɵprov=A$2({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();function C(i){return i.cloneNode(!0)}function J$2(i,l){return i+`:`+l}function Z$1(i){return!!(i.url&&i.options)}var tt=[`*`];var et=new I$3(`MAT_ICON_DEFAULT_OPTIONS`);var nt$1=new I$3(`mat-icon-location`,{providedIn:`root`,factory:()=>{let i=g(W$3),l=i?i.location:null;return{getPathname:()=>l?l.pathname+l.search:``}}});var G$1=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var ot$1=G$1.map(i=>`[${i}]`).join(`, `);var rt=/^url\(['"]?#(.*?)['"]?\)$/;var wt$1=(()=>{class i{_elementRef=g(Dn$2);_iconRegistry=g(K$1);_location=g(nt$1);_errorHandler=g(De$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Z$3.EMPTY;constructor(){let t=g(new ag(`aria-hidden`),{optional:!0}),e=g(et,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()===`svg`)&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(r=>{o.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ot$1),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)G$1.forEach(r=>{let s=e[o],h=s.getAttribute(r),f=h?h.match(rt):null;if(f){let p=n.get(s);p||(p=[],n.set(s,p)),p.push({name:r,value:f[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(Kt$1(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=gI({type:i,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(e,n){e&2&&(Ah(`data-mat-icon-type`,n._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,n._svgName||n.fontIcon)(`data-mat-icon-namespace`,n._svgNamespace||n.fontSet)(`fontIcon`,n._usingFontIcon()?n.fontIcon:null),pw(n.color?`mat-`+n.color:``),Zh(`mat-icon-inline`,n.inline)(`mat-icon-no-color`,n.color!==`primary`&&n.color!==`accent`&&n.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,TC],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:tt,decls:1,vars:0,template:function(e,n){e&1&&(QI(),KI(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return i})();var yt$1=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=hs$1({type:i});static ɵinj=Nr({imports:[I$5]})}return i})();var V=new I$3(`HIGHLIGHT_OPTIONS`);var h$1=(function(t){return t.FULL_WITH_CORE_LIBRARY_IMPORTS=`The full library and the core library were imported, only one of them should be imported!`,t.FULL_WITH_LANGUAGE_IMPORTS=`The highlighting languages were imported they are not needed!`,t.CORE_WITHOUT_LANGUAGE_IMPORTS=`The highlighting languages were not imported!`,t.LANGUAGE_WITHOUT_CORE_IMPORTS=`The core library was not imported!`,t.NO_FULL_AND_NO_CORE_IMPORTS=`Highlight.js library was not imported!`,t})(h$1||{});var Y$1=(()=>{class t{constructor(){this.document=g(W$3),this.isPlatformBrowser=RB(g(Ur)),this.options=g(V,{optional:!0}),this._ready=new mr$1(null),this.ready=Em(this._ready.asObservable().pipe(Et$2(e=>!!e))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(qo$1(e=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=e,this.loadLineNumbers().pipe(Jl$1(i=>{i.activateLineNumbers(),this._ready.next(e)}))):(this._ready.next(e),Zt$3)),Js$1(e=>(console.error(`[HLJS] `,e),this._ready.error(e),Zt$3))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return vm(()=>h$1.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return vm(()=>h$1.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return vm(()=>h$1.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return vm(()=>h$1.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(qo$1(e=>this._loadLanguages(e)))}return vm(()=>h$1.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(e){return Am(Object.entries(this.options.languages).map(([n,z])=>I$1(z()).pipe(Jl$1(b=>e.registerLanguage(n,b))))).pipe(ie$1(()=>e))}loadCoreLibrary(){return I$1(this.options.coreLibraryLoader())}loadFullLibrary(){return I$1(this.options.fullLibraryLoader())}loadLineNumbers(){return je$2(this.options.lineNumbersLoader())}setTheme(e){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=e:this.loadTheme(e))}loadTheme(e){this._themeLinkElement=this.document.createElement(`link`),this._themeLinkElement.href=e,this._themeLinkElement.type=`text/css`,this._themeLinkElement.rel=`stylesheet`,this._themeLinkElement.media=`screen,print`,this.document.head.appendChild(this._themeLinkElement)}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵprov=A$2({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var I$1=t=>je$2(t).pipe(Et$2(a=>!!a?.default),ie$1(a=>a.default));var q$1=(()=>{class t{constructor(){this.loader=g(Y$1),this.options=g(V,{optional:!0}),this.hljsSignal=Ii$2(null),this.hljs=Uw(()=>this.hljsSignal()),this.loader.ready.then(e=>{this.hljsSignal.set(e),this.options?.highlightOptions&&e.configure(this.options.highlightOptions)})}highlight(e,i){return B$2(this,null,function*(){return(yield this.loader.ready).highlight(e,i)})}highlightAuto(e,i){return B$2(this,null,function*(){return(yield this.loader.ready).highlightAuto(e,i)})}highlightElement(e){return B$2(this,null,function*(){(yield this.loader.ready).highlightElement(e)})}highlightAll(){return B$2(this,null,function*(){(yield this.loader.ready).highlightAll()})}configure(e){return B$2(this,null,function*(){(yield this.loader.ready).configure(e)})}registerLanguage(e,i){return B$2(this,null,function*(){(yield this.loader.ready).registerLanguage(e,i)})}unregisterLanguage(e){return B$2(this,null,function*(){(yield this.loader.ready).unregisterLanguage(e)})}registerAliases(n,z){return B$2(this,arguments,function*(e,{languageName:i}){(yield this.loader.ready).registerAliases(e,{languageName:i})})}listLanguages(){return B$2(this,null,function*(){return(yield this.loader.ready).listLanguages()})}getLanguage(e){return B$2(this,null,function*(){return(yield this.loader.ready).getLanguage(e)})}safeMode(){return B$2(this,null,function*(){(yield this.loader.ready).safeMode()})}debugMode(){return B$2(this,null,function*(){(yield this.loader.ready).debugMode()})}lineNumbersBlock(e,i){return B$2(this,null,function*(){let n=yield this.loader.ready;n.lineNumbersBlock&&n.lineNumbersBlock(e,i)})}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵprov=A$2({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var j$1;function J$1(){if(!j$1)try{j$1=window?.trustedTypes?.createPolicy(`ngx-highlightjs`,{createHTML:t=>t})}catch(t){}return j$1}function K(t){return J$1()?.createHTML(t)||t}var W$1=(()=>{class t{constructor(){this._hljs=g(q$1),this._nativeElement=g(Dn$2).nativeElement,this._sanitizer=g(bT),this._platform=g(Ur),RB(this._platform)&&(Kd(()=>{let e=this.code();this.setTextContent(e||``),e&&this.highlightElement(e)}),Kd(()=>{let e=this.highlightResult();this.setInnerHTML(e?.value),this.highlighted.emit(e)}))}setTextContent(e){requestAnimationFrame(()=>this._nativeElement.textContent=e)}setInnerHTML(e){requestAnimationFrame(()=>this._nativeElement.innerHTML=K(this._sanitizer.sanitize(H$1.HTML,e)||``))}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵdir=Fu({type:t,standalone:!1})}}return t})();var oe$2=(()=>{class t extends W$1{constructor(){super(...arguments),this.code=F1(null,{alias:`highlight`}),this.highlightResult=Ii$2(null),this.highlighted=new st$2}highlightElement(e){return B$2(this,null,function*(){let i=yield this._hljs.highlight(e,{language:this.language,ignoreIllegals:this.ignoreIllegals});this.highlightResult.set(i)})}static{this.ɵfac=(()=>{let e;return function(n){return(e||(e=Xf(t)))(n||t)}})()}static{this.ɵdir=Fu({type:t,selectors:[[``,`highlight`,``]],hostVars:2,hostBindings:function(i,n){i&2&&Zh(`hljs`,!0)},inputs:{code:[1,`highlight`,`code`],language:`language`,ignoreIllegals:[2,`ignoreIllegals`,`ignoreIllegals`,TC]},outputs:{highlighted:`highlighted`},features:[Aw([{provide:W$1,useExisting:t}]),Th]})}}return t})();var he$1=(()=>{class t{static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵmod=hs$1({type:t})}static{this.ɵinj=Nr({})}}return t})();var v=[`*`];var h=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];var y=[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`];var b$1=new I$3(`MAT_CARD_CONFIG`);var I=(()=>{class t{appearance;constructor(){let e=g(b$1,{optional:!0});this.appearance=e?.appearance||`raised`}static ɵfac=function(a){return new(a||t)};static ɵcmp=gI({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(a,r){a&2&&Zh(`mat-mdc-card-outlined`,r.appearance===`outlined`)(`mdc-card--outlined`,r.appearance===`outlined`)(`mat-mdc-card-filled`,r.appearance===`filled`)(`mdc-card--filled`,r.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:v,decls:1,vars:0,template:function(a,r){a&1&&(QI(),KI(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})();var _$1=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=Fu({type:t,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return t})();var F=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=Fu({type:t,selectors:[[`mat-card-subtitle`],[``,`mat-card-subtitle`,``],[``,`matCardSubtitle`,``]],hostAttrs:[1,`mat-mdc-card-subtitle`]})}return t})();var j=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵcmp=gI({type:t,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:y,decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(a,r){a&1&&(QI(h),KI(0),$u(1,`div`,0),KI(2,1),zu(),KI(3,2))},encapsulation:2})}return t})();var k$1=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=Fu({type:t,selectors:[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],hostAttrs:[1,`mat-mdc-card-avatar`]})}return t})();var T=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=hs$1({type:t});static ɵinj=Nr({imports:[I$5]})}return t})();var f=`primary`;var qe$1=Symbol(`RouteTitle`);var Wt=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ae$1(t){return new Wt(t)}function qt(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===`:`)e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function sn$1(t,n,e){let r=e.path.split(`/`),i=r.indexOf(`**`);if(i===-1){if(r.length>t.length||e.pathMatch===`full`&&(n.hasChildren()||r.length<t.length))return null;let s={},u=t.slice(0,r.length);return qt(r,u,s)?{consumed:u,posParams:s}:null}if(i!==r.lastIndexOf(`**`))return null;let o=r.slice(0,i),a=r.slice(i+1);if(o.length+a.length>t.length||e.pathMatch===`full`&&n.hasChildren()&&e.path!==`**`)return null;let c={};return!qt(o,t.slice(0,o.length),c)||!qt(a,t.slice(t.length-a.length),c)?null:{consumed:t,posParams:c}}function ct(t){return new Promise((n,e)=>{t.pipe(Bm()).subscribe({next:r=>n(r),error:r=>e(r)})})}function Jn$1(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!q(t[e],n[e]))return!1;return!0}function q(t,n){let e=t?Qt$1(t):void 0,r=n?Qt$1(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!cn$1(t[i],n[i]))return!1;return!0}function Qt$1(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function cn$1(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function Xn$1(t){return t.length>0?t[t.length-1]:null}function ce$1(t){return Dm(t)?t:ps$1(t)?je$2(Promise.resolve(t)):$o$1(t)}function un$1(t){return Dm(t)?ct(t):Promise.resolve(t)}var ei={exact:hn$1,subset:dn$1};var ln$1={exact:ti,subset:ri,ignored:()=>!0};var cr={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var me={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function ur(t,n,e){let r=t instanceof A?t:n.parseUrl(t);return Uw(()=>Kt(n.lastSuccessfulNavigation()?.finalUrl??new A,r,w$1(w$1({},me),e)))}function Kt(t,n,e){return ei[e.paths](t.root,n.root,e.matrixParams)&&ln$1[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment===`exact`&&t.fragment!==n.fragment)}function ti(t,n){return q(t,n)}function hn$1(t,n,e){if(!oe$1(t.segments,n.segments)||!ot(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!hn$1(t.children[r],n.children[r],e))return!1;return!0}function ri(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>cn$1(t[e],n[e]))}function dn$1(t,n,e){return fn$1(t,n,n.segments,e)}function fn$1(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!oe$1(i,e)||n.hasChildren()||!ot(i,e,r))}else if(t.segments.length===e.length){if(!oe$1(t.segments,e)||!ot(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!dn$1(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!oe$1(t.segments,i)||!ot(t.segments,i,r)||!t.children[f]?!1:fn$1(t.children[f],n,o,r)}}function ot(t,n,e){return n.every((r,i)=>ln$1[e](t[i].parameters,r.parameters))}var A=class{root;queryParams;fragment;_queryParamMap;constructor(n=new m([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=ae$1(this.queryParams),this._queryParamMap}toString(){return oi.serialize(this)}};var m=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return at(this)}};var Y=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=ae$1(this.parameters),this._parameterMap}toString(){return gn$1(this)}};function ni(t,n){return oe$1(t,n)&&t.every((e,r)=>q(e.parameters,n[r].parameters))}function oe$1(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function ii(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===f&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==f&&(e=e.concat(n(i,r)))}),e}var ue=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=ue$1({token:t,factory:()=>new Z})}return t})();var Z=class{parse(n){let e=new Zt(n);return new A(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Ue$1(n.root,!0)}`;if(e.startsWith(`//`))throw new v$2(4019,!1);return`${e}${ci$1(n.queryParams)}${typeof n.fragment==`string`?`#${ai(n.fragment)}`:``}`}};var oi=new Z;function at(t){return t.segments.map(n=>gn$1(n)).join(`/`)}function Ue$1(t,n){if(!t.hasChildren())return at(t);if(n){let e=t.children[f]?Ue$1(t.children[f],!1):``,r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==f&&r.push(`${i}:${Ue$1(o,!1)}`)}),r.length>0?`${e}(${r.join(`//`)})`:e}else{let e=ii(t,(r,i)=>i===f?[Ue$1(t.children[f],!1)]:[`${i}:${Ue$1(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[f]!=null?`${at(t)}/${e[0]}`:`${at(t)}/(${e.join(`//`)})`}}function pn$1(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function nt(t){return pn$1(t).replace(/%3B/gi,`;`)}function ai(t){return encodeURI(t)}function Yt(t){return pn$1(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function st(t){return decodeURIComponent(t)}function Xr(t){return st(t.replace(/\+/g,`%20`))}function gn$1(t){return`${Yt(t.path)}${si(t.parameters)}`}function si(t){return Object.entries(t).map(([n,e])=>`;${Yt(n)}=${Yt(e)}`).join(``)}function ci$1(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${nt(e)}=${nt(i)}`).join(`&`):`${nt(e)}=${nt(r)}`).filter(e=>e);return n.length?`?${n.join(`&`)}`:``}var ui$1=/^[^\/()?;#]+/;function Bt(t){let n=t.match(ui$1);return n?n[0]:``}var li$1=/^[^\/()?;=#]+/;function hi$1(t){let n=t.match(li$1);return n?n[0]:``}var di$1=/^[^=?&#]+/;function fi$1(t){let n=t.match(di$1);return n?n[0]:``}var pi$1=/^[^&#]+/;function gi$1(t){let n=t.match(pi$1);return n?n[0]:``}var Zt=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new m([],{}):new m([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional(`?`))do this.parseQueryParam(n);while(this.consumeOptional(`&`));return n}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new v$2(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let r={};this.peekStartsWith(`/(`)&&(this.capture(`/`),r=this.parseParens(!0,n));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[f]=new m(e,r)),i}parseSegment(){let n=Bt(this.remaining);if(n===``&&this.peekStartsWith(`;`))throw new v$2(4009,!1);return this.capture(n),new Y(st(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(`;`);)this.parseParam(n);return n}parseParam(n){let e=hi$1(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let i=Bt(this.remaining);i&&(r=i,this.capture(r))}n[st(e)]=st(r)}parseQueryParam(n){let e=fi$1(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let a=gi$1(this.remaining);a&&(r=a,this.capture(r))}let i=Xr(e),o=Xr(r);if(Object.hasOwn(n,i)){let a=n[i];Array.isArray(a)||(a=[a],n[i]=a),a.push(o)}else n[i]=o}parseParens(n,e){let r=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=Bt(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new v$2(4010,!1);let a;i.indexOf(`:`)>-1?(a=i.slice(0,i.indexOf(`:`)),this.capture(a),this.capture(`:`)):n&&(a=f);let c=this.parseChildren(e+1);r[a??f]=Object.keys(c).length===1&&c[f]?c[f]:new m([],c),this.consumeOptional(`//`)}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new v$2(4011,!1)}};function vn$1(t){return t.segments.length>0?new m([],{[f]:t}):t}function mn$1(t){let n=Object.create(null);for(let[r,i]of Object.entries(t.children)){let o=mn$1(i);if(r===f&&o.segments.length===0&&o.hasChildren())for(let[a,c]of Object.entries(o.children))n[a]=c;else(o.segments.length>0||o.hasChildren())&&(n[r]=o)}return vi$1(new m(t.segments,n))}function vi$1(t){if(t.numberOfChildren===1&&t.children[f]){let n=t.children[f];return new m(t.segments.concat(n.segments),n.children)}return t}function J(t){return t instanceof A}function yn$1(t,n,e=null,r=null,i=new Z){return Sn$1(Rn$1(t),n,e,r,i)}function Rn$1(t){let n;function e(o){let a={};for(let s of o.children){let u=e(s);a[s.outlet]=u}let c=new m(o.url,a);return o===t&&(n=c),c}let i=vn$1(e(t.root));return n??i}function Sn$1(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Vt$1(o,o,o,e,r,i);let a=mi$1(n);if(a.toRoot())return Vt$1(o,o,new m([],{}),e,r,i);let c=yi$1(a,o,t),s=c.processChildren?Pe(c.segmentGroup,c.index,a.commands):wn$1(c.segmentGroup,c.index,a.commands);return Vt$1(o,c.segmentGroup,s,e,r,i)}function ut(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function je$1(t){return typeof t==`object`&&t!=null&&t.outlets}function en(t,n,e){t||=`ɵ`;let r=new A;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function Vt$1(t,n,e,r,i,o){let a={};for(let[u,d]of Object.entries(r??{}))a[u]=Array.isArray(d)?d.map(v=>en(u,v,o)):en(u,d,o);let c;t===n?c=e:c=Cn$1(t,n,e);return new A(vn$1(mn$1(c)),a,i)}function Cn$1(t,n,e){let r=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=Cn$1(o,n,e)}),new m(t.segments,r)}var lt=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&ut(r[0]))throw new v$2(4003,!1);let i=r.find(je$1);if(i&&i!==Xn$1(r))throw new v$2(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function mi$1(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new lt(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,a)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,u])=>{c[s]=typeof u==`string`?u.split(`/`):u}),[...i,{outlets:c}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:a===0?(o.split(`/`).forEach((c,s)=>{s==0&&c===`.`||(s==0&&c===``?e=!0:c===`..`?n++:c!=``&&i.push(c))}),i):[...i,o]},[]);return new lt(e,n,r)}var pe=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function yi$1(t,n,e){if(t.isAbsolute)return new pe(n,!0,0);if(!e)return new pe(n,!1,NaN);if(e.parent===null)return new pe(e,!0,0);let r=ut(t.commands[0])?0:1;return Ri$1(e,e.segments.length-1+r,t.numberOfDoubleDots)}function Ri$1(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new v$2(4005,!1);i=r.segments.length}return new pe(r,!1,i-o)}function Si$1(t){return je$1(t[0])?t[0].outlets:{[f]:t}}function wn$1(t,n,e){if(t??=new m([],{}),t.segments.length===0&&t.hasChildren())return Pe(t,n,e);let r=Ci$1(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new m(t.segments.slice(0,r.pathIndex),{});return o.children[f]=new m(t.segments.slice(r.pathIndex),t.children),Pe(o,0,i)}else return r.match&&i.length===0?new m(t.segments,{}):r.match&&!t.hasChildren()?Jt(t,n,e):r.match?Pe(t,0,i):Jt(t,n,e)}function Pe(t,n,e){if(e.length===0)return new m(t.segments,{});{let r=Si$1(e),i=Object.create(null);if(Object.keys(r).some(o=>o!==f)&&t.children[f]&&t.numberOfChildren===1&&t.children[f].segments.length===0){let o=Pe(t.children[f],n,e);return new m(t.segments,o.children)}return Object.entries(r).forEach(([o,a])=>{typeof a==`string`&&(a=[a]),a!==null&&(i[o]=wn$1(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{r[o]===void 0&&(i[o]=a)}),new m(t.segments,i)}}function Ci$1(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let a=t.segments[i],c=e[r];if(je$1(c))break;let s=`${c}`,u=r<e.length-1?e[r+1]:null;if(i>0&&s===void 0)break;if(s&&u&&typeof u==`object`&&u.outlets===void 0){if(!rn$1(s,u,a))return o;r+=2}else{if(!rn$1(s,{},a))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function Jt(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(je$1(o))return new m(r,wi$1(o.outlets));if(i===0&&ut(e[0])){let s=t.segments[n];r.push(new Y(s.path,tn(e[0]))),i++;continue}let a=je$1(o)?o.outlets[f]:`${o}`,c=i<e.length-1?e[i+1]:null;a&&c&&ut(c)?(r.push(new Y(a,tn(c))),i+=2):(r.push(new Y(a,{})),i++)}return new m(r,{})}function wi$1(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r==`string`&&(r=[r]),r!==null&&(n[e]=Jt(new m([],{}),0,r))}),n}function tn(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function rn$1(t,n,e){return t==e.path&&q(n,e.parameters)}var ge=`imperative`;var S=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(S||{});var U=class{id;url;constructor(n,e){this.id=n,this.url=e}};var X=class extends U{type=S.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r=`imperative`,i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var k=class extends U{urlAfterRedirects;type=S.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var b=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(b||{});var ye=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(ye||{});var x$1=class extends U{reason;code;type=S.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function bn$1(t){return t instanceof x$1&&(t.code===b.Redirect||t.code===b.SupersededByNewNavigation)}var B=class extends U{reason;code;type=S.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}};var se$1=class extends U{error;target;type=S.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var xe$1=class extends U{urlAfterRedirects;state;type=S.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var ht=class extends U{urlAfterRedirects;state;type=S.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var dt$1=class extends U{urlAfterRedirects;state;shouldActivate;type=S.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var ft=class extends U{urlAfterRedirects;state;type=S.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var pt=class extends U{urlAfterRedirects;state;type=S.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var gt=class{route;type=S.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var vt=class{route;type=S.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var mt$1=class{snapshot;type=S.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var yt=class{snapshot;type=S.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Rt=class{snapshot;type=S.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var St=class{snapshot;type=S.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Re=class{routerEvent;position;anchor;scrollBehavior;type=S.Scroll;constructor(n,e,r,i){this.routerEvent=n,this.position=e,this.anchor=r,this.scrollBehavior=i}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}};var Se$1=class{};var ke$1=class{};var Ce$1=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function bi$1(t){return!(t instanceof Se$1)&&!(t instanceof Ce$1)&&!(t instanceof ke$1)}var Ct$1=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Ae(this.rootInjector)}};var Ae=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new Ct$1(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(r){return new(r||t)(C$2(ae$3))};static ɵprov=A$2({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var wt=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Xt(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=Xt(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=er(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return er(n,this._root).map(e=>e.value)}};function Xt(t,n){if(t===n.value)return n;for(let e of n.children){let r=Xt(t,e);if(r)return r}return null}function er(t,n){if(t===n.value)return[n];for(let e of n.children){let r=er(t,e);if(r.length)return r.unshift(n),r}return[]}var _=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function fe(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var $e$1=class extends wt{snapshot;constructor(n,e){super(n),this.snapshot=e,hr(this,n)}toString(){return this.snapshot.toString()}};function In$1(t,n){let e=Ii$1(t,n),r=new mr$1([new Y(``,{})]),i=new mr$1({}),o=new mr$1({}),s=new W(r,i,new mr$1({}),new mr$1(``),o,f,t,e.root);return s.snapshot=e.root,new $e$1(new _(s,[]),e)}function Ii$1(t,n){return new ze$1(``,new _(new we$1([],{},{},``,{},f,t,null,{},n),[]))}var W=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(n,e,r,i,o,a,c,s){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(ie$1(u=>u[qe$1]))??$o$1(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ie$1(n=>ae$1(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ie$1(n=>ae$1(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};var Ai$1=`always`;function lr(t,n,e){let r,{routeConfig:i}=t;return n!==null&&(e===`always`||i?.path===``||!n.component&&!n.routeConfig?.loadComponent)?r={params:w$1(w$1({},n.params),t.params),data:w$1(w$1({},n.data),t.data),resolve:w$1(w$1(w$1(w$1({},t.data),n.data),i?.data),t._resolvedData)}:r={params:w$1({},t.params),data:w$1({},t.data),resolve:w$1(w$1({},t.data),t._resolvedData??{})},i&&En$1(i)&&(r.resolve[qe$1]=i.title),r}var we$1=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[qe$1]}constructor(n,e,r,i,o,a,c,s,u,d){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=a,this.component=c,this.routeConfig=s,this._resolve=u,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ae$1(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ae$1(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var ze$1=class extends wt{url;constructor(n,e){super(e),this.url=n,hr(this,e)}toString(){return An$1(this._root)}};function hr(t,n){n.value._routerState=t,n.children.forEach(e=>hr(t,e))}function An$1(t){let n=t.children.length>0?` { ${t.children.map(An$1).join(`, `)} } `:``;return`${t.value}${n}`}function Gt(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,q(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),q(n.params,e.params)||t.paramsSubject.next(e.params),Jn$1(n.url,e.url)||t.urlSubject.next(e.url),q(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function tr(t,n){let e=q(t.params,n.params)&&ni(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||tr(t.parent,n.parent))}function En$1(t){return typeof t.title==`string`||t.title===null}var Tn$1=new I$3(``);var dr=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=f;activateEvents=new st$2;deactivateEvents=new st$2;attachEvents=new st$2;detachEvents=new st$2;routerOutletData=F1();parentContexts=g(Ae);location=g(ir$1);changeDetector=g(gg);inputBinder=g(Et$1,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new v$2(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new v$2(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new v$2(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new v$2(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new rr(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:s,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(r){return new(r||t)};static ɵdir=Fu({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[Xc]})}return t})();var rr=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===W?this.route:n===Ae?this.childContexts:n===Tn$1?this.outletData:this.parent.get(n,e)}};var Et$1=new I$3(``);var fr=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=gI({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(r,i){r&1&&Oh(0,`router-outlet`)},dependencies:[dr],encapsulation:2,changeDetection:1})}return t})();function pr(t){let n=t.children&&t.children.map(pr),e=n?x$3(w$1({},t),{children:n}):w$1({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==f&&(e.component=fr),e}function Ei$1(t,n,e){let r=new Set;return{newlyCreatedRoutes:r,state:new $e$1(He$1(t,n._root,e?e._root:void 0,r),n)}}function He$1(t,n,e,r){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;return new _(i,Ti$1(t,n,e,r))}else{if(t.shouldAttach(n.value)){let a=t.retrieve(n.value);if(a!==null){let c=a.route;return c.value._futureSnapshot=n.value,c.children=n.children.map(s=>He$1(t,s,void 0,r)),c}}let i=Mi$1(n.value);r.add(i);return new _(i,n.children.map(a=>He$1(t,a,void 0,r)))}}function Ti$1(t,n,e,r){return n.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return He$1(t,i,o,r);return He$1(t,i,void 0,r)})}function Mi$1(t){return new W(new mr$1(t.url),new mr$1(t.params),new mr$1(t.queryParams),new mr$1(t.fragment),new mr$1(t.data),t.outlet,t.component,t)}var be$1=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}};var Mn$1=`ngNavigationCancelingError`;function bt(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=J(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=Nn$1(!1,b.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function Nn$1(t,n){let e=new Error(`NavigationCancelingError: ${t||``}`);return e[Mn$1]=!0,e.cancellationCode=n,e}function Ni$1(t){return Dn$1(t)&&J(t.url)}function Dn$1(t){return!!t&&t[Mn$1]}var nr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),Gt(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=fe(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],r),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let a=r.getContext(i.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=fe(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(r&&r.outlet){let a=r.outlet.detach(),c=r.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:c})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=fe(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,r){let i=fe(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new St(o.value.snapshot))}),n.children.length&&this.forwardEvent(new yt(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(Gt(i),i===o)if(i.component){let a=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let a=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),Gt(c.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,r)}};var It=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}};var ve=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Di$1(t,n,e){let r=t._root;return Oe$1(r,n?n._root:null,e,[r.value])}function _i$1(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Ee$1(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t==`function`&&!Zm(t)?t:n.get(t):r}function Oe$1(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=fe(n);return t.children.forEach(a=>{Ui(a,o[a.value.outlet],e,r.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,c])=>Le(c,e.getContext(a),i)),i}function Ui(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,c=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=Oi$1(a,o,o.routeConfig.runGuardsAndResolvers);s?i.canActivateChecks.push(new It(r)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Oe$1(t,n,c?c.children:null,r,i):Oe$1(t,n,e,r,i),s&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new ve(c.outlet.component,a))}else a&&Le(n,c,i),i.canActivateChecks.push(new It(r)),o.component?Oe$1(t,null,c?c.children:null,r,i):Oe$1(t,null,e,r,i);return i}function Oi$1(t,n,e){if(typeof e==`function`)return Bn$2(n._environmentInjector,()=>e(t,n));switch(e){case`pathParamsChange`:return!oe$1(t.url,n.url);case`pathParamsOrQueryParamsChange`:return!oe$1(t.url,n.url)||!q(t.queryParams,n.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!tr(t,n)||!q(t.queryParams,n.queryParams);default:return!tr(t,n)}}function Le(t,n,e){let r=fe(t),i=t.value;Object.entries(r).forEach(([o,a])=>{i.component?n?Le(a,n.children.getContext(o),e):Le(a,null,e):Le(a,n,e)}),i.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new ve(n.outlet.component,i)):e.canDeactivateChecks.push(new ve(null,i)):e.canDeactivateChecks.push(new ve(null,i))}function Be(t){return typeof t==`function`}function Pi$1(t){return typeof t==`boolean`}function Li$1(t){return t&&Be(t.canLoad)}function ji(t){return t&&Be(t.canActivate)}function xi$1(t){return t&&Be(t.canActivateChild)}function ki$1(t){return t&&Be(t.canDeactivate)}function $i(t){return t&&Be(t.canMatch)}function _n$1(t){return t instanceof Qt$3||t?.name===`EmptyError`}var it=Symbol(`INITIAL_VALUE`);function Ie(){return qo$1(t=>Mm(t.map(n=>n.pipe(Kt$1(1),zm(it)))).pipe(ie$1(n=>{for(let e of n)if(e!==!0){if(e===it)return it;if(e===!1||zi$1(e))return e}return!0}),Et$2(n=>n!==it),Kt$1(1)))}function zi$1(t){return J(t)||t instanceof be$1}function Un$1(t){return t.aborted?$o$1(void 0).pipe(Kt$1(1)):new S$3(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function On$1(t){return Gm(Un$1(t))}function Hi(t){return Be$1(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?$o$1(x$3(w$1({},n),{guardsResult:!0})):Fi$1(o,e,r).pipe(Be$1(a=>a&&Pi$1(a)?qi(e,i,t):$o$1(a)),ie$1(a=>x$3(w$1({},n),{guardsResult:a})))})}function Fi$1(t,n,e){return je$2(t).pipe(Be$1(r=>Qi(r.component,r.route,e,n)),Bm(r=>r!==!0,!0))}function qi(t,n,e){return je$2(n).pipe(ea$1(r=>On$2(Vi(r.route.parent,e),Bi$1(r.route,e),Wi(t,r.path),Gi(t,r.route))),Bm(r=>r!==!0,!0))}function Bi$1(t,n){return t!==null&&n&&n(new Rt(t)),$o$1(!0)}function Vi(t,n){return t!==null&&n&&n(new mt$1(t)),$o$1(!0)}function Gi(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return $o$1(!0);return $o$1(e.map(i=>xm(()=>{let o=n._environmentInjector,a=Ee$1(i,o);return ce$1(ji(a)?a.canActivate(n,t):Bn$2(o,()=>a(n,t))).pipe(Bm())}))).pipe(Ie())}function Wi(t,n){let e=n[n.length-1];return $o$1(n.slice(0,n.length-1).reverse().map(o=>_i$1(o)).filter(o=>o!==null).map(o=>xm(()=>{return $o$1(o.guards.map(c=>{let s=o.node._environmentInjector,u=Ee$1(c,s);return ce$1(xi$1(u)?u.canActivateChild(e,t):Bn$2(s,()=>u(e,t))).pipe(Bm())})).pipe(Ie())}))).pipe(Ie())}function Qi(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return $o$1(!0);return $o$1(i.map(a=>{let c=n._environmentInjector,s=Ee$1(a,c);return ce$1(ki$1(s)?s.canDeactivate(t,n,e,r):Bn$2(c,()=>s(t,n,e,r))).pipe(Bm())})).pipe(Ie())}function Ki(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return $o$1(!0);return $o$1(o.map(c=>{let s=Ee$1(c,t),d=ce$1(Li$1(s)?s.canLoad(n,e):Bn$2(t,()=>s(n,e)));return i?d.pipe(On$1(i)):d})).pipe(Ie(),Pn$1(r))}function Pn$1(t){return sm(Jl$1(n=>{if(typeof n!=`boolean`)throw bt(t,n)}),ie$1(n=>n===!0))}function Yi(t,n,e,r,i,o){let a=n.canMatch;if(!a||a.length===0)return $o$1(!0);return $o$1(a.map(s=>{let u=Ee$1(s,t);return ce$1($i(u)?u.canMatch(n,e,i):Bn$2(t,()=>u(n,e,i))).pipe(On$1(o))})).pipe(Ie(),Pn$1(r))}var G=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}};var Fe=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function Zi(t){throw new v$2(4e3,!1)}function Ji(t){throw Nn$1(!1,b.GuardRejected)}var ir=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return B$2(this,null,function*(){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[f])throw Zi(`${n.redirectTo}`);i=i.children[f]}})}applyRedirectCommands(n,e,r,i,o){return B$2(this,null,function*(){let a=yield Xi(e,i,o);if(a instanceof A)throw new Fe(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,r);if(a[0]===`/`)throw new Fe(c);return c})}applyRedirectCreateUrlTree(n,e,r,i){return new A(this.createSegmentGroup(n,e.root,r,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let c=o.substring(1);r[i]=e[c]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),a=Object.create(null);return Object.entries(e.children).forEach(([c,s])=>{a[c]=this.createSegmentGroup(n,s,r,i)}),new m(o,a)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===`:`?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new v$2(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function Xi(t,n,e){if(typeof t==`string`)return Promise.resolve(t);let r=t;return ct(ce$1(Bn$2(e,()=>r(n))))}function eo$1(t,n){return t.providers&&!t._injector&&(t._injector=Ih(t.providers,n,`Route: ${t.path}`)),t._injector??n}function H(t){return t.outlet||f}function to$1(t,n){let e=t.filter(r=>H(r)===n);return e.push(...t.filter(r=>H(r)!==n)),e}var or={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Ln$1(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function ro$1(t,n,e,r,i,o,a){let c=jn$1(t,n,e);if(!c.matched)return $o$1(c);let s=Ln$1(o(c));return r=eo$1(n,r),Yi(r,n,e,i,s,a).pipe(ie$1(u=>u===!0?c:w$1({},or)))}function jn$1(t,n,e){if(n.path===``)return n.pathMatch===`full`&&(t.hasChildren()||e.length>0)?w$1({},or):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||sn$1)(e,t,n);if(!i)return w$1({},or);let o={};Object.entries(i.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let a=i.consumed.length>0?w$1(w$1({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function nn(t,n,e,r,i){return e.length>0&&oo$1(t,e,r,i)?{segmentGroup:new m(n,io$1(r,new m(e,t.children))),slicedSegments:[]}:e.length===0&&ao$1(t,e,r)?{segmentGroup:new m(t.segments,no$1(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new m(t.segments,t.children),slicedSegments:e}}function no$1(t,n,e,r){let i={};for(let o of e)if(Tt(t,n,o)&&!r[H(o)]){let a=new m([],{});i[H(o)]=a}return w$1(w$1({},r),i)}function io$1(t,n){let e={};e[f]=n;for(let r of t)if(r.path===``&&H(r)!==f){let i=new m([],{});e[H(r)]=i}return e}function oo$1(t,n,e,r){return e.some(i=>!Tt(t,n,i)||!(H(i)!==f)?!1:!(r!==void 0&&H(i)===r))}function ao$1(t,n,e){return e.some(r=>Tt(t,n,r))}function Tt(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch===`full`?!1:e.path===``}function so$1(t,n,e){return n.length===0&&!t.children[e]}var ar=class{};function co$1(t,n,e,r,i,o,a,c){return B$2(this,null,function*(){return new sr(t,n,e,r,i,a,o,c).recognize()})}var uo$1=31;var sr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,r,i,o,a,c,s){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new ir(this.urlSerializer,this.urlTree)}noMatchError(n){return new v$2(4002,`'${n.segmentGroup}'`)}recognize(){return B$2(this,null,function*(){let n=nn(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=yield this.match(n),o=new ze$1(``,new _(r,e)),a=yn$1(r,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(n){return B$2(this,null,function*(){let e=new we$1([],Object.freeze({}),Object.freeze(w$1({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),f,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,f,e),rootSnapshot:e}}catch(r){if(r instanceof Fe)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof G?this.noMatchError(r):r}})}processSegmentGroup(n,e,r,i,o){return B$2(this,null,function*(){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let a=yield this.processSegment(n,e,r,r.segments,i,!0,o);return a instanceof _?[a]:[]})}processChildren(n,e,r,i){return B$2(this,null,function*(){let o=[];for(let s of Object.keys(r.children))s===`primary`?o.unshift(s):o.push(s);let a=[];for(let s of o){let u=r.children[s],d=to$1(e,s),v=yield this.processSegmentGroup(n,d,u,s,i);a.push(...v)}let c=xn$1(a);return lo$1(c),c})}processSegment(n,e,r,i,o,a,c){return B$2(this,null,function*(){for(let s of e)try{return yield this.processSegmentAgainstRoute(s._injector??n,e,s,r,i,o,a,c)}catch(u){if(u instanceof G||_n$1(u))continue;throw u}if(so$1(r,i,o))return new ar;throw new G(r)})}processSegmentAgainstRoute(n,e,r,i,o,a,c,s){return B$2(this,null,function*(){if(H(r)!==a&&(a===f||!Tt(i,o,r)))throw new G(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,a,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,a,s);throw new G(i)})}expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,a,c){return B$2(this,null,function*(){let{matched:s,parameters:u,consumedSegments:d,positionalParamSegments:v,remainingSegments:g}=jn$1(e,i,o);if(!s)throw new G(e);typeof i.redirectTo==`string`&&i.redirectTo[0]===`/`&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>uo$1&&(this.allowRedirects=!1));let E=this.createSnapshot(n,i,o,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let $=yield this.applyRedirects.applyRedirectCommands(d,i.redirectTo,v,Ln$1(E),n),ee=yield this.applyRedirects.lineralizeSegments(i,$);return this.processSegment(n,r,e,ee.concat(g),a,!1,c)})}createSnapshot(n,e,r,i,o){let a=new we$1(r,i,Object.freeze(w$1({},this.urlTree.queryParams)),this.urlTree.fragment,fo$1(e),H(e),e.component??e._loadedComponent??null,e,po$1(e),n),c=lr(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(c.params),a.data=Object.freeze(c.data),a}matchSegmentAgainstRoute(n,e,r,i,o,a){return B$2(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=te=>this.createSnapshot(n,r,te.consumedSegments,te.parameters,a),s=yield ct(ro$1(e,r,i,n,this.urlSerializer,c,this.abortSignal));if(r.path===`**`&&(e.children={}),!s?.matched)throw new G(e);n=r._injector??n;let{routes:u}=yield this.getChildConfig(n,r,i),d=r._loadedInjector??n,{parameters:v,consumedSegments:g,remainingSegments:E}=s,$=this.createSnapshot(n,r,g,v,a),{segmentGroup:ee,slicedSegments:Te}=nn(e,g,E,u,o);if(Te.length===0&&ee.hasChildren())return new _($,yield this.processChildren(d,u,ee,$));if(u.length===0&&Te.length===0)return new _($,[]);let _t=H(r)===o,Ge=yield this.processSegment(d,u,ee,Te,_t?f:o,!0,$);return new _($,Ge instanceof _?[Ge]:[])})}getChildConfig(n,e,r){return B$2(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield ct(Ki(n,e,r,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Ji(e)}return{routes:[],injector:n}})}};function lo$1(t){t.sort((n,e)=>n.value.outlet===f?-1:e.value.outlet===f?1:n.value.outlet.localeCompare(e.value.outlet))}function ho$1(t){let n=t.value.routeConfig;return n&&n.path===``}function xn$1(t){let n=[],e=new Set;for(let r of t){if(!ho$1(r)){n.push(r);continue}let i=n.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),e.add(i)):n.push(r)}for(let r of e){let i=xn$1(r.children);n.push(new _(r.value,i))}return n.filter(r=>!e.has(r))}function fo$1(t){return t.data||{}}function po$1(t){return t.resolve||{}}function go$1(t,n,e,r,i,o,a){return Be$1(c=>B$2(null,null,function*(){let{state:s,tree:u}=yield co$1(t,n,e,r,c.extractedUrl,i,o,a);return x$3(w$1({},c),{targetSnapshot:s,urlAfterRedirects:u})}))}function vo$1(t){return Be$1(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return $o$1(n);let i=new Set(r.map(c=>c.route)),o=new Set;for(let c of i)if(!o.has(c))for(let s of kn$1(c))o.add(s);let a=0;return je$2(o).pipe(ea$1(c=>i.has(c)?mo$1(c,e,t):(c.data=lr(c,c.parent,t).resolve,$o$1(void 0))),Jl$1(()=>a++),Vm(1),Be$1(c=>a===o.size?$o$1(n):Zt$3))})}function kn$1(t){return[t,...t.children.map(e=>kn$1(e)).flat()]}function mo$1(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!En$1(r)&&(i[qe$1]=r.title),xm(()=>(t.data=lr(t,t.parent,e).resolve,yo$1(i,t,n).pipe(ie$1(o=>(t._resolvedData=o,t.data=w$1(w$1({},t.data),o),null)))))}function yo$1(t,n,e){let r=Qt$1(t);if(r.length===0)return $o$1({});let i={};return je$2(r).pipe(Be$1(o=>Ro$1(t[o],n,e).pipe(Bm(),Jl$1(a=>{if(a instanceof be$1)throw bt(new Z,a);i[o]=a}))),Vm(1),ie$1(()=>i),Js$1(o=>_n$1(o)?Zt$3:vm(o)))}function Ro$1(t,n,e){let r=n._environmentInjector,i=Ee$1(t,r);return ce$1(i.resolve?i.resolve(n,e):Bn$2(r,()=>i(n,e)))}function on$1(t){return qo$1(n=>{let e=t(n);return e?je$2(e).pipe(ie$1(()=>n)):$o$1(n)})}var gr=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===f);return r}getResolvedTitleForRoute(e){return e.data[qe$1]}static ɵfac=function(r){return new(r||t)};static ɵprov=ue$1({token:t,factory:()=>g($n$1)})}return t})();var $n$1=(()=>{class t extends gr{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static ɵfac=function(r){return new(r||t)(C$2(r2))};static ɵprov=A$2({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var le$1=new I$3(``,{factory:()=>({})});var Ve$1=new I$3(``);var zn$1=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=g(Bw);loadComponent(e,r){return B$2(this,null,function*(){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=B$2(this,null,function*(){try{let a=yield Fn$1(O1(yield un$1(Bn$2(e,()=>r.loadComponent()))));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=a,a}finally{this.componentLoaders.delete(r)}});return this.componentLoaders.set(r,i),i})}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=B$2(this,null,function*(){try{let o=yield Hn$1(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}});return this.childrenLoaders.set(r,i),i}static ɵfac=function(r){return new(r||t)};static ɵprov=ue$1({token:t,factory:t.ɵfac})}return t})();function Hn$1(t,n,e,r){return B$2(this,null,function*(){let o=yield Fn$1(O1(yield un$1(Bn$2(e,()=>t.loadChildren())))),a;o instanceof Eh||Array.isArray(o)?a=o:a=yield n.compileModuleAsync(o),r&&r(t);let c,s,d;return Array.isArray(a)?s=a:(c=a.create(e).injector,d=a,s=c.get(Ve$1,[],{optional:!0,self:!0}).flat()),{routes:s.map(pr),injector:c,factory:d}})}function Fn$1(t){return B$2(this,null,function*(){return t})}var Mt$1=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=ue$1({token:t,factory:()=>g(So$1)})}return t})();var So$1=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static ɵfac=function(r){return new(r||t)};static ɵprov=ue$1({token:t,factory:t.ɵfac})}return t})();var qn$1=new I$3(``);var Bn$1=new I$3(``);var Co$1=()=>{};var Vn$1=new I$3(``);var vr=(()=>{class t{currentNavigation=Ii$2(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Ii$2(null);events=new J$4;transitionAbortWithErrorSubject=new J$4;configLoader=g(zn$1);environmentInjector=g(ae$3);destroyRef=g(pe$3);urlSerializer=g(ue);rootContexts=g(Ae);location=g(Tg);inputBindingEnabled=g(Et$1,{optional:!0})!==null;titleStrategy=g(gr);options=g(le$1,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Ai$1;urlHandlingStrategy=g(Mt$1);createViewTransition=g(qn$1,{optional:!0});navigationErrorHandler=g(Vn$1,{optional:!0});activatedRouteInjectorFeature=g(Bn$1,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>$o$1(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new gt(i)),r=i=>this.events.next(new vt(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;ar$1(()=>{this.transitions?.next(x$3(w$1({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new mr$1(null),this.transitions.pipe(Et$2(r=>r!==null),qo$1(r=>{let i=!0,o=!1,a=new AbortController,c=()=>!o&&this.currentTransition?.id===r.id;return $o$1(r).pipe(qo$1(s=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),Zt$3;this.currentTransition=r;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl==`string`?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:u?x$3(w$1({},u),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&v!==`reload`)return this.events.next(new B(s.id,this.urlSerializer.serialize(s.rawUrl),``,ye.IgnoredSameUrlNavigation)),s.resolve(!1),Zt$3;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return $o$1(s).pipe(qo$1(g=>(this.events.next(new X(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?Zt$3:Promise.resolve(g))),go$1(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),Jl$1(g=>{r.targetSnapshot=g.targetSnapshot,r.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(E=>(E.finalUrl=g.urlAfterRedirects,E)),this.events.next(new ke$1)}),qo$1(g=>je$2(r.routesRecognizeHandler.deferredHandle??$o$1(void 0)).pipe(ie$1(()=>g))),Jl$1(()=>{let g=new xe$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:g,extractedUrl:E,source:$,restoredState:ee,extras:Te}=s,_t=new X(g,this.urlSerializer.serialize(E),$,ee);this.events.next(_t);let Ge=In$1(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=x$3(w$1({},s),{targetSnapshot:Ge,urlAfterRedirects:E,extras:x$3(w$1({},Te),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(te=>(te.finalUrl=E,te)),$o$1(r)}else return this.events.next(new B(s.id,this.urlSerializer.serialize(s.extractedUrl),``,ye.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Zt$3}),ie$1(s=>{let u=new ht(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(u),this.currentTransition=r=x$3(w$1({},s),{guards:Di$1(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),r}),Hi(s=>this.events.next(s)),qo$1(s=>{if(r.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!=`boolean`)throw bt(this.urlSerializer,s.guardsResult);let u=new dt$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!c())return Zt$3;if(!s.guardsResult)return this.cancelNavigationTransition(s,``,b.GuardRejected),Zt$3;if(s.guards.canActivateChecks.length===0)return $o$1(s);let d=new ft(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!c())return Zt$3;let v=!1;return $o$1(s).pipe(vo$1(this.paramsInheritanceStrategy),Jl$1({next:()=>{v=!0;let g=new pt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)},complete:()=>{v||this.cancelNavigationTransition(s,``,b.NoDataFromResolver)}}))}),on$1(s=>{let u=v=>{let g=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let E=v._environmentInjector;g.push(this.configLoader.loadComponent(E,v.routeConfig).then($=>{v.component=$}))}for(let E of v.children)g.push(...u(E));return g},d=u(s.targetSnapshot.root);return d.length===0?$o$1(s):je$2(Promise.all(d).then(()=>s))}),qo$1(s=>{let{newlyCreatedRoutes:u,state:d}=Ei$1(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=r=s=x$3(w$1({},s),{targetRouterState:d,newlyCreatedRoutes:u}),this.currentNavigation.update(v=>(v.targetRouterState=d,v)),$o$1(s)}),this.activatedRouteInjectorFeature?.operator()??(s=>s),on$1(()=>this.afterPreactivation()),qo$1(()=>{let{currentSnapshot:s,targetSnapshot:u}=r,d=this.createViewTransition?.(this.environmentInjector,s.root,u.root);return d?je$2(d).pipe(ie$1(()=>r)):$o$1(r)}),Kt$1(1),qo$1(s=>{i=!1,this.events.next(new Se$1);let u=r.beforeActivateHandler.deferredHandle;return u?je$2(u.then(()=>s)):$o$1(s)}),Jl$1(s=>{new nr(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(o=!0,this.currentNavigation.update(u=>(u.abort=Co$1,u)),this.lastSuccessfulNavigation.set(ar$1(this.currentNavigation)),this.events.next(new k(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Gm(Un$1(a.signal).pipe(Et$2(()=>!o&&i),Jl$1(()=>{this.cancelNavigationTransition(r,a.signal.reason+``,b.Aborted)}))),Jl$1({complete:()=>{o=!0}}),Gm(this.transitionAbortWithErrorSubject.pipe(Jl$1(s=>{throw s}))),ra$1(()=>{a.abort(),o||this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Js$1(s=>{if(o=!0,an$1(r),this.destroyed)return r.resolve(!1),Zt$3;if(Dn$1(s))this.events.next(new x$1(r.id,this.urlSerializer.serialize(r.extractedUrl),s.message,s.cancellationCode)),Ni$1(s)?this.events.next(new Ce$1(s.url,s.navigationBehaviorOptions)):r.resolve(!1);else{let u=new se$1(r.id,this.urlSerializer.serialize(r.extractedUrl),s,r.targetSnapshot??void 0);try{let d=Bn$2(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(d instanceof be$1){let{message:v,cancellationCode:g}=bt(this.urlSerializer,d);this.events.next(new x$1(r.id,this.urlSerializer.serialize(r.extractedUrl),v,g)),this.events.next(new Ce$1(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(d){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(d)}}return Zt$3}))}))}cancelNavigationTransition(e,r,i){an$1(e);let o=new x$1(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=ar$1(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static ɵfac=function(r){return new(r||t)};static ɵprov=ue$1({token:t,factory:t.ɵfac})}return t})();function wo$1(t){return t!==ge}function an$1(t){if(t.newlyCreatedRoutes)for(let n of t.newlyCreatedRoutes)n._localInjector?.destroy()}var Gn$1=new I$3(``);var Wn$1=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=ue$1({token:t,factory:()=>g(bo$1)})}return t})();var At=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}};var bo$1=(()=>{class t extends At{static ɵfac=function(r){return new(r||t)};static ɵprov=ue$1({token:t,factory:t.ɵfac})}return t})();var Nt=(()=>{class t{urlSerializer=g(ue);options=g(le$1,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=g(Tg);urlHandlingStrategy=g(Mt$1);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new A;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,a=i??o;return a instanceof A?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=In$1(null,g(ae$3));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(r){return new(r||t)};static ɵprov=ue$1({token:t,factory:()=>g(Io$1)})}return t})();var Io$1=(()=>{class t extends Nt{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type===`popstate`&&setTimeout(()=>{e(r.url,r.state,`popstate`,{replaceUrl:!0})})})}handleRouterEvent(e,r){e instanceof X?this.updateStateMemento():e instanceof B?this.commitTransition(r):e instanceof xe$1?this.urlUpdateStrategy===`eager`&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof Se$1?(this.commitTransition(r),this.urlUpdateStrategy===`deferred`&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof x$1&&!bn$1(e)?this.restoreHistory(r):e instanceof se$1?this.restoreHistory(r,!0):e instanceof k&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:a,state:c}=i;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,u=w$1(w$1({},c),this.generateNgRouterState(o,s,r));this.location.replaceState(e,``,u)}else{let s=w$1(w$1({},c),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,``,s)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution===`computed`?w$1({navigationId:e,ɵrouterPageId:r},this.routerUrlState(i)):w$1({navigationId:e},this.routerUrlState(i))}static ɵfac=function(r){return new(r||t)};static ɵprov=ue$1({token:t,factory:t.ɵfac})}return t})();function mr(t,n){t.events.pipe(Et$2(e=>e instanceof k||e instanceof x$1||e instanceof se$1||e instanceof B),ie$1(e=>e instanceof k||e instanceof B?0:(e instanceof x$1?e.code===b.Redirect||e.code===b.SupersededByNewNavigation:!1)?2:1),Et$2(e=>e!==2),Kt$1(1)).subscribe(()=>{n()})}var he=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=g(Mh);stateManager=g(Nt);options=g(le$1,{optional:!0})||{};pendingTasks=g(Ot$1);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=g(vr);urlSerializer=g(ue);location=g(Tg);urlHandlingStrategy=g(Mt$1);injector=g(ae$3);_events=new J$4;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=g(Wn$1);injectorCleanup=g(Gn$1,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=g(Ve$1,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!g(Et$1,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Z$3;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=ar$1(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof x$1&&r.code!==b.Redirect&&r.code!==b.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof k)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof Ce$1){let a=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),s=w$1({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||wo$1(i.source)},a);this.scheduleNavigation(c,ge,null,s,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}bi$1(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ge,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o)=>{this.navigateToSyncWithBrowser(e,i,r,o)})}navigateToSyncWithBrowser(e,r,i,o){let a=i?.navigationId?i:null,c=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(o=x$3(w$1({},o),{browserUrl:e})),i){let u=w$1({},i);delete u.navigationId,delete u.ɵrouterPageId,delete u.ɵrouterUrl,Object.keys(u).length!==0&&(o.state=u)}let s=this.parseUrl(c);this.scheduleNavigation(s,r,a,o).catch(u=>{this.disposed||this.injector.get(lt$2)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ar$1(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(pr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:s}=r,u=s?this.currentUrlTree.fragment:a,d=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:d=w$1(w$1({},this.currentUrlTree.queryParams),o);break;case`preserve`:d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let v;try{v=Rn$1(i?i.snapshot:this.routerState.snapshot.root)}catch(g){(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),v=this.currentUrlTree.root}return Sn$1(v,e,d,u??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=J(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,ge,null,r)}navigate(e,r={skipLocationChange:!1}){return Ao$1(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(r){return this.console.warn(Ve$3(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,r){let i;if(r===!0?i=w$1({},cr):r===!1?i=w$1({},me):i=w$1(w$1({},me),r),J(e))return Kt(this.currentUrlTree,e,i);let o=this.parseUrl(e);return Kt(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,a){if(this.disposed)return Promise.resolve(!1);let c,s,u;a?(c=a.resolve,s=a.reject,u=a.promise):u=new Promise((v,g)=>{c=v,s=g});let d=this.pendingTasks.add();return mr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:c,reject:s,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static ɵfac=function(r){return new(r||t)};static ɵprov=ue$1({token:t,factory:t.ɵfac})}return t})();function Ao$1(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new v$2(4008,!1)}var Eo$1=(()=>{class t{router=g(he);stateManager=g(Nt);fragment=Ii$2(``);queryParams=Ii$2({});path=Ii$2(``);serializer=g(ue);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof k&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new A(r)))}static ɵfac=function(r){return new(r||t)};static ɵprov=ue$1({token:t,factory:t.ɵfac})}return t})();var Dt=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=g(new ag(`href`),{optional:!0});reactiveHref=zw(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ar$1(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ar$1(this._target)}_target=Ii$2(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ar$1(this._queryParams)}_queryParams=Ii$2(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ar$1(this._fragment)}_fragment=Ii$2(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ar$1(this._queryParamsHandling)}_queryParamsHandling=Ii$2(void 0);set state(e){this._state.set(e)}get state(){return ar$1(this._state)}_state=Ii$2(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ar$1(this._info)}_info=Ii$2(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ar$1(this._relativeTo)}_relativeTo=Ii$2(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ar$1(this._preserveFragment)}_preserveFragment=Ii$2(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ar$1(this._skipLocationChange)}_skipLocationChange=Ii$2(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ar$1(this._replaceUrl)}_replaceUrl=Ii$2(!1);browserUrl=F1(void 0);isAnchorElement;onChanges=new J$4;applicationErrorHandler=g(lt$2);options=g(le$1,{optional:!0});reactiveRouterState=g(Eo$1);constructor(e,r,i,o,a,c){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=c;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s===`a`||s===`area`||!!(typeof customElements==`object`&&customElements.get(s)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Ii$2(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(J(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,r,i,o,a){let c=this._urlTree();if(c===null||this.isAnchorElement&&(e!==0||r||i||o||a||typeof this.target==`string`&&this.target!=`_self`))return!0;let s=this.browserUrl(),u=w$1({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(c,u)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}_urlTree=Uw(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i===`preserve`||i===`merge`;(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let r=this.routerLinkInput();return r===null||!this.router.createUrlTree?null:J(r)?r:this.router.createUrlTree(r,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,r)=>this.computeHref(e)===this.computeHref(r)});get urlTree(){return ar$1(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(r){return new(r||t)(In$2(he),In$2(W),eu(`tabindex`),In$2(Xr$1),In$2(Dn$2),In$2(vs$1))};static ɵdir=Fu({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(r,i){r&1&&Bh(`click`,function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&Ah(`href`,i.reactiveHref(),Yv)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,TC],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,TC],replaceUrl:[2,`replaceUrl`,`replaceUrl`,TC],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[Xc]})}return t})();var To$1=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new st$2;link=g(Dt,{optional:!0});constructor(e,r,i,o){this.router=e,this.element=r,this.renderer=i,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof k&&this.update()})}ngAfterContentInit(){$o$1(this.links.changes,$o$1(null)).pipe(Er()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(r=>!!r).map(r=>r.onChanges);this.linkInputChangesSubscription=je$2(e).pipe(Er()).subscribe(r=>{this._isActive!==this.isLinkActive(this.router)(r)&&this.update()})}set routerLinkActive(e){if(e==null){this.classes=[];return}let r=Array.isArray(e)?e:e.split(` `);this.classes=r.filter(i=>!!i)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(r=>{e?this.renderer.addClass(this.element.nativeElement,r):this.renderer.removeClass(this.element.nativeElement,r)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,`aria-current`,this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,`aria-current`),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let r=this.routerLinkActiveOptions;if(r===null)return()=>!1;let i;return r===void 0?i=w$1({},me):Mo$1(r)?i=r:r.exact??!1?i=w$1({},cr):i=w$1({},me),o=>{let a=o.urlTree;return a?ar$1(ur(a,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static ɵfac=function(r){return new(r||t)(In$2(he),In$2(Dn$2),In$2(Xr$1),In$2(gg))};static ɵdir=Fu({type:t,selectors:[[``,`routerLinkActive`,``]],contentQueries:function(r,i,o){if(r&1&&Hh(o,Dt,5),r&2){let a;JI(a=ew())&&(i.links=a)}},inputs:{routerLinkActiveOptions:`routerLinkActiveOptions`,ariaCurrentWhenActive:`ariaCurrentWhenActive`,routerLinkActive:`routerLinkActive`},outputs:{isActiveChange:`isActiveChange`},exportAs:[`routerLinkActive`],features:[Xc]})}return t})();function Mo$1(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Qn$1=new I$3(``);var No$1=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=ge;restoredId=0;store={};isHydrating=g(hv,{optional:!0})??!1;urlSerializer=g(ue);zone=g(z$1);viewportScroller=g(kB);transitions=g(vr);constructor(e){this.options=e,this.options.scrollPositionRestoration||=`disabled`,this.options.anchorScrolling||=`disabled`,this.isHydrating&&g(sr$1).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.setHistoryScrollRestoration(`manual`),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof X?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof k?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof B&&e.code===ye.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Re)||e.scrollBehavior===`manual`)return;let r={behavior:`instant`};e.position?this.options.scrollPositionRestoration===`top`?this.viewportScroller.scrollToPosition([0,0],r):this.options.scrollPositionRestoration===`enabled`&&this.viewportScroller.scrollToPosition(e.position,r):e.anchor&&this.options.anchorScrolling===`enabled`?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,r){if(this.isHydrating)return;let i=ar$1(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>B$2(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<`u`&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Re(e,this.lastSource===`popstate`?this.store[this.restoredId]:null,r,i))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static ɵfac=function(r){OE()};static ɵprov=A$2({token:t,factory:t.ɵfac})}return t})();function Do$1(t,...n){return Mt$2([{provide:Ve$1,multi:!0,useValue:t},{provide:W,useFactory:_o$1},{provide:Vu,multi:!0,useFactory:Oo$1},n.map(e=>e.ɵproviders)])}function _o$1(){return g(he).routerState.root}function Kn$1(t,n){return{ɵkind:t,ɵproviders:n}}function Uo$1(t={}){return Kn$1(4,[{provide:Qn$1,useFactory:()=>new No$1(t)}])}function Oo$1(){let t=g(fe$3);return n=>{let e=t.get(sr$1);if(n!==e.components[0])return;let r=t.get(he),i=t.get(Po$1);t.get(Lo$1)===1&&r.initialNavigation(),t.get(jo$1,null,{optional:!0})?.setUpPreloading(),t.get(Qn$1,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var Po$1=new I$3(``,{factory:()=>new J$4});var Lo$1=new I$3(``,{factory:()=>1});var jo$1=new I$3(``);function xo$1(t){return Kn$1(5,[{provide:le$1,useValue:t}])}var x=(function(n){return n[n.State=0]=`State`,n[n.Transition=1]=`Transition`,n[n.Sequence=2]=`Sequence`,n[n.Group=3]=`Group`,n[n.Animate=4]=`Animate`,n[n.Keyframes=5]=`Keyframes`,n[n.Style=6]=`Style`,n[n.Trigger=7]=`Trigger`,n[n.Reference=8]=`Reference`,n[n.AnimateChild=9]=`AnimateChild`,n[n.AnimateRef=10]=`AnimateRef`,n[n.Query=11]=`Query`,n[n.Stagger=12]=`Stagger`,n})(x||{});var Ct=`*`;function rs(n,e=null){return{type:x.Sequence,steps:n,options:e}}function rn(n){return{type:x.Style,styles:n,offset:null}}var zt=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(e=0,t=0){this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let t=e==`start`?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}};var be=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(e){this.players=e;let t=0,i=0,r=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++t==s&&this._onFinish()}),o.onDestroy(()=>{++i==s&&this._onDestroy()}),o.onStart(()=>{++r==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let t=e*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,t/i.totalTime):1;i.setPosition(r)})}getPosition(){let e=this.players.reduce((t,i)=>t===null||i.totalTime>t.totalTime?i:t,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let t=e==`start`?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}};var ze=`!`;function ss(n){return new v$2(3e3,!1)}function aa(){return new v$2(3100,!1)}function la(){return new v$2(3101,!1)}function ca(n){return new v$2(3001,!1)}function da(n){return new v$2(3003,!1)}function ma(n){return new v$2(3004,!1)}function as(n,e){return new v$2(3005,!1)}function ls(){return new v$2(3006,!1)}function cs(){return new v$2(3007,!1)}function ds(n,e){return new v$2(3008,!1)}function ms(n){return new v$2(3002,!1)}function hs(n,e,t,i,r){return new v$2(3010,!1)}function ps(){return new v$2(3011,!1)}function us(){return new v$2(3012,!1)}function fs(){return new v$2(3200,!1)}function gs(){return new v$2(3202,!1)}function _s(){return new v$2(3013,!1)}function ys(n){return new v$2(3014,!1)}function vs(n){return new v$2(3015,!1)}function bs(n){return new v$2(3016,!1)}function ws(n,e){return new v$2(3404,!1)}function ha(n){return new v$2(3502,!1)}function Ss(n){return new v$2(3503,!1)}function ks(){return new v$2(3300,!1)}function xs(n){return new v$2(3504,!1)}function Cs(n){return new v$2(3301,!1)}function Es(n,e){return new v$2(3302,!1)}function Ms(n){return new v$2(3303,!1)}function Ts(n,e){return new v$2(3400,!1)}function Os(n){return new v$2(3401,!1)}function Ns(n){return new v$2(3402,!1)}function Ps(n,e){return new v$2(3505,!1)}function Vt(n){switch(n.length){case 0:return new zt;case 1:return n[0];default:return new be(n)}}function ln(n,e,t=new Map,i=new Map){let r=[],s=[],o=-1,a=null;if(e.forEach(l=>{let c=l.get(`offset`),d=c==o,h=d&&a||new Map;l.forEach((w,v)=>{let g=v,y=w;if(v!==`offset`)switch(g=n.normalizePropertyName(g,r),y){case ze:y=t.get(v);break;case Ct:y=i.get(v);break;default:y=n.normalizeStyleValue(v,g,y,r);break}h.set(g,y)}),d||s.push(h),a=h,o=c}),r.length)throw ha(r);return s}function li(n,e,t,i){switch(e){case`start`:n.onStart(()=>i(t&&sn(t,`start`,n)));break;case`done`:n.onDone(()=>i(t&&sn(t,`done`,n)));break;case`destroy`:n.onDestroy(()=>i(t&&sn(t,`destroy`,n)));break}}function sn(n,e,t){let i=t.totalTime,r=!!t.disabled,s=ci(n.element,n.triggerName,n.fromState,n.toState,e||n.phaseName,i??n.totalTime,r),o=n._data;return o!=null&&(s._data=o),s}function ci(n,e,t,i,r=``,s=0,o){return{element:n,triggerName:e,fromState:t,toState:i,phaseName:r,totalTime:s,disabled:!!o}}function dt(n,e,t){let i=n.get(e);return i||n.set(e,i=t),i}function cn(n){let e=n.indexOf(`:`);return[n.substring(1,e),n.slice(e+1)]}var pa=typeof document>`u`?null:document.documentElement;function di(n){let e=n.parentNode||n.host||null;return e===pa?null:e}function ua(n){return n.substring(1,6)==`ebkit`}var se=null;var os=!1;function Ds(n){se||(se=fa()||{},os=se.style?`WebkitAppearance`in se.style:!1);let e=!0;return se.style&&!ua(n)&&(e=n in se.style,!e&&os&&(e=`Webkit`+n.charAt(0).toUpperCase()+n.slice(1)in se.style)),e}function fa(){return typeof document<`u`?document.body:null}function dn(n,e){for(;e;){if(e===n)return!0;e=di(e)}return!1}function mn(n,e,t){if(t)return Array.from(n.querySelectorAll(e));let i=n.querySelector(e);return i?[i]:[]}var ga=1e3;var hn=`{{`;var _a=`}}`;var pn=`ng-enter`;var mi=`ng-leave`;var Ve=`ng-trigger`;var je=`.ng-trigger`;var un=`ng-animating`;var hi=`.ng-animating`;function Lt(n){if(typeof n==`number`)return n;let e=n.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:on(parseFloat(e[1]),e[2])}function on(n,e){return e===`s`?n*ga:n}function He(n,e,t){return n.hasOwnProperty(`duration`)?n:va(n,e,t)}var ya=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function va(n,e,t){let i,r=0,s=``;if(typeof n==`string`){let o=n.match(ya);if(o===null)return e.push(ss(n)),{duration:0,delay:0,easing:``};i=on(parseFloat(o[1]),o[2]);let a=o[3];a!=null&&(r=on(parseFloat(a),o[4]));let l=o[5];l&&(s=l)}else i=n;if(!t){let o=!1,a=e.length;i<0&&(e.push(aa()),o=!0),r<0&&(e.push(la()),o=!0),o&&e.splice(a,0,ss(n))}return{duration:i,delay:r,easing:s}}function As(n){return n.length?n[0]instanceof Map?n:n.map(e=>new Map(Object.entries(e))):[]}function Et(n,e,t){e.forEach((i,r)=>{let s=pi(r);t&&!t.has(r)&&t.set(r,n.style[s]),n.style[s]=i})}function Qt(n,e){e.forEach((t,i)=>{let r=pi(i);n.style[r]=``})}function we(n){return Array.isArray(n)?n.length==1?n[0]:rs(n):n}function Rs(n,e,t){let i=e.params||{},r=fn(n);r.length&&r.forEach(s=>{i.hasOwnProperty(s)||t.push(ca(s))})}var an=new RegExp(`${hn}\\s*(.+?)\\s*${_a}`,`g`);function fn(n){let e=[];if(typeof n==`string`){let t;for(;t=an.exec(n);)e.push(t[1]);an.lastIndex=0}return e}function Se(n,e,t){let i=`${n}`,r=i.replace(an,(s,o)=>{let a=e[o];return a??(t.push(da(o)),a=``),a.toString()});return r==i?n:r}var ba=/-+([a-z0-9])/g;function pi(n){return n.replace(ba,(...e)=>e[1].toUpperCase())}function Is(n,e){return n===0||e===0}function Ls(n,e,t){if(t.size&&e.length){let i=e[0],r=[];if(t.forEach((s,o)=>{i.has(o)||r.push(o),i.set(o,s)}),r.length)for(let s=1;s<e.length;s++){let o=e[s];r.forEach(a=>o.set(a,ui(n,a)))}}return e}function mt(n,e,t){switch(e.type){case x.Trigger:return n.visitTrigger(e,t);case x.State:return n.visitState(e,t);case x.Transition:return n.visitTransition(e,t);case x.Sequence:return n.visitSequence(e,t);case x.Group:return n.visitGroup(e,t);case x.Animate:return n.visitAnimate(e,t);case x.Keyframes:return n.visitKeyframes(e,t);case x.Style:return n.visitStyle(e,t);case x.Reference:return n.visitReference(e,t);case x.AnimateChild:return n.visitAnimateChild(e,t);case x.AnimateRef:return n.visitAnimateRef(e,t);case x.Query:return n.visitQuery(e,t);case x.Stagger:return n.visitStagger(e,t);default:throw ma(e.type)}}function ui(n,e){return window.getComputedStyle(n)[e]}var Dn=(()=>{class n{validateStyleProperty(t){return Ds(t)}containsElement(t,i){return dn(t,i)}getParentElement(t){return di(t)}query(t,i,r){return mn(t,i,r)}computeStyle(t,i,r){return r||``}animate(t,i,r,s,o,a=[],l){return new zt(r,s)}static ɵfac=function(i){return new(i||n)};static ɵprov=A$2({token:n,factory:n.ɵfac})}return n})();var ae=class{static NOOP=new Dn};var le=class{};var wa=new Set([`width`,`height`,`minWidth`,`minHeight`,`maxWidth`,`maxHeight`,`left`,`top`,`bottom`,`right`,`fontSize`,`outlineWidth`,`outlineOffset`,`paddingTop`,`paddingLeft`,`paddingBottom`,`paddingRight`,`marginTop`,`marginLeft`,`marginBottom`,`marginRight`,`borderRadius`,`borderWidth`,`borderTopWidth`,`borderLeftWidth`,`borderRightWidth`,`borderBottomWidth`,`textIndent`,`perspective`]);var vi=class extends le{normalizePropertyName(e,t){return pi(e)}normalizeStyleValue(e,t,i,r){let s=``,o=i.toString().trim();if(wa.has(t)&&i!==0&&i!==`0`)if(typeof i==`number`)s=`px`;else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(as(e,i))}return o+s}};var bi=`*`;function Sa(n,e){let t=[];return typeof n==`string`?n.split(/\s*,\s*/).forEach(i=>ka(i,t,e)):t.push(n),t}function ka(n,e,t){if(n[0]==`:`){let l=xa(n,t);if(typeof l==`function`){e.push(l);return}n=l}let i=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return t.push(vs(n)),e;let r=i[1],s=i[2],o=i[3];e.push(Fs(r,o));let a=r==bi&&o==bi;s[0]==`<`&&!a&&e.push(Fs(o,r))}function xa(n,e){switch(n){case`:enter`:return`void => *`;case`:leave`:return`* => void`;case`:increment`:return(t,i)=>parseFloat(i)>parseFloat(t);case`:decrement`:return(t,i)=>parseFloat(i)<parseFloat(t);default:return e.push(bs(n)),`* => *`}}var fi=new Set([`true`,`1`]);var gi=new Set([`false`,`0`]);function Fs(n,e){let t=fi.has(n)||gi.has(n),i=fi.has(e)||gi.has(e);return(r,s)=>{let o=n==bi||n==r,a=e==bi||e==s;return!o&&t&&typeof r==`boolean`&&(o=r?fi.has(n):gi.has(n)),!a&&i&&typeof s==`boolean`&&(a=s?fi.has(e):gi.has(e)),o&&a}}var qs=`:self`;var Ca=new RegExp(`s*${qs}s*,?`,`g`);function Ks(n,e,t,i){return new wn(n).build(e,t,i)}var Bs=``;var wn=class{_driver;constructor(e){this._driver=e}build(e,t,i){let r=new Sn(t);return this._resetContextStyleTimingState(r),mt(this,we(e),r)}_resetContextStyleTimingState(e){e.currentQuerySelector=Bs,e.collectedStyles=new Map,e.collectedStyles.set(Bs,new Map),e.currentTime=0}visitTrigger(e,t){let i=t.queryCount=0,r=t.depCount=0,s=[],o=[];return e.name.charAt(0)==`@`&&t.errors.push(ls()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(t),a.type==x.State){let l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(d=>{l.name=d,s.push(this.visitState(l,t))}),l.name=c}else if(a.type==x.Transition){let l=this.visitTransition(a,t);i+=l.queryCount,r+=l.depCount,o.push(l)}else t.errors.push(cs())}),{type:x.Trigger,name:e.name,states:s,transitions:o,queryCount:i,depCount:r,options:null}}visitState(e,t){let i=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(i.containsDynamicStyles){let s=new Set,o=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{fn(l).forEach(c=>{o.hasOwnProperty(c)||s.add(c)})})}),s.size&&t.errors.push(ds(e.name,[...s.values()]))}return{type:x.State,name:e.name,style:i,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let i=mt(this,we(e.animation),t),r=Sa(e.expr,t.errors);return{type:x.Transition,matchers:r,animation:i,queryCount:t.queryCount,depCount:t.depCount,options:oe(e.options)}}visitSequence(e,t){return{type:x.Sequence,steps:e.steps.map(i=>mt(this,i,t)),options:oe(e.options)}}visitGroup(e,t){let i=t.currentTime,r=0,s=e.steps.map(o=>{t.currentTime=i;let a=mt(this,o,t);return r=Math.max(r,t.currentTime),a});return t.currentTime=r,{type:x.Group,steps:s,options:oe(e.options)}}visitAnimate(e,t){let i=Oa(e.timings,t.errors);t.currentAnimateTimings=i;let r,s=e.styles?e.styles:rn({});if(s.type==x.Keyframes)r=this.visitKeyframes(s,t);else{let o=e.styles,a=!1;if(!o){a=!0;let c={};i.easing&&(c.easing=i.easing),o=rn(c)}t.currentTime+=i.duration+i.delay;let l=this.visitStyle(o,t);l.isEmptyStep=a,r=l}return t.currentAnimateTimings=null,{type:x.Animate,timings:i,style:r,options:null}}visitStyle(e,t){let i=this._makeStyleAst(e,t);return this._validateStyleAst(i,t),i}_makeStyleAst(e,t){let i=[],r=Array.isArray(e.styles)?e.styles:[e.styles];for(let a of r)typeof a==`string`?a===Ct?i.push(a):t.errors.push(ms(a)):i.push(new Map(Object.entries(a)));let s=!1,o=null;return i.forEach(a=>{if(a instanceof Map&&(a.has(`easing`)&&(o=a.get(`easing`),a.delete(`easing`)),!s)){for(let l of a.values())if(l.toString().indexOf(hn)>=0){s=!0;break}}}),{type:x.Style,styles:i,easing:o,offset:e.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(e,t){let i=t.currentAnimateTimings,r=t.currentTime,s=t.currentTime;i&&s>0&&(s-=i.duration+i.delay),e.styles.forEach(o=>{typeof o!=`string`&&o.forEach((a,l)=>{let c=t.collectedStyles.get(t.currentQuerySelector),d=c.get(l),h=!0;d&&(s!=r&&s>=d.startTime&&r<=d.endTime&&(t.errors.push(hs(l,d.startTime,d.endTime,s,r)),h=!1),s=d.startTime),h&&c.set(l,{startTime:s,endTime:r}),t.options&&Rs(a,t.options,t.errors)})})}visitKeyframes(e,t){let i={type:x.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(ps()),i;let r=1,s=0,o=[],a=!1,l=!1,c=0,d=e.steps.map(z=>{let V=this._makeStyleAst(z,t),$=V.offset!=null?V.offset:Ta(V.styles),G=0;return $!=null&&(s++,G=V.offset=$),l=l||G<0||G>1,a=a||G<c,c=G,o.push(G),V});l&&t.errors.push(us()),a&&t.errors.push(fs());let h=e.steps.length,w=0;s>0&&s<h?t.errors.push(gs()):s==0&&(w=r/(h-1));let v=h-1,g=t.currentTime,y=t.currentAnimateTimings,T=y.duration;return d.forEach((z,V)=>{let $=w>0?V==v?1:w*V:o[V],G=$*T;t.currentTime=g+y.delay+G,y.duration=G,this._validateStyleAst(z,t),z.offset=$,i.styles.push(z)}),i}visitReference(e,t){return{type:x.Reference,animation:mt(this,we(e.animation),t),options:oe(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:x.AnimateChild,options:oe(e.options)}}visitAnimateRef(e,t){return{type:x.AnimateRef,animation:this.visitReference(e.animation,t),options:oe(e.options)}}visitQuery(e,t){let i=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;let[s,o]=Ea(e.selector);t.currentQuerySelector=i.length?i+` `+s:s,dt(t.collectedStyles,t.currentQuerySelector,new Map);let a=mt(this,we(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=i,{type:x.Query,selector:s,limit:r.limit||0,optional:!!r.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:oe(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(_s());let i=e.timings===`full`?{duration:0,delay:0,easing:`full`}:He(e.timings,t.errors,!0);return{type:x.Stagger,animation:mt(this,we(e.animation),t),timings:i,options:null}}};function Ea(n){let e=!!n.split(/\s*,\s*/).find(t=>t==qs);return e&&(n=n.replace(Ca,``)),n=n.replace(/@\*/g,je).replace(/@\w+/g,t=>je+`-`+t.slice(1)).replace(/:animating/g,hi),[n,e]}function Ma(n){return n?w$1({},n):null}var Sn=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(e){this.errors=e}};function Ta(n){if(typeof n==`string`)return null;let e=null;if(Array.isArray(n))n.forEach(t=>{if(t instanceof Map&&t.has(`offset`)){let i=t;e=parseFloat(i.get(`offset`)),i.delete(`offset`)}});else if(n instanceof Map&&n.has(`offset`)){let t=n;e=parseFloat(t.get(`offset`)),t.delete(`offset`)}return e}function Oa(n,e){if(n.hasOwnProperty(`duration`))return n;if(typeof n==`number`){let s=He(n,e).duration;return gn(s,0,``)}let t=n;if(t.split(/\s+/).some(s=>s.charAt(0)==`{`&&s.charAt(1)==`{`)){let s=gn(0,0,``);return s.dynamic=!0,s.strValue=t,s}let r=He(t,e);return gn(r.duration,r.delay,r.easing)}function oe(n){return n?(n=w$1({},n),n.params&&(n.params=Ma(n.params))):n={},n}function gn(n,e,t){return{duration:n,delay:e,easing:t}}function An(n,e,t,i,r,s,o=null,a=!1){return{type:1,element:n,keyframes:e,preStyleProps:t,postStyleProps:i,duration:r,delay:s,totalTime:r+s,easing:o,subTimeline:a}}var Ue=class{_map=new Map;get(e){return this._map.get(e)||[]}append(e,t){let i=this._map.get(e);i||this._map.set(e,i=[]),i.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}};var Na=1;var Da=new RegExp(`:enter`,`g`);var Ra=new RegExp(`:leave`,`g`);function Xs(n,e,t,i,r,s=new Map,o=new Map,a,l,c=[]){return new kn().buildKeyframes(n,e,t,i,r,s,o,a,l,c)}var kn=class{buildKeyframes(e,t,i,r,s,o,a,l,c,d=[]){c=c||new Ue;let h=new xn(e,t,c,r,s,d,[]);h.options=l;let w=l.delay?Lt(l.delay):0;h.currentTimeline.delayNextStep(w),h.currentTimeline.setStyles([o],null,h.errors,l),mt(this,i,h);let v=h.timelines.filter(g=>g.containsAnimation());if(v.length&&a.size){let g;for(let y=v.length-1;y>=0;y--){let T=v[y];if(T.element===t){g=T;break}}g&&!g.allowOnlyTimelineStyles()&&g.setStyles([a],null,h.errors,l)}return v.length?v.map(g=>g.buildKeyframes()):[An(t,[],[],[],0,w,``,!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let i=t.subInstructions.get(t.element);if(i){let r=t.createSubContext(e.options),s=t.currentTimeline.currentTime,o=this._visitSubInstructions(i,r,r.options);s!=o&&t.transformIntoNewTimeline(o)}t.previousNode=e}visitAnimateRef(e,t){let i=t.createSubContext(e.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,i),this.visitReference(e.animation,i),t.transformIntoNewTimeline(i.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,i){for(let r of e){let s=r?.delay;if(s){let o=typeof s==`number`?s:Lt(Se(s,r?.params??{},t.errors));i.delayNextStep(o)}}}_visitSubInstructions(e,t,i){let s=t.currentTimeline.currentTime,o=i.duration!=null?Lt(i.duration):null,a=i.delay!=null?Lt(i.delay):null;return o!==0&&e.forEach(l=>{let c=t.appendInstructionToTimeline(l,o,a);s=Math.max(s,c.duration+c.delay)}),s}visitReference(e,t){t.updateOptions(e.options,!0),mt(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let i=t.subContextCount,r=t,s=e.options;if(s&&(s.params||s.delay)&&(r=t.createSubContext(s),r.transformIntoNewTimeline(),s.delay!=null)){r.previousNode.type==x.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=wi);let o=Lt(s.delay);r.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>mt(this,o,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let i=[],r=t.currentTimeline.currentTime,s=e.options&&e.options.delay?Lt(e.options.delay):0;e.steps.forEach(o=>{let a=t.createSubContext(e.options);s&&a.delayNextStep(s),mt(this,o,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(o=>t.currentTimeline.mergeTimelineCollectedStyles(o)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let i=e.strValue;return He(t.params?Se(i,t.params,t.errors):i,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let i=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;i.delay&&(t.incrementTime(i.delay),r.snapshotCurrentStyles());let s=e.style;s.type==x.Keyframes?this.visitKeyframes(s,t):(t.incrementTime(i.duration),this.visitStyle(s,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let i=t.currentTimeline,r=t.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let s=r&&r.easing||e.easing;e.isEmptyStep?i.applyEmptyStep(s):i.setStyles(e.styles,s,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let i=t.currentAnimateTimings,r=t.currentTimeline.duration,s=i.duration,a=t.createSubContext().currentTimeline;a.easing=i.easing,e.styles.forEach(l=>{let c=l.offset||0;a.forwardTime(c*s),a.setStyles(l.styles,l.easing,t.errors,t.options),a.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(r+s),t.previousNode=e}visitQuery(e,t){let i=t.currentTimeline.currentTime,r=e.options||{},s=r.delay?Lt(r.delay):0;s&&(t.previousNode.type===x.Style||i==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=wi);let o=i,a=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=a.length;let l=null;a.forEach((c,d)=>{t.currentQueryIndex=d;let h=t.createSubContext(e.options,c);s&&h.delayNextStep(s),c===t.element&&(l=h.currentTimeline),mt(this,e.animation,h),h.currentTimeline.applyStylesToKeyframe();let w=h.currentTimeline.currentTime;o=Math.max(o,w)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let i=t.parentContext,r=t.currentTimeline,s=e.timings,o=Math.abs(s.duration),a=o*(t.currentQueryTotal-1),l=o*t.currentQueryIndex;switch(s.duration<0?`reverse`:s.easing){case`reverse`:l=a-l;break;case`full`:l=i.currentStaggerTime;break}let d=t.currentTimeline;l&&d.delayNextStep(l);let h=d.currentTime;mt(this,e.animation,t),t.previousNode=e,i.currentStaggerTime=r.currentTime-h+(r.startTime-i.currentTimeline.startTime)}};var wi={};var xn=class n{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=wi;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(e,t,i,r,s,o,a,l){this._driver=e,this.element=t,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=s,this.errors=o,this.timelines=a,this.currentTimeline=l||new Si(this._driver,t,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let i=e,r=this.options;i.duration!=null&&(r.duration=Lt(i.duration)),i.delay!=null&&(r.delay=Lt(i.delay));let s=i.params;if(s){let o=r.params;o||(o=this.options.params={}),Object.keys(s).forEach(a=>{(!t||!o.hasOwnProperty(a))&&(o[a]=Se(s[a],o,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let i=e.params={};Object.keys(t).forEach(r=>{i[r]=t[r]})}}return e}createSubContext(e=null,t,i){let r=t||this.element,s=new n(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=wi,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,i){let r={duration:t??e.duration,delay:this.currentTimeline.currentTime+(i??0)+e.delay,easing:``},s=new Cn(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(s),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,i,r,s,o){let a=[];if(r&&a.push(this.element),e.length>0){e=e.replace(Da,`.`+this._enterClassName),e=e.replace(Ra,`.`+this._leaveClassName);let l=i!=1,c=this._driver.query(this.element,e,l);i!==0&&(c=i<0?c.slice(c.length+i,c.length):c.slice(0,i)),a.push(...c)}return!s&&a.length==0&&o.push(ys(t)),a}};var Si=class n{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(e,t,i,r){this._driver=e,this.element=t,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new n(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Na,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set(`easing`,e);for(let[t,i]of this._globalTimelineStyles)this._backFill.set(t,i||Ct),this._currentKeyframe.set(t,Ct);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,i,r){t&&this._previousKeyframe.set(`easing`,t);let s=r&&r.params||{},o=Ia(e,this._globalTimelineStyles);for(let[a,l]of o){let c=Se(l,s,i);this._pendingStyles.set(a,c),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??Ct),this._updateStyle(a,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,i)=>{let r=this._styleSummary.get(i);(!r||t.time>r.time)&&this._updateStyle(i,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,l)=>{let c=new Map([...this._backFill,...a]);c.forEach((d,h)=>{d===ze?e.add(h):d===Ct&&t.add(h)}),i||c.set(`offset`,l/this.duration),r.push(c)});let s=[...e.values()],o=[...t.values()];if(i){let a=r[0],l=new Map(a);a.set(`offset`,0),l.set(`offset`,1),r=[a,l]}return An(this.element,r,s,o,this.duration,this.startTime,this.easing,!1)}};var Cn=class extends Si{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(e,t,i,r,s,o,a=!1){super(e,t,o.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=s,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){let s=[],o=i+t,a=t/o,l=new Map(e[0]);l.set(`offset`,0),s.push(l);let c=new Map(e[0]);c.set(`offset`,zs(a)),s.push(c);let d=e.length-1;for(let h=1;h<=d;h++){let w=new Map(e[h]),v=w.get(`offset`),g=t+v*i;w.set(`offset`,zs(g/o)),s.push(w)}i=o,t=0,r=``,e=s}return An(this.element,e,this.preStyleProps,this.postStyleProps,i,t,r,!0)}};function zs(n,e=3){let t=Math.pow(10,e-1);return Math.round(n*t)/t}function Ia(n,e){let t=new Map,i;return n.forEach(r=>{if(r===`*`){i??=e.keys();for(let s of i)t.set(s,Ct)}else for(let[s,o]of r)t.set(s,o)}),t}function Vs(n,e,t,i,r,s,o,a,l,c,d,h,w){return{type:0,element:n,triggerName:e,isRemovalTransition:r,fromState:t,fromStyles:s,toState:i,toStyles:o,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:d,totalTime:h,errors:w}}var _n={};var ki=class{_triggerName;ast;_stateStyles;constructor(e,t,i){this._triggerName=e,this.ast=t,this._stateStyles=i}match(e,t,i,r){return La(this.ast.matchers,e,t,i,r)}buildStyles(e,t,i){let r=this._stateStyles.get(`*`);return e!==void 0&&(r=this._stateStyles.get(e?.toString())||r),r?r.buildStyles(t,i):new Map}build(e,t,i,r,s,o,a,l,c,d){let h=[],w=this.ast.options&&this.ast.options.params||_n,v=a&&a.params||_n,g=this.buildStyles(i,v,h),y=l&&l.params||_n,T=this.buildStyles(r,y,h),z=new Set,V=new Map,$=new Map,G=r===`void`,me={params:Ys(y,w),delay:this.ast.options?.delay},Tt=d?[]:Xs(e,t,this.ast.animation,s,o,g,T,me,c,h),Z=0;return Tt.forEach(rt=>{Z=Math.max(rt.duration+rt.delay,Z)}),h.length?Vs(t,this._triggerName,i,r,G,g,T,[],[],V,$,Z,h):(Tt.forEach(rt=>{let Gt=rt.element,he=dt(V,Gt,new Set);rt.preStyleProps.forEach(qt=>he.add(qt));let tr=dt($,Gt,new Set);rt.postStyleProps.forEach(qt=>tr.add(qt)),Gt!==t&&z.add(Gt)}),Vs(t,this._triggerName,i,r,G,g,T,Tt,[...z.values()],V,$,Z))}};function La(n,e,t,i,r){return n.some(s=>s(e,t,i,r))}function Ys(n,e){let t=w$1({},e);return Object.entries(n).forEach(([i,r])=>{r!=null&&(t[i]=r)}),t}var En=class{styles;defaultParams;normalizer;constructor(e,t,i){this.styles=e,this.defaultParams=t,this.normalizer=i}buildStyles(e,t){let i=new Map,r=Ys(e,this.defaultParams);return this.styles.styles.forEach(s=>{typeof s!=`string`&&s.forEach((o,a)=>{o&&(o=Se(o,r,t));let l=this.normalizer.normalizePropertyName(a,t);o=this.normalizer.normalizeStyleValue(a,l,o,t),i.set(a,o)})}),i}};function Fa(n,e,t){return new Mn(n,e,t)}var Mn=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(e,t,i){this.name=e,this.ast=t,this._normalizer=i,t.states.forEach(r=>{let s=r.options&&r.options.params||{};this.states.set(r.name,new En(r.style,s,i))}),js(this.states,`true`,`1`),js(this.states,`false`,`0`),t.transitions.forEach(r=>{this.transitionFactories.push(new ki(e,r,this.states))}),this.fallbackTransition=Ba(e,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,i,r){return this.transitionFactories.find(o=>o.match(e,t,i,r))||null}matchStyles(e,t,i){return this.fallbackTransition.buildStyles(e,t,i)}};function Ba(n,e,t){let i=[(o,a)=>!0],r={type:x.Sequence,steps:[],options:null};return new ki(n,{type:x.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0},e)}function js(n,e,t){n.has(e)?n.has(t)||n.set(t,n.get(e)):n.has(t)&&n.set(e,n.get(t))}var za=new Ue;var Tn=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i}register(e,t){let i=[],s=Ks(this._driver,t,i,[]);if(i.length)throw Ss(i);this._animations.set(e,s)}_buildPlayer(e,t,i){let r=e.element,s=ln(this._normalizer,e.keyframes,t,i);return this._driver.animate(r,s,e.duration,e.delay,e.easing,[],!0)}create(e,t,i={}){let r=[],s=this._animations.get(e),o,a=new Map;if(s?(o=Xs(this._driver,t,s,pn,mi,new Map,new Map,i,za,r),o.forEach(d=>{let h=dt(a,d.element,new Map);d.postStyleProps.forEach(w=>h.set(w,null))})):(r.push(ks()),o=[]),r.length)throw xs(r);a.forEach((d,h)=>{d.forEach((w,v)=>{d.set(v,this._driver.computeStyle(h,v,Ct))})});let c=Vt(o.map(d=>{let h=a.get(d.element);return this._buildPlayer(d,new Map,h)}));return this._playersById.set(e,c),c.onDestroy(()=>this.destroy(e)),this.players.push(c),c}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let i=this.players.indexOf(t);i>=0&&this.players.splice(i,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw Cs(e);return t}listen(e,t,i,r){let s=ci(t,``,``,``);return li(this._getPlayer(e),i,s,r),()=>{}}command(e,t,i,r){if(i==`register`){this.register(e,r[0]);return}if(i==`create`){let o=r[0]||{};this.create(e,t,o);return}let s=this._getPlayer(e);switch(i){case`play`:s.play();break;case`pause`:s.pause();break;case`reset`:s.reset();break;case`restart`:s.restart();break;case`finish`:s.finish();break;case`init`:s.init();break;case`setPosition`:s.setPosition(parseFloat(r[0]));break;case`destroy`:this.destroy(e);break}}};var Hs=`ng-animate-queued`;var Va=`.ng-animate-queued`;var yn=`ng-animate-disabled`;var ja=`.ng-animate-disabled`;var Ha=`ng-star-inserted`;var Wa=`.ng-star-inserted`;var Ua=[];var $s={namespaceId:``,setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1};var Qa={namespaceId:``,setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0};var Mt=`__ng_removed`;var Qe=class{namespaceId;value;options;get params(){return this.options.params}constructor(e,t=``){this.namespaceId=t;let i=e&&e.hasOwnProperty(`value`),r=i?e.value:e;if(this.value=qa(r),i){let s=e,{value:o}=s,a=y$1(s,[`value`]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let i=this.options.params;Object.keys(t).forEach(r=>{i[r]??(i[r]=t[r])})}}};var We=`void`;var vn=new Qe(We);var On=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(e,t,i){this.id=e,this.hostElement=t,this._engine=i,this._hostClassName=`ng-tns-`+e,kt(t,this._hostClassName)}listen(e,t,i,r){if(!this._triggers.has(t))throw Es(i,t);if(i==null||i.length==0)throw Ms(t);if(!Ka(i))throw Ts(i,t);let s=dt(this._elementListeners,e,[]),o={name:t,phase:i,callback:r};s.push(o);let a=dt(this._engine.statesByElement,e,new Map);return a.has(t)||(kt(e,Ve),kt(e,Ve+`-`+t),a.set(t,vn)),()=>{this._engine.afterFlush(()=>{let l=s.indexOf(o);l>=0&&s.splice(l,1),this._triggers.has(t)||a.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw Os(e);return t}trigger(e,t,i,r=!0){let s=this._getTrigger(t),o=new Ge(this.id,t,e),a=this._engine.statesByElement.get(e);a||(kt(e,Ve),kt(e,Ve+`-`+t),this._engine.statesByElement.set(e,a=new Map));let l=a.get(t),c=new Qe(i,this.id);if(!(i&&i.hasOwnProperty(`value`))&&l&&c.absorbOptions(l.options),a.set(t,c),l||(l=vn),!(c.value===We)&&l.value===c.value){if(!$a(l.params,c.params)){let y=[],T=s.matchStyles(l.value,l.params,y),z=s.matchStyles(c.value,c.params,y);y.length?this._engine.reportError(y):this._engine.afterFlush(()=>{Qt(e,T),Et(e,z)})}return}let w=dt(this._engine.playersByElement,e,[]);w.forEach(y=>{y.namespaceId==this.id&&y.triggerName==t&&y.queued&&y.destroy()});let v=s.matchTransition(l.value,c.value,e,c.params),g=!1;if(!v){if(!r)return;v=s.fallbackTransition,g=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:v,fromState:l,toState:c,player:o,isFallbackTransition:g}),g||(kt(e,Hs),o.onStart(()=>{ke(e,Hs)})),o.onDone(()=>{let y=this.players.indexOf(o);y>=0&&this.players.splice(y,1);let T=this._engine.playersByElement.get(e);if(T){let z=T.indexOf(o);z>=0&&T.splice(z,1)}}),this.players.push(o),w.push(o),o}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,i)=>{this._elementListeners.set(i,t.filter(r=>r.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(i=>i.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let i=this._engine.driver.query(e,je,!0);i.forEach(r=>{if(r[Mt])return;let s=this._engine.fetchNamespacesByElement(r);s.size?s.forEach(o=>o.triggerLeaveAnimation(r,t,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(e,t,i,r){let s=this._engine.statesByElement.get(e),o=new Map;if(s){let a=[];if(s.forEach((l,c)=>{if(o.set(c,l.value),this._triggers.has(c)){let d=this.trigger(e,c,We,r);d&&a.push(d)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,o),i&&Vt(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),i=this._engine.statesByElement.get(e);if(t&&i){let r=new Set;t.forEach(s=>{let o=s.name;if(r.has(o))return;r.add(o);let l=this._triggers.get(o).fallbackTransition,c=i.get(o)||vn,d=new Qe(We),h=new Ge(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:l,fromState:c,toState:d,player:h,isFallbackTransition:!0})})}}removeNode(e,t){let i=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(i.totalAnimations){let s=i.players.length?i.playersByQueriedElement.get(e):[];if(s&&s.length)r=!0;else{let o=e;for(;o=o.parentNode;)if(i.statesByElement.get(o)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)i.markElementAsRemoved(this.id,e,!1,t);else{let s=e[Mt];(!s||s===$s)&&(i.afterFlush(()=>this.clearElementCache(e)),i.destroyInnerAnimations(e),i._onRemovalComplete(e,t))}}insertNode(e,t){kt(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let s=i.element,o=this._elementListeners.get(s);o&&o.forEach(a=>{if(a.name==i.triggerName){let l=ci(s,i.triggerName,i.fromState.value,i.toState.value);l._data=e,li(i.player,a.phase,l,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(i)}),this._queue=[],t.sort((i,r)=>{let s=i.transition.ast.depCount,o=r.transition.ast.depCount;return s==0||o==0?s-o:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}};var Nn=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(e,t)=>{};_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,i){this.bodyNode=e,this.driver=t,this._normalizer=i}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(i=>{i.queued&&e.push(i)})}),e}createNamespace(e,t){let i=new On(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(i,t):(this.newHostElements.set(t,i),this.collectEnterElement(t)),this._namespaceLookup[e]=i}_balanceNamespaceList(e,t){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let o=!1,a=this.driver.getParentElement(t);for(;a;){let l=r.get(a);if(l){let c=i.indexOf(l);i.splice(c+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}o||i.unshift(e)}else i.push(e);return r.set(t,e),e}register(e,t){let i=this._namespaceLookup[e];return i||(i=this.createNamespace(e,t)),i}registerTrigger(e,t,i){let r=this._namespaceLookup[e];r&&r.register(t,i)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(e);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,i=this.statesByElement.get(e);if(i){for(let r of i.values())if(r.namespaceId){let s=this._fetchNamespace(r.namespaceId);s&&t.add(s)}}return t}trigger(e,t,i,r){if(_i(t)){let s=this._fetchNamespace(e);if(s)return s.trigger(t,i,r),!0}return!1}insertNode(e,t,i,r){if(!_i(t))return;let s=t[Mt];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;let o=this.collectedLeaveElements.indexOf(t);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){let o=this._fetchNamespace(e);o&&o.insertNode(t,i)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),kt(e,yn)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),ke(e,yn))}removeNode(e,t,i){if(_i(t)){let r=e?this._fetchNamespace(e):null;r?r.removeNode(t,i):this.markElementAsRemoved(e,t,!1,i);let s=this.namespacesByHostElement.get(t);s&&s.id!==e&&s.removeNode(t,i)}else this._onRemovalComplete(t,i)}markElementAsRemoved(e,t,i,r,s){this.collectedLeaveElements.push(t),t[Mt]={namespaceId:e,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,t,i,r,s){return _i(t)?this._fetchNamespace(e).listen(t,i,r,s):()=>{}}_buildInstruction(e,t,i,r,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,i,r,e.fromState.options,e.toState.options,t,s)}destroyInnerAnimations(e){let t=this.driver.query(e,je,!0);t.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,hi,!0),t.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return Vt(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[Mt];if(t&&t.setForRemoval){if(e[Mt]=$s,t.namespaceId){this.destroyInnerAnimations(e);let i=this._fetchNamespace(t.namespaceId);i&&i.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(yn)&&this.markElementAsDisabled(e,!1),this.driver.query(e,ja,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];kt(r,Ha)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{t=this._flushAnimations(i,e)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],t.length?Vt(t).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(e){throw Ns(e)}_flushAnimations(e,t){let i=new Ue,r=[],s=new Map,o=[],a=new Map,l=new Map,c=new Map,d=new Set;this.disabledNodes.forEach(_=>{d.add(_);let b=this.driver.query(_,Va,!0);for(let S=0;S<b.length;S++)d.add(b[S])});let h=this.bodyNode,w=Array.from(this.statesByElement.keys()),v=Qs(w,this.collectedEnterElements),g=new Map,y=0;v.forEach((_,b)=>{let S=pn+y++;g.set(b,S),_.forEach(M=>kt(M,S))});let T=[],z=new Set,V=new Set;for(let _=0;_<this.collectedLeaveElements.length;_++){let b=this.collectedLeaveElements[_],S=b[Mt];S&&S.setForRemoval&&(T.push(b),z.add(b),S.hasAnimation?this.driver.query(b,Wa,!0).forEach(M=>z.add(M)):V.add(b))}let $=new Map,G=Qs(w,Array.from(z));G.forEach((_,b)=>{let S=mi+y++;$.set(b,S),_.forEach(M=>kt(M,S))}),e.push(()=>{v.forEach((_,b)=>{let S=g.get(b);_.forEach(M=>ke(M,S))}),G.forEach((_,b)=>{let S=$.get(b);_.forEach(M=>ke(M,S))}),T.forEach(_=>{this.processLeaveNode(_)})});let me=[],Tt=[];for(let _=this._namespaceList.length-1;_>=0;_--)this._namespaceList[_].drainQueuedTransitions(t).forEach(S=>{let M=S.player,j=S.element;if(me.push(M),this.collectedEnterElements.length){let K=j[Mt];if(K&&K.setForMove){if(K.previousTriggersValues&&K.previousTriggersValues.has(S.triggerName)){let Kt=K.previousTriggersValues.get(S.triggerName),vt=this.statesByElement.get(S.element);if(vt&&vt.has(S.triggerName)){let Je=vt.get(S.triggerName);Je.value=Kt,vt.set(S.triggerName,Je)}}M.destroy();return}}let Ot=!h||!this.driver.containsElement(h,j),ht=$.get(j),jt=g.get(j),D=this._buildInstruction(S,i,jt,ht,Ot);if(D.errors&&D.errors.length){Tt.push(D);return}if(Ot){M.onStart(()=>Qt(j,D.fromStyles)),M.onDestroy(()=>Et(j,D.toStyles)),r.push(M);return}if(S.isFallbackTransition){M.onStart(()=>Qt(j,D.fromStyles)),M.onDestroy(()=>Et(j,D.toStyles)),r.push(M);return}let nr=[];D.timelines.forEach(K=>{K.stretchStartingKeyframe=!0,this.disabledNodes.has(K.element)||nr.push(K)}),D.timelines=nr,i.append(j,D.timelines);let oa={instruction:D,player:M,element:j};o.push(oa),D.queriedElements.forEach(K=>dt(a,K,[]).push(M)),D.preStyleProps.forEach((K,Kt)=>{if(K.size){let vt=l.get(Kt);vt||l.set(Kt,vt=new Set),K.forEach((Je,ji)=>vt.add(ji))}}),D.postStyleProps.forEach((K,Kt)=>{let vt=c.get(Kt);vt||c.set(Kt,vt=new Set),K.forEach((Je,ji)=>vt.add(ji))})});if(Tt.length){let _=[];Tt.forEach(b=>{_.push(Ps(b.triggerName,b.errors))}),me.forEach(b=>b.destroy()),this.reportError(_)}let Z=new Map,rt=new Map;o.forEach(_=>{let b=_.element;i.has(b)&&(rt.set(b,b),this._beforeAnimationBuild(_.player.namespaceId,_.instruction,Z))}),r.forEach(_=>{let b=_.element;this._getPreviousPlayers(b,!1,_.namespaceId,_.triggerName,null).forEach(M=>{dt(Z,b,[]).push(M),M.destroy()})});let Gt=T.filter(_=>Gs(_,l,c)),he=new Map;Us(he,this.driver,V,c,Ct).forEach(_=>{Gs(_,l,c)&&Gt.push(_)});let qt=new Map;v.forEach((_,b)=>{Us(qt,this.driver,new Set(_),l,ze)}),Gt.forEach(_=>{let b=he.get(_),S=qt.get(_);he.set(_,new Map([...b?.entries()??[],...S?.entries()??[]]))});let Vi=[],er=[],ir={};o.forEach(_=>{let{element:b,player:S,instruction:M}=_;if(i.has(b)){if(d.has(b)){S.onDestroy(()=>Et(b,M.toStyles)),S.disabled=!0,S.overrideTotalTime(M.totalTime),r.push(S);return}let j=ir;if(rt.size>1){let ht=b,jt=[];for(;ht=ht.parentNode;){let D=rt.get(ht);if(D){j=D;break}jt.push(ht)}jt.forEach(D=>rt.set(D,j))}let Ot=this._buildAnimation(S.namespaceId,M,Z,s,qt,he);if(S.setRealPlayer(Ot),j===ir)Vi.push(S);else{let ht=this.playersByElement.get(j);ht&&ht.length&&(S.parentPlayer=Vt(ht)),r.push(S)}}else Qt(b,M.fromStyles),S.onDestroy(()=>Et(b,M.toStyles)),er.push(S),d.has(b)&&r.push(S)}),er.forEach(_=>{let b=s.get(_.element);if(b&&b.length){let S=Vt(b);_.setRealPlayer(S)}}),r.forEach(_=>{_.parentPlayer?_.syncPlayerEvents(_.parentPlayer):_.destroy()});for(let _=0;_<T.length;_++){let b=T[_],S=b[Mt];if(ke(b,mi),S&&S.hasAnimation)continue;let M=[];if(a.size){let Ot=a.get(b);Ot&&Ot.length&&M.push(...Ot);let ht=this.driver.query(b,hi,!0);for(let jt=0;jt<ht.length;jt++){let D=a.get(ht[jt]);D&&D.length&&M.push(...D)}}let j=M.filter(Ot=>!Ot.destroyed);j.length?Xa(this,b,j):this.processLeaveNode(b)}return T.length=0,Vi.forEach(_=>{this.players.push(_),_.onDone(()=>{_.destroy();let b=this.players.indexOf(_);this.players.splice(b,1)}),_.play()}),Vi}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,i,r,s){let o=[];if(t){let a=this.playersByQueriedElement.get(e);a&&(o=a)}else{let a=this.playersByElement.get(e);if(a){let l=!s||s==We;a.forEach(c=>{c.queued||!l&&c.triggerName!=r||o.push(c)})}}return(i||r)&&(o=o.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),o}_beforeAnimationBuild(e,t,i){let r=t.triggerName,s=t.element,o=t.isRemovalTransition?void 0:e,a=t.isRemovalTransition?void 0:r;for(let l of t.timelines){let c=l.element,d=c!==s,h=dt(i,c,[]);this._getPreviousPlayers(c,d,o,a,t.toState).forEach(v=>{let g=v.getRealPlayer();g.beforeDestroy&&g.beforeDestroy(),v.destroy(),h.push(v)})}Qt(s,t.fromStyles)}_buildAnimation(e,t,i,r,s,o){let a=t.triggerName,l=t.element,c=[],d=new Set,h=new Set,w=t.timelines.map(g=>{let y=g.element;d.add(y);let T=y[Mt];if(T&&T.removedBeforeQueried)return new zt(g.duration,g.delay);let z=y!==l,V=Ya((i.get(y)||Ua).map(Z=>Z.getRealPlayer())).filter(Z=>{let rt=Z;return rt.element?rt.element===y:!1}),$=s.get(y),G=o.get(y),me=ln(this._normalizer,g.keyframes,$,G),Tt=this._buildPlayer(g,me,V);if(g.subTimeline&&r&&h.add(y),z){let Z=new Ge(e,a,y);Z.setRealPlayer(Tt),c.push(Z)}return Tt});c.forEach(g=>{dt(this.playersByQueriedElement,g.element,[]).push(g),g.onDone(()=>Ga(this.playersByQueriedElement,g.element,g))}),d.forEach(g=>kt(g,un));let v=Vt(w);return v.onDestroy(()=>{d.forEach(g=>ke(g,un)),Et(l,t.toStyles)}),h.forEach(g=>{dt(r,g,[]).push(v)}),v}_buildPlayer(e,t,i){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,i):new zt(e.duration,e.delay)}};var Ge=class{namespaceId;triggerName;element;_player=new zt;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(e,t,i){this.namespaceId=e,this.triggerName=t,this.element=i}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,i)=>{t.forEach(r=>li(e,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback(`start`)),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){dt(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent(`done`,e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent(`start`,e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent(`destroy`,e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function Ga(n,e,t){let i=n.get(e);if(i){if(i.length){let r=i.indexOf(t);i.splice(r,1)}i.length==0&&n.delete(e)}return i}function qa(n){return n??null}function _i(n){return n&&n.nodeType===1}function Ka(n){return n==`start`||n==`done`}function Ws(n,e){let t=n.style.display;return n.style.display=e??`none`,t}function Us(n,e,t,i,r){let s=[];t.forEach(l=>s.push(Ws(l)));let o=[];i.forEach((l,c)=>{let d=new Map;l.forEach(h=>{let w=e.computeStyle(c,h,r);d.set(h,w),(!w||w.length==0)&&(c[Mt]=Qa,o.push(c))}),n.set(c,d)});let a=0;return t.forEach(l=>Ws(l,s[a++])),o}function Qs(n,e){let t=new Map;if(n.forEach(a=>t.set(a,[])),e.length==0)return t;let i=1,r=new Set(e),s=new Map;function o(a){if(!a)return i;let l=s.get(a);if(l)return l;let c=a.parentNode;return t.has(c)?l=c:r.has(c)?l=i:l=o(c),s.set(a,l),l}return e.forEach(a=>{let l=o(a);l!==i&&t.get(l).push(a)}),t}function kt(n,e){n.classList?.add(e)}function ke(n,e){n.classList?.remove(e)}function Xa(n,e,t){Vt(t).onDone(()=>n.processLeaveNode(e))}function Ya(n){let e=[];return Zs(n,e),e}function Zs(n,e){for(let t=0;t<n.length;t++){let i=n[t];i instanceof be?Zs(i.players,e):e.push(i)}}function $a(n,e){let t=Object.keys(n),i=Object.keys(e);if(t.length!=i.length)return!1;for(let r=0;r<t.length;r++){let s=t[r];if(!e.hasOwnProperty(s)||n[s]!==e[s])return!1}return!0}function Gs(n,e,t){let i=t.get(n);if(!i)return!1;let r=e.get(n);return r?i.forEach(s=>r.add(s)):e.set(n,i),t.delete(n),!0}var xe=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(e,t)=>{};constructor(e,t,i){this._driver=t,this._normalizer=i,this._transitionEngine=new Nn(e.body,t,i),this._timelineEngine=new Tn(e.body,t,i),this._transitionEngine.onRemovalComplete=(r,s)=>this.onRemovalComplete(r,s)}registerTrigger(e,t,i,r,s){let o=e+`-`+r,a=this._triggerCache[o];if(!a){let l=[],d=Ks(this._driver,s,l,[]);if(l.length)throw ws(r,l);a=Fa(r,d,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(t,r,a)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,i,r){this._transitionEngine.insertNode(e,t,i,r)}onRemove(e,t,i){this._transitionEngine.removeNode(e,t,i)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,i,r){if(i.charAt(0)==`@`){let[s,o]=cn(i),a=r;this._timelineEngine.command(s,t,o,a)}else this._transitionEngine.trigger(e,t,i,r)}listen(e,t,i,r,s){if(i.charAt(0)==`@`){let[o,a]=cn(i);return this._timelineEngine.listen(o,t,a,s)}return this._transitionEngine.listen(e,t,i,r,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function Za(n,e){let t=null,i=null;return Array.isArray(e)&&e.length?(t=bn(e[0]),e.length>1&&(i=bn(e[e.length-1]))):e instanceof Map&&(t=bn(e)),t||i?new Ja(n,t,i):null}var Ja=(()=>{class n{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(t,i,r){this._element=t,this._startStyles=i,this._endStyles=r;let s=n.initialStylesByElement.get(t);s||n.initialStylesByElement.set(t,s=new Map),this._initialStyles=s}start(){this._state<1&&(this._startStyles&&Et(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Et(this._element,this._initialStyles),this._endStyles&&(Et(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(n.initialStylesByElement.delete(this._element),this._startStyles&&(Qt(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Qt(this._element,this._endStyles),this._endStyles=null),Et(this._element,this._initialStyles),this._state=3)}}return n})();function bn(n){let e=null;return n.forEach((t,i)=>{tl(i)&&(e=e||new Map,e.set(i,t))}),e}function tl(n){return n===`display`||n===`position`}var xi=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(e,t,i,r){this.element=e,this.keyframes=t,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let e=this.keyframes,t=this._triggerWebAnimation(this.element,e,this.options);if(!t)return this._onFinish(),null;this.domPlayer=t,this._finalKeyframe=e.length?e[e.length-1]:new Map;let i=()=>this._onFinish();return t.addEventListener(`finish`,i),this.onDestroy(()=>{t.removeEventListener(`finish`,i)}),t}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(i=>{t.push(Object.fromEntries(i))}),t}_triggerWebAnimation(e,t,i){let r=this._convertKeyframesToObject(t);try{return e.animate(r,i)}catch(s){return null}}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){let e=this._buildPlayer();e&&(this.hasStarted()||(this._onStartFns.forEach(t=>t()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),e.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=e*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!==`offset`&&e.set(r,this._finished?i:ui(this.element,r))}),this.currentSnapshot=e}triggerCallback(e){let t=e===`start`?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}};var Ci=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}containsElement(e,t){return dn(e,t)}getParentElement(e){return di(e)}query(e,t,i){return mn(e,t,i)}computeStyle(e,t,i){return ui(e,t)}animate(e,t,i,r,s,o=[]){let l={duration:i,delay:r,fill:r==0?`both`:`forwards`};s&&(l.easing=s);let c=new Map,d=o.filter(v=>v instanceof xi);Is(i,r)&&d.forEach(v=>{v.currentSnapshot.forEach((g,y)=>c.set(y,g))});let h=As(t).map(v=>new Map(v));h=Ls(e,h,c);let w=Za(e,h);return new xi(e,h,l,w)}};var yi=`@`;var Js=`@.disabled`;var Ei=class{namespaceId;delegate;engine;_onDestroy;ɵtype=0;constructor(e,t,i,r){this.namespaceId=e,this.delegate=t,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,i,r=!0){this.delegate.insertBefore(e,t,i),this.engine.onInsert(this.namespaceId,t,e,r)}removeChild(e,t,i,r){if(r){this.delegate.removeChild(e,t,i,r);return}this.parentNode(t)&&this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,r){this.delegate.setAttribute(e,t,i,r)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,r){this.delegate.setStyle(e,t,i,r)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){t.charAt(0)==yi&&t==Js?this.disableAnimations(e,!!i):this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i,r){return this.delegate.listen(e,t,i,r)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}};var Pn=class extends Ei{factory;constructor(e,t,i,r,s){super(t,i,r,s),this.factory=e,this.namespaceId=t}setProperty(e,t,i){t.charAt(0)==yi?t.charAt(1)==`.`&&t==Js?(i=i===void 0?!0:!!i,this.disableAnimations(e,i)):this.engine.process(this.namespaceId,e,t.slice(1),i):this.delegate.setProperty(e,t,i)}listen(e,t,i,r){if(t.charAt(0)==yi){let s=el(e),o=t.slice(1),a=``;return o.charAt(0)!=yi&&([o,a]=il(o)),this.engine.listen(this.namespaceId,s,o,a,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,i,l)})}return this.delegate.listen(e,t,i,r)}};function el(n){switch(n){case`body`:return document.body;case`document`:return document;case`window`:return window;default:return n}}function il(n){let e=n.indexOf(`.`);return[n.substring(0,e),n.slice(e+1)]}var Mi=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(e,t,i){this.delegate=e,this.engine=t,this._zone=i,t.onRemovalComplete=(r,s)=>{s?.removeChild(null,r)}}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(!e||!t?.data?.animation){let c=this._rendererCache,d=c.get(r);if(!d){let h=()=>c.delete(r);d=new Ei(``,r,this.engine,h),c.set(r,d)}return d}let s=t.id,o=t.id+`-`+this._currentId;this._currentId++,this.engine.register(o,e);let a=c=>{Array.isArray(c)?c.forEach(a):this.engine.registerTrigger(s,o,e,c.name,c)};return t.data.animation.forEach(a),new Pn(this,o,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,i){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(s=>{let[o,a]=s;o(a)}),this._animationCallbacksBuffer=[]})}),r.push([t,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(e){this.engine.flush(),this.delegate.componentReplaced?.(e)}};var rl=(()=>{class n extends xe{constructor(t,i,r){super(t,i,r)}ngOnDestroy(){this.flush()}static ɵfac=function(i){return new(i||n)(C$2(W$3),C$2(ae),C$2(le))};static ɵprov=A$2({token:n,factory:n.ɵfac})}return n})();function sl(){return new vi}function ol(){return new Mi(g(al$1),g(xe),g(z$1))}var to=[{provide:le,useFactory:sl},{provide:xe,useClass:rl},{provide:mn$2,useFactory:ol}];[...to];var al=[{provide:ae,useFactory:()=>new Ci},{provide:Ty,useFactory:()=>`BrowserAnimations`},...to];function eo(){return Ke$2(`NgEagerAnimations`),[...al]}var Rn=`Service workers are disabled or not supported by this browser`;var Ce=class{serviceWorker;worker;registration;events;constructor(e,t){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=new S$3(i=>i.error(new v$2(5601,!1)));else{let i=null,r=new J$4;this.worker=new S$3(c=>(i!==null&&c.next(i),r.subscribe(d=>c.next(d))));let s=()=>{let{controller:c}=e;c!==null&&(i=c,r.next(i))};e.addEventListener(`controllerchange`,s),s(),this.registration=this.worker.pipe(qo$1(()=>e.getRegistration().then(c=>{if(!c)throw new v$2(5601,!1);return c})));let o=new J$4;this.events=o.asObservable();let a=c=>{let{data:d}=c;d?.type&&o.next(d)};e.addEventListener(`message`,a),t?.get(sr$1,null,{optional:!0})?.onDestroy(()=>{e.removeEventListener(`controllerchange`,s),e.removeEventListener(`message`,a)})}}postMessage(e,t){return new Promise(i=>{this.worker.pipe(Kt$1(1)).subscribe(r=>{r.postMessage(w$1({action:e},t)),i()})})}postMessageWithOperation(e,t,i){let r=this.waitForOperationCompleted(i),s=this.postMessage(e,t);return Promise.all([s,r]).then(([,o])=>o)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let t;return typeof e==`string`?t=i=>i.type===e:t=i=>e.includes(i.type),this.events.pipe(Et$2(t))}nextEventOfType(e){return this.eventsOfType(e).pipe(Kt$1(1))}waitForOperationCompleted(e){return new Promise((t,i)=>{this.eventsOfType(`OPERATION_COMPLETED`).pipe(Et$2(r=>r.nonce===e),Kt$1(1),ie$1(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:t,error:i})})}get isEnabled(){return!!this.serviceWorker}};var no=(()=>{class n{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new J$4;constructor(t){if(this.sw=t,!t.isEnabled){this.messages=Om,this.notificationClicks=Om,this.notificationCloses=Om,this.pushSubscriptionChanges=Om,this.subscription=Om;return}this.messages=this.sw.eventsOfType(`PUSH`).pipe(ie$1(r=>r.data)),this.notificationClicks=this.sw.eventsOfType(`NOTIFICATION_CLICK`).pipe(ie$1(r=>r.data)),this.notificationCloses=this.sw.eventsOfType(`NOTIFICATION_CLOSE`).pipe(ie$1(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType(`PUSH_SUBSCRIPTION_CHANGE`).pipe(ie$1(r=>r.data)),this.pushManager=this.sw.registration.pipe(ie$1(r=>r.pushManager));let i=this.pushManager.pipe(qo$1(r=>r.getSubscription()));this.subscription=new S$3(r=>{let s=i.subscribe(r),o=this.subscriptionChanges.subscribe(r);return()=>{s.unsubscribe(),o.unsubscribe()}})}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Rn));let i={userVisibleOnly:!0},r=this.decodeBase64(t.serverPublicKey.replace(/_/g,`/`).replace(/-/g,`+`)),s=new Uint8Array(new ArrayBuffer(r.length));for(let o=0;o<r.length;o++)s[o]=r.charCodeAt(o);return i.applicationServerKey=s,new Promise((o,a)=>{this.pushManager.pipe(qo$1(l=>l.subscribe(i)),Kt$1(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),o(l)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Rn));let t=i=>{if(i===null)throw new v$2(5602,!1);return i.unsubscribe().then(r=>{if(!r)throw new v$2(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((i,r)=>{this.subscription.pipe(Kt$1(1),qo$1(t)).subscribe({next:i,error:r})})}decodeBase64(t){return atob(t)}static ɵfac=function(i){return new(i||n)(C$2(Ce))};static ɵprov=A$2({token:n,factory:n.ɵfac})}return n})();var Ee=(()=>{class n{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=Om,this.unrecoverable=Om;return}this.versionUpdates=this.sw.eventsOfType([`VERSION_DETECTED`,`VERSION_INSTALLATION_FAILED`,`VERSION_READY`,`NO_NEW_VERSION_DETECTED`]),this.unrecoverable=this.sw.eventsOfType(`UNRECOVERABLE_STATE`)}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Rn));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let t=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation(`CHECK_FOR_UPDATES`,{nonce:t},t).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new v$2(5601,!1));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation(`ACTIVATE_UPDATE`,{nonce:t},t)}static ɵfac=function(i){return new(i||n)(C$2(Ce))};static ɵprov=A$2({token:n,factory:n.ɵfac})}return n})();var ro=new I$3(``);function ll(){let n=g(qe);if(!(`serviceWorker`in navigator&&n.enabled!==!1))return;let e=g(ro),t=g(z$1),i=g(sr$1);t.runOutsideAngular(()=>{let r=navigator.serviceWorker,s=()=>r.controller?.postMessage({action:`INITIALIZE`});r.addEventListener(`controllerchange`,s),i.onDestroy(()=>{r.removeEventListener(`controllerchange`,s)})}),t.runOutsideAngular(()=>{let r,{registrationStrategy:s}=n;if(typeof s==`function`)r=new Promise(o=>s().subscribe(()=>o()));else{let[o,...a]=(s||`registerWhenStable:30000`).split(`:`);switch(o){case`registerImmediately`:r=Promise.resolve();break;case`registerWithDelay`:r=io(+a[0]||0);break;case`registerWhenStable`:r=Promise.race([i.whenStable(),io(+a[0])]);break;default:throw new v$2(5600,!1)}}r.then(()=>{i.destroyed||navigator.serviceWorker.register(e,{scope:n.scope,updateViaCache:n.updateViaCache,type:n.type}).catch(o=>console.error(Ve$3(5604,!1)))})})}function io(n){return new Promise(e=>setTimeout(e,n))}function cl(){let n=g(qe),e=g(fe$3);return new Ce(n.enabled!==!1?navigator.serviceWorker:void 0,e)}var qe=class{enabled;updateViaCache;type;scope;registrationStrategy};function dl(n,e={}){return Mt$2([no,Ee,{provide:ro,useValue:n},{provide:qe,useValue:e},{provide:Ce,useFactory:cl},EI(ll)])}var so=(()=>{class n{static register(t,i={}){return{ngModule:n,providers:[dl(t,i)]}}static ɵfac=function(i){return new(i||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({providers:[no,Ee]})}return n})();var oo=ne();function uo(n){return new Ti(n.get(qt$2),n.get(W$3))}var Ti=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||``,this._previousHTMLStyles.top=e.style.top||``,e.style.left=Ie$1(-this._previousScrollPosition.left),e.style.top=Ie$1(-this._previousScrollPosition.top),e.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,i=e.style,r=t.style,s=i.scrollBehavior||``,o=r.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,e.classList.remove(`cdk-global-scrollblock`),oo&&(i.scrollBehavior=r.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),oo&&(i.scrollBehavior=s,r.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,i=this._viewportRuler.getViewportSize();return t.scrollHeight>i.height||t.scrollWidth>i.width}};function fo(n,e){return new Oi(n.get(ve$1),n.get(z$1),n.get(qt$2),e)}var Oi=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,i,r){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=i,this._config=r}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(Et$2(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ke=class{enable(){}disable(){}attach(){}};function In(n,e){return e.some(t=>{let i=n.bottom<t.top,r=n.top>t.bottom,s=n.right<t.left,o=n.left>t.right;return i||r||s||o})}function ao(n,e){return e.some(t=>{let i=n.top<t.top,r=n.bottom>t.bottom,s=n.left<t.left,o=n.right>t.right;return i||r||s||o})}function go(n,e){return new Ni(n.get(ve$1),n.get(qt$2),n.get(z$1),e)}var Ni=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,i,r){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=i,this._config=r}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();In(t,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var _o=(()=>{class n{_injector=g(fe$3);noop=()=>new Ke;close=t=>fo(this._injector,t);block=()=>uo(this._injector);reposition=t=>go(this._injector,t);static ɵfac=function(i){return new(i||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac})}return n})();var Me=class{positionStrategy;scrollStrategy=new Ke;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let i of t)e[i]!==void 0&&(this[i]=e[i])}}};var Pi=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var yo=(()=>{class n{_attachedOverlays=[];_document=g(W$3);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let i=this._attachedOverlays.indexOf(t);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,i,r){return r.observers.length<1?!1:t.eventPredicate?t.eventPredicate(i):!0}static ɵfac=function(i){return new(i||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac})}return n})();var vo=(()=>{class n extends yo{_ngZone=g(z$1);_renderer=g(mn$2).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let s=i[r];if(this.canReceiveEvent(s,t,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(t));break}}};static ɵfac=function(i){return new(i||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac})}return n})();var bo=(()=>{class n extends yo{_platform=g(v$3);_ngZone=g(z$1);_renderer=g(mn$2).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let i=this._document.body,r={capture:!0},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(i,`pointerdown`,this._pointerDownListener,r),s.listen(i,`click`,this._clickListener,r),s.listen(i,`auxclick`,this._clickListener,r),s.listen(i,`contextmenu`,this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=I$4(t)};_clickListener=t=>{let i=I$4(t),r=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let o=s.length-1;o>-1;o--){let a=s[o],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,l))){if(lo(a.overlayElement,i)||lo(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static ɵfac=function(i){return new(i||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac})}return n})();function lo(n,e){let t=typeof ShadowRoot<`u`&&ShadowRoot,i=e;for(;i;){if(i===n)return!0;i=t&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var wo=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return n})();var So=(()=>{class n{_platform=g(v$3);_containerElement;_document=g(W$3);_styleLoader=g(h$4);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||Re$1()){let r=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let s=0;s<r.length;s++)r[s].remove()}let i=this._document.createElement(`div`);i.classList.add(t),Re$1()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(wo)}static ɵfac=function(i){return new(i||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac})}return n})();var Ln=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,i,r){this._renderer=t,this._ngZone=i,this.element=e.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,r)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents=`none`,e.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Fn(n){return n&&n.nodeType===1}var Di=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new J$4;_attachments=new J$4;_detachments=new J$4;_positionStrategy;_scrollStrategy;_locationChanges=Z$3.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new J$4;_outsidePointerEvents=new J$4;_afterNextRenderRef;constructor(e,t,i,r,s,o,a,l,c,d=!1,h,w){this._portalOutlet=e,this._host=t,this._pane=i,this._config=r,this._ngZone=s,this._keyboardDispatcher=o,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=h,this._renderer=w,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=pD(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=w$1(w$1({},this._config),e),this._updateElementSize()}setDirection(e){this._config=x$3(w$1({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e==`string`?e:e.value:`ltr`}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=Ie$1(this._config.width),e.height=Ie$1(this._config.height),e.minWidth=Ie$1(this._config.minWidth),e.minHeight=Ie$1(this._config.minHeight),e.maxWidth=Ie$1(this._config.maxWidth),e.maxHeight=Ie$1(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?``:`none`}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Fn(e)?e.after(this._host):e?.type===`parent`?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(e){}}_attachBackdrop(){let e=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Ln(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,i){let r=X$3(t||[]).filter(s=>!!s);r.length&&(i?e.classList.add(...r):e.classList.remove(...r))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=pD(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}};var co=`cdk-overlay-connected-position-bounding-box`;var hl=/([A-Za-z%]+)$/;function ko(n,e){return new Ai(e,n.get(qt$2),n.get(W$3),n.get(v$3),n.get(So))}var Ai=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new J$4;_resizeSubscription=Z$3.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,i,r,s){this._viewportRuler=t,this._document=i,this._platform=r,this._overlayContainer=s,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(co),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,i=this._viewportRect,r=this._containerRect,s=[],o;for(let a of this._preferredPositions){let l=this._getOriginPoint(e,r,a),c=this._getOverlayPoint(l,t,a),d=this._getOverlayFit(c,t,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){s.push({position:a,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!o||o.overlayFit.visibleArea<d.visibleArea)&&(o={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:t})}if(s.length){let a=null,l=-1;for(let c of s){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ce(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(co),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Dn$2?this._origin.nativeElement:Fn(this._origin)?this._origin:null}_getOriginPoint(e,t,i){let r;if(i.originX==`center`)r=e.left+e.width/2;else{let o=this._isRtl()?e.right:e.left,a=this._isRtl()?e.left:e.right;r=i.originX==`start`?o:a}t.left<0&&(r-=t.left);let s;return i.originY==`center`?s=e.top+e.height/2:s=i.originY==`top`?e.top:e.bottom,t.top<0&&(s-=t.top),{x:r,y:s}}_getOverlayPoint(e,t,i){let r;i.overlayX==`center`?r=-t.width/2:i.overlayX===`start`?r=this._isRtl()?-t.width:0:r=this._isRtl()?0:-t.width;let s;return i.overlayY==`center`?s=-t.height/2:s=i.overlayY==`top`?0:-t.height,{x:e.x+r,y:e.y+s}}_getOverlayFit(e,t,i,r){let s=ho(t),{x:o,y:a}=e,l=this._getOffset(r,`x`),c=this._getOffset(r,`y`);l&&(o+=l),c&&(a+=c);let d=0-o,h=o+s.width-i.width,w=0-a,v=a+s.height-i.height,g=this._subtractOverflows(s.width,d,h),y=this._subtractOverflows(s.height,w,v),T=g*y;return{visibleArea:T,isCompletelyWithinViewport:s.width*s.height===T,fitsInViewportVertically:y===s.height,fitsInViewportHorizontally:g==s.width}}_canFitWithFlexibleDimensions(e,t,i){if(this._hasFlexibleDimensions){let r=i.bottom-t.y,s=i.right-t.x,o=mo(this._overlayRef.getConfig().minHeight),a=mo(this._overlayRef.getConfig().minWidth),l=e.fitsInViewportVertically||o!=null&&o<=r,c=e.fitsInViewportHorizontally||a!=null&&a<=s;return l&&c}return!1}_pushOverlayOnScreen(e,t,i){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let r=ho(t),s=this._viewportRect,o=Math.max(e.x+r.width-s.width,0),a=Math.max(e.y+r.height-s.height,0),l=Math.max(s.top-i.top-e.y,0),c=Math.max(s.left-i.left-e.x,0),d=0,h=0;return r.width<=s.width?d=c||-o:d=e.x<this._getViewportMarginStart()?s.left-i.left-e.x:0,r.height<=s.height?h=l||-a:h=e.y<this._getViewportMarginTop()?s.top-i.top-e.y:0,this._previousPushAmount={x:d,y:h},{x:e.x+d,y:e.y+h}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!pl(this._lastScrollVisibility,i)){let r=new Pi(e,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=e.overlayY;e.overlayX===`center`?i=`center`:this._isRtl()?i=e.overlayX===`start`?`right`:`left`:i=e.overlayX===`start`?`left`:`right`;for(let s=0;s<t.length;s++)t[s].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(e,t){let i=this._viewportRect,r=this._isRtl(),s,o,a;if(t.overlayY===`top`)o=e.y,s=i.height-o+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)a=i.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),s=i.height-a+this._getViewportMarginTop();else{let v=Math.min(i.bottom-e.y+i.top,e.y),g=this._lastBoundingBoxSize.height;s=v*2,o=e.y-v,s>g&&!this._isInitialRender&&!this._growAfterOpen&&(o=e.y-g/2)}let l=t.overlayX===`start`&&!r||t.overlayX===`end`&&r,c=t.overlayX===`end`&&!r||t.overlayX===`start`&&r,d,h,w;if(c)w=i.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=e.x-this._getViewportMarginStart();else if(l)h=e.x,d=i.right-e.x-this._getViewportMarginEnd();else{let v=Math.min(i.right-e.x+i.left,e.x),g=this._lastBoundingBoxSize.width;d=v*2,h=e.x-v,d>g&&!this._isInitialRender&&!this._growAfterOpen&&(h=e.x-g/2)}return{top:o,left:h,bottom:a,right:w,width:d,height:s}}_setBoundingBoxStyles(e,t){let i=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left=`0`,r.bottom=r.right=`auto`,r.maxHeight=r.maxWidth=``,r.width=r.height=`100%`;else{let s=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;r.width=Ie$1(i.width),r.height=Ie$1(i.height),r.top=Ie$1(i.top)||`auto`,r.bottom=Ie$1(i.bottom)||`auto`,r.left=Ie$1(i.left)||`auto`,r.right=Ie$1(i.right)||`auto`,t.overlayX===`center`?r.alignItems=`center`:r.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?r.justifyContent=`center`:r.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,s&&(r.maxHeight=Ie$1(s)),o&&(r.maxWidth=Ie$1(o))}this._lastBoundingBoxSize=i,ce(this._boundingBox.style,r)}_resetBoundingBoxStyles(){ce(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){ce(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(e,t){let i={},r=this._hasExactPosition(),s=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();ce(i,this._getExactOverlayY(t,e,d)),ce(i,this._getExactOverlayX(t,e,d))}else i.position=`static`;let a=``,l=this._getOffset(t,`x`),c=this._getOffset(t,`y`);l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),i.transform=a.trim(),o.maxHeight&&(r?i.maxHeight=Ie$1(o.maxHeight):s&&(i.maxHeight=``)),o.maxWidth&&(r?i.maxWidth=Ie$1(o.maxWidth):s&&(i.maxWidth=``)),ce(this._pane.style,i)}_getExactOverlayY(e,t,i){let r={top:``,bottom:``},s=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,i)),e.overlayY===`bottom`)r.bottom=`${this._document.documentElement.clientHeight-(s.y+this._overlayRect.height)}px`;else r.top=Ie$1(s.y);return r}_getExactOverlayX(e,t,i){let r={left:``,right:``},s=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,i));let o;if(this._isRtl()?o=e.overlayX===`end`?`left`:`right`:o=e.overlayX===`end`?`right`:`left`,o===`right`)r.right=`${this._document.documentElement.clientWidth-(s.x+this._overlayRect.width)}px`;else r.left=Ie$1(s.x);return r}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ao(e,i),isOriginOutsideView:In(e,i),isOverlayClipped:ao(t,i),isOverlayOutsideView:In(t,i)}}_subtractOverflows(e,...t){return t.reduce((i,r)=>i-Math.max(r,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+e-this._getViewportMarginEnd(),bottom:i.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t===`x`?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&X$3(e).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof Dn$2)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,i=e.height||0;return{top:e.y,bottom:e.y+i,left:e.x,right:e.x+t,height:i,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();e&&(t.style.display=`block`);let i=t.getBoundingClientRect();return e&&(t.style.display=``),i}};function ce(n,e){for(let t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function mo(n){if(typeof n!=`number`&&n!=null){let[e,t]=n.split(hl);return!t||t===`px`?parseFloat(e):null}return n||null}function ho(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function pl(n,e){return n===e?!0:n.isOriginClipped===e.isOriginClipped&&n.isOriginOutsideView===e.isOriginOutsideView&&n.isOverlayClipped===e.isOverlayClipped&&n.isOverlayOutsideView===e.isOverlayOutsideView}var po=`cdk-global-overlay-wrapper`;function Ii(n){return new Ri}var Ri=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(po),this._isDisposed=!1}top(e=``){return this._bottomOffset=``,this._topOffset=e,this._alignItems=`flex-start`,this}left(e=``){return this._xOffset=e,this._xPosition=`left`,this}bottom(e=``){return this._topOffset=``,this._bottomOffset=e,this._alignItems=`flex-end`,this}right(e=``){return this._xOffset=e,this._xPosition=`right`,this}start(e=``){return this._xOffset=e,this._xPosition=`start`,this}end(e=``){return this._xOffset=e,this._xPosition=`end`,this}width(e=``){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=``){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=``){return this.left(e),this._xPosition=`center`,this}centerVertically(e=``){return this.top(e),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:r,height:s,maxWidth:o,maxHeight:a}=this._overlayRef.getConfig(),l=(r===`100%`||r===`100vw`)&&(!o||o===`100%`||o===`100vw`),c=(s===`100%`||s===`100vh`)&&(!a||a===`100%`||a===`100vh`),d=this._xPosition,h=this._xOffset,w=this._overlayRef.getConfig().direction===`rtl`,v=``,g=``,y=``;l?y=`flex-start`:d===`center`?(y=`center`,w?g=h:v=h):w?d===`left`||d===`end`?(y=`flex-end`,v=h):(d===`right`||d===`start`)&&(y=`flex-start`,g=h):d===`left`||d===`start`?(y=`flex-start`,v=h):(d===`right`||d===`end`)&&(y=`flex-end`,g=h),e.position=this._cssPosition,e.marginLeft=l?`0`:v,e.marginTop=c?`0`:this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=l?`0`:g,t.justifyContent=y,t.alignItems=c?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,i=t.style;t.classList.remove(po),i.justifyContent=i.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position=``,this._overlayRef=null,this._isDisposed=!0}};var xo=(()=>{class n{_injector=g(fe$3);global(){return Ii()}flexibleConnectedTo(t){return ko(this._injector,t)}static ɵfac=function(i){return new(i||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac})}return n})();var Co=new I$3(`OVERLAY_DEFAULT_CONFIG`);function Li(n,e){n.get(h$4).load(wo);let t=n.get(So),i=n.get(W$3),r=n.get(ie$2),s=n.get(sr$1),o=n.get(m$3),a=n.get(Xr$1,null,{optional:!0})||n.get(mn$2).createRenderer(null,null),l=new Me(e),c=n.get(Co,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||o.value,!i.body||!(`showPopover`in i.body)?l.usePopover=!1:l.usePopover=e?.usePopover??c;let d=i.createElement(`div`),h=i.createElement(`div`);d.id=r.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),h.appendChild(d),l.usePopover&&(h.setAttribute(`popover`,`manual`),h.classList.add(`cdk-overlay-popover`));let w=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Fn(w)?w.after(h):w?.type===`parent`?w.element.appendChild(h):t.getContainerElement().appendChild(h),new Di(new Xe$2(d,s,n),h,d,l,n.get(z$1),n.get(vo),i,n.get(Tg),n.get(bo),e?.disableAnimations??n.get(Ty,null,{optional:!0})===`NoopAnimations`,n.get(ae$3),a)}var Eo=(()=>{class n{scrollStrategies=g(_o);_positionBuilder=g(xo);_injector=g(fe$3);create(t){return Li(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(i){return new(i||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac})}return n})();var Bn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({providers:[Eo],imports:[I$5,Tn$2,Qt$2,Qt$2]})}return n})();function ul(n,e){if(n&1){let t=GI();Ji$1(0,`div`,1)(1,`button`,2),Bh(`click`,function(){xd(t);return Ad(ZI().action())}),Tw(2),Uu()()}if(n&2){let t=ZI();jD(2),qu(` `,t.data.action,` `)}}var fl=[`label`];function gl(n,e){}var _l=Math.pow(2,31)-1;var Xe=class{_overlayRef;instance;containerInstance;_afterDismissed=new J$4;_afterOpened=new J$4;_onAction=new J$4;_durationTimeoutId;_dismissedByAction=!1;constructor(e,t){this._overlayRef=t,this.containerInstance=e,e._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(e){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(e,_l))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var Mo=new I$3(`MatSnackBarData`);var Te=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var yl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Fu({type:n,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return n})();var vl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Fu({type:n,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return n})();var bl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Fu({type:n,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return n})();var To=(()=>{class n{snackBarRef=g(Xe);data=g(Mo);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(i,r){i&1&&(Ji$1(0,`div`,0),Tw(1),Uu(),kI(2,ul,3,1,`div`,1)),i&2&&(jD(),qu(` `,r.data.message,`
`),jD(),FI(r.hasAction?2:-1))},dependencies:[gn$2,yl,vl,bl],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})();var zn=`_mat-snack-bar-enter`;var Vn=`_mat-snack-bar-exit`;var wl=(()=>{class n extends K$3{_ngZone=g(z$1);_elementRef=g(Dn$2);_changeDetectorRef=g(gg);_platform=g(v$3);_animationsDisabled=On$3();snackBarConfig=g(Te);_document=g(W$3);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=g(fe$3);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new J$4;_onExit=new J$4;_onEnter=new J$4;_animationState=`void`;_live;_label;_role;_liveElementId=g(ie$2).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),i}attachTemplatePortal(t){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),i}attachDomPortal=t=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),i};onAnimationEnd(t){t===Vn?this._completeExit():t===zn&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?pD(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(zn)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(zn)},200)))}exit(){return this._destroyed?$o$1(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?pD(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Vn)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Vn),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(o=>t.classList.add(o)):t.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,s=`mdc-snackbar__label`;r.classList.toggle(s,!r.querySelector(`.${s}`))}_exposeToModals(){let t=this._liveElementId,i=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let r=0;r<i.length;r++){let s=i[r],o=s.getAttribute(`aria-owns`);this._trackedModals.add(s),o?o.indexOf(t)===-1&&s.setAttribute(`aria-owns`,o+` `+t):s.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let i=t.getAttribute(`aria-owns`);if(i){let r=i.replace(this._liveElementId,``).trim();r.length>0?t.setAttribute(`aria-owns`,r):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,i=t.querySelector(`[aria-hidden]`),r=t.querySelector(`[aria-live]`);if(i&&r){let s=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(s=document.activeElement),i.removeAttribute(`aria-hidden`),r.appendChild(i),s?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`mat-snack-bar-container`]],viewQuery:function(i,r){if(i&1&&Uh(Mn$2,7)(fl,7),i&2){let s;JI(s=ew())&&(r._portalOutlet=s.first),JI(s=ew())&&(r._label=s.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(i,r){i&1&&Bh(`animationend`,function(o){return r.onAnimationEnd(o.animationName)})(`animationcancel`,function(o){return r.onAnimationEnd(o.animationName)}),i&2&&Zh(`mat-snack-bar-container-enter`,r._animationState===`visible`)(`mat-snack-bar-container-exit`,r._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!r._animationsDisabled)},features:[Th],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(i,r){i&1&&(Ji$1(0,`div`,1)(1,`div`,2,0)(3,`div`,3),_h(4,gl,0,0,`ng-template`,4),Uu(),Oh(5,`div`),Uu()()),i&2&&(jD(5),Ah(`aria-live`,r._live)(`role`,r._role)(`id`,r._liveElementId))},dependencies:[Mn$2],styles:[`@keyframes _mat-snack-bar-enter {
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
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
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
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
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
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return n})();var Sl=new I$3(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new Te});var jn=(()=>{class n{_live=g(Et$3);_injector=g(fe$3);_breakpointObserver=g(it$2);_parentSnackBar=g(n,{optional:!0,skipSelf:!0});_defaultConfig=g(Sl);_animationsDisabled=On$3();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=To;snackBarContainerComponent=wl;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,i){return this._attach(t,i)}openFromTemplate(t,i){return this._attach(t,i)}open(t,i=``,r){let s=w$1(w$1({},this._defaultConfig),r);return s.data={message:t,action:i},s.announcementMessage===t&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,s=fe$3.create({parent:r||this._injector,providers:[{provide:Te,useValue:i}]}),o=new se$3(this.snackBarContainerComponent,i.viewContainerRef,s),a=t.attach(o);return a.instance.snackBarConfig=i,a.instance}_attach(t,i){let r=w$1(w$1(w$1({},new Te),this._defaultConfig),i),s=this._createOverlay(r),o=this._attachSnackBarContainer(s,r),a=new Xe(o,s);if(t instanceof Xn$2){let l=new j$3(t,null,{$implicit:r.data,snackBarRef:a});a.instance=o.attachTemplatePortal(l)}else{let c=new se$3(t,void 0,this._createInjector(r,a));a.instance=o.attachComponentPortal(c).instance}return this._breakpointObserver.observe(pn$2.HandsetPortrait).pipe(Gm(s.detachments())).subscribe(l=>{s.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(a,r),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(t,i){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let i=new Me;i.direction=t.direction;let r=Ii(this._injector),s=t.direction===`rtl`,o=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!s||t.horizontalPosition===`end`&&s,a=!o&&t.horizontalPosition!==`center`;return o?r.left(`0`):a?r.right(`0`):r.centerHorizontally(),t.verticalPosition===`top`?r.top(`0`):r.bottom(`0`),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,Li(this._injector,i)}_createInjector(t,i){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector;return fe$3.create({parent:r||this._injector,providers:[{provide:Xe,useValue:i},{provide:Mo,useValue:t.data}]})}static ɵfac=function(i){return new(i||n)};static ɵprov=ue$1({token:n,factory:n.ɵfac})}return n})();var Oo=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({providers:[jn],imports:[Bn,Tn$2,hn$2,To,I$5]})}return n})();var Ye={version:`21.0.1`,production:!0};var Bi=[`*`];var xl=[`content`];var No=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`];var Po=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function Cl(n,e){if(n&1){let t=GI();Ji$1(0,`div`,1),Bh(`click`,function(){xd(t);return Ad(ZI()._onBackdropClicked())}),Uu()}if(n&2)Zh(`mat-drawer-shown`,ZI()._isShowingBackdrop())}function El(n,e){n&1&&(Ji$1(0,`mat-drawer-content`),KI(1,2),Uu())}function Ml(n,e){if(n&1){let t=GI();Ji$1(0,`div`,1),Bh(`click`,function(){xd(t);return Ad(ZI()._onBackdropClicked())}),Uu()}if(n&2)Zh(`mat-drawer-shown`,ZI()._isShowingBackdrop())}function Tl(n,e){n&1&&(Ji$1(0,`mat-sidenav-content`),KI(1,2),Uu())}var Ol=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
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
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
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
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
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
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
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
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
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
`;var Nl=new I$3(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var Un=new I$3(`MAT_DRAWER_CONTAINER`);var $e=(()=>{class n extends Yt$2{_platform=g(v$3);_changeDetectorRef=g(gg);_element=g(Dn$2);_ngZone=g(z$1);_isInert=!1;_container=g(Wn);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(Fm(50),Kt$1(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let i=this._element.nativeElement;this._isInert=t,t?i.setAttribute(`inert`,`true`):i.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:i}=this._container;return t!=null&&t.mode!==`over`&&t.opened||i!=null&&i.mode!==`over`&&i.opened}static ɵfac=(()=>{let t;return function(r){return(t||(t=Xf(n)))(r||n)}})();static ɵcmp=gI({type:n,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(i,r){i&2&&(qh(`margin-left`,r._container._contentMargins.left,`px`)(`margin-right`,r._container._contentMargins.right,`px`),Zh(`mat-drawer-content-hidden`,r._shouldBeHidden()))},features:[Aw([{provide:Yt$2,useExisting:n}]),Th],ngContentSelectors:Bi,decls:1,vars:0,template:function(i,r){i&1&&(QI(),KI(0))},encapsulation:2})}return n})();var Hn=(()=>{class n{_elementRef=g(Dn$2);_focusTrapFactory=g(vt$2);_focusMonitor=g(He$3);_platform=g(v$3);_ngZone=g(z$1);_renderer=g(Xr$1);_interactivityChecker=g(Ze$2);_doc=g(W$3);_container=g(Un,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t===`end`?`end`:`start`,t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=Fe$1(t)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(t){(t===`true`||t===`false`||t==null)&&(t=Fe$1(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(Fe$1(t))}_opened=Ii$2(!1);_openedVia=null;_animationStarted=new J$4;_animationEnd=new J$4;openedChange=new st$2(!0);_openedStream=this.openedChange.pipe(Et$2(t=>t),ie$1(()=>{}));openedStart=this._animationStarted.pipe(Et$2(()=>this.opened),ta$1(void 0));_closedStream=this.openedChange.pipe(Et$2(t=>!t),ie$1(()=>{}));closedStart=this._animationStarted.pipe(Et$2(()=>!this.opened),ta$1(void 0));_destroyed=new J$4;onPositionChanged=new st$2;_content;_modeChanged=new J$4;_injector=g(fe$3);_changeDetectorRef=g(gg);constructor(){this.openedChange.pipe(Gm(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,i=this._elementRef.nativeElement;return[t.listen(i,`keydown`,r=>{r.keyCode===27&&!this.disableClose&&!Qe$2(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),t.listen(i,`transitionend`,this._handleTransitionEvent),t.listen(i,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(t,i){let r=this._elementRef.nativeElement.querySelector(t);r&&(this._interactivityChecker.isFocusable(r)||(r.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let s=()=>{o(),a(),r.removeAttribute(`tabindex`)},o=this._renderer.listen(r,`blur`,s),a=this._renderer.listen(r,`mousedown`,s)})),r.focus(i))}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:pD(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus==`function`&&t.focus()},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(t=!this.opened,i){t&&i&&(this._openedVia=i);let r=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||`program`);return t||(this._openedVia=null),r}_setOpen(t,i,r){return t===this.opened?Promise.resolve(t?`open`:`close`):(this._opened.set(t),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,t),!t&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(s=>{this.openedChange.pipe(Kt$1(1)).subscribe(o=>s(o?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;t===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=t=>{let i=this._elementRef.nativeElement;t.target===i&&this._ngZone.run(()=>{t.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`mat-drawer`]],viewQuery:function(i,r){if(i&1&&Uh(xl,5),i&2){let s;JI(s=ew())&&(r._content=s.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(i,r){i&2&&(Ah(`align`,null)(`tabIndex`,r.mode!==`side`?`-1`:null),qh(`visibility`,!r._container&&!r.opened?`hidden`:null),Zh(`mat-drawer-end`,r.position===`end`)(`mat-drawer-over`,r.mode===`over`)(`mat-drawer-push`,r.mode===`push`)(`mat-drawer-side`,r.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:Bi,decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(i,r){i&1&&(QI(),Ji$1(0,`div`,1,0),KI(2),Uu())},dependencies:[Yt$2],encapsulation:2})}return n})();var Wn=(()=>{class n{_dir=g(m$3,{optional:!0});_element=g(Dn$2);_ngZone=g(z$1);_changeDetectorRef=g(gg);_animationDisabled=On$3();_transitionsEnabled=!1;_allDrawers;_drawers=new Hi$1;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=Fe$1(t)}_autosize=g(Nl);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:Fe$1(t)}_backdropOverride=null;backdropClick=new st$2;_start=null;_end=null;_left=null;_right=null;_destroyed=new J$4;_doCheckSubject=new J$4;_contentMargins={left:null,right:null};_contentMarginChanges=new J$4;get scrollable(){return this._userContent||this._content}_injector=g(fe$3);constructor(){let t=g(v$3),i=g(qt$2);this._dir?.change.pipe(Gm(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Gm(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(zm(this._allDrawers),Gm(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(zm(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Yl$1(10),Gm(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,i=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)t+=this._left._getWidth();else if(this._left.mode==`push`){let r=this._left._getWidth();t+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode==`side`)i+=this._right._getWidth();else if(this._right.mode==`push`){let r=this._right._getWidth();i+=r,t-=r}}t=t||null,i=i||null,(t!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:t,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(Gm(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!==`side`&&t.openedChange.pipe(Gm(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(Gm(this._drawers.changes)).subscribe(()=>{pD({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(Gm(Rm(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let i=this._element.nativeElement.classList,r=`mat-drawer-container-has-open`;t?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position==`end`?(this._end,this._end=t):(this._start,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!==`side`:this._backdropOverride}static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`mat-drawer-container`]],contentQueries:function(i,r,s){if(i&1&&Hh(s,$e,5)(s,Hn,5),i&2){let o;JI(o=ew())&&(r._content=o.first),JI(o=ew())&&(r._allDrawers=o)}},viewQuery:function(i,r){if(i&1&&Uh($e,5),i&2){let s;JI(s=ew())&&(r._userContent=s.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(i,r){i&2&&Zh(`mat-drawer-container-explicit-backdrop`,r._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[Aw([{provide:Un,useExisting:n}])],ngContentSelectors:Po,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(i,r){i&1&&(QI(No),kI(0,Cl,1,2,`div`,0),KI(1),KI(2,1),kI(3,El,2,0,`mat-drawer-content`)),i&2&&(FI(r.hasBackdrop?0:-1),jD(3),FI(r._content?-1:3))},dependencies:[$e],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
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
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
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
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
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
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
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
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
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
`],encapsulation:2})}return n})();var Fi=(()=>{class n extends $e{static ɵfac=(()=>{let t;return function(r){return(t||(t=Xf(n)))(r||n)}})();static ɵcmp=gI({type:n,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[Aw([{provide:Yt$2,useExisting:n},{provide:$e,useExisting:n}]),Th],ngContentSelectors:Bi,decls:1,vars:0,template:function(i,r){i&1&&(QI(),KI(0))},encapsulation:2})}return n})();var Qn=(()=>{class n extends Hn{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=Fe$1(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=xe$3(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=xe$3(t)}_fixedBottomGap=0;static ɵfac=(()=>{let t;return function(r){return(t||(t=Xf(n)))(r||n)}})();static ɵcmp=gI({type:n,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(i,r){i&2&&(Ah(`tabIndex`,r.mode!==`side`?`-1`:null)(`align`,null),qh(`top`,r.fixedInViewport?r.fixedTopGap:null,`px`)(`bottom`,r.fixedInViewport?r.fixedBottomGap:null,`px`),Zh(`mat-drawer-end`,r.position===`end`)(`mat-drawer-over`,r.mode===`over`)(`mat-drawer-push`,r.mode===`push`)(`mat-drawer-side`,r.mode===`side`)(`mat-sidenav-fixed`,r.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[Aw([{provide:Hn,useExisting:n}]),Th],ngContentSelectors:Bi,decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(i,r){i&1&&(QI(),Ji$1(0,`div`,1,0),KI(2),Uu())},dependencies:[Yt$2],encapsulation:2})}return n})();var Do=(()=>{class n extends Wn{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let t;return function(r){return(t||(t=Xf(n)))(r||n)}})();static ɵcmp=gI({type:n,selectors:[[`mat-sidenav-container`]],contentQueries:function(i,r,s){if(i&1&&Hh(s,Fi,5)(s,Qn,5),i&2){let o;JI(o=ew())&&(r._content=o.first),JI(o=ew())&&(r._allDrawers=o)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(i,r){i&2&&Zh(`mat-drawer-container-explicit-backdrop`,r._backdropOverride)},exportAs:[`matSidenavContainer`],features:[Aw([{provide:Un,useExisting:n},{provide:Wn,useExisting:n}]),Th],ngContentSelectors:Po,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(i,r){i&1&&(QI(No),kI(0,Ml,1,2,`div`,0),KI(1),KI(2,1),kI(3,Tl,2,0,`mat-sidenav-content`)),i&2&&(FI(r.hasBackdrop?0:-1),jD(3),FI(r._content?-1:3))},dependencies:[Fi],styles:[Ol],encapsulation:2})}return n})();var Ao=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({imports:[le$3,I$5,le$3]})}return n})();var Gn=[pn$2.XSmall,pn$2.Small,pn$2.Medium,pn$2.Large,pn$2.XLarge];var Oe=(()=>{class n{#t=g(it$2);#e=F$1(this.#t.observe(Gn),{initialValue:{matches:this.#t.isMatched(Gn),breakpoints:Object.fromEntries(Gn.map(t=>[t,this.#t.isMatched(t)]))}});isXSmallScreen=Uw(()=>this.#e().breakpoints[pn$2.XSmall]??!1);isSmallScreen=Uw(()=>this.#e().breakpoints[pn$2.Small]??!1);isMediumScreen=Uw(()=>this.#e().breakpoints[pn$2.Medium]??!1);isLargeScreen=Uw(()=>this.#e().breakpoints[pn$2.Large]??!1);isXLargeScreen=Uw(()=>this.#e().breakpoints[pn$2.XLarge]??!1);columnCount=Uw(()=>this.isXSmallScreen()?1:this.isSmallScreen()||this.isMediumScreen()?2:this.isLargeScreen()?3:4);isSmallOrSmaller=Uw(()=>this.isXSmallScreen()||this.isSmallScreen());isLargeOrBigger=Uw(()=>this.isLargeScreen()||this.isXLargeScreen());static ɵfac=function(i){return new(i||n)};static ɵprov=A$2({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Ro=(()=>{class n{swUpdate=g(Ee);snackbar=g(jn);checkUpdate(){this.swUpdate.versionUpdates.pipe(Kt$1(1)).subscribe(t=>{t.type===`VERSION_DETECTED`&&this.snackbar.open(`There is a new version of the docs available`,`Reload page`,{horizontalPosition:`center`,verticalPosition:`top`}).onAction().pipe(Kt$1(1)).subscribe(()=>{this.swUpdate.activateUpdate().then(()=>window.location.reload())})})}static ɵfac=function(i){return new(i||n)};static ɵprov=A$2({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Io=(()=>{class n{ngOnInit(){}static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`demo-sponsor`]],decls:23,vars:0,consts:[[1,`wrapper`],[1,`description`],[1,`main`],[`href`,`https://omniboard.dev`,`target`,`_blank`,`rel`,`noopener`],[`controls`,``,`poster`,`https://omniboard.dev/omniboard-getting-started.png`],[`src`,`https://omniboard.dev/omniboard-getting-started.mp4`,`type`,`video/mp4`]],template:function(i,r){i&1&&($u(0,`h2`),Tw(1,`Sponsors`),zu(),$u(2,`blockquote`),Tw(3,` Are you currently working in an `),$u(4,`strong`),Tw(5,`enterprise polyrepo environment`),zu(),Tw(6,` with many applications and found yourself thinking you could provide so much more value only if you had better overview to plan, track progress and just get things done?
`),zu(),$u(7,`div`,0)(8,`div`,1)(9,`p`,2),Tw(10,` Try `),$u(11,`strong`)(12,`a`,3),Tw(13,`Omniboard`),zu(),Tw(14,`, the best tool for lead software engineers and architects`),zu(),Tw(15,` that helps them to get an overview to drive change in the `),$u(16,`strong`),Tw(17,`polyrepo`),zu(),Tw(18,` environment by querying and tracking all their code bases! `),zu(),$u(19,`p`),Tw(20,` The free plan let's you get a full overview of all your projects with your first dashboard, tracking up to 3 different things! `),zu()(),$u(21,`video`,4),kh(22,`source`,5),zu()())},styles:[`[_nghost-%COMP%]{display:block;padding:40px}h2[_ngcontent-%COMP%]{font-weight:700}blockquote[_ngcontent-%COMP%]{font-size:24px;line-height:48px;margin:40px 100px;font-style:normal}.wrapper[_ngcontent-%COMP%]{display:flex}.wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:50%;padding:20px}.wrapper[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{border-radius:10px}.wrapper[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.wrapper[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{font-size:18px}.responsive[_nghost-%COMP%]   blockquote[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   blockquote[_ngcontent-%COMP%]{font-size:16px;line-height:32px;margin:0 0 20px}.responsive[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{flex-direction:column}.responsive[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}`]})}return n})();var Dl=[`*`,[[`mat-toolbar-row`]]];var Al=[`*`,`mat-toolbar-row`];var Rl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Fu({type:n,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return n})();var Lo=(()=>{class n{_elementRef=g(Dn$2);_platform=g(v$3);_document=g(W$3);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`mat-toolbar`]],contentQueries:function(i,r,s){if(i&1&&Hh(s,Rl,5),i&2){let o;JI(o=ew())&&(r._toolbarRows=o)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(i,r){i&2&&(pw(r.color?`mat-`+r.color:``),Zh(`mat-toolbar-multiple-rows`,r._toolbarRows.length>0)(`mat-toolbar-single-row`,r._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:Al,decls:2,vars:0,template:function(i,r){i&1&&(QI(Dl),KI(0),KI(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
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
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return n})();var Fo=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({imports:[I$5]})}return n})();function Ll(n,e){if(n&1){let t=GI();Ji$1(0,`button`,15),Bh(`click`,function(){xd(t);return Ad(ZI().toggle.emit())}),Ji$1(1,`mat-icon`,16),Tw(2),Uu()()}if(n&2){let t=ZI();jD(2),qu(` `,t.navOpened()?`close`:`menu`,` `)}}function Fl(n,e){n&1&&Oh(0,`img`,6)}function Bl(n,e){n&1&&(Ji$1(0,`a`,7),Tw(1,` Follow @tomastrajan `),Uu())}function zl(n,e){n&1&&(Ji$1(0,`button`,17),Tw(1,` HOME `),Uu(),Ji$1(2,`button`,18),Tw(3,` DOCS `),Uu(),Ji$1(4,`button`,19),Tw(5,` EXAMPLES `),Uu())}var Vo=(()=>{class n{#t=g(Oe);navOpened=F1(!1);toggle=k1();isResponsiveLayout=this.#t.isSmallOrSmaller;static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`demo-toolbar`]],inputs:{navOpened:[1,`navOpened`]},outputs:{toggle:`toggle`},decls:17,vars:5,consts:[[`color`,`primary`],[`mat-icon-button`,``,1,`menu`],[1,`spacer-responsive`],[`mat-icon-button`,``,`routerLink`,`home`,1,`logo`],[`inline`,``,`svgIcon`,`logo`,`aria-hidden`,`false`,`aria-label`,`@angular-extensions/elements`],[1,`project-name`],[`alt`,`downloads per month`,`src`,`https://img.shields.io/npm/dm/@angular-extensions/elements`],[`href`,`https://twitter.com/tomastrajan?ref_src=twsrc%5Etfw`,`data-lang`,`en`,`data-show-count`,`false`,1,`twitter-follow-button`],[1,`spacer`],[`mat-icon-button`,``,`href`,`https://github.com/angular-extensions/elements`,`target`,`_blank`],[`svgIcon`,`github`,`aria-hidden`,`false`,`aria-label`,`GitHub`],[`mat-icon-button`,``,`href`,`https://www.npmjs.com/package/@angular-extensions/elements`,`target`,`_blank`],[`svgIcon`,`npm`,`aria-hidden`,`false`,`aria-label`,`npm`],[`mat-icon-button`,``,`href`,`https://twitter.com/tomastrajan`,`target`,`_blank`],[`svgIcon`,`twitter`,`aria-hidden`,`false`,`aria-label`,`Twitter`],[`mat-icon-button`,``,1,`menu`,3,`click`],[`aria-hidden`,`false`,`aria-label`,`Menu`],[`mat-flat-button`,``,`routerLink`,`home`,`routerLinkActive`,`active`,`color`,`primary`],[`mat-flat-button`,``,`routerLink`,`docs`,`routerLinkActive`,`active`,`color`,`primary`],[`mat-flat-button`,``,`routerLink`,`examples`,`routerLinkActive`,`active`,`color`,`primary`]],template:function(i,r){i&1&&(Ji$1(0,`mat-toolbar`,0),kI(1,Ll,3,1,`button`,1),Oh(2,`span`,2),Ji$1(3,`a`,3),Oh(4,`mat-icon`,4),Uu(),Ji$1(5,`span`,5),Tw(6),Uu(),kI(7,Fl,1,0,`img`,6),kI(8,Bl,2,0,`a`,7),Oh(9,`span`,8),kI(10,zl,6,0),Ji$1(11,`a`,9),Oh(12,`mat-icon`,10),Uu(),Ji$1(13,`a`,11),Oh(14,`mat-icon`,12),Uu(),Ji$1(15,`a`,13),Oh(16,`mat-icon`,14),Uu()()),i&2&&(jD(),FI(r.isResponsiveLayout()?1:-1),jD(5),qu(` `,r.isResponsiveLayout()?``:`@angular-extensions/`,`elements `),jD(),FI(r.isResponsiveLayout()!==void 0?7:-1),jD(),FI(r.isResponsiveLayout()!==void 0?8:-1),jD(2),FI(r.isResponsiveLayout()===!1?10:-1))},dependencies:[Dt,To$1,yt$1,wt$1,hn$2,gn$2,$t,Fo,Lo],styles:[`mat-toolbar[_ngcontent-%COMP%]{gap:10px}.spacer[_ngcontent-%COMP%]{flex:1 0 auto}.menu[_ngcontent-%COMP%]{margin:0 10px 0 0}a.logo[_ngcontent-%COMP%]{padding:0}a.logo[_ngcontent-%COMP%]     svg{transform:scale(2);vertical-align:-webkit-baseline-middle}a[_ngcontent-%COMP%]:hover{color:#fff}.responsive[_nghost-%COMP%]   .spacer-responsive[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   .spacer-responsive[_ngcontent-%COMP%]{flex:1 0 auto}`]})}return n})();var jo=(()=>{class n{year=new Date().getFullYear();version=Ye.version;static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`demo-footer`]],decls:9,vars:3,consts:[[`mat-button`,``,`href`,`https://twitter.com/tomastrajan`,`target`,`_blank`,1,`signature`,3,`disableRipple`],[`src`,`assets/tomastrajan.webp`,`alt`,`Tomas Trajan`]],template:function(i,r){i&1&&(Ji$1(0,`span`),Tw(1),Uu(),Ji$1(2,`a`,0)(3,`span`),Tw(4,`Made with ❤️ by `),Uu(),Oh(5,`img`,1),Tw(6,` @tomastrajan
`),Uu(),Ji$1(7,`span`),Tw(8),Uu()),i&2&&(jD(),qu(`© `,r.year),jD(),Rh(`disableRipple`,!0),jD(6),eg(r.version))},dependencies:[hn$2,gn$2],styles:[`[_nghost-%COMP%]{padding:20px;display:flex;align-items:center;text-align:center}[_nghost-%COMP%]   .signature[_ngcontent-%COMP%]{flex:1 0 auto}[_nghost-%COMP%]   .signature[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:36px}.responsive[_nghost-%COMP%]   .signature[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   .signature[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}`]})}return n})();var Ho=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({imports:[I$5]})}return n})();var Wo=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({imports:[I$5]})}return n})();var Vl=[`*`];var jl=`.mdc-list {
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
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
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
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
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
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
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
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
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
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
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
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
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
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
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
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
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
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`;var Hl=[`unscopedContent`];var Wl=[`text`];var Ul=[[[``,`matListItemAvatar`,``],[``,`matListItemIcon`,``]],[[``,`matListItemTitle`,``]],[[``,`matListItemLine`,``]],`*`,[[``,`matListItemMeta`,``]],[[`mat-divider`]]];var Ql=[`[matListItemAvatar],[matListItemIcon]`,`[matListItemTitle]`,`[matListItemLine]`,`*`,`[matListItemMeta]`,`mat-divider`];var Gl=new I$3(`ListOption`);var ql=(()=>{class n{_elementRef=g(Dn$2);static ɵfac=function(i){return new(i||n)};static ɵdir=Fu({type:n,selectors:[[``,`matListItemTitle`,``]],hostAttrs:[1,`mat-mdc-list-item-title`,`mdc-list-item__primary-text`]})}return n})();var Kl=(()=>{class n{_elementRef=g(Dn$2);static ɵfac=function(i){return new(i||n)};static ɵdir=Fu({type:n,selectors:[[``,`matListItemLine`,``]],hostAttrs:[1,`mat-mdc-list-item-line`,`mdc-list-item__secondary-text`]})}return n})();var Xl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Fu({type:n,selectors:[[``,`matListItemMeta`,``]],hostAttrs:[1,`mat-mdc-list-item-meta`,`mdc-list-item__end`]})}return n})();var Uo=(()=>{class n{_listOption=g(Gl,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()===`after`}static ɵfac=function(i){return new(i||n)};static ɵdir=Fu({type:n,hostVars:4,hostBindings:function(i,r){i&2&&Zh(`mdc-list-item__start`,r._isAlignedAtStart())(`mdc-list-item__end`,!r._isAlignedAtStart())}})}return n})();var Yl=(()=>{class n extends Uo{static ɵfac=(()=>{let t;return function(r){return(t||(t=Xf(n)))(r||n)}})();static ɵdir=Fu({type:n,selectors:[[``,`matListItemAvatar`,``]],hostAttrs:[1,`mat-mdc-list-item-avatar`],features:[Th]})}return n})();var $l=(()=>{class n extends Uo{static ɵfac=(()=>{let t;return function(r){return(t||(t=Xf(n)))(r||n)}})();static ɵdir=Fu({type:n,selectors:[[``,`matListItemIcon`,``]],hostAttrs:[1,`mat-mdc-list-item-icon`],features:[Th]})}return n})();var Zl=new I$3(`MAT_LIST_CONFIG`);var qn=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Fe$1(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Fe$1(t))}_disabled=Ii$2(!1);_defaultOptions=g(Zl,{optional:!0});static ɵfac=function(i){return new(i||n)};static ɵdir=Fu({type:n,hostVars:1,hostBindings:function(i,r){i&2&&Ah(`aria-disabled`,r.disabled)},inputs:{disableRipple:`disableRipple`,disabled:`disabled`}})}return n})();var Jl=(()=>{class n{_elementRef=g(Dn$2);_ngZone=g(z$1);_listBase=g(qn,{optional:!0});_platform=g(v$3);_hostElement;_isButtonElement;_noopAnimations=On$3();_avatars;_icons;set lines(t){this._explicitLines=xe$3(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Fe$1(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Fe$1(t))}_disabled=Ii$2(!1);_subscriptions=new Z$3;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){g(h$4).load(Rn$2);let t=g(ge$1,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()===`button`,this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute(`type`)&&this._hostElement.setAttribute(`type`,`button`)}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add(`mat-mdc-list-item-interactive`),this._rippleRenderer=new j$2(this,this._ngZone,this._hostElement,this._platform,g(fe$3)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Rm(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle(`mat-mdc-list-item-single-line`,i<=1),this._hostElement.classList.toggle(`mdc-list-item--with-one-line`,i<=1),this._hostElement.classList.toggle(`mdc-list-item--with-two-lines`,i===2),this._hostElement.classList.toggle(`mdc-list-item--with-three-lines`,i===3),this._hasUnscopedTextContent){let s=this._titles.length===0&&i===1;r.classList.toggle(`mdc-list-item__primary-text`,s),r.classList.toggle(`mdc-list-item__secondary-text`,!s)}else r.classList.remove(`mdc-list-item__primary-text`),r.classList.remove(`mdc-list-item__secondary-text`)}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static ɵfac=function(i){return new(i||n)};static ɵdir=Fu({type:n,contentQueries:function(i,r,s){if(i&1&&Hh(s,Yl,4)(s,$l,4),i&2){let o;JI(o=ew())&&(r._avatars=o),JI(o=ew())&&(r._icons=o)}},hostVars:4,hostBindings:function(i,r){i&2&&(Ah(`aria-disabled`,r.disabled)(`disabled`,r._isButtonElement&&r.disabled||null),Zh(`mdc-list-item--disabled`,r.disabled))},inputs:{lines:`lines`,disableRipple:`disableRipple`,disabled:`disabled`}})}return n})();var Qo=(()=>{class n extends Jl{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=Fe$1(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName===`A`&&this._activated?`page`:null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static ɵfac=(()=>{let t;return function(r){return(t||(t=Xf(n)))(r||n)}})();static ɵcmp=gI({type:n,selectors:[[`mat-list-item`],[`a`,`mat-list-item`,``],[`button`,`mat-list-item`,``]],contentQueries:function(i,r,s){if(i&1&&Hh(s,Kl,5)(s,ql,5)(s,Xl,5),i&2){let o;JI(o=ew())&&(r._lines=o),JI(o=ew())&&(r._titles=o),JI(o=ew())&&(r._meta=o)}},viewQuery:function(i,r){if(i&1&&Uh(Hl,5)(Wl,5),i&2){let s;JI(s=ew())&&(r._unscopedContent=s.first),JI(s=ew())&&(r._itemText=s.first)}},hostAttrs:[1,`mat-mdc-list-item`,`mdc-list-item`],hostVars:13,hostBindings:function(i,r){i&2&&(Ah(`aria-current`,r._getAriaCurrent()),Zh(`mdc-list-item--activated`,r.activated)(`mdc-list-item--with-leading-avatar`,r._avatars.length!==0)(`mdc-list-item--with-leading-icon`,r._icons.length!==0)(`mdc-list-item--with-trailing-meta`,r._meta.length!==0)(`mat-mdc-list-item-both-leading-and-trailing`,r._hasBothLeadingAndTrailing())(`_mat-animation-noopable`,r._noopAnimations))},inputs:{activated:`activated`},exportAs:[`matListItem`],features:[Th],ngContentSelectors:Ql,decls:10,vars:0,consts:[[`unscopedContent`,``],[1,`mdc-list-item__content`],[1,`mat-mdc-list-item-unscoped-content`,3,`cdkObserveContent`],[1,`mat-focus-indicator`]],template:function(i,r){i&1&&(QI(Ul),KI(0),Ji$1(1,`span`,1),KI(2,1),KI(3,2),Ji$1(4,`span`,2,0),Bh(`cdkObserveContent`,function(){return r._updateItemLines(!0)}),KI(6,3),Uu()(),KI(7,4),KI(8,5),Oh(9,`div`,3))},dependencies:[_i$2],encapsulation:2})}return n})();var Go=(()=>{class n extends qn{_isNonInteractive=!1;static ɵfac=(()=>{let t;return function(r){return(t||(t=Xf(n)))(r||n)}})();static ɵcmp=gI({type:n,selectors:[[`mat-nav-list`]],hostAttrs:[`role`,`navigation`,1,`mat-mdc-nav-list`,`mat-mdc-list-base`,`mdc-list`],exportAs:[`matNavList`],features:[Aw([{provide:qn,useExisting:n}]),Th],ngContentSelectors:Vl,decls:1,vars:0,template:function(i,r){i&1&&(QI(),KI(0))},styles:[jl],encapsulation:2})}return n})();var qo=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({imports:[pi$2,Pt,Wo,I$5,Ho]})}return n})();function ec(n,e){if(n&1&&(Ji$1(0,`a`,6),Tw(1),Uu()),n&2){let t=e.$implicit;Rh(`routerLink`,t.url),jD(),qu(` `,t.label,` `)}}function ic(n,e){if(n&1&&jI(0,ec,2,2,`a`,6,LI),n&2){let t=ZI().$implicit;BI(t.children)}}function nc(n,e){if(n&1&&(Ji$1(0,`a`,5,0)(2,`mat-icon`,3),Tw(3),Uu(),Tw(4),Uu(),kI(5,ic,2,0)),n&2){let t=e.$implicit,i=nw(1);Rh(`routerLink`,t.url),jD(3),eg(t.children&&i.isActive?`expand_more`:`chevron_right`),jD(),qu(` `,t.label,` `),jD(),FI(t.children&&i.isActive?5:-1)}}var rc=[{label:`HOME`,url:`home`},{label:`DOCS`,url:`docs`,children:[{label:`Getting started`,url:`docs/getting-started`},{label:`How it works`,url:`docs/how-it-works`},{label:`Configuration`,url:`docs/configuration`},{label:`Use cases`,url:`docs/use-cases`},{label:`Change detection`,url:`docs/change-detection`},{label:`API`,url:`docs/api`},{label:`FAQ`,url:`docs/faq`}]},{label:`EXAMPLES`,url:`examples`,children:[{label:`Basic`,url:`examples/basic`},{label:`Advanced`,url:`examples/advanced`},{label:`Dynamic`,url:`examples/dynamic`},{label:`Testing`,url:`examples/testing`}]},{label:`CONTRIBUTE`,url:`contribute`},{label:`CHANGELOG`,url:`changelog`}];var Ko=(()=>{class n{navigation=rc;static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`demo-navigation`]],decls:9,vars:0,consts:[[`rla`,`routerLinkActive`],[1,`spacer`],[`mat-list-item`,``,`href`,`https://angularexperts.io/blog`,`target`,`_blank`,1,`image-link`],[`matListIcon`,``],[`src`,`assets/logo/angular-experts.png`,`alt`,`Angular Experts Blog`],[`mat-list-item`,``,`routerLinkActive`,`active`,3,`routerLink`],[`mat-list-item`,``,`routerLinkActive`,`active`,1,`sub-nav`,3,`routerLink`]],template:function(i,r){i&1&&(Oh(0,`div`,1),Ji$1(1,`mat-nav-list`),jI(2,nc,6,4,null,null,LI),Ji$1(4,`a`,2)(5,`mat-icon`,3),Tw(6,`chevron_right`),Uu(),Tw(7,` MADE BY `),Oh(8,`img`,4),Uu()()),i&2&&(jD(2),BI(r.navigation))},dependencies:[Dt,To$1,yt$1,wt$1,qo,Go,Qo],styles:[`[_nghost-%COMP%]{position:relative}.spacer[_ngcontent-%COMP%]{min-width:250px}mat-nav-list[_ngcontent-%COMP%]{padding-top:0;position:fixed;top:64px;max-height:calc(100% - 64px);overflow-y:auto;overflow-x:hidden}a[mat-list-item][_ngcontent-%COMP%]{width:250px}a[mat-list-item].sub-nav[_ngcontent-%COMP%]{width:auto;padding-left:32px!important;font-size:1em!important}a[mat-list-item].active[_ngcontent-%COMP%]     .mdc-list-item__primary-text{font-weight:700!important}.image-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:35px;margin:0 0 0 10px}.responsive[_nghost-%COMP%]   mat-nav-list[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   mat-nav-list[_ngcontent-%COMP%]{top:56px;max-height:calc(100% - 56px)}`]})}return n})();var Xo=(()=>{class n{matIconRegistry=g(K$1);domSanitizer=g(bT);registerIcon(){this.matIconRegistry.addSvgIcon(`github`,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/logo/github.svg`)),this.matIconRegistry.addSvgIcon(`npm`,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/logo/npm.svg`)),this.matIconRegistry.addSvgIcon(`twitter`,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/logo/twitter.svg`)),this.matIconRegistry.addSvgIcon(`logo`,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/logo/logo.svg`))}static ɵfac=function(i){return new(i||n)};static ɵprov=A$2({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Yo=(()=>{class n{responsiveLayoutService=g(Oe);swUpdate=g(Ee);refreshService=g(Ro);registerIconService=g(Xo);navToggled=Ii$2(!1);isSmallOrSmaller=this.responsiveLayoutService.isSmallOrSmaller;navOpened=Uw(()=>!this.isSmallOrSmaller()||this.navToggled());sidenavMode=Uw(()=>this.isSmallOrSmaller()?`push`:`side`);demoRootCssClass=Uw(()=>this.responsiveLayoutService.isLargeOrBigger()?`responsive-large`:this.isSmallOrSmaller()?`responsive`:``);constructor(){this.registerIconService.registerIcon()}ngOnInit(){this.swUpdate.isEnabled&&this.refreshService.checkUpdate()}onNavToggle(){this.navToggled.update(t=>!t)}onBackdropClick(){this.navToggled.set(!1)}static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`demo-root`]],hostVars:2,hostBindings:function(i,r){i&2&&pw(r.demoRootCssClass())},decls:8,vars:4,consts:[[3,`toggle`,`navOpened`],[3,`backdropClick`,`hasBackdrop`],[`disableClose`,``,3,`mode`,`opened`]],template:function(i,r){i&1&&(Ji$1(0,`demo-toolbar`,0),Bh(`toggle`,function(){return r.onNavToggle()}),Uu(),Ji$1(1,`mat-sidenav-container`,1),Bh(`backdropClick`,function(){return r.onBackdropClick()}),Ji$1(2,`mat-sidenav`,2),Oh(3,`demo-navigation`),Uu(),Ji$1(4,`mat-sidenav-content`),Oh(5,`router-outlet`)(6,`demo-sponsor`),Uu()(),Oh(7,`demo-footer`)),i&2&&(Rh(`navOpened`,r.navOpened()),jD(),Rh(`hasBackdrop`,r.isSmallOrSmaller()),jD(),Rh(`mode`,r.sidenavMode())(`opened`,r.navOpened()))},dependencies:[dr,Io,Vo,jo,Ko,Ao,Qn,Do,Fi],styles:[`[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   demo-toolbar[_ngcontent-%COMP%]{z-index:100;position:fixed;width:100%;box-shadow:0 -10px 10px 10px #00000080}[_nghost-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]{padding-top:64px;flex:1 0 auto}[_nghost-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{padding-top:64px}.responsive[_nghost-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]{padding-top:56px}.responsive[_nghost-%COMP%]   mat-sidenav[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{padding-top:56px}`]})}return n})();var $o=(()=>{class n{ngOnInit(){}static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`demo-root-error`]],decls:2,vars:0,template:function(i,r){i&1&&($u(0,`p`),Tw(1,`Loading failed (root) ⚠️...`),zu())},encapsulation:2})}return n})();var Zo={provide:V,useValue:{coreLibraryLoader:()=>import(`./chunk-DMM1QiDC.js`),languages:{typescript:()=>import(`./chunk-B6k7c65o.js`),xml:()=>import(`./chunk-CjhD5qXj.js`)}}};var zi=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let e=Math.max(...this.tracker);return e>1?this.rowCount+e-1:this.rowCount}positions;update(e,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(e),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(i=>this._trackTile(i))}_trackTile(e){let t=this._findMatchingGap(e.colspan);return this._markTilePosition(t,e),this.columnIndex=t+e.colspan,new Kn(this.rowIndex,t)}_findMatchingGap(e){if(e>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${e} is wider than grid with cols="${this.tracker.length}".`);let t=-1,i=-1;do{if(this.columnIndex+e>this.tracker.length){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}if(t=this.tracker.indexOf(0,this.columnIndex),t==-1){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}i=this._findGapEndIndex(t),this.columnIndex=t+1}while(i-t<e||i==0);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let e=0;e<this.tracker.length;e++)this.tracker[e]=Math.max(0,this.tracker[e]-1)}_findGapEndIndex(e){for(let t=e+1;t<this.tracker.length;t++)if(this.tracker[t]!=0)return t;return this.tracker.length}_markTilePosition(e,t){for(let i=0;i<t.colspan;i++)this.tracker[e+i]=t.rowspan}};var Kn=class{row;col;constructor(e,t){this.row=e,this.col=t}};var Xn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({imports:[I$5]})}return n})();var Jo=[`*`];var sc=`.mat-grid-list {
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
  font-size: var(--%NS%mat-grid-list-tile-header-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-header-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--%NS%mat-grid-list-tile-footer-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-footer-secondary-text-size, var(--%NS%mat-sys-body-medium));
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
`;var ta=new I$3(`MAT_GRID_LIST`);var Jn=(()=>{class n{_element=g(Dn$2);_gridList=g(ta,{optional:!0});_rowspan=1;_colspan=1;get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(xe$3(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(xe$3(t))}_setStyle(t,i){this._element.nativeElement.style[t]=i}static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`mat-grid-tile`]],hostAttrs:[1,`mat-grid-tile`],hostVars:2,hostBindings:function(i,r){i&2&&Ah(`rowspan`,r.rowspan)(`colspan`,r.colspan)},inputs:{rowspan:`rowspan`,colspan:`colspan`},exportAs:[`matGridTile`],ngContentSelectors:Jo,decls:2,vars:0,consts:[[1,`mat-grid-tile-content`]],template:function(i,r){i&1&&(QI(),$u(0,`div`,0),KI(1),zu())},styles:[`.mat-grid-list {
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
  font-size: var(--%NS%mat-grid-list-tile-header-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-header-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--%NS%mat-grid-list-tile-footer-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-footer-secondary-text-size, var(--%NS%mat-sys-body-medium));
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
`],encapsulation:2})}return n})();var oc=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;var Ze=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(e,t,i,r){this._gutterSize=ea(e),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=i,this._direction=r}getBaseTileSize(e,t){return`(${e}% - (${this._gutterSize} * ${t}))`}getTilePosition(e,t){return t===0?`0`:de(`(${e} + ${this._gutterSize}) * ${t}`)}getTileSize(e,t){return`(${e} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(e,t,i){let r=100/this._cols,s=(this._cols-1)/this._cols;this.setColStyles(e,i,r,s),this.setRowStyles(e,t,r,s)}setColStyles(e,t,i,r){let s=this.getBaseTileSize(i,r),o=this._direction===`rtl`?`right`:`left`;e._setStyle(o,this.getTilePosition(s,t)),e._setStyle(`width`,de(this.getTileSize(s,e.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(e){return`${this._rowspan} * ${this.getTileSize(e,1)}`}getComputedHeight(){return null}};var Yn=class extends Ze{fixedRowHeight;constructor(e){super(),this.fixedRowHeight=e}init(e,t,i,r){super.init(e,t,i,r),this.fixedRowHeight=ea(this.fixedRowHeight),oc.test(this.fixedRowHeight)}setRowStyles(e,t){e._setStyle(`top`,this.getTilePosition(this.fixedRowHeight,t)),e._setStyle(`height`,de(this.getTileSize(this.fixedRowHeight,e.rowspan)))}getComputedHeight(){return[`height`,de(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle([`height`,null]),e._tiles&&e._tiles.forEach(t=>{t._setStyle(`top`,null),t._setStyle(`height`,null)})}};var $n=class extends Ze{rowHeightRatio;baseTileHeight;constructor(e){super(),this._parseRatio(e)}setRowStyles(e,t,i,r){let s=i/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(s,r),e._setStyle(`marginTop`,this.getTilePosition(this.baseTileHeight,t)),e._setStyle(`paddingTop`,de(this.getTileSize(this.baseTileHeight,e.rowspan)))}getComputedHeight(){return[`paddingBottom`,de(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle([`paddingBottom`,null]),e._tiles.forEach(t=>{t._setStyle(`marginTop`,null),t._setStyle(`paddingTop`,null)})}_parseRatio(e){let t=e.split(`:`);t.length,this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}};var Zn=class extends Ze{setRowStyles(e,t){let i=100/this._rowspan,r=(this._rows-1)/this._rows,s=this.getBaseTileSize(i,r);e._setStyle(`top`,this.getTilePosition(s,t)),e._setStyle(`height`,de(this.getTileSize(s,e.rowspan)))}reset(e){e._tiles&&e._tiles.forEach(t=>{t._setStyle(`top`,null),t._setStyle(`height`,null)})}};function de(n){return`calc(${n})`}function ea(n){return n.match(/([A-Za-z%]+)$/)?n:`${n}px`}var ac=`fit`;var ia=(()=>{class n{_element=g(Dn$2);_dir=g(m$3,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter=`1px`;_tileStyler;_tiles;get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(xe$3(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??``}`}get rowHeight(){return this._rowHeight}set rowHeight(t){let i=`${t??``}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler(`1:1`)}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),t===ac?this._tileStyler=new Zn:t&&t.indexOf(`:`)>-1?this._tileStyler=new $n(t):this._tileStyler=new Yn(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new zi);let t=this._tileCoordinator,i=this._tiles.filter(s=>!s._gridList||s._gridList===this),r=this._dir?this._dir.value:`ltr`;this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,r),i.forEach((s,o)=>{let a=t.positions[o];this._tileStyler.setStyle(s,a.row,a.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`mat-grid-list`]],contentQueries:function(i,r,s){if(i&1&&Hh(s,Jn,5),i&2){let o;JI(o=ew())&&(r._tiles=o)}},hostAttrs:[1,`mat-grid-list`],hostVars:1,hostBindings:function(i,r){i&2&&Ah(`cols`,r.cols)},inputs:{cols:`cols`,gutterSize:`gutterSize`,rowHeight:`rowHeight`},exportAs:[`matGridList`],features:[Aw([{provide:ta,useExisting:n}])],ngContentSelectors:Jo,decls:2,vars:0,template:function(i,r){i&1&&(QI(),$u(0,`div`),KI(1),zu())},styles:[sc],encapsulation:2})}return n})();var na=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=hs$1({type:n});static ɵinj=Nr({imports:[Xn,I$5,Xn]})}return n})();function cc(n,e){if(n&1&&(Ji$1(0,`mat-grid-tile`)(1,`mat-card`)(2,`mat-card-header`)(3,`div`,12)(4,`mat-icon`,13),Tw(5),Uu()(),Ji$1(6,`mat-card-title`),Tw(7),Uu(),Oh(8,`mat-card-subtitle`,14),Uu()()()),n&2){let t=e.$implicit;jD(5),eg(t.icon),jD(2),eg(t.title),jD(),Rh(`innerHTML`,t.subtitle,qv)}}var ra=(()=>{class n{responsiveLayoutService=g(Oe);columnCount=this.responsiveLayoutService.columnCount;features=mc;codeExampleComponent=dc;static ɵfac=function(i){return new(i||n)};static ɵcmp=gI({type:n,selectors:[[`demo-home`]],decls:73,vars:2,consts:[[1,`intro`],[`inline`,``,`svgIcon`,`logo`,`aria-hidden`,`false`,`aria-label`,`@angular-extensions/elements`],[1,`cta`],[`mat-flat-button`,``,`color`,`accent`,`routerLink`,`/docs/getting-started`],[`mat-flat-button`,``,`color`,`primary`,`routerLink`,`/docs/how-it-works`],[`mat-flat-button`,``,`color`,`warn`,`routerLink`,`/examples`],[`mat-stroked-button`,``,`href`,`https://medium.com/@tomastrajan/the-best-way-to-lazy-load-angular-elements-97a51a5c2007`,`target`,`_blank`],[`mat-stroked-button`,``,`href`,`https://www.youtube.com/watch?v=X__jkPGYRUs`,`target`,`_blank`],[`mat-stroked-button`,``,`href`,`https://open.spotify.com/episode/2PI6K8sdxeBweDw3JtmJX8`,`target`,`_blank`],[`color`,`accent`],[`language`,`typescript`,3,`highlight`],[`rowHeight`,`150`,`gutterSize`,`18`,3,`cols`],[`mat-card-avatar`,``],[`color`,`primary`],[3,`innerHTML`]],template:function(i,r){i&1&&(Ji$1(0,`div`,0),Oh(1,`mat-icon`,1),Ji$1(2,`h1`),Tw(3,`ANGULAR EXTENSIONS ELEMENTS`),Uu(),Ji$1(4,`h3`),Tw(5,` The easiest way to lazy load Angular Elements or any other web components `),Oh(6,`br`),Tw(7,` in your Angular application! `),Uu()(),Ji$1(8,`div`,2)(9,`button`,3),Tw(10,` Get started `),Uu(),Ji$1(11,`button`,4),Tw(12,` Learn more `),Uu(),Ji$1(13,`button`,5),Tw(14,` Explore examples `),Uu()(),Ji$1(15,`div`,2)(16,`a`,6)(17,`mat-icon`),Tw(18,`book`),Uu(),Tw(19,` Read blog post `),Uu(),Ji$1(20,`a`,7)(21,`mat-icon`),Tw(22,`play_circle_outline`),Uu(),Tw(23,` Watch presentation `),Uu(),Ji$1(24,`a`,8)(25,`mat-icon`),Tw(26,`audiotrack`),Uu(),Tw(27,` Listen to podcast `),Uu()(),Ji$1(28,`h2`),Tw(29,`Quickstart`),Uu(),Ji$1(30,`ol`)(31,`li`),Tw(32,` Install `),Ji$1(33,`code`,9),Tw(34,`npm i @angular-extensions/elements`),Uu()(),Ji$1(35,`li`),Tw(36,` Add `),Ji$1(37,`code`),Tw(38,` import { LazyElementDirective } from '@angular-extensions/elements'; `),Uu()(),Ji$1(39,`li`),Tw(40,` Append `),Ji$1(41,`code`),Tw(42,`LazyElementDirective`),Uu(),Tw(43,` to the `),Ji$1(44,`code`),Tw(45,`imports: []`),Uu(),Tw(46,` of your `),Ji$1(47,`code`),Tw(48,`MyOrgComponent`),Uu()(),Ji$1(49,`li`),Tw(50,` Add new `),Ji$1(51,`code`),Tw(52,`schemas: []`),Uu(),Tw(53,` property with `),Ji$1(54,`code`),Tw(55,`CUSTOM_ELEMENTS_SCHEMA`),Uu(),Tw(56,` value to `),Ji$1(57,`code`),Tw(58,`@Component`),Uu(),Tw(59,` decorator of your `),Ji$1(60,`code`),Tw(61,`MyOrgComponent`),Uu()(),Ji$1(62,`li`),Tw(63,` Use `),Ji$1(64,`code`),Tw(65,`*axLazyElement`),Uu(),Tw(66,` directive on an element you wish to load and pass in the url of the element bundle `),Oh(67,`pre`,10),Uu()(),Ji$1(68,`h2`),Tw(69,`Features`),Uu(),Ji$1(70,`mat-grid-list`,11),jI(71,cc,9,3,`mat-grid-tile`,null,LI),Uu()),i&2&&(jD(67),Rh(`highlight`,r.codeExampleComponent),jD(3),Rh(`cols`,r.columnCount()),jD(),BI(r.features))},dependencies:[Dt,hn$2,gn$2,yt$1,wt$1,T,I,k$1,j,F,_$1,na,ia,Jn,he$1,oe$2],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:40px}[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]{text-align:center;margin:0 0 40px}[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]:before{font-family:Lato;z-index:-1;content:"";position:absolute;top:0;left:0;right:0;height:500px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23e53531' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23cf2525' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d7313e' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23a91d28' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23c92541' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b1203a' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23c6214e' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23981638' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23a01547' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23a0113d' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23b70e4f' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23890c46' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");background-position:top center;background-repeat:no-repeat;background-size:1600px 500px;transform:rotate(180deg);overflow:hidden}[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3em;line-height:1.1em;font-weight:700}[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.8em;line-height:1.3em;opacity:.5;margin:0}[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:170px;margin:0 0 50px}[_nghost-%COMP%]   .cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   .cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:5px;padding:5px 35px}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5em;text-transform:uppercase;margin:50px 0 15px}[_nghost-%COMP%]   pre[_ngcontent-%COMP%]{margin:20px 0 0;line-height:1.3em}[_nghost-%COMP%]   ol[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   mat-grid-list[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{width:calc(100% - 4px)}[_nghost-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:16px}[_nghost-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:10px}[_nghost-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{height:80px;overflow:hidden;text-overflow:ellipsis}[_nghost-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px}.responsive[_nghost-%COMP%]   .cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   .cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .responsive[_nghost-%COMP%]   .cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   .cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%}.responsive[_nghost-%COMP%]   code[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   code[_ngcontent-%COMP%]{white-space:normal;padding:0 8px 1px}`]})}return n})();var dc=`@Component({
  selector: 'my-org-component',
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <!-- will be lazy loaded and uses standard Angular template bindings -->
    <some-element
      *axLazyElement="elementUrl"
      [data]="data()"
      (dataChange)="handleChange($event)"
    >
    </some-element>
  \`
})
export class MyOrgComponent {
  readonly elementUrl = 'https://your-org.com/elements/some-element.js';

  readonly data = signal<SomeData>(initialData);

  handleChange(change: Partial<SomeData>) {
    this.data.update((data) => ({ ...data, ...change }));
  }
}
`;var mc=[{title:`Lightweight`,subtitle:`The library is extremely lightweight, all in all it is less than 5kb (or 1.5kb gzipped), epic!`,icon:`cloud_queue`},{title:`Simple API`,subtitle:`Just grab <code>*axLazyElement</code> directive set the element bundle url and you are ready to go!`,icon:`sentiment_satisfied_alt`},{title:`Loading indicator support`,subtitle:`Define optional custom loading indicator to be displayed before the element is ready...`,icon:`hourglass_empty`},{title:`Lazy loading`,subtitle:`This is as lazy as it gets! The request to load a bundle will be triggered only when the element appears in the template of some component!`,icon:`schedule`},{title:`Angular template binding`,subtitle:`Use standard Angular template binding for both properties and events as you would for any other Angular component!`,icon:`view_compact`},{title:`Performance`,subtitle:`Elements are loaded just once, even if you use it on multiple pages or even multiple time on single page!`,icon:`offline_bolt`},{title:`Flexible`,subtitle:`Support cutting edge web APIs and standards like ES Modules and Import Maps!`,icon:`code`},{title:`Supports everything`,subtitle:`Angular elements, web components, basically any custom element you can get your hands on...`,icon:`category`}];var sa=[{path:`home`,component:ra},{path:`docs`,loadChildren:()=>import(`./chunk-Bw1vILWc.js`)},{path:`examples`,loadChildren:()=>import(`./chunk-CxdCrwcR.js`)},{path:`contribute`,loadChildren:()=>import(`./chunk-Mvsm4lgh.js`)},{path:`changelog`,loadChildren:()=>import(`./chunk-DFUVSOoC.js`)},{path:`**`,redirectTo:`home`}];Ye.production;KC(Yo,{providers:[B1(),eo(),CT(TT()),{provide:le$1,useValue:{useHash:!0,scrollOffset:[0,100]}},Do$1(sa,Uo$1({scrollPositionRestoration:`enabled`,anchorScrolling:`enabled`}),xo$1({onSameUrlNavigation:`reload`})),ce$2({rootOptions:{errorComponent:$o}}),Zo,gd(so.register(`ngsw-worker.js`,{enabled:Ye.production})),gd(Oo)]}).catch(n=>console.error(n));export{F$1 as C,be$2 as D,Zt$2 as E,bt$1 as O,qt$2 as S,Ve$2 as T,$e$2 as _,he$1 as a,d as b,yt$1 as c,b$2 as d,gn$2 as f,ye$1 as g,le$2 as h,T as i,n as k,Pt as l,ke$2 as m,dr as n,oe$2 as o,hn$2 as p,I as r,wt$1 as s,Dt as t,S$1 as u,Fe$1 as v,$t$1 as w,ge$1 as x,Yt$2 as y};