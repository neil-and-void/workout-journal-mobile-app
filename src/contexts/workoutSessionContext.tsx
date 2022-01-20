import React from 'react';

/**
 * Context to to provide workout session data
 */
const WorkoutSessionContext = React.createContext<WorkoutSessionContext>({
  activeWorkout: null,
  workoutData: [],
  setWorkoutSessionData: ({ workout: Workout, workoutData: WorkoutData }) => {},
});

export default WorkoutSessionContext;
