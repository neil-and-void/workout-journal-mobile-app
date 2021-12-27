import React from 'react';

const WorkoutTemplateFlowErrorsContext =
  React.createContext<WorkoutTemplateFormErrorsContext>({
    error: null,
  });

export default WorkoutTemplateFlowErrorsContext;
