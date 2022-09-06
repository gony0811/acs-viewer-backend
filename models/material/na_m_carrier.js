// NA_M_CARRIER

const Sequelize = require('sequelize');

module.exports = class NA_M_CARRIER extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            type: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            carrierLoc: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            createTime: {
                type: Sequelize.TIME,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'CARRIER',
            tableName: 'NA_M_CARRIER',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
