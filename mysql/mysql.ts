const {
	Sequelize
} = require('sequelize');

// // 方法 1: 传递一个连接 URI
// // const sequelize = new Sequelize('sqlite::memory:') // Sqlite 示例
// // const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Postgres 示例
// //
// // // 方法 2: 分别传递参数 (sqlite)
// // const sequelize = new Sequelize({
// //   dialect: 'sqlite',
// //   storage: 'path/to/database.sqlite'
// // });
//
// // 方法 2: 分别传递参数 (其它数据库)
// @ts-ignore
const sequelize = new Sequelize('mine', 'root', '11111111', {
	host: '101.35.251.32',
	timezone: '+08:00',
	dialect: 'mysql', /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
	pool: {
		// 最多有多少个连接
		max: 3,
		// // 最少有多少个连接
		min: 0,
		// 当前连接多久没有操作就断开
		idle: 10000,
		// 多久没有获取到连接就断开
		acquire: 30000,
	}
});
//
// // try {
// //    sequelize.authenticate();
// //   console.log('Connection has been established successfully.');
// // } catch (error) {
// //   console.error('Unable to connect to the database:', error);
// // }

module.exports = sequelize
