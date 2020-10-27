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
import Externalstyle from "../style/externalStyle";
export default class attendancescreen extends React.Component {
  render() {
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
      </SafeAreaView>
    );
  }
}
