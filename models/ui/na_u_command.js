// NA_U_COMMAND

const Sequelize = require('sequelize');

module.exports = class NA_U_COMMAND extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: true,    
                primaryKey: true       
            },
            messageName: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            applicationName: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            applicationType: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            userid: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            cause: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            description: {
                type: Sequelize.STRING(256),
                allowNull: true,
            },
            time: {
                type: Sequelize.TIME,
                allowNull: true,
            },
           
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'COMMAND',
            tableName: 'NA_U_COMMAND',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
