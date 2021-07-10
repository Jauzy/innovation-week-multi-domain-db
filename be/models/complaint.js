
module.exports = (sequelize, Sequelize) => {
    const User = require("./user.js")(sequelize, Sequelize)
    // const FollowUp = require("./follow_up")(sequelize, Sequelize)
    const Complaint = sequelize.define("complaint", {
        COMPLAINT_ID: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        USER_ID : {
            type: Sequelize.BIGINT
        },
        TITLE: {
            type: Sequelize.STRING
        },
        CATEGORY: {
            type: Sequelize.CHAR
        },
        DETAIL: {
            type: Sequelize.STRING
        },
        STATUS: {
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
    Complaint.belongsTo(User, {foreignKey: 'USER_ID', targetKey: 'USER_ID'});
    // Complaint.hasMany(FollowUp, {foreignKey: 'COMPLAINT_ID', targetKey: 'COMPLAINT_ID'})
    return Complaint;
};