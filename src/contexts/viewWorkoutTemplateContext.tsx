import React from 'react';

const ViewWorkoutContext = React.createContext<WorkoutTemplateContext>({
  name: '',
  exerciseTemplates: [],
  setTemplateData: () => {},
});

export default ViewWorkoutContext;
