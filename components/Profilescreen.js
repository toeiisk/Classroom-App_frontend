import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import {UserLogout} from "../store/actions/auth.actions"
import {connect} from "react-redux";
class Profilescreen extends React.Component {
  render() {
    const {UserLogout} = this.props
    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.title_header}>
          <Text style={styles.name_title}>WAYNE ROONEY</Text>
        </View> */}
        <View style={styles.layoutbutton}>
          <TouchableOpacity style={styles.button} onPress={UserLogout}>
            <Text style={[styles.title, {color: "white"}]}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispathtoProps = (dispatch) =>{
  return {
    UserLogout: () => dispatch(UserLogout())
  }
}

export default connect(null, mapDispathtoProps)(Profilescreen)

const { height } = Dimensions.get("screen");
const height_logo = height * 0.5 * 0.4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D232E",
    alignContent: "center",
    justifyContent: "center",
  },
  title_header: {
    padding: 20,
  },
  name_title: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#7B7C7C",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  title: {
    color: "black",
    opacity: 1,
    fontSize: 14,
    fontWeight: "bold",
  },
  titlesub: {
    color: "black",
    opacity: 1,
    fontSize: 14,
    fontWeight: "500",
  },
  boxattendance: {
    backgroundColor: "rgba(255,0,0,0.6)",
    borderRadius: 15,
    padding: 20,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FF002E",
    padding: 10,
    borderRadius: 25
  },
  layoutbutton: {
    paddingHorizontal: 30
  }
});
