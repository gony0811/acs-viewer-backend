// NA_R_STATION

const Sequelize = require('sequelize');

module.exports = class NA_R_STATION extends Sequelize.Model {
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
            type: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            distance: {
                type : Sequelize.DECIMAL,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'STATION',
            tableName: 'NA_R_STATION',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
