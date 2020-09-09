const { DataTypes, Model } = require('sequelize');

module.exports = class tabela extends Model {
    static init(sequelize) {
        return super.init({
            ip: {type: DataTypes.STRING},
            porta: { type: DataTypes.STRING}
        }, {
            tableName: 'tabela',
            timestamps: true,
            sequelize
        });
    }
}