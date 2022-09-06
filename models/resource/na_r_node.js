// NA_R_NODE

const Sequelize = require('sequelize');

module.exports = class NA_R_NODE extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            type: {
                type : Sequelize.STRING(8),
                allowNull: true,
            },
            xPos: {
                type : Sequelize.DECIMAL,
                allowNull: true,
            },
            yPos: {
                type : Sequelize.DECIMAL,
                allowNull: true,
            },
            zPos: {
                type : Sequelize.DECIMAL,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'NODE',
            tableName: 'NA_R_NODE',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
