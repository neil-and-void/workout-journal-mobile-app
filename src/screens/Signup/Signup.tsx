import React, { useContext, useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import {
  Pressable,
  KeyboardAvoidingView,
  Box,
  Input,
  FormControl,
  Button,
  VStack,
  Text,
  Flex,
} from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';

import { signup } from '../../services/auth';
import UserContext from '../../contexts/userContext';

interface SignupErrors {
  email?: string;
  name?: string;
  password?: string;
}

const Signup = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setUserData } = useContext(UserContext);
  const [error, setError] = useState<null | String>(null);

  /**
   * signup user, get tokens and navigate to Home screen on success
   */
  const submit = async () => {
    try {
      const { access_token, refresh_token } = await signup({
        email,
        firstname,
        password,
        confirmPassword,
      });
      await SecureStore.setItemAsync('accessToken', access_token);
      await SecureStore.setItemAsync('refreshToken', refresh_token);
      setUserData({
        signedOut: false,
      });

      navigation.navigate('Home');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        setError('Something went wrong');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
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
                  autoCapitalize="none"
                />
              </Box>

              <Box pb={3}>
                <FormControl.Label>Name</FormControl.Label>
                <Input
                  size="xl"
                  p={4}
                  variant="rounded"
                  placeholder="Name"
                  onChangeText={setFirstname}
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
                  autoCapitalize="none"
                />
              </Box>

              <Box pb={6}>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input
                  size="xl"
                  p={4}
                  variant="rounded"
                  placeholder="Password"
                  onChangeText={setConfirmPassword}
                  autoCapitalize="none"
                />
              </Box>
            </FormControl>

            <Button size="lg" py={2} onPress={submit}>
              Signup
            </Button>

            <Flex flexDirection="row" justify="center">
              <Pressable p={4} onPress={() => navigation.navigate('Login')}>
                <Text underline fontSize={16}>
                  Login
                </Text>
              </Pressable>
            </Flex>
          </VStack>
        </TouchableWithoutFeedback>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default Signup;
