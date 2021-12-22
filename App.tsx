import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./src/screens/Signup";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import { NativeBaseProvider, extendTheme } from "native-base";
import { StatusBar } from "expo-status-bar";
import NewWorkoutTemplateFlow from "./src/screens/NewWorkoutTemplateFlow";
import { theme } from "./src/theme";

const Stack = createNativeStackNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

export default function App() {
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
