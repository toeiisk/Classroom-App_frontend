import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
} from "react-native";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LogBox } from "react-native";
import Externalstyle from "../style/externalStyle";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBackspace,
  faBackward,
  faChevronCircleLeft,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { AsyncStorage } from "react-native";
import { useSelector } from "react-redux";
import { compose } from "redux";
import { usePubNub } from "pubnub-react";
import Color from "../assets/resources/constants/color";
const PubNub = require("pubnub");

LogBox.ignoreAllLogs();

const pubnub = new PubNub({
  publishKey: "pub-c-d0ea43cd-e94b-46e2-9f75-00e9e6a658b2",
  subscribeKey: "sub-c-6a62607c-2d9b-11eb-ae78-c6faad964e01",
  uuid: "sec-c-MjE2MmVmMTgtMTZlYy00ZTE4LWE3MzYtYjZjNjIxOTVjZmEz",
});

export default function ChatScreen(props) {
  const [getInput, setInput] = useState("");
  const [getMessage, setMessage] = useState([])
  const pubnub = usePubNub();
  const user = useSelector(state => state.authReducer.UserLogin.datauser)
  // const classroom = useSelector(state => state.classReducer.Classroom.classroomUser)
  const classroom = {
    "name": props.route.params.nameclassroom
  }

  useEffect(() => {
    if (pubnub) {
      const listener = {
        message: envelope => {
          setMessage(msgs => [
            ...msgs,
            {
              id: envelope.message.id,
              author: envelope.message.author,
              user: envelope.message.user,
              content: envelope.message.content,
              code: envelope.message.code,
              timetoken: envelope.timetoken
            }
          ]);
        }
      };
      pubnub.addListener(listener);
      pubnub.subscribe({
        channels: [classroom.name],
      });

      return () => {
        pubnub.removeListener(listener);
        pubnub.unsubscribeAll();
      };
    }
  }, [pubnub]);
  var _menu = null;

  const setMenuRef = (ref) => {
    _menu = ref;
  };

  const hideMenu = () => {
    _menu.hide();
  };

  const showMenu = () => {
    _menu.show();
  };

  const handleSubmit = () => {
    // Clear the input field.
    setInput("");

    // Create the message with random `id`.
    const message = {
      content: getInput,
      user: {
        id: user.roles[0].user_roles.userId,
        name: user.facebookName || user.firstname + " " + user.lastname
      },
      id: Math.random()
        .toString(16)
        .substr(2)
    };

    // Publish our message to the channel `chat`
    pubnub.publish({ channel: classroom.name, message });
  };
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
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor="white"
          onPress={() => props.navigation.goBack()}
        >
          <FontAwesomeIcon icon={faChevronCircleLeft} size={35} color="black" />
        </TouchableHighlight>
        <Text
          style={{ fontSize: 22, fontFamily: "kanitBold", letterSpacing: 2 }}
        >
          CLASSROOM 01
        </Text>
        <Menu
          ref={setMenuRef}
          button={
            <TouchableHighlight activeOpacity={0.2} underlayColor="white">
              <FontAwesomeIcon
                icon={faEllipsisV}
                size={35}
                color="black"
                onPress={showMenu}
              />
            </TouchableHighlight>
          }
        >
          <MenuItem onPress={hideMenu}>
            <Text style={[Externalstyle.chat_title, { color: "black" }]}>
              LEAVE
            </Text>
          </MenuItem>
        </Menu>
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <FlatList
            data={getMessage}
            renderItem={({ item }) => (
              <View style={Externalstyle.messages_container}>
                <View
                  style={[
                    Externalstyle.messagesbox,
                    {
                      backgroundColor:
                        item.user.id === user.roles[0].user_roles.userId
                          ? Color.background_footer
                          : "white",
                      marginLeft: item.user.id === user.roles[0].user_roles.userId ? 50 : 0,
                      marginRight: item.user.id === user.roles[0].user_roles.userId ? 0 : 50,
                    },
                  ]}
                >
                  {item.user.id != user.roles[0].user_roles.userId && (
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
          // ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </ScrollView>

      <View style={Externalstyle.chat_Container}>
        <KeyboardAvoidingScrollView>
          <View style={Externalstyle.mainContainer}>
            <TextInput
              value={getInput}
              onChangeText={(e) => setInput(e)}
              multiline
              placeholder={"Type a message..."}
              style={Externalstyle.chat_textinput}
            />
            <TouchableHighlight
              onPress={handleSubmit}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="send-circle"
                  size={35}
                  color="grey"
                />
              </View>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingScrollView>
      </View>
    </SafeAreaView>
  );
}