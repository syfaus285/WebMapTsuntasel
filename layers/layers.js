var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIShadedRelief_2 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_JarakdariSungai_3 = new ol.format.GeoJSON();
var features_JarakdariSungai_3 = format_JarakdariSungai_3.readFeatures(json_JarakdariSungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JarakdariSungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JarakdariSungai_3.addFeatures(features_JarakdariSungai_3);
var lyr_JarakdariSungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JarakdariSungai_3, 
                style: style_JarakdariSungai_3,
                popuplayertitle: "Jarak dari Sungai",
                interactive: true,
    title: 'Jarak dari Sungai<br />\
    <img src="styles/legend/JarakdariSungai_3_0.png" /> 0 - 100m<br />\
    <img src="styles/legend/JarakdariSungai_3_1.png" /> 101 - 200m<br />\
    <img src="styles/legend/JarakdariSungai_3_2.png" /> 201 - 300m<br />\
    <img src="styles/legend/JarakdariSungai_3_3.png" /> 301 - 500m<br />\
    <img src="styles/legend/JarakdariSungai_3_4.png" /> >500 m<br />'
        });
var format_JarakdariGarisPantai_4 = new ol.format.GeoJSON();
var features_JarakdariGarisPantai_4 = format_JarakdariGarisPantai_4.readFeatures(json_JarakdariGarisPantai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JarakdariGarisPantai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JarakdariGarisPantai_4.addFeatures(features_JarakdariGarisPantai_4);
var lyr_JarakdariGarisPantai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JarakdariGarisPantai_4, 
                style: style_JarakdariGarisPantai_4,
                popuplayertitle: "Jarak dari Garis Pantai",
                interactive: true,
    title: 'Jarak dari Garis Pantai<br />\
    <img src="styles/legend/JarakdariGarisPantai_4_0.png" /> 0 - 500m<br />\
    <img src="styles/legend/JarakdariGarisPantai_4_1.png" /> 501 - 1000m<br />\
    <img src="styles/legend/JarakdariGarisPantai_4_2.png" /> 1001 - 1500m<br />\
    <img src="styles/legend/JarakdariGarisPantai_4_3.png" /> 1501 - 3000m<br />\
    <img src="styles/legend/JarakdariGarisPantai_4_4.png" /> > 3000m<br />'
        });
var format_Elevasi_5 = new ol.format.GeoJSON();
var features_Elevasi_5 = format_Elevasi_5.readFeatures(json_Elevasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elevasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elevasi_5.addFeatures(features_Elevasi_5);
var lyr_Elevasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elevasi_5, 
                style: style_Elevasi_5,
                popuplayertitle: "Elevasi",
                interactive: true,
    title: 'Elevasi<br />\
    <img src="styles/legend/Elevasi_5_0.png" /> > 100m<br />\
    <img src="styles/legend/Elevasi_5_1.png" /> 51 - 100m<br />\
    <img src="styles/legend/Elevasi_5_2.png" /> 26 - 50m<br />\
    <img src="styles/legend/Elevasi_5_3.png" /> 11 - 25m<br />\
    <img src="styles/legend/Elevasi_5_4.png" /> <= 10m<br />'
        });
var format_KemiringanLereng_6 = new ol.format.GeoJSON();
var features_KemiringanLereng_6 = format_KemiringanLereng_6.readFeatures(json_KemiringanLereng_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KemiringanLereng_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KemiringanLereng_6.addFeatures(features_KemiringanLereng_6);
var lyr_KemiringanLereng_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KemiringanLereng_6, 
                style: style_KemiringanLereng_6,
                popuplayertitle: "Kemiringan Lereng",
                interactive: true,
    title: 'Kemiringan Lereng<br />\
    <img src="styles/legend/KemiringanLereng_6_0.png" /> >40%<br />\
    <img src="styles/legend/KemiringanLereng_6_1.png" /> 16 - 40%<br />\
    <img src="styles/legend/KemiringanLereng_6_2.png" /> 6 - 15%<br />\
    <img src="styles/legend/KemiringanLereng_6_3.png" /> 3 - 5%<br />\
    <img src="styles/legend/KemiringanLereng_6_4.png" /> 0 - 2%<br />'
        });
var format_Kerawanantotal_7 = new ol.format.GeoJSON();
var features_Kerawanantotal_7 = format_Kerawanantotal_7.readFeatures(json_Kerawanantotal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kerawanantotal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kerawanantotal_7.addFeatures(features_Kerawanantotal_7);
var lyr_Kerawanantotal_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kerawanantotal_7, 
                style: style_Kerawanantotal_7,
                popuplayertitle: "Kerawanan total",
                interactive: true,
    title: 'Kerawanan total<br />\
    <img src="styles/legend/Kerawanantotal_7_0.png" /> Sangat Tinggi<br />\
    <img src="styles/legend/Kerawanantotal_7_1.png" /> Tinggi<br />\
    <img src="styles/legend/Kerawanantotal_7_2.png" /> Sedang<br />\
    <img src="styles/legend/Kerawanantotal_7_3.png" /> Rendah<br />\
    <img src="styles/legend/Kerawanantotal_7_4.png" /> Sangat Rendah<br />'
        });
var format_TingkatKerawananTsunami_8 = new ol.format.GeoJSON();
var features_TingkatKerawananTsunami_8 = format_TingkatKerawananTsunami_8.readFeatures(json_TingkatKerawananTsunami_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TingkatKerawananTsunami_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TingkatKerawananTsunami_8.addFeatures(features_TingkatKerawananTsunami_8);
var lyr_TingkatKerawananTsunami_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TingkatKerawananTsunami_8, 
                style: style_TingkatKerawananTsunami_8,
                popuplayertitle: "Tingkat Kerawanan Tsunami",
                interactive: true,
    title: 'Tingkat Kerawanan Tsunami<br />\
    <img src="styles/legend/TingkatKerawananTsunami_8_0.png" /> Sangat Tinggi<br />\
    <img src="styles/legend/TingkatKerawananTsunami_8_1.png" /> Tinggi<br />\
    <img src="styles/legend/TingkatKerawananTsunami_8_2.png" /> Sedang<br />\
    <img src="styles/legend/TingkatKerawananTsunami_8_3.png" /> Rendah<br />\
    <img src="styles/legend/TingkatKerawananTsunami_8_4.png" /> Sangat Rendah<br />'
        });
var format_BatasAdministrasiKecamatan_9 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_9 = format_BatasAdministrasiKecamatan_9.readFeatures(json_BatasAdministrasiKecamatan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_9.addFeatures(features_BatasAdministrasiKecamatan_9);
var lyr_BatasAdministrasiKecamatan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKecamatan_9, 
                style: style_BatasAdministrasiKecamatan_9,
                popuplayertitle: "Batas Administrasi Kecamatan",
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasiKecamatan_9.png" /> Batas Administrasi Kecamatan'
            });

lyr_OSMStandard_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_ESRIShadedRelief_2.setVisible(true);lyr_JarakdariSungai_3.setVisible(false);lyr_JarakdariGarisPantai_4.setVisible(false);lyr_Elevasi_5.setVisible(false);lyr_KemiringanLereng_6.setVisible(false);lyr_Kerawanantotal_7.setVisible(false);lyr_TingkatKerawananTsunami_8.setVisible(true);lyr_BatasAdministrasiKecamatan_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_ESRIShadedRelief_2,lyr_JarakdariSungai_3,lyr_JarakdariGarisPantai_4,lyr_Elevasi_5,lyr_KemiringanLereng_6,lyr_Kerawanantotal_7,lyr_TingkatKerawananTsunami_8,lyr_BatasAdministrasiKecamatan_9];
lyr_JarakdariSungai_3.set('fieldAliases', {'distance': 'distance', 'Keterangan': 'Keterangan', 'Skor': 'Skor', 'Bobot': 'Bobot', 'NB_Sungai': 'NB_Sungai', });
lyr_JarakdariGarisPantai_4.set('fieldAliases', {'Keterangan': 'Keterangan', 'Skor': 'Skor', 'Bobot': 'Bobot', 'NB_Pantai': 'NB_Pantai', });
lyr_Elevasi_5.set('fieldAliases', {'Keterangan': 'Keterangan', 'Skor': 'Skor', 'Bobot': 'Bobot', 'NB_elevasi': 'NB_elevasi', });
lyr_KemiringanLereng_6.set('fieldAliases', {'Keterangan': 'Keterangan', 'Skor': 'Skor', 'Bobot': 'Bobot', 'NB_Slope': 'NB_Slope', });
lyr_Kerawanantotal_7.set('fieldAliases', {'ZonaBahaya': 'Kerawanan', 'Luas': 'Luas (km^2)', });
lyr_TingkatKerawananTsunami_8.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kerawanan': 'Kerawanan', 'Luas': 'Luas (km^2)', });
lyr_BatasAdministrasiKecamatan_9.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_JarakdariSungai_3.set('fieldImages', {'distance': 'TextEdit', 'Keterangan': 'TextEdit', 'Skor': 'TextEdit', 'Bobot': 'TextEdit', 'NB_Sungai': 'TextEdit', });
lyr_JarakdariGarisPantai_4.set('fieldImages', {'Keterangan': 'TextEdit', 'Skor': 'TextEdit', 'Bobot': 'TextEdit', 'NB_Pantai': 'TextEdit', });
lyr_Elevasi_5.set('fieldImages', {'Keterangan': 'TextEdit', 'Skor': 'TextEdit', 'Bobot': 'TextEdit', 'NB_elevasi': 'TextEdit', });
lyr_KemiringanLereng_6.set('fieldImages', {'Keterangan': 'TextEdit', 'Skor': 'TextEdit', 'Bobot': 'TextEdit', 'NB_Slope': 'TextEdit', });
lyr_Kerawanantotal_7.set('fieldImages', {'ZonaBahaya': 'TextEdit', 'Luas': 'TextEdit', });
lyr_TingkatKerawananTsunami_8.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kerawanan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_BatasAdministrasiKecamatan_9.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_JarakdariSungai_3.set('fieldLabels', {'distance': 'no label', 'Keterangan': 'inline label - visible with data', 'Skor': 'no label', 'Bobot': 'no label', 'NB_Sungai': 'no label', });
lyr_JarakdariGarisPantai_4.set('fieldLabels', {'Keterangan': 'inline label - visible with data', 'Skor': 'no label', 'Bobot': 'no label', 'NB_Pantai': 'no label', });
lyr_Elevasi_5.set('fieldLabels', {'Keterangan': 'inline label - visible with data', 'Skor': 'no label', 'Bobot': 'no label', 'NB_elevasi': 'no label', });
lyr_KemiringanLereng_6.set('fieldLabels', {'Keterangan': 'inline label - visible with data', 'Skor': 'no label', 'Bobot': 'no label', 'NB_Slope': 'no label', });
lyr_Kerawanantotal_7.set('fieldLabels', {'ZonaBahaya': 'no label', 'Luas': 'inline label - visible with data', });
lyr_TingkatKerawananTsunami_8.set('fieldLabels', {'Kecamatan': 'inline label - visible with data', 'Kerawanan': 'inline label - visible with data', 'Luas': 'inline label - visible with data', });
lyr_BatasAdministrasiKecamatan_9.set('fieldLabels', {'LEFT_FID': 'inline label - always visible', 'RIGHT_FID': 'inline label - always visible', });
lyr_BatasAdministrasiKecamatan_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});