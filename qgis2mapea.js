var proxy = false
var layerName = 'ej. Equipamientos municipales'
var fillColor = '#62e536'
var strokeColor = 'blue'
var bb = [0.000000,0.000000,0.000000,0.000000]
var basemaps = ['cdau', 'cdau_satelite', 'cdau_hibrido']

M.proxy(proxy);

mapajs = M.map({
    container: "map",
    controls:['mouse', 'mouse', 'scale', 'scale', 'location', 'location', 'Scaleline', 'Scaleline', 'layerswitcher', 'layerswitcher'],
    // zoom: 7,
    bbox : bb,
    wmcfiles: basemaps
  });
  
mapajs.setProjection ("EPSG:4326*d");

mapajs.addPlugin(new M.plugin.Searchstreet({"locality": "04001"}));

// Define estilo line

let estiloLayer = new M.style.Line({
    fill: {
       color: fillColor,
       width: 2
    }
});


// Crea capa

var layerQGIS2Mapea4 = new M.layer.GeoJSON(
  {name: layerName, 
  source: geo

});

layerQGIS2Mapea4.setStyle(estiloLayer);
mapajs.addLayers(layerQGIS2Mapea4);


