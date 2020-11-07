
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import Lessons from "../components/Lessonscreen";
import Classroom from "../components/Classroomscreen";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";

const RootScreen = createStackNavigator();
const ScreenStack = () =>(
    <RootScreen.Navigator>
      <RootScreen.Screen
        name="Classroom"
        component={Classroom}
        options={{ headerShown: false }}
      />
      <RootScreen.Screen
        name="Lessons"
        component={Lessons}
        options={{ headerShown: false}}
      />
    </RootScreen.Navigator>
)


export default ScreenStack