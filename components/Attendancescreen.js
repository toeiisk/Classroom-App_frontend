import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Alert,
  Modal,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { Overlay, Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import Color from "../assets/resources/constants/color";
import Externalstyle from "../style/externalStyle";
import TimeTableView, { genTimeBlock } from "react-native-timetable";
import moment from "moment";

const events_data = [
  {
    title: "SE",
    startTime: genTimeBlock("MON", 8, 45),
    endTime: genTimeBlock("MON", 11, 45),
    extra_descriptions: ["Sukrit leelakornkij"],
  },
  {
    title: "SE2",
    startTime: genTimeBlock("MON", 9, 45),
    endTime: genTimeBlock("MON", 13, 45),
    extra_descriptions: ["Sukrit leelakornkij"],
  },
];

export default class attendancescreen extends React.Component {
  constructor(props) {
    super(props);
    this.numOfDays = 5;
    this.pivotDate = genTimeBlock("mon");
    this.state = {
      message: "",
      startTime: "",
      endTime: "",
      extradescriptions: "",
      modalVisible: false,
    };
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (evt) => {
    this.setState({
      message: evt.title,
      startTime: evt.startTime,
      endTime: evt.endTime,
      extradescriptions: evt.extra_descriptions,
    });
    this.setModalVisible(true);
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <SafeAreaView style={Externalstyle.container}>
        <View style={Externalstyle.title_header}>
          <Text style={Externalstyle.text_title}>CLASS SCHEDULE</Text>
          <View style={Externalstyle.line_title} />
        </View>
        <ScrollView>
          <View style={styles.container}>
            <TimeTableView
              scrollViewRef={this.scrollViewRef}
              events={events_data}
              pivotTime={8}
              pivotEndTime={20}
              pivotDate={this.pivotDate}
              numberOfDays={this.numOfDays}
              onEventPress={this.onEventPress}
              headerStyle={styles.headerStyle}
              formatDateHeader="dddd"
              locale="th"
            />
          </View>
        </ScrollView>
        <Overlay
          overlayStyle={{ marginHorizontal: 20 }}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onBackdropPress={() => this.setState({ modalVisible: false })}
        >
          <Card>
            <Card.Title><Text style={{fontWeight: "bold"}}>SUBJECT:</Text> {this.state.message}</Card.Title>
            <Card.Divider />
            <Card.Title>AUTHOR: {this.state.extradescriptions}</Card.Title>
            <Card.Divider />
          </Card>
        </Overlay>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#81E1B8",
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: "#F8F8F8",
  },
});
