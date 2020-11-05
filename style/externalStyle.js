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
    fontWeight: "600",
    fontSize: 30,
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
    padding: 20,
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
  },
  classroom_author: {
    color: "black",
    opacity: 1,
    fontSize: 14,
    fontWeight: "bold",
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
  },
  classroom_modal_input: {
    flex: 1,
    padding: 15,
    color: "white",
    fontWeight: "500",
  },
  classroom_modal_input2: {
    borderColor: "gray",
    borderWidth: 0.5,
    width: "100%",
    textAlign: "center",
    height: 50,
    marginTop: 10,
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
    width: "100%",
    height: 35,
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
    margin: 20,
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
    flex: 1,
    justifyContent: "flex-end",
    margin: 10,
  },
  profile_button: {
    width: "80%",
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: Color.background_button_logout,
    justifyContent: "center",
    alignItems: "center",
  },
  profile_button_edit: {
    width: "80%",
    padding: 10,
    margin: 10,
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
    padding: 20,
    opacity: 1,
    fontSize: 16,
    fontWeight: "300",
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
  },
  register_input: {
    flex: 1,
    padding: 8,
    color: "white",
    fontWeight: "300",
  },
  register_button: {
    alignItems: "center",
    marginTop: 15,
  },
  register_signin: {
    width: "100%",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    backgroundColor: Color.background_button_signin,
  },
  register_text_forgot: {
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
  },
  chat_title: {
    color: Color.text_profile,
    opacity: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  chat_titlesub: {
    color: Color.text_profile,
    opacity: 1,
    fontSize: 14,
    fontWeight: "300",
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
  },
  comments_titlesub: {
    color: Color.text_profile,
    opacity: 1,
    fontSize: 14,
    fontWeight: "300",
    marginTop: 5,
    lineHeight: 20,
  },
});

export default externalStyle;
