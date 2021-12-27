import React from 'react';

const NewWorkoutTemplateContext = React.createContext<WorkoutTemplateContext>({
  name: '',
  exerciseTemplates: [],
  setTemplateData: (workoutTemplate: WorkoutTemplate) => {},
});

export default NewWorkoutTemplateContext;
