// NA_U_AUTHORIZATION

const Sequelize = require('sequelize');

module.exports = class NA_U_AUTHORIZATION extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            userId: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            menuId: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            enable: {
                type: Sequelize.STRING(2),
                allowNull: true,
            },
           
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'AUTHORIZATION',
            tableName: 'NA_U_AUTHORIZATION',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
