// NA_U_USERGROUP

const Sequelize = require('sequelize');

module.exports = class NA_U_USERGROUP extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            userGroup_Id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            userGroup_desc: {
                type : Sequelize.STRING(400),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'USERGROUP',
            tableName: 'NA_U_USERGROUP',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
