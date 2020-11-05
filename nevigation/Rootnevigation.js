import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signinscreen from "../components/LoginScreen";
import Registerscreen from "../components/RegisterScreen";
import LessonScreen from "../components/Lessonscreen";
import { Image } from "react-native";
import Color from "../assets/resources/constants/color";
import { TouchableOpacity } from "react-native-gesture-handler";

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: Color.background_footer },
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
                marginTop: 30,
              }}
            />
          </TouchableOpacity>
        ),
      }}
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
                marginTop: 30,
              }}
            />
          </TouchableOpacity>
        ),
      }}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
