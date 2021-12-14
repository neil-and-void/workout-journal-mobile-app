import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  Pressable,
  Box,
  Input,
  FormControl,
  Button,
  VStack,
  Text,
  Flex,
} from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import theme from "../../theme";

interface LoginErrors {
  password?: string;
  email?: string;
}

const Login = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const [formData, setData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<null | LoginErrors>(null);

  const login = () => {
    validate();
    navigation.navigate("Home");
  };

  const navigateToSignup = () => {
    navigation.navigate("Signup");
  };

  const validate = () => {};

  return (
    <Box p={2} safeArea>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <VStack>
          <Text fontSize={32} pb={8} fontWeight="bold">
            Workout Journal
          </Text>

          <FormControl isRequired>
            <Box pb={3}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                size="xl"
                p={4}
                variant="rounded"
                placeholder="Email"
                onChangeText={setEmail}
              />
            </Box>

            <Box pb={6}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                size="xl"
                p={4}
                variant="rounded"
                placeholder="Password"
                onChangeText={setPassword}
              />
            </Box>
          </FormControl>

          <Button size="lg" py={2} onPress={login}>
            Login
          </Button>

          <Flex flexDirection="row" justify="center">
            <Pressable p={4} onPress={navigateToSignup}>
              <Text underline fontSize={16}>
                Signup
              </Text>
            </Pressable>
          </Flex>
        </VStack>
      </TouchableWithoutFeedback>
    </Box>
  );
};

export default Login;
