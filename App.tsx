import "react-native-gesture-handler"; // needs to be at the top
import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./src/screens/Signup";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import { NativeBaseProvider, extendTheme } from "native-base";
import { StatusBar } from "expo-status-bar";
import NewWorkoutTemplateFlow from "./src/screens/NewWorkoutTemplateFlow";
import { theme } from "./src/theme";
import * as SecureStore from "expo-secure-store";

const Stack = createNativeStackNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

export default function App() {
  const [user, setUser] = useState<User>({
    signedIn: false,
    refreshToken: null,
    authToken: null,
  });

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let authToken;
      let refreshToken;

      authToken = await SecureStore.getItemAsync("authtoken");
      refreshToken = await SecureStore.getItemAsync("refreshToken");

      if (authToken === null || refreshToken === null) {
        setUser({
          signedIn: true,
          refreshToken: null,
          authToken: null,
        });
      } else {
        setUser({
          signedIn: true,
          refreshToken: refreshToken,
          authToken: authToken,
        });
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <NativeBaseProvider theme={extendTheme(theme)}>
      <StatusBar style="dark" />
      <NavigationContainer theme={Theme}>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              name="NewWorkoutTemplateFlow"
              component={NewWorkoutTemplateFlow}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
