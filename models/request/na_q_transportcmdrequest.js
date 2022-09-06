// NA_Q_TRANSPORTCMDREQUEST

const Sequelize = require('sequelize');

module.exports = class NA_Q_TRANSPORTCMDREQUEST extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            messageName: {
                type : Sequelize.STRING(255),
                allowNull: true,
            },
            jobId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            vehicleId: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            dest: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            description: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            createTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'TRANSPORTCMDREQUEST',
            tableName: 'NA_Q_TRANSPORTCMDREQUEST',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
