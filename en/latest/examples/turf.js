(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{384:function(e,t,r){"use strict";r.r(t);var a=r(3),n=r(2),o=r(31),s=r(21),u=r(5),w=r(4),c=r(11),d=r(9),i=new c.a;fetch("data/geojson/roads-seoul.geojson").then((function(e){return e.json()})).then((function(e){for(var t=new o.a,r=t.readFeatures(e)[0],a=t.writeFeatureObject(r),n=turf.lineDistance(a,"kilometers"),s=1;s<=n/.2;s++){var u=turf.along(a,.2*s,"kilometers"),w=t.readFeature(u);w.getGeometry().transform("EPSG:4326","EPSG:3857"),i.addFeature(w)}r.getGeometry().transform("EPSG:4326","EPSG:3857"),i.addFeature(r)}));var f=new s.a({source:i}),m=new u.a({source:new d.b});new a.a({layers:[m,f],target:document.getElementById("map"),view:new n.a({center:Object(w.f)([126.980366,37.52654]),zoom:15})})}},[[384,0]]]);
//# sourceMappingURL=turf.js.map