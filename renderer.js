// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// Dans le processus de rendu (page web).
const { ipcRenderer } = require('electron')
const fs = require('fs-extra')
let username = require("os").userInfo().username

function backupSave(){
    try {
        fs.copySync('/Users/'+username+'/AppData/Local/TekkenGame/Saved/SaveGames/TEKKEN7/', '/TekkenSaveBackup')
        console.log('Success!')
        snack('Success!')

    } catch (err) {
        console.error(err)
        snack(err)

    }
}

function importSave() {
    try {
        fs.copySync( '/TekkenSaveBackup', '/Users/'+username+'/AppData/Local/TekkenGame/Saved/SaveGames/TEKKEN7/')
        console.log('Success!')
        snack('Success!')
    } catch (err) {
        console.error(err)
        snack(err)
    }
}

function snack(msg) {
    // Get the snackbar DIV
    let x = document.getElementById("snackbar");
    x.innerText = msg
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
