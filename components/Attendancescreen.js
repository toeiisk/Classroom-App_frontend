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
import { connect } from "react-redux";
import { compose } from "redux";
import {getClassroom} from '../store/actions/auth.actions'




class attendancescreen extends React.Component {
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
      dataArray: []
    };
  }
 
  
  
  componentDidMount(){
    const { Classroom } = this.props;
    const newarray = []
    Classroom.map((item) => {
      const data = {
        title : item.name,
        startTime: genTimeBlock(item.day.slice(0, 3).toUpperCase(), item.time.split(":")[0], item.time.split(":")[1]),
        endTime: genTimeBlock(item.day.slice(0, 3).toUpperCase(), item.endClassTime.split(":")[0], item.endClassTime.split(":")[1]),
        extradescriptions: item.nameOwner
      }
      newarray.push(data)
    })
    this.setState({
      dataArray: newarray
    })

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
      extradescriptions: evt.extradescriptions,
    });
    this.setModalVisible(true);
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };


  rensetTable = () => {
    return(
      <TimeTableView
        scrollViewRef={this.scrollViewRef}
        events={this.state.dataArray}
        pivotTime={8}
        pivotEndTime={20}
        numberOfDays={this.numOfDays}
        onEventPress={this.onEventPress}
        headerStyle={styles.headerStyle}
        formatDateHeader="dddd"
        locale="th"
    />
    )
  }
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
           {this.rensetTable()}
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


const mapStateToProps = (state) => ({
  Classroom: state.classReducer.Classroom.classroomUser,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null)(attendancescreen)
);
