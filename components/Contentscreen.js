import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Overlay, Header } from "react-native-elements";
import { FloatingAction } from "react-native-floating-action";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";
import Createpostscreen from "./Createpostscreen";
import { setVisible } from "../store/actions/modal.actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { getContent } from "../store/actions/content.action";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronCircleLeft,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Axios from "axios";
class ContentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      nameselect: "",
      name: "",
      isLoding: null,
    };
  }

  setModalVisible = (visible, name) => {
    this.setState({
      nameselect: name,
    });
    this.props.dispatch(setVisible(visible));
  };

  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  titleContent = () => {
    const { Post } = this.props;
    if (Post.isLoading) {
      return <ActivityIndicator />;
    } else {
      // return(
      //   <Text>{Post.contentData.Post.title}</Text>
      // )
    }
  };

  desContent = () => {
    const { Post } = this.props;
    if (Post.isLoading || Post.isLoading == null) {
      console.log("1");
    } else {
      console.log(Post.contentData.Post.title);
    }
  };

  async componentDidMount() {
    const lessonId = this.props.route.params.LessonId;
    const classroomId = this.props.route.params.classroomId;
    const dataContent = {
      lessonId: lessonId,
      classroomId: classroomId,
    };
    this.props.dispatch(getContent(dataContent));
  }
  showMenu = () => {
    this._menu.show();
  };

  getImage = () => {
    const { Post } = this.props;
    console.log("image", Post.contentData.Post.image);
    const dataiamge = {
      path_img: Post.contentData.Post.image,
    };
    console.log(dataiamge);
    Axios.get("http://103.13.231.22:3000/api/get/img", dataiamge)
      .then((res) => console.log(res))
      .catch((er) => console.log(er.response));
  };

  render() {
    const userOwner = this.props.route.params.Owner;
    const lessonId = this.props.route.params.LessonId;
    const classroomId = this.props.route.params.classroomId;

    const { modalVisible, nameselect } = this.state;
    const actions = [
      {
        text: "Create Post",
        icon: require("../assets/logo.png"),
        name: "CreatePost",
        position: 2,
      },
    ];
    const { Visible } = this.props;
    const { Post } = this.props;

    if (Post.isLoading || Post.isLoading == null) {
      return (
        <SafeAreaView style={Externalstyle.container}>
          <View
            style={{
              justifyContent: "flex-start",
              marginTop: 20,
              marginHorizontal: 20,
            }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                size={35}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={Externalstyle.text_title_sub}>Content not create</Text>
          </View>
          {nameselect == "CreatePost" ? (
            <Modal
              animationType="slide"
              transparent={true}
              visible={Visible.visible}
            >
              <Createpostscreen
                navigation={this.props.navigation}
                lessonId={lessonId}
                classroomId={classroomId}
              />
            </Modal>
          ) : null}
          {userOwner ? (
            <FloatingAction
              actions={actions}
              color={Color.background_button_attendance}
              onPressItem={(name) => {
                this.setModalVisible(true, name);
              }}
            />
          ) : null}
        </SafeAreaView>
      );
    } else {
      {
        this.getImage();
      }
      return (
        <SafeAreaView style={Externalstyle.container}>
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <FontAwesomeIcon
                  icon={faChevronCircleLeft}
                  size={35}
                  color="white"
                />
              </TouchableOpacity>
              <Menu
                ref={this.setMenuRef}
                button={
                  <TouchableOpacity>
                    <FontAwesomeIcon
                      icon={faEllipsisV}
                      size={35}
                      color="white"
                      onPress={this.showMenu}
                    />
                  </TouchableOpacity>
                }
              >
                <MenuItem
                  onPress={() => {
                    this.props.navigation.navigate("Editcontent");
                  }}
                >
                  <Text style={[Externalstyle.chat_title, { color: "black" }]}>
                    EDIT
                  </Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.hideMenu}>
                  <Text style={[Externalstyle.chat_title, { color: "black" }]}>
                    DELETE
                  </Text>
                </MenuItem>
              </Menu>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <Image
                  resizeMode="cover"
                  style={[Externalstyle.imgres, { overflow: "visible" }]}
                  // source={this.getImage()}
                  source={{
                    uri:
                      "https://miro.medium.com/max/693/1*2vt-C5QMnVdh8euVgpRhNw.jpeg",
                  }}
                />
              </View>
              <View style={Externalstyle.title_header}>
                <Text style={Externalstyle.text_title}>
                  {Post.contentData.Post.title}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 20,
                }}
              >
                <Image
                  source={require("../assets/logo-classroom.png")}
                  style={{ height: 80, width: 80, borderRadius: 80 / 2 }}
                />
                <View style={Externalstyle.text_attendance}>
                  <Text style={Externalstyle.chat_title}>
                    Sukrit leelakornkij
                  </Text>
                  <Text style={Externalstyle.chat_titlesub}>Author, Sep 5</Text>
                </View>
              </View>
              <View style={{ padding: 20 }}>
                <Text style={[Externalstyle.chat_title, { lineHeight: 30 }]}>
                  {Post.contentData.Post.description}
                </Text>
              </View>
            </View>
            {/* <View style={{ alignItems: "center", marginVertical: 10 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.popToTop()}
                style={Externalstyle.profile_button_edit}
              >
                <Text style={[Externalstyle.title, { color: "white" }]}>
                  BACK
                </Text>
              </TouchableOpacity>
            </View> */}
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 2,
                margin: 20,
              }}
            />

            {/* comments */}
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../assets/logo-classroom.png")}
                  style={{ height: 50, width: 50, borderRadius: 80 / 2 }}
                />
                <View style={{ paddingHorizontal: 20 }}>
                  <KeyboardAvoidingScrollView>
                    <View style={Externalstyle.subContainer}>
                      <TextInput
                        multiline
                        placeholder={"Type a comment..."}
                        value={this.state.message}
                        onChangeText={this.setMessage}
                        style={Externalstyle.content_textinput}
                      />
                      <MaterialCommunityIcons
                        name="send-circle"
                        size={35}
                        color="grey"
                      />
                    </View>
                  </KeyboardAvoidingScrollView>
                </View>
              </View>
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../assets/logo-classroom.png")}
                  style={{ height: 50, width: 50, borderRadius: 80 / 2 }}
                />
                <View style={Externalstyle.text_contents}>
                  <Text style={Externalstyle.comments_title}>
                    Sukrit leelakornkij{"  "}
                    <Text style={Externalstyle.comments_titlesub}>
                      5/11/2563 15:14
                    </Text>
                  </Text>
                  <View style={{ paddingRight: 20 }}>
                    <Text style={Externalstyle.comments_titlesub}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.s
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          {nameselect == "CreatePost" ? (
            <Modal
              animationType="slide"
              transparent={true}
              visible={Visible.visible}
            >
              <Createpostscreen
                navigation={this.props.navigation}
                lessonId={lessonId}
                classroomId={classroomId}
              />
            </Modal>
          ) : null}
          {userOwner ? (
            <FloatingAction
              actions={actions}
              color={Color.background_button_attendance}
              onPressItem={(name) => {
                this.setModalVisible(true, name);
              }}
            />
          ) : null}
        </SafeAreaView>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  Visible: state.modalReducer.Modal,
  Post: state.contentReducer.Content,
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null)(ContentScreen)
);
