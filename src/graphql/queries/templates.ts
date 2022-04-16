import { gql } from '@apollo/client';

export const GET_WORKOUTS = gql`
  query workoutTemplates($filter: WorkoutTemplateFilter) {
    workoutTemplates(filter: $filter) {
      name
      exerciseTemplates {
        id
        name
        reps
        sets
      }
    }
  }
`;
