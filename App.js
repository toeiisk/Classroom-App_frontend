import "react-native-gesture-handler";
import ReduxThunk from "redux-thunk";
import AppReducer from "./store/reducers/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Root from './Root'
import React from 'react';

import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";

const pubnub = new PubNub({
  publishKey: "pub-c-d0ea43cd-e94b-46e2-9f75-00e9e6a658b2",
  subscribeKey: "sub-c-6a62607c-2d9b-11eb-ae78-c6faad964e01",
  uuid: "sec-c-MjE2MmVmMTgtMTZlYy00ZTE4LWE3MzYtYjZjNjIxOTVjZmEz",
});

const store = createStore(AppReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <PubNubProvider client={pubnub}>
        <Root />
      </PubNubProvider>
    </Provider>
  );
};
export default App;


