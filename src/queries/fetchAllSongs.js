import { gql } from "@apollo/client";

export const FETCH_ALL_SONGS = gql`
  {
    songs {
      id
      title
    }
  }
`;
