module.exports = (sequelize, Sequelize) => {
    const User = require("./user.js")(sequelize, Sequelize)
    const News = sequelize.define("news", {
        NEWS_ID : {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        USER_ID : {
            type: Sequelize.BIGINT
        },
        TITLE : {
            type: Sequelize.STRING
        },
        DESCRIPTION : {
            type: Sequelize.TEXT
        },
        CATEGORY : {
            type: Sequelize.CHAR
        },
        CREATE_DATE: {
            type: Sequelize.DATE
        },
        UPDATE_DATE: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        CREATE_BY: {
            type: Sequelize.STRING
        },
        UPDATE_BY: {
            type: Sequelize.STRING
        },
    }, {timestamps: false});
    News.belongsTo(User, {foreignKey: 'USER_ID', targetKey: 'USER_ID'});
    return News;
};