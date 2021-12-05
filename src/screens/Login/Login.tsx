import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import theme from "../../theme";

interface LoginErrors {
  password?: string;
  email?: string;
}

const Login = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | LoginErrors>(null);

  const login = () => {
    console.log(email, password);
    navigation.navigate("Home");
  };

  const navigateToSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.title}>Workout Journal</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setEmail}
              placeholder="Email"
            />
            {error?.email ? <Text>error</Text> : null}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setPassword}
              placeholder="Password"
            />
            {error?.password ? <Text>error</Text> : null}
          </View>

          <TouchableOpacity onPress={login} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Pressable onPress={navigateToSignup}>
            <Text style={styles.navigateButton}>Signup</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
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
});

export default Login;
