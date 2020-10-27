import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { UserLogout } from "../store/actions/auth.actions";
import { connect } from "react-redux";
import Externalstyle from "../style/externalStyle";
class Profilescreen extends React.Component {
  render() {
    const {UserLogout} = this.props
    return (
      <SafeAreaView style={Externalstyle.profile_container}>
        {/* <View style={Externalstyle.title_header}>
          <Text style={Externalstyle.name_title}>WAYNE ROONEY</Text>
        </View> */}
        <View style={Externalstyle.layoutbutton}>
          <TouchableOpacity style={Externalstyle.button} onPress={UserLogout}>
            <Text style={[Externalstyle.title, { color: "white" }]}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
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
