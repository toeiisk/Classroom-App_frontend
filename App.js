import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import ReduxThunk from "redux-thunk";
import AppReducer from "./store/reducers/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Root from './Root'
import React, { useState, useEffect } from 'react';






const store = createStore(AppReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
export default App;


