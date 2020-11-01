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
  Modal,
  TouchableHighlight,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import * as Animatable from "react-native-animatable";
import Color from "../assets/resources/constants/color";
import Externalstyle from "../style/externalStyle";
import axios from "axios";
import { AsyncStorage } from 'react-native';


export default class classroomnoenroll extends React.Component {
  state = {
    modalVisible: false,
    nameselect: "",
    description: '',
    name: '',
    classroom : []
  };
  setModalVisible = (visible, name) => {
    this.setState({
      modalVisible: visible,
      nameselect: name,
    });
  };
  
  creatClassroom = async () => {
    var token = await AsyncStorage.getItem('token')
    const data = {
      'name' : this.state.name,
      'description' : this.state.description
    }
    await axios.post('http://103.13.231.22:3000/api/classroom/create', data, {
      headers: {
        'x-access-token': token
      }
    }).then(() =>{
      this.setState({
        name : '',
        description : ''
      })
    }).catch((er) => console.log(er.message))

  }

  async componentDidMount(){
    var token = await AsyncStorage.getItem('token')
    try{
      axios.get('http://103.13.231.22:3000/api/classroom/get/all/classroombyuser', {
        headers: {
          'x-access-token': token
        }
      })
      .then((res) =>{
        this.setState({
          classroom: res.data.classrooms
        })
      })
      .catch((er) => console.log(er.message))
    }catch (er) {
      return er
    }
  }
  
 

  render() {
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
            data={this.state.classroom}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <ImageBackground
                  source={{
                    uri:
                      "https://image.freepik.com/free-vector/health-insurance-vector-illustration_159144-57.jpg",
                  }}
                  imageStyle={{ borderRadius: 15 }}
                  opacity={0.2}
                  style={Externalstyle.classroom_card}
                >
                  <Text style={Externalstyle.classroom_title}>
                    {item.name}
                  </Text>
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
                <Text style={Externalstyle.classroom_modalText}>
                  Create Classroom !!
                </Text>
                <TextInput
                  numberOfLines={1}
                  placeholder={"Name"}
                  placeholderTextColor="black"
                  style={Externalstyle.classroom_modal_input}
                  onChangeText={(e) => {this.setState({name : e})}}
                />
                <TextInput
                  numberOfLines={1}
                  placeholder={"Description"}
                  placeholderTextColor="black"
                  style={Externalstyle.classroom_modal_input2}
                  onChangeText={(e) => {this.setState({description : e})}}
                />

                <TouchableHighlight
                  style={{
                    ...Externalstyle.classroom_openButton,
                    backgroundColor: Color.background_button_signin,
                    marginTop: 20,
                  }}
                  onPress={() => {
                    this.creatClassroom()
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={Externalstyle.classroom_textStyle}>
                    OK
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
                <Text style={Externalstyle.classroom_modalText}>
                  Join Classroom !!
                </Text>
                <TextInput
                  numberOfLines={1}
                  placeholder={"Password Classroom"}
                  placeholderTextColor="black"
                  style={Externalstyle.classroom_modal_input}
                />

                <TouchableHighlight
                  style={{
                    ...Externalstyle.classroom_openButton,
                    backgroundColor: Color.background_button_signin,
                    marginTop: 20,
                  }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={Externalstyle.classroom_textStyle}>
                    Hide Modal
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        ) : null}
        <FloatingAction
          actions={actions}
          onPressItem={(name) => {
            this.setModalVisible(true, name);
          }}
        />
      </SafeAreaView>
    );
  }
}
