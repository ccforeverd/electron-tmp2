
import { BrowserWindow } from 'electron'

declare const TABS_WINDOW_WEBPACK_ENTRY: string
declare const TABS_WINDOW_PRELOAD_WEBPACK_ENTRY: string

export function createWindow (): void {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: true,
      webviewTag: true,
      preload: TABS_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL(TABS_WINDOW_WEBPACK_ENTRY)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}
