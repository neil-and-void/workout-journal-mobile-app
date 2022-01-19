import React from 'react';
import { ScrollView, Box, Text, HStack, Button } from 'native-base';
import Workout from '../../components/Workout';
import theme from '../../theme';

const Journal = () => {
  return (
    <Box px={6} height="100%" safeArea>
      <HStack justifyContent="space-between">
        <Text fontSize={48} fontWeight={700}>
          Journal
        </Text>
        <Button
          variant="unstyled"
          color={theme.primaryColor}
          onPress={() => console.log('view calendar')}
          _text={{ color: 'primary.500', fontSize: 16, fontWeight: 400 }}
        >
          View Calendar
        </Button>
      </HStack>
      <ScrollView flex={1}>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
        <Box pb={4}>
          <Workout />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Journal;
