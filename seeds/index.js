const sequelize = require('../config/connection');
const seedLeaders = require('./leader-seeds')
const seedCivs = require('./civ-seeds');
const seedLeaderCiv = require('./leaderciv-seeds');
const seedUnits = require('./unit-seeds');
const seedBuildings = require('./building-seeds');


const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n----- DATABASE SYNCED -----\n')

    await seedUnits()
    console.log('\n----- UNITS SEEDED -----\n')

    await seedBuildings()
    console.log('\n----- BUILDINGS SEEDED -----\n')

    await seedLeaders()
    console.log('\n----- LEADERS SEEDED -----\n')

    await seedCivs()
    console.log('\n----- CIVS SEEDED -----\n')

    await seedLeaderCiv()
    console.log('\n----- LEADERCIVS SEEDED -----\n')

    console.log('\n----- ALL IS DONE, EXITING -----\n')

    process.exit(0);
};

seedAll();