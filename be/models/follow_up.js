module.exports = (sequelize, Sequelize) => {
    const User = require("./user.js")(sequelize, Sequelize)
    const Complaint = require("./complaint.js")(sequelize, Sequelize)
    const FollowUp = sequelize.define("follow_up", {
        FOLLUP_ID : {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        USER_ID : {
            type: Sequelize.BIGINT
        },
        COMPLAINT_ID : {
            type: Sequelize.BIGINT
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
    FollowUp.belongsTo(User, {foreignKey: 'USER_ID', targetKey: 'USER_ID'});
    FollowUp.belongsTo(Complaint, {foreignKey: 'COMPLAINT_ID', targetKey: 'COMPLAINT_ID'});
    return FollowUp;
};