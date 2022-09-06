// NA_R_VEHICLE_ORDER

const Sequelize = require('sequelize');

module.exports = class NA_R_VEHICLE_ORDER extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            vehicleId: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            orderNode: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            orderTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'VEHICLE_ORDER',
            tableName: 'NA_R_VEHICLE_ORDER',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
