import React, { Component, useState, useEffect } from "react";
import {
  View,
  Platform,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import { Input } from "react-native-elements";
import Color from "../assets/resources/constants/color";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from "expo-image-picker";
import Externalstyle from "../style/externalStyle";
import { useDispatch, useSelector } from "react-redux";
import { creteContent } from "../store/actions/content.action";


export default function createpostscreen(props) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const classroomId = props.classroomId;
  const lessonId = props.lessonId;
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
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = () => {
    const data = {
      title: title,
      description: description,
      image: image,
      lessonId: lessonId,
      classroomId: classroomId,
    };
    dispatch(creteContent(data));
    dispatch({ type: "UNVISIBLE" });
  };

  return (
    <SafeAreaView style={Externalstyle.register_container}>
      <KeyboardAwareScrollView>
        <KeyboardAwareScrollView>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={Externalstyle.text_title_primary}>EDIT CONTENT</Text>
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
              placeholderTextColor="black"
              onChangeText={(e) => setTitle(e)}
            />
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              Description
            </Text>
            <KeyboardAwareScrollView>
              <TextInput
                style={Externalstyle.creatpost_textarea}
                underlineColorAndroid="transparent"
                placeholderTextColor={"black"}
                numberOfLines={10}
                multiline={true}
                onChangeText={(e) => setDescription(e)}
              />
            </KeyboardAwareScrollView>
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
              <TouchableHighlight
                activeOpacity={0.2}
                underlayColor={Color.background_footer}
                onPress={pickImage}
              >
                <View style={Externalstyle.create_image}>
                  <Text style={[Externalstyle.title, { color: "white" }]}>
                    ADD IMAGE
                  </Text>
                </View>
              </TouchableHighlight>
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
        </KeyboardAwareScrollView>
      </KeyboardAwareScrollView>
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={Color.background_footer}
        >
          <View style={Externalstyle.create_submit}>
            <Text style={[Externalstyle.title, { color: "white" }]}>
              Submit
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={Color.background_footer}
        >
          <View style={Externalstyle.profile_button}>
          <Text style={[Externalstyle.title, { color: "white" }]}>Cancel</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
