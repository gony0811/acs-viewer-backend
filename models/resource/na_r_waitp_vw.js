// NA_R_WAITP_VW

const Sequelize = require('sequelize');

module.exports = class NA_R_WAITP_VW extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            type: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            zoneId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            waitingLimit: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'WAITP_VW',
            tableName: 'NA_R_WAITP_VW',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
