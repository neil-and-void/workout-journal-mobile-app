import React, { useContext, useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  Pressable,
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

// import AuthService from '../../services/AuthService';
import UserContext from '../../contexts/userContext';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../graphql/mutations/auth';

const Login = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const [formData, setData] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const { setUserData } = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [login] = useMutation(LOGIN);

  /**
   * submit login credentials to get access and refresh token
   */
  const submit = async () => {
    try {
      setErrorMsg(null);

      const {
        data: {
          login: { accessToken, refreshToken },
        },
      } = await login({
        variables: { email: formData.email, password: formData.password },
      });

      await SecureStore.setItemAsync('accessToken', accessToken);
      await SecureStore.setItemAsync('refreshToken', refreshToken);

      setUserData({
        signedOut: false,
      });
      navigation.navigate('Home');
    } catch (err) {
      setErrorMsg('Something went wrong');
    }
  };

  return (
    <Box p={2} safeArea>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <VStack>
          <FormControl>
            <Text fontSize={32} pb={8} fontWeight="bold">
              Workout Journal
            </Text>

            {errorMsg ? <Text color="red.500">{errorMsg}</Text> : null}

            <Box pb={3}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                size="xl"
                p={4}
                variant="rounded"
                placeholder="Email"
                onChangeText={(text) => setData({ ...formData, email: text })}
                autoCapitalize="none"
              />
            </Box>

            <Box pb={6}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                size="xl"
                p={4}
                variant="rounded"
                placeholder="Password"
                onChangeText={(text) =>
                  setData({ ...formData, password: text })
                }
                autoCapitalize="none"
              />
            </Box>
          </FormControl>

          <Button size="lg" py={2} onPress={submit}>
            Login
          </Button>

          <Flex flexDirection="row" justify="center">
            <Pressable p={4} onPress={() => navigation.navigate('Signup')}>
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
