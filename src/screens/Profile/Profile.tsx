import React, { useContext } from 'react';
import { Button, Box, Text } from 'native-base';
import UserContext from '../../contexts/userContext';
import theme from '../../theme';

const Profile = () => {
  const { setUserData } = useContext(UserContext);

  const logout = () => {
    setUserData({
      signedOut: true,
      accessToken: null,
      refreshToken: null,
    });
  };

  return (
    <Box p={2} safeArea>
      <Box>
        <Text fontSize={48} fontWeight={700}>
          Journal
        </Text>
      </Box>
      <Box>
        <Button onPress={() => logout()}>Logout</Button>
      </Box>
    </Box>
  );
};

export default Profile;
