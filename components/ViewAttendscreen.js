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
          <View style={Externalstyle.attend_header}>
            <Text style={Externalstyle.text_title}>Attendance</Text>
            <Text style={Externalstyle.text_title}>3/40</Text>
          </View>
          <View style={Externalstyle.line_title} />
        </View>
        <View style={Externalstyle.attend_title_header}>
          <Text style={Externalstyle.attend_text_title}>Name class</Text>
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
                    <View style={Externalstyle.text_attendance}>
                      <Text style={Externalstyle.title}>
                        {item.day}, {item.date} - {item.timestamp}
                      </Text>
                      <Text style={Externalstyle.titlesub}>
                        SUBJECT: {item.subject}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </ScrollView>
        <View style={Externalstyle.atten_layout_button}>
          <TouchableOpacity style={Externalstyle.button}>
            <Text style={[Externalstyle.title, { color: "white" }]}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
