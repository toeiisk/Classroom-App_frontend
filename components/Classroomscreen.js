import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  FlatList,
  ScrollView,
  Modal,
  TouchableHighlight,
  Alert
} from "react-native";
import { Text } from "react-native-elements";
import { FloatingAction } from "react-native-floating-action";
import Color from "../assets/resources/constants/color";
import Externalstyle from "../style/externalStyle";
import { connect } from "react-redux";
import { compose } from "redux";
import {getClassroom} from '../store/actions/classroom.action'
import {createClassroom} from '../store/actions/classroom.action'
import {joinClassroom} from '../store/actions/classroom.action'
import CreateClassroom from './Createclassscreen';
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { Input } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'




class classroomnoenroll extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      nameselect: "",
      description: '',
      name: '',
      code: '',
      isDatePickerVisible: false,
      data: '',

    };
  }
  setModalVisible = (visible, name) => {
    this.setState({
      modalVisible: visible,
      nameselect: name,
    });
  };
  
  creatClassroom = async (data) =>{
    try{
      this.props.dispatch(createClassroom(data))
    }catch{
      const newError = new ErrorUtils(error, "Creatclass Error");
      newError.showAlert();
    }
  }

  joinClassroom = async (code) =>{
    try{
      this.props.dispatch(joinClassroom(code))
    }catch{
      const newError = new ErrorUtils(error, "Joinclass Error");
      newError.showAlert();
    }
  }

  showDatePicker = (date) =>{
    this.setState({
      isDatePickerVisible: date
    })
  }

  hideDatePicker = () =>{
    this.setState({
      isDatePickerVisible: false
    })
  }

  handleConfirm = (datetime) => {
    const selectdate = moment(datetime, "h:mm:ss A").format("dddd HH:mm")
   
    this.setState({
      data: selectdate
    })
    this.hideDatePicker();
  };

  SubmitdataClassroom =  () => {
    const data = {
      'name': this.state.name,
      'description': this.state.description,
      'datetime' : this.state.data,
      // 'author' : this.state.author
    }
    console.log('senddata', data)
    this.creatClassroom(data)
    this.setState({
      name : '',
      description : ''
    })
    
  }

  SubmitJoinClassroom = () => {
    const codeclassroom = {
      'code' : this.state.code
    }
    this.joinClassroom(codeclassroom)
    this.setState({
      code: ''
    })
  }

  async componentDidMount(){
    this.props.dispatch(getClassroom())
  }

  render() {
    const {Classroom} = this.props
    const { modalVisible, nameselect } = this.state;
    const actions = [
      {
        text: "Create Classroom",
        icon: require("../assets/logo.png"),
        name: "CreateClass",
        position: 2,
      },
      {
        text: "Join Classroom",
        icon: require("../assets/logo.png"),
        name: "JoinClass",
        position: 1,
      },
    ];
    return (
      <SafeAreaView style={Externalstyle.container}>
        <View style={Externalstyle.title_header}>
          <Text style={Externalstyle.text_title}>Classroom</Text>
          <View style={Externalstyle.line_title} />
        </View>
        <ScrollView>
          <FlatList
            data={Classroom}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {this.props.navigation.navigate("Lessons")}}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://image.freepik.com/free-vector/health-insurance-vector-illustration_159144-57.jpg",
                  }}
                  imageStyle={{ borderRadius: 15 }}
                  opacity={0.2}
                  style={Externalstyle.classroom_card}
                >
                  <Text style={Externalstyle.classroom_title}>{item.name}</Text>
                  <Text style={Externalstyle.classroom_date}>{item.day} {item.time}</Text>
                  <Text style={Externalstyle.classroom_author}>
                    {item.nameOwner}
                  </Text>
                  {item.userIsOwner ? <Text style={Externalstyle.classroom_author}> Code: {item.code}</Text> : null}
                </ImageBackground>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </ScrollView>
        {nameselect == "CreateClass" ? (
         
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
                    <SafeAreaView style={Externalstyle.register_container}>
                      <ScrollView>
                        <KeyboardAvoidingScrollView>
                          <View style={{ marginTop: 20, alignItems: "center" }}>
                            <Text style={Externalstyle.text_title_primary}>CREATE CLASS</Text>
                          </View>
                          <View style={Externalstyle.register_content}>
                            <Text
                              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
                            >
                              Name class
                            </Text>
                            <Input
                              style={Externalstyle.creatpost_input}
                              numberOfLines={1}
                              placeholder={"Text here..."}
                              placeholderTextColor="black"
                              onChangeText={(e) => {
                                this.setState({ name: e });
                              }}
                            />
                            <Text
                              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
                            >
                              Description
                            </Text>
                            <Input
                              style={Externalstyle.creatpost_input}
                              numberOfLines={1}
                              placeholder={"Text here..."}
                              placeholderTextColor="black"
                              onChangeText={(e) => {
                                this.setState({ description: e });
                              }}
                            />
                            <Text
                              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
                            >
                              Date - Time
                            </Text>
                            <TouchableOpacity
                              onPress={() => this.showDatePicker(true)}
                              style={Externalstyle.create_image}
                            >
                              <Text style={[Externalstyle.title, { color: "white" }]}>
                                Select Date-Time
                              </Text>
                            </TouchableOpacity>
                              <DateTimePickerModal
                                isVisible={this.state.isDatePickerVisible}
                                is24Hour={true}
                                format={'HH:mm'}
                                mode="datetime"
                                pickerContainerStyleIOS={{backgroundColor: "white"}}
                                textColor="black"
                                onConfirm={this.handleConfirm}
                                onCancel={this.hideDatePicker}
                              />
                          </View>
                        </KeyboardAvoidingScrollView>
                      </ScrollView>
              <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
                <TouchableOpacity style={Externalstyle.create_submit}  
                onPress={() => {
                  if(this.state.name == "" || this.state.description == "" || this.state.author == "" || this.state.data == ""){
                    Alert.alert(
                      "กรอกข้อมูลไม่ครบ",
                      "ยืนยัน",
                      [
                        {
                          text: "ตกลง",
                          onPress: () => {this.setModalVisible(!modalVisible)}, 
                          style: "ok",
                        },
                      ],
                      { cancelable: false }
                    );
                  }else{
                    
                    this.SubmitdataClassroom()
                    this.setModalVisible(!modalVisible);
                  }
                }}>
                  <Text style={[Externalstyle.title, { color: "white" }]}>Submit</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </Modal>
        ) : nameselect == "JoinClass" ? (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={Externalstyle.classroom_centeredView}>
              <View style={Externalstyle.classroom_modalView}>
                <Text h4 style={Externalstyle.classroom_modalText}>
                  Join Classroom
                </Text>
                <View style={Externalstyle.inputContainer}>
                  <TextInput
                    style={Externalstyle.classroom_modal_input}
                    numberOfLines={1}
                    placeholder={"Password Classroom"}
                    placeholderTextColor="white"
                    onChangeText={(e) => {this.setState({code : e})}}
                  />
                </View>
                <TouchableHighlight
                  style={{
                    ...Externalstyle.profile_button_edit,
                  }}
                  onPress={() => {
                    this.SubmitJoinClassroom()
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={[Externalstyle.title, { color: "white" }]}>
                    Join
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{
                    ...Externalstyle.profile_button,
                  }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={[Externalstyle.title, { color: "white" }]}>
                    Cancle
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        ) : null}
        <FloatingAction
          actions={actions}
          color={Color.background_button_attendance}
          onPressItem={(name) => {
            this.setModalVisible(true, name);
          }}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  Classroom : state.classReducer.Classroom.classroomUser
})
 
const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default  compose(connect(mapStateToProps, mapDispatchToProps, null)(classroomnoenroll));


