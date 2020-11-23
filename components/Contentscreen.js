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
import { FloatingAction } from "react-native-floating-action";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";
import Createpostscreen from "./Createpostscreen";
import { setVisible } from "../store/actions/modal.actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { getContent } from "../store/actions/content.action";
import { Postcomment, getComment } from "../store/actions/coment.action";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronCircleLeft,
  faEllipsisV,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Axios from "axios";
import Loadingscreen from "./LoadingTestscreen";
import moment from "moment";
class ContentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      nameselect: "",
      name: "",
      message: "",
      arrayComment: [],
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

 

  desContent = () => {
    const { Post } = this.props;
    if (Post.isLoading || Post.isLoading == null) {
      console.log("1");
    } else {
      console.log(Post.contentData.Post.title);
    }
  };

  getComment = async (data) => {
    this.props.dispatch(getComment(data));
  };

  async componentDidMount() {
    const lessonId = this.props.route.params.LessonId;
    const classroomId = this.props.route.params.classroomId;
    const dataContent = {
      lessonId: lessonId,
      classroomId: classroomId,
    };
    await this.props.dispatch(getContent(dataContent));
    const { Post } = this.props;
    const idPost = Post.contentData.Post.id;
    const dataComment = {
      lessonId: lessonId,
      classroomId: classroomId,
      postId: idPost,
    };
    await this.props.dispatch(getComment(dataComment));
  }
  showMenu = () => {
    this._menu.show();
  };

  submitComment = () => {
    const lessonId = this.props.route.params.LessonId;
    const classroomId = this.props.route.params.classroomId;
    const { Post } = this.props;
    const idPost = Post.contentData.Post.id;
    const dataComment = {
      lessonId: lessonId,
      classroomId: classroomId,
      postId: idPost,
      description: this.state.message,
    };
    this.props.dispatch(Postcomment(dataComment));

    this.setState({
      message: "",
    });
  };

  listComment = (data) => {
    return data.Comments.map((data) => {
      let date = moment(data.createdAt).format("L, HH:mm");
      return (
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {/* <Image
              source={require("../assets/logo-classroom.png")}
              style={{ height: 50, width: 50, borderRadius: 80 / 2 }}
            /> */}
            <View style={Externalstyle.avatar_comment}>
              <FontAwesomeIcon icon={faUser} size={25} color="white" />
            </View>
            <View style={Externalstyle.text_contents}>
              <Text style={Externalstyle.comments_title}>
                Sukrit leelakornkij{"  "}
                <Text style={Externalstyle.comments_titlesub}>{date}</Text>
              </Text>
              <View style={{ paddingRight: 20 }}>
                <Text style={Externalstyle.comments_titlesub}>
                  {data.description}
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    });
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
    const { Comment } = this.props;
    console.log(Comment.isLoading)
    if (Post.isLoading) {
      return (
        <SafeAreaView style={Externalstyle.container}>
          <View
            style={{
              justifyContent: "flex-start",
              marginTop: 20,
              marginHorizontal: 20,
            }}
          ></View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="skyblue"/>
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
      if (Post.err) {
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
              <Text style={Externalstyle.text_title_sub}>
                Content not create
              </Text>
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
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
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
                    <Text
                      style={[Externalstyle.chat_title, { color: "black" }]}
                    >
                      EDIT
                    </Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onPress={this.hideMenu}>
                    <Text
                      style={[Externalstyle.chat_title, { color: "black" }]}
                    >
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
                    marginVertical: 30,
                  }}
                >
                  {Comment.isLoading ? (
                    <ActivityIndicator size="large" color="skyblue"/>
                  ) : (
                    <Image
                      resizeMode="contain"
                      style={Externalstyle.imgres}
                      source={{
                        uri: `http://103.13.231.22:3000${Post.contentData.Post.image}`,
                      }}
                    />
                  )}
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
                   source={{
                    uri: `http://103.13.231.22:3000${Post.contentData.Post.userOwnerPost.userOwner.img}`,
                  }}
                    style={{ height: 80, width: 80, borderRadius: 80 / 2 }}
                  />
                  <View style={Externalstyle.text_attendance}>
                    <Text style={Externalstyle.chat_title}>
                      {Post.contentData.Post.userOwnerPost.nameOwner}
                    </Text>
                    <Text style={Externalstyle.chat_titlesub}>
                      Author, {moment(Post.contentData.Post.updatedAt).format("L, HH:mm")}
                    </Text>
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
                  {/* <Image
                    source={require("../assets/logo-classroom.png")}
                    style={{ height: 50, width: 50, borderRadius: 80 / 2 }}
                  /> */}
                  <View style={Externalstyle.avatar_comment}>
                    <FontAwesomeIcon icon={faUser} size={25} color="white" />
                  </View>
                  <View style={{ paddingHorizontal: 20 }}>
                    <KeyboardAvoidingScrollView>
                      <View style={Externalstyle.subContainer}>
                        <TextInput
                          multiline
                          placeholder={"Type a comment..."}
                          value={this.state.message}
                          onChangeText={(e) =>
                            this.setState({
                              message: e,
                            })
                          }
                          style={Externalstyle.content_textinput}
                        />
                        <TouchableOpacity onPress={this.submitComment}>
                          <MaterialCommunityIcons
                            name="send-circle"
                            size={35}
                            color="grey"
                          />
                        </TouchableOpacity>
                      </View>
                    </KeyboardAvoidingScrollView>
                  </View>
                </View>
              </View>
              {Comment.isLoading ? (
                <ActivityIndicator size="large" color="skyblue"/>
              ) : (
                this.listComment(Comment.commentData)
              )}
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
}

const mapStateToProps = (state) => ({
  Visible: state.modalReducer.Modal,
  Post: state.contentReducer.Content,
  Comment: state.commentReducer.Comment,
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null)(ContentScreen)
);
