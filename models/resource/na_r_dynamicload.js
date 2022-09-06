// NA_R_DYNAMICLOAD

const Sequelize = require('sequelize');

module.exports = class NA_R_DYNAMICLOAD extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(50),
                allowNull: true,    
                primaryKey: true       
            },
            agvId: {
                type : Sequelize.STRING(8),
                allowNull: true,
            },
            used: {
                type : Sequelize.STRING(8),
                allowNull: true,
            },
            weight: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            minimum: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            threshold: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            changeTime: {
                type : Sequelize.TIME,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'DYNAMICLOAD',
            tableName: 'NA_R_DYNAMICLOAD',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
