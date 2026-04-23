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

        var lyr_ESRIBoundariesPlaces_2 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Home_3 = new ol.format.GeoJSON();
var features_Home_3 = format_Home_3.readFeatures(json_Home_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Home_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Home_3.addFeatures(features_Home_3);
var lyr_Home_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Home_3, 
                style: style_Home_3,
                popuplayertitle: 'Home',
                interactive: false,
                title: '<img src="styles/legend/Home_3.png" /> Home'
            });
var format_VendorNetwork_4 = new ol.format.GeoJSON();
var features_VendorNetwork_4 = format_VendorNetwork_4.readFeatures(json_VendorNetwork_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VendorNetwork_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VendorNetwork_4.addFeatures(features_VendorNetwork_4);
var lyr_VendorNetwork_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VendorNetwork_4, 
                style: style_VendorNetwork_4,
                popuplayertitle: 'Vendor Network',
                interactive: true,
                title: '<img src="styles/legend/VendorNetwork_4.png" /> Vendor Network'
            });
var format_MobilePopUp_5 = new ol.format.GeoJSON();
var features_MobilePopUp_5 = format_MobilePopUp_5.readFeatures(json_MobilePopUp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MobilePopUp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MobilePopUp_5.addFeatures(features_MobilePopUp_5);
var lyr_MobilePopUp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MobilePopUp_5, 
                style: style_MobilePopUp_5,
                popuplayertitle: 'Mobile Pop-Up',
                interactive: true,
                title: '<img src="styles/legend/MobilePopUp_5.png" /> Mobile Pop-Up'
            });
var group_EssentialTools = new ol.layer.Group({
                                layers: [lyr_Home_3,lyr_VendorNetwork_4,lyr_MobilePopUp_5,],
                                fold: 'open',
                                title: 'Essential Tools™ '});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,lyr_ESRIGraydark_1,lyr_ESRIBoundariesPlaces_2,],
                                fold: 'open',
                                title: 'Basemaps'});

lyr_ESRISatellite_0.setVisible(false);lyr_ESRIGraydark_1.setVisible(true);lyr_ESRIBoundariesPlaces_2.setVisible(true);lyr_Home_3.setVisible(true);lyr_VendorNetwork_4.setVisible(true);lyr_MobilePopUp_5.setVisible(true);
var layersList = [group_Basemaps,group_EssentialTools];
lyr_Home_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Address': 'Address', 'Program': 'Program', 'Customer ID': 'Customer ID', });
lyr_VendorNetwork_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Address': 'Address', });
lyr_MobilePopUp_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Address': 'Address', });
lyr_Home_3.set('fieldImages', {'fid': '', 'Name': '', 'Address': '', 'Program': '', 'Customer ID': '', });
lyr_VendorNetwork_4.set('fieldImages', {'fid': '', 'Name': '', 'Address': '', });
lyr_MobilePopUp_5.set('fieldImages', {'fid': '', 'Name': '', 'Address': '', });
lyr_Home_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Address': 'no label', 'Program': 'no label', 'Customer ID': 'no label', });
lyr_VendorNetwork_4.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', 'Address': 'inline label - always visible', });
lyr_MobilePopUp_5.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Address': 'inline label - always visible', });
lyr_MobilePopUp_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});