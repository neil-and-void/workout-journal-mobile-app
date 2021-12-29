import React, { useContext } from 'react';
import { Button, Box, Text } from 'native-base';
import UserContext from '../../contexts/userContext';
import theme from '../../theme';

const Profile = () => {
  const { setUserData } = useContext(UserContext);

  const signOut = () => {
    setUserData({
      signedOut: true,
    });
  };

  return (
    <Box px={6} safeArea>
      <Box>
        <Text fontSize={48} fontWeight={700}>
          Profile
        </Text>
      </Box>
      <Box>
        <Button onPress={() => signOut()}>Sign Out</Button>
      </Box>
    </Box>
  );
};

export default Profile;
