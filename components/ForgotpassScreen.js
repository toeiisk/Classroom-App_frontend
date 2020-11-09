import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Input } from "react-native-elements";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";

export default function forgotpassscreen() {
  return (
    <SafeAreaView style={Externalstyle.resetpass_container}>
      <ScrollView>
        <KeyboardAvoidingScrollView>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={Externalstyle.text_title_primary}>RESET PASSWORD</Text>
          </View>
          <View style={Externalstyle.register_content}>
            <Text
              style={[Externalstyle.resetpass_text_label, { color: "black" }]}
            >
              Enter your email address and we'll send you a code to reset your
              password.
            </Text>
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              Email Address
            </Text>
            <Input
              style={Externalstyle.creatpost_input}
              numberOfLines={1}
              placeholder={"Text here..."}
              placeholderTextColor="black"
            />
          </View>
        </KeyboardAvoidingScrollView>
      </ScrollView>
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <TouchableOpacity style={Externalstyle.create_submit}>
          <Text style={[Externalstyle.title, { color: "white" }]}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <TouchableOpacity style={Externalstyle.createpost_button}>
          <Text style={[Externalstyle.title, { color: "white" }]}>Cancle</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
