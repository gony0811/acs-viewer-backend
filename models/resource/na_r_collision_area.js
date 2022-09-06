// NA_R_COLLISION_AREA

const Sequelize = require('sequelize');

module.exports = class NA_R_COLLISION_AREA extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: true,    
                primaryKey: true       
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'COLLISION_AREA',
            tableName: 'NA_R_COLLISION_AREA',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
