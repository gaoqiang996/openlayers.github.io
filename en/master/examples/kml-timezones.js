(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{293:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n(3),i=n(103),r=n(21),l=n(6),c=n(72),s=n(13),f=n(14),w=n(23),p=n(19),u=new r.a({source:new s.a({url:"data/kml/timezones.kml",format:new i.a({extractStyles:!1})}),style:function(e){var t=0,n=e.get("name").match(/([\-+]\d{2}):(\d{2})$/);n&&(t=60*parseInt(n[1],10)+parseInt(n[2],10));var o=new Date,a=new Date(o.getTime()+6e4*(o.getTimezoneOffset()+t)),i=Math.abs(12-a.getHours()+a.getMinutes()/60);i>12&&(i=24-i);var r=.75*(1-i/12);return new f.c({fill:new w.a({color:[255,255,51,r]}),stroke:new p.a({color:"#ffffff"})})}}),g=new l.a({source:new c.a({layer:"toner"})}),m=new o.a({layers:[g,u],target:"map",view:new a.a({center:[0,0],zoom:2})}),d=$("#info");d.tooltip({animation:!1,trigger:"manual"});var v=function(e){d.css({left:e[0]+"px",top:e[1]-15+"px"});var t=m.forEachFeatureAtPixel(e,function(e){return e});t?d.tooltip("hide").attr("data-original-title",t.get("name")).tooltip("fixTitle").tooltip("show"):d.tooltip("hide")};m.on("pointermove",function(e){e.dragging?d.tooltip("hide"):v(m.getEventPixel(e.originalEvent))}),m.on("click",function(e){v(e.pixel)})}},[[293,0]]]);
//# sourceMappingURL=kml-timezones.js.map