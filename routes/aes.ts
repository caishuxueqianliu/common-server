import {Router, Request, Response, NextFunction} from 'express';
import axios from 'axios'
const router: Router = Router();

const { encrypt,decrypt} = require('../utils/aes')

router.get('/test', function (req: Request, res: Response, next: NextFunction) {
    const {str,t=new Date().getTime()} = req.query
    const eStr =  encrypt(str,t)
    res.send({eStr:eStr,dStr:decrypt(eStr,t),t,t1:new Date().getTime()})
});


/**
 * 加密
 */
router.post('/encrypt', function (req: Request, res: Response, next: NextFunction) {
    const {str} = req.body
    const t = new Date().getTime()
    const eStr =  encrypt(str,t)
    res.send({data:eStr,t})
});


/**
 * 解密
 */
router.post('/decrypt', function (req: Request, res: Response, next: NextFunction) {
    const {str,t} = req.body
    const time = new Date().getTime()
    if(time - t >1000){
        res.send({err:"t expire"})
    }
    res.send({datatr:decrypt(str,t)})
});


/**
 * 小格新后台 登陆加密
 */

router.post('/crmLogin',async function (req: Request, res: Response, next: NextFunction) {
    try{
        let {
            account,
            password,
            t,
            env
        } = req.body
        const time = new Date().getTime()
        if(time - t >6000){
            res.send({err:"t expire"})
            return
        }
        password = decrypt(password,t)
        env = env === 'development' ? 'site' : 'shop'
        const {data} = await axios.post(`http://www.glaya.${env}:9072/admin/login`,{account: account,
            password: password})
        res.send(data)
    }
    catch (e) {
        res.send(e)
    }

})

/**
 * h5
 */

router.get('/payment/:lineNo/',async function (req: Request, res: Response, next: NextFunction) {
    try{
        let {
            lineNo
        } = req.params

        const {data} = await axios.get(`http://www.glaya.shop:9072/admin/api/common/leaseBillLine/${lineNo}`)
        res.send(data)
    }
    catch (e) {
        res.send(e)
    }

})


module.exports= router
