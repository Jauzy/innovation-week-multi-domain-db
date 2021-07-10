module.exports = (sequelize, Sequelize) => {
    const User = require("./user.js")(sequelize, Sequelize)
    const Info = sequelize.define("user_info", {
        UINFO_ID : {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        USER_ID : {
            type: Sequelize.BIGINT
        },
        GENDER : {
            type: Sequelize.CHAR
        },
        ADDRESS : {
            type: Sequelize.TEXT
        },
        BIRTH_DATE : {
            type: Sequelize.DATE
        },
        BIRTH_PLACE: {
            type: Sequelize.STRING
        },
        EMAIL : {
            type: Sequelize.STRING
        },
        PHONE_NUMBER : {
            type: Sequelize.STRING
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
    Info.belongsTo(User, {foreignKey: 'USER_ID', targetKey: 'USER_ID'});
    return Info;
};