// NA_H_APPLICATIONHISTORY

const Sequelize = require('sequelize');

module.exports = class NA_H_APPLICATIONHISTORY extends Sequelize.Model {
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
            applicationName: {
                type : Sequelize.STRING(45),
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
            creator: {
                type : Sequelize.STRING(45),
                allowNull: true,      
            },
            editor: {
                type : Sequelize.STRING(45),
                allowNull: true,      
            },
            startTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            editTime: {
                type: Sequelize.TIME,
                allowNull: true,
            },
            checkTime: {
                type: Sequelize.TIME,
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
            runningHardwareAddress: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            msb: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            memory: {
                type: Sequelize.STRING(5),
                allowNull: true,
            },
            jmx: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            destinationName: {
                type: Sequelize.STRING(60),
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
            modelName: 'APPLICATIONHISTORY',
            tableName: 'NA_H_APPLICATIONHISTORY',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
