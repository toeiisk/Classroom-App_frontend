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
import { Button, Overlay } from "react-native-elements";
import { FloatingAction } from "react-native-floating-action";
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";
class LessonScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayVisible: false,
      modalVisible: false,
      nameselect: "",
      nameselect2: "",
      name: "",
    };
  }

  setOverlayVisible = (visible, name) => {
    this.setState({
      overlayVisible: visible,
      nameselect2: name,
    });
  };

  setModalVisible = (visible, name) => {
    this.setState({
      modalVisible: visible,
      nameselect: name,
    });
  };
  render() {
    const { overlayVisible, nameselect2 } = this.state;
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
          <Text style={Externalstyle.text_title}>LESSONS</Text>
        </View>
        <ScrollView>
          <View style={{ paddingHorizontal: 20 }}>
            <FlatList
              numColumns={2}
              data={[
                {
                  id: "1",
                  title: "Lesson 1",
                  bgcolor: "#8B93F5",
                },
                {
                  id: "2",
                  title: "Lesson 2",
                  bgcolor: "#F7704C",
                },
                {
                  id: "3",
                  title: "Lesson 3",
                  bgcolor: "#4CBF8B",
                },
                {
                  id: "4",
                  title: "Lesson 4",
                  bgcolor: "#609FD5",
                },
                {
                  id: "5",
                  title: "Lesson 5",
                  bgcolor: "#D4D4D4",
                },
                {
                  id: "6",
                  title: "Lesson 6",
                  bgcolor: "#405FD7",
                },
              ]}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("Createclass");
                  }}
                  style={Externalstyle.gridItem}
                >
                  <View
                    style={[
                      Externalstyle.lesson_card,
                      { backgroundColor: item.bgcolor },
                    ]}
                  >
                    <Text style={[Externalstyle.title, { color: "white" }]}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </ScrollView>
        {nameselect2 == "CreateClass" ? (
          <Overlay
            onBackdropPress={() => {
              this.setOverlayVisible(!overlayVisible);
            }}
            overlayStyle={{ backgroundColor: "transparent" }}
          >
            <View style={Externalstyle.classroom_centeredView}>
              <Animatable.View
                animation="zoomIn"
                duration={2000}
                style={Externalstyle.classroom_modalView}
              ></Animatable.View>
            </View>
          </Overlay>
        ) : nameselect2 == "JoinClass" ? (
          <Overlay
            onBackdropPress={() => {
              this.setOverlayVisible(!overlayVisible);
            }}
            overlayStyle={{ backgroundColor: "transparent" }}
          >
            <View style={Externalstyle.classroom_centeredView}>
              <Animatable.View
                animation="zoomIn"
                duration={2000}
                style={Externalstyle.classroom_modalView}
              ></Animatable.View>
            </View>
          </Overlay>
        ) : null}
        <FloatingAction
          actions={actions}
          color={Color.background_button_attendance}
          onPressItem={(name) => {
            this.setOverlayVisible(true, name);
          }}
        />
      </SafeAreaView>
    );
  }
}

export default LessonScreen;
