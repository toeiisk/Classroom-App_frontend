import {
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import Signinscreen from "../components/LoginScreen";
import Registerscreen from "../components/RegisterScreen";
import LessonScreen from "../components/Lessonscreen";
import Loadingtest from "../components/LoadingTestscreen";
import { Image } from "react-native";
import Color from "../assets/resources/constants/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import Forgotpass from './Forgotpassnevigator'

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: Color.background_footer, height: 80 },
    }}
  >
    <RootStack.Screen
      name="SignInScreen"
      component={Signinscreen}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name="Register"
      component={Registerscreen}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name="Loadingtest"
      component={Loadingtest}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name="Lessons"
      component={LessonScreen}
      options={{
        title: null,
        headerLeft: () => (
          <TouchableOpacity>
            <Image
              source={require("../assets/resources/icon/previous.png")}
              style={{
                width: 30,
                height: 30,
                marginLeft: 30,
              }}
            />
          </TouchableOpacity>
        ),
      }}
    />
    {/* <RootStack.Screen
      name="Chatroom"
      component={Chatroom}
      options={{
        title: null,
        headerLeft: () => (
          <TouchableOpacity>
            <Image
              source={require("../assets/resources/icon/previous.png")}
              style={{
                width: 30,
                height: 30,
                marginLeft: 30,
              }}
            />
          </TouchableOpacity>
        ),
      }}
    /> */}
    <RootStack.Screen
      name="Forgotpass"
      component={Forgotpass}
      options={{
        title: null,
        headerLeft: () => (
          <TouchableOpacity>
            <Image
              source={require("../assets/resources/icon/previous.png")}
              style={{
                width: 30,
                height: 30,
                marginLeft: 30,
              }}
            />
          </TouchableOpacity>
        ),
      }}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
