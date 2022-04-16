import React, { useState } from 'react';
import { Button } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewWorkoutTemplate from '../NewWorkoutTemplate';
import NewExerciseTemplates from '../NewExerciseTemplates';
import NewWorkoutTemplateContext from '../../contexts/newWorkoutTemplateContext';
import theme from '../../theme';
import WorkoutTemplateFlowErrorsContext from '../../contexts/workoutTemplateFlowErrorsContext';
import { useMutation } from '@apollo/client';
import { CREATE_WORKOUT_TEMPLATE } from '../../graphql/mutations/templates';

const Stack = createNativeStackNavigator();

const NewWorkoutTemplateFlow = ({
  navigation,
}: NativeStackScreenProps<any, any>) => {
  const [createWorkoutTemplate, { data, loading, error: err }] = useMutation(
    CREATE_WORKOUT_TEMPLATE
  );
  const [workoutTemplate, setWorkoutTemplate] = useState<WorkoutTemplate>({
    name: '',
    exerciseTemplates: [],
  });
  const [error, setError] = useState<string | null>(null);
  /**
   * callback to update workout template
   *
   * @param workoutTemplate workout template object
   */
  const setWorkoutTemplateData = (workoutTemplate: WorkoutTemplate) => {
    setWorkoutTemplate(workoutTemplate);
  };

  /**
   * check if name is invalid
   *
   * @param name workout name
   * @returns boolean indicating if name is valid
   */
  const isNameInvalid = (name: string) => {
    return name === undefined || name === null || name === '';
  };

  /**
   * check if exercise template is invalid
   *
   * @param exerciseTemplates
   * @returns boolean indicating if exercise templates is invalid
   */
  const isExerciseTemplateInvalid = (exerciseTemplates: ExerciseTemplate[]) => {
    return (
      exerciseTemplates === undefined ||
      exerciseTemplates === null ||
      exerciseTemplates.length === 0
    );
  };

  /**
   * navigate to next screen in workout template flow if name is valid
   */
  const navigateNext = () => {
    if (isNameInvalid(workoutTemplate.name)) {
      setError('Workout name invalid');
      return;
    }
    // clear error
    setError(null);
    navigation.navigate('NewExerciseTemplates');
  };

  /**
   * submit workout template to be created
   */
  const createWorkout = async () => {
    if (isExerciseTemplateInvalid(workoutTemplate.exerciseTemplates)) {
      setError('Workout name invalid');
      return;
    }
    try {
      // clear error
      setError(null);
      await createWorkoutTemplate({
        variables: { workoutTemplateData: workoutTemplate },
      });
      navigation.navigate('Home', { screen: 'Workouts' });
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <NewWorkoutTemplateContext.Provider
      value={{ ...workoutTemplate, setTemplateData: setWorkoutTemplateData }}
    >
      <WorkoutTemplateFlowErrorsContext.Provider value={{ error }}>
        <Stack.Navigator>
          <Stack.Screen
            name="NewWorkoutTemplateName"
            options={({ navigation }) => ({
              headerLeft: () => (
                <Button
                  variant="unstyled"
                  color={theme.primaryColor}
                  onPress={() => navigation.goBack()}
                  _text={{
                    color: 'primary.500',
                    fontSize: 18,
                    fontWeight: 400,
                  }}
                >
                  Cancel
                </Button>
              ),
              headerRight: () => (
                <Button
                  variant="unstyled"
                  color={theme.primaryColor}
                  onPress={() => navigateNext()}
                  _text={{
                    color: 'primary.500',
                    fontSize: 18,
                    fontWeight: 400,
                  }}
                >
                  Next
                </Button>
              ),
              headerShadowVisible: false,
              title: '',
              animationEnabled: false,
            })}
            component={NewWorkoutTemplate}
          />

          <Stack.Screen
            name="NewExerciseTemplates"
            options={({ navigation }) => ({
              headerLeft: () => (
                <Button
                  variant="unstyled"
                  color={theme.primaryColor}
                  onPress={() => navigation.goBack()}
                  _text={{
                    color: 'primary.500',
                    fontSize: 18,
                    fontWeight: 400,
                  }}
                >
                  Back
                </Button>
              ),
              headerRight: () => (
                <Button
                  variant="unstyled"
                  color={theme.primaryColor}
                  onPress={() => createWorkout()}
                  _text={{
                    color: 'primary.500',
                    fontSize: 18,
                    fontWeight: 400,
                  }}
                >
                  Create
                </Button>
              ),
              headerShadowVisible: false,
              title: '',
              animationEnabled: false,
            })}
            component={NewExerciseTemplates}
          />
        </Stack.Navigator>
      </WorkoutTemplateFlowErrorsContext.Provider>
    </NewWorkoutTemplateContext.Provider>
  );
};

export default NewWorkoutTemplateFlow;
