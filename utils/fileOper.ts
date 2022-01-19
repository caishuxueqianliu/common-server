const fs = require('fs')

/**
 * 读取文件内容
 * @param file
 */
function readFileContent(file:string){
    var content = ''
    return new Promise(((resolve, reject) => {
        fs.readFile(file,null,(err:string,data:any)=>{
            content = data
            resolve(content.toString())
        })

    }))
}


module.exports = {
    readFileContent
};