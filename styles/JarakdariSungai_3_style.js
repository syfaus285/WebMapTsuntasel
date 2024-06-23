var size = 0;
var placement = 'point';
function categories_JarakdariSungai_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '0 - 100m':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '101 - 200m':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,174,97,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '201 - 300m':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,192,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '301 - 500m':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(166,217,106,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '>500 m':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(26,150,65,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_JarakdariSungai_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Keterangan");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_JarakdariSungai_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
