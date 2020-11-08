import React, { Component } from "react";
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
class LessonScreen extends Component {
  render() {
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
      </SafeAreaView>
    );
  }
}

export default LessonScreen;
