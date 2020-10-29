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
  Modal,
  TouchableHighlight,
} from "react-native";
import Externalstyle from "../style/externalStyle";
import * as Animatable from "react-native-animatable";
import { FloatingAction } from "react-native-floating-action";
export default class classroomnoenroll extends React.Component {
  state = {
    modalVisible: false
  }
  setModalVisible = (visible) =>{
    this.setState({
      modalVisible : visible
    })
  }
  render() {
    const { modalVisible } = this.state;
    const actions = [
      {
        text: "Create Classroom",
        icon: require("../assets/logo.png"),
        name: "bt_accessibility",
        position: 2,
      },
      {
        text: "Join Classroom",
        icon: require("../assets/logo.png"),
        name: "bt_language",
        position: 1,
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Join Classroom !!</Text>
              <TextInput
                numberOfLines={1}
                placeholder={"Password Classroom"}
                placeholderTextColor="black"
                style={{borderColor: 'gray', borderWidth: 0.5, width:'100%', textAlign:'center', height: 50}}
                />

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3", marginTop: 20 }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <FloatingAction
          actions={actions}
          onPressItem={() => {this.setModalVisible(true)}}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
