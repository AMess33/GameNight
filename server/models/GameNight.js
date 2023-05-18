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
      table: [
        [
          {
            order: {
              type: Number,
              required: true,
            },
            content: {
              type: String,
              defaultValue: "",
            },
          },
        ],
      ],
    },
  ],
});

const GameNight = model("GameNight", gameNightSchema);

module.exports = GameNight;
