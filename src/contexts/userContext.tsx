import React from 'react';

/**
 * Context passing around auth state
 */
const UserContext = React.createContext<UserContext>({
  signedOut: true,
  setUserData: (user: User) => {},
});

export default UserContext;
