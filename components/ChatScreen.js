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
import { connect } from "react-redux";
import { compose } from "redux";
import { usePubNub } from "pubnub-react";
const PubNub = require("pubnub");

LogBox.ignoreAllLogs();

const pubnub = new PubNub({
  publishKey: "pub-c-d0ea43cd-e94b-46e2-9f75-00e9e6a658b2",
  subscribeKey: "sub-c-6a62607c-2d9b-11eb-ae78-c6faad964e01",
  uuid: "sec-c-MjE2MmVmMTgtMTZlYy00ZTE4LWE3MzYtYjZjNjIxOTVjZmEz",
});

pubnub.subscribe({
  channels: ["Classroom01", "Classroom02", "Classroom03"],
});

let i = 0;
export default function ChatScreen(props) {
  const [input, setInput] = useState("");
  const [getMessage, setMessage] = useState([])

  const pubnub = usePubNub();

  useEffect(() => {
    // We need to make sure that PubNub is defined
    if (pubnub) {

      // Create a listener that will push new messages to our `messages` variable
      // using the `setMessages` function.
      const listener = {
        message: envelope => {
          setMessage(msgs => [
            ...msgs,
            {
              id: envelope.message.id,
              author: envelope.message.author,
              content: envelope.message.content,
              code: envelope.message.code,
              timetoken: envelope.timetoken
            }
          ]);
        }
      };

      // Add the listener to pubnub instance and subscribe to `chat` channel.
      pubnub.addListener(listener);
      pubnub.subscribe({
        channels: ["Classroom01", "Classroom02", "Classroom03"],
      });

      // We need to return a function that will handle unsubscription on unmount
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
          onPress={() => this.props.navigation.goBack()}
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
                      backgroundColor: Color.background_footer,
                      marginRight: 50,
                    },
                  ]}
                >
                  <Text style={Externalstyle.titlesub}>{item.code}</Text>
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
              multiline
              placeholder={"Type a message..."}
              style={Externalstyle.chat_textinput}
            />
            <TouchableHighlight>
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
