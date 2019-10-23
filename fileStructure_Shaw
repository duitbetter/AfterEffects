// Version 3 REGEX
// User variable
/*
Folder
    subFolder
        SubFolder


REGEX = identify carriage return & indent as next level, set parent folder to the one above


*/

// VERSION 2 - USING STR TO ARRAY(uppercase and indexed) TO LOOP
app.beginUndoGroup("createFolderStructure");

// Put comma between folder names & NO space between
var str = "output,main_comps,precomps,assets,reference,projects,renders";
var arr = str.split(",");



//Create parent folders
for(i=0; i< arr.length; i++){
    app.project.items.addFolder("0"+ i + "_" + arr[i].toString().toUpperCase());
}

// Create subfolders using loop
var subfoldersStr = "3D,FOOTAGE,RASTER,VECTOR"
var subfoldersArr = subfoldersStr.split(",");
for( i=0; i < subfoldersArr.length; i++){
    var assetSub = app.project.items.addFolder(subfoldersArr[i].toString());
    assetSub.parentFolder = app.project.item(4);
}

// Create 2nd level subfolders using loop
var ssStr = "AI,EPS"
var ssArr = ssStr.split(",");
for( i=0; i < ssArr.length; i++){
    var ssSub = app.project.items.addFolder(ssArr[i].toString());
    ssSub.parentFolder = app.project.item(8);
}

var ssStr = "JPEG,PSD,TIFF"
var ssArr = ssStr.split(",");
for( i=0; i < ssArr.length; i++){
    var ssSub = app.project.items.addFolder(ssArr[i].toString());
    ssSub.parentFolder = app.project.item(7);
}

var ssStr = "QUICKTIME,SEQUENCE"
var ssArr = ssStr.split(",");
for( i=0; i < ssArr.length; i++){
    var ssSub = app.project.items.addFolder(ssArr[i].toString());
    ssSub.parentFolder = app.project.item(6);
}


app.project.items.addFolder("Ω SANDBOX");
/* 2.1 Manually create subfolders
var topFolder = app.project.item(4);
topFolder.parentFolder = app.project.rootFolder;

var subFolder = app.project.items.addFolder("3D");
subFolder.parentFolder = topFolder;

var subFolder = app.project.items.addFolder("FOOTAGE");
subFolder.parentFolder = topFolder;

var subFolder = app.project.items.addFolder("RASTER");
subFolder.parentFolder = topFolder;

var subFolder = app.project.items.addFolder("VECTOR");
subFolder.parentFolder = topFolder;

/*
// VERSION 1
app.project.items.addFolder("02_MAIN_COMPS");
app.project.items.addFolder("03_PRE_COMPS");
app.project.items.addFolder("04_ASSETS");
app.project.items.addFolder("03_PRE_COMPS");
app.project.items.addFolder("05_REFERENCE");
app.project.items.addFolder("07_RENDERS");
app.project.items.addFolder("Ω SANDBOX");

*/
