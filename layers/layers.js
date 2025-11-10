var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UMTVeolia2025_1 = new ol.format.GeoJSON();
var features_UMTVeolia2025_1 = format_UMTVeolia2025_1.readFeatures(json_UMTVeolia2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMTVeolia2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMTVeolia2025_1.addFeatures(features_UMTVeolia2025_1);
var lyr_UMTVeolia2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMTVeolia2025_1, 
                style: style_UMTVeolia2025_1,
                popuplayertitle: 'UMT Veolia 2025',
                interactive: true,
    title: 'UMT Veolia 2025<br />\
    <img src="styles/legend/UMTVeolia2025_1_0.png" /> EP<br />\
    <img src="styles/legend/UMTVeolia2025_1_1.png" /> EU<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_UMTVeolia2025_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_UMTVeolia2025_1];
lyr_UMTVeolia2025_1.set('fieldAliases', {'Ville': 'Ville', 'Nom': 'Nom', 'Code_INSEE': 'Code_INSEE', 'Type': 'Type', 'Capacité': 'Capacité', 'Traitement': 'Traitement', 'x_centre': 'x_centre', 'y_centre': 'y_centre', 'Image': 'Image', 'Année mis': 'Année mis', 'Année ret': 'Année ret', 'Type efflu': 'Type efflu', });
lyr_UMTVeolia2025_1.set('fieldImages', {'Ville': 'TextEdit', 'Nom': 'TextEdit', 'Code_INSEE': 'TextEdit', 'Type': 'TextEdit', 'Capacité': 'TextEdit', 'Traitement': 'TextEdit', 'x_centre': 'TextEdit', 'y_centre': 'TextEdit', 'Image': 'TextEdit', 'Année mis': 'TextEdit', 'Année ret': 'TextEdit', 'Type efflu': 'TextEdit', });
lyr_UMTVeolia2025_1.set('fieldLabels', {'Ville': 'inline label - visible with data', 'Nom': 'hidden field', 'Code_INSEE': 'hidden field', 'Type': 'inline label - visible with data', 'Capacité': 'inline label - visible with data', 'Traitement': 'inline label - visible with data', 'x_centre': 'hidden field', 'y_centre': 'hidden field', 'Image': 'inline label - visible with data', 'Année mis': 'inline label - visible with data', 'Année ret': 'inline label - visible with data', 'Type efflu': 'inline label - visible with data', });
lyr_UMTVeolia2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});