import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { UserLogout } from "../store/actions/auth.actions";
import { connect } from "react-redux";
import Externalstyle from "../style/externalStyle";
import { ScrollView } from "react-native-gesture-handler";
class Profilescreen extends React.Component {
  render() {
    const { UserLogout } = this.props;
    return (
      <SafeAreaView style={Externalstyle.container}>
        <ScrollView>
          <View style={Externalstyle.layout_header}>
            <Image
              source={{
                uri:
                  "https://scontent.fbkk12-4.fna.fbcdn.net/v/t31.0-8/18402248_1167842763341854_8112859874758364759_o.jpg?_nc_cat=103&ccb=2&_nc_sid=174925&_nc_eui2=AeHxDo_OLwWJW3jTAZLqpedKJAPitTxNcVYkA-K1PE1xVoVEZnnHYRUvxmDXkVG0l8jRrQUzmGod1YJ9mrIWhnZS&_nc_ohc=7F5SRT90GlIAX-bWOLu&_nc_ht=scontent.fbkk12-4.fna&oh=834c65addd07025c6a2a3695be29b97f&oe=5FBF7B40",
              }}
              style={Externalstyle.profile_image}
            />
            <Text style={[Externalstyle.text_title, { textAlign: "center" ,padding: 20 }]}>
              Paramet Kongjaroen
            </Text>
          </View>
          <View style={Externalstyle.layout_detail}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/resources/icon/email.png")}
                style={Externalstyle.profile_logo}
              />
              <Text style={Externalstyle.profile_title}>
                61070121@gmail.com
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/resources/icon/man.png")}
                style={Externalstyle.profile_logo}
              />
              <Text style={Externalstyle.profile_title}>61070121</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/resources/icon/phone.png")}
                style={Externalstyle.profile_logo}
              />
              <Text style={Externalstyle.profile_title}>088-8888-888</Text>
            </View>
          </View>
          <View style={Externalstyle.layout_button}>
            <TouchableOpacity style={Externalstyle.profile_button_edit}>
              <Text style={[Externalstyle.title, { color: "white" }]}>
                EDIT
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Externalstyle.profile_button}
              onPress={UserLogout}
            >
              <Text style={[Externalstyle.title, { color: "white" }]}>
                LOGOUT
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapDispathtoProps = (dispatch) => {
  return {
    UserLogout: () => dispatch(UserLogout()),
  };
};

export default connect(null, mapDispathtoProps)(Profilescreen);
