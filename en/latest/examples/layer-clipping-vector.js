(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{308:function(e,o,n){"use strict";n.r(o);var a=n(3),t=n(2),r=n(5),c=n(21),w=n(11),s=n(31),i=n(9),l=n(10),u=n(20),p=n(45),b=n(4),d=new r.a({source:new i.b}),f=new c.a({style:null,source:new w.a({url:"./data/geojson/switzerland.geojson",format:new s.a})}),g=new l.c({fill:new u.a({color:"black"})});d.on("postrender",(function(e){e.context.globalCompositeOperation="destination-in";var o=Object(p.b)(e);f.getSource().forEachFeature((function(e){o.drawFeature(e,g)})),e.context.globalCompositeOperation="source-over"}));new a.a({layers:[d,f],target:"map",view:new t.a({center:Object(b.f)([8.23,46.86]),zoom:7})})}},[[308,0]]]);
//# sourceMappingURL=layer-clipping-vector.js.map