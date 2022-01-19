import React from 'react';

/**
 * Context for providing data on the current exercise being done
 */
const ExerciseContext = React.createContext<ExerciseContext>({
  exerciseTemplate: null,
  exercise: null,
  sets: [],
  setExerciseData: (
    exercise: Exercise,
    exerciseTemplate: ExerciseTemplate,
    sets: Set[]
  ) => {},
});

export default ExerciseContext;
