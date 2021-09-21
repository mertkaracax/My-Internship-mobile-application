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
import { useHistory } from "react-router-native";

const ServiceItem = ({ item }) => {
  const isGetOn = (direction) => {
    if (direction == 1) {
      return "Sabah servisi";
    } else {
      return "Akşam servisi";
    }
  };

  let history = useHistory();
  return (
    <TouchableOpacity
      style={styles.view}
      onPress={() => history.push("/serviceInfo", { object: item })}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: item.BusPhoto.Contents }} />
        <Text style={styles.text}>
          {item.Name}
          {"\n"}
          {item.BusName}
          {"\n"}
          {isGetOn(item.Direction)}
        </Text>
      </View>
      <Image style={styles.icon} source={require("../../assets/CompanyStaff/right-angle.png")} />
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
    width: "95%",
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
    height: 40,
    width: 30
  }
});
export default ServiceItem;
