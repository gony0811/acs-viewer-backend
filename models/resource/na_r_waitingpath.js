// NA_R_WAITINGPATH

const Sequelize = require('sequelize');

module.exports = class NA_R_WAITINGPATH extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: true,    
                primaryKey: true       
            },
            waitingPath: {
                type : Sequelize.STRING(),
                allowNull: true,
            },
            tripLenNode: {
                type : Sequelize.STRING(),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'WAITINGPATH',
            tableName: 'NA_R_WAITINGPATH',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
