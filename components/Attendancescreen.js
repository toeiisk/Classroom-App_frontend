import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { Overlay } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import Color from "../assets/resources/constants/color";
import Externalstyle from "../style/externalStyle";

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class attendancescreen extends React.Component {
  state = {
    overlayVisible: false,
    nameselect: "",
    name: "",
  };
  setOverlayVisible = (visible, name) => {
    this.setState({
      overlayVisible: visible,
      nameselect: name,
    });
  };
  render() {
    const { overlayVisible, nameselect } = this.state;
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
        <Calendar
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => { console.log('selected day', day) }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => { console.log('selected day', day) }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => { console.log('month changed', month) }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={subtractMonth => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft={false}
          // Disable right arrow. Default = false
          disableArrowRight={false}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          // Enable horizontal scrolling, default = false
          horizontal={true}
          // Enable paging on horizontal, default = false
          pagingEnabled={true}
          // Set custom calendarWidth.
          calendarWidth={200}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 25,
            height: 450,
            marginHorizontal: 16
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            textSectionTitleColor: '#b6c1cd',
            textDayFontFamily: 'MitrMedium',
            textMonthFontFamily: 'MitrMedium',
            textDayHeaderFontFamily: 'MitrRegular',
            monthTextColor: 'blue',
            backgroundColor: '#ffffff',
            textDayFontSize: 20,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 15
          }}
        />
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
                      "https://edu.google.com/images/social_image.jpg",
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
          {nameselect == "Attend" ? (
            <Overlay
              onBackdropPress={() => {
                this.setOverlayVisible(!overlayVisible);
              }}
              overlayStyle={{ backgroundColor: "transparent" }}
            >
              <Animatable.View
                animation="zoomIn"
                duration={2000}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Animatable.Image
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite"
                  style={{ height: 200, width: 200 }}
                  source={require("../assets/resources/icon/audio-book.png")}
                />
                <Text
                  style={[Externalstyle.text_title, { textAlign: "center" }]}
                >
                  Please be quiet!! Waiting for Attendance
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.setOverlayVisible(!overlayVisible);
                  }}
                  style={Externalstyle.profile_button_edit}
                >
                  <Text style={[Externalstyle.title, { color: "white" }]}>
                    CANCLE
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            </Overlay>
          ) : null}
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
            this.setOverlayVisible(true, name);
          }}
          color={Color.background_button_attendance}
        />
      </SafeAreaView>
    );
  }
}
