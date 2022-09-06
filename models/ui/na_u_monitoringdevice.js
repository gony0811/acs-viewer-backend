// NA_U_MONITORINGDEVICE

const Sequelize = require('sequelize');

module.exports = class NA_U_MONITORINGDEVICE extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            node: {
                type : Sequelize.STRING(6),
                allowNull: true,
            },
            anchor_pos: {
                type: Sequelize.STRING(1),
                allowNull: true,
            },
            x_offset: {
                type: Sequelize.STRING(8),
                allowNull: true,
            },
            y_offset: {
                type: Sequelize.STRING(8),
                allowNull: true,
            },
           
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'MONITORINGDEVICE',
            tableName: 'NA_U_MONITORINGDEVICE',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
