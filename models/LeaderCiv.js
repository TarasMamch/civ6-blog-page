const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")
const Leader = require('./Leader')
const Civ = require("./Civ")

class LeaderCiv extends Model { }

LeaderCiv.init({
    leader_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Leader,
            key: 'id'
        }
    },
    civ_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Civ,
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'leaderciv',
})

module.exports = LeaderCiv