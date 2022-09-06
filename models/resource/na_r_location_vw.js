// NA_R_LOCATION_VW

const Sequelize = require('sequelize');

module.exports = class NA_R_LOCATION_VW extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            portId: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            stationId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            bayId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            location_type: {
                type : Sequelize.STRING(8),
                allowNull: true,
            },
            carrierType: {
                type : Sequelize.STRING(8),
                allowNull: true,
            },
            direction: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            state: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            linkId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            parentNode: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            station_type: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            distance: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            from_xPos: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            from_yPos: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            to_xPos: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            to_yPos: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            length: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            speed: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            leftBrach: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            availability: {
                type : Sequelize.STRING(2),
                allowNull: true,
            },
            loading: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
            transferFlag: {
                type : Sequelize.STRING(1),
                allowNull: true,
            },
            load: {
                type : Sequelize.INTEGER,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'LOCATION_VW',
            tableName: 'NA_R_LOCATION_VW',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
