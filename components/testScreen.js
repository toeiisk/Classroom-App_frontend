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
  
  render() {
    return (
      <View style={styles.container}>
           <View style={{marginTop: 100, alignItems: 'center'}}>
                <Text style={{color: 'black'}}>Test Screen</Text>
            </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  }
});




export default TestScreen;