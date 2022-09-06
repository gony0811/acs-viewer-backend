// NA_U_INFORM

const Sequelize = require('sequelize');

module.exports = class NA_U_INFORM extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            time: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            type: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            message: {
                type: Sequelize.STRING(1000),
                allowNull: true,
            },
            source: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            description: {
                type: Sequelize.STRING(1000),
                allowNull: true,
            },
           
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'COMMAND',
            tableName: 'NA_U_COMMAND',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
