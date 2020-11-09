import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
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
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import {Actions} from 'react-native-router-flux';
import moment from 'moment'
export default function createclassscreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (datetime) => {
    const date = moment(datetime).add(3, 'days').calendar()
    console.warn("A datetime has been picked: ", date);
    console.log('date', date)
    hideDatePicker();
  };
  return (
    <SafeAreaView style={Externalstyle.register_container}>
      <ScrollView>
        <KeyboardAvoidingScrollView>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={Externalstyle.text_title_primary}>CREATE CLASS</Text>
          </View>
          <View style={Externalstyle.register_content}>
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              Name class
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
            <Input
              style={Externalstyle.creatpost_input}
              numberOfLines={1}
              placeholder={"Text here..."}
              placeholderTextColor="black"
            />
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              Date - Time
            </Text>
            <TouchableOpacity
              onPress={showDatePicker}
              style={Externalstyle.create_image}
            >
              <Text style={[Externalstyle.title, { color: "white" }]}>
                Select Date-Time
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              is24Hour={true}
              timeZoneOffsetInMinutes={0}
              format={'HH:mm'}
              locale="th_TH"
              mode="datetime"
              textColor="black"
              pickerContainerStyleIOS={{backgroundColor: "white"}}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              Author
            </Text>
            <Input
              style={Externalstyle.creatpost_input}
              numberOfLines={1}
              placeholder={"Text here..."}
              placeholderTextColor="black"
            />
          </View>
        </KeyboardAvoidingScrollView>
      </ScrollView>
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <TouchableOpacity style={Externalstyle.create_submit}>
          <Text style={[Externalstyle.title, { color: "white" }]}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
