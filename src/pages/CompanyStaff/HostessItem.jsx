import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import { callNumber } from "../../Helpers/callMethod";

const HostessItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.view}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={require("../../assets/CompanyStaff/hostess-2.png")} />
        <Text style={styles.text}>{item.Name}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("mert");
          callNumber("5545465399");
        }}>
        <Image style={styles.icon} source={require("../../assets/CompanyStaff/telephone.png")} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1A232B",
    alignSelf: "center",
    width: "96%",
    height: 90,
    borderRadius: 4,
    padding: 5,
    paddingRight: 10,
    margin: 3
  },
  container: {
    paddingLeft: 5,
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    width: "70%"
  },
  text: {
    color: "#CED0D8",
    fontSize: 18
  },
  avatar: {
    borderWidth: 1,
    borderRadius: 5,
    height: 60,
    width: 60,
    marginRight: 30
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 5,
    tintColor: "white"
  }
});
export default HostessItem;
