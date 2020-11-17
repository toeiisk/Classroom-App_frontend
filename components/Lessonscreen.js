import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  FlatList,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { FloatingAction } from "react-native-floating-action";
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";
import { connect } from "react-redux";
import { compose } from "redux";
import {createLesson} from '../store/actions/lesson.action'
import {getLesson} from '../store/actions/lesson.action'
import Loadingscreen from './LoadingScreen'

class LessonScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      nameselect: "",
      name: "",
    };
  }
  setModalVisible = (visible, name) => {
    this.setState({
      modalVisible: visible,
      nameselect: name,
    });
  };


  randomRGB = () => {             
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red}, ${green}, ${blue})`;
  }


  submitLesson = () =>{
    const idClassroom = this.props.route.params.idClassroom

    const data = {
      'namelesson': this.state.name,
      'idclassroom' : idClassroom
    }
    this.senddataforcreateLesson(data)
    this.setState({
      name: ''
    })
  }


  senddataforcreateLesson = async (data) =>{
    try{
      this.props.dispatch(createLesson(data))
    }catch{
      const newError = new ErrorUtils(error, "Creatclass Error");
      newError.showAlert();
    }
  }

  async componentDidMount(){
    const idClassroom = this.props.route.params.idClassroom
    this.props.dispatch(getLesson(idClassroom))
  }


  render() {
    
    const { modalVisible, nameselect, bgColor } = this.state;
    const {Lesson} = this.props
    const userOwner = this.props.route.params.userOwner


    const actions = [
      {
        text: "Create Lesson",
        icon: require("../assets/logo.png"),
        name: "CreateLesson",
        position: 2,
      },
    ];
    return (
      <SafeAreaView style={Externalstyle.container}>
        <View style={Externalstyle.title_header}>
          <Text style={Externalstyle.text_title}>LESSONS</Text>
          <View style={Externalstyle.line_title} />
        </View>
        <ScrollView>
          <View style={{ paddingHorizontal: 20 }}>
            <FlatList
              numColumns={2}
              data={Lesson.LessonmUser}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("Contentclass", {'LessonId' : item.id, 'Owner' : userOwner});
                  }}
                  style={Externalstyle.gridItem}
                >
                  {this.ChangeColor}
                  <View
                    style={[
                      Externalstyle.lesson_card,
                      { backgroundColor: this.randomRGB()},
                    ]}
                  >
                    <Text style={[Externalstyle.title, { color: "white" }]}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </ScrollView>
        {nameselect == "CreateLesson" ? (
          <Modal transparent={true} visible={modalVisible}>
            <View style={Externalstyle.classroom_centeredView}>
              <Animatable.View
                animation="zoomIn"
                duration={2000}
                style={Externalstyle.lesson_modalView}
              >
                <Text h4 style={Externalstyle.classroom_modalText}>
                  Create Lesson
                </Text>
                <View style={Externalstyle.inputContainer}>
                  <TextInput
                    style={Externalstyle.classroom_modal_input}
                    numberOfLines={1}
                    placeholder={"Text input.."}
                    placeholderTextColor="white"
                    onChangeText={(e) => {
                      this.setState({ name: e });
                    }}
                  />
                </View>
                <TouchableHighlight
                  style={{
                    ...Externalstyle.profile_button_edit,
                  }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                    this.submitLesson()
                  }}
                >
                  <Text style={[Externalstyle.title, { color: "white" }]}>
                    Create Lesson
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
              </Animatable.View>
            </View>
          </Modal>
        ) : null}
        {userOwner ? 
          <FloatingAction
            actions={actions}
            color={Color.background_button_attendance}
            onPressItem={(name) => {
              this.setModalVisible(true, name);
            }}
          />
          :
          null
        }
      </SafeAreaView>
    );
  }
}


const mapStateToProps = (state) => ({
  Lesson : state.lessonReducer.Lesson,
})
 
const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default  compose(connect(mapStateToProps, mapDispatchToProps, null)(LessonScreen));

