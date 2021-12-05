import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import theme from "../../theme";

const Workouts = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Workouts</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: theme.titleFontSize,
    fontWeight: theme.titleFontWeight,
  },
  container: {
    paddingRight: 8,
    paddingLeft: 8,
  },
});

export default Workouts;
