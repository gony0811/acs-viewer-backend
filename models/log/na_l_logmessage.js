// NA_L_LOGMESSAGE

const Sequelize = require('sequelize');

module.exports = class NA_L_LOGMESSAGE extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            transactionId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            threadName: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            operationName: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            communicationMessageName: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            transportCommandId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            carrierName: {
                type : Sequelize.STRING(64),
                allowNull: true,         
            },
            processName: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            messageName: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            machineName: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            unitName: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            text: {
                type: Sequelize.STRING(4000),
                allowNull: true,
            },
            logLevel: {
                type : Sequelize.STRING(6),
                allowNull: true,       
            },
            partitionId: {
                type : Sequelize.INTEGER,
                allowNull: false,
            },
            time: {
                type: Sequelize.TIME,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'LOGMESSAGE',
            tableName: 'NA_L_LOGMESSAGE',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
