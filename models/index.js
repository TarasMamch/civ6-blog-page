const Leader = require('./Leader')
const Civ = require('./Civ')
const LeaderCiv = require('./LeaderCiv')
const Unit = require("./Unit")
const Building = require('./Building')
const User = require('./User')
const Post = require('./Post')

Leader.belongsToMany(Civ, { through: LeaderCiv })

Civ.belongsToMany(Leader, { through: LeaderCiv })

Civ.belongsTo(Unit)

Unit.hasOne(Civ)

Civ.belongsTo(Building)

Building.hasOne(Civ)

User.hasMany(Post, {
    onDelete: "CASCADE",
    foreignKey: {
        allowNull: false
    }
})

Post.belongsTo(User)

module.exports = {
    Leader,
    Civ,
    LeaderCiv,
    Unit,
    Building,
    User,
    Post
}