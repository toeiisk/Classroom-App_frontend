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
  Image,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
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
          <View style={{ paddingHorizontal: 20 }}>
            <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}>
              <Image
                source={require("../assets/logo-classroom.png")}
                style={{ height: "100%", width: "20%" }}
              />
              <View style={Externalstyle.text_attendance}>
                <Text style={Externalstyle.chat_title}>
                  Classroom001
                  {"\n"}
                </Text>
                <Text style={Externalstyle.chat_titlesub}>
                  Lorem Ipsum is simply dummy
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}>
              <Image
                source={require("../assets/logo-classroom.png")}
                style={{ height: "100%", width: "20%" }}
              />
              <View style={Externalstyle.text_attendance}>
                <Text style={Externalstyle.chat_title}>
                  Classroom001
                  {"\n"}
                </Text>
                <Text style={Externalstyle.chat_titlesub}>
                  Lorem Ipsum is simply dummy
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
