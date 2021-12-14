import React from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import theme from "../../theme";

const NewExerciseTemplates = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <TextInput style={styles.input} placeholder="name" />
        </View>
        <View style={styles.exerciseForm}>
          <TextInput style={styles.input} placeholder="sets" />
          <TextInput style={styles.input} placeholder="reps" />
          <TouchableOpacity style={styles.addExerciseButton}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text>Exercise List</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 8,
    paddingLeft: 8,
  },
  exerciseForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: theme.inputBgColor,
    borderRadius: theme.borderRadius,
    padding: 10,
    fontSize: 18,
  },
  addExerciseButton: {
    fontSize: 18,
    padding: 10,
    borderRadius: theme.borderRadius,
    backgroundColor: theme.primaryColor,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default NewExerciseTemplates;
