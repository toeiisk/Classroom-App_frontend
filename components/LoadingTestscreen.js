import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import Externalstyle from "../style/externalStyle";
import * as Animatable from "react-native-animatable";
import { Overlay } from "react-native-elements";

export default class LoadingTestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Overlay
          onBackdropPress={() => {
            this.setOverlayVisible(!overlayVisible);
          }}
          overlayStyle={{ backgroundColor: "transparent" }}
        >
          <Animatable.View
            animation="bounceIn"
            duration={2000}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Animatable.Image
              animation="tada"
              duration={2000}
              iterationCount="infinite"
              style={{ height: 100, width: 100 }}
              source={require("../assets/resources/icon/sand-clock.png")}
            />
            <Animatable.Text
              animation="pulse"
              duration={2000}
              iterationCount="infinite"
              style={[
                Externalstyle.text_title,
                { textAlign: "center", marginVertical: 20 },
              ]}
            >
              Please wait{"\n"}for a while!!
            </Animatable.Text>
          </Animatable.View>
        </Overlay>
      </View>
    );
  }
}
