// NA_U_VIEWVALUECONTENT

const Sequelize = require('sequelize');

module.exports = class NA_U_VIEWVALUECONTENT extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            name: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            type: {
                type: Sequelize.STRING(6),
                allowNull: true,
            },
            value: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            sequence: {
                type: Sequelize.STRING(5),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'VIEWVALUECONTENT',
            tableName: 'NA_U_VIEWVALUECONTENT',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
