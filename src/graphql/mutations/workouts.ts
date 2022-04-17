import { gql } from '@apollo/client';

export const START_WORKOUT = gql`
  mutation workout($workoutTemplateId: Int) {
    workout(workoutTemplateId: $workoutTemplateId) {
      id
    }
  }
`;
