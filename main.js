const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: false,
        fullscreen: true,
        backgroundColor: '#010409',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
    globalShortcut.register('CommandOrControl+Q', () => { app.quit(); });
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) { createWindow(); }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { app.quit(); }
});