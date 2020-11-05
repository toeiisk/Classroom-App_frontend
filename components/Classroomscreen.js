import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  FlatList,
  ScrollView,
  Modal,
  TouchableHighlight,
} from "react-native";
import { Text } from "react-native-elements";
import { FloatingAction } from "react-native-floating-action";
import * as Animatable from "react-native-animatable";
import Color from "../assets/resources/constants/color";
import Externalstyle from "../style/externalStyle";
import axios from "axios";
import { connect } from "react-redux";
import { compose } from "redux";
import {getClassroom} from '../store/actions/classroom.action'
import {createClassroom} from '../store/actions/classroom.action'

class classroomnoenroll extends React.Component {
  state = {
    modalVisible: false,
    nameselect: "",
    description: '',
    name: '',
  };
  setModalVisible = (visible, name) => {
    this.setState({
      modalVisible: visible,
      nameselect: name,
    });
  };
  
  creatClassroom = async (data) =>{
    try{
      this.props.dispatch(createClassroom(data))
    }catch{
      const newError = new ErrorUtils(error, "Signup Error");
      newError.showAlert();
    }
  }

  SubmitdataClassroom =  () => {
    const data = {
      'name': this.state.name,
      'description': this.state.description
    }
    this.creatClassroom(data)
    this.setState({
      name : '',
      description : ''
    })
    
  }

  async componentDidMount(){
    this.props.dispatch(getClassroom())
  }

  render() {
    const {Classroom} = this.props
    console.log('dataclassroom', Classroom)
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
        <ScrollView>
          <FlatList
            data={Classroom}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Lessons")}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://image.freepik.com/free-vector/health-insurance-vector-illustration_159144-57.jpg",
                  }}
                  imageStyle={{ borderRadius: 15 }}
                  opacity={0.2}
                  style={Externalstyle.classroom_card}
                >
                  <Text style={Externalstyle.classroom_title}>{item.name}</Text>
                  <Text style={Externalstyle.classroom_date}>asdasdasdsad</Text>
                  <Text style={Externalstyle.classroom_author}>
                    {item.description}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </ScrollView>
        {nameselect == "CreateClass" ? (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={Externalstyle.classroom_centeredView}>
              <View style={Externalstyle.classroom_modalView}>
                <Text h4 style={Externalstyle.classroom_modalText}>
                  Create Classroom
                </Text>
                <View style={Externalstyle.inputContainer}>
                  <TextInput
                    style={Externalstyle.classroom_modal_input}
                    numberOfLines={1}
                    placeholder={"Name"}
                    placeholderTextColor="white"
                    onChangeText={(e) => {
                      this.setState({ name: e });
                    }}
                  />
                </View>
                <View style={Externalstyle.inputContainer}>
                  <TextInput
                    style={Externalstyle.classroom_modal_input}
                    numberOfLines={1}
                    placeholder={"Description"}
                    placeholderTextColor="white"
                    onChangeText={(e) => {
                      this.setState({ description: e });
                    }}
                  />
                </View>
                <TouchableHighlight
                  style={{
                    ...Externalstyle.profile_button_edit,
                  }}
                  onPress={() => {
                    this.SubmitdataClassroom();
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={[Externalstyle.title, { color: "white" }]}>
                    Create
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{
                    ...Externalstyle.profile_button,
                  }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={[Externalstyle.title, { color: "white" }]}>
                    Cancle
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        ) : nameselect == "JoinClass" ? (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={Externalstyle.classroom_centeredView}>
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
                  />
                </View>
                <TouchableHighlight
                  style={{
                    ...Externalstyle.profile_button_edit,
                  }}
                  onPress={() => {
                    // this.creatClassroom();
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={[Externalstyle.title, { color: "white" }]}>
                    Join
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{
                    ...Externalstyle.profile_button,
                  }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={[Externalstyle.title, { color: "white" }]}>
                    Cancle
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        ) : null}
        <FloatingAction
          actions={actions}
          color={Color.background_button_attendance}
          onPressItem={(name) => {
            this.setModalVisible(true, name);
          }}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  Classroom : state.classReducer.Classroom.classroomUser
})
 
const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default  compose(connect(mapStateToProps, mapDispatchToProps, null)(classroomnoenroll));


