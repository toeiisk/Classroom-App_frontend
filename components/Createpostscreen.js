import React, { Component, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";
import { Input } from "react-native-elements";
import { createNewUser } from "../store/actions/auth.actions";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import * as ImagePicker from "expo-image-picker";
import Externalstyle from "../style/externalStyle";
import { useDispatch } from 'react-redux'

// import {Actions} from 'react-native-router-flux';

export default function createpostscreen(props) {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <SafeAreaView style={Externalstyle.register_container}>
      <ScrollView>
        <KeyboardAvoidingScrollView>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={Externalstyle.text_title_primary}>CREATE POST</Text>
          </View>
          <View style={Externalstyle.register_content}>
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              Title
            </Text>
            <Input
              style={Externalstyle.creatpost_input}
              numberOfLines={1}
              placeholder={"Text here..."}
              placeholderTextColor="black"
            />
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              Description
            </Text>
            <KeyboardAvoidingScrollView>
              <TextInput
                style={Externalstyle.creatpost_textarea}
                underlineColorAndroid="transparent"
                placeholder={"Text here..."}
                placeholderTextColor={"black"}
                numberOfLines={10}
                multiline={true}
              />
            </KeyboardAvoidingScrollView>
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              Image
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={pickImage}
                style={Externalstyle.create_image}
              >
                <Text style={[Externalstyle.title, { color: "white" }]}>
                  ADD IMAGE
                </Text>
              </TouchableOpacity>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 150,
                    height: 150,
                    margin: 10,
                    borderColor: "white",
                    borderWidth: 1,
                  }}
                />
              )}
            </View>
          </View>
        </KeyboardAvoidingScrollView>
      </ScrollView>
      <View
        style={{ justifyContent: "flex-end", alignItems: "center" }}
      >
        <TouchableOpacity style={Externalstyle.create_submit}>
          <Text style={[Externalstyle.title, { color: "white" }]}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Externalstyle.cansel_submit} onPress={()=> dispatch({type: 'UNVISIBLE'})}>
          <Text style={[Externalstyle.title, { color: "white" }]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
