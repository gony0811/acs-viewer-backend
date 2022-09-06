// NA_R_LINK_ZONE

const Sequelize = require('sequelize');

module.exports = class NA_R_LINK_ZONE extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            linkId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            zoneId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            transferFlag: {
                type : Sequelize.STRING(1),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'LINK_ZONE',
            tableName: 'NA_R_LINK_ZONE',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
