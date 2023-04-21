# Electron
## 官网
https://www.electronjs.org/zh/

## 基于vue2项目改造
https://wangdaodao.com/20200707/vue-cli3-electron.html

# 打包依赖下载报错解决
https://blog.csdn.net/cctvcqupt/article/details/87904368

## 设置全屏
```
function createWindow(){
    win = new BrowserWindow({
    fullscreen:true,
    webPreferences: {
    nodeIntegration: true
    }});
    win.loadFile('index.html');
    win.on('closed',()=>{
        console.log('closed');
    win = null;
    });
}
```


## 隐藏菜单栏
```js
const electron = require('electron') /*获取electron窗体的菜单栏*/ 
const Menu = electron.Menu /*隐藏electron创听的菜单栏*/ 
Menu.setApplicationMenu(null)
```
