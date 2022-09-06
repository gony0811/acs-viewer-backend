// NA_T_TRANSPORTCMD

const Sequelize = require('sequelize');

module.exports = class NA_T_TRANSPORTCMD extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            priority: {
                type : Sequelize.DECIMAL,
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
                type : Sequelize.STRING(64),
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
                type : Sequelize.STRING(4000),
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
                type : Sequelize.TIME(20),
                allowNull: true,
            },
            loadedTime: {
                type : Sequelize.TIME(20),
                allowNull: true,
            },
            unloaArrivedTime: {
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
            bayId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            description: {
                type : Sequelize.STRING(256),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'TRANSPORTCMD',
            tableName: 'NA_T_TRANSPORTCMD',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
