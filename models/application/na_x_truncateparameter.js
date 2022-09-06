// NA_X_TRUNCATEPARAMETER

const Sequelize = require('sequelize');

module.exports = class NA_X_TRUNCATEPARAMETER extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            tableName: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            nativeSql: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            partitioningBase: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            savePeriod: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            truncateSingleOrMulti: {
                type: Sequelize.STRING(6),
                allowNull: true,
            },
            description: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },  
            createTime: {
                type: Sequelize.TIME,
                allowNull: true,
            },  
            creator: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },  
            editor: {
                type: Sequelize.STRING(45),
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
            modelName: 'TRUNCATEPARAMETER',
            tableName: 'NA_X_TRUNCATEPARAMETER',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
