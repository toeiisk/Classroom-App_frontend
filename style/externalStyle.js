import { StyleSheet, Dimensions } from "react-native";
import Color from "../assets/resources/constants/color";
const { height } = Dimensions.get("screen");
const height_logo = height * 0.5 * 0.4;
const height_logo_profile = height * 0.35 * 0.2;

const externalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
  title_header: {
    padding: 20,
  },
  text_title: {
    color: "white",
    fontSize: 30,
    fontFamily: "MitrBold",
    letterSpacing: 3,
  },
  text_title_sub: {
    color: "white",
    fontSize: 20,
    fontFamily: "MitrMedium",
    letterSpacing: 3,
  },
  title: {
    color: "black",
    opacity: 1,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "MitrMedium",
  },
  titlesub: {
    color: "black",
    opacity: 1,
    fontSize: 14,
    fontFamily: "MitrRegular",
  },
  line_title: {
    borderBottomColor: "white",
    borderBottomWidth: 5,
    marginTop: 10,
  },
  text_title_primary: {
    color: "black",
    fontSize: 35,
    marginBottom: 10,
    fontFamily: "MitrMedium",
    letterSpacing: 3,
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 3,
    flexDirection: "row",
    backgroundColor: Color.background_layout_input,
  },
  text_button: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    fontFamily: "MitrMedium",
  },
  imgres: {
    width: height * 0.5,
    height: height * 0.3,
  },
  avatar_comment: {
    height: 50,
    width: 50,
    borderRadius: 80 / 2,
    backgroundColor: "#777",
    justifyContent: "center",
    alignItems: "center",
  },
  //Attendance
  card: {
    backgroundColor: Color.background_card,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  boxattendance: {
    backgroundColor: Color.background_box_attendance,
    borderRadius: 15,
    padding: 20,
    justifyContent: "center",
  },
  text_attendance: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: Color.background_button_attendance,
    width: "80%",
    padding: 10,
    borderRadius: 25,
  },
  atten_layout_button: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  layoutbutton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  attend_header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  attend_text_title: {
    color: "white",
    fontWeight: "400",
    fontSize: 25,
    fontFamily: "MitrMedium",
  },
  attend_title_header: {
    marginHorizontal: 20,
  },

  //Classroom
  classroom_title: {
    color: "black",
    opacity: 1,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "MitrMedium",
  },
  classroom_card: {
    backgroundColor: Color.background_card,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  classroom_date: {
    color: "black",
    opacity: 1,
    fontSize: 14,
    marginBottom: 30,
    fontFamily: "MitrLight",
  },
  classroom_author: {
    color: "black",
    opacity: 1,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "MitrRegular",
  },
  classroom_centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  classroom_modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: Color.background_footer,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  classroom_openButton: {
    backgroundColor: "black",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  classroom_textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  classroom_modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "MitrBold",
  },
  classroom_modal_input: {
    flex: 1,
    padding: 15,
    color: "white",
    fontWeight: "500",
    fontFamily: "MitrMedium",
  },
  classroom_modal_input2: {
    borderColor: "gray",
    borderWidth: 0.5,
    width: "100%",
    textAlign: "center",
    height: 50,
    marginTop: 10,
    fontFamily: "MitrMedium",
  },

  //Login
  login_header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  login_footer: {
    flex: 3,
    backgroundColor: Color.background_footer,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  login_logo: {
    width: height_logo,
    height: height_logo,
  },
  login_text_label: {
    color: "black",
    fontWeight: "500",
    marginTop: 10,
    fontFamily: "MitrMedium",
  },
  login_input: {
    flex: 1,
    padding: 8,
    color: "white",
    fontWeight: "500",
    fontFamily: "MitrLight",
  },
  login_button: {
    alignItems: "center",
    marginTop: 15,
    fontFamily: "MitrMedium",
  },
  login_signin: {
    width: height * 0.45,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    backgroundColor: Color.background_button_signin,
  },
  login_button_forgot: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  login_text_forgot: {
    fontFamily: "MitrMedium",
    fontWeight: "400",
    fontSize: 14,
  },

  //Profile
  profile_container: {
    flex: 1,
    backgroundColor: Color.background,
    alignContent: "center",
  },
  layout_header: {
    marginVertical: 30,
    marginHorizontal: 20,
    textAlign: "center",
    alignItems: "center",
  },
  layout_detail: {
    margin: 10,
    paddingHorizontal: "20%",
    textAlign: "center",
  },
  layout_button: {
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 10,
  },
  profile_button: {
    width: height * 0.4,
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: Color.background_button_logout,
    justifyContent: "center",
    alignItems: "center",
  },
  modal_profile_button: {
    width: height * 0.25,
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: Color.background_button_logout,
    justifyContent: "center",
    alignItems: "center",
  },
  modal_profile_button_edit: {
    width: height * 0.25,
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: Color.background_button_signin,
    justifyContent: "center",
    alignItems: "center",
  },
  profile_button_edit: {
    width: height * 0.4,
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: Color.background_button_signin,
    justifyContent: "center",
    alignItems: "center",
  },
  profile_button_edit_bg: {
    borderRadius: 25,
    backgroundColor: Color.background_button_signin,
    justifyContent: "center",
    alignItems: "center",
  },
  profile_image: {
    width: height_logo,
    height: height_logo,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 5,
  },
  profile_logo: {
    width: height_logo_profile,
    height: height_logo_profile,
  },

  profile_title: {
    color: Color.text_profile,
    padding: 15,
    opacity: 1,
    fontSize: 16,
    fontWeight: "300",
    fontFamily: "MitrRegular",
  },

  //Register
  register_container: {
    flex: 1,
    backgroundColor: Color.background_footer,
  },
  register_content: {
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  register_text_label: {
    color: "black",
    fontWeight: "500",
    marginTop: 5,
    fontFamily: "MitrMedium",
  },
  register_input: {
    flex: 1,
    padding: 8,
    color: "white",
    fontWeight: "300",
    fontFamily: "MitrLight",
  },
  register_button: {
    alignItems: "center",
    marginTop: 15,
  },
  register_signin: {
    width: height * 0.4,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    backgroundColor: Color.background_button_signin,
  },
  register_text_forgot: {
    fontFamily: "MitrMedium",
    fontWeight: "400",
    fontSize: 14,
  },

  //Chat
  chat_inputContainer: {
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 3,
    flexDirection: "row",
    backgroundColor: "white",
  },
  chat_login_input: {
    flex: 1,
    padding: 15,
    fontWeight: "500",
    fontFamily: "MitrRegular",
  },
  chat_title: {
    color: Color.text_profile,
    opacity: 1,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "MitrRegular",
  },
  chat_titlesub: {
    color: Color.text_profile,
    opacity: 1,
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "MitrLight",
  },

  //lessons
  lesson_card: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
  },
  lesson_modalView: {
    width: "80%",
    padding: 35,
    backgroundColor: Color.background_footer,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },

  //contents
  TextInputStyleClass: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    height: 60,
    width: height * 0.35,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "MitrLight",
  },
  text_contents: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  comments_title: {
    color: Color.text_profile,
    opacity: 1,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "MitrMedium",
  },
  comments_titlesub: {
    color: Color.text_profile,
    opacity: 1,
    fontSize: 14,
    fontWeight: "300",
    marginTop: 5,
    lineHeight: 20,
    fontFamily: "MitrLight",
  },

  //create post
  creatpost_text_label: {
    color: "white",
    fontWeight: "500",
    margin: 8,
    fontSize: 18,
    fontFamily: "MitrMedium",
  },
  creatpost_input: {
    flex: 1,
    color: "black",
    fontFamily: "MitrLight",
  },
  creatpost_textarea: {
    margin: 8,
    padding: 5,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    backgroundColor: "white",
    height: 80,
    width: height,
    fontSize: 18,
    fontFamily: "MitrLight",
  },
  editpost_textarea: {
    margin: 8,
    padding: 5,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    backgroundColor: "white",
    height: 100,
    width: height,
    fontSize: 18,
    fontFamily: "MitrLight",
  },
  createpost_button: {
    width: "80%",
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: Color.background_button_logout,
    justifyContent: "center",
    alignItems: "center",
  },
  create_image: {
    width: height * 0.3,
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: Color.background_button_signin,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  create_submit: {
    width: height * 0.4,
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: Color.background,
    justifyContent: "center",
    alignItems: "center",
  },
  cansel_submit: {
    width: height * 0.4,
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  //reset pass
  resetpass_container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Color.background_footer,
  },
  resetpass_text_label: {
    paddingVertical: 20,
    lineHeight: 30,
    color: "white",
    margin: 8,
    fontSize: 20,
    fontFamily: "MitrLight",
  },

  //chatroom
  messages_container: {
    marginTop: 10,
    padding: 10,
  },
  messagesbox: {
    borderRadius: 5,
    padding: 10,
  },
  messages_name: {
    color: Color.accent,
    opacity: 1,
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: "MitrMedium",
    marginBottom: 5,
  },
  messages_time: {
    alignSelf: "flex-end",
    color: Color.primary,
    opacity: 1,
    fontSize: 14,
    fontFamily: "MitrLight",
  },
  chat_Container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "flex-end",
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginLeft: 10,
    borderRadius: 50,
    flex: 1,
    alignItems: "flex-end",
  },
  subContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  buttonContainer: {
    backgroundColor: Color.background_footer,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  chat_textinput: {
    height: 50,
    flex: 1,
    marginHorizontal: 10,
  },
  content_textinput: {
    width: "70%",
  },
});

export default externalStyle;
