import React, { Component, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { UserLogout } from "../store/actions/auth.actions";
import { connect } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Externalstyle from "../style/externalStyle";
import { ScrollView } from "react-native-gesture-handler";
import Color from "../assets/resources/constants/color";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
export default function EditProfilescreen() {
  const [image, setImage] = useState(null);

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
      <View
        style={{
          justifyContent: "flex-start",
          marginTop: 20,
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronCircleLeft} size={35} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <KeyboardAvoidingScrollView>
          <View style={Externalstyle.layout_header}>
            {image && (
              <Image
                source={{ uri: image }}
                style={Externalstyle.profile_image}
              />
            )}
            <Image
              source={{
                uri:
                  "https://scontent.fbkk12-4.fna.fbcdn.net/v/t31.0-8/18402248_1167842763341854_8112859874758364759_o.jpg?_nc_cat=103&ccb=2&_nc_sid=174925&_nc_eui2=AeHxDo_OLwWJW3jTAZLqpedKJAPitTxNcVYkA-K1PE1xVoVEZnnHYRUvxmDXkVG0l8jRrQUzmGod1YJ9mrIWhnZS&_nc_ohc=7F5SRT90GlIAX-bWOLu&_nc_ht=scontent.fbkk12-4.fna&oh=834c65addd07025c6a2a3695be29b97f&oe=5FBF7B40",
              }}
              style={Externalstyle.profile_image}
            />
            <TouchableOpacity
              activeOpacity={0.2}
              underlayColor={Color.background_footer}
              onPress={pickImage}
            >
              <View style={Externalstyle.create_image}>
                <Text style={[Externalstyle.title, { color: "white" }]}>
                  ADD IMAGE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 40 }}>
            <Text style={Externalstyle.login_text_label}>Firstname</Text>
            <View style={Externalstyle.inputContainer}>
              <TextInput style={Externalstyle.login_input} numberOfLines={1} />
            </View>
            <Text style={Externalstyle.login_text_label}>Lastname</Text>
            <View style={Externalstyle.inputContainer}>
              <TextInput style={Externalstyle.login_input} numberOfLines={1} />
            </View>
            <Text style={Externalstyle.login_text_label}>Phone</Text>
            <View style={Externalstyle.inputContainer}>
              <TextInput style={Externalstyle.login_input} numberOfLines={1} />
            </View>
            <Text style={Externalstyle.login_text_label}>StudentID</Text>
            <View style={Externalstyle.inputContainer}>
              <TextInput style={Externalstyle.login_input} numberOfLines={1} />
            </View>
            <Text style={Externalstyle.login_text_label}>New Password</Text>
            <View style={Externalstyle.inputContainer}>
              <TextInput
                secureTextEntry={true}
                style={Externalstyle.login_input}
                numberOfLines={1}
              />
            </View>
            <View style={Externalstyle.inputContainer}>
              <TextInput
                secureTextEntry={true}
                style={Externalstyle.login_input}
                numberOfLines={1}
              />
            </View>
          </View>
          <View style={Externalstyle.layout_button}>
            <TouchableOpacity style={Externalstyle.profile_button_edit}>
              <Text style={[Externalstyle.title, { color: "white" }]}>
                SUBMIT
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Externalstyle.profile_button}
              onPress={() => this.props.navigation.popToTop()}
            >
              <Text style={[Externalstyle.title, { color: "white" }]}>
                CANCLE
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
