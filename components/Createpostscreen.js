import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";
import { Input } from "react-native-elements";
import { createNewUser } from "../store/actions/auth.actions";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";
// import {Actions} from 'react-native-router-flux';

export default class createpostscreen extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={[
          Externalstyle.register_container,
          { backgroundColor: Color.background },
        ]}
      >
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <KeyboardAvoidingScrollView>
            <View style={{ marginTop: 20, alignItems: "center" }}>
              <Text
                style={[Externalstyle.text_title_primary, { color: "white" }]}
              >
                CREATE POST
              </Text>
            </View>
            <View style={Externalstyle.register_content}>
              <Text style={Externalstyle.creatpost_text_label}>Title</Text>
              <Input
                style={Externalstyle.creatpost_input}
                numberOfLines={1}
                placeholder={"Text here..."}
                placeholderTextColor="#fff"
              />
              <Text style={Externalstyle.creatpost_text_label}>
                Description
              </Text>
              <KeyboardAvoidingScrollView>
                <TextInput
                  style={Externalstyle.creatpost_textarea}
                  underlineColorAndroid="transparent"
                  placeholder={"Text here..."}
                  placeholderTextColor={"#5F5F5F"}
                  numberOfLines={10}
                  multiline={true}
                />
              </KeyboardAvoidingScrollView>
              <Text style={Externalstyle.creatpost_text_label}>
                Image
              </Text>
              <View style={Externalstyle.atten_layout_button}>
                <TouchableOpacity style={Externalstyle.profile_button_edit}>
                  <Text style={[Externalstyle.title, { color: "white" }]}>
                    Attend
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
