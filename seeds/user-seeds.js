const { User } = require('../models')

const userData = [
    {
        username: 'yaBoi',
        email: 'ya@boi.com',
        password: 'password'
    }
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true })

module.exports = seedUsers