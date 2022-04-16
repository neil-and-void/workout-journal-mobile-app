import { gql } from '@apollo/client';

export const CREATE_WORKOUT_TEMPLATE = gql`
  mutation createWorkoutTemplate($workoutTemplateData: WorkoutTemplateData) {
    createWorkoutTemplate(workoutTemplateData: $workoutTemplateData) {
      id
      userId
      name
    }
  }
`;
