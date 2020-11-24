import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  FlatList,
  Modal,
  TouchableHighlight,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FloatingAction } from "react-native-floating-action";
import Color from "../assets/resources/constants/color";
import Externalstyle from "../style/externalStyle";
import { connect } from "react-redux";
import { compose } from "redux";
import { getClassroom } from "../store/actions/classroom.action";
import { createClassroom } from "../store/actions/classroom.action";
import { joinClassroom } from "../store/actions/classroom.action";
import { Overlay, Button, Input, Text } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

class classroomnoenroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      nameselect: "",
      description: "",
      name: "",
      code: "",
      isDatePickerVisible: false,
      isDatePickerVisible2: false,
      data: "",
      end: "",
      isModalVisible: false,
    };
  }
  setModalVisible = (visible, name) => {
    this.setState({
      modalVisible: visible,
      nameselect: name,
    });
  };

  openModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  creatClassroom = async (data) => {
    try {
      this.props.dispatch(createClassroom(data));
    } catch {
      const newError = new ErrorUtils(error, "Creatclass Error");
      newError.showAlert();
    }
  };

  joinClassroom = async (code) => {
    try {
      this.props.dispatch(joinClassroom(code));
    } catch {
      const newError = new ErrorUtils(error, "Joinclass Error");
      newError.showAlert();
    }
  };

  showDatePicker = (date) => {
    this.setState({
      isDatePickerVisible: date,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  handleConfirm = (datetime) => {
    const selectdate = moment(datetime, "h:mm:ss A").format("dddd HH:mm");
    console.log("startTime", selectdate);
    this.setState({
      data: selectdate,
    });
    this.hideDatePicker();
  };

  SubmitdataClassroom = () => {
    const data = {
      name: this.state.name,
      description: this.state.description,
      datetime: this.state.data,
      endTime: this.state.end,
    };
    console.log(data);
    this.creatClassroom(data);
    this.setState({
      name: "",
      description: "",
    });
  };

  SubmitJoinClassroom = () => {
    const codeclassroom = {
      code: this.state.code,
    };
    this.joinClassroom(codeclassroom);
    this.setState({
      code: "",
    });
  };

  async componentDidMount() {
    this.props.dispatch(getClassroom());
  }

  render() {
    const { Classroom } = this.props;
    const { modalVisible, nameselect } = this.state;
    const actions = [
      {
        text: "Create Classroom",
        icon: require("../assets/logo.png"),
        name: "CreateClass",
        position: 2,
      },
      {
        text: "Join Classroom",
        icon: require("../assets/logo.png"),
        name: "JoinClass",
        position: 1,
      },
    ];
    return (
      <SafeAreaView style={Externalstyle.container}>
        <View style={Externalstyle.title_header}>
          <Text style={Externalstyle.text_title}>Classroom</Text>
          <View style={Externalstyle.line_title} />
        </View>
        <FlatList
          data={Classroom}
          renderItem={({ item }) => (
            <TouchableOpacity
              onLongPress={() => this.openModal()}
              delayLongPress={600}
              onPress={() => {
                this.props.navigation.navigate("Lessons", {
                  idClassroom: item.id,
                  userOwner: item.userIsOwner,
                });
              }}
            >
              <ImageBackground
                source={{
                  uri:
                    "https://media4.manhattan-institute.org/sites/cj/files/woke-classrooms.jpg",
                }}
                imageStyle={{ borderRadius: 15 }}
                opacity={0.2}
                style={Externalstyle.classroom_card}
              >
                <Text style={Externalstyle.classroom_title}>
                  SUBJECT: {item.name}
                </Text>
                <Text style={Externalstyle.classroom_date}>
                  DATE-TIME: {item.day} {item.time}
                </Text>
                <Text style={Externalstyle.classroom_author}>
                  OWNER: {item.nameOwner}
                </Text>
                {item.userIsOwner ? (
                  <Text style={Externalstyle.classroom_author}>
                    CODE: {item.code}
                  </Text>
                ) : null}
              </ImageBackground>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
        {nameselect == "CreateClass" ? (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <SafeAreaView style={Externalstyle.register_container}>
              <KeyboardAwareScrollView>
                <View style={{ marginTop: 20, alignItems: "center" }}>
                  <Text style={Externalstyle.text_title_primary}>
                    CREATE CLASS
                  </Text>
                </View>
                <View style={Externalstyle.register_content}>
                  <Text
                    style={[
                      Externalstyle.creatpost_text_label,
                      { color: "black" },
                    ]}
                  >
                    Name class
                  </Text>
                  <Input
                    style={Externalstyle.creatpost_input}
                    numberOfLines={1}
                    placeholder={"Text here..."}
                    placeholderTextColor="black"
                    onChangeText={(e) => {
                      this.setState({ name: e });
                    }}
                  />
                  <Text
                    style={[
                      Externalstyle.creatpost_text_label,
                      { color: "black" },
                    ]}
                  >
                    Description
                  </Text>
                  <Input
                    style={Externalstyle.creatpost_input}
                    numberOfLines={1}
                    placeholder={"Text here..."}
                    placeholderTextColor="black"
                    onChangeText={(e) => {
                      this.setState({ description: e });
                    }}
                  />
                  <Text
                    style={[
                      Externalstyle.creatpost_text_label,
                      { color: "black" },
                    ]}
                  >
                    Date-Time - Start
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.showDatePicker(true)}
                    style={Externalstyle.create_image}
                  >
                    <Text style={[Externalstyle.title, { color: "white" }]}>
                      Select Date-Time
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={[
                      Externalstyle.creatpost_text_label,
                      { color: "black" },
                    ]}
                  >
                    Date-Time - End
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.showDatePicker2(true)}
                    style={Externalstyle.create_image}
                  >
                    <Text style={[Externalstyle.title, { color: "white" }]}>
                      Select Date-Time
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={[
                      Externalstyle.creatpost_text_label,
                      { color: "black" },
                    ]}
                  >
                  จำนวนชั่วโมงเรียน
                  </Text>
                  <Input
                    style={Externalstyle.creatpost_input}
                    keyboardType='numeric'
                    maxLength={2}
                    numberOfLines={1}
                    placeholder={"Hours here..."}
                    placeholderTextColor="black"
                    onChangeText={(e) => {
                      this.setState({ name: e });
                    }}
                  />
                  <DateTimePickerModal
                    isVisible={this.state.isDatePickerVisible}
                    is24Hour={true}
                    format={"HH:mm"}
                    mode="datetime"
                    pickerContainerStyleIOS={{ backgroundColor: "white" }}
                    textColor="black"
                    onConfirm={this.handleConfirm}
                    onCancel={this.hideDatePicker}
                  />
                </View>
              </KeyboardAwareScrollView>
              <View
                style={{ justifyContent: "flex-end", alignItems: "center" }}
              >
                <TouchableHighlight
                  activeOpacity={0.2}
                  underlayColor={Color.background_footer}
                  onPress={() => {
                    if (
                      this.state.name == "" ||
                      this.state.description == "" ||
                      this.state.author == "" ||
                      this.state.data == ""
                    ) {
                      Alert.alert(
                        "กรอกข้อมูลไม่ครบ",
                        "ยืนยัน",
                        [
                          {
                            text: "ตกลง",
                            onPress: () => {
                              this.setModalVisible(!modalVisible);
                            },
                            style: "ok",
                          },
                        ],
                        { cancelable: false }
                      );
                    } else {
                      this.SubmitdataClassroom();
                      this.setModalVisible(!modalVisible);
                    }
                  }}
                >
                  <View style={Externalstyle.create_submit}>
                    <Text style={[Externalstyle.title, { color: "white" }]}>
                      Submit
                    </Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  activeOpacity={0.2}
                  underlayColor={Color.background_footer}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <View style={Externalstyle.cansel_submit}>
                    <Text style={[Externalstyle.title, { color: "white" }]}>
                      Cancel
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </SafeAreaView>
          </Modal>
        ) : nameselect == "JoinClass" ? (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <Animatable.View
              animation="zoomIn"
              duration={2000}
              style={Externalstyle.classroom_centeredView}
            >
              <View style={Externalstyle.classroom_modalView}>
                <Text h4 style={Externalstyle.classroom_modalText}>
                  Join Classroom
                </Text>
                <View style={Externalstyle.inputContainer}>
                  <TextInput
                    style={Externalstyle.classroom_modal_input}
                    numberOfLines={1}
                    placeholder={"Password Classroom"}
                    placeholderTextColor="white"
                    onChangeText={(e) => {
                      this.setState({ code: e });
                    }}
                  />
                </View>
                <TouchableHighlight
                  activeOpacity={0.2}
                  underlayColor={Color.background_footer}
                  onPress={() => {
                    this.SubmitJoinClassroom();
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <View
                    style={{
                      ...Externalstyle.modal_profile_button_edit,
                    }}
                  >
                    <Text style={[Externalstyle.title, { color: "white" }]}>
                      Join
                    </Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  activeOpacity={0.2}
                  underlayColor={Color.background_footer}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <View
                    style={{
                      ...Externalstyle.modal_profile_button,
                    }}
                  >
                    <Text style={[Externalstyle.title, { color: "white" }]}>
                      Cancle
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </Animatable.View>
          </Modal>
        ) : null}
        <FloatingAction
          actions={actions}
          color={Color.background_button_attendance}
          onPressItem={(name) => {
            this.setModalVisible(true, name);
          }}
        />
        <Overlay
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          overlayStyle={{
            width: "80%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Editclassroom")}
              style={[
                Externalstyle.profile_button_edit,
                { flexDirection: "row" },
              ]}
            >
              <FontAwesomeIcon icon={faEdit} size={32} color="white" />
              <Text
                style={[
                  Externalstyle.title,
                  { fontSize: 16, color: "white", paddingHorizontal: 10 },
                ]}
              >
                EDIT
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Externalstyle.profile_button, { flexDirection: "row" }]}
            >
              <FontAwesomeIcon icon={faTrash} size={32} color="white" />
              <Text
                style={[
                  Externalstyle.title,
                  { fontSize: 16, color: "white", paddingHorizontal: 10 },
                ]}
              >
                DELETE
              </Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  Classroom: state.classReducer.Classroom.classroomUser,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null)(classroomnoenroll)
);
