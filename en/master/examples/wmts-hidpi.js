(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{380:function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(3),w=t(145),o=t(63),r=t(6),p=t(97),s=o.a>1,c=s?"bmaphidpi":"geolandbasemap",l=s?2:1,m=new n.a({target:"map",view:new i.a({center:[1823849,6143760],zoom:11})});fetch("https://www.basemap.at/wmts/1.0.0/WMTSCapabilities.xml").then(function(e){return e.text()}).then(function(e){var a=(new w.a).read(e),t=Object(p.b)(a,{layer:c,matrixSet:"google3857",style:"normal"});t.tilePixelRatio=l,m.addLayer(new r.a({source:new p.a(t)}))})}},[[380,0]]]);
//# sourceMappingURL=wmts-hidpi.js.map