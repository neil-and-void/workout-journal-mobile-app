import React from 'react';

const UserContext = React.createContext<UserContext>({
  signedOut: true,
  accessToken: null,
  refreshToken: null,
  setUserData: (user: User) => {},
});

export default UserContext;
