// NA_X_APPLICATION_MANAGER

const Sequelize = require('sequelize');

module.exports = class NA_X_APPLICATION_MANAGER extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            type: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            command: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            reply: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            state: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            evenTime: {
                type: Sequelize.TIME,
                allowNull: true,
            },
            userId: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            ipAddress: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            requestTime: {
                type: Sequelize.TIME,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'APPLICATION_MANAGER',
            tableName: 'NA_X_APPLICATION_MANAGER',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
