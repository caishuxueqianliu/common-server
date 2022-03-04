import {Router, Request, Response, NextFunction} from 'express';

const router: Router = Router();
const multiparty = require('multiparty');
const fs = require('fs');



router.post('/', (req, res) => {
    var form = new multiparty.Form();
    form.encoding = 'utf-8';
    form.uploadDir = "./assets";

    //设置单文件大小限制
    form.maxFilesSize =  4* 1024 * 1024;
    form.maxFieldsSize  = 4* 1024 * 1024;

    form.parse(req, function (err:string, fields:any, files:any,) {

        if (err || !fields.name ||!fields.base64  ) {
            res.send({code: -1, msg: "上传失败(仅支持4m以内的文件)",err});
            return;
        }

        let exname = fields.name[0].split('.')[1]
        const path = './assets/'+ Date.now() +'.'+exname;
        const urlpath1 = '/assets/' + Date.now() +'.'+exname;
        const urlpath2 = '/assets/' + Date.now() +'.'+exname;
        const base64 = fields.base64[0].replace(/^data:image\/\w+;base64,/, "");
        const dataBuffer =Buffer.from(base64, 'base64'); //把base64码转成buffer对象，
        try{
            fs.writeFileSync(path, dataBuffer)
            res.send({url:urlpath1,httpsurl:urlpath2})
        }
        catch(err){

            res.send(err)
        }




        // fs.renameSync(files.file[0].path,'assets/' + files.file[0].originalFilename)
        // res.send({code: 0, msg: "upload_ok", fileName: files.file[0].originalFilename});
    });

})

module.exports = router;
