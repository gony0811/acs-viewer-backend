// NA_R_VEHICLE_ADDITION

const Sequelize = require('sequelize');

module.exports = class NA_R_VEHICLE_ADDITION extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(10),
                allowNull: true,    
                primaryKey: true       
            },
            direction: {
                type : Sequelize.STRING(10),
                allowNull: true,
            },
            fgState: {
                type : Sequelize.STRING(10),
                allowNull: true,
            },
            changedTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            topState: {
                type : Sequelize.STRING(10),
                allowNull: true,
            },
            btmState: {
                type : Sequelize.STRING(10),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'VEHICLE_ADDITION',
            tableName: 'NA_R_VEHICLE_ADDITION',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
