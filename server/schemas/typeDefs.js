const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: _id
        username: String
        email: String
        password: String
        gameNights: [GameNight]!    
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;
