import React, { useState } from "react";
import { Box, Input, Text, Button, FormControl } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import Exercise from "../../components/Exercise";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const NewExerciseTemplates = ({
  navigation,
}: NativeStackScreenProps<any, any>) => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState<number>(0);
  const [sets, setSets] = useState<number>(0);
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);

  const addNewExerciseTemplate = () => {
    console.log(exerciseList);
    setExerciseList([...exerciseList, { name, reps, sets }]);
  };

  const createNewWorkout = () => {
    navigation.navigate("Home");
  };

  return (
    <Box h="100%" flexDirection="column" px={6}>
      <Box flexDirection="column" pb={4}>
        <FormControl>
          <Box>
            <Text fontSize={24} fontWeight={600}>
              Add New Exercises
            </Text>
          </Box>
          <Box pb={2}>
            <FormControl.Label>Name</FormControl.Label>
            <Input
              onChangeText={setName}
              placeholder="name"
              p={3}
              size="lg"
              variant="rounded"
            />
          </Box>
          <Box flexDirection="row" w="100%" pb={3}>
            <Box flexDirection="row">
              <Box pr={2} w="50%">
                <FormControl.Label>Sets</FormControl.Label>
                <Input
                  onChangeText={setSets}
                  placeholder="sets"
                  p={3}
                  size="lg"
                  variant="rounded"
                  keyboardType="decimal-pad"
                />
              </Box>
              <Box pr={2} w="50%">
                <FormControl.Label>Reps</FormControl.Label>
                <Input
                  onChangeText={setReps}
                  placeholder="reps"
                  p={3}
                  size="lg"
                  variant="rounded"
                  keyboardType="decimal-pad"
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Button
              _text={{ fontSize: "md" }}
              w="100%"
              onPress={addNewExerciseTemplate}
            >
              Add
            </Button>
          </Box>
        </FormControl>
      </Box>
      <ScrollView
        _contentContainerStyle={{
          h: "100%",
        }}
      >
        {exerciseList.map((exercise, idx) => {
          return <Exercise exercise={exercise} key={idx} />;
        })}
      </ScrollView>
    </Box>
  );
};

export default NewExerciseTemplates;
