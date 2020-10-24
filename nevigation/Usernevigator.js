import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import Classroom from "../components/Classroomscreen";
import Attendance from "../components/Attendancescreen";
import Profile from "../components/Profilescreen";
import Chat from "../components/testScreen";
import { Image } from "react-native";
const Tab = createMaterialBottomTabNavigator();

const Usernavigator = (navigation) => (
  <Tab.Navigator
    activeColor="#0673F6"
    inactiveColor="#4B4B4B"
    barStyle={{ backgroundColor: "#E0DDCF" }}
  >
    <Tab.Screen
      name="Classroom"
      component={Classroom}
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
      name="Chat"
      component={Chat}
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
      component={Profile}
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
