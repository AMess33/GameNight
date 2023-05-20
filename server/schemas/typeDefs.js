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
  # make sure table and cell are working properly
  type Game {
    name: String
    notes: String
    table: [[Cell]]!
  }

  type Cell {
    content: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    gameNights: [GameNight]!
    gameNight(gameNightId: ID!): GameNight
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGameNight(title: String!, description: String): GameNight
    addGame(gameNightId: ID!, name: String!): GameNight
    updateGameNight(title: String, description: String): GameNight
    updateGame(gameNightId: ID!, gameId: ID!, name: String!): GameNight
    removeGameNight(gameNightId: ID!): GameNight
    removeGame(gameNightId: ID!, gameId: ID!): GameNight
    addNote(gameNightId: ID!, gameId: ID!, notes: String!): GameNight
    updateNote(gameNightId: ID!, gameId: ID!, notes: String!): GameNight
    removeNote(gameNightId: ID!, gameId: ID!): GameNight
    addTable(gameNightId: ID!, gameId: ID!, table: [[Cell]]!): GameNight
    updateTable(gameNightId: ID!, gameId: ID!, table: [[Cell]]!): GameNight
    removeTable(gameNightId: ID!, gameId: ID!): GameNight
  }
`;

module.exports = typeDefs;
