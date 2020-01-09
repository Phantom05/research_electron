var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './DOF-Launcher-win32-x64',
    outputDirectory: './dist/installer-win32-x64',
    exe: 'DOF-Launcher.exe',
    setupExe: 'DOF-installer.exe',
    authors:"DOF",
    description:"dof installer file"
});

resultPromise.then(function () {
    console.log("It worked!");
}, function (e) {
    console.log('No dice: ' + e.message);
});