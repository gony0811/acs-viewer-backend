// NA_C_NIO

const Sequelize = require('sequelize');

module.exports = class NA_C_NIO extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            interfaceClassName: {
                type : Sequelize.STRING(225),
                allowNull: true,
            },
            workflowManagerName: {
                type: Sequelize.STRING(225),
                allowNull: true,
            },
            applicationName: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            port: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            remoteIp: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            machineName: {
                type: Sequelize.STRING(64),
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
            state: {
                type: Sequelize.STRING(20),
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
            modelName: 'NIO',
            tableName: 'NA_C_NIO',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
