import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBackspace,
  faBackward,
  faChevronCircleLeft,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

class ChatScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };

    this.setMessage = this.setMessage.bind(this);
  }

  setMessage = (inputText) => {
    this.setState({
      message: inputText,
    });
  };

  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <SafeAreaView style={Externalstyle.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              size={35}
              color="black"
            />
          </TouchableOpacity>
          <Text
            style={{ fontSize: 22, fontFamily: "kanitBold", letterSpacing: 2 }}
          >
            CLASSROOM 01
          </Text>
          <Menu
            ref={this.setMenuRef}
            button={
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  size={35}
                  color="black"
                  onPress={this.showMenu}
                />
              </TouchableOpacity>
            }
          >
            <MenuItem onPress={this.hideMenu}>
              <Text style={[Externalstyle.chat_title, { color: "black" }]}>
                LEAVE
              </Text>
            </MenuItem>
          </Menu>
        </View>
        <ScrollView>
          <View style={{ paddingHorizontal: 20 }}>
            <FlatList
              data={[
                {
                  id: "1",
                  content: "Helloooooooooooooooooo",
                  createdAt: "2020-11-03T14:48:00.000Z",
                  user: {
                    id: "u1",
                    name: "Sukrit",
                  },
                },
                {
                  id: "2",
                  content: "Hi!",
                  createdAt: "2020-11-03T14:48:00.000Z",
                  user: {
                    id: "u2",
                    name: "Jakkapat",
                  },
                },
                {
                  id: "3",
                  content: "What is your name ?",
                  createdAt: "2020-11-03T14:48:00.000Z",
                  user: {
                    id: "u1",
                    name: "Sukrit",
                  },
                },
                {
                  id: "4",
                  content: "My name is Ong. And you ?",
                  createdAt: "2020-11-03T14:48:00.000Z",
                  user: {
                    id: "u2",
                    name: "Jakkapat",
                  },
                },
              ]}
              renderItem={({ item }) => (
                <View style={Externalstyle.messages_container}>
                  <View
                    style={[
                      Externalstyle.messagesbox,
                      {
                        backgroundColor:
                          item.user.id === "u1"
                            ? Color.background_footer
                            : "white",
                        marginLeft: item.user.id === "u1" ? 50 : 0,
                        marginRight: item.user.id === "u1" ? 0 : 50,
                      },
                    ]}
                  >
                    {item.user.id != "u1" && (
                      <Text style={Externalstyle.messages_name}>
                        {item.user.name}
                      </Text>
                    )}
                    <Text style={Externalstyle.titlesub}>{item.content}</Text>
                    <Text style={Externalstyle.messages_time}>
                      {moment(item.createdAt).fromNow()}
                    </Text>
                  </View>
                </View>
              )}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </ScrollView>

        <View style={Externalstyle.chat_Container}>
          <View style={Externalstyle.buttonContainer}>
            <MaterialCommunityIcons name="image" size={24} color="white" />
          </View>
          <KeyboardAvoidingScrollView>
            <View style={Externalstyle.mainContainer}>
              <TextInput
                multiline
                placeholder={"Type a message..."}
                value={this.state.message}
                onChangeText={this.setMessage}
                style={Externalstyle.chat_textinput}
              />
              <MaterialCommunityIcons
                name="send-circle"
                size={35}
                color="grey"
              />
            </View>
          </KeyboardAvoidingScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default ChatScreen;
