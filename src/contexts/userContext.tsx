import React from 'react';

const UserContext = React.createContext<UserContext>({
  signedOut: true,
  setUserData: (user: User) => {},
});

export default UserContext;
