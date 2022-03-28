import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as SecureStore from 'expo-secure-store';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.72:4000/graphql',
});

let token: string | null;
const authLink = setContext((_, { headers }) => {
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token,
      },
    };
  }

  return SecureStore.getItemAsync('accessToken').then((accessToken) => {
    token = accessToken;

    return {
      headers: {
        ...headers,
        'x-access-token': accessToken,
      },
    };
  });
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
