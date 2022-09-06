// NA_U_STATECOLOR

const Sequelize = require('sequelize');

module.exports = class NA_U_STATECOLOR extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            modelName: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            stateName: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            stateValue: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            figureTarget: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            red: {
                type: Sequelize.DECIMAL,
                allowNull: true,
            },
            green: {
                type: Sequelize.DECIMAL,
                allowNull: true,
            },
            blue: {
                type: Sequelize.DECIMAL,
                allowNull: true,
            },
            imageFileName: {
                type: Sequelize.STRING(60),
                allowNull: true,
            },
            description: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'STATECOLOR',
            tableName: 'NA_U_STATECOLOR',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
