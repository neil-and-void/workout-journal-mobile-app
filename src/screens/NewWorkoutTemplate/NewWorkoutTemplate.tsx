import React, { useState } from "react";
import { Box, Input, Text } from "native-base";

const NewWorkoutTemplate = () => {
  const [workoutName, setWorkoutName] = useState("");

  return (
    <Box px={6} pt={8}>
      <Box alignItems="center">
        <Text fontSize={32} fontWeight={600}>
          Workout Name
        </Text>
        <Input
          onChangeText={setWorkoutName}
          fontSize={24}
          placeholder="Legs, chest..."
          variant="unstyled"
        />
      </Box>
    </Box>
  );
};

export default NewWorkoutTemplate;
