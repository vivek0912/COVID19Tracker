(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"/n7v":function(l,n,u){"use strict";u.d(n,"a",(function(){return e})),u("SOMP");class e{constructor(l,n){n.placement="bottom-right",this.customHeader=!1,this.options=!0,this.hidHeader=!1,this.isCardFooter=!1,this.cardTitle="",this.animator=l.builder(),this.animators=l.builder(),this.animator.useVisibility=!0,this.fullIcon="icon-maximize",this.isAnimating=!1,this.collapsedCard="expanded",this.collapsedIcon="icon-minus",this.loadCard=!1,this.cardRemove="open"}ngOnInit(){this.hidHeader&&(this.options=!1),(!this.options||this.hidHeader||this.customHeader)&&(this.collapsedCard="false")}fullCardToggle(l,n,u){n="full-card"===this.cardClass?"zoomOut":"zoomIn",this.fullIcon="full-card"===this.cardClass?"icon-maximize":"icon-minimize",this.cardClass="full-card"===this.cardClass?this.cardClass:"full-card",u&&(this.animation=n),this.isAnimating=!0,this.animators.setType(this.animation).setDuration(500).setDirection("alternate").setTimingFunction("cubic-bezier(0.1, -0.6, 0.2, 0)").animate(l).then(()=>{this.isAnimating=!1}).catch(()=>{this.isAnimating=!1}),setTimeout(()=>{this.cardClass="zoomOut"===n?"":this.cardClass,"full-card"===this.cardClass?document.querySelector("body").style.overflow="hidden":document.querySelector("body").removeAttribute("style")},500)}collapsedCardToggle(){this.collapsedCard="collapsed"===this.collapsedCard?"expanded":"collapsed",this.collapsedIcon="collapsed"===this.collapsedCard?"icon-plus":"icon-minus"}cardRefresh(){this.loadCard=!0,this.cardClass="card-load",setTimeout(()=>{this.loadCard=!1,this.cardClass="expanded"},3e3)}cardRemoveAction(){this.cardRemove="closed"===this.cardRemove?"open":"closed"}}},SOMP:function(l,n,u){"use strict";function e(l){for(var u in l)n.hasOwnProperty(u)||(n[u]=l[u])}Object.defineProperty(n,"__esModule",{value:!0}),e(u("dBwZ")),e(u("oFH1"))},mRr9:function(l,n,u){"use strict";var e=u("8Y7J"),t=u("SVse"),i=u("G0yt"),d=u("UMml"),s=u("U2d/");u("/n7v"),u.d(n,"a",(function(){return a})),u.d(n,"b",(function(){return y}));var a=e["\u0275crt"]({encapsulation:0,styles:[[".card.full-card[_ngcontent-%COMP%]{position:fixed!important;top:0!important;left:0!important;z-index:99999;border-radius:0;width:calc(100vw)!important;height:100vh!important}"]],data:{animation:[{type:7,name:"collapsedCard",definitions:[{type:0,name:"collapsed, void",styles:{type:6,styles:{overflow:"hidden",height:"0px"},offset:null},options:void 0},{type:0,name:"expanded",styles:{type:6,styles:{overflow:"hidden",height:"*"},offset:null},options:void 0},{type:1,expr:"collapsed <=> expanded",animation:[{type:4,styles:null,timings:"400ms ease-in-out"}],options:null}],options:{}},{type:7,name:"cardRemove",definitions:[{type:0,name:"open",styles:{type:6,styles:{opacity:1},offset:null},options:void 0},{type:0,name:"closed",styles:{type:6,styles:{opacity:0,display:"none"},offset:null},options:void 0},{type:1,expr:"open <=> closed",animation:{type:4,styles:null,timings:"400ms"},options:null}],options:{}}]}});function o(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.cardTitle)}))}function r(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"p",[],null,null,null,null,null)),e["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](2,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),(l()(),e["\u0275ted"](3,null,["",""]))],(function(l,n){l(n,2,0,n.component.captionClass)}),(function(l,n){l(n,3,0,n.component.cardCaption)}))}function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,36,"div",[["class","card-header-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,35,"div",[["class","btn-group card-option dropdown"],["ngbDropdown",""]],[[2,"show",null]],null,null,null,null)),e["\u0275did"](2,737280,null,3,i.u,[e.ChangeDetectorRef,i.w,t.DOCUMENT,e.NgZone,e.ElementRef,e.Renderer2,[2,i.qb]],null,null),e["\u0275qud"](335544320,1,{_menu:0}),e["\u0275qud"](335544320,2,{_menuElement:0}),e["\u0275qud"](335544320,3,{_anchor:0}),(l()(),e["\u0275eld"](6,0,null,null,3,"button",[["aria-haspopup","true"],["class","btn dropdown-toggle btn-icon dropdown-toggle"],["ngbDropdownToggle",""],["type","button"]],[[1,"aria-expanded",0]],[[null,"click"],[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,7).dropdown.toggle()&&t),"keydown.ArrowUp"===n&&(t=!1!==e["\u0275nov"](l,7).dropdown.onKeyDown(u)&&t),"keydown.ArrowDown"===n&&(t=!1!==e["\u0275nov"](l,7).dropdown.onKeyDown(u)&&t),"keydown.Home"===n&&(t=!1!==e["\u0275nov"](l,7).dropdown.onKeyDown(u)&&t),"keydown.End"===n&&(t=!1!==e["\u0275nov"](l,7).dropdown.onKeyDown(u)&&t),t}),null,null)),e["\u0275did"](7,16384,null,0,i.z,[i.u,e.ElementRef],null,null),e["\u0275prd"](2048,[[3,4]],i.v,null,[i.z]),(l()(),e["\u0275eld"](9,0,null,null,0,"i",[["class","feather icon-more-horizontal"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,[[2,0]],null,26,"ul",[["class","list-unstyled card-option dropdown-menu dropdown-menu-right"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],[[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"],[null,"keydown.Enter"],[null,"keydown.Space"]],(function(l,n,u){var t=!0;return"keydown.ArrowUp"===n&&(t=!1!==e["\u0275nov"](l,11).dropdown.onKeyDown(u)&&t),"keydown.ArrowDown"===n&&(t=!1!==e["\u0275nov"](l,11).dropdown.onKeyDown(u)&&t),"keydown.Home"===n&&(t=!1!==e["\u0275nov"](l,11).dropdown.onKeyDown(u)&&t),"keydown.End"===n&&(t=!1!==e["\u0275nov"](l,11).dropdown.onKeyDown(u)&&t),"keydown.Enter"===n&&(t=!1!==e["\u0275nov"](l,11).dropdown.onKeyDown(u)&&t),"keydown.Space"===n&&(t=!1!==e["\u0275nov"](l,11).dropdown.onKeyDown(u)&&t),t}),null,null)),e["\u0275did"](11,16384,[[1,4]],1,i.x,[i.u],null,null),e["\u0275qud"](603979776,4,{menuItems:1}),(l()(),e["\u0275eld"](13,0,null,null,6,"li",[["class","dropdown-item full-card"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.fullCardToggle(e["\u0275nov"](l.parent.parent,0),"",!0)&&t),t}),null,null)),(l()(),e["\u0275eld"](14,0,null,null,5,"a",[["href","javascript:"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,2,"i",[["class","feather"]],null,null,null,null,null)),e["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](18,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),e["\u0275ted"](19,null,[" ",""])),(l()(),e["\u0275eld"](20,0,null,null,8,"li",[["class","dropdown-item minimize-card"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.collapsedCardToggle()&&e),e}),null,null)),(l()(),e["\u0275eld"](21,0,null,null,7,"a",[["href","javascript:"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,2,"i",[["class","feather"]],null,null,null,null,null)),e["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](25,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),e["\u0275ted"](26,null,[" "," "])),(l()(),e["\u0275eld"](27,0,null,null,1,"span",[["style","display:none"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,0,"i",[["class","feather icon-plus"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,3,"li",[["class","dropdown-item reload-card"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.cardRefresh(u)&&e),e}),null,null)),(l()(),e["\u0275eld"](30,0,null,null,2,"a",[["href","javascript:"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,0,"i",[["class","feather icon-refresh-cw"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Reload"])),(l()(),e["\u0275eld"](33,0,null,null,3,"li",[["class","dropdown-item close-card"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.cardRemoveAction()&&e),e}),null,null)),(l()(),e["\u0275eld"](34,0,null,null,2,"a",[["href","javascript:"]],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,0,"i",[["class","feather icon-trash"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Remove"]))],(function(l,n){var u=n.component;l(n,2,0),l(n,18,0,"feather",u.fullIcon),l(n,25,0,"feather",u.collapsedIcon)}),(function(l,n){var u=n.component;l(n,1,0,e["\u0275nov"](n,2).isOpen()),l(n,6,0,e["\u0275nov"](n,7).dropdown.isOpen()),l(n,10,0,!0,e["\u0275nov"](n,11).dropdown.isOpen(),e["\u0275nov"](n,11).placement),l(n,19,0,"full-card"===u.cardClass?"Restore":"Maximize"),l(n,26,0,"collapsed"===u.collapsedCard?"Expand":"Collapse")}))}function m(l){return e["\u0275vid"](0,[e["\u0275ncd"](null,0),(l()(),e["\u0275and"](0,null,null,0))],null,null)}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","card-header"]],null,null,null,null,null)),e["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](2,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,o)),e["\u0275did"](4,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,r)),e["\u0275did"](6,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,c)),e["\u0275did"](8,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](10,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"card-header",u.headerClass),l(n,4,0,!u.customHeader),l(n,6,0,!u.customHeader&&u.cardCaption),l(n,8,0,u.options&&!u.customHeader),l(n,10,0,u.customHeader)}),null)}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[],[[24,"@collapsedCard",0]],null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](2,540672,null,0,t.NgTemplateOutlet,[e.ViewContainerRef],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null)],(function(l,n){l(n,2,0,e["\u0275nov"](n.parent,9))}),(function(l,n){l(n,0,0,n.component.collapsedCard)}))}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","card-body"]],null,null,null,null,null)),e["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](2,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275ncd"](null,1)],(function(l,n){l(n,2,0,"card-body",n.component.blockClass)}),null)}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","card-footer"]],null,null,null,null,null)),e["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](2,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275ncd"](null,2)],(function(l,n){l(n,2,0,"card-footer",n.component.footerClass)}),null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","card-loader"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"i",[["class","pct-loader1 anim-rotate"]],null,null,null,null,null))],null,null)}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,[["toAnimate",1]],null,13,"div",[["animates",""],["animatesInitMode","show"],["class","card"]],[[24,"@cardRemove",0]],null,null,null,null)),e["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](2,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275did"](3,81920,null,0,d.AnimatesDirective,[e.ElementRef,s.AnimationService],{animates:[0,"animates"],animatesOnInit:[1,"animatesOnInit"],animatesInitMode:[2,"animatesInitMode"]},null),e["\u0275pod"](4,{useVisibility:0,disabled:1}),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](6,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](8,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275and"](0,[["subMenuContent",2]],null,0,null,v)),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](11,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](13,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"card",u.cardClass);var t=l(n,4,0,!1,!0);l(n,3,0,"",t,"show"),l(n,6,0,!u.hidHeader),l(n,8,0,u.options,e["\u0275nov"](n,9)),l(n,11,0,u.isCardFooter),l(n,13,0,u.loadCard)}),(function(l,n){l(n,0,0,n.component.cardRemove)}))}},oFH1:function(l,n,u){"use strict";function e(l){for(var u in l)n.hasOwnProperty(u)||(n[u]=l[u])}Object.defineProperty(n,"__esModule",{value:!0}),e(u("IcD6")),e(u("UMml")),e(u("U2d/"))},yIO2:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var i=u("pMnS"),d=u("mRr9"),s=u("G0yt"),a=u("/n7v"),o=u("U2d/");class r{constructor(){}ngOnInit(){}}var c=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,219,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,32,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,31,"app-card",[["cardTitle","Headings"]],null,null,null,d.b,d.a)),e["\u0275prd"](512,null,s.w,s.w,[]),e["\u0275did"](4,114688,null,0,a.a,[o.AnimationService,s.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](5,0,null,1,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["This is a Heading 1"])),(l()(),e["\u0275eld"](7,0,null,1,1,"p",[["class","text-muted mb-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit."])),(l()(),e["\u0275eld"](9,0,null,1,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,1,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["This is a Heading 2"])),(l()(),e["\u0275eld"](12,0,null,1,1,"p",[["class","text-muted mb-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["In nec rhoncus eros. Vestibulum eu mattis nisl. Quisque viverra viverra magna nec pulvinar. Maecenas pellentesque porta augue, consectetur facilisis diam porttitor sed. Suspendisse tempor est sodales augue rutrum tincidunt. Quisque a malesuada purus."])),(l()(),e["\u0275eld"](14,0,null,1,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,1,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["This is a Heading 3"])),(l()(),e["\u0275eld"](17,0,null,1,1,"p",[["class","text-muted mb-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Vestibulum auctor tincidunt semper. Phasellus ut vulputate lacus. Suspendisse ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus."])),(l()(),e["\u0275eld"](19,0,null,1,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,1,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["This is a Heading 4"])),(l()(),e["\u0275eld"](22,0,null,1,1,"p",[["class","text-muted mb-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nulla et mattis nunc. Curabitur scelerisque commodo condimentum. Mauris blandit, velit a consectetur egestas, diam arcu fermentum justo, eget ultrices arcu eros vel erat."])),(l()(),e["\u0275eld"](24,0,null,1,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,1,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["This is a Heading 5"])),(l()(),e["\u0275eld"](27,0,null,1,1,"p",[["class","text-muted mb-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus elementum. Suspendisse molestie ullamcorper ornare."])),(l()(),e["\u0275eld"](29,0,null,1,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,1,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["This is a Heading 6"])),(l()(),e["\u0275eld"](32,0,null,1,1,"p",[["class","text-muted mb-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Donec ultricies, lacus id tempor condimentum, orci leo faucibus sem, a molestie libero lectus ac justo. ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus."])),(l()(),e["\u0275eld"](34,0,null,null,11,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,10,"app-card",[["cardTitle","Display Headings"]],null,null,null,d.b,d.a)),e["\u0275prd"](512,null,s.w,s.w,[]),e["\u0275did"](37,114688,null,0,a.a,[o.AnimationService,s.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](38,0,null,1,1,"h1",[["class","display-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Display 1"])),(l()(),e["\u0275eld"](40,0,null,1,1,"h1",[["class","display-2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Display 2"])),(l()(),e["\u0275eld"](42,0,null,1,1,"h1",[["class","display-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Display 3"])),(l()(),e["\u0275eld"](44,0,null,1,1,"h1",[["class","display-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Display 4"])),(l()(),e["\u0275eld"](46,0,null,null,21,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,20,"app-card",[["cardTitle","Inline Text Elements"]],null,null,null,d.b,d.a)),e["\u0275prd"](512,null,s.w,s.w,[]),e["\u0275did"](49,114688,null,0,a.a,[o.AnimationService,s.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](50,0,null,1,1,"p",[["class","lead m-t-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Your title goes here"])),(l()(),e["\u0275ted"](-1,1,[" You can use the mark tag to "])),(l()(),e["\u0275eld"](53,0,null,1,1,"mark",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["highlight"])),(l()(),e["\u0275ted"](-1,1,[" text. "])),(l()(),e["\u0275eld"](56,0,null,1,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,1,1,"del",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["This line of text is meant to be treated as deleted text."])),(l()(),e["\u0275eld"](59,0,null,1,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](60,0,null,1,1,"ins",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["This line of text is meant to be treated as an addition to the document."])),(l()(),e["\u0275eld"](62,0,null,1,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,1,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["rendered as bold text"])),(l()(),e["\u0275eld"](65,0,null,1,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](66,0,null,1,1,"em",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["rendered as italicized text"])),(l()(),e["\u0275eld"](68,0,null,null,17,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](69,0,null,null,16,"app-card",[["cardTitle","Contextual Text Colors"]],null,null,null,d.b,d.a)),e["\u0275prd"](512,null,s.w,s.w,[]),e["\u0275did"](71,114688,null,0,a.a,[o.AnimationService,s.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](72,0,null,1,1,"p",[["class","text-muted mb-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh."])),(l()(),e["\u0275eld"](74,0,null,1,1,"p",[["class","text-primary mb-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nullam id dolor id nibh ultricies vehicula ut id elit."])),(l()(),e["\u0275eld"](76,0,null,1,1,"p",[["class","text-success mb-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Duis mollis, est non commodo luctus, nisi erat porttitor ligula."])),(l()(),e["\u0275eld"](78,0,null,1,1,"p",[["class","text-info mb-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Maecenas sed diam eget risus varius blandit sit amet non magna."])),(l()(),e["\u0275eld"](80,0,null,1,1,"p",[["class","text-warning mb-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Etiam porta sem malesuada magna mollis euismod."])),(l()(),e["\u0275eld"](82,0,null,1,1,"p",[["class","text-danger mb-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Donec ullamcorper nulla non metus auctor fringilla."])),(l()(),e["\u0275eld"](84,0,null,1,1,"p",[["class","text-dark mb-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nullam id dolor id nibh ultricies vehicula ut id elit."])),(l()(),e["\u0275eld"](86,0,null,null,29,"div",[["class","col-md-6 col-lg-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](87,0,null,null,28,"app-card",[["cardTitle","Unordered"]],null,null,null,d.b,d.a)),e["\u0275prd"](512,null,s.w,s.w,[]),e["\u0275did"](89,114688,null,0,a.a,[o.AnimationService,s.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](90,0,null,1,25,"ul",[],null,null,null,null,null)),(l()(),e["\u0275eld"](91,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Lorem ipsum dolor sit amet"])),(l()(),e["\u0275eld"](93,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Consectetur adipiscing elit"])),(l()(),e["\u0275eld"](95,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Integer molestie lorem at massa"])),(l()(),e["\u0275eld"](97,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Facilisis in pretium nisl aliquet"])),(l()(),e["\u0275eld"](99,0,null,null,10,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nulla volutpat aliquam velit "])),(l()(),e["\u0275eld"](101,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),e["\u0275eld"](102,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Phasellus iaculis neque"])),(l()(),e["\u0275eld"](104,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Purus sodales ultricies"])),(l()(),e["\u0275eld"](106,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Vestibulum laoreet porttitor sem"])),(l()(),e["\u0275eld"](108,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Ac tristique libero volutpat at"])),(l()(),e["\u0275eld"](110,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Faucibus porta lacus fringilla vel"])),(l()(),e["\u0275eld"](112,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Aenean sit amet erat nunc"])),(l()(),e["\u0275eld"](114,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Eget porttitor lorem"])),(l()(),e["\u0275eld"](116,0,null,null,29,"div",[["class","col-md-6 col-lg-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](117,0,null,null,28,"app-card",[["cardTitle","Ordered"]],null,null,null,d.b,d.a)),e["\u0275prd"](512,null,s.w,s.w,[]),e["\u0275did"](119,114688,null,0,a.a,[o.AnimationService,s.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](120,0,null,1,25,"ol",[],null,null,null,null,null)),(l()(),e["\u0275eld"](121,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Lorem ipsum dolor sit amet"])),(l()(),e["\u0275eld"](123,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Consectetur adipiscing elit"])),(l()(),e["\u0275eld"](125,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Integer molestie lorem at massa"])),(l()(),e["\u0275eld"](127,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Facilisis in pretium nisl aliquet"])),(l()(),e["\u0275eld"](129,0,null,null,10,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nulla volutpat aliquam velit "])),(l()(),e["\u0275eld"](131,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),e["\u0275eld"](132,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Phasellus iaculis neque"])),(l()(),e["\u0275eld"](134,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Purus sodales ultricies"])),(l()(),e["\u0275eld"](136,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Vestibulum laoreet porttitor sem"])),(l()(),e["\u0275eld"](138,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Ac tristique libero volutpat at"])),(l()(),e["\u0275eld"](140,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Faucibus porta lacus fringilla vel"])),(l()(),e["\u0275eld"](142,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Aenean sit amet erat nunc"])),(l()(),e["\u0275eld"](144,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Eget porttitor lorem"])),(l()(),e["\u0275eld"](146,0,null,null,25,"div",[["class","col-md-12 col-lg-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](147,0,null,null,24,"app-card",[["cardTitle","Unstyled"]],null,null,null,d.b,d.a)),e["\u0275prd"](512,null,s.w,s.w,[]),e["\u0275did"](149,114688,null,0,a.a,[o.AnimationService,s.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](150,0,null,1,11,"ul",[["class","list-unstyled"]],null,null,null,null,null)),(l()(),e["\u0275eld"](151,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Lorem ipsum dolor sit amet"])),(l()(),e["\u0275eld"](153,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Integer molestie lorem at massa "])),(l()(),e["\u0275eld"](155,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),e["\u0275eld"](156,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Phasellus iaculis neque"])),(l()(),e["\u0275eld"](158,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Faucibus porta lacus fringilla vel"])),(l()(),e["\u0275eld"](160,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Eget porttitor lorem"])),(l()(),e["\u0275eld"](162,0,null,1,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Inline"])),(l()(),e["\u0275eld"](164,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](165,0,null,1,6,"ul",[["class","list-inline m-b-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](166,0,null,null,1,"li",[["class","list-inline-item"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Lorem ipsum"])),(l()(),e["\u0275eld"](168,0,null,null,1,"li",[["class","list-inline-item"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Phasellus iaculis"])),(l()(),e["\u0275eld"](170,0,null,null,1,"li",[["class","list-inline-item"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nulla volutpat"])),(l()(),e["\u0275eld"](172,0,null,null,24,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](173,0,null,null,23,"app-card",[["cardTitle","Blockquotes"]],null,null,null,d.b,d.a)),e["\u0275prd"](512,null,s.w,s.w,[]),e["\u0275did"](175,114688,null,0,a.a,[o.AnimationService,s.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](176,0,null,1,1,"p",[["class","text-muted m-b-30"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Your awesome text goes here."])),(l()(),e["\u0275eld"](178,0,null,1,6,"blockquote",[["class","blockquote"]],null,null,null,null,null)),(l()(),e["\u0275eld"](179,0,null,null,1,"p",[["class","mb-2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."])),(l()(),e["\u0275eld"](181,0,null,null,3,"footer",[["class","blockquote-footer"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Someone famous in "])),(l()(),e["\u0275eld"](183,0,null,null,1,"cite",[["title","Source Title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Source Title"])),(l()(),e["\u0275eld"](185,0,null,1,4,"p",[["class","text-muted m-b-15 m-t-20"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Add "])),(l()(),e["\u0275eld"](187,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[".text-right"])),(l()(),e["\u0275ted"](-1,null,[" for a blockquote with right-aligned content."])),(l()(),e["\u0275eld"](190,0,null,1,6,"blockquote",[["class","blockquote text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](191,0,null,null,1,"p",[["class","mb-2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."])),(l()(),e["\u0275eld"](193,0,null,null,3,"footer",[["class","blockquote-footer"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Someone famous in "])),(l()(),e["\u0275eld"](195,0,null,null,1,"cite",[["title","Source Title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Source Title"])),(l()(),e["\u0275eld"](197,0,null,null,22,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](198,0,null,null,21,"app-card",[["cardTitle","Horizontal Description"]],null,null,null,d.b,d.a)),e["\u0275prd"](512,null,s.w,s.w,[]),e["\u0275did"](200,114688,null,0,a.a,[o.AnimationService,s.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](201,0,null,1,18,"dl",[["class","dl-horizontal row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](202,0,null,null,1,"dt",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Description lists"])),(l()(),e["\u0275eld"](204,0,null,null,1,"dd",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["A description list is perfect for defining terms."])),(l()(),e["\u0275eld"](206,0,null,null,1,"dt",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Euismod"])),(l()(),e["\u0275eld"](208,0,null,null,1,"dd",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."])),(l()(),e["\u0275eld"](210,0,null,null,1,"dd",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Donec id elit non mi porta gravida at eget metus."])),(l()(),e["\u0275eld"](212,0,null,null,1,"dt",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Malesuada porta"])),(l()(),e["\u0275eld"](214,0,null,null,1,"dd",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Etiam porta sem malesuada magna mollis euismod."])),(l()(),e["\u0275eld"](216,0,null,null,1,"dt",[["class","col-sm-3 text-truncate"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Truncated term is truncated"])),(l()(),e["\u0275eld"](218,0,null,null,1,"dd",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."]))],(function(l,n){l(n,4,0,"Headings",!1),l(n,37,0,"Display Headings",!1),l(n,49,0,"Inline Text Elements",!1),l(n,71,0,"Contextual Text Colors",!1),l(n,89,0,"Unordered",!1),l(n,119,0,"Ordered",!1),l(n,149,0,"Unstyled",!1),l(n,175,0,"Blockquotes",!1),l(n,200,0,"Horizontal Description",!1)}),null)}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-basic-typography",[],null,null,null,m,c)),e["\u0275did"](1,114688,null,0,r,[],null,null)],(function(l,n){l(n,1,0)}),null)}var f=e["\u0275ccf"]("app-basic-typography",r,p,{},{},[]),g=u("SVse"),v=u("s7LF"),h=u("9OXH"),w=u("iInd");class y{}var b=u("bse0"),C=u("N4L5"),I=u("IcD6"),T=u("wcvO"),R=u("z0HF"),k=u("sIwa"),x=u("22Na"),D=u("ebz3");u.d(n,"BasicTypographyModuleNgFactory",(function(){return N}));var N=e["\u0275cmf"](t,[],(function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,f]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[e.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,v.o,v.o,[]),e["\u0275mpd"](4608,v.c,v.c,[]),e["\u0275mpd"](4608,o.AnimationService,o.AnimationService,[]),e["\u0275mpd"](4608,h.a,h.a,[]),e["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),e["\u0275mpd"](1073742336,w.q,w.q,[[2,w.v],[2,w.o]]),e["\u0275mpd"](1073742336,y,y,[]),e["\u0275mpd"](1073742336,b.d,b.d,[]),e["\u0275mpd"](1073742336,v.n,v.n,[]),e["\u0275mpd"](1073742336,v.d,v.d,[]),e["\u0275mpd"](1073742336,v.m,v.m,[]),e["\u0275mpd"](1073742336,C.a,C.a,[]),e["\u0275mpd"](1073742336,s.y,s.y,[]),e["\u0275mpd"](1073742336,I.AnimatorModule,I.AnimatorModule,[]),e["\u0275mpd"](1073742336,T.a,T.a,[]),e["\u0275mpd"](1073742336,R.a,R.a,[]),e["\u0275mpd"](1073742336,k.a,k.a,[]),e["\u0275mpd"](1073742336,x.ClickOutsideModule,x.ClickOutsideModule,[]),e["\u0275mpd"](1073742336,D.a,D.a,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,w.m,(function(){return[[{path:"",component:r}]]}),[]),e["\u0275mpd"](256,b.a,D.b,[])])}))}}]);