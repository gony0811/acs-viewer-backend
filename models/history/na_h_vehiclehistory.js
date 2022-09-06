// NA_H_VEHICLEHISTORY

const Sequelize = require('sequelize');

module.exports = class NA_H_VEHICLEHISTORY extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            vehicleId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            bayId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            carrierType: {
                type : Sequelize.STRING(8),
                allowNull: true,      
            },
            connectionState: {
                type : Sequelize.STRING(16),
                allowNull: true,      
            },
            alarmState: {
                type : Sequelize.STRING(8),
                allowNull: true,      
            },
            processingState: {
                type : Sequelize.STRING(10),
                allowNull: true,      
            },
            currentNodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            transportCommandId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            path: {
                type : Sequelize.STRING(),
                allowNull: true,      
            },
            nodeChecktime: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            state: {
                type : Sequelize.STRING(20),
                allowNull: true,      
            },
            installed: {
                type : Sequelize.STRING(20),
                allowNull: true,      
            },
            transferState: {
                type : Sequelize.STRING(20),
                allowNull: true,      
            },
            runState: {
                type : Sequelize.STRING(10),
                allowNull: true,      
            },
            fullState: {
                type : Sequelize.STRING(10),
                allowNull: true,      
            },
            time: {
                type : Sequelize.TIME,
                allowNull: true,      
            },
            messageName: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            }, 
            acsDestNodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            }, 
            vehicleDestNodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            }, 
            partitionId: {
                type : Sequelize.INTEGER,
                allowNull: false,      
            },           
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'VEHICLEHISTORY',
            tableName: 'NA_H_VEHICLEHISTORY',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
