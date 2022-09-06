// NA_S_VEHICLEOPERATIONRATIO

const Sequelize = require('sequelize');

module.exports = class NA_S_VEHICLEOPERATIONRATIO extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            floor: {
                type : Sequelize.STRING(10),
                allowNull: true,
            },
            route: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            total: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            disconnect: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            fullstate: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            removed: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            alarm: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            charge: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            running: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            available: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            time: {
                type : Sequelize.TIME,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'VEHICLEOPERATIONRATIO',
            tableName: 'NA_S_VEHICLEOPERATIONRATIO',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
