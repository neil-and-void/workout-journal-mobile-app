import React from "react";
import { ScrollView, Box, Text } from "native-base";
import Workout from "../../components/Workout";
import theme from "../../theme";

const Journal = () => {
  return (
    <Box p={2} safeArea>
      <Box>
        <Text fontSize={48} fontWeight={700}>
          Journal
        </Text>
      </Box>
      <ScrollView>
        <Workout />
        <Workout />
        <Workout />
        <Workout />
        <Workout />
        <Workout />
        <Workout />
        <Workout />
        <Workout />
        <Workout />
        <Workout />
        <Workout />
        <Workout />
      </ScrollView>
    </Box>
  );
};

export default Journal;
