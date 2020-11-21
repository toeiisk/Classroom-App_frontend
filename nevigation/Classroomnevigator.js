import { createStackNavigator } from "@react-navigation/stack";
import Lessons from "../components/Lessonscreen";
import Classroom from "../components/Classroomscreen";
import Createpost from "../components/Createpostscreen";
// import Createclass from "../components/Createclassscreen";
import EditProfileScreen from "../components/EditProfilescreen";
import Contentclass from "../components/Contentscreen";
import Editcontent from "../components/EditContentscreen";
import Editlesson from "../components/EditLessonscreen";
import Editclassroom from "../components/EditClassroomscreen";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import Color from "../assets/resources/constants/color";
const RootScreen = createStackNavigator();
const ScreenStack = () => (
  <RootScreen.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: Color.background_footer, height: 80 },
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
      name="Contentclass"
      component={Contentclass}
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
              }}
            />
          </TouchableOpacity>
        ),
      }}
    />
    <RootScreen.Screen
      name="Editcontent"
      component={Editcontent}
      options={{ headerShown: false }}
    />
    <RootScreen.Screen
      name="Editlesson"
      component={Editlesson}
      options={{ headerShown: false }}
    />
    <RootScreen.Screen
      name="Editclassroom"
      component={Editclassroom}
      options={{ headerShown: false }}
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
              }}
            />
          </TouchableOpacity>
        ),
      }}
    />
  </RootScreen.Navigator>
);

export default ScreenStack;
