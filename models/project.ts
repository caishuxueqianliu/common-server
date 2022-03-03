// @ts-ignore
const { DataTypes} = require("sequelize");
// @ts-ignore
const sequelize = require('../mysql/mysql')
const Projects = sequelize.define("project", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    desc: {
        type: DataTypes.STRING
    },
    detailInfo:{
        type: DataTypes.STRING
    },
    icon: {
        type: DataTypes.STRING
    },
    link: {
        type: DataTypes.STRING
    },
    imgList:{
        type:  DataTypes.STRING
    }
});

(async () => {
    await Projects.sync();
    // 这里是代码
})();
module.exports = Projects
