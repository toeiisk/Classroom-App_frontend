import React, { Component, useState, useEffect} from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Externalstyle from "../style/externalStyle";
import { ScrollView } from "react-native-gesture-handler";
import Color from "../assets/resources/constants/color";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import color from "../assets/resources/constants/color";
import {EditUser} from '../store/actions/auth.actions'
export default function EditProfilescreen(props) {
  const [image, setImage] = useState(null);
  const [firsname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [idstudent, setIdstudent] = useState('')
  const dispatch = useDispatch()
  





  const data  = useSelector(state => state.authReducer.UserLogin)
  console.log(data)
  
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

  const Submit = () => {
    const data = {
      firstname: firsname,
      lastname: lastname,
      phone: phone,
      idstudent: idstudent,
      image: image
    }
    dispatch(EditUser(data))
  }


  return (
    <SafeAreaView style={Externalstyle.register_container}>
      <View
        style={{
          justifyContent: "flex-start",
          marginTop: 20,
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <FontAwesomeIcon icon={faChevronCircleLeft} size={35} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <KeyboardAvoidingScrollView>
          <View style={Externalstyle.layout_header}>
            {image == null ? 
               <Image
               source={{
                 uri:`http://103.13.231.22:3000${data.image}`
               }}
               style={Externalstyle.profile_image}
             />
             :
              <Image
                source={{ uri: image }}
                style={Externalstyle.profile_image}
              />
            }
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
              <TextInput style={Externalstyle.login_input} numberOfLines={1} placeholder={data.name.split(' ')[0]} placeholderTextColor="#fff" onChangeText={(e) => setFirstname(e)}/>
            </View>
            <Text style={Externalstyle.login_text_label}>Lastname</Text>
            <View style={Externalstyle.inputContainer}>
              <TextInput style={Externalstyle.login_input} numberOfLines={1} placeholder={data.name.split(' ')[1]} placeholderTextColor="#fff"  onChangeText={(e) => setLastname(e)}/>
            </View>
            <Text style={Externalstyle.login_text_label}>Phone</Text>
            <View style={Externalstyle.inputContainer}>
              <TextInput style={Externalstyle.login_input} numberOfLines={1} placeholder={data.phonenumber} placeholderTextColor="#fff"  onChangeText={(e) => setPhone(e)}/>
            </View>
            <Text style={Externalstyle.login_text_label}>StudentID</Text>
            <View style={Externalstyle.inputContainer}>
              <TextInput style={Externalstyle.login_input} numberOfLines={1} placeholder={data.stuid} placeholderTextColor="#fff"  onChangeText={(e) => setIdstudent(e)}/>
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
            <TouchableHighlight style={Externalstyle.profile_button_edit} onPress={Submit}>
              <Text style={[Externalstyle.title, { color: "white" }]}>
                SUBMIT
              </Text>
            </TouchableHighlight>
            <TouchableOpacity
              style={Externalstyle.profile_button}
              onPress={() =>  props.navigation.navigate("Profile")}
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
