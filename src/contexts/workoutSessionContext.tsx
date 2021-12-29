import React from 'react';

const WorkoutSessionContext = React.createContext<WorkoutSessionContext>({
  workout: null,
  setWorkoutSessionData: (workout: Workout) => {},
});

export default WorkoutSessionContext;
