import { gql } from '@apollo/client';

export const GET_WORKOUT = gql`
  query workout($filter: WorkoutFilter) {
    workout(filter: $filter) {
      id
      exercises {
        id
        exerciseTemplate {
          name
          sets
          reps
        }
        sets {
          weight
          reps
        }
      }
    }
  }
`;
