// NA_R_EQUIPMENT

const Sequelize = require('sequelize');

module.exports = class NA_R_EQUIPMENT extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: true,    
                primaryKey: true       
            },
            name: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            bayId: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            x_pos: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            y_pos: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            width: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            height: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            floor: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            font_size: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            fore_color: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            back_color: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            opacity: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            bold: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            visibility: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            description: {
                type : Sequelize.STRING(200),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'EQUIPMENT',
            tableName: 'NA_R_EQUIPMENT',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
