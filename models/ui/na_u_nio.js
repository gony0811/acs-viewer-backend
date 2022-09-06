// NA_U_NIO

const Sequelize = require('sequelize');

module.exports = class NA_U_NIO extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(50),
                allowNull: false,    
                primaryKey: true       
            },
            messageName: {
                type : Sequelize.STRING(50),
                allowNull: true,
            },
            applicationName: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            userId: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            cause: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            description: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            time: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
           
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'NIO',
            tableName: 'NA_U_NIO',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
