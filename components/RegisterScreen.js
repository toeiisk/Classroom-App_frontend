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
import { createNewUser } from "../store/actions/auth.actions";
import {reRegister} from '../store/actions/auth.actions'
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";
// import {Actions} from 'react-native-router-flux';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
      email: "",
      studentid: "",
      checkpass: false,
      roles: "student",
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName1 = this.onChangeName1.bind(this);
    this.onChangeName2 = this.onChangeName2.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeConPassword = this.onChangeConPassword.bind(this);
    this.onChangestudentId = this.onChangestudentId.bind(this);
  }

  goBack() {
    Actions.pop();
  }

  onChangeName1 = (inputText) => {
    this.setState({
      firstname: inputText,
    });
  };
  onChangeName2 = (inputText) => {
    this.setState({
      lastname: inputText,
    });
  };
  onChangestudentId = (inputText) => {
    this.setState({
      studentid: inputText,
    });
  };
  onChangeUsername = (inputText) => {
    this.setState({
      username: inputText,
    });
  };
  onChangeEmail = (inputText) => {
    this.setState({
      email: inputText,
    });
  };
  onChangePassword = (inputText) => {
    this.setState({
      password: inputText,
    });
  };
  onChangeConPassword = (inputText) => {
    this.setState({
      confirmpass: inputText,
    });
  };

  componentDidMount(){
    this.props.dispatch(reRegister())
  }

  onSubmit = () => {
    if (this.state.password === this.state.confirmpass) {
      const senddata = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        sid: this.state.studentid,
        roles: this.state.roles,
      };
      this.props.createNewUser(senddata);
      this.setState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        studentid: "",
        checkpass: false,
        confirmpass: "",
      });
    } else {
      this.setState({
        checkpass: true,
      });
    }
  };
  render() {
    const { AuthReducer } = this.props;
    console.log(AuthReducer.isSuccess);
    if (AuthReducer.isSuccess && !AuthReducer.isError) {
      Alert.alert(
        "สมัครข้อมูลสำเร็จ",
        "ยืนยัน",
        [
          {
            text: "ตกลง",
            onPress: () => {
              this.props.dispatch(reRegister())
              this.props.navigation.navigate("SignInScreen")
              
            },
            style: "ok",
          },
        ],
        { cancelable: false }
      );
    }
    return (
      <SafeAreaView style={Externalstyle.register_container}>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <KeyboardAvoidingScrollView>
            <View style={{ marginTop: 20, alignItems: "center" }}>
              <Text style={Externalstyle.text_title_primary}>REGISTER</Text>
            </View>
            <View style={Externalstyle.register_content}>
              <Text style={Externalstyle.register_text_label}>Firstname</Text>
              <View style={Externalstyle.inputContainer}>
                <TextInput
                  style={Externalstyle.register_input}
                  numberOfLines={1}
                  placeholder={"Firstname"}
                  placeholderTextColor="#fff"
                  onChangeText={this.onChangeName1}
                  value={this.state.firstname}
                />
              </View>
              <Text style={Externalstyle.register_text_label}>Lastname</Text>
              <View style={Externalstyle.inputContainer}>
                <TextInput
                  style={Externalstyle.register_input}
                  numberOfLines={1}
                  placeholder={"Lastname"}
                  placeholderTextColor="#fff"
                  onChangeText={this.onChangeName2}
                  value={this.state.lastname}
                />
              </View>
              <Text style={Externalstyle.register_text_label}>Username</Text>
              <View style={Externalstyle.inputContainer}>
                <TextInput
                  style={Externalstyle.register_input}
                  numberOfLines={1}
                  placeholder={"Username"}
                  placeholderTextColor="#fff"
                  onChangeText={this.onChangeUsername}
                  value={this.state.username}
                />
              </View>
              <Text style={Externalstyle.register_text_label}>Password</Text>
              <View style={Externalstyle.inputContainer}>
                <TextInput
                  style={Externalstyle.register_input}
                  numberOfLines={1}
                  placeholder={"Password"}
                  placeholderTextColor="#fff"
                  secureTextEntry={true}
                  onChangeText={this.onChangePassword}
                  value={this.state.password}
                />
              </View>
              <Text style={Externalstyle.register_text_label}>
                Confirm Password
              </Text>
              <View style={Externalstyle.inputContainer}>
                <TextInput
                  style={Externalstyle.register_input}
                  numberOfLines={1}
                  placeholder={"Confirm Password"}
                  placeholderTextColor="#fff"
                  secureTextEntry={true}
                  onChangeText={this.onChangeConPassword}
                  value={this.state.confirmpass}
                />
              </View>
              {this.state.checkpass ? (
                <Text style={{ color: "red", textAlign: "center" }}>
                  Password does match
                </Text>
              ) : null}
              <Text style={Externalstyle.register_text_label}>Email</Text>
              <View style={Externalstyle.inputContainer}>
                <TextInput
                  style={Externalstyle.register_input}
                  numberOfLines={1}
                  placeholder={"Email"}
                  placeholderTextColor="#fff"
                  onChangeText={this.onChangeEmail}
                  value={this.state.email}
                />
              </View>
              <Text style={Externalstyle.register_text_label}>Student ID</Text>
              <View style={Externalstyle.inputContainer}>
                <TextInput
                  style={Externalstyle.register_input}
                  numberOfLines={1}
                  placeholder={"Student ID"}
                  placeholderTextColor="#fff"
                  onChangeText={this.onChangestudentId}
                  value={this.state.studentid}
                />
              </View>
              <View style={Externalstyle.register_button}>
                <TouchableOpacity
                  style={Externalstyle.register_signin}
                  onPress={() => {
                    this.onSubmit();
                  }}
                >
                  <Text style={Externalstyle.text_button}>Register</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 15,
                  marginBottom: 20,
                }}
              >
                <Text
                  style={[
                    Externalstyle.register_text_forgot,
                    { color: Color.text_forgot },
                  ]}
                >
                  Already have an account?{"  "}
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("SignInScreen")
                    }
                  >
                    <Text
                      style={[
                        Externalstyle.register_text_forgot,
                        { color: Color.text_forgot_login, },
                      ]}
                    >
                      Login
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </KeyboardAvoidingScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  AuthReducer: state.authReducer.AuthReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (newUser) => dispatch(createNewUser(newUser)),
    dispatch
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null)(RegisterScreen)
);
