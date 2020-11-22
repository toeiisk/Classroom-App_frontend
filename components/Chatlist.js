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
export default class attendancescreen extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <SafeAreaView style={Externalstyle.container}>
        <View style={Externalstyle.title_header}>
          <Text style={Externalstyle.text_title}>CHATS</Text>
          <View style={Externalstyle.chat_inputContainer}>
            <TextInput
              style={Externalstyle.chat_login_input}
              numberOfLines={1}
              placeholder="Type text"
            />
          </View>
        </View>
        <ScrollView>
          <Card containerStyle={{paddingHorizontal: 20, borderRadius: 10}}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Chatroom");
              }}
              style={{ flexDirection: "row", paddingVertical: 10 }}
            >
              <Image
                source={require("../assets/logo-classroom.png")}
                style={{ height: 70, width: 70 }}
              />
              <View style={Externalstyle.text_attendance}>
                <Text style={[Externalstyle.chat_title, {color: "black"}]}>Classroom001</Text>
                <Text style={[Externalstyle.chat_titlesub, {color: "black"}]}>
                  Lorem Ipsum is simply dummy
                </Text>
              </View>
            </TouchableOpacity>
          </Card>
          {/* <View style={{ alignItems: "flex-start", paddingHorizontal: 30 }}>
            <View style={{ flexDirection: "row", padding:10 }}>
              <Image
                source={require("../assets/resources/icon/email.png")}
                style={Externalstyle.profile_logo}
              />
              <Text style={Externalstyle.profile_title}>
                61070121@gmail.com
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding:10 }}>
              <Image
                source={require("../assets/resources/icon/email.png")}
                style={Externalstyle.profile_logo}
              />
              <Text style={Externalstyle.profile_title}>
                61070121@gmail.com
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding:10 }}>
              <Image
                source={require("../assets/resources/icon/email.png")}
                style={Externalstyle.profile_logo}
              />
              <Text style={Externalstyle.profile_title}>
                61070121@gmail.com
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding:10 }}>
              <Image
                source={require("../assets/resources/icon/email.png")}
                style={Externalstyle.profile_logo}
              />
              <Text style={Externalstyle.profile_title}>
                61070121@gmail.com
              </Text>
            </View>
          </View> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
