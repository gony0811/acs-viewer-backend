// NA_R_LOCATION

const Sequelize = require('sequelize');

module.exports = class NA_R_LOCATION extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            portId: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            stationId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            type: {
                type : Sequelize.STRING(8),
                allowNull: true,
            },
            carrierType: {
                type : Sequelize.STRING(8),
                allowNull: true,
            },
            direction: {
                type : Sequelize.STRING(8),
                allowNull: true,
            },
            state: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'LOCATION',
            tableName: 'NA_R_LOCATION',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
