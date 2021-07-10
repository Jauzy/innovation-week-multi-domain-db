module.exports = (sequelize, Sequelize) => {
    const Finance = sequelize.define("finance", {
        FINANCE_ID : {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        PARENT : {
            type: Sequelize.BIGINT
        },
        AMOUNT: {
            type: Sequelize.BIGINT
        },
        DESCRIPTION: {
            type: Sequelize.TEXT
        },
        IS_GENERAL: {
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
    return Finance;
};