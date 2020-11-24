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
    const strTime = moment(evt.startTime).format("dddd h:mm");
    const datTime = moment(evt.endTime).format("dddd h:mm");

    this.setState({
      message: evt.title,
      startTime: strTime,
      endTime: datTime,
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
            <Card.Title style={{ fontSize: 18, fontFamily: "MitrBold" }}>
              SUBJECT:{" "}
              <Text style={{ fontFamily: "MitrLight" }}>
                {this.state.message}
              </Text>
            </Card.Title>
            <Card.Divider />
            <Card.Title style={{ fontSize: 18, fontFamily: "MitrBold" }}>
              START:{" "}
              <Text style={{ fontFamily: "MitrLight" }}>
                {this.state.startTime}
              </Text>
            </Card.Title>
            <Card.Divider />
            <Card.Title style={{ fontSize: 18, fontFamily: "MitrBold" }}>
              END:{" "}
              <Text style={{ fontFamily: "MitrLight" }}>
                {this.state.endTime}
              </Text>
            </Card.Title>
            <Card.Divider />
            <Card.Title style={{ fontSize: 18, fontFamily: "MitrBold" }}>
              AUTHOR:{" "}
              <Text style={{ fontFamily: "MitrLight" }}>
                {this.state.extradescriptions}
              </Text>
            </Card.Title>
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
