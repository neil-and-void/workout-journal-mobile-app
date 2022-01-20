import 'react-native-gesture-handler'; // needs to be at the top
import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, extendTheme, Button } from 'native-base';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';

import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import NewWorkoutTemplateFlow from './src/screens/NewWorkoutTemplateFlow';
import ViewWorkoutTemplate from './src/screens/ViewWorkoutTemplate';
import WorkoutSession from './src/screens/WorkoutSession/WorkoutSession';
import SetsInput from './src/screens/SetsInput';
import UserAuthContext from './src/contexts/userContext';
import WorkoutSessionContext from './src/contexts/workoutSessionContext';
import ExerciseContext from './src/contexts/exerciseContext';
import ViewWorkoutTemplateContext from './src/contexts/viewWorkoutTemplateContext';
import SetService from './src/services/SetService';
import { theme } from './src/theme';

const Stack = createNativeStackNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export default function App() {
  const [userAuth, setUserAuth] = useState<User>({
    signedOut: true,
  });
  const [viewWorkoutTemplate, setViewWorkoutTemplate] =
    useState<WorkoutTemplate>({
      id: -1,
      name: '',
      exerciseTemplates: [],
    });
  const [workoutSession, setWorkoutSession] = useState<WorkoutSession>({
    activeWorkout: null,
    workoutData: [],
  });
  const [exercise, setExercise] = useState<ExerciseSession>({
    exerciseTemplate: null,
    exercise: null,
    sets: [],
  });

  /**
   * callback function to set userAuth state
   *
   * @param user
   */
  const setUserAuthData = (user: User) => {
    setUserAuth(user);
  };

  const addSet = async (newSet) => {
    const set = await SetService.createSet(newSet);
    setExercise({ ...exercise, sets: [...exercise.sets, set] });
  };

  /**
   * callback function to set the exercise id and exercise template in the current exercise session
   *
   * @param exerciseId id of the current exercise being done
   * @param exerciseTemplate exercise template of the current exercise being done
   */
  const setExerciseData = (
    exercise: Exercise,
    exerciseTemplate: ExerciseTemplate,
    sets: ExerciseSet[]
  ) => {
    setExercise({
      exercise,
      exerciseTemplate,
      sets,
    });
  };

  /**
   * callback function to set the viewed workout
   *
   * @param workoutTemplate workout template to be viewed
   */
  const setViewWorkoutTemplateData = (workoutTemplate: WorkoutTemplate) => {
    setViewWorkoutTemplate(workoutTemplate);
  };

  /**
   * callback function to set workout in current workout session
   *
   * @param workout the workout being done currently
   */
  const setWorkoutSessionData = (workout: Workout) => {
    setWorkoutSession(workout);
  };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let accessToken;
      let refreshToken;

      accessToken = await SecureStore.getItemAsync('accessToken');
      refreshToken = await SecureStore.getItemAsync('refreshToken');

      if (accessToken === null || refreshToken === null) {
        setUserAuth({
          signedOut: true,
        });
      } else {
        setUserAuth({
          signedOut: false,
        });
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <ExerciseContext.Provider value={{ ...exercise, setExerciseData }}>
      <WorkoutSessionContext.Provider
        value={{
          ...workoutSession,
          setWorkoutSessionData: setWorkoutSessionData,
        }}
      >
        <ViewWorkoutTemplateContext.Provider
          value={{ ...viewWorkoutTemplate, setViewWorkoutTemplateData }}
        >
          <UserAuthContext.Provider
            value={{ ...userAuth, setUserData: setUserAuthData }}
          >
            <NativeBaseProvider theme={extendTheme(theme)}>
              <StatusBar style="dark" />
              <NavigationContainer theme={Theme}>
                <Stack.Navigator>
                  {/* only show authorized screens if user is authenticated */}
                  {userAuth.signedOut ? (
                    <>
                      <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="Signup"
                        component={Signup}
                        options={{ headerShown: false }}
                      />
                    </>
                  ) : (
                    <>
                      <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="NewWorkoutTemplateFlow"
                        component={NewWorkoutTemplateFlow}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="ViewWorkoutTemplate"
                        component={ViewWorkoutTemplate}
                        options={({ navigation }) => ({
                          headerLeft: () => (
                            <Button
                              variant="unstyled"
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
                          headerShadowVisible: false,
                          title: 'Workout Template',
                          animationEnabled: false,
                        })}
                      />
                      <Stack.Screen
                        name="WorkoutSession"
                        component={WorkoutSession}
                        options={({ navigation }) => ({
                          headerLeft: () => (
                            <Button
                              variant="unstyled"
                              onPress={() =>
                                navigation.navigate('Home', {
                                  screen: 'Workouts',
                                })
                              }
                              _text={{
                                color: 'primary.500',
                                fontSize: 18,
                                fontWeight: 400,
                              }}
                            >
                              Back
                            </Button>
                          ),
                          headerShadowVisible: false,
                          title: 'Session',
                          animationEnabled: false,
                        })}
                      />
                      <Stack.Screen
                        name="SetsInput"
                        component={SetsInput}
                        options={({ navigation }) => ({
                          headerLeft: () => (
                            <Button
                              variant="unstyled"
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
                              onPress={async () =>
                                await addSet({
                                  reps: null,
                                  weight: null,
                                  exerciseId: exercise?.exercise.id,
                                })
                              }
                              _text={{
                                color: 'primary.500',
                                fontSize: 18,
                                fontWeight: 400,
                              }}
                            >
                              Add set +
                            </Button>
                          ),
                          headerShadowVisible: false,
                          title: 'Sets',
                          animationEnabled: false,
                        })}
                      />
                    </>
                  )}
                </Stack.Navigator>
              </NavigationContainer>
            </NativeBaseProvider>
          </UserAuthContext.Provider>
        </ViewWorkoutTemplateContext.Provider>
      </WorkoutSessionContext.Provider>
    </ExerciseContext.Provider>
  );
}
