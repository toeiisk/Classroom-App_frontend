import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableHighlight,  Alert, } from "react-native";
import { Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";
import axios from "axios";


export default function forgotpassscreen(props) {
  
  const [username, setUsername] = useState('')
  
  const checkUsername = async () => {
    const data = {
      username : username
    }
    await axios.post('http://103.13.231.22:3000/api/auth/forgotpassword', data)
    .then((res) => console.log('pass'))
    .catch((er) => console.log(er.message))
    // props.navigation.navigate("ForgotpasscodeScreen")
  }


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
              Enter your Username and we'll send you a code to reset your
              password.
            </Text>
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              Username
            </Text>
            <Input
              style={Externalstyle.creatpost_input}
              numberOfLines={1}
              placeholder={"Text here..."}
              placeholderTextColor="black"
              onChangeText={(e) => setUsername(e)}
            />
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={Color.background_footer}
          onPress={() => checkUsername()}
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
          onPress={() => props.navigation.goBack()}
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
