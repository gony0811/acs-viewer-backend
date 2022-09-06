// NA_R_ORDER_GROUP

const Sequelize = require('sequelize');

module.exports = class NA_R_ORDER_GROUP extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            orderGroup: {
                type : Sequelize.STRING(64),
                allowNull: false,
            },
            status: {
                type : Sequelize.STRING(32),
                allowNull: true,
            },
            type: {
                type : Sequelize.STRING(32),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'ORDER_GROUP',
            tableName: 'NA_R_ORDER_GROUP',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
