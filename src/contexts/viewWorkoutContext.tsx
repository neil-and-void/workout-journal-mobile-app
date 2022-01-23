import React from 'react';

const ViewWorkoutContext = React.createContext<ViewWorkoutContext>({
  workout: null,
  workoutData: [],
  setViewWorkoutData: (workout: WorkoutData) => {},
});

export default ViewWorkoutContext;
