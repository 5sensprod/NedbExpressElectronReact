const { app, BrowserWindow, session } = require('electron')
const path = require('path')
const createExpressApp = require('../backend/src/server')
const { initializeDB } = require('../backend/src/config/database')

// Définir userData avant toute autre opération
if (process.env.NODE_ENV === 'development') {
  const userDataPath = path.join(
    app.getPath('appData'),
    'electron-react-express-nedb-boilerplate'
  )
  app.setPath('userData', userDataPath)
}

console.log('Chemin userData dans Electron :', app.getPath('userData'))

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:3000')
  } else {
    mainWindow.loadFile(path.join(__dirname, '../frontend/build/index.html'))
  }
}

function startExpress() {
  const expressApp = createExpressApp()
  const port = process.env.PORT || 3001

  expressApp.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

app.whenReady().then(() => {
  session.defaultSession.clearCache()
  initializeDB() // Initialiser la base de données
  createWindow()
  startExpress()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
