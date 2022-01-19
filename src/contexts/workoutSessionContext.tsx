import React from 'react';

/**
 * Context to to provide workout session data
 */
const WorkoutSessionContext = React.createContext<WorkoutSessionContext>({
  workout: null,
  setWorkoutSessionData: (workout: Workout) => {},
});

export default WorkoutSessionContext;
