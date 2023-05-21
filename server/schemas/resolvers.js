const { AuthenticationError } = require("apollo-server-express");
const { User, GameNight } = require("../models");
const { signToken } = require("../utils/auth");
const { ObjectId } = require('mongoose').Types;

// helper for updateGame, all notes, and all table mutations
const mutateGameSubObject = async (type, gameId, value) => {
  const setString = "games.$[element]." + type;
  const gameNight = await GameNight.findOneAndUpdate(
    { "games._id": gameId },
    { $set: { [setString]: value} },
    { arrayFilters: [ { "element._id": new ObjectId(gameId) } ], new: true }
  ); 
    
  if (!gameNight) {
    throw new Error("No game exists with that id");
  }

  return gameNight;
};

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

    updateGameNight: async (parent, { gameNightId, title, description }, context) => {
      if (context.user) {
        const gameNight = await GameNight.findOneAndUpdate(
          { _id: gameNightId },
          { $set: { title, description } },
          { new: true, runValidators: true }
        );

        if (!gameNight) {
          throw new Error("No gameNight exists with that id");
        }

        return gameNight;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateGame: async (parent, { gameId, name }, context) => {
      if (context.user) {
        return await mutateGameSubObject("name", gameId, name);
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeGameNight: async (parent, { gameNightId }, context) => {
      if (context.user) {
        const gameNightToDelete = await GameNight.findOneAndDelete({ _id: gameNightId });

        if (!gameNightToDelete) {
          throw new Error("No GameNight exists with that id");
        }
        // remove gameNight from User's gameNights
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { gameNights: { _id: gameNightToDelete._id } } },
          { new: true }
        );

        return user;
      }
      throw new AuthenticationError("You need to be logged in");
    },

    removeGame: async (parent, { gameId }, context) => {
      if (context.user) {
        const gameNight = await GameNight.findOneAndUpdate(
          { "games._id": gameId },
          { $pull: { games: { _id: gameId } } },
          { new: true }
        );

        if (!gameNight) {
          throw new Error("No game exists with that id");
        }

        return gameNight;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addNote: async (parent, { gameId, notes }, context) => {
      if (context.user) {
        return await mutateGameSubObject("notes", gameId, notes);
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateNote: async (parent, { gameId, notes }, context) => {
      if (context.user) {
        return await mutateGameSubObject("notes", gameId, notes);
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeNote: async (parent, { gameId }, context) => {
      if (context.user) {
        return await mutateGameSubObject("notes", gameId, "");
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addTable: async (parent, { gameId, table }, context) => {
      if (context.user) {
        return await mutateGameSubObject("table", gameId, table);
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateTable: async (parent, { gameId, table }, context) => {
      if (context.user) {
        return await mutateGameSubObject("table", gameId, table);
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeTable: async (parent, { gameId }, context) => {
      if (context.user) {
        return await mutateGameSubObject("table", gameId, []);
      }
      throw new AuthenticationError("You need to be logged in!");
    }
  },
};

module.exports = resolvers;
