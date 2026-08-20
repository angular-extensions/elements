import{a as I}from"./chunk-TO3ERS7E.js";import{A as Ce,C as Ee,D as Me,h as fe,q as be,r as ye,s as C,v as ve,z as we}from"./chunk-HJXE7Z53.js";import{a as xe}from"./chunk-HXKOH4UM.js";import{b as _e}from"./chunk-JFL4WWRP.js";import{Ab as R,Bb as ce,Cb as _,D as Z,Db as v,Fa as F,Ha as r,Ib as me,Jb as w,Ka as ee,Lb as he,Ma as ne,O,Pa as te,Rb as f,Ta as y,Ua as P,Va as p,W as M,Wa as N,Xa as ae,Y as h,Zb as ge,_ as i,a as E,d as x,dc as D,eb as T,ec as m,fb as ie,fc as ue,gb as oe,h as B,ha as K,ib as se,jb as re,ka as Y,kb as de,lb as g,mb as u,na as d,nb as l,oa as G,ob as q,pb as k,qb as z,ra as X,rb as le,va as A,vb as pe,w as V,wa as $,y as b,ya as S,yb as L,za as J,zb as c}from"./chunk-EULORU2D.js";import"./chunk-OSQMNGTH.js";var j=new h("CdkAccordion"),Pe=(()=>{class t{_stateChanges=new x;_openCloseAllActions=new x;id=i(C).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=p({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",m]},exportAs:["cdkAccordion"],features:[f([{provide:j,useExisting:t}]),A]})}return t})(),Te=(()=>{class t{accordion=i(j,{optional:!0,skipSelf:!0});_changeDetectorRef=i(D);_expansionDispatcher=i(I);_openCloseAllSubscription=E.EMPTY;closed=new d;opened=new d;destroyed=new d;expandedChange=new d;id=i(C).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=X(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=p({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",m],disabled:[2,"disabled","disabled",m]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[f([{provide:j,useValue:void 0}])]})}return t})(),ke=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=M({})}return t})();var ze=["body"],Le=["bodyWrapper"],Re=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],je=["mat-expansion-panel-header","*","mat-action-row"];function We(t,H){}var Qe=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Ue=["mat-panel-title","mat-panel-description","*"];function Be(t,H){t&1&&(k(0,"span",1),K(),k(1,"svg",2),le(2,"path",3),z()())}var W=new h("MAT_ACCORDION"),De=new h("MAT_EXPANSION_PANEL"),Ve=(()=>{class t{_template=i(ee);_expansionPanel=i(De,{optional:!0});constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=p({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),Ie=new h("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Q=(()=>{class t extends Te{_viewContainerRef=i(te);_animationsDisabled=Ee();_document=i(Y);_ngZone=i(G);_elementRef=i(S);_renderer=i(ne);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new d;afterCollapse=new d;_inputChanges=new x;accordion=i(W,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=i(C).getId("mat-expansion-panel-header-");constructor(){super();let e=i(Ie,{optional:!0});this._expansionDispatcher=i(I),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(O(null),b(()=>this.expanded&&!this._portal),Z(1)).subscribe(()=>{this._portal=new ve(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=y({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,a,s){if(n&1&&R(s,Ve,5),n&2){let o;_(o=v())&&(a._lazyContent=o.first)}},viewQuery:function(n,a){if(n&1&&ce(ze,5)(Le,5),n&2){let s;_(s=v())&&(a._body=s.first),_(s=v())&&(a._bodyWrapper=s.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,a){n&2&&w("mat-expanded",a.expanded)("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",m],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[f([{provide:W,useValue:void 0},{provide:De,useExisting:t}]),N,A],ngContentSelectors:je,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,a){n&1&&(L(Re),c(0),u(1,"div",2,0)(3,"div",3,1)(5,"div",4),c(6,1),ae(7,We,0,0,"ng-template",5),l(),c(8,2),l()()),n&2&&(r(),T("inert",a.expanded?null:""),r(2),g("id",a.id),T("aria-labelledby",a._headerId),r(4),g("cdkPortalOutlet",a._portal))},dependencies:[we],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return t})();var U=(()=>{class t{panel=i(Q,{host:!0});_element=i(S);_focusMonitor=i(fe);_changeDetectorRef=i(D);_parentChangeSubscription=E.EMPTY;constructor(){i(xe).load(Me);let e=this.panel,n=i(Ie,{optional:!0}),a=i(new ge("tabindex"),{optional:!0}),s=e.accordion?e.accordion._stateChanges.pipe(b(o=>!!(o.hideToggle||o.togglePosition))):B;this.tabIndex=parseInt(a||"")||0,this._parentChangeSubscription=V(e.opened,e.closed,s,e._inputChanges.pipe(b(o=>!!(o.hideToggle||o.disabled||o.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(b(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:be(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=y({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,a){n&1&&pe("click",function(){return a._toggle()})("keydown",function(o){return a._keydown(o)}),n&2&&(T("id",a.panel._headerId)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),me("height",a._getHeaderHeight()),w("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after",a._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",a._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ue(e)]},ngContentSelectors:Ue,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,a){n&1&&(L(Qe),k(0,"span",0),c(1),c(2,1),c(3,2),z(),ie(4,Be,3,0,"span",1)),n&2&&(w("mat-content-hide-toggle",!a._showToggle()),r(4),oe(a._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var He=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=p({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})(),Oe=(()=>{class t extends Pe{_keyManager;_ownHeaders=new J;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(O(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new ye(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=$(t)))(a||t)}})();static \u0275dir=p({type:t,selectors:[["mat-accordion"]],contentQueries:function(n,a,s){if(n&1&&R(s,U,5),n&2){let o;_(o=v())&&(a._headers=o)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,a){n&2&&w("mat-accordion-multi",a.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",m],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[f([{provide:W,useExisting:t}]),N]})}return t})(),Se=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=M({imports:[ke,Ce,_e]})}return t})();function Ke(t,H){if(t&1&&(u(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),q(3,"span",1),l()(),q(4,"p",1),l()),t&2){let e=H.$implicit;r(3),g("innerHTML",e.question,F),r(),g("innerHTML",e.answer,F)}}var Fe=(()=>{class t{faq=Ye;ngOnInit(){}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=y({type:t,selectors:[["demo-faq"]],decls:6,vars:0,consts:[[1,"wrapper"],[3,"innerHTML"]],template:function(n,a){n&1&&(u(0,"div",0)(1,"h1"),he(2,"Frequently asked questions"),l(),u(3,"mat-accordion"),re(4,Ke,5,2,"mat-expansion-panel",null,se),l()()),n&2&&(r(4),de(a.faq))},dependencies:[Se,Oe,Q,U,He],styles:["h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}mat-panel-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}.mat-expanded[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:25px}.responsive[_nghost-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{padding-top:20px!important;padding-bottom:20px!important}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]})}return t})(),Ye=[{question:"When does the <code>*axLazyElement</code> directive trigger download of the element bundle (or module)",answer:`The element loading will be postponed until it was rendered in the template of some component. This can happen in following cases... <br>
       <ul>
        <li>Angular component uses element in its template</li>
        <li>
          Angular component uses element in its template conditionally
          (<code>&#64;if</code>, <code>>&#64;for</code>, ...) and the condition was
          fulfilled
        </li>
        <li>
          User navigated to an Angular component which uses element in its template
          (can be both eagerly or lazily loaded routes)
        </li>
      </ul>
      `},{question:"What will happen if I use same element multiple times in single template?",answer:"The element bundle will be downloaded only once! The library takes care of this situation by maintaining registry of downloaded / downloading elements and every new occurence will be checked against that  registry..."},{question:'When do we need to use <code>*axLazyElement="module: true"</code> flag?',answer:'Some web components libraries might be distributed using ES modules, for example if we look at <a href="https://unpkg.com/@material/mwc-button@0.27.0/mwc-button.js?module" target="_blank">@material/mwc-button</a> we will see that it imports additional things like <code>@material/mwc-base</code> using import statement in its implementation. This means it will need to download multiple files compared to a single bundle when using Angular elements. To make this work, library has to generate <code>	&#60;script type="module"></code> instead of just plain <code>	&#60;script></code> tag.'},{question:"Angular elements / web components / custom elements / what?",answer:`In the docs, we often use phrase "Angular elements (or any other web component)" but this may sound a bit vague without previous insight into the topic... <br><br>The web standard is in fact called "Web Components" and it uses <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements" target="_blank">Custom Elements API</a> to create and use web components which are <strong>new custom, reusable, encapsulated HTML tags</strong> to use in web pages and web apps.<br><br>Angular Elements wraps Angular components using <code>HTMLElement</code> APIs and then uses Custom Elements API, more precisely the <code>customElements.define('some-element', SomeComponentElement)</code> syntax to register it for the use in the web page.`},{question:"How to prevent multiple downloads of same elements bundle when used in the multiple apps / elements?",answer:`
    It is possible to override the <code>LAZY_ELEMENTS_REGISTRY</code> token and provide your own implementation of the registry which should implement <code>LazyElementsRegistry</code> interface. Such an overridden registry then could store the value globally (for example on the <code>window</code>). That way every instance of lazy elements library can work with this shared state and prevent multiple downloads of some element bundle in case it was already loaded by other library instance before.
    `},{question:"Does the application not detect changes of web component?",answer:`
    One of the reasons that may be causing the problem is that the web component's server may
    be telling the browser to cache the result within the <strong>cache-control</strong> header.<br>
    To further illustrate this situation, let's assume you're loading a web component and this is
    happening:<br><br>
    <ol>
    <li>
      When the user accesses the page for the first time, Angular Elements send a request to your
      web component and get the result to load the component on the screen.
    </li>
    <li>
      Let's assume the response of this previous request returned with the header <strong>Cache-Control:
      max-age=3600</strong>. This means that the browser can store the response for up to 3600 seconds (1 hour).
    </li>
    <li>
      Now you have made changes in your web component and hope for Angular Elements to load this new version
      on your page.
    </li>
    <li>
      When the user refreshes the page, Angular Elements will try to make a new request to your web component.
      However, the browser will automatically return the last cached response
      we mentioned in step 2.
    </li>
    </ol>
    <br>
    The solution to this scenario, if you want to detect changes of your web component as soon as
    they occur, it's to inform in the <strong>Cache-Control header: no-cache</strong>.<br><br>

    <em>Useful links:</em>
    <br>
    <em><a href="https://github.com/angular-extensions/elements/issues/148" target="_blank">Issue 148</a></em><br>
    <em><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control" target="_blank">Cache-Control</a></em>
    `}];var In=[{path:"",component:Fe}];export{In as default};
