// Basic init
// https://github.com/MarshallOfSound/electron-devtools-installer


const {IPC_ACTION_TYPES} = require('./src/ipc.action-types');
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} = require('electron-devtools-installer');
const {
  app,
  BrowserWindow,
  nativeTheme,
  ipcMain
} = require('electron');

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname);

function handlePingAction(action){
  return {type: IPC_ACTION_TYPES.PONG, payload: {}}
}

function getTheme(){
  return {type: IPC_ACTION_TYPES.GET_THEME, payload: nativeTheme.shouldUseDarkColors}
}

ipcMain.handle('[IPC]VIEW>MAIN', async (event, action) => {
  const { type } = action
  switch (type) {
    case IPC_ACTION_TYPES.PING: {
      return handlePingAction(action)
    }
    case IPC_ACTION_TYPES.GET_THEME: {
      return getTheme()
    }
    default: return
  }
})


// To avoid being garbage collected
let mainWindow



function installDevTools(){
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
}

if (process.env.NODE_ENV !== 'production') {
  installDevTools()
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences:{
      nodeIntegration: true,
      contextIsolation: true,
      preload: __dirname + '/preload.js'
  }});
  mainWindow.loadURL(`file://${__dirname}/index.html`)
}

app.whenReady().then(()=>{
  createWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
