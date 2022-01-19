import React from 'react';

/**
 * Context for create workout flow
 */
const NewWorkoutTemplateContext = React.createContext<WorkoutTemplateContext>({
  id: null,
  name: '',
  exerciseTemplates: [],
  setTemplateData: (workoutTemplate: WorkoutTemplate) => {},
});

export default NewWorkoutTemplateContext;
