// @ts-ignore
const { DataTypes} = require("sequelize");
// @ts-ignore
const sequelize = require('../mysql/mysql')
const Logs = sequelize.define("log", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ip: {
        type: DataTypes.STRING
    },


});

(async () => {
    await Logs.sync();
    // 这里是代码
})();
module.exports = Logs
