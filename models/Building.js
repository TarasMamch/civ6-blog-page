const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Building extends Model { }

Building.init({
    id: {
        type: DataTypes.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allownull: false
    },
    icon: {
        type: DataTypes.STRING,
        allownull: false
    },
    description: {
        type: DataTypes.TEXT,
        allownull: false
    },
    ability: {
        type: DataTypes.TEXT,
        allownull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'building',
})

module.exports = Building