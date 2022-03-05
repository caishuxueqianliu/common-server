import {Router, Request, Response, NextFunction} from 'express';
import ErrnoException = NodeJS.ErrnoException;
const {readFileContent} = require('../utils/fileOper')
const router: Router = Router();
const multiparty = require('multiparty');
const fs = require('fs');

/**
 * 上传base64
 */
router.post('/base64', (req, res) => {
    var form = new multiparty.Form();
    form.encoding = 'utf-8';
    form.uploadDir = "./assets";

    //设置单文件大小限制
    form.maxFilesSize =  4 * 1024 * 1024;
    form.maxFieldsSize  = 4 * 1024 * 1024;

    form.parse(req, function (err:string, fields:any, files:any) {
        if (err) {
            res.send({code: 1, msg: "上传失败(仅支持4m以内的文件)", err});
            return;
        }
        if(!fields.name ||!fields.base64){
            res.send({code: 1, msg: "上传失败(formData缺失name或base64)", err});
            return;
        }
        let exname = fields.name[0].split('.')[1]
        const path = './assets/'+ Date.now() +'.'+exname;
        const urlpath1 = 'http://101.35.251.32:4001/assets/' + Date.now() +'.'+exname;
        const urlpath2 = 'https://api.liuhao.website/assets/' + Date.now() +'.'+exname;
        const base64 = fields.base64[0].replace(/^data:image\/\w+;base64,/, "");
        const dataBuffer =Buffer.from(base64, 'base64'); //把base64码转成buffer对象，
        try{
            fs.writeFileSync(path, dataBuffer)
            res.send({code: 0, msg: '上传成功', data: {url: urlpath1, httpsurl: urlpath2}})
        }
        catch(err){
            res.send(err)
        }
    });

})
/**
 * 上传文件
 */
router.post('/file',(req, res) => {
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({uploadDir: './assets'});
    //设置单文件大小限制
    form.maxFilesSize =  4* 1024 * 1024;
    form.maxFieldsSize  = 4* 1024 * 1024;
    //上传完成后处理
    form.parse(req, function (err:string, fields:any, files:any) {
        if (err) {
            res.send({code: 1, msg: "上传失败",err});
            return;
        }
        if(!files.file){
            res.send({code: 1, msg: "formData缺失file",err});
            return;
        }
        else {

            const inputFile = files.file[0];
            const uploadedPath = inputFile.path;
            const exname = inputFile.originalFilename.split('.')[inputFile.originalFilename.split('.').length-1]
            // const path = './assets/'+ Date.now() +'.'+exname;
            const nowTime = Date.now()
            const urlpath1 = 'http://101.35.251.32:4001/assets/' + Date.now() +'.'+exname;
            const urlpath2 = 'https://api.liuhao.website/assets/' + Date.now() +'.'+exname;
            const dstPath = './assets/' + nowTime + '.' + exname;
            //重命名为真实文件名
            fs.rename(uploadedPath, dstPath, function(err:ErrnoException) {
                if(err){
                    res.send({code: 1, msg: "上传失败", err});
                } else {
                    res.send({code: 0, msg: '上传成功', data: {url:urlpath1, httpsurl:urlpath2}})
                }
            });
        }
    });
});

/**
 * 读取md
 */
router.get('/read/resume', async (req, res, next) => {
    const data = await readFileContent('./assets/resume/resume.md')
    res.send({data})
});












module.exports = router;
