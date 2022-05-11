import { Client } from 'oicq'
const exec = require('child_process').exec;

/**
 * 更新blog指令
 * @param client
 * @param data
 * @param str
 */
function blog (client:Client, data:any) {
    let str = 'cd ../../../blog.liuhao.website/mine-blog&&git pull'
    const ls = exec(str);

    ls.stdout.on('data', (res:any) => {
        client.sendGroupMsg(data.group_id, [
            {type:"at",qq:data.sender.user_id},
            {type:'text',text:'\n' + res}
        ])
    });

    ls.stderr.on('data', (err:any)=> {
        client.sendGroupMsg(data.group_id, [
            {type:"at",qq:data.sender.user_id},
            {type:'text',text:'\n' + err}
        ])
    });

    ls.on('close', (code:any) => {
        console.log(`child process exited with code ${code}`);
    });


}



module.exports = {
    blog
}
