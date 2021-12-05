import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import theme from "../../theme";

interface SignupErrors {
  email?: string;
  name?: string;
  password?: string;
}

const Signup = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | SignupErrors>(null);

  const signup = () => {
    console.log(email, name, password);
    navigation.navigate("Home");
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Workout Journal</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setEmail}
            placeholder="Email"
          />
          {error?.email ? (
            <Text style={styles.error}>{error.email}</Text>
          ) : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setName}
            placeholder="Name"
          />
          {error?.name ? <Text style={styles.error}>{error.name}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setPassword}
            placeholder="Password"
          />
          {error?.password ? (
            <Text style={styles.error}>{error.password}</Text>
          ) : null}
        </View>

        <TouchableOpacity onPress={signup} style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <Pressable onPress={navigateToLogin}>
          <Text style={styles.navigateButton}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    alignContent: "center",
    fontWeight: "600",
    fontSize: 36,
    paddingBottom: 24,
    paddingTop: 24,
  },
  navigateButton: {
    paddingTop: 16,
    paddingBottom: 16,
    textAlign: "center",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  container: {
    padding: 8,
    height: "100%",
  },
  label: {
    fontWeight: "600",
  },
  textInput: {
    backgroundColor: theme.inputBgColor,
    padding: 20,
    fontSize: 18,
    borderRadius: theme.borderRadius,
  },
  inputContainer: {
    marginBottom: 16,
  },
  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: theme.borderRadius,
    backgroundColor: theme.primaryColor,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  error: {
    color: "red",
  },
});

export default Signup;
