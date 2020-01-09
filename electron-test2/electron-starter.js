const {BrowserWindow,app} = require("electron");
const path = require("path");
const url = require("url");
var execFile = require('child_process').execFile;
// Keep a global reference of the window object, if you don’t, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
function createWindow() {
  // Create the browser window.
  console.log("electron=starter.jssdfsdf");
  mainWindow = new BrowserWindow({width: 800, height: 600});
  execute('D:\\dev\\research-express\\no-internet-express\\no-internet-express-win.exe')
 // and load the index.html of the app.
//  var startUrl = process.env.ELECTRON_START_URL || url.format({
//     pathname: path.join(__dirname, "build/index.html"),
//     protocol: "file:",
//     slashes: true
//  });
 var startUrl  =`http://127.0.0.1:6322/`
 console.log(startUrl,'startUrl');
 mainWindow.loadURL(startUrl);
 // Open the DevTools.
 // mainWindow.webContents.openDevTools();
 // Emitted when the window is closed.
 mainWindow.on("closed", function () {
    mainWindow = null
 })
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);
// Quit when all windows are closed.
app.on("window-all-closed", function () {
 // On OS X it is common for applications and their menu bar
 // to stay active until the user quits explicitly with Cmd + Q
 if (process.platform !== "darwin") {
   app.quit()
 }
});
app.on("activate", function () {
 // On OS X it’s common to re-create a window in the app when the
 // dock icon is clicked and there are no other windows open.
 if (mainWindow === null) {
   createWindow()
 }
});


function execute(filePath){
  return new Promise((resolve, reject) => {
    execFile(filePath,
      function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        resolve({stdout,stderr});
        if (error !== null) {
          console.log('exec error: ' + error);
          resolve(error);
        }
    });
  }); 
}