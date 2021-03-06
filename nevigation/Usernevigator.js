import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import Attendance from "../components/Attendancescreen";
import { Image } from "react-native";
import ScreenStack from "./Classroomnevigator";
import ChatStack from "./Chatnavigation";
import EditProfile from "./Profilenevigator"

const Tab = createMaterialBottomTabNavigator();

const Usernavigator = () => (
  <Tab.Navigator
    activeColor="#0673F6"
    inactiveColor="#4B4B4B"
    barStyle={{ backgroundColor: "#E0DDCF" }}
  >
    <Tab.Screen
      name="ScreenStack"
      component={ScreenStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require("../assets/resources/icon/dashboard2.png")
                : require("../assets/resources/icon/dashboard.png")
            }
            style={{
              width: 30,
              height: 30,
            }}
          />
        ),
        tabBarLabel: () => {
          return null;
        },
      }}
    />
    <Tab.Screen
      name="Attendance"
      component={Attendance}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require("../assets/resources/icon/attendance2.png")
                : require("../assets/resources/icon/attendance.png")
            }
            style={{
              width: 30,
              height: 30,
            }}
          />
        ),
        tabBarLabel: () => {
          return null;
        },
      }}
    />
    <Tab.Screen
      name="ChatStack"
      component={ChatStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require("../assets/resources/icon/chat2.png")
                : require("../assets/resources/icon/chat.png")
            }
            style={{
              width: 30,
              height: 30,
            }}
          />
        ),
        tabBarLabel: () => {
          return null;
        },
      }}
    />
    <Tab.Screen
      name="Profile"
      component={EditProfile}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require("../assets/resources/icon/profile2.png")
                : require("../assets/resources/icon/profile.png")
            }
            style={{
              width: 30,
              height: 30,
            }}
          />
        ),
        tabBarLabel: () => {
          return null;
        },
      }}
    />
  </Tab.Navigator>
);

export default Usernavigator;
