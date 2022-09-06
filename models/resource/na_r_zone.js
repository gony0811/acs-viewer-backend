// NA_R_ZONE

const Sequelize = require('sequelize');

module.exports = class NA_R_ZONE extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            bayId: {
                type : Sequelize.STRING(64),
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
            modelName: 'ZONE',
            tableName: 'NA_R_ZONE',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
