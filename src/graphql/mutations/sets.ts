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

export const DELETE_SET = gql`
  mutation deleteSet($id: String!) {
    deleteSet(id: $id) {
      id
    }
  }
`;
