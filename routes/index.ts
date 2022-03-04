// import {Router, Request, Response, NextFunction} from 'express';
import express, {Router, Request, Response, NextFunction} from 'express';
const app: express.Application = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use('/common/', require('./upload'));
app.use('/common/', require('./users'));



module.exports = app
// const router: Router = Router();
// const {readFileContent} = require('../utils/fileOper')
/* GET home page. */
// router.get('/', function (req: Request, res: Response, next: NextFunction) {
//     res.render('index', {title: 'Express'});
// });
//
//
// router.get('/readfile', async (req: Request, res: Response, next: NextFunction) => {
//     const data = await readFileContent('./assets/md/resume.md')
//     res.send({data})
// });

// module.exports = router;
// export const Index: Router = router;
