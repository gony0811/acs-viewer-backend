// NA_R_BCS

const Sequelize = require('sequelize');

module.exports = class NA_R_BCS extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(50),
                allowNull: false,    
                primaryKey: true       
            },
            locationId: {
                type : Sequelize.STRING(50),
                allowNull: false,
            },
            bayId: {
                type : Sequelize.STRING(50),
                allowNull: false,
            },
            vehicleId: {
                type : Sequelize.STRING(50),
                allowNull: false,
            },
            jobId: {
                type : Sequelize.STRING(50),
                allowNull: false,
            },
            bcsVoltage: {
                type : Sequelize.FLOAT,
                allowNull: false,
            },
            bcsCurrent: {
                type : Sequelize.FLOAT,
                allowNull: false,
            },
            temperature: {
                type : Sequelize.FLOAT,
                allowNull: false,
            },
            controlMode: {
                type : Sequelize.STRING(50),
                allowNull: false,
            },
            runState: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            chargeState: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            evenTime: {
                type : Sequelize.TIME,
                allowNull: false,
            },
            connectionState: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'BCS',
            tableName: 'NA_R_BCS',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
