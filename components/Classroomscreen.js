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
export default class classroomnoenroll extends React.Component {
  state = {
    modalVisible: false,
    nameselect: "",
  };
  setModalVisible = (visible, name) => {
    this.setState({
      modalVisible: visible,
      nameselect: name,
    });
  };
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
            data={[
              {
                id: "06016325",
                title: "SERVICE-ORIENTED PROGRAMMING",
                date: "Monday 08.45 - 12.45",
                author: "Paramet Kongjaroen",
              },
              {
                id: "06016326",
                title: "SERVICE-ORIENTED PROGRAMMING",
                date: "Monday 08.45 - 12.45",
                author: "Paramet Kongjaroen",
              },
              {
                id: "06016327",
                title: "SERVICE-ORIENTED PROGRAMMING",
                date: "Monday 08.45 - 12.45",
                author: "Paramet Kongjaroen",
              },
              {
                id: "06016328",
                title: "SERVICE-ORIENTED PROGRAMMING",
                date: "Monday 08.45 - 12.45",
                author: "Paramet Kongjaroen",
              },
              {
                id: "06016329",
                title: "SERVICE-ORIENTED PROGRAMMING",
                date: "Monday 08.45 - 12.45",
                author: "Paramet Kongjaroen",
              },
              {
                id: "06016330",
                title: "SERVICE-ORIENTED PROGRAMMING",
                date: "Monday 08.45 - 12.45",
                author: "Paramet Kongjaroen",
              },
              {
                id: "06016331",
                title: "SERVICE-ORIENTED PROGRAMMING",
                date: "Monday 08.45 - 12.45",
                author: "Paramet Kongjaroen",
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
                  style={Externalstyle.classroom_card}
                >
                  <Text style={Externalstyle.classroom_title}>
                    {item.id} - {item.title}
                  </Text>
                  <Text style={Externalstyle.classroom_date}>{item.date}</Text>
                  <Text style={Externalstyle.classroom_author}>
                    {item.author}
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
                />
                <TextInput
                  numberOfLines={1}
                  placeholder={"Description"}
                  placeholderTextColor="black"
                  style={Externalstyle.classroom_modal_input2}
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
