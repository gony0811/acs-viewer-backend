// NA_R_VEHICLE_CROSS_WAIT

const Sequelize = require('sequelize');

module.exports = class NA_R_VEHICLE_CROSS_WAIT extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            vehicleId: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            nodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            state: {
                type : Sequelize.STRING(8),
                allowNull: true,
            },
            createdTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'VEHICLE_CROSS_WAIT',
            tableName: 'NA_R_VEHICLE_CROSS_WAIT',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
