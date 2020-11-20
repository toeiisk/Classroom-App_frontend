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
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBackspace,
  faBackward,
  faChevronCircleLeft,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
class ContentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      nameselect: "",
      name: "",
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

  showMenu = () => {
    this._menu.show();
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
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              size={35}
              color="white"
            />
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
              <MenuItem onPress={this.hideMenu}>
                <Text style={[Externalstyle.chat_title, {color: "black"}]}>EDIT</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem onPress={this.hideMenu}>
                <Text style={[Externalstyle.chat_title, {color: "black"}]}>DELETE</Text>
              </MenuItem>
            </Menu>
          </View>
          {/* <TouchableOpacity
            ref={this.setMenuRef}
            onPress={this.showMenu}
            style={{ alignItems: "flex-end", padding: 20 }}
          >
            <FontAwesomeIcon icon={faEllipsisV} size={32} color="white" />
          </TouchableOpacity> */}
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
              source={{
                uri:
                  "https://site-content.saleshood.com/wp-content/uploads/2014/05/05185218/learning-culture.gif",
              }}
            />
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={Externalstyle.title_header}>
              <Text style={Externalstyle.text_title}>
                Id Class {this.props.route.params.LessonId}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.popToTop()}
              style={Externalstyle.profile_button_edit}
            >
              <Text style={[Externalstyle.title, { color: "white" }]}>
                BACK
              </Text>
            </TouchableOpacity>
          </View>

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
                  <TextInput
                    style={Externalstyle.TextInputStyleClass}
                    underlineColorAndroid="transparent"
                    placeholder={"Add a comment..."}
                    placeholderTextColor={"#5F5F5F"}
                    numberOfLines={10}
                    multiline={true}
                  />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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

const mapStateToProps = (state) => ({
  Visible: state.modalReducer.Modal,
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null)(ContentScreen)
);
