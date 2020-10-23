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
import * as Animatable from "react-native-animatable";
export default class attendancescreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.title_header}>
          <Text style={styles.text_title}>My Attendance</Text>
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
                id: "1",
                day: "Mon",
                date: "Oct 5th",
                timestamp: "10.45",
                subject: "MOBILE DEVICE PROGRAMMING",
              },
              {
                id: "2",
                day: "Mon",
                date: "Oct 5th",
                timestamp: "10.45",
                subject: "MOBILE DEVICE PROGRAMMING",
              },
              {
                id: "3",
                day: "Mon",
                date: "Oct 5th",
                timestamp: "10.45",
                subject: "MOBILE DEVICE PROGRAMMING",
              },
              {
                id: "4",
                day: "Mon",
                date: "Oct 5th",
                timestamp: "10.45",
                subject: "MOBILE DEVICE PROGRAMMING",
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
                  style={styles.card}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.boxattendance}>
                      <Text style={styles.title}>RATE</Text>
                    </View>
                    {/* <View style={{ backgroundColor: "rgba(255,0,0,0.5)" }}> */}
                    <View
                      style={{ flexDirection: "column", marginHorizontal: 10,}}
                    >
                      <Text style={styles.title}>
                        {item.day}, {item.date} - {item.timestamp}
                      </Text>
                      <Text style={styles.titlesub}>
                        SUBJECT: {item.subject}
                      </Text>
                    </View>
                  </View>
                  {/* </View> */}
                </ImageBackground>
              </TouchableOpacity>
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
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  title: {
    color: "black",
    opacity: 1,
    fontSize: 14,
    fontWeight: "bold",
  },
  titlesub: {
    color: "black",
    opacity: 1,
    fontSize: 14,
    fontWeight: "500",
  },
  boxattendance: {
    backgroundColor: "rgba(255,0,0,0.6)",
    borderRadius: 15,
    padding: 20,
    justifyContent: "center",
  },
});
