import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Workouts from "../Workouts";

const Stack = createStackNavigator();

const WorkoutHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Workouts"
        component={Workouts}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default WorkoutHome;
