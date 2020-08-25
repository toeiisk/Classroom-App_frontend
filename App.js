import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReduxThunk from 'redux-thunk'
import AppReducer from './store/reducers/index'
import {Provider} from 'react-redux';
import { 
    createStore,
    applyMiddleware
} from 'redux'

import {
    AppRegistry,
  } from 'react-native';

const store = createStore(AppReducer, applyMiddleware(ReduxThunk))
const Stack = createStackNavigator();

const App = () =>{
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component= {LoginScreen}
          />
          <Stack.Screen component = {RegisterScreen} name="Register" />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


export default App
