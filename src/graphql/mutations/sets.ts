import { gql } from '@apollo/client';

export const CREATE_SET = gql`
  mutation createSet($set: CreateSetInput) {
    createSet(set: $set) {
      id
      reps
      weight
    }
  }
`;
