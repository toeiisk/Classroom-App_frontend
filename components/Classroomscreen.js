import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
export default class classroomnoenroll extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.title_header}>
          <Text style={styles.text_title}>Classroom</Text>
          <View
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 5,
              marginTop: 10,
            }}
          />
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
              <View style={styles.card}>
                <Text style={styles.title}>
                  {item.id} - {item.title}
                </Text>
                <Text style={styles.date}>
                  {item.date}
                </Text>
                <Text style={styles.author}>
                  {item.author}
                </Text>
              </View>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.5 * 0.4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D232E",
  },
  title_header: {
    padding: 20,
  },
  text_title: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 30,
  },
  card: {
    backgroundColor: "#7B7C7C",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  date: {
    color: "white",
    fontSize: 14,
    marginBottom: 30
  },
  author: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold"
  },
});
