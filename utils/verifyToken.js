const User = require('../models/user')
var jwts = require('../utils/jwt.js')


 function verify(token) {
    return new Promise(async(resolve,reject)=>{
        try {
            const {datas} = await jwts.verifyToken(token)
            const fUser = await User.findOne({
                'where': {
                    'username': datas
                }
            })
            if(!fUser){
                reject('未查到此用户!')
            }else{
                resolve(datas)
            }

        }
        catch (e) {
            reject(e)
        }
    })


}
module.exports = {verify};
