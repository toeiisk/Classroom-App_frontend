import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import Color from "../assets/resources/constants/color";
import Externalstyle from "../style/externalStyle";
import { connect } from "react-redux";
import { compose } from "redux";

class attendancescreen extends React.Component {
  constructor(props) {
    super(props);
  }

  renderChatlist = (data) => {
    return data.map((item) => {
      return (
        <Animatable.View animation="fadeInUpBig" duration={2000}>
          <Card containerStyle={{ paddingHorizontal: 20, borderRadius: 10 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Chatroom", {classroom: item});
              }}
              style={{ flexDirection: "row", paddingVertical: 10 }}
            >
              <Image
                source={require("../assets/logo-classroom.png")}
                style={{ height: 70, width: 70 }}
              />
              <View style={Externalstyle.text_attendance}>
                <Text style={[Externalstyle.chat_title, { color: "black" }]}>
                  {item.name}
                </Text>
                <Text style={[Externalstyle.chat_titlesub, { color: "black" }]}>
                  {item.tile}
                </Text>
              </View>
            </TouchableOpacity>
          </Card>
        </Animatable.View>
      );
    });
  };

  render() {
    const { Classroom } = this.props;
    return (
      <SafeAreaView style={Externalstyle.container}>
        <View style={Externalstyle.title_header}>
          <Text style={Externalstyle.text_title}>CHATS</Text>
          <View style={Externalstyle.line_title} />
        </View>
        <ScrollView>{this.renderChatlist(Classroom)}</ScrollView>
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
  connect(mapStateToProps, mapDispatchToProps, null)(attendancescreen)
);
