var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIGraydark_1 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Home_2 = new ol.format.GeoJSON();
var features_Home_2 = format_Home_2.readFeatures(json_Home_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Home_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Home_2.addFeatures(features_Home_2);
var lyr_Home_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Home_2, 
                style: style_Home_2,
                popuplayertitle: 'Home',
                interactive: false,
                title: '<img src="styles/legend/Home_2.png" /> Home'
            });
var format_MobilePopUp_3 = new ol.format.GeoJSON();
var features_MobilePopUp_3 = format_MobilePopUp_3.readFeatures(json_MobilePopUp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MobilePopUp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MobilePopUp_3.addFeatures(features_MobilePopUp_3);
var lyr_MobilePopUp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MobilePopUp_3, 
                style: style_MobilePopUp_3,
                popuplayertitle: 'Mobile Pop-Up',
                interactive: true,
                title: '<img src="styles/legend/MobilePopUp_3.png" /> Mobile Pop-Up'
            });
var group_EssentialTools = new ol.layer.Group({
                                layers: [lyr_Home_2,lyr_MobilePopUp_3,],
                                fold: 'open',
                                title: 'Essential Tools™ '});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,lyr_ESRIGraydark_1,],
                                fold: 'open',
                                title: 'Basemaps'});

lyr_ESRISatellite_0.setVisible(false);lyr_ESRIGraydark_1.setVisible(true);lyr_Home_2.setVisible(true);lyr_MobilePopUp_3.setVisible(true);
var layersList = [group_Basemaps,group_EssentialTools];
lyr_Home_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Address': 'Address', 'Program': 'Program', 'Customer ID': 'Customer ID', });
lyr_MobilePopUp_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Address': 'Address', });
lyr_Home_2.set('fieldImages', {'fid': '', 'Name': '', 'Address': '', 'Program': '', 'Customer ID': '', });
lyr_MobilePopUp_3.set('fieldImages', {'fid': '', 'Name': '', 'Address': '', });
lyr_Home_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Address': 'no label', 'Program': 'no label', 'Customer ID': 'no label', });
lyr_MobilePopUp_3.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Address': 'inline label - always visible', });
lyr_MobilePopUp_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});