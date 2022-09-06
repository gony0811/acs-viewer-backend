// NA_R_STATION_VW

const Sequelize = require('sequelize');

module.exports = class NA_R_STATION_VW extends Sequelize.Model {
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
            parentNode: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            nextNode: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            type: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            distance: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'STATION_VW',
            tableName: 'NA_R_STATION_VW',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
