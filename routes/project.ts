import {Router, Request, Response, NextFunction} from 'express';

const router: Router = Router();
const Logs = require('../models/log')
const Projects = require('../models/project')
const ProjectImgs = require('../models/projectImg')



router.get('/projectList', async function(req:Request, res:Response, next:NextFunction) {
    try{
        const list = await Projects.findAll()
        res.send({code:200,data:list,msg:'获取项目列表成功！'});
    }catch (e) {
        res.send({code:500,err:e,msg:'服务器错误！'});
    }

});

router.get('/projectInfo', async function(req:Request, res:Response, next:NextFunction) {
    try{
        const {id} = req.query
        const project = await Projects.findOne({
            where:{
                id
            }
        })
        // const projectImgArr = await ProjectImgs.findAll({
        //     where:{
        //         projectId:id
        //     }
        // })
        // project.dataValues.imgList = projectImgArr
        res.send({code:200,data:project,msg:'获取项目详情成功！'});
    }catch (e) {
        res.send({code:500,err:e,msg:'服务器错误！'});
    }

});





module.exports = router;