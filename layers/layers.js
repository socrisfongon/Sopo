var wms_layers = [];


        var lyr_GooglecnNormal_0 = new ol.layer.Tile({
            'title': 'Google.cn Normal',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_1 = new ol.format.GeoJSON();
var features_Departamentos_1 = format_Departamentos_1.readFeatures(json_Departamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_1.addFeatures(features_Departamentos_1);
var lyr_Departamentos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_1, 
                style: style_Departamentos_1,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_1.png" /> Departamentos'
            });
var format_Muni_Cundinamarca_2 = new ol.format.GeoJSON();
var features_Muni_Cundinamarca_2 = format_Muni_Cundinamarca_2.readFeatures(json_Muni_Cundinamarca_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muni_Cundinamarca_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Muni_Cundinamarca_2.addFeatures(features_Muni_Cundinamarca_2);
var lyr_Muni_Cundinamarca_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Muni_Cundinamarca_2, 
                style: style_Muni_Cundinamarca_2,
                interactive: true,
                title: '<img src="styles/legend/Muni_Cundinamarca_2.png" /> Muni_Cundinamarca'
            });
var format_LimSopo_3 = new ol.format.GeoJSON();
var features_LimSopo_3 = format_LimSopo_3.readFeatures(json_LimSopo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimSopo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimSopo_3.addFeatures(features_LimSopo_3);
var lyr_LimSopo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimSopo_3, 
                style: style_LimSopo_3,
                interactive: true,
                title: '<img src="styles/legend/LimSopo_3.png" /> LimSopo'
            });
var format_Bogota_4 = new ol.format.GeoJSON();
var features_Bogota_4 = format_Bogota_4.readFeatures(json_Bogota_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bogota_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bogota_4.addFeatures(features_Bogota_4);
var lyr_Bogota_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bogota_4, 
                style: style_Bogota_4,
                interactive: true,
                title: '<img src="styles/legend/Bogota_4.png" /> Bogota'
            });

lyr_GooglecnNormal_0.setVisible(true);lyr_Departamentos_1.setVisible(true);lyr_Muni_Cundinamarca_2.setVisible(true);lyr_LimSopo_3.setVisible(true);lyr_Bogota_4.setVisible(true);
var layersList = [lyr_GooglecnNormal_0,lyr_Departamentos_1,lyr_Muni_Cundinamarca_2,lyr_LimSopo_3,lyr_Bogota_4];
lyr_Departamentos_1.set('fieldAliases', {'DPTO': 'DPTO', 'NOMBRE_DPT': 'NOMBRE_DPT', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', });
lyr_Muni_Cundinamarca_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WCOLGEN02_': 'WCOLGEN02_', 'WCOLGEN021': 'WCOLGEN021', 'DPTO': 'DPTO', 'NOMBRE_DPT': 'NOMBRE_DPT', 'MPIO': 'MPIO', 'NOMBRE_MPI': 'NOMBRE_MPI', 'NOMBRE_CAB': 'NOMBRE_CAB', 'CLASEMUN': 'CLASEMUN', 'MPIOS': 'MPIOS', 'ZONA': 'ZONA', 'OF_REG': 'OF_REG', 'REG_ZONAS': 'REG_ZONAS', 'HECTARES': 'HECTARES', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_LimSopo_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WCOLGEN02_': 'WCOLGEN02_', 'WCOLGEN021': 'WCOLGEN021', 'DPTO': 'DPTO', 'NOMBRE_DPT': 'NOMBRE_DPT', 'MPIO': 'MPIO', 'NOMBRE_MPI': 'NOMBRE_MPI', 'NOMBRE_CAB': 'NOMBRE_CAB', 'CLASEMUN': 'CLASEMUN', 'MPIOS': 'MPIOS', 'ZONA': 'ZONA', 'OF_REG': 'OF_REG', 'REG_ZONAS': 'REG_ZONAS', 'HECTARES': 'HECTARES', });
lyr_Bogota_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WCOLGEN02_': 'WCOLGEN02_', 'WCOLGEN021': 'WCOLGEN021', 'DPTO': 'DPTO', 'NOMBRE_DPT': 'NOMBRE_DPT', 'MPIO': 'MPIO', 'NOMBRE_MPI': 'NOMBRE_MPI', 'NOMBRE_CAB': 'NOMBRE_CAB', 'CLASEMUN': 'CLASEMUN', 'MPIOS': 'MPIOS', 'ZONA': 'ZONA', 'OF_REG': 'OF_REG', 'REG_ZONAS': 'REG_ZONAS', 'HECTARES': 'HECTARES', });
lyr_Departamentos_1.set('fieldImages', {'DPTO': 'TextEdit', 'NOMBRE_DPT': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_Muni_Cundinamarca_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WCOLGEN02_': 'TextEdit', 'WCOLGEN021': 'TextEdit', 'DPTO': 'TextEdit', 'NOMBRE_DPT': 'TextEdit', 'MPIO': 'TextEdit', 'NOMBRE_MPI': 'TextEdit', 'NOMBRE_CAB': 'TextEdit', 'CLASEMUN': 'TextEdit', 'MPIOS': 'TextEdit', 'ZONA': 'TextEdit', 'OF_REG': 'TextEdit', 'REG_ZONAS': 'TextEdit', 'HECTARES': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', });
lyr_LimSopo_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WCOLGEN02_': 'TextEdit', 'WCOLGEN021': 'TextEdit', 'DPTO': 'TextEdit', 'NOMBRE_DPT': 'TextEdit', 'MPIO': 'TextEdit', 'NOMBRE_MPI': 'TextEdit', 'NOMBRE_CAB': 'TextEdit', 'CLASEMUN': 'TextEdit', 'MPIOS': 'TextEdit', 'ZONA': 'TextEdit', 'OF_REG': 'TextEdit', 'REG_ZONAS': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_Bogota_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WCOLGEN02_': 'TextEdit', 'WCOLGEN021': 'TextEdit', 'DPTO': 'TextEdit', 'NOMBRE_DPT': 'TextEdit', 'MPIO': 'TextEdit', 'NOMBRE_MPI': 'TextEdit', 'NOMBRE_CAB': 'TextEdit', 'CLASEMUN': 'TextEdit', 'MPIOS': 'TextEdit', 'ZONA': 'TextEdit', 'OF_REG': 'TextEdit', 'REG_ZONAS': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_Departamentos_1.set('fieldLabels', {'DPTO': 'no label', 'NOMBRE_DPT': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', });
lyr_Muni_Cundinamarca_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'WCOLGEN02_': 'no label', 'WCOLGEN021': 'no label', 'DPTO': 'no label', 'NOMBRE_DPT': 'no label', 'MPIO': 'no label', 'NOMBRE_MPI': 'header label', 'NOMBRE_CAB': 'no label', 'CLASEMUN': 'no label', 'MPIOS': 'no label', 'ZONA': 'no label', 'OF_REG': 'no label', 'REG_ZONAS': 'no label', 'HECTARES': 'no label', });
lyr_LimSopo_3.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'WCOLGEN02_': 'no label', 'WCOLGEN021': 'no label', 'DPTO': 'no label', 'NOMBRE_DPT': 'no label', 'MPIO': 'no label', 'NOMBRE_MPI': 'no label', 'NOMBRE_CAB': 'no label', 'CLASEMUN': 'no label', 'MPIOS': 'no label', 'ZONA': 'no label', 'OF_REG': 'no label', 'REG_ZONAS': 'no label', 'HECTARES': 'no label', });
lyr_Bogota_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'WCOLGEN02_': 'no label', 'WCOLGEN021': 'no label', 'DPTO': 'no label', 'NOMBRE_DPT': 'no label', 'MPIO': 'no label', 'NOMBRE_MPI': 'no label', 'NOMBRE_CAB': 'no label', 'CLASEMUN': 'no label', 'MPIOS': 'no label', 'ZONA': 'no label', 'OF_REG': 'no label', 'REG_ZONAS': 'no label', 'HECTARES': 'no label', });
lyr_Bogota_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});