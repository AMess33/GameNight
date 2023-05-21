import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_GAME_NIGHT = gql`
  mutation addGameNight($title: String!, $description: String) {
    addGameNight(title: $title, description: $description) {
      _id
      title
      description
    }
  }
`;

export const ADD_GAME = gql`
  mutation addGame($gameNightId: ID!, $name: String!) {
    addGame(gameNightId: $gameNightId, name: $name) {
      _id
      title
      description
      games {
        _id
        name
        notes
        table
      }
    }
  }
`;

export const UPDATE_GAME_NIGHT = gql`
  mutation updateGameNight($gameNightId: ID!, $title: String, $description: String) {
    updateGameNight(gameNightId: $gameNightId, title: $title, description: $description) {
      _id
      title
      description
      userId
      games {
        _id
        name
        notes
        table
      }
    }
  }
`;

export const UPDATE_GAME = gql`
  mutation updateGame($gameId: ID!, $name: String!) {
    updateGame(gameId: $gameId, name: $name) {
      _id
      title
      description
      userId
      games {
        _id
        name
        notes
        table
      }
    }
  }
`;

export const REMOVE_GAME_NIGHT = gql`
  mutation removeGameNight($gameNightId: ID!) {
    removeGameNight(gameNightId: $gameNightId) {
      _id
      email
      username
      gameNights {
        _id
        title
        description
      }
    }
  }
`;

export const REMOVE_GAME = gql`
  mutation removeGame($gameId: ID!) {
    removeGame(gameId: $gameId) {
      _id
      title
      description
      userId
      games {
        _id
        name
        notes
        table
      }
    }
  }
`;

export const ADD_NOTE = gql`
  mutation addNote($gameId: ID!, $notes: String!) {
    addNote(gameId: $gameId, notes: $notes) {
      _id
      title
      description
      userId
      games {
        _id
        name
        notes
        table
      }
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation updateNote($gameId: ID!, $notes: String!) {
    addNote(gameId: $gameId, notes: $notes) {
      _id
      title
      description
      userId
      games {
        _id
        name
        notes
        table
      }
    }
  }
`;

export const REMOVE_NOTE = gql`
  mutation removeNote($gameId: ID!) {
    removeNote(gameId: $gameId) {
      _id
      title
      description
      userId
      games {
        _id
        name
        notes
        table
      }
    }
  }
`;

// table is an object with a rows key that has 
// a value of an array of an array of strings
// Example:
// const table = {
//   rows: [
//     ['Mary', '100', '80'],
//     ['John', '32', '67'],
//     ['Carl', '80', '50']
//   ]
// };
export const ADD_TABLE = gql`
  mutation addTable($gameId: ID!, $table: Table!) {
    addTable(gameId: $gameId, table: $table) {
      _id
      title
      description
      userId
      games {
        _id
        name
        notes
        table
      }
    }
  }
`;

export const UPDATE_TABLE = gql`
  mutation updateTable($gameId: ID!, $table: Table!) {
    updateTable(gameId: $gameId, table: $table) {
      _id
      title
      description
      userId
      games {
        _id
        name
        notes
        table
      }
    }
  }
`;

export const REMOVE_TABLE = gql`
  mutation removeTable($gameId: ID!) {
    removeTable(gameId: $gameId) {
      _id
      title
      description
      userId
      games {
        _id
        name
        notes
        table
      }
    }
  }
`;