import React from "react";
import { Box, Text, Pressable } from "native-base";

const Workout = () => {
  return (
    <Pressable onPress={() => {}}>
      <Box pb={8}>
        <Box
          alignItems="center"
          flexDirection="column"
          borderColor="warmGray.300"
          borderTopWidth={1}
          borderLeftWidth={1}
          borderRightWidth={1}
          borderRadius={16}
        >
          <Text fontSize={32} fontWeight={600}>
            20
          </Text>
          <Box backgroundColor="primary.400" w="100%" borderBottomRadius={16}>
            <Text fontSize={16} color="white" textAlign="center">
              Dec
            </Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default Workout;
