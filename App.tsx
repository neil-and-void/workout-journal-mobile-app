import 'react-native-gesture-handler'; // needs to be at the top
import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import { NativeBaseProvider, extendTheme, Button } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import NewWorkoutTemplateFlow from './src/screens/NewWorkoutTemplateFlow';
import { theme } from './src/theme';
import * as SecureStore from 'expo-secure-store';
import UserAuthContext from './src/contexts/userContext';
import ViewWorkoutContext from './src/contexts/viewWorkoutTemplateContext';
import ViewWorkoutTemplate from './src/screens/ViewWorkoutTemplate';
import WorkoutSession from './src/screens/WorkoutSession/WorkoutSession';

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
      name: '',
      exerciseTemplates: [],
    });

  /**
   * callback function to set userAuth state
   *
   * @param user
   */
  const setUserAuthData = (user: User) => {
    setUserAuth(user);
  };

  /**
   * callback function to set the viewed workout
   *
   * @param workoutTemplate workout template to be viewed
   */
  const setViewWorkoutTemplateData = (workoutTemplate: WorkoutTemplate) => {
    setViewWorkoutTemplate(workoutTemplate);
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
    <UserAuthContext.Provider
      value={{ ...userAuth, setUserData: setUserAuthData }}
    >
      <ViewWorkoutContext.Provider
        value={{
          ...viewWorkoutTemplate,
          setTemplateData: setViewWorkoutTemplateData,
        }}
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
                      title: '',
                      animationEnabled: false,
                    })}
                  />
                  <Stack.Screen
                    name="WorkoutSession"
                    component={WorkoutSession}
                    options={{ headerShown: false }}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </ViewWorkoutContext.Provider>
    </UserAuthContext.Provider>
  );
}
