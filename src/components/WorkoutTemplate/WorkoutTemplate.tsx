import { Box } from "native-base";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import theme from "../../theme";

const WorkoutTemplate = () => {
  return (
    <Pressable onPress={() => {}}>
      <Box rounded={16} mb={4} p={4} bg="warmGray.200">
        <Text style={styles.workoutName}>Legs</Text>
        <Text style={styles.workoutCount}>
          6 <Text style={styles.text}>exercises</Text>
        </Text>
      </Box>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  workoutTemplate: {
    borderRadius: theme.borderRadius,
    backgroundColor: theme.tertiaryColor,
    padding: 24,
  },
  workoutName: {
    fontWeight: "700",
    fontSize: 16,
  },
  workoutCount: {
    fontSize: 32,
    fontWeight: "700",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default WorkoutTemplate;
