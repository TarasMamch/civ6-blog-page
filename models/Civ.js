const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Civ extends Model { }

Civ.init({
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
    ability_name: {
        type: DataTypes.STRING,
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
    modelName: 'civ',
})

module.exports = Civ