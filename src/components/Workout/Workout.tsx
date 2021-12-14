import React from "react";
import { Box } from "native-base";
import { View, Text, StyleSheet, Pressable } from "react-native";

import theme from "../../theme";

const Workout = () => {
  return (
    <Pressable onPress={() => {}}>
      <Box rounded={16} mb={4} p={4} bg="warmGray.200">
        <Text style={styles.date}>Dec 10</Text>
      </Box>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  workout: {
    borderRadius: theme.borderRadius,
    backgroundColor: theme.tertiaryColor,
    padding: 24,
  },
  date: {
    fontSize: 32,
    fontWeight: "700",
  },
});

export default Workout;
