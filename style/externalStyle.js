import { StyleSheet, Dimensions } from "react-native";
import Color from "../assets/resources/constants/color";
const { height } = Dimensions.get("screen");
const height_logo = height * 0.5 * 0.4;

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
    fontWeight: "400",
    fontSize: 30,
    marginBottom: 10,
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
    padding: 18,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: Color.background_button_attendance,
    padding: 10,
    borderRadius: 25,
  },
  layoutbutton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
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
  },
  login_input: {
    flex: 1,
    padding: 8,
    color: "white",
    fontWeight: "500",
  },
  login_button: {
    alignItems: "center",
    marginTop: 15,
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
    fontWeight: "400",
    fontSize: 14,
  },

  //Profile
  profile_container: {
    flex: 1,
    backgroundColor: Color.background,
    alignContent: "center",
    justifyContent: "center",
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
    color: "black",
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
});

export default externalStyle;
