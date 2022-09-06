// NA_R_BAY

const Sequelize = require('sequelize');

module.exports = class NA_R_BAY extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            floor: {
                type : Sequelize.DECIMAL,
                allowNull: true,
            },
            decription: {
                type : Sequelize.STRING(200),
                allowNull: true,
            },
            agvType: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            idleTime: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            chargeVoltage: {
                type : Sequelize.FLOAT,
                allowNull: true,
            },
            limitVoltage: {
                type : Sequelize.FLOAT,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'BAY',
            tableName: 'NA_R_BAY',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
