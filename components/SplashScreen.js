import React, { Component } from "react";
import { View, StyleSheet, Animated, Dimensions, Image, Text } from "react-native";

class SplashScreen extends Component {
  state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    loadingSpinner: false,
  };

  componentDidMount() {
    const { LogoAnime, LogoText } = this.state;
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
        useNativeDriver: true,
      }).start(),

      Animated.timing(LogoText, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this.setState({
        loadingSpinner: true,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnime,
            transform: [
              {
                translateY: this.state.LogoAnime.interpolate({
                  inputRange: [0, 1],
                  outputRange: [80, 0],
                }),
              },
            ],
          }}
        >
          <Image
            style={styles.logoImage}
            source={require("../assets/logo-classroom.png")}
          />
        </Animated.View>
        <Animated.View style={{
            opacity: this.state.LogoText,
        }}>
        <Text style={styles.logoText}> CLASSROOM - APP </Text>
        </Animated.View>
      </View>
    );
  }
}

export default SplashScreen;

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4FB6F0",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#FFF",
    fontSize: 30,
    marginTop: height * 0.1,
    fontWeight: "300",
  },
  logoImage: {
    height: height * 0.25,
    width: height * 0.25,
  },
});
