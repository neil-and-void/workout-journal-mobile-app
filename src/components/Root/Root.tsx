import React, { useContext } from 'react';
import { ApolloProvider } from '@apollo/client';

import { client } from '../../graphql/client';
import UserContext from '../../contexts/userContext';

import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import * as SecureStore from 'expo-secure-store';

interface RootProps {
  children: React.ReactNode;
}

const Root = ({ children }: RootProps) => {
  const { setUserData } = useContext<UserContext>(UserContext);
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

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
      setUserData({ signedOut: true });
    }
  });

  return (
    <ApolloProvider
      client={
        new ApolloClient({
          link: ApolloLink.from([authLink, errorLink, httpLink]),
          cache: new InMemoryCache(),
        })
      }
    >
      {children}
    </ApolloProvider>
  );
};

export default Root;
