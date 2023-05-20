const { AuthenticationError } = require("apollo-server-express");
const { User, GameNight } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {

  Query: {
    gameNights: async (parent, args, context) => {
      if (context.user) {
        const gameNights = await GameNight.find(
          { userId: context.user._id }
        );
      
        return gameNights;
      }
      throw new AuthenticationError("You must be logged in!")
    },
    gameNight: async (parent, { gameNightId }, context) => {
      if (context.user) {
        const gameNight = await GameNight.findOne({ _id: gameNightId });

        return gameNight;
      }
      throw new AuthenticationError("You must be logged in!");
    },
  },

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
        const userId = context.user._id;

        const gameNight = await GameNight.create({
          title,
          description,
          userId
        });

        await User.findOneAndUpdate(
          { _id: userId },
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
    updateGameNight: async (parent, { gameNightId, name }, context) => {
      if (context.user) {
        // Do stuff
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeGameNight: async (parent, { gameNightId }, context) => {
      if (context.user) {
        // Do stuff
      }
      throw new AuthenticationError("You need to be logged in");
    },
    removeGame: async (parent, { gameId }, context) => {
      if (context.user) {
        // Do stuff
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addNote: async (parent, { gameId, notes }, context) => {
      if (context.user) {
        // Do stuff
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateNote: async (parent, { gameId, notes }, context) => {
      if (context.user) {
        // Do stuff
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeNote: async (parent, { gameId }, context) => {
      if (context.user) {
        // Do stuff
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addTable: async (parent, { gameId, table }, context) => {
      if (context.user) {
        // Do stuff
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateTable: async (parent, { gameId, table }, context) => {
      if (context.user) {
        // Do stuff
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeTable: async (parent, { gameId }, context) => {
      if (context.user) {
        // Do stuff
      }
      throw new AuthenticationError("You need to be logged in!");
    }
  },
};

module.exports = resolvers;
