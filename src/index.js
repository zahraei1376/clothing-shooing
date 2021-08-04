import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import  './App.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store , persistor } from './redux/store';
// /////////////////////////////////////////graphql
// import { ApolloProvider } from 'react-apollo';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { ApolloClient ,gql } from 'apollo-boost';

// const httpLink = createHttpLink({
//   uri:''
// });

// const cache = new InMemoryCache();

// const client = new ApolloClient({
//   link:httpLink,
//   cache
// });

// client.query({
//   query:gql`
//     {
//       getCollectionsByTitle(title:"hats"){
//         id
//         title
//         items{
//           id
//           name
//           price
//           imageUrl
//         }
//       }
//     }
//   `
// }).then(Response=>console.log(Response));

// //////////////////////////////////////////

ReactDOM.render(
  // <ApolloProvider client={client}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <PersistGate persistor={persistor} >
            <App />
          </PersistGate>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>,
  // </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
