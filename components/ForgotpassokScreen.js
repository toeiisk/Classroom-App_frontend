import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";

export default function forgotpasscodescreen() {
  return (
    <SafeAreaView style={Externalstyle.resetpass_container}>
      <ScrollView>
        <KeyboardAwareScrollView>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={Externalstyle.text_title_primary}>RESET PASSWORD</Text>
          </View>
          <View style={Externalstyle.register_content}>
            <Text
              style={[Externalstyle.resetpass_text_label, { color: "black" }]}
            >
              Successfully verified. Input a new password.
            </Text>
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              New Password
            </Text>
            <Input
              secureTextEntry={true}
              style={Externalstyle.creatpost_input}
              numberOfLines={1}
              placeholder={"Text here..."}
              placeholderTextColor="black"
            />
          </View>
        </KeyboardAwareScrollView>
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
