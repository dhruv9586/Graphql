import './App.css';

import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    from,
    InMemoryCache
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetUsers from './components/GetUsers';
import Form from './components/Form';

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message }) => {
            alert(`Graphql error : ${message}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:3000/graphql' })
]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Form />
            <hr />
            <GetUsers />
        </ApolloProvider>
    );
}

export default App;
