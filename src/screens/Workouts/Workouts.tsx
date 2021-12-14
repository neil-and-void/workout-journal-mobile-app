import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import WorkoutTemplate from "../../components/WorkoutTemplate";
import theme from "../../theme";
import { Box, HStack, ScrollView, VStack, Text, Button } from "native-base";

const Workouts = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const startCreateWorkoutTemplateFlow = () => {
    navigation.navigate("NewWorkoutTemplateFlow");
  };

  return (
    <Box p={2} safeArea>
      <VStack>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontWeight={700} fontSize={48}>
            Workouts
          </Text>
          <Button
            variant="unstyled"
            color={theme.primaryColor}
            onPress={startCreateWorkoutTemplateFlow}
            _text={{ color: "primary.500", fontSize: 20, fontWeight: 400 }}
          >
            New +
          </Button>
        </HStack>
        <ScrollView>
          <VStack mb={16}>
            <WorkoutTemplate />
            <WorkoutTemplate />
            <WorkoutTemplate />
            <WorkoutTemplate />
            <WorkoutTemplate />
            <WorkoutTemplate />
            <WorkoutTemplate />
            <WorkoutTemplate />
            <WorkoutTemplate />
            <WorkoutTemplate />
            <WorkoutTemplate />
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
};

export default Workouts;
