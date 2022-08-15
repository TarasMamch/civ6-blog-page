const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")
const Civ = require("./Civ")

class Leader extends Model { }

Leader.init({
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
    bio: {
        type: DataTypes.TEXT,
        allownull: false
    },
    leader_bonus_name: {
        type: DataTypes.STRING,
        allownull: false
    },
    leader_bonus: {
        type: DataTypes.TEXT,
        allownull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'leader',
})

module.exports = Leader