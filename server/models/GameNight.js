const { Schema, model } = require("mongoose");
// add cell and row schema to use in table type
// figure out if this is what we want to use or go with nested options in the table on gamenight schema
const cellSchema = new Schema({
  content: {
    type: String,
    default: "",
  },
});

const rowSchema = new Schema([cellSchema]);

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

      table: [rowSchema],

    },
  ],
});

const GameNight = model("GameNight", gameNightSchema);

module.exports = GameNight;
