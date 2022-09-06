// NA_H_VEHICLE_BATTERYHISTORY

const Sequelize = require('sequelize');

module.exports = class NA_H_VEHICLE_BATTERYHISTORY extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            vehicleId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            batteryRate: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },
            batteryVoltage: {
                type : Sequelize.FLOAT,
                allowNull: true,      
            },
            time: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            partitionId: {
                type : Sequelize.INTEGER,
                allowNull: false,      
            },           
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'VEHICLE_BATTERYHISTORY',
            tableName: 'NA_H_VEHICLE_BATTERYHISTORY',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
