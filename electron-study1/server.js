const {BrowserWindow} = require('electron');

let win = new BrowserWindow({
  width:800,
  height:600,
  show:false,
  backgroundColor: '#2e2c29'
});


win.once('ready-to-show', () => {
  win.show()
})
win.on('closed',()=>{
  win=null
});

let child = new BrowserWindow({
  parent: win,
  modal:true,
  show:false
})
child.loadURL('https://github.com')
child.once('ready-to-show', () => {
  child.show()
})



// 원격 URL 로드
win.loadURL('https://github.com')

// 또는 로컬 HTML 로드
win.loadURL(`file://${__dirname}/app/index.html`)