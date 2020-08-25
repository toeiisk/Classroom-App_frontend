import React from "react";
import { View, Animated, StyleSheet, MaskedViewIOS } from "react-native";
import externalStyle from "../style/externalStyle";
import { Image, Text } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import MaskedView from "@react-native-community/masked-view";

export default class LoadingScreen extends React.Component {
  state = {
    loadingProgress: new Animated.Value(8),
    animationDone: false,
  };

  componentDidMount() {
    Animated.timing(this.state.loadingProgress, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      delay: 500,
    }).start(() => {
      this.setState({ animationDone: true });
    });
  }

  render() {
    const colorLayer = this.state.animationDone ? null : (
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "#000" }]} />
    );
    const whiteLayer = this.state.animationDone ? null : (
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "#FFF" }]} />
    );
    const imageScale = {
      transform: [
        {
          scale: this.state.loadingProgress.interpolate({
            inputRange: [0, 15, 100],
            outputRange: [0.1, 0.06, 16],
          }),
        },
      ],
    };

    const opacity = {
      opacity: this.state.loadingProgress.interpolate({
        inputRange: [8, 25, 50],
        outputRange: [0, 0, 1],
        extrapolate: "clamp",
      }),
    };

    return (
      <View style={{ flex: 1 }}>
        {colorLayer}
        <MaskedView
          style={{ flex: 1 }}
          maskElement={
            <View style={styles.centered}>
              <Animated.Image
                source={require("../assets/logo-classroom.png")}
                style={[{ width: 1000 }, imageScale]}
                resizeMode="contain"
              />
            </View>
          }
        >
          {whiteLayer}
          <Animated.View style={[opacity, styles.centered]}>
            <Text>Your app goes here!!</Text>
          </Animated.View>
        </MaskedView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
