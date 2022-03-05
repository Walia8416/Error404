import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

import {RestLink} from 'apollo-link-rest';

interface GetFetchDef {
  url: string;
  Mutation: string;
  properties?: {};
}

export const fetchPOST = (args: GetFetchDef) => {
  const mutation = gql`
    ${args.Mutation}
  `;

  const restLink = new RestLink({
    uri: args.url,
    ...args.properties,
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  });

  return client
    .mutate({mutation})
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};
