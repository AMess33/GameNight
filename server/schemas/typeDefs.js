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
    userId: ID
    games: [Game]!
  }
  # make sure table and cell are working properly
  type Game {
    _id: ID
    name: String
    notes: String
    # table: [[Cell]]!
    table: [[String]]!
  }

  type Cell {
    content: String
  }

  input Table {
    rows: [[String]]!
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
    updateGameNight(gameNightId: ID!, title: String, description: String): GameNight
    updateGame(gameId: ID!, name: String!): GameNight
    removeGameNight(gameNightId: ID!): User
    removeGame(gameId: ID!): GameNight
    addNote(gameId: ID!, notes: String!): GameNight
    updateNote(gameId: ID!, notes: String!): GameNight
    removeNote(gameId: ID!): GameNight
    addTable(gameId: ID!, table: Table!): GameNight
    updateTable(gameId: ID!, table: Table!): GameNight
    removeTable(gameId: ID!): GameNight
  }
`;

module.exports = typeDefs;
