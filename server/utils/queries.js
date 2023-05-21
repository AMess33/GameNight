import { gql } from '@apollo/client';

export const QUERY_GAME_NIGHTS = gql`
  query gameNights {
    _id
    title
    description
    games {
      _id
      name
      notes
    }
  }
`;

export const QUERY_GAME_NIGHT = gql`
  query gameNight($gameNightId: ID!) {
    gameNight(gameNightId: $gameNightId) {
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