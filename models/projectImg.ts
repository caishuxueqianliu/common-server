// @ts-ignore
const { DataTypes} = require("sequelize");
// @ts-ignore
const sequelize = require('../mysql/mysql')
const ProjectImgs = sequelize.define("projectImg", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    projectId: {
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    url:{
        type: DataTypes.STRING
    }
});

(async () => {
    await ProjectImgs.sync();
    // 这里是代码
})();
module.exports = ProjectImgs
