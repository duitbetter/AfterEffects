/* nsc_folderStructure_BD_02.jsx
Copyright(c) 2019 nosleepcreative (Desmond Du). All rights reserved
Website: nosleepcreative.com

Name: nsc_folderStructure_BD_02
Version.1.0

Description:
This script creates a folder structure for broadcast design that can be use consistenly across the team

Instructions:
--
*/


alert("Folder Hierarchy Information \n Output — Comps to be rendered out  \n Main_Comps — Scene  \n Precomps — Elements \n\n Assets — Logos,Photos,lib footage \n Reference — references eg. pixel/canvas maps \n Projects — imported AEP goes here \n Renders — Rendered assets \n\n Sandbox — A temporary place to keep working files \n\n Created by Desmond Du \n 21 Oct 2019")


app.beginUndoGroup("createFolders");

// Put comma between folder names & NO space between
var str = "output,main_comps,precomps,assets,reference,projects,renders";
var arr = str.split(",");



//Create parent folders
for(i=0; i< arr.length; i++){
    app.project.items.addFolder("0"+ i + "_" + arr[i].toString().toUpperCase());
}

// Create subfolders using loop
var subfoldersStr = "——————01 LOGO,——————02 PHOTO,——————03 FOOTAGE"
var subfoldersArr = subfoldersStr.split(",");
for( i=0; i < subfoldersArr.length; i++){
    var assetSub = app.project.items.addFolder(subfoldersArr[i].toString());
    assetSub.parentFolder = app.project.item(5);
}




app.project.items.addFolder("Ω SANDBOX");
