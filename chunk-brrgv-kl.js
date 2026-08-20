import{$ as KI,$n as pw,At as SE,Ct as QI,Dn as gg,Dt as Rh,Ht as Uu,In as jw,J as JI,Jn as nw,Lt as Tw,M as GI,Nn as jD,Nt as TC,On as hs,Pn as jI,S as Dn,Sn as ew,Tn as gI,V as I$1,W as Ii,Xt as Xc,Y as Ji,an as Zh,at as Lh,c as Ah,cn as _h,cr as st,dn as ag,f as BI,gn as bE,gr as xd,hn as bC,k as FI,lt as Nr,m as Bh,mt as Oh,nr as qu,qn as ni,rn as ZI,s as Ad,u as Aw,wn as g,xr as zd,zn as kI,zt as Uh}from"./chunk-C4_gtfUn.js";import{t as h}from"./chunk-BelJIGP0.js";import{h as ie,l as Rn,n as He$1,s as On}from"./chunk-DkaxpU-d.js";import{t as I$2}from"./chunk-B2P_CqHU.js";import{D as be,E as Zt,O as bt,T as Ve$1,_ as $e$1,a as he,c as yt,h as le,m as ke,p as hn,t as Dt,w as $t}from"./main-7JQPUPDB.js";import{t as Nn}from"./chunk-BC8Ya8RM.js";import{t as z}from"./chunk-DO2LrlBH.js";var Ne=[`*`];var ye=(()=>{class t{labelPosition=`after`;static ɵfac=function(c){return new(c||t)};static ɵcmp=gI({type:t,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(c,n){c&2&&Zh(`mdc-form-field--align-end`,n.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:Ne,decls:1,vars:0,template:function(c,n){c&1&&(QI(),KI(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return t})();var Ce=[`switch`];var Ee=[`*`];function Me(t,d){t&1&&(Ji(0,`span`,11),zd(),Ji(1,`svg`,13),Oh(2,`path`,14),Uu(),Ji(3,`svg`,15),Oh(4,`path`,16),Uu()())}var ze=new I$1(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var L=class{source;checked;constructor(d,e){this.source=d,this.checked=e}};var I=(()=>{class t{_elementRef=g(Dn);_focusMonitor=g(He$1);_changeDetectorRef=g(gg);defaults=g(ze);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new L(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=On();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new st;toggleChange=new st;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){g(h).load(Rn);let e=g(new ag(`tabindex`),{optional:!0}),c=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=c.color||`accent`,this.id=this._uniqueId=g(ie).getId(`mat-mdc-slide-toggle-`),this.hideIcon=c.hideIcon??!1,this.disabledInteractive=c.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new L(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(c){return new(c||t)};static ɵcmp=gI({type:t,selectors:[[`mat-slide-toggle`]],viewQuery:function(c,n){if(c&1&&Uh(Ce,5),c&2){let m;JI(m=ew())&&(n._switchElement=m.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(c,n){c&2&&(Lh(`id`,n.id),Ah(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),pw(n.color?`mat-`+n.color:``),Zh(`mat-mdc-slide-toggle-focused`,n._focused)(`mat-mdc-slide-toggle-checked`,n.checked)(`mat-slide-toggle-full-width`,n.fullWidth)(`_mat-animation-noopable`,n._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,TC],color:`color`,disabled:[2,`disabled`,`disabled`,TC],fullWidth:[2,`fullWidth`,`fullWidth`,TC],disableRipple:[2,`disableRipple`,`disableRipple`,TC],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:bC(e)],checked:[2,`checked`,`checked`,TC],hideIcon:[2,`hideIcon`,`hideIcon`,TC],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,TC]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[Aw([{provide:Ve$1,useExisting:ni(()=>t),multi:!0},{provide:be,useExisting:t,multi:!0}]),Xc],ngContentSelectors:Ee,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(c,n){if(c&1&&(QI(),Ji(0,`div`,1)(1,`button`,2,0),Bh(`click`,function(){return n._handleClick()}),Oh(3,`div`,3)(4,`span`,4),Ji(5,`span`,5)(6,`span`,6)(7,`span`,7),Oh(8,`span`,8),Uu(),Ji(9,`span`,9),Oh(10,`span`,10),Uu(),kI(11,Me,5,0,`span`,11),Uu()()(),Ji(12,`label`,12),Bh(`click`,function(ke){return ke.stopPropagation()}),KI(13),Uu()()),c&2){let m=nw(2);Rh(`labelPosition`,n.labelPosition),jD(),Zh(`mdc-switch--selected`,n.checked)(`mdc-switch--unselected`,!n.checked)(`mdc-switch--checked`,n.checked)(`mdc-switch--disabled`,n.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,n.disabledInteractive),Rh(`tabIndex`,n.disabled&&!n.disabledInteractive?-1:n.tabIndex)(`disabled`,n.disabled&&!n.disabledInteractive),Ah(`id`,n.buttonId)(`name`,n.name)(`aria-label`,n.ariaLabel)(`aria-labelledby`,n._getAriaLabelledBy())(`aria-describedby`,n.ariaDescribedby)(`aria-required`,n.required||null)(`aria-checked`,n.checked)(`aria-disabled`,n.disabled&&n.disabledInteractive?`true`:null),jD(9),Rh(`matRippleTrigger`,m)(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleCentered`,!0),jD(),FI(n.hideIcon?-1:11),jD(),Rh(`for`,n.buttonId),Ah(`id`,n._labelId)}},dependencies:[$e$1,ye],styles:[`.mdc-switch {
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
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
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
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
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
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
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
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
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
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
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
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
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
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
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
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
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
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
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
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
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
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
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
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
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
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return t})();var xe=(()=>{class t{static ɵfac=function(c){return new(c||t)};static ɵmod=hs({type:t});static ɵinj=Nr({imports:[I,I$2]})}return t})();var Le=(t,d)=>d.tag;function Pe(t,d){t&1&&Tw(0,`Loading...`)}function Ie(t,d){if(t&1){let e=GI();Ji(0,`ax-lazy-element`,16),Bh(`click`,function(){xd(e);return Ad(ZI(2).increment1())}),Tw(1,` Increment `),Uu()}if(t&2)Rh(`variant`,ZI(2).isButtonVariantPrimary()?`primary`:`default`)}function Te(t,d){if(t&1){let e=GI();_h(0,Pe,1,0,`ng-template`,null,0,jw)(2,Ie,2,1,`ax-lazy-element`,13),Ji(3,`p`),Tw(4),Uu(),Ji(5,`div`,14)(6,`span`),Tw(7,`Default button`),Uu(),Ji(8,`mat-slide-toggle`,15),Bh(`ngModelChange`,function(n){xd(e);return Ad(ZI().isButtonVariantPrimary.set(n))}),Uu(),bE(),Ji(9,`span`),Tw(10,`Primary button`),Uu()()}if(t&2){let e=nw(1),c=ZI();jD(2),Rh(`axLazyElementDynamic`,`sl-button`)(`axLazyElementDynamicUrl`,`https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/button/button.js`)(`axLazyElementDynamicLoadingTemplate`,e)(`axLazyElementDynamicModule`,!0),jD(2),qu(`Counter: `,c.counter1()),jD(4),Rh(`ngModel`,c.isButtonVariantPrimary()),SE()}}function Oe(t,d){t&1&&Tw(0,`Loading...`)}function Ae(t,d){if(t&1){let e=GI();Ji(0,`ax-lazy-element`,18),Bh(`click`,function(){xd(e);return Ad(ZI(2).increment2())}),Tw(1,` Increment `),Uu()}}function Re(t,d){if(t&1&&(_h(0,Oe,1,0,`ng-template`,null,0,jw)(2,Ae,2,0,`ax-lazy-element`,17),Ji(3,`p`),Tw(4),Uu()),t&2){let e=nw(1),c=ZI();jD(2),Rh(`axLazyElementDynamic`,`wired-button`)(`axLazyElementDynamicLoadingTemplate`,e),jD(2),qu(`Counter: `,c.counter2())}}function Fe(t,d){if(t&1&&Tw(0),t&2){let e=ZI().$implicit;qu(` Loading <`,e.tag,`>...\xA0\xA0 `)}}function Ve(t,d){if(t&1&&Tw(0),t&2){let e=ZI(2).$implicit;qu(` `,e.content,` `)}}function je(t,d){if(t&1){let e=GI();Ji(0,`ax-lazy-element`,21),Bh(`click`,function(){xd(e);let n=ZI().$implicit;return Ad(ZI(2).performAction(n.actionName))}),kI(1,Ve,1,1),Uu()}if(t&2){let e=ZI().$implicit;Rh(`name`,e.name?e.name:void 0),jD(),FI(e.content?1:-1)}}function qe(t,d){if(t&1&&_h(0,Fe,1,1,`ng-template`,null,0,jw)(2,je,2,2,`ax-lazy-element`,20),t&2){let e=d.$implicit,c=nw(1);jD(2),Rh(`axLazyElementDynamic`,e.tag)(`axLazyElementDynamicUrl`,e.url)(`axLazyElementDynamicModule`,e.isModule)(`axLazyElementDynamicLoadingTemplate`,c)}}function Be(t,d){if(t&1&&(Ji(0,`div`,19),jI(1,qe,3,4,null,null,Le),Uu(),Ji(3,`p`),Tw(4),Uu()),t&2){let e=ZI();jD(),BI(e.dynamicConfigs),jD(3),qu(`Counter: `,e.counter3())}}var Se=(()=>{class t{codeExample1=Xe;codeExample2standalone=$e;codeExample2module=Ue;codeExample2html=He;codeExample3html=Ge;isButtonVariantPrimary=Ii(!0);counter1=Ii(0);counter2=Ii(0);counter3=Ii(0);dynamicConfigs=[{tag:`sl-button`,url:`https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/button/button.js`,isModule:!0,content:`Increment`,actionName:`increment`},{tag:`wired-button`,url:`https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js`,content:`Decrement`,actionName:`decrement`},{tag:`sl-icon`,url:`https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/icon/icon.js`,isModule:!0,name:`reset`,actionName:`reset`}];increment1(){this.counter1.update(e=>e+1)}increment2(){this.counter2.update(e=>e+1)}performAction(e){e===`increment`&&this.counter3.update(c=>c+1),e===`decrement`&&this.counter3.update(c=>c-1),e===`reset`&&this.counter3.set(0)}static ɵfac=function(c){return new(c||t)};static ɵcmp=gI({type:t,selectors:[[`demo-dynamic`]],decls:87,vars:5,consts:[[`loading`,``],[1,`quick-nav`],[`routerLink`,`.`,`fragment`,`dynamic-element-tag`],[`routerLink`,`.`,`fragment`,`module-pre-configuration`],[`routerLink`,`.`,`fragment`,`multiple-different-dynamic-elements`],[1,`wrapper`],[`id`,`dynamic-element-tag`],[1,`content`],[1,`description`],[`language`,`html`,3,`example`],[`id`,`module-pre-configuration`],[3,`example`,`exampleModule`],[`id`,`multiple-different-dynamic-elements`],[3,`variant`,`click`,4,`axLazyElementDynamic`,`axLazyElementDynamicUrl`,`axLazyElementDynamicLoadingTemplate`,`axLazyElementDynamicModule`],[1,`controls`],[3,`ngModelChange`,`ngModel`],[3,`click`,`variant`],[3,`click`,4,`axLazyElementDynamic`,`axLazyElementDynamicLoadingTemplate`],[3,`click`],[1,`actions`],[3,`name`,`click`,4,`axLazyElementDynamic`,`axLazyElementDynamicUrl`,`axLazyElementDynamicModule`,`axLazyElementDynamicLoadingTemplate`],[3,`click`,`name`]],template:function(c,n){c&1&&(Ji(0,`div`,1)(1,`h3`),Tw(2,`Quick navigation`),Uu(),Ji(3,`ul`)(4,`li`)(5,`a`,2),Tw(6,`Dynamic element tag`),Uu()(),Ji(7,`li`)(8,`a`,3),Tw(9,` Dynamic element tag with module pre-configuration `),Uu()(),Ji(10,`li`)(11,`a`,4),Tw(12,` Multiple different dynamic elements `),Uu()()()(),Ji(13,`div`,5)(14,`h1`),Tw(15,`Dynamic`),Uu(),Ji(16,`p`),Tw(17,` These example explain how to configure element tag dynamically using `),Ji(18,`code`),Tw(19,`*axLazyElementDynamic`),Uu(),Tw(20,` directive. This can be very useful if we want to retrieve element configuration from somewhere else (for example a backend or a json config file). Such a setup can enable us to develop fully dynamic and configurable microfrontend applications! `),Uu(),Ji(21,`h2`,6),Tw(22,`Dynamic element tag`),Uu(),Ji(23,`div`,7)(24,`demo-example`),_h(25,Te,11,6,`ng-template`),Uu(),Ji(26,`div`,8)(27,`p`),Tw(28,` In this example we're loading `),Ji(29,`code`),Tw(30,`<sl-button>`),Uu(),Tw(31,` using the `),Ji(32,`code`),Tw(33,`*axLazyElementDynamic`),Uu(),Tw(34,` directive. Please notice that the original HTML element used in the template is `),Ji(35,`code`),Tw(36,`<ax-lazy-element>`),Uu(),Tw(37,` and we're specifying the desired tag as the first parameter of `),Ji(38,`code`),Tw(39,`*axLazyElementDynamic='sl-button'`),Uu(),Tw(40,` . Please, feel free to open your browsers dev tools to check resulting element tag! `),Uu(),Oh(41,`demo-example-code`,9),Ji(42,`p`),Tw(43,` You might be asking why do we use `),Ji(44,`code`),Tw(45,`<ax-lazy-element>`),Uu(),Tw(46,` . This is not a real custom element and that's exactly the point. We can provide any valid and unused custom element name. That way Angular won't complain if we use custom property and event binding which would be the case if we tried to bind `),Ji(47,`code`),Tw(48,`<div [custom]="value">`),Uu(),Tw(49,` ... `),Uu()()(),Ji(50,`h2`,10),Tw(51,` Dynamic element tag with module pre-configuration `),Uu(),Ji(52,`div`,7)(53,`demo-example`),_h(54,Re,5,3,`ng-template`),Uu(),Ji(55,`div`,8)(56,`p`),Tw(57,` The `),Ji(58,`code`),Tw(59,`*axLazyElementDynamic`),Uu(),Tw(60,` directive works also with the pre-configured `),Ji(61,`code`),Tw(62,`LazyElementsModule`),Uu(),Tw(63,` . That way we don't have to specify url of the element in the template. Please notice that the original HTML element used in the template is `),Ji(64,`code`),Tw(65,`<div>`),Uu(),Tw(66,` and we're specifying the desired tag as the first parameter of `),Ji(67,`code`),Tw(68,`*axLazyElementDynamic='wired-button'`),Uu(),Tw(69,` . Please, feel free to open your browsers dev tools to check resulting element tag! `),Uu(),Oh(70,`demo-example-code`,9)(71,`demo-example-code`,11),Uu()(),Ji(72,`h2`,12),Tw(73,` Multiple different dynamic elements `),Uu(),Ji(74,`div`,7)(75,`demo-example`),_h(76,Be,5,1,`ng-template`),Uu(),Ji(77,`div`,8)(78,`p`),Tw(79,` The `),Ji(80,`code`),Tw(81,`*axLazyElementDynamic`),Uu(),Tw(82,` directive works also with `),Ji(83,`code`),Tw(84,`@for`),Uu(),Tw(85,` directive to render fully dynamic configuration which could have been retrieved from backend during the runtime in comparison to hard-coded into the template during build time! Please, feel free to open your browsers dev tools to check resulting element tags! `),Uu(),Oh(86,`demo-example-code`,9),Uu()()()),c&2&&(jD(41),Rh(`example`,n.codeExample1),jD(29),Rh(`example`,n.codeExample2html),jD(),Rh(`example`,n.codeExample2standalone)(`exampleModule`,n.codeExample2module),jD(15),Rh(`example`,n.codeExample3html))},dependencies:[Dt,yt,hn,xe,I,Zt,$t,bt,ke,he,z,Nn],styles:[`[_nghost-%COMP%]{position:relative}.quick-nav[_ngcontent-%COMP%]{display:none;position:fixed;top:105px;left:75%;right:0;padding:0 20px}.quick-nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;opacity:.5}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{color:#d32f2f}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex:1.5}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;gap:20px;align-items:center}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;align-items:center}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:20px}.responsive-large[_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%]{display:block}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}`]})}return t})();var Xe=`<!-- url = 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/button/button.js' -->;
<ax-lazy-element *axLazyElementDynamic="'sl-button', url: url; module: true"
     variant="primary"
     (click)="increment()">
  Increment
</ax-lazy-element>

<!-- will be rendered as ...
  <sl-button variant="primary" (click)="increment()">Increment</sl-button>
-->`;var He=`<ax-lazy-element *axLazyElementDynamic="'wired-button'" (click)="increment()">
  Increment
</ax-lazy-element>

<!-- will be rendered as ...
  <wired-button (click)="increment()">Increment</wired-button>
-->`;var Ue=`// pre-configured LazyElementsModule
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
export class FeatureModule {}`;var $e=`// pre-configured lazy loaded feature
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
`;var Ge=`@for(c of dynamicConfigs; track c.url) {
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
`;var Et=[{providers:[le([{tag:`wired-button`,url:`https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js`}])],path:``,children:[{path:``,component:Se}]}];export{Et as default};