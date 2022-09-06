// NA_U_STORAGESTATUS

const Sequelize = require('sequelize');

module.exports = class NA_U_STORAGESTATUS extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            hardware_type: {
                type : Sequelize.STRING(16),
                allowNull: true,
            },
            fileSystem_name: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            total: {
                type: Sequelize.STRING(16),
                allowNull: true,
            },
            usage: {
                type: Sequelize.STRING(16),
                allowNull: true,
            },
            avail: {
                type: Sequelize.STRING(16),
                allowNull: true,
            },
            percentage: {
                type: Sequelize.STRING(16),
                allowNull: true,
            },
            editTime: {
                type: Sequelize.Time,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'STORAGESTATUS',
            tableName: 'NA_U_STORAGESTATUS',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
