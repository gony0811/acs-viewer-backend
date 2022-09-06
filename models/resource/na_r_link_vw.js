// NA_R_LINK_VW

const Sequelize = require('sequelize');

module.exports = class NA_R_LINK_VW extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: true,    
                primaryKey: true       
            },
            zoneId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            transferFlag: {
                type : Sequelize.STRING(1),
                allowNull: true,
            },
            fromNodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            from_xPos: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            from_yPos: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            toNodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            to_xPos: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            to_yPos: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            length: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            speed: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            leftBranch: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            availability: {
                type : Sequelize.STRING(2),
                allowNull: true,
            },
            loading: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            bayId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            load: {
                type : Sequelize.INTEGER,
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
            modelName: 'LINK_VW',
            tableName: 'NA_R_LINK_VW',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
