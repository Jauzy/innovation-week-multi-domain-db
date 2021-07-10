module.exports = (sequelize, Sequelize) => {
    const User = require("./user.js")(sequelize, Sequelize)
    const Log = sequelize.define("log", {
        LOG_ID : {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        USER_ID  : {
            type: Sequelize.BIGINT
        },
        COMPLAINT_ID : {
            type: Sequelize.BIGINT
        },
        DATE_TIME: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
    }, {timestamps: false});
    Log.belongsTo(User, {foreignKey: 'USER_ID', targetKey: 'USER_ID'});
    return Log;
};