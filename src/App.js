import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyByv-fmpUgeLXAngnDBRIi04iK0J2VDZsc",
            authDomain: "manager-53893.firebaseapp.com",
            databaseURL: "https://manager-53893.firebaseio.com",
            projectId: "manager-53893",
            storageBucket: "",
            messagingSenderId: "431885673807"
          };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(
                    reducers, 
                    {}, 
                    applyMiddleware(ReduxThunk)
                )}>
                <LoginForm />
            </Provider>
        );
    }

}


export default App;