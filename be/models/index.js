module.exports = (db_name) => {
    const dbConfig = require("../config/db.config.js");

    const Sequelize = require("sequelize");
    const sequelize = new Sequelize(db_name, dbConfig.user, dbConfig.password, {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    });

    const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.user = require("./user.js")(sequelize, Sequelize);
    db.user_info = require("./user_info.js")(sequelize, Sequelize);
    db.complaint = require("./complaint.js")(sequelize, Sequelize);
    db.file = require("./file.js")(sequelize, Sequelize);
    db.finance = require("./finance.js")(sequelize, Sequelize);
    db.follow_up = require("./follow_up.js")(sequelize, Sequelize);
    db.log = require("./log.js")(sequelize, Sequelize);
    db.news = require("./news.js")(sequelize, Sequelize);
    db.project = require("./project.js")(sequelize, Sequelize);
    db.project_detail = require("./project_detail.js")(sequelize, Sequelize);

    db.user.belongsTo(db.user_info, { foreignKey: 'USER_ID', targetKey: 'USER_ID' });
    db.complaint.hasMany(db.follow_up, { foreignKey: 'COMPLAINT_ID', targetKey: 'COMPLAINT_ID' })
    db.project.hasMany(db.project_detail, { foreignKey: 'PROJECT_ID', targetKey: 'PROJECT_ID' })
    return db;
};