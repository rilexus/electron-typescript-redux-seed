// reattach electron exported modules to the window to make them available in the renderer (react)
const { contextBridge, ipcRenderer, nativeTheme} = require('electron');
contextBridge.exposeInMainWorld("ipcRenderer", ipcRenderer)