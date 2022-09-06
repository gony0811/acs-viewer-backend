// NA_U_TRANSPORT

const Sequelize = require('sequelize');

module.exports = class NA_U_TRANSPORT extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            messageName: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            transportCommandId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            sourcePortId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            DestPortId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            vehicleId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            destNodeId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            requestId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            userId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            cause: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            description: {
                type: Sequelize.STRING(256),
                allowNull: true,
            },
            time: {
                type: Sequelize.TIME,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'TRANSPORT',
            tableName: 'NA_U_TRANSPORT',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
