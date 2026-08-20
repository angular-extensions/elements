import{a as ye}from"./chunk-EEO5RTLE.js";import{a as ge,b as he,c as pe,d as ue,e as _e}from"./chunk-WBPNYA25.js";import{d as ee,f as te,j as re}from"./chunk-OUX2Y43Q.js";import{c as me}from"./chunk-PLJYMIPD.js";import"./chunk-SBZUIR5V.js";import{b as be}from"./chunk-RQS63N3H.js";import{n as oe}from"./chunk-5NUDGQC2.js";import{C as ce,D as de,h as ne,s as ae}from"./chunk-HJXE7Z53.js";import{a as ie}from"./chunk-HXKOH4UM.js";import{c as fe}from"./chunk-MYE6UUAZ.js";import{b as le}from"./chunk-JFL4WWRP.js";import{c as se}from"./chunk-TBOL6PYU.js";import{Bb as X,Cb as H,Db as U,Ha as o,Hb as b,Jb as k,Kb as G,Lb as i,Nb as y,Ob as $,Pb as Q,Qb as W,Rb as Y,Ta as f,U as T,Ua as j,Ub as L,W as O,Xa as p,Y as A,Zb as Z,_ as h,dc as J,eb as C,ec as _,fa as v,fb as E,fc as K,ga as w,gb as M,ha as R,jb as q,kb as N,lb as r,mb as l,na as P,nb as a,ob as g,tb as x,ub as B,va as F,vb as u,xb as s,ya as V,yb as z,zb as D}from"./chunk-EULORU2D.js";import"./chunk-OSQMNGTH.js";var Ee=["mat-internal-form-field",""],Me=["*"],we=(()=>{class t{labelPosition="after";static \u0275fac=function(c){return new(c||t)};static \u0275cmp=f({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(c,n){c&2&&k("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Ee,ngContentSelectors:Me,decls:1,vars:0,template:function(c,n){c&1&&(z(),D(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var ze=["switch"],De=["*"];function Le(t,d){t&1&&(l(0,"span",11),R(),l(1,"svg",13),g(2,"path",14),a(),l(3,"svg",15),g(4,"path",16),a()())}var Se=new A("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),S=class{source;checked;constructor(d,e){this.source=d,this.checked=e}},I=(()=>{class t{_elementRef=h(V);_focusMonitor=h(ne);_changeDetectorRef=h(J);defaults=h(Se);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new S(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ce();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new P;toggleChange=new P;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){h(ie).load(de);let e=h(new Z("tabindex"),{optional:!0}),c=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=c.color||"accent",this.id=this._uniqueId=h(ae).getId("mat-mdc-slide-toggle-"),this.hideIcon=c.hideIcon??!1,this.disabledInteractive=c.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new S(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(c){return new(c||t)};static \u0275cmp=f({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(c,n){if(c&1&&X(ze,5),c&2){let m;H(m=U())&&(n._switchElement=m.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(c,n){c&2&&(B("id",n.id),C("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),G(n.color?"mat-"+n.color:""),k("mat-mdc-slide-toggle-focused",n._focused)("mat-mdc-slide-toggle-checked",n.checked)("_mat-animation-noopable",n._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",_],color:"color",disabled:[2,"disabled","disabled",_],disableRipple:[2,"disableRipple","disableRipple",_],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:K(e)],checked:[2,"checked","checked",_],hideIcon:[2,"hideIcon","hideIcon",_],disabledInteractive:[2,"disabledInteractive","disabledInteractive",_]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Y([{provide:ge,useExisting:T(()=>t),multi:!0},{provide:he,useExisting:t,multi:!0}]),F],ngContentSelectors:De,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(c,n){if(c&1&&(z(),l(0,"div",1)(1,"button",2,0),u("click",function(){return n._handleClick()}),g(3,"div",3)(4,"span",4),l(5,"span",5)(6,"span",6)(7,"span",7),g(8,"span",8),a(),l(9,"span",9),g(10,"span",10),a(),E(11,Le,5,0,"span",11),a()()(),l(12,"label",12),u("click",function(Ce){return Ce.stopPropagation()}),D(13),a()()),c&2){let m=b(2);r("labelPosition",n.labelPosition),o(),k("mdc-switch--selected",n.checked)("mdc-switch--unselected",!n.checked)("mdc-switch--checked",n.checked)("mdc-switch--disabled",n.disabled)("mat-mdc-slide-toggle-disabled-interactive",n.disabledInteractive),r("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("disabled",n.disabled&&!n.disabledInteractive),C("id",n.buttonId)("name",n.name)("aria-label",n.ariaLabel)("aria-labelledby",n._getAriaLabelledBy())("aria-describedby",n.ariaDescribedby)("aria-required",n.required||null)("aria-checked",n.checked)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),o(9),r("matRippleTrigger",m)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),o(),M(n.hideIcon?-1:11),o(),r("for",n.buttonId),C("id",n._labelId)}},dependencies:[oe,we],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return t})(),xe=(()=>{class t{static \u0275fac=function(c){return new(c||t)};static \u0275mod=j({type:t});static \u0275inj=O({imports:[I,le]})}return t})();var Ie=(t,d)=>d.tag;function Te(t,d){t&1&&i(0,"Loading...")}function Oe(t,d){if(t&1){let e=x();l(0,"ax-lazy-element",16),u("click",function(){v(e);let n=s(2);return w(n.increment1())}),i(1," Increment "),a()}if(t&2){let e=s(2);r("variant",e.isButtonVariantPrimary?"primary":"default")}}function Ae(t,d){if(t&1){let e=x();p(0,Te,1,0,"ng-template",null,0,L)(2,Oe,2,1,"ax-lazy-element",13),l(3,"p"),i(4),a(),l(5,"div",14)(6,"span"),i(7,"Default button"),a(),l(8,"mat-slide-toggle",15),W("ngModelChange",function(n){v(e);let m=s();return Q(m.isButtonVariantPrimary,n)||(m.isButtonVariantPrimary=n),w(n)}),a(),l(9,"span"),i(10,"Primary button"),a()()}if(t&2){let e=b(1),c=s();o(2),r("axLazyElementDynamic","sl-button")("axLazyElementDynamicUrl","https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/button/button.js")("axLazyElementDynamicLoadingTemplate",e)("axLazyElementDynamicModule",!0),o(2),y("Counter: ",c.counter1),o(4),$("ngModel",c.isButtonVariantPrimary)}}function Re(t,d){t&1&&i(0,"Loading...")}function Fe(t,d){if(t&1){let e=x();l(0,"ax-lazy-element",18),u("click",function(){v(e);let n=s(2);return w(n.increment2())}),i(1," Increment "),a()}}function Ve(t,d){if(t&1&&(p(0,Re,1,0,"ng-template",null,0,L)(2,Fe,2,0,"ax-lazy-element",17),l(3,"p"),i(4),a()),t&2){let e=b(1),c=s();o(2),r("axLazyElementDynamic","wired-button")("axLazyElementDynamicLoadingTemplate",e),o(2),y("Counter: ",c.counter2)}}function je(t,d){if(t&1&&i(0),t&2){let e=s().$implicit;y(" Loading <",e.tag,">...\xA0\xA0 ")}}function qe(t,d){if(t&1&&i(0),t&2){let e=s(2).$implicit;y(" ",e.content," ")}}function Ne(t,d){if(t&1){let e=x();l(0,"ax-lazy-element",21),u("click",function(){v(e);let n=s().$implicit,m=s(2);return w(m.performAction(n.actionName))}),E(1,qe,1,1),a()}if(t&2){let e=s().$implicit;r("name",e.name?e.name:void 0),o(),M(e.content?1:-1)}}function Be(t,d){if(t&1&&p(0,je,1,1,"ng-template",null,0,L)(2,Ne,2,2,"ax-lazy-element",20),t&2){let e=d.$implicit,c=b(1);o(2),r("axLazyElementDynamic",e.tag)("axLazyElementDynamicUrl",e.url)("axLazyElementDynamicModule",e.isModule)("axLazyElementDynamicLoadingTemplate",c)}}function Xe(t,d){if(t&1&&(l(0,"div",19),q(1,Be,3,4,null,null,Ie),a(),l(3,"p"),i(4),a()),t&2){let e=s();o(),N(e.dynamicConfigs),o(3),y("Counter: ",e.counter3)}}var ke=(()=>{class t{codeExample1=He;codeExample2standalone=$e;codeExample2module=Ge;codeExample2html=Ue;codeExample3html=Qe;isButtonVariantPrimary=!0;counter1=0;counter2=0;counter3=0;dynamicConfigs=[{tag:"sl-button",url:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/button/button.js",isModule:!0,content:"Increment",actionName:"increment"},{tag:"wired-button",url:"https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js",content:"Decrement",actionName:"decrement"},{tag:"sl-icon",url:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/icon/icon.js",isModule:!0,name:"reset",actionName:"reset"}];ngOnInit(){}increment1(){this.counter1++}increment2(){this.counter2++}performAction(e){e==="increment"&&this.counter3++,e==="decrement"&&this.counter3--,e==="reset"&&(this.counter3=0)}static \u0275fac=function(c){return new(c||t)};static \u0275cmp=f({type:t,selectors:[["demo-dynamic"]],decls:87,vars:5,consts:[["loading",""],[1,"quick-nav"],["routerLink",".","fragment","dynamic-element-tag"],["routerLink",".","fragment","module-pre-configuration"],["routerLink",".","fragment","multiple-different-dynamic-elements"],[1,"wrapper"],["id","dynamic-element-tag"],[1,"content"],[1,"description"],["language","html",3,"example"],["id","module-pre-configuration"],[3,"example","exampleModule"],["id","multiple-different-dynamic-elements"],[3,"variant","click",4,"axLazyElementDynamic","axLazyElementDynamicUrl","axLazyElementDynamicLoadingTemplate","axLazyElementDynamicModule"],[1,"controls"],[3,"ngModelChange","ngModel"],[3,"click","variant"],[3,"click",4,"axLazyElementDynamic","axLazyElementDynamicLoadingTemplate"],[3,"click"],[1,"actions"],[3,"name","click",4,"axLazyElementDynamic","axLazyElementDynamicUrl","axLazyElementDynamicModule","axLazyElementDynamicLoadingTemplate"],[3,"click","name"]],template:function(c,n){c&1&&(l(0,"div",1)(1,"h3"),i(2,"Quick navigation"),a(),l(3,"ul")(4,"li")(5,"a",2),i(6,"Dynamic element tag"),a()(),l(7,"li")(8,"a",3),i(9," Dynamic element tag with module pre-configuration "),a()(),l(10,"li")(11,"a",4),i(12," Multiple different dynamic elements "),a()()()(),l(13,"div",5)(14,"h1"),i(15,"Dynamic"),a(),l(16,"p"),i(17," These example explain how to configure element tag dynamically using "),l(18,"code"),i(19,"*axLazyElementDynamic"),a(),i(20," directive. This can be very useful if we want to retrieve element configuration from somewhere else (for example a backend or a json config file). Such a setup can enable us to develop fully dynamic and configurable microfrontend applications! "),a(),l(21,"h2",6),i(22,"Dynamic element tag"),a(),l(23,"div",7)(24,"demo-example"),p(25,Ae,11,6,"ng-template"),a(),l(26,"div",8)(27,"p"),i(28," In this example we're loading "),l(29,"code"),i(30,"<sl-button>"),a(),i(31," using the "),l(32,"code"),i(33,"*axLazyElementDynamic"),a(),i(34," directive. Please notice that the original HTML element used in the template is "),l(35,"code"),i(36,"<ax-lazy-element>"),a(),i(37," and we're specifying the desired tag as the first parameter of "),l(38,"code"),i(39,"*axLazyElementDynamic='sl-button'"),a(),i(40," . Please, feel free to open your browsers dev tools to check resulting element tag! "),a(),g(41,"demo-example-code",9),l(42,"p"),i(43," You might be asking why do we use "),l(44,"code"),i(45,"<ax-lazy-element>"),a(),i(46," . This is not a real custom element and that's exactly the point. We can provide any valid and unused custom element name. That way Angular won't complain if we use custom property and event binding which would be the case if we tried to bind "),l(47,"code"),i(48,'<div [custom]="value">'),a(),i(49," ... "),a()()(),l(50,"h2",10),i(51," Dynamic element tag with module pre-configuration "),a(),l(52,"div",7)(53,"demo-example"),p(54,Ve,5,3,"ng-template"),a(),l(55,"div",8)(56,"p"),i(57," The "),l(58,"code"),i(59,"*axLazyElementDynamic"),a(),i(60," directive works also with the pre-configured "),l(61,"code"),i(62,"LazyElementsModule"),a(),i(63," . That way we don't have to specify url of the element in the template. Please notice that the original HTML element used in the template is "),l(64,"code"),i(65,"<div>"),a(),i(66," and we're specifying the desired tag as the first parameter of "),l(67,"code"),i(68,"*axLazyElementDynamic='wired-button'"),a(),i(69," . Please, feel free to open your browsers dev tools to check resulting element tag! "),a(),g(70,"demo-example-code",9)(71,"demo-example-code",11),a()(),l(72,"h2",12),i(73," Multiple different dynamic elements "),a(),l(74,"div",7)(75,"demo-example"),p(76,Xe,5,1,"ng-template"),a(),l(77,"div",8)(78,"p"),i(79," The "),l(80,"code"),i(81,"*axLazyElementDynamic"),a(),i(82," directive works also with "),l(83,"code"),i(84,"@for"),a(),i(85," directive to render fully dynamic configuration which could have been retrieved from backend during the runtime in comparison to hard-coded into the template during build time! Please, feel free to open your browsers dev tools to check resulting element tags! "),a(),g(86,"demo-example-code",9),a()()()),c&2&&(o(41),r("example",n.codeExample1),o(29),r("example",n.codeExample2html),o(),r("example",n.codeExample2standalone)("exampleModule",n.codeExample2module),o(15),r("example",n.codeExample3html))},dependencies:[se,me,re,xe,I,_e,pe,ue,ee,fe,ye,be],styles:["[_nghost-%COMP%]{position:relative}.quick-nav[_ngcontent-%COMP%]{display:none;position:fixed;top:105px;left:75%;right:0;padding:0 20px}.quick-nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;opacity:.5}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{color:#d32f2f}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex:1.5}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;gap:20px;align-items:center}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;align-items:center}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:20px}.responsive-large[_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%]{display:block}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}"]})}return t})(),He=`<!-- url = 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/button/button.js' -->;
<ax-lazy-element *axLazyElementDynamic="'sl-button', url: url; module: true"
     variant="primary"
     (click)="increment()">
  Increment
</ax-lazy-element>

<!-- will be rendered as ...
  <sl-button variant="primary" (click)="increment()">Increment</sl-button>
-->`,Ue=`<ax-lazy-element *axLazyElementDynamic="'wired-button'" (click)="increment()">
  Increment
</ax-lazy-element>

<!-- will be rendered as ...
  <wired-button (click)="increment()">Increment</wired-button>
-->`,Ge=`// pre-configured LazyElementsModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    { tag: 'wired-button', url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js' }
  ]
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [FeatureComponent],
  imports: [
    LazyElementsModule.forFeature(options),
  ]
})
export class FeatureModule {}`,$e=`// pre-configured lazy loaded feature
const configs: ElementConfig[] = [
  { tag: 'wired-button', url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js' }
];

export default <Routes>[
  {
    path: '',
    providers: [provideAxLazyElementsConfigs(configs)],
    children: [
      {
        path: '',
        component: LazyFeatureComponent,
      },
    ],
  },
];
`,Qe=`@for(c of dynamicConfigs; track c.url) {
  <ax-lazy-element
    *axLazyElementDynamic="c.tag; url: c.url; module: c.isModule"
    (click)="performAction(c.actionName)"
    [name]="c.name ? c.name : undefined"
  >
    @if (c.content) {
      {{ c.content }}
    }
  </ax-lazy-element>
}

<!--
dynamicConfigs = [
  {
    tag: 'sl-button',
    url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/button/button.js',
    isModule: true,
    content: 'Increment',
    actionName: 'increment'
  },
  {
    tag: 'wired-button',
    url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
    content: 'Decrement',
    actionName: 'decrement'
  },
  {
    tag: 'sl-icon',
    url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/icon/icon.js',
    name: 'reset',
    actionName: 'reset'
  }
];
-->
`;var We=[{tag:"wired-button",url:"https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js"}],Mt=[{providers:[te(We)],path:"",children:[{path:"",component:ke}]}];export{Mt as default};
