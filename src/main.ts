import { app, BrowserWindow, Menu } from 'electron';
import environment from './environment';

export let mainWindow: Electron.BrowserWindow | undefined;
function createWindow() {
  if (environment.environment === 'production') {
    Menu.setApplicationMenu(null);
  }

  mainWindow = new BrowserWindow({ width: 650, height: 650, show: false });
  // console.log(localStorage.getItem("teste"))

  mainWindow.loadFile('renderer.html');
  mainWindow.maximize();

  if (environment.devTools) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = undefined;
  });

  mainWindow.on('ready-to-show', () => {
    if (mainWindow) {
      mainWindow.show();
    }
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === undefined) {
    createWindow();
  }
});
