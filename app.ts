
// import express from 'express';
// @ts-ignore
const express = require('express')
// const fs =require('fs')
const path = require('path');
const app = express();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server, {
//   cors: {
//     origin: "http://127.0.0.1:8080/"
//   });
const server = require("http").Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://127.0.0.1:8080"
  }});
// const expressWs = require('express-ws') // 引入 WebSocket 包
// //foreach client用
// let wss = expressWs(app)//为当前路由添加.ws方法
// var aWss = wss.getWss('/');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');

// 设置跨域访问
// app.all('*', function (req:any, res:any, next:any) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,x-token");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
//   else next();
// });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);





app.use('/images/', express.static(path.join(__dirname, './images/')));
app.use("/assets/", express.static(path.join(__dirname, './assets/')));


// app.ws('/ws/a', function(ws:any, req:any){
//   ws.on('message', function(msg:any) {
//     // aWss.clients.forEach((client:any)=> {
//     //   client.send(msg);
//     // });
//     [...aWss.clients][0].send(msg);
//   });
//   console.log(aWss.clients)
//   ws.send('test');
//
// })

/*在线人员*/
var onLineUsers = {};
/* 在线人数*/
var onLineCounts = 0;

/*io监听到存在链接。此时回调一个socket进行socket监听*/
// io.on('connection', function (socket:any) {
//   console.log('a user connected');
//   /*监听新用户增加*/
//   socket.on('login', function (user:any) {
//     "use strict";
//     //暂存socket.name 为user.userId;在用户退出时候将会用到
//     socket.name = user.userId;
//     /*不存在则增加 */
//     if (!onLineUsers.hasOwnProperty(user.userId)) {
//       //不存在则增加
//       // @ts-ignore
//       onLineUsers[user.userId] = user.userName;
//       onLineCounts++;
//     }
//     /*一个用户新增加，向全部client监听login的socket的实例发送响应，响应内容为一个对象*/
//     io.emit('login', {onLineUsers: onLineUsers, onLineCounts: onLineCounts, user: user});
//     console.log(user.userName, "增加了聊天室");//在server控制台中打印么么么用户增加到了聊天室
//   });
//   /*监听用户退出聊天室*/
//   socket.on('disconnect', function () {
//     "use strict";
//     if (onLineUsers.hasOwnProperty(socket.name)) {
//       // @ts-ignore
//       var user = {userId: socket.name, userName: onLineUsers[socket.name]};
//       // @ts-ignore
//       delete onLineUsers[socket.name];
//       onLineCounts--;
//
//       /*向全部client广播该用户退出群聊*/
//       io.emit('logout', {onLineUsers: onLineUsers, onLineCounts: onLineCounts, user: user});
//       console.log(user.userName, "退出群聊");
//     }
//   })
//   /*监听到用户发送了消息。就使用io广播信息。信息被全部client接收并显示。注意。假设client自己发送的也会接收到这个消息，故在client应当存在这的推断。是否收到的消息是自己发送的。故在emit时，应该将用户的id和信息封装成一个对象进行广播*/
//   socket.on('message', function (obj:any) {
//     "use strict";
//     /*监听到实用户发消息，将该消息广播给全部client*/
//     io.emit('message', obj);
//     console.log(obj.userName, "说了:", obj.content);
//   });
// });


io.on('connection', function(socket:any) {

  console.log('客户端已经连接')
  socket.send('客户端已经连接')
  socket.on('message', function(msg:any) {

    console.log(msg)

    socket.send('服务端 ' + msg)

  })

})

server.listen(4001);
module.exports = app;

