const db = require('../config/connection');
const { GameNight, User } = require('../models');

const userData = require('./userSeeds.json');
const gameData = require('./gameSeeds.json');
const gameNightData = require('./gameNightSeeds.json');

// constants
const MAX_GAMES = 5;

// helpers
const getRandRange = (min, max) => min + Math.floor(Math.random() * (max - min));
const getRandIndex = (arr) => Math.floor(Math.random() * arr.length);
const getRandUniqueElems = (arr, num) => {
  const seenIndex = {};
  const result = [];

  while (result.length < num) {
    const index = getRandIndex(arr);
    if (seenIndex[index]) {
      continue; 
    }
    seenIndex[index] = true;
    const elem = arr[index];
    result.push(elem);
  }
  return result;
}

db.once('open', async () => {
  try {
    // Delete current db
    await GameNight.deleteMany({});
    await User.deleteMany({});

    const users = [];

    // Model.insertMany() does not trigger save middleware
    // (used in our case for password hashing on User)
    // So User(s) need to be saved one by one

    // Create users from userData
    for (const data of userData) {
      const user = await User.create(data);
      users.push(user);
    }
    // users[] should have mongoose model instances (documents) now

    // Create gameNights from gameNight data
    const gameNights = await GameNight.insertMany(gameNightData)
    // Loop through games and add them to gameNights games array
    for (const gameNight of gameNights) {
      // get games to put in gameNight's games list
      gameNight.games = getRandUniqueElems(gameData, getRandRange(1, MAX_GAMES));
      // get a random user 
      const user = users[getRandIndex(users)];
      // Add gameNight._id to random user's gameNights list
      user.gameNights.push(gameNight._id);
      // this gameNight belongs to this user now
      gameNight.userId = user._id;
      // save document to mongodb
      const gn = await gameNight.save();
      const usr = await user.save();
    } 

  } catch (err) {
    console.error(err);
    // return exit status error
    process.exit(1);
  }
  console.info('Seeding complete! 🌱');
  // return exit status success
  process.exit(0);
});