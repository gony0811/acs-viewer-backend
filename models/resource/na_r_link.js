// NA_R_LINK

const Sequelize = require('sequelize');

module.exports = class NA_R_LINK extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            fromNodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            toNodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            length: {
                type : Sequelize.DECIMAL,
                allowNull: true,
            },
            speed: {
                type : Sequelize.DECIMAL,
                allowNull: true,
            },
            leftBranch: {
                type : Sequelize.DECIMAL,
                allowNull: true,
            },
            availability: {
                type : Sequelize.STRING(2),
                allowNull: true,
            },
            load: {
                type : Sequelize.DECIMAL,
                allowNull: true,
            },
            agvType: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'LINK',
            tableName: 'NA_R_LINK',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
