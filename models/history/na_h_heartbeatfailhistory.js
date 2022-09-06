// NA_H_HEARTBEATFAILHISTORY

const Sequelize = require('sequelize');

module.exports = class NA_H_HEARTBEATFAILHISTORY extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            applicationName: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            type: {
                type : Sequelize.STRING(20),
                allowNull: true,      
            },
            state: {
                type : Sequelize.STRING(20),
                allowNull: true,      
            },
            startTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            initialHardware: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            runningHardware: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            partitionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            time: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'HEARTBEATFAILHISTORY',
            tableName: 'NA_H_HEARTBEATFAILHISTORY',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
