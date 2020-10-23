import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import Classroom from "../components/Classroomscreen";
import Attendance from "../components/Attendancescreen";
import Profile from "../components/Profilescreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
      //   options={{
      //     tabBarIcon: ({ color }) => (
      //       <MaterialCommunityIcons name="home" color={color} size={26} />
      //     ),
      //   }}
    />
    <Tab.Screen
      name="Attendance"
      component={Attendance}
      //   options={{
      //     tabBarIcon: ({ color }) => (
      //       <MaterialCommunityIcons name="ev-plug-chademo" color={color} size={26} />
      //     ),
      //   }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      //   options={{
      //     tabBarIcon: ({ color }) => (
      //       <MaterialCommunityIcons name="book-open-variant" color={color} size={26} />
      //     ),
      //   }}
    />
  </Tab.Navigator>
);

export default Usernavigator;
