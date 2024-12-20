const {contextBridge, ipcRenderer} = require('electron')
contextBridge.exposeInMainWorld('darkMode',{
    toggle: ()=> ipcRenderer.invoke('dark-mode-toggle'),
    system: ()=> ipcRenderer.invoke('dark-mode-system')
})
contextBridge.exposeInMainWorld('database', {
    getData: () => ipcRenderer.invoke('get-data')
  });