// NA_R_VEHICLE

const Sequelize = require('sequelize');

module.exports = class NA_R_VEHICLE extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            nioName: {
                type : Sequelize.STRING(32),
                allowNull: true,
            },
            vendor: {
                type : Sequelize.STRING(32),
                allowNull: true,
            },
            version: {
                type : Sequelize.STRING(32),
                allowNull: true,
            },
            bayId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            carrierType: {
                type : Sequelize.STRING(8),
                allowNull: true,
            },
            connectionState: {
                type : Sequelize.STRING(16),
                allowNull: true,
            },
            alarmState: {
                type : Sequelize.STRING(8),
                allowNull: true,
            },
            processingState: {
                type : Sequelize.STRING(10),
                allowNull: true,
            },
            batteryRate: {
                type : Sequelize.DECIMAL,
                allowNull: true,
            },
            currentNodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            transportCommandId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            path: {
                type : Sequelize.STRING(),
                allowNull: true,
            },
            nodeCheckTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            state: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            installed: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            transferState: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            batteryVoltage: {
                type : Sequelize.FLOAT,
                allowNull: true,
            },
            runState: {
                type : Sequelize.STRING(10),
                allowNull: true,
            },
            fullState: {
                type : Sequelize.STRING(10),
                allowNull: true,
            },
            acsDestNodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            vehicleDestNodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            evenTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            plcVersion: {
                type : Sequelize.STRING(32),
                allowNull: true,
            },
            nioId: {
                type : Sequelize.STRING(32),
                allowNull: true,
            },
            lastChargeTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            lastChargeBattery: {
                type : Sequelize.FLOAT,
                allowNull: true,
            },
            hmiVersion: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'VEHICLE',
            tableName: 'NA_R_VEHICLE',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
