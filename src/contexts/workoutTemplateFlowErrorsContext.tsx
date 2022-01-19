import React from 'react';

/**
 * Context for providing errors in create workout template flow
 */
const WorkoutTemplateFlowErrorsContext =
  React.createContext<WorkoutTemplateFormErrorsContext>({
    error: null,
  });

export default WorkoutTemplateFlowErrorsContext;
