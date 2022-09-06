// NA_R_BAY_GROUP_CHARGE

const Sequelize = require('sequelize');

module.exports = class NA_R_BAY_GROUP_CHARGE extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(32),
                allowNull: false,    
                primaryKey: true       
            },
            bays: {
                type : Sequelize.STRING(200),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'BAY_GROUP_CHARGE',
            tableName: 'NA_R_BAY_GROUP_CHARGE',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
