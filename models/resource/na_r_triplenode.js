// NA_R_TRIPLENODE

const Sequelize = require('sequelize');

module.exports = class NA_R_TRIPLENODE extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: true,    
                primaryKey: true       
            },
            nodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'TRIPLENODE',
            tableName: 'NA_R_TRIPLENODE',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
