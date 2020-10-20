import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { Image, Text } from "react-native-elements";
import externalStyle from "../style/externalStyle";
import * as Animatable from "react-native-animatable";
import axios from 'axios'

class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout = () => {
    console.log("Logout")
    this.props.navigation.navigate('LoginScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 100, alignItems: 'center' }}>
          <Text style={{ color: 'black', }}>Test Screen</Text>
        </View>
        <View style={styles.box_logout}>
          <TouchableOpacity style={styles.logout_btn} onPress={() => { this.onLogout() }}>
            <Text style={styles.text_button}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text_button: {
    fontSize: 16,
    fontWeight: "400",
    color: "#FFF",
  },
  logout_btn: {
    width: "50%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    backgroundColor: "red",
  },
  box_logout: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    marginBottom: 36
  }
});




export default TestScreen;