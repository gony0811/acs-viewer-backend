// NA_R_QR_OCCUPY

const Sequelize = require('sequelize');

module.exports = class NA_R_QR_OCCUPY extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(50),
                allowNull: false,    
                primaryKey: true       
            },
            agvId: {
                type : Sequelize.STRING(50),
                allowNull: true,
            },
            changedTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'QR_OCCUPY',
            tableName: 'NA_R_QR_OCCUPY',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
