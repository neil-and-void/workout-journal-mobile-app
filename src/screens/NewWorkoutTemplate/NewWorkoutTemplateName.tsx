import React, { useContext } from 'react';
import { Box, FormControl, Input, Text } from 'native-base';
import NewWorkoutTemplateContext from '../../contexts/newWorkoutTemplateContext';
import WorkoutTemplateFlowErrorsContext from '../../contexts/workoutTemplateFlowErrorsContext';

const NewWorkoutTemplateName = () => {
  const { exerciseTemplates, setTemplateData } =
    useContext<WorkoutTemplateContext>(NewWorkoutTemplateContext);
  const { error } = useContext(WorkoutTemplateFlowErrorsContext);

  /**
   * callback to update workout template
   *
   * @param workoutTemplate workout template object
   */
  const setWorkoutTemplate = (workoutTemplate: WorkoutTemplate) => {
    setTemplateData(workoutTemplate);
  };

  return (
    <Box px={6} pt={8}>
      <Box alignItems="center">
        <FormControl isInvalid={Boolean(error)}>
          <Text pt={8} fontSize={32} fontWeight={600} textAlign="center">
            Routine Name
          </Text>

          <Input
            onChangeText={(text) =>
              setWorkoutTemplate({
                name: text,
                exerciseTemplates: exerciseTemplates,
              })
            }
            fontSize={24}
            pt="16"
            placeholder="Legs, chest, cardio..."
            textAlign="center"
            variant="unstyled"
          />
          {error ? (
            <FormControl.ErrorMessage
              _text={{
                fontSize: 'xs',
                color: 'error.500',
                fontWeight: 500,
                textAlign: 'center',
              }}
              alignItems="center"
            >
              {error}
            </FormControl.ErrorMessage>
          ) : null}
        </FormControl>
      </Box>
    </Box>
  );
};

export default NewWorkoutTemplateName;
