import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ColorPropType,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { UserLogout } from "../store/actions/auth.actions";
import { connect } from "react-redux";
import Externalstyle from "../style/externalStyle";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import Color from "../assets/resources/constants/color";
class Profilescreen extends React.Component {
  render() {
    const { UserLogout } = this.props;
    const { UserLogin } = this.props;
    // console.log('data', UserLogin.datauser)
    return (
      <SafeAreaView style={Externalstyle.container}>
        <ScrollView>
          <View style={Externalstyle.layout_header}>
            <Image
              source={{
                uri: `http://103.13.231.22:3000${UserLogin.datauser.img}`
              }}
              style={Externalstyle.profile_image}
            />
            {UserLogin.datauser.facebookName != null ? 
           <Text
           style={[
             Externalstyle.text_title,
             { textAlign: "center", padding: 20 },
           ]}
         > 
           {UserLogin.datauser.facebookName}
         </Text>:

         <Text
         style={[
           Externalstyle.text_title,
           { textAlign: "center", padding: 20 },
         ]}
       > 
         {UserLogin.datauser.firstname} {UserLogin.datauser.lastname}
       </Text> 
          }
          </View>
          <View style={Externalstyle.layout_detail}>
            <View style={{ flexDirection: "row", paddingVertical: 20 }}>
              <Image
                source={require("../assets/resources/icon/email.png")}
                style={Externalstyle.profile_logo}
              />
              <Text style={Externalstyle.profile_title}>{UserLogin.datauser.email}</Text>
            </View>
            <View style={{ flexDirection: "row", paddingVertical: 20 }}>
              <Image
                source={require("../assets/resources/icon/man.png")}
                style={Externalstyle.profile_logo}
              />
              {UserLogin.datauser.stuid != null ? 
              <Text style={Externalstyle.profile_title}>{UserLogin.datauser.stuid}</Text>
              :
              <Text style={Externalstyle.profile_title}>Unavailable</Text> 
            }
            </View>
            <View style={{ flexDirection: "row", paddingVertical: 20 }}>
              <Image
                source={require("../assets/resources/icon/phone.png")}
                style={Externalstyle.profile_logo}
              />
              {UserLogin.datauser.phonenumber != null ?
                <Text style={Externalstyle.profile_title}>
                  {UserLogin.datauser.phonenumber}
                </Text>:
                <Text style={Externalstyle.profile_title}>
                Unavailable
              </Text>
              }
            </View>
          </View>
          <View style={Externalstyle.layout_button}>
            <TouchableHighlight
            activeOpacity={0.2}
              underlayColor={Color.background}
              onPress={() => {
                this.props.navigation.navigate("EditProfile");
              }}
            >
              <View style={Externalstyle.profile_button_edit}>
                <Text style={[Externalstyle.title, { color: "white" }]}>
                  EDIT
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={Externalstyle.profile_button}
              onPress={UserLogout}
            >
              <Text style={[Externalstyle.title, { color: "white" }]}>
                LOGOUT
              </Text>
            </TouchableHighlight>
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

const mapStatetoProps = (state) => {
  return {
    UserLogin: state.authReducer.UserLogin,
  };
};

export default connect(mapStatetoProps, mapDispathtoProps)(Profilescreen);
