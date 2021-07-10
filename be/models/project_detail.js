module.exports = (sequelize, Sequelize) => {
    const Project = require("./project.js")(sequelize, Sequelize)
    const ProjectDet = sequelize.define("project_detail", {
        PROJDET_ID : {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        PROJECT_ID : {
            type: Sequelize.BIGINT
        },
        PROJCOMP_NAME: {
            type: Sequelize.STRING
        },
        PROGRESS : {
            type: Sequelize.INTEGER
        },
        VERIFIED_BY : {
            type: Sequelize.STRING
        },
        STATUS : {
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
    ProjectDet.belongsTo(Project, {foreignKey: 'PROJECT_ID', targetKey: 'PROJECT_ID'});
    return ProjectDet;
};