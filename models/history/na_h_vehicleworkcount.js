// NA_H_VEHICLEWORKCOUNT

const Sequelize = require('sequelize');

module.exports = class NA_H_VEHICLEWORKCOUNT extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.INTEGER,
                allowNull: false,    
                primaryKey: true       
            },
            bayId: {
                type : Sequelize.STRING(64),
                allowNull: true,      
            },
            total: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },
            standby: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },
            running: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },
            agvDisconnect: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },
            agvOffline: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },
            eventif: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },
            notuse: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },
            agvFull: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },
            charge: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },
            alarm: {
                type : Sequelize.INTEGER,
                allowNull: true,      
            },
            eventDate: {
                type : Sequelize.STRING(32),
                allowNull: true,      
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'VEHICLEWORKCOUNT',
            tableName: 'NA_H_VEHICLEWORKCOUNT',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
