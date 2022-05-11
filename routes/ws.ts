const express = require('express')
var router = express.Router();
const expressWs = require('express-ws') // 引入 WebSocket 包
//foreach client用
let wss = expressWs(router)//为当前路由添加.ws方法
var aWss = wss.getWss('/');

router.ws('/a', function(ws:any, req:any){
    ws.on('message', function(msg:any) {
        aWss.clients.forEach((client:any)=> {
            client.send(msg);
        });
    });
    console.log(aWss.clients)
    ws.send('test');

})

module.exports = router;

