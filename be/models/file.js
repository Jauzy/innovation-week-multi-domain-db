module.exports = (sequelize, Sequelize) => {
    const File = sequelize.define("file", {
        FILE_ID : {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        PARENT : {
            type: Sequelize.BIGINT
        },
        FILE_NAME: {
            type: Sequelize.STRING
        },
        TYPE: {
            type: Sequelize.CHAR
        },
        REFERENCE: {
            type: Sequelize.CHAR
        },
        PATH : {
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
    return File;
};