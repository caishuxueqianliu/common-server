var jwt = require('jsonwebtoken');
var jwts = {
	generateToken: function(data) {
		if (data) {
			this.data = data; // userID
		}
		let datas = this.data;
		let created = Math.floor(Date.now() / 1000);
		// let cert = fs.readFileSync(path.join(__dirname, './pem/private_key.pem'));私钥 可以自己生成
		let cert = 'liuhao'
		let token = jwt.sign({
            datas, // 自定义字段
            exp: created + 60 * 30 * 48 * 360, // 过期时间 30 * 12 分钟
            iat: created, // 创建时间
        }, cert);
		return token;
	},
	verifyToken: function(token, callback) {
		return new Promise((resolve, reject) => {
			jwt.verify(token, 'liuhao', (err, decoded) => {
				// console.log(decoded)
				if (err) {
					reject(err)
				} else {
					resolve(decoded);
				}
			});
		})

	}
}
module.exports = jwts;
