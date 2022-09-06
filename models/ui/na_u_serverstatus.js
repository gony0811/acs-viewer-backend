// NA_U_SERVERSTATUS

const Sequelize = require('sequelize');

module.exports = class NA_U_SERVERSTATUS extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            hardware_type: {
                type : Sequelize.STRING(16),
                allowNull: false,    
                primaryKey: true       
            },
            cpu_percent: {
                type : Sequelize.STRING(16),
                allowNull: true,
            },
            memory_total: {
                type: Sequelize.STRING(16),
                allowNull: true,
            },
            memory_usage: {
                type: Sequelize.STRING(16),
                allowNull: true,
            },
            memory_avail: {
                type: Sequelize.STRING(16),
                allowNull: true,
            },
            memory_percent: {
                type: Sequelize.STRING(16),
                allowNull: true,
            },
            editTime: {
                type: Sequelize.TIME,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'SERVERSTATUS',
            tableName: 'NA_U_SERVERSTATUS',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
