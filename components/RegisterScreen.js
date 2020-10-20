import React, { Component } from 'react';
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
  Alert
} from "react-native";
import {connect} from "react-redux";
import {compose} from "redux";
import {createNewUser} from "../store/actions/auth.actions";
// import {Actions} from 'react-native-router-flux';


class RegisterScreen extends Component {


  constructor(props) {
    super(props);
    
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass:"",
      email: "",
      studentid: "",
      checkpass: false,
      roles: 'student'
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName1 = this.onChangeName1.bind(this);
    this.onChangeName2 = this.onChangeName2.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeConPassword = this.onChangeConPassword.bind(this);
    this.onChangestudentId = this.onChangestudentId.bind(this)

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
      studentid: inputText
    })
  }
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
  

  // createNewUser = async (values) =>{
  //   try{
  //     this.props.dispatch(createNewUser(values));
  //       Alert.alert(
  //         "สมัครข้อมูลสำเร็จ",
  //         "ยืนยัน",
  //         [
  //           {
  //             text: "ตกลง",
  //             onPress: () =>this.props.navigation.navigate('LoginScreen'),
  //             style: "ok"
  //           },
  //         ],
  //         { cancelable: false }
  //       );
      
  //   }catch{
  //     console.log('cant register')
  //     const newError = new ErrorUtils(error, "Signup Error");
  //         newError.showAlert();
  //   }
  // }

  onSubmit = () => {
      if(this.state.password === this.state.confirmpass){
        const senddata = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          sid: this.state.studentid,
          roles: this.state.roles
        }
         this.props.createNewUser(senddata)
        this.setState({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          password: "",
          studentid: "",
          checkpass: false,
          confirmpass: ""
          
        });     
      }else{
        this.setState({
          checkpass: true
        })
      }
      
  }  
  render() {
    const {AuthReducer}  = this.props 
    console.log(AuthReducer.isSuccess)
    if (AuthReducer.isSuccess && !AuthReducer.isError){
        Alert.alert(
          "สมัครข้อมูลสำเร็จ",
          "ยืนยัน",
          [
            {
              text: "ตกลง",
              onPress: () =>this.props.navigation.navigate('LoginScreen'),
              style: "ok",
            
            },
          ],
          { cancelable: false }
        );
    }
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={styles.text_title}>REGISTER</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text_label}>Firstname</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                numberOfLines={1}
                placeholder={"Firstname"}
                placeholderTextColor="#fff"
                onChangeText={this.onChangeName1}
                value={this.state.firstname}
              />
            </View>
            <Text style={styles.text_label}>Lastname</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                numberOfLines={1}
                placeholder={"Lastname"}
                placeholderTextColor="#fff"
                onChangeText={this.onChangeName2}
                value={this.state.lastname}
              />
            </View>
            <Text style={styles.text_label}>Username</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                numberOfLines={1}
                placeholder={"Username"}
                placeholderTextColor="#fff"
                onChangeText={this.onChangeUsername}
                value={this.state.username}

              />
            </View>
            <Text style={styles.text_label}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                numberOfLines={1}
                placeholder={"Password"}
                placeholderTextColor="#fff"
                secureTextEntry={true}
                onChangeText={this.onChangePassword}
                value={this.state.password}

              />
            </View>
            <Text style={styles.text_label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                numberOfLines={1}
                placeholder={"Confirm Password"}
                placeholderTextColor="#fff"
                secureTextEntry={true}
                onChangeText={this.onChangeConPassword}
                value={this.state.confirmpass}
              />
            </View>
            {this.state.checkpass ? <Text style={{color: 'red', textAlign:'center'}}>Password does match</Text> : null}
            <Text style={styles.text_label}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                numberOfLines={1}
                placeholder={"Email"}
                placeholderTextColor="#fff"
                onChangeText={this.onChangeEmail}
                value={this.state.email}

              />
            </View>
            <Text style={styles.text_label}>Student ID</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                numberOfLines={1}
                placeholder={"Student ID"}
                placeholderTextColor="#fff"
                onChangeText={this.onChangestudentId}
                value={this.state.studentid}

              />
            </View>
            <View style={styles.button}>
              <TouchableOpacity style={styles.signin} onPress = {() => {this.onSubmit()}}>
                <Text style={styles.text_button}>Register</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ alignItems: "center", marginTop: 15, marginBottom: 20 }}
            >
              <Text style={[styles.text_forgot, { color: "#323232" }]}>
                {/* <TouchableOpacity onPress={this.goBack}>Already have an account?</TouchableOpacity> */}
                <TouchableOpacity onPress={() =>this.props.navigation.navigate('LoginScreen')}>
                  <Text style={[styles.text_forgot, { color: "#247CFF" }]}>
                    Login
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.5 * 0.4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0DDCF",
  },
  content: {
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  text_title: {
    color: "#000",
    fontWeight: "400",
    fontSize: 30,
    marginBottom: 10,
  },
  text_label: {
    color: "#000",
    fontWeight: "500",
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 3,
    flexDirection: "row",
    backgroundColor: "#0000009c",
  },
  input: {
    flex: 1,
    padding: 8,
    color: "#fff",
    fontWeight: "300",
  },
  button: {
    alignItems: "center",
    marginTop: 15,
  },
  signin: {
    width: "100%",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    backgroundColor: "#474448",
  },
  text_button: {
    fontSize: 16,
    fontWeight: "400",
    color: "#FFF",
  },
  text_forgot: {
    fontWeight: "400",
    fontSize: 14,
  },
});

const mapStateToProps = (state) => ({
  AuthReducer: state.authReducer.AuthReducer
})

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser:  (newUser) => dispatch( createNewUser(newUser))
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps, null)(RegisterScreen));