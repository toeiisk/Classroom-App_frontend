import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import Lessons from "../components/Lessonscreen";
import Classroom from "../components/Classroomscreen";
import Contents from "../components/Contentscreen";
import Createpost from "../components/Createpostscreen";
import Createclass from "../components/Createclassscreen";
import EditProfileScreen from "../components/EditProfilescreen";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import Color from "../assets/resources/constants/color";
const RootScreen = createStackNavigator();
const ScreenStack = () => (
  <RootScreen.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: Color.background_footer },
    }}
  >
    <RootScreen.Screen
      name="Classroom"
      component={Classroom}
      options={{ headerShown: false }}
    />
    <RootScreen.Screen
      name="Lessons"
      component={Lessons}
      options={{ headerShown: false }}
    />
    <RootScreen.Screen
      name="Createpost"
      component={Createpost}
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
    <RootScreen.Screen
      name="Createclass"
      component={Createclass}
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
     <RootScreen.Screen
      name="EditProfile"
      component={EditProfileScreen}
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
  </RootScreen.Navigator>
);

export default ScreenStack;
