const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    gameNights: [GameNight]!
  }

  type GameNight {
    _id: ID
    title: String
    description: String
    games: [Game]!
  }

  type Game {
    name: String
    notes: String
    table: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    gameNights(userId: ID!): [GameNight]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGameNight(title: String!, description: String): GameNight
    addGame(gameNightId: ID!, name: String!): GameNight
    removeGameNight(gameNightId: ID!): GameNight
    removeGame(gameId: ID!): GameNight
  }
`;

module.exports = typeDefs;