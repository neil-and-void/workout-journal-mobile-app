import React from 'react';

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
