import React from 'react';
import { Dimensions } from 'react-native';
import { ScrollView, Box, Text, HStack, Button } from 'native-base';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import Workout from '../../components/Workout';
import theme from '../../theme';

const Journal = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <Box
      height={Dimensions.get('window').height - tabBarHeight}
      flex={1}
      safeArea
    >
      <HStack justifyContent="space-between" px={6}>
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
      <Box flexGrow={1}>
        <ScrollView
          _contentContainerStyle={{
            h: '100%',
            paddingX: 6,
          }}
        >
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
    </Box>
  );
};

export default Journal;
