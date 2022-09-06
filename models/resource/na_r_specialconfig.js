// NA_R_SPECIALCONFIG

const Sequelize = require('sequelize');

module.exports = class NA_R_SPECIALCONFIG extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(20),
                allowNull: false,    
                primaryKey: true       
            },
            configName: {
                type : Sequelize.STRING(20),
                allowNull: false,
            },
            configValues: {
                type : Sequelize.STRING(1000),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'SPECIALCONFIG',
            tableName: 'NA_R_SPECIALCONFIG',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
