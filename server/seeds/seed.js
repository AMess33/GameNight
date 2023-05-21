const db = require('../config/connection');
const { GameNight, User } = require('../models');

const userData = require('./userSeeds.json');
const gameData = require('./gameSeeds.json');
const gameNightData = require('./gameNightSeeds.json');