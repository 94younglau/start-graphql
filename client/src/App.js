import React, { Component } from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import BookList from './components/BookList';
import BookAdd from './components/BookAdd';

// apollo client setup
const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
    	<ApolloProvider client={client}>
	      <div id="main">
	        <h1>Liuyuan's Reading List</h1>
	        <BookList />
	        <BookAdd />
	      </div>    		
    	</ApolloProvider>
    );
  }
}

export default App;
