(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{258:function(e,n,t){"use strict";t.r(n);var a,r=t(2),o=t(3),c=t(35),i=t(66),s=t(6),u=t(21),w=t(11),p=t(13),h=new s.a({source:new w.b}),b=new p.a({wrapX:!1}),d=new u.a({source:b}),l=new r.a({layers:[h,d],target:"map",view:new o.a({center:[-11e6,46e5],zoom:4})}),v=document.getElementById("type");function m(){var e,n=v.value;"None"!==n&&("Square"===n?(n="Circle",e=Object(i.b)(4)):"Box"===n?(n="Circle",e=Object(i.a)()):"Star"===n&&(n="Circle",e=function(e,n){for(var t=e[0],a=e[1],r=t[0]-a[0],o=t[1]-a[1],i=Math.sqrt(r*r+o*o),s=Math.atan2(o,r),u=[],w=0;w<12;++w){var p=s+2*w*Math.PI/12,h=w%2==0?1:.5,b=i*h*Math.cos(p),d=i*h*Math.sin(p);u.push([t[0]+b,t[1]+d])}return u.push(u[0].slice()),n?n.setCoordinates([u]):n=new c.b([u]),n}),a=new i.c({source:b,type:n,geometryFunction:e}),l.addInteraction(a))}v.onchange=function(){l.removeInteraction(a),m()},m()}},[[258,0]]]);
//# sourceMappingURL=draw-shapes.js.map