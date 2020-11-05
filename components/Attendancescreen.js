import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import * as Animatable from "react-native-animatable";
import Color from "../assets/resources/constants/color";
import Externalstyle from "../style/externalStyle";
export default class attendancescreen extends React.Component {
  render() {
    const actions = [
      {
        text: "Manage Attend",
        icon: require("../assets/logo.png"),
        name: "ManageAttend",
        position: 2,
      },
      {
        text: "Attend",
        icon: require("../assets/logo.png"),
        name: "Attend",
        position: 1,
      },
    ];
    return (
      <SafeAreaView style={Externalstyle.container}>
        <View style={Externalstyle.title_header}>
          <Text style={Externalstyle.text_title}>My Attendance</Text>
          <View style={Externalstyle.line_title} />
        </View>
        <ScrollView>
          <FlatList
            data={[
              {
                id: "1",
                day: "Mon",
                date: "Oct 5th",
                timestamp: "10.45",
                subject: "MOBILE DEVICE PROGRAMMING",
              },
              {
                id: "2",
                day: "Mon",
                date: "Oct 5th",
                timestamp: "10.45",
                subject: "MOBILE DEVICE PROGRAMMING",
              },
              {
                id: "3",
                day: "Mon",
                date: "Oct 5th",
                timestamp: "10.45",
                subject: "MOBILE DEVICE PROGRAMMING",
              },
              {
                id: "4",
                day: "Mon",
                date: "Oct 5th",
                timestamp: "10.45",
                subject: "MOBILE DEVICE PROGRAMMING",
              },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <ImageBackground
                  source={{
                    uri:
                      "https://image.freepik.com/free-vector/health-insurance-vector-illustration_159144-57.jpg",
                  }}
                  imageStyle={{ borderRadius: 15 }}
                  opacity={0.2}
                  style={Externalstyle.card}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View style={Externalstyle.boxattendance}>
                      <Text style={Externalstyle.title}>RATE</Text>
                    </View>
                    <View style={Externalstyle.text_attendance}>
                      <Text style={Externalstyle.title}>
                        {item.day}, {item.date} - {item.timestamp}
                        {"\n"}
                      </Text>
                      <View style={{ paddingRight: 10 }}>
                        <Text style={Externalstyle.titlesub}>
                          SUBJECT: {item.subject}
                        </Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </ScrollView>
        {/* <View style={Externalstyle.atten_layout_button}>
          <TouchableOpacity style={Externalstyle.button}>
            <Text style={[Externalstyle.title, { color: "white" }]}>
              Attend
            </Text>
          </TouchableOpacity>
        </View> */}
        <FloatingAction
          actions={actions}
          onPressItem={(name) => {
            console.log(`selected button: ${name}`);
          }}
          color={Color.background_button_attendance}
        />
      </SafeAreaView>
    );
  }
}
