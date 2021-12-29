import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Profile from '../Profile';
import theme from '../../theme';
import Journal from '../Journal';
import WorkoutHome from '../WorkoutHome';
import Workouts from '../Workouts';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Workouts') {
            iconName = focused ? 'barbell' : 'barbell-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Journal') {
            iconName = focused ? 'book' : 'book-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.primaryColor,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Workouts"
        component={Workouts}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Home;
