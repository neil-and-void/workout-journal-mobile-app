import React from 'react';

/**
 * Context for providing data on the current exercise being done
 */
const ExerciseContext = React.createContext<ExerciseContext>({
  id: -1,
  exerciseTemplate: null,
  sets: [],
  setExerciseData: (exerciseSession: ExerciseSession) => {},
});

export default ExerciseContext;
