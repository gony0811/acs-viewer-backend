// NA_X_APPLICATION

const Sequelize = require('sequelize');

module.exports = class NA_X_APPLICATION extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            type: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            state: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            startTime: {
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
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            name: {
                type: Sequelize.STRING(64),
                allowNull: false,
            },  
            description: {
                type: Sequelize.STRING(255),
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
            modelName: 'APPLICATION',
            tableName: 'NA_X_APPLICATION',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
