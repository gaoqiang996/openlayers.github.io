(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{264:function(e,n,a){"use strict";a.r(n);var o,t=a(3),c=a(2),w=a(64),r=a(5),u=a(21),i=a(9),p=a(11),s=new r.a({source:new i.b}),d=new p.a({wrapX:!1}),m=new u.a({source:d}),v=new t.a({layers:[s,m],target:"map",view:new c.a({center:[-11e6,46e5],zoom:4})}),f=document.getElementById("type");function l(){"None"!==f.value&&(o=new w.c({source:d,type:f.value,freehand:!0}),v.addInteraction(o))}f.onchange=function(){v.removeInteraction(o),l()},l()}},[[264,0]]]);
//# sourceMappingURL=draw-freehand.js.map