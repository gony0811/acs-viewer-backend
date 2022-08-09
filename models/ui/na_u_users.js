// NA_U_USERS

const Sequelize = require('sequelize');

module.exports = class NA_U_USERS extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            loginid: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            password: {
                type : Sequelize.STRING(16),
                allowNull: true,
            },
            fullname: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            usergroup: {
                type: Sequelize.STRING(16),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'USER',
            tableName: 'NA_U_USERS',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
