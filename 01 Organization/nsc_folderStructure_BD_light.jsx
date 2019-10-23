app.beginUndoGroup("createFolderStructure_BD");

// Put comma between folder names & NO space between
var str = "main_comps,precomps,assets,reference,projects";
var arr = str.split(",");

for(i=0; i< arr.length; i++){
    app.project.items.addFolder("0"+ i + "_" + arr[i].toString().toUpperCase());
}
app.project.items.addFolder("Ω SANDBOX");
