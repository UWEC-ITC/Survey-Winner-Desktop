const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const pug = require('electron-pug')({ pretty: true});


function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.pug'),
    protocol: 'file:',
    slashes: true
  }))

  // open the devtools
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win == null) {
    createWindow()
  }
})
