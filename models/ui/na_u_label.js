// NA_U_LABEL

const Sequelize = require('sequelize');

module.exports = class NA_U_LABEL extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            name: {
                type : Sequelize.STRING(512),
                allowNull: true,
            },
            x_pos: {
                type: Sequelize.DECIMAL,
                allowNull: true,
            },
            y_pos: {
                type: Sequelize.DECIMAL,
                allowNull: true,
            },
            color: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            font_size: {
                type: Sequelize.DECIMAL,
                allowNull: true,
            },
            opacity: {
                type: Sequelize.DECIMAL,
                allowNull: true,
            },
            bold: {
                type: Sequelize.STRING(1),
                allowNull: true,
            },
            visibility: {
                type: Sequelize.STRING(1),
                allowNull: true,
            },
           
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'LABEL',
            tableName: 'NA_U_LABEL',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
