(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{Vx2R:function(e,o,r){"use strict";r.r(o),r.d(o,"iosTransitionAnimation",function(){return l}),r.d(o,"shadow",function(){return a});var n="opacity",t="translateX",a=function(e){return e.shadowRoot||e},l=function(e,o,r){var l="rtl"===o.ownerDocument.dir,d=l?"-99.5%":"99.5%",i=l?"33%":"-33%",m=r.enteringEl,f=r.leavingEl,c=new e;if(c.addElement(m).duration(r.duration||500).easing(r.easing||"cubic-bezier(0.36,0.66,0.04,1)").beforeRemoveClass("ion-page-invisible"),f&&o){var u=new e;u.addElement(o),c.add(u)}var s="back"===r.direction,T=m.querySelector(":scope > ion-content"),b=m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),y=m.querySelectorAll(":scope > ion-header > ion-toolbar"),S=new e;if(T||0!==y.length||0!==b.length?(S.addElement(T),S.addElement(b)):S.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),c.add(S),s?S.beforeClearStyles([n]).fromTo(t,i,"0%",!0).fromTo(n,.8,1,!0):S.beforeClearStyles([n]).fromTo(t,d,"0%",!0),y.forEach(function(o){var r=new e;r.addElement(o),c.add(r);var m=new e;m.addElement(o.querySelector("ion-title"));var f=new e;f.addElement(o.querySelectorAll("ion-buttons,[menuToggle]"));var u=new e;u.addElement(o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var T=new e;T.addElement(a(o).querySelector(".toolbar-background"));var b=new e,y=o.querySelector("ion-back-button");if(y&&b.addElement(y),r.add(m).add(f).add(u).add(T).add(b),m.fromTo(n,.01,1,!0),f.fromTo(n,.01,1,!0),u.fromTo(n,.01,1,!0),s)m.fromTo(t,i,"0%",!0),u.fromTo(t,i,"0%",!0),b.fromTo(n,.01,1,!0);else if(m.fromTo(t,d,"0%",!0),u.fromTo(t,d,"0%",!0),T.beforeClearStyles([n]).fromTo(n,.01,1,!0),b.fromTo(n,.01,1,!0),y){var S=new e;S.addElement(a(y).querySelector(".button-text")).fromTo(t,l?"-100px":"100px","0px"),r.add(S)}}),f){var w=new e;w.addElement(f.querySelector(":scope > ion-content")),w.addElement(f.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),c.add(w),s?w.beforeClearStyles([n]).fromTo(t,"0%",l?"-100%":"100%"):w.fromTo(t,"0%",i,!0).fromTo(n,1,.8,!0),f.querySelectorAll(":scope > ion-header > ion-toolbar").forEach(function(o){var r=new e;r.addElement(o);var d=new e;d.addElement(o.querySelector("ion-title"));var m=new e;m.addElement(o.querySelectorAll("ion-buttons,[menuToggle]"));var f=new e,u=o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");u.length>0&&f.addElement(u);var T=new e;T.addElement(a(o).querySelector(".toolbar-background"));var b=new e,y=o.querySelector("ion-back-button");if(y&&b.addElement(y),r.add(d).add(m).add(f).add(b).add(T),c.add(r),b.fromTo(n,.99,0),d.fromTo(n,.99,0),m.fromTo(n,.99,0,0),f.fromTo(n,.99,0),s){if(d.fromTo(t,"0%",l?"-100%":"100%"),f.fromTo(t,"0%",l?"-100%":"100%"),T.beforeClearStyles([n]).fromTo(n,1,.01),y){var S=new e;S.addElement(a(y).querySelector(".button-text")),S.fromTo(t,"0%",(l?-124:124)+"px"),r.add(S)}}else d.fromTo(t,"0%",i).afterClearStyles(["transform"]),f.fromTo(t,"0%",i).afterClearStyles(["transform",n]),b.afterClearStyles([n]),d.afterClearStyles([n]),m.afterClearStyles([n])})}return Promise.resolve(c)}}}]);