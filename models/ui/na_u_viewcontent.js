// NA_U_VIEWCONTENT

const Sequelize = require('sequelize');

module.exports = class NA_U_VIEWCONTENT extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            propertyName: {
                type : Sequelize.STRING(45),
                allowNull: true,
            },
            modelName: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            viewName: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            dataType: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            caption: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            captionSize: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            sequence: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            mandatory: {
                type: Sequelize.STRING(2),
                allowNull: true,
            },
            viewValueContentName: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            defaultValue: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            userId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            visible: {
                type: Sequelize.STRING(2),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'VIEWCONTENT',
            tableName: 'NA_U_VIEWCONTENT',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
