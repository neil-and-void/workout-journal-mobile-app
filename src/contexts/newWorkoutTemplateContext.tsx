import React from 'react';

const NewWorkoutTemplateContext = React.createContext<WorkoutTemplateContext>({
  id: null,
  name: '',
  exerciseTemplates: [],
  setTemplateData: (workoutTemplate: WorkoutTemplate) => {},
});

export default NewWorkoutTemplateContext;
