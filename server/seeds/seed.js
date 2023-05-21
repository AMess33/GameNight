const db = require('../config/connection');
const { GameNight, User } = require('../models');

const userData = require('./userSeeds.json');
const gameData = require('./gameSeeds.json');
const gameNightData = require('./gameNightSeeds.json');

// helpers
const getRandIndex = (arr) => Math.floor(Math.random() * arr.length);
const getRandElemFromList = (arr) => arr[getRandIndex(arr)];

db.once('open', async () => {
  try {
    // Delete current db
    await GameNight.deleteMany({});
    await User.deleteMany({});

    // Model.insertMany() does not trigger save middleware (used in our case for password hashing on User)
    // So User(s) need to be saved one by one

    // Create users from userData

    // Create gameNights from gameNight data

    // Loop through games and add them to gameNights games array

    // Loop through gameNights and add userId to each one
    // - Ensure that gameNight _id is added to user's gameNights array

  } catch (err) {
    console.error(err);
    // return exit status error
    process.exit(1);
  }
  console.info('Seeding complete! 🌱');
  // return exit status success
  process.exit(0);
});