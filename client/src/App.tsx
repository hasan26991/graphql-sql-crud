import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import CreateUser from './Components/CreateUser';

import './App.css';
import ListOfUsers from './Components/ListOfUsers';
import UpdateUser from './Components/UpdateUser';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })

  return (

    <ApolloProvider client={client}>
      <CreateUser />
      <ListOfUsers />
      <UpdateUser />
    </ApolloProvider>

  )

}

export default App;
