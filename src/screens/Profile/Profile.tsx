import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import theme from "../../theme";

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
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
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default Profile;
