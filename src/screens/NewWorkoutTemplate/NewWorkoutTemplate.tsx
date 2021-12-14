import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";

const NewWorkoutTemplate = () => {
  const [workoutName, setWorkoutName] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Workout Name</Text>
        <TextInput
          style={styles.workoutNameInput}
          placeholder="Leg day, cardio..."
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 128,
    alignItems: "center",
  },
  title: {
    textAlign: "left",
    fontWeight: "600",
  },
  workoutNameInput: {
    fontSize: 32,
  },
});

export default NewWorkoutTemplate;
