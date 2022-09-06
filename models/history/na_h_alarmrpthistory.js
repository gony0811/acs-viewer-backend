// NA_H_ALARMRPTHISTORY

const Sequelize = require('sequelize');

module.exports = class NA_H_ALARMRPTHISTORY extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            alarmCode: {
                type : Sequelize.STRING(10),
                allowNull: false,      
            },
            alarmText: {
                type : Sequelize.STRING(225),
                allowNull: true,
            },
            vehicleId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            alarmId: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            state: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            partitionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            time: {
                type: Sequelize.TIME,
                allowNull: true,
            },
            transportCommandId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'ALARMRPTHISTORY',
            tableName: 'NA_H_ALARMRPTHISTORY',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
