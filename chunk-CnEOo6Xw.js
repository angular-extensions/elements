import{$ as KI,$t as Xr,Bn as kh,Cr as zm,Ct as QI,D as Et,Dn as gg,Dt as Rh,Ht as Uu,It as Th,J as JI,L as Hh,Lt as Tw,Mn as ir,Nn as jD,Nt as TC,On as hs,Ot as Rm,Pn as jI,Qt as Xn,R as Hi,S as Dn,Sn as ew,Tn as gI,V as I,W as Ii,Xt as Xc,Y as Ji,Yt as W$1,Zt as Xf,a as $u,an as Zh,br as z,c as Ah,cn as _h,cr as st,dn as ag,er as qh,f as BI,hn as bC,it as LI,j as Fu,k as FI,lt as Nr,m as Bh,mt as Oh,nn as Z,nt as Kt,q as J,rr as qv,sn as Zt,u as Aw,wn as g,wr as zu,xr as zd,zn as kI,zt as Uh}from"./chunk-C4_gtfUn.js";import{t as h}from"./chunk-BelJIGP0.js";import{_ as j$1,c as Qe$1,h as ie,l as Rn,n as He$1,o as Mn,s as On,u as Tn$1,y as ne}from"./chunk-DkaxpU-d.js";import{t as I$1}from"./chunk-B2P_CqHU.js";import{k as n}from"./main-7JQPUPDB.js";var j=new I(`CdkAccordion`);var Ae=(()=>{class t{_stateChanges=new J;_openCloseAllActions=new J;id=g(ie).getId(`cdk-accordion-`);multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static ɵfac=function(n){return new(n||t)};static ɵdir=Fu({type:t,selectors:[[`cdk-accordion`],[``,`cdkAccordion`,``]],inputs:{multi:[2,`multi`,`multi`,TC]},exportAs:[`cdkAccordion`],features:[Aw([{provide:j,useExisting:t}]),Xc]})}return t})();var Pe=(()=>{class t{accordion=g(j,{optional:!0,skipSelf:!0});_changeDetectorRef=g(gg);_expansionDispatcher=g(n);_openCloseAllSubscription=Z.EMPTY;closed=new st;opened=new st;destroyed=new st;expandedChange=new st;id=g(ie).getId(`cdk-accordion-child-`);get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Ii(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static ɵfac=function(n){return new(n||t)};static ɵdir=Fu({type:t,selectors:[[`cdk-accordion-item`],[``,`cdkAccordionItem`,``]],inputs:{expanded:[2,`expanded`,`expanded`,TC],disabled:[2,`disabled`,`disabled`,TC]},outputs:{closed:`closed`,opened:`opened`,destroyed:`destroyed`,expandedChange:`expandedChange`},exportAs:[`cdkAccordionItem`],features:[Aw([{provide:j,useValue:void 0}])]})}return t})();var Ne=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=hs({type:t});static ɵinj=Nr({})}return t})();var ze=[`body`];var Le=[`bodyWrapper`];var Re=[[[`mat-expansion-panel-header`]],`*`,[[`mat-action-row`]]];var je=[`mat-expansion-panel-header`,`*`,`mat-action-row`];function We(t,D){}var Qe=[[[`mat-panel-title`]],[[`mat-panel-description`]],`*`];var Ue=[`mat-panel-title`,`mat-panel-description`,`*`];function Be(t,D){t&1&&($u(0,`span`,1),zd(),$u(1,`svg`,2),kh(2,`path`,3),zu()())}var W=new I(`MAT_ACCORDION`);var Te=new I(`MAT_EXPANSION_PANEL`);var Ve=(()=>{class t{_template=g(Xn);_expansionPanel=g(Te,{optional:!0});static ɵfac=function(n){return new(n||t)};static ɵdir=Fu({type:t,selectors:[[`ng-template`,`matExpansionPanelContent`,``]]})}return t})();var ke=new I(`MAT_EXPANSION_PANEL_DEFAULT_OPTIONS`);var Q=(()=>{class t extends Pe{_viewContainerRef=g(ir);_animationsDisabled=On();_document=g(W$1);_ngZone=g(z);_elementRef=g(Dn);_renderer=g(Xr);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new st;afterCollapse=new st;_inputChanges=new J;accordion=g(W,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=g(ie).getId(`mat-expansion-panel-header-`);constructor(){super();let e=g(ke,{optional:!0});this._expansionDispatcher=g(n),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?`expanded`:`collapsed`}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(zm(null),Et(()=>this.expanded&&!this._portal),Kt(1)).subscribe(()=>{this._portal=new j$1(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n===`grid-template-rows`&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this._transitionEndListener),e.classList.add(`mat-expansion-panel-animations-enabled`)},200)})}static ɵfac=function(n){return new(n||t)};static ɵcmp=gI({type:t,selectors:[[`mat-expansion-panel`]],contentQueries:function(n,a,s){if(n&1&&Hh(s,Ve,5),n&2){let o;JI(o=ew())&&(a._lazyContent=o.first)}},viewQuery:function(n,a){if(n&1&&Uh(ze,5)(Le,5),n&2){let s;JI(s=ew())&&(a._body=s.first),JI(s=ew())&&(a._bodyWrapper=s.first)}},hostAttrs:[1,`mat-expansion-panel`],hostVars:4,hostBindings:function(n,a){n&2&&Zh(`mat-expanded`,a.expanded)(`mat-expansion-panel-spacing`,a._hasSpacing())},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,TC],togglePosition:`togglePosition`},outputs:{afterExpand:`afterExpand`,afterCollapse:`afterCollapse`},exportAs:[`matExpansionPanel`],features:[Aw([{provide:W,useValue:void 0},{provide:Te,useExisting:t}]),Th,Xc],ngContentSelectors:je,decls:9,vars:4,consts:[[`bodyWrapper`,``],[`body`,``],[1,`mat-expansion-panel-content-wrapper`],[`role`,`region`,1,`mat-expansion-panel-content`,3,`id`],[1,`mat-expansion-panel-body`],[3,`cdkPortalOutlet`]],template:function(n,a){n&1&&(QI(Re),KI(0),Ji(1,`div`,2,0)(3,`div`,3,1)(5,`div`,4),KI(6,1),_h(7,We,0,0,`ng-template`,5),Uu(),KI(8,2),Uu()()),n&2&&(jD(),Ah(`inert`,a.expanded?null:``),jD(2),Rh(`id`,a.id),Ah(`aria-labelledby`,a._headerId),jD(4),Rh(`cdkPortalOutlet`,a._portal))},dependencies:[Mn],styles:[`.mat-expansion-panel {
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
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
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
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
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
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
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
`],encapsulation:2})}return t})();var U=(()=>{class t{panel=g(Q,{host:!0});_element=g(Dn);_focusMonitor=g(He$1);_changeDetectorRef=g(gg);_parentChangeSubscription=Z.EMPTY;constructor(){g(h).load(Rn);let e=this.panel,n=g(ke,{optional:!0}),a=g(new ag(`tabindex`),{optional:!0}),s=e.accordion?e.accordion._stateChanges.pipe(Et(o=>!!(o.hideToggle||o.togglePosition))):Zt;this.tabIndex=parseInt(a||``)||0,this._parentChangeSubscription=Rm(e.opened,e.closed,s,e._inputChanges.pipe(Et(o=>!!(o.hideToggle||o.disabled||o.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Et(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,`program`)),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Qe$1(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static ɵfac=function(n){return new(n||t)};static ɵcmp=gI({type:t,selectors:[[`mat-expansion-panel-header`]],hostAttrs:[`role`,`button`,1,`mat-expansion-panel-header`,`mat-focus-indicator`],hostVars:13,hostBindings:function(n,a){n&1&&Bh(`click`,function(){return a._toggle()})(`keydown`,function(o){return a._keydown(o)}),n&2&&(Ah(`id`,a.panel._headerId)(`tabindex`,a.disabled?-1:a.tabIndex)(`aria-controls`,a._getPanelId())(`aria-expanded`,a._isExpanded())(`aria-disabled`,a.panel.disabled),qh(`height`,a._getHeaderHeight()),Zh(`mat-expanded`,a._isExpanded())(`mat-expansion-toggle-indicator-after`,a._getTogglePosition()===`after`)(`mat-expansion-toggle-indicator-before`,a._getTogglePosition()===`before`))},inputs:{expandedHeight:`expandedHeight`,collapsedHeight:`collapsedHeight`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:bC(e)]},ngContentSelectors:Ue,decls:5,vars:3,consts:[[1,`mat-content`],[1,`mat-expansion-indicator`],[`xmlns`,`http://www.w3.org/2000/svg`,`viewBox`,`0 -960 960 960`,`aria-hidden`,`true`,`focusable`,`false`],[`d`,`M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z`]],template:function(n,a){n&1&&(QI(Qe),$u(0,`span`,0),KI(1),KI(2,1),KI(3,2),zu(),kI(4,Be,3,0,`span`,1)),n&2&&(Zh(`mat-content-hide-toggle`,!a._showToggle()),jD(4),FI(a._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
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
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
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
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
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
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})}return t})();var De=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=Fu({type:t,selectors:[[`mat-panel-title`]],hostAttrs:[1,`mat-expansion-panel-header-title`]})}return t})();var Ie=(()=>{class t extends Ae{_keyManager;_ownHeaders=new Hi;_headers;hideToggle=!1;displayMode=`default`;togglePosition=`after`;ngAfterContentInit(){this._headers.changes.pipe(zm(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new ne(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static ɵfac=(()=>{let e;return function(a){return(e||(e=Xf(t)))(a||t)}})();static ɵdir=Fu({type:t,selectors:[[`mat-accordion`]],contentQueries:function(n,a,s){if(n&1&&Hh(s,U,5),n&2){let o;JI(o=ew())&&(a._headers=o)}},hostAttrs:[1,`mat-accordion`],hostVars:2,hostBindings:function(n,a){n&2&&Zh(`mat-accordion-multi`,a.multi)},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,TC],displayMode:`displayMode`,togglePosition:`togglePosition`},exportAs:[`matAccordion`],features:[Aw([{provide:W,useExisting:t}]),Th]})}return t})();var He=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=hs({type:t});static ɵinj=Nr({imports:[Ne,Tn$1,I$1]})}return t})();function Ke(t,D){if(t&1&&(Ji(0,`mat-expansion-panel`)(1,`mat-expansion-panel-header`)(2,`mat-panel-title`),Oh(3,`span`,1),Uu()(),Oh(4,`p`,1),Uu()),t&2){let e=D.$implicit;jD(3),Rh(`innerHTML`,e.question,qv),jD(),Rh(`innerHTML`,e.answer,qv)}}var Oe=(()=>{class t{faq=Ye;ngOnInit(){}static ɵfac=function(n){return new(n||t)};static ɵcmp=gI({type:t,selectors:[[`demo-faq`]],decls:6,vars:0,consts:[[1,`wrapper`],[3,`innerHTML`]],template:function(n,a){n&1&&(Ji(0,`div`,0)(1,`h1`),Tw(2,`Frequently asked questions`),Uu(),Ji(3,`mat-accordion`),jI(4,Ke,5,2,`mat-expansion-panel`,null,LI),Uu()()),n&2&&(jD(4),BI(a.faq))},dependencies:[He,Ie,Q,U,De],styles:[`h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}mat-panel-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}.mat-expanded[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:25px}.responsive[_nghost-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{padding-top:20px!important;padding-bottom:20px!important}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}`]})}return t})();var Ye=[{question:`When does the <code>*axLazyElement</code> directive trigger download of the element bundle (or module)`,answer:`The element loading will be postponed until it was rendered in the template of some component. This can happen in following cases... <br>
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
      `},{question:`What will happen if I use same element multiple times in single template?`,answer:`The element bundle will be downloaded only once! The library takes care of this situation by maintaining registry of downloaded / downloading elements and every new occurence will be checked against that  registry...`},{question:`When do we need to use <code>*axLazyElement="module: true"</code> flag?`,answer:`Some web components libraries might be distributed using ES modules, for example if we look at <a href="https://unpkg.com/@material/mwc-button@0.27.0/mwc-button.js?module" target="_blank">@material/mwc-button</a> we will see that it imports additional things like <code>@material/mwc-base</code> using import statement in its implementation. This means it will need to download multiple files compared to a single bundle when using Angular elements. To make this work, library has to generate <code>	&#60;script type="module"></code> instead of just plain <code>	&#60;script></code> tag.`},{question:`Angular elements / web components / custom elements / what?`,answer:`In the docs, we often use phrase "Angular elements (or any other web component)" but this may sound a bit vague without previous insight into the topic... <br><br>The web standard is in fact called "Web Components" and it uses <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements" target="_blank">Custom Elements API</a> to create and use web components which are <strong>new custom, reusable, encapsulated HTML tags</strong> to use in web pages and web apps.<br><br>Angular Elements wraps Angular components using <code>HTMLElement</code> APIs and then uses Custom Elements API, more precisely the <code>customElements.define('some-element', SomeComponentElement)</code> syntax to register it for the use in the web page.`},{question:`How to prevent multiple downloads of same elements bundle when used in the multiple apps / elements?`,answer:`
    It is possible to override the <code>LAZY_ELEMENTS_REGISTRY</code> token and provide your own implementation of the registry which should implement <code>LazyElementsRegistry</code> interface. Such an overridden registry then could store the value globally (for example on the <code>window</code>). That way every instance of lazy elements library can work with this shared state and prevent multiple downloads of some element bundle in case it was already loaded by other library instance before.
    `},{question:`Does the application not detect changes of web component?`,answer:`
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
    `}];var Tn=[{path:``,component:Oe}];export{Tn as default};