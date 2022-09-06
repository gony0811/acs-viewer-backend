// NA_C_SECS

const Sequelize = require('sequelize');

module.exports = class NA_C_SECS extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            deviceId: {
                type : Sequelize.INTEGER,
                allowNull: false,      
            },
            interfaceClassName: {
                type : Sequelize.STRING(225),
                allowNull: true,
            },
            workflowManagerName: {
                type: Sequelize.STRING(225),
                allowNull: true,
            },
            dictionaryFile: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            driverLogBackUpDays: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            driverLogLevel: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            driverLogMode: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            driverType: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            applicationName: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            hsmsConnectionMode: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            hsmsPort: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            hsmsRemoteIp: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            hsmsType: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            logDirectory: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            machineName: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            machineType: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            secsIILogMode: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            secsILogMode: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            smdPth: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            timeOutLinkTest: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            timeOutT1: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            timeOutT2: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            timeOutT3: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            timeOutT5: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            timeOutT6: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            timeOutT7: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            timeOutT8: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            state: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            name: {
                type: Sequelize.STRING(64),
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING(225),
                allowNull: true,
            },
            createTime: {
                type: Sequelize.TIME,
                allowNull: true,
            },
            creator: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            editor: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },  
            editTime: {
                type: Sequelize.TIME,
                allowNull: true,
            },  
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'SECS',
            tableName: 'NA_C_SECS',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
