// NA_H_USERHISTORY

const Sequelize = require('sequelize');

module.exports = class NA_H_USERHISTORY extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            time: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            userId: {
                type : Sequelize.STRING(10),
                allowNull: true,      
            },
            userClass: {
                type : Sequelize.STRING(500),
                allowNull: true,      
            },
            computerName: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            actionCategory: {
                type : Sequelize.STRING(6),
                allowNull: true,      
            },
            actionViewName: {
                type : Sequelize.STRING(10),
                allowNull: true,      
            },
            actionText: {
                type : Sequelize.STRING(20),
                allowNull: true,      
            },
            description: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            partitionId: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },           
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'USERHISTORY',
            tableName: 'NA_H_USERHISTORY',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
