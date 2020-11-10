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

  render() {
    const { modalVisible, nameselect } = this.state;
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
                    this.props.navigation.navigate("Contentclass");
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
                      this.setState({ code: e });
                    }}
                  />
                </View>
                <TouchableHighlight
                  style={{
                    ...Externalstyle.profile_button_edit,
                  }}
                  onPress={() => {
                    this.SubmitJoinClassroom();
                    this.setModalVisible(!modalVisible);
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

export default LessonScreen;
