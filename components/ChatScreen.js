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
import { Input } from "react-native-elements";
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";

class ChatScreen extends Component {
  render() {
    return (
      <SafeAreaView style={Externalstyle.container}>
        <ScrollView>
          <View style={{ paddingHorizontal: 20 }}>
            <FlatList
              data={[
                {
                  id: "1",
                  content: "Hello mother F**k!",
                  createdAt: "2020-10-03T14:48:00.000Z",
                  user: {
                    id: "u1",
                    name: "Sukrit",
                  },
                },
                {
                  id: "2",
                  content: "444444444444",
                  createdAt: "2020-10-03T14:48:00.000Z",
                  user: {
                    id: "u2",
                    name: "Paramet",
                  },
                },
                {
                  id: "3",
                  content: "5555555555555",
                  createdAt: "2020-10-03T14:48:00.000Z",
                  user: {
                    id: "u3",
                    name: "Jakkapat",
                  },
                },
                {
                  id: "4",
                  content: "6666666666",
                  createdAt: "2020-10-03T14:48:00.000Z",
                  user: {
                    id: "u1",
                    name: "Sukrit",
                  },
                },
              ]}
              renderItem={({ item }) => (
                <Text>{item.content}</Text>
                // <TouchableOpacity
                //   onPress={() => {
                //     this.props.navigation.navigate("Contentclass");
                //   }}
                //   style={Externalstyle.gridItem}
                // >
                //   <View
                //     style={[
                //       Externalstyle.lesson_card,
                //       { backgroundColor: item.bgcolor },
                //     ]}
                //   >
                //     <Text style={[Externalstyle.title, { color: "white" }]}>
                //       {item.title}
                //     </Text>
                //   </View>
                // </TouchableOpacity>
              )}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default ChatScreen;
