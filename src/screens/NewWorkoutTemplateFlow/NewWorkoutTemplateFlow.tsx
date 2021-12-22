import React from "react";
import { Button } from "native-base";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewWorkoutTemplate from "../NewWorkoutTemplate";
import NewExerciseTemplates from "../NewExerciseTemplates";
import theme from "../../theme";

const Stack = createNativeStackNavigator();

const NewWorkoutTemplateFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewWorkoutTemplate"
        options={({ navigation }) => ({
          headerLeft: () => (
            <Button
              variant="unstyled"
              color={theme.primaryColor}
              onPress={() => navigation.goBack()}
              _text={{ color: "primary.500", fontSize: 18, fontWeight: 400 }}
            >
              Cancel
            </Button>
          ),
          headerRight: () => (
            <Button
              variant="unstyled"
              color={theme.primaryColor}
              onPress={() => navigation.navigate("NewExerciseTemplates")}
              _text={{ color: "primary.500", fontSize: 18, fontWeight: 400 }}
            >
              Next
            </Button>
          ),
          headerShadowVisible: false,
          title: "",
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
              _text={{ color: "primary.500", fontSize: 18, fontWeight: 400 }}
            >
              Back
            </Button>
          ),
          headerRight: () => (
            <Button
              variant="unstyled"
              color={theme.primaryColor}
              onPress={() =>
                navigation.navigate("Home", { screen: "WorkoutHome" })
              }
              _text={{ color: "primary.500", fontSize: 18, fontWeight: 400 }}
            >
              Create
            </Button>
          ),
          headerShadowVisible: false,
          title: "",
          animationEnabled: false,
        })}
        component={NewExerciseTemplates}
      />
    </Stack.Navigator>
  );
};

export default NewWorkoutTemplateFlow;
