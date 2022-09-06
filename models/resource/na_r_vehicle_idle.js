// NA_R_VEHICLE_IDLE

const Sequelize = require('sequelize');

module.exports = class NA_R_VEHICLE_IDLE extends Sequelize.Model {
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
            idleTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            bayId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'VEHICLE_IDLE',
            tableName: 'NA_R_VEHICLE_IDLE',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
