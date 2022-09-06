// NA_L_LARGELOGMESSAGE

const Sequelize = require('sequelize');

module.exports = class NA_L_LARGELOGMESSAGE extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            logMessageId: {
                type : Sequelize.STRING(900),
                allowNull: false,
            },
            largeText: {
                type: Sequelize.STRING(400),
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
            sequence: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'LARGELOGMESSAGE',
            tableName: 'NA_L_LARGELOGMESSAGE',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
