const { Schema, model } = require("mongoose");

const gameNightSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  games: [
    {
      name: {
        type: String,
        required: true,
      },
      notes: {
        type: String,
      },
      table: {
        type: String,
      },
    },
  ],
});

const GameNight = model("GameNight", gameNightSchema);

module.exports = GameNight;
