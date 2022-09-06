// NA_H_TRANSACTIONHISTORY

const Sequelize = require('sequelize');

module.exports = class NA_H_TRANSACTIONHISTORY extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            time: {
                type : Sequelize.TIME,
                allowNull: false,      
            },
            transactionId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            transactionName: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            originatedtype: {
                type : Sequelize.STRING(2),
                allowNull: true,      
            },
            applicationName: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            startTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            endTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            elapsedTime: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            runningbpelProcessCount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            succeeded: {
                type: Sequelize.STRING(2),
                allowNull: true,
            },
            cause: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            partitionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
           
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'TRANSACTIONHISTORY',
            tableName: 'NA_H_TRANSACTIONHISTORY',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
