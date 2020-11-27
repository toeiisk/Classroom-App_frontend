import React, { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Externalstyle from "../style/externalStyle";
import Color from "../assets/resources/constants/color";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

export default function createclassscreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (datetime) => {
    const date = moment(datetime).add(3, "days").calendar();
    console.warn("A datetime has been picked: ", date);
    // console.log("date", date);
    hideDatePicker();
  };
  return (
    <SafeAreaView style={Externalstyle.register_container}>
      <ScrollView>
        <KeyboardAwareScrollView>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={Externalstyle.text_title_primary}>EDIT CLASS</Text>
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
              placeholderTextColor="black"
            />
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              Date-Time - Start
            </Text>
            <TouchableHighlight
              activeOpacity={0.2}
              underlayColor={Color.background_footer}
              onPress={showDatePicker}
            >
              <View style={Externalstyle.create_image}>
                <Text style={[Externalstyle.title, { color: "white" }]}>
                  Select Date-Time
                </Text>
              </View>
            </TouchableHighlight>
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              Date-Time - End
            </Text>
            <TouchableHighlight
              activeOpacity={0.2}
              underlayColor={Color.background_footer}
              onPress={showDatePicker}
            >
              <View style={Externalstyle.create_image}>
                <Text style={[Externalstyle.title, { color: "white" }]}>
                  Select Date-Time
                </Text>
              </View>
            </TouchableHighlight>
            <Text
              style={[Externalstyle.creatpost_text_label, { color: "black" }]}
            >
              จำนวนชั่วโมงเรียน
            </Text>
            <Input
              style={Externalstyle.creatpost_input}
              keyboardType="numeric"
              maxLength={2}
              numberOfLines={1}
              placeholder={"Hours here..."}
              placeholderTextColor="black"
              onChangeText={(e) => {
                this.setState({ name: e });
              }}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              is24Hour={true}
              timeZoneOffsetInMinutes={0}
              format={"HH:mm"}
              locale="th_TH"
              mode="datetime"
              textColor="black"
              pickerContainerStyleIOS={{ backgroundColor: "white" }}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
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
            <Text style={[Externalstyle.title, { color: "white" }]}>
              Cancel
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
