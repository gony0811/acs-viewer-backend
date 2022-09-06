// NA_U_USERS

const Sequelize = require('sequelize');

module.exports = class NA_A_ALARM extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            alarmId: {
                type : Sequelize.STRING(10),
                allowNull: true,
            },
            alarmText: {
                type : Sequelize.STRING(255),
                allowNull: true,
            },
            severity: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            description: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'ALARMSPEC',
            tableName: 'NA_A_ALARMSPEC',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
