import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const externalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  Logo: {
    resizeMode: "stretch",
    marginTop: 50,
    width: HEIGHT * 0.20,
    height: HEIGHT * 0.20,
  },
  containerLogo: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textinput: {
    fontSize: 16,
    fontWeight: "600",
    backgroundColor: "#D7D7D7",
    borderRadius: 10,
    width: WIDTH - 55,
    padding: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.65,
    elevation: 4,
  },
  containerSignin: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSignin: {
    width: WIDTH - 55,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.65,
    elevation: 4,
    backgroundColor: "#02AF8E",
  },
  textStyle: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
  },
  containerSigninLogo: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  SigninLogo: {
      paddingHorizontal: 50
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer:{
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  }
});

export default externalStyle;
