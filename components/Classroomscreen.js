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
} from "react-native";
import Externalstyle from "../style/externalStyle";
import * as Animatable from "react-native-animatable";
import { FloatingAction } from "react-native-floating-action";
export default class classroomnoenroll extends React.Component {
  render() {
    const actions = [
      {
        text: "Accessibility",
        icon: require("../assets/logo.png"),
        name: "bt_accessibility",
        position: 2,
      },
      {
        text: "Language",
        icon: require("../assets/logo.png"),
        name: "bt_language",
        position: 1,
      },
      {
        text: "Location",
        icon: require("../assets/logo.png"),
        name: "bt_room",
        position: 3,
      },
      {
        text: "Video",
        icon: require("../assets/logo.png"),
        name: "bt_videocam",
        position: 4,
      },
    ];
    return (
      <SafeAreaView style={Externalstyle.container}>
        <View style={Externalstyle.title_header}>
          <Text style={Externalstyle.text_title}>Classroom</Text>
          <View style={Externalstyle.line_title}/>
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
                  <Text style={Externalstyle.classroom_author}>{item.author}</Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </ScrollView>
        <FloatingAction
          actions={actions}
          onPressItem={(name) => {
            console.log(`selected button: ${name}`);
          }}
        />
      </SafeAreaView>
    );
  }
}

