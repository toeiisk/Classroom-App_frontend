import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../components/Profilescreen";
import EditProfile from "../components/EditProfilescreen";
import React from "react";
import Color from "../assets/resources/constants/color";

const RootScreen = createStackNavigator();

const EditStack = () => (
    <RootScreen.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Color.background_footer, height: 80 },
      }}
    >
      <RootScreen.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <RootScreen.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
    </RootScreen.Navigator>
  );
  
  export default EditStack;