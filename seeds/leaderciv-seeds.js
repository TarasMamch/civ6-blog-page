const { LeaderCiv } = require('../models')

const leaderCivData = [
    {
        leaderId: 1,
        civId: 29
    },
    {
        leaderId: 2,
        civId: 36
    },
    {
        leaderId: 3,
        civId: 16
    },
    {
        leaderId: 4,
        civId: 49
    },
    {
        leaderId: 5,
        civId: 7
    },
    {
        leaderId: 6,
        civId: 15
    },
    {
        leaderId: 7,
        civId: 15
    },
    {
        leaderId: 8,
        civId: 23
    },
    {
        leaderId: 9,
        civId: 12
    },
    {
        leaderId: 10,
        civId: 38
    },
    {
        leaderId: 11,
        civId: 39
    },
    {
        leaderId: 12,
        civId: 13
    },
    {
        leaderId: 12,
        civId: 15
    },
    {
        leaderId: 13,
        civId: 18
    },
    {
        leaderId: 14,
        civId: 23
    },
    {
        leaderId: 15,
        civId: 34
    },
    {
        leaderId: 16,
        civId: 47
    },
    {
        leaderId: 17,
        civId: 24
    },
    {
        leaderId: 18,
        civId: 20
    },
    {
        leaderId: 19,
        civId: 5
    },
    {
        leaderId: 20,
        civId: 35
    },
    {
        leaderId: 21,
        civId: 25
    },
    {
        leaderId: 22,
        civId: 40
    },
    {
        leaderId: 23,
        civId: 26
    },
    {
        leaderId: 24,
        civId: 41
    },
    {
        leaderId: 25,
        civId: 3
    },
    {
        leaderId: 26,
        civId: 48
    },
    {
        leaderId: 27,
        civId: 34
    },
    {
        leaderId: 27,
        civId: 9
    },
    {
        leaderId: 28,
        civId: 31
    },
    {
        leaderId: 29,
        civId: 33
    },
    {
        leaderId: 30,
        civId: 32
    },
    {
        leaderId: 31,
        civId: 30
    },
    {
        leaderId: 32,
        civId: 21
    },
    {
        leaderId: 33,
        civId: 14
    },
    {
        leaderId: 34,
        civId: 4
    },
    {
        leaderId: 35,
        civId: 27
    },
    {
        leaderId: 36,
        civId: 22
    },
    {
        leaderId: 37,
        civId: 6
    },
    {
        leaderId: 38,
        civId: 20
    },
    {
        leaderId: 39,
        civId: 43
    },
    {
        leaderId: 40,
        civId: 46
    },
    {
        leaderId: 41,
        civId: 10
    },
    {
        leaderId: 42,
        civId: 9
    },
    {
        leaderId: 43,
        civId: 44
    },
    {
        leaderId: 44,
        civId: 2
    },
    {
        leaderId: 45,
        civId: 28
    },
    {
        leaderId: 46,
        civId: 50
    },
    {
        leaderId: 47,
        civId: 19
    },
    {
        leaderId: 48,
        civId: 37
    },
    {
        leaderId: 49,
        civId: 17
    },
    {
        leaderId: 50,
        civId: 1
    },
    {
        leaderId: 51,
        civId: 1
    },
    {
        leaderId: 52,
        civId: 45
    },
    {
        leaderId: 53,
        civId: 42
    },
    {
        leaderId: 54,
        civId: 13
    },
    {
        leaderId: 55,
        civId: 8
    },
    {
        leaderId: 56,
        civId: 11
    }
]

const seedLeaderCiv = () => LeaderCiv.bulkCreate(leaderCivData)

module.exports = seedLeaderCiv 