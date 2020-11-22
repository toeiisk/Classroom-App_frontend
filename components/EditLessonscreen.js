import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
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
            <Text style={Externalstyle.text_title_primary}>EDIT LESSON</Text>
          </View>
          <View style={Externalstyle.register_content}>
            <Text
              style={[Externalstyle.resetpass_text_label, { color: "black" }]}
            >
              Edit name lesson.
            </Text>
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              Name
            </Text>
            <Input
              style={Externalstyle.creatpost_input}
              numberOfLines={1}
              placeholderTextColor="black"
            />
          </View>
        </KeyboardAvoidingScrollView>
      </ScrollView>
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={Color.background_footer}
        >
          <View style={Externalstyle.create_submit}>
            <Text style={[Externalstyle.title, { color: "white" }]}>
              Submit
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={Color.background_footer}
        >
          <View style={Externalstyle.profile_button}>
            <Text style={[Externalstyle.title, { color: "white" }]}>
              Cancel
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
