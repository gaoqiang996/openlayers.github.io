var defaultStyle = {
  'Point': [new ol.style.Style({
    image: new ol.style.Circle({
      fill: new ol.style.Fill({
        color: 'rgba(255,255,0,0.5)'
      }),
      radius: 5,
      stroke: new ol.style.Stroke({
        color: '#ff0',
        width: 1
      })
    })
  })],
  'LineString': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#f00',
      width: 3
    })
  })],
  'Polygon': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(0,255,255,0.5)'
    }),
    stroke: new ol.style.Stroke({
      color: '#0ff',
      width: 1
    })
  })],
  'MultiPoint': [new ol.style.Style({
    image: new ol.style.Circle({
      fill: new ol.style.Fill({
        color: 'rgba(255,0,255,0.5)'
      }),
      radius: 5,
      stroke: new ol.style.Stroke({
        color: '#f0f',
        width: 1
      })
    })
  })],
  'MultiLineString': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#0f0',
      width: 3
    })
  })],
  'MultiPolygon': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(0,0,255,0.5)'
    }),
    stroke: new ol.style.Stroke({
      color: '#00f',
      width: 1
    })
  })]
};

var styleFunction = function(feature, resolution) {
  var featureStyleFunction = feature.getStyleFunction();
  if (featureStyleFunction) {
    return featureStyleFunction.call(feature, resolution);
  } else {
    return defaultStyle[feature.getGeometry().getType()];
  }
};

var map = new ol.Map({
  interactions: ol.interaction.defaults().extend([
    new ol.interaction.DragAndDrop({
      formatConstructors: [
        ol.format.GPX,
        ol.format.GeoJSON,
        ol.format.IGC,
        ol.format.KML,
        ol.format.TopoJSON
      ],
      styleFunction: styleFunction
    })
  ]),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.BingMaps({
        imagerySet: 'Aerial',
        key: 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3'
      })
    })
  ],
  renderer: ol.RendererHint.CANVAS,
  target: 'map',
  view: new ol.View2D({
    center: [0, 0],
    zoom: 2
  })
});

var displayFeatureInfo = function(pixel) {
  var features = [];
  map.forEachFeatureAtPixel(pixel, function(feature, layer) {
    features.push(feature);
  });
  if (features.length > 0) {
    var info = [];
    var i, ii;
    for (i = 0, ii = features.length; i < ii; ++i) {
      info.push(features[i].get('name'));
    }
    document.getElementById('info').innerHTML = info.join(', ') || '&nbsp';
  } else {
    document.getElementById('info').innerHTML = '&nbsp;';
  }
};

$(map.getViewport()).on('mousemove', function(evt) {
  var pixel = map.getEventPixel(evt.originalEvent);
  displayFeatureInfo(pixel);
});

map.on('singleclick', function(evt) {
  var pixel = evt.getPixel();
  displayFeatureInfo(pixel);
});