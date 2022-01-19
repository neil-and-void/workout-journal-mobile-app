import React from 'react';

const ViewWorkoutContext = React.createContext<WorkoutTemplateContext>({
  id: -1,
  name: '',
  exerciseTemplates: [],
  setTemplateData: () => {},
});

export default ViewWorkoutContext;
