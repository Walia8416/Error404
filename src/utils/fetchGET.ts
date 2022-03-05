import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

import {RestLink} from 'apollo-link-rest';

// Set `RestLink` with your endpoint
interface GetFetchDef {
  url: string;
  Query: string;
  properties?: {};
}

//get
export const fetchGET = (args: GetFetchDef) => {
  const query = gql`
    ${args.Query}
  `;
  const restLink = new RestLink({
    uri: args.url,
    ...args.properties,
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink,
  });

  return client.query({query}).then(response => {
    return response.data;
  });
};
