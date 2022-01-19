import React from 'react';

/**
 * Context for passing data around workout template data
 */
const ViewWorkoutTemplateContext =
  React.createContext<ViewWorkoutTemplateContext>({
    id: -1,
    name: '',
    exerciseTemplates: [],
    setViewWorkoutTemplateData: (workoutTemplate: WorkoutTemplate) => {},
  });

export default ViewWorkoutTemplateContext;
