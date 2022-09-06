// NA_H_TRANSPORTCMDHISTORY

const Sequelize = require('sequelize');

module.exports = class NA_H_TRANSPORTCMDHISTORY extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            jobId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            priority: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },
            state: {
                type : Sequelize.STRING(20),
                allowNull: true,      
            },
            vehicleId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            vehicleEvent: {
                type : Sequelize.STRING(16),
                allowNull: true,      
            },
            carrierId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            source: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            dest: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            path: {
                type : Sequelize.STRING(1000),
                allowNull: true,      
            },
            additionalInfo: {
                type : Sequelize.STRING(1000),
                allowNull: true,      
            },
            createdTime: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            queuedTime: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            assignedTime: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            startedTime: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            loadArrivedTime: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            loadedTime: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            unloadArrivedTime: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            unloadedTime: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            completedTime: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            unloadingTime: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            loadingTime: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            eqpId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            portId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            agvName: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            jobType: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            midLoc: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            midPortId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            originLoc: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            description: {
                type : Sequelize.STRING(256),
                allowNull: true,
            },
            partitionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            time: {
                type: Sequelize.TIME,
                allowNull: true,
            },
            bayId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            reason: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            code: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
           
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'TRANSPORTCMDHISTORY',
            tableName: 'NA_H_TRANSPORTCMDHISTORY',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
