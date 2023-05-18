const { AuthenticationError } = require("apollo-server-express");
const { User, GameNight } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {},
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addGameNight: async (parent, { title, description }, context) => {
      if (context.user) {
        const gameNight = await GameNight.create({
          title,
          description,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { gameNights: gameNight._id } }
        );

        return gameNight;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addGame: async (parent, { gameNightId, name }, context) => {
      if (context.user) {
        return GameNight.findOneAndUpdate(
          { _id: gameNightId },
          {
            $addToSet: {
              games: { name },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
