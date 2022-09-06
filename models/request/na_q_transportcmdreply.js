// NA_Q_TRANSPORTCMDREPLY

const Sequelize = require('sequelize');

module.exports = class NA_Q_TRANSPORTCMDREPLY extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type : Sequelize.STRING(64),
                allowNull: false,    
                primaryKey: true       
            },
            startBiz: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            commandBiz: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            restoreBiz: {
                type : Sequelize.STRING(20),
                allowNull: true,
            },
            command: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            acsDestNodeId: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
            fsReplyTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            qaReplyTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            gReplyTime: {
                type : Sequelize.TIME,
                allowNull: true,
            },
            sendTime: {
                type: Sequelize.TIME,
                allowNull: true,
            },
            createTime: {
                type: Sequelize.TIME,
                allowNull: true,
            },
            state: {
                type : Sequelize.STRING(64),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored : false,
            modelName: 'TRANSPORTCMDREPLY',
            tableName: 'NA_Q_TRANSPORTCMDREPLY',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associations(db) {}
}
