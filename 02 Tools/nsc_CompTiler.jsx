/* CompTiler.jsx
Copyright(c) 2019 nosleepcreative (Desmond Du). All rights reserved
Website: nosleepcreative.com

Name: CompTiler
Version.1.0

Description:
This script tiles all layers in a composition into a grid. The number of columns can be changed in the Start Tile Null Layer.

Instructions:
Simply run the script on a composition with your precomps, and it will inject the expressions into the position and scale parameters. Then go to the Effects panel of the first null layer, and change the slider value for Columns.
*/

app.beginUndoGroup("CompTiler");

myComp = app.project.activeItem;

// For Position expression:
var gridPos = '\
    var controlLayer = thisComp.layer("Start Tile");\
    var numColumns = Math.floor(thisComp.layer("Start Tile").effect("Columns")("Slider").value);\
    var Mmargins = Math.floor(thisComp.layer("Start Tile").effect("Margins")("Slider").value);\
    var tileIndex = index - controlLayer.index-1;\
    var columnIndex = tileIndex%numColumns;\
    var rowIndex = Math.floor(tileIndex/numColumns);\
    var columnWidth = thisComp.width/numColumns ;\
    var firstTile = thisComp.layer(controlLayer.index+1);\
    var rowHeight = firstTile.height/firstTile.width*columnWidth;\
    var xPos = columnWidth*(columnIndex+.5);\
    var yPos = rowHeight*(rowIndex+.5);\
    [xPos, yPos];\
    '

//For Scale expression:
var gridScale = '\
    var controlLayer = thisComp.layer("Start Tile");\
    var numColumns = Math.floor(thisComp.layer("Start Tile").effect("Columns")("Slider").value);\
    var Mmargins = Math.floor(thisComp.layer("Start Tile").effect("Margins")("Slider").value);\
    var columnWidth = thisComp.width/numColumns ;\
    var firstTile = thisComp.layer(controlLayer.index+1);\
    var rowHeight = firstTile.width/firstTile.height*columnWidth;\
    var xyScale = columnWidth/width*100;\
    [xyScale, xyScale];\
';


// Select all layers and add expressions
for(var i = 1; i <= myComp.numLayers; i++){
    myComp.layer(i).transform.position.expression = gridPos;
    myComp.layer(i).transform.scale.expression = gridScale;
}


// Create Start Tile null layer & Slider Effect
var myNull= myComp.layers.addNull();
myNull.name= "Start Tile";
var myColumns = myNull.property("Effects").addProperty("Slider Control");
myColumns.name = "Columns"
myColumns.property(1).setValue(5);
var myMargins = myNull.property("Effects").addProperty("Slider Control");
myMargins.name = "Margins"


// Create End tile null layer

var myNull2= myComp.layers.addNull();
myNull2.name= "End Tile";
myNull2.moveToEnd();
