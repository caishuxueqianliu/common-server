import {Gfs,Client} from "oicq";
const express = require('express');
const router = express.Router();
const cryto = require('crypto')
const oicq = require("oicq")
const zaoCi = require('../config/zao')
const defaultConfig = require('../config/config');
import { Request, Response, NextFunction} from 'express';
const cheerio = require('cheerio');
const Iconv = require('iconv-lite');
const rp = require('request-promise');
const Log = require('../models/log')
const getIp = require('../utils/getIp')
const handle = require('../handle/index')
// 群配置
const qunList =
    defaultConfig.qunList
// 托管的QQ号配置
const {
    uin,
    pwd
} =
    defaultConfig.account

const password_md5 = cryto.createHash('md5').update(pwd).digest('hex')
const config = {
    platform: 3, //登陆类型 1手机 2平板 3手表(不支持部分群事件)
    log_level: "info", //日志级别，有trace,debug,info,warn,error,fatal,off
    kickoff: true, //被挤下线是否在3秒后反挤对方
    ignore_self: true, //群聊是否无视自己的发言
}
const client = oicq.createClient(uin, config);
client.login(password_md5)

/**
 * 滑动验证码
 */
client.on("system.login.slider", (res:any) => {
    process.stdin.once("data", (input:string) => {
        client.submitSlider(input) //提交短信验证码
    })
})


client.on("system.online", () => {
    console.log("Logged in!")
    // var Gfss = new oicq.Gfs(client,830448115)
    // Gfss.dir('/',0,100).then((res:any)=>{
    //     console.log(res)
    //     Gfss.download( 'a9bfcce8-75b8-45a7-b61a-e6742b21f52f').then((res:any)=>{console.log(res)}).catch((err:any)=>{
    //         console.log(err)
    //     })
    // }).catch((err:any)=>{
    //     console.log(err)
    // })
    }
)
client.on("system.login.error", (e:any)=> console.log(e))



// 登录
// client.on("system.login.captcha", () => {
//     process.stdin.once("data", input => {
//         client.captchaLogin(input);
//     });
// });

/**
 * 监听信息
 */
client.on("message", (data:any) => {
    console.log(data.message)
    // 私聊小助手时
    // if (data.message_type == "private") {
    //     setTimeout(() => {
    //         defaultMessage(data)
    //     }, 0)
    // }
    // 逆天邪神群消息处理
    if (qunList[data.group_id] && data.group_id == Object.keys(qunList)[0]) {
        // @小助手时处理 注意当前 代码只支持 @小助手 写在前面
       if (data.message[0].type == "at" && data.message[0].qq == uin) {
           let text = data.message.length>1 ? data.message[1].text : ' '
            setTimeout(() => {
                messageProcess(data, text)
            }, 0)
      }
   }

   // 打包小助手群消息处理
    else if (qunList[data.group_id] && data.group_id == Object.keys(qunList)[1]) {
        // @小助手时处理 注意当前 代码只支持 @小助手 写在前面
        if (data.message[0].type == "at" && data.message[0].qq == uin) {
            let text = data.message.length > 1 ? data.message[1].text : ' '
            setTimeout(() => {
                messageProcess1(data, text)
            }, 0)
        }
    }
})
client.on("request", (data:any) => console.log(data));
client.on("notice", (data:any) => console.log(data));


// client.acquireGfs(830448115)
/**
 * 逆天邪神聊接收回复处理
 * @param data
 * @param text
 */
 async function messageProcess(data:any, text:string) {
    let str = text.replace(/^\s*|\s*$/g,"");
    switch (str) {
        case "早啊":
        case "早安":
        case "早":
            const text = zaoCi[getRandomInt(100)]
            client.sendGroupMsg(data.group_id, [
                {type:"at",qq:data.sender.user_id},
                {type:'text',text:'\n'  +  text}
                ])
            break
        case "更了么":
        case "更了吗":
            try {
                const method:string = 'GET'
                const options = {
                    url: 'http://book.zongheng.com/book/408586.html',
                    method,
                    encoding: null,
                    headers: method == 'POST' ? {} : {
                        'User-Agent': 'Mozilla/5.0',
                    }
                };
                const htmlString = await rp(options)
                const body = Iconv.decode(htmlString, 'utf-8').toString()
                let $ = cheerio.load(body, {
                    ignoreWhitespace: true
                })
                const t1 = $('.book-new-chapter>h4').text()
                const tit =  $('.tit>a').text()
                let time = $('.time').text()
                let timeArr = time.split('·')
                let timeStr1 = timeArr[1].replace('\n','').replace(' ','')
                let timeStr2 = timeArr[2].replace('\n','').replace(' ','')
                client.sendGroupMsg(data.group_id,[
                    {type:"at",qq:data.sender.user_id},
                    {type:'text',text:'\n'},
                    {type:'text',text:t1 + ': '},
                    {type:'text',text:tit + '\n'},
                    {type:'text',text:'最近更新: '+ timeStr1 +'\n'},
                    {type:'text',text:timeStr2},
                ])

            }
            catch (e) {
                client.sendGroupMsg(data.group_id,e)
            }

            break
        default:
            client.sendGroupMsg(data.group_id, '嘤嘤嘤～ 今天也是充满希望的一天～')
            break
    }
}

/**
 * 打包小助手群聊接收回复处理
 * @param data
 * @param text
 */
 async function messageProcess1(data:any, text:string) {
    let str;
    str = text.replace(/^\s*|\s*$/g,"");

    switch (str) {
        case '更新blog':
        case '更新博客':
            handle.blog(client,data)
            break
        case "查询":
            const logs = await Log.findAll()
            if(!logs.length){
                client.sendGroupMsg(data.group_id, [
                    {type:"at",qq:data.sender.user_id},
                    {type:'text',text:'\n'  +  '当前log表为空！'}
                ])
                return
            }


            let handleLogs = logs.map((item:any,index:number)=>{
                let str = JSON.stringify( {
                    index,
                    '访问者ip':item.ip.replace('::ffff:',''),
                    '访问时间':new Date(item.createdAt).toLocaleString()
                })


                return str

            })
            handleLogs = handleLogs.join('\n')
            client.sendGroupMsg(data.group_id, [
                {type:"at",qq:data.sender.user_id},
                {type:'text',text:'\n'  +  handleLogs}
            ])
            break
        case "清空":
            // 截断表格
            let s = await Log.destroy({
                truncate: true
            });
            if(s == 0) {
                s = '清空log表成功！'
            }
            client.sendGroupMsg(830448115, [
                {type:"at",qq:470290171},
                {type:'text',text:'\n' +  s}
            ])
            break

        default:


            break
    }
}



/**
 * 处理私聊
 * @param data
 */
function defaultMessage(data:any) {
 client.sendPrivateMsg(data.user_id, '嘤嘤嘤～ 今天也是充满希望的一天～')
}

/**
 * 随机取一句话
 * @param number
 */
function getRandomInt(number:number) {
    return Math.floor(Math.random() * number)
}

/**
 * 访问主页通过机器人提示
 */

router.get('/log', async function (req:Request, res:Response, next:NextFunction) {

    try {
        const ip = getIp.getClientIp(req)
        const path = req.query.path
        await Log.create({
            ip
        })
        client.sendGroupMsg(830448115, [
            {type:"at",qq:470290171},
            {type:'text',text:'\n'  +  'ip: ' + ip.replace('::ffff:','') + '访问了你的主页！'},
            {type:'text',text:'\n'  +  'path: ' + path}
        ])
        res.send()
    }
    catch (e) {
        res.send()
    }


});


// /**
//  * 离开主页
//  */
// router.get('/close', async function (req:Request, res:Response, next:NextFunction) {
//     try {
//         const ip = getIp.getClientIp(req)
//         client.sendGroupMsg(830448115, [
//             {type:"at",qq:470290171},
//             {type:'text',text:'\n'  +  'ip: ' + ip.replace('::ffff:','') + '访离开了你的主页！'}
//         ])
//         res.send()
//     }
//     catch (e) {
//         res.send()
//     }
//
//
// });



module.exports = router;
