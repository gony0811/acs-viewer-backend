// NA_U_USERS

const Sequelize = require('sequelize');

module.exports = class NA_A_ALARM extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            alarmCode: {
                type : Sequelize.STRING(10),
                allowNull: true,
            },
            alarmText: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            vehicleId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            createTime: {
                type: Sequelize.TIME,
                allowNull: true,
            },
            alarmId: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            transportCommandId: {
                type: Sequelize.STRING(64),
                allowNull: true,
            },
            NEARAGV: {
                type: Sequelize.STRING(2),
                allowNull: true,
            },
            ISCROSS: {
                type: Sequelize.STRING(2),
                allowNull: true,
            }

        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'ALARM',
            tableName: 'NA_A_ALARM',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
