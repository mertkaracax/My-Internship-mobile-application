import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { useHistory } from "react-router-native";
import { callNumber } from "./HostessList";

const ChangeRequestItem = ({ item }) => {
  const history = useHistory();

  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => history.push("/requestDetail", { object: item })}
        style={styles.container}>
        <Image style={styles.avatar} source={require("../../assets/CompanyStaff/exchange-2.png")} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            İstenilen Tarih: <Text style={styles.text2}>{item.RequestDate.slice(0, 10)}</Text>{" "}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.text2}>
              {item.Student.Name} {item.Student.Surname}
            </Text>{" "}
          </Text>
        </View>
      </TouchableOpacity>
      <Image style={styles.icon} source={require("../../assets/CompanyStaff/right-angle.png")} />
    </View>
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
    fontWeight: "normal",
    fontSize: 18
  },
  text2: {
    fontWeight: "normal"
  },
  avatar: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    width: 50,
    marginRight: 30
  },
  icon: {
    height: 40,
    width: 30,
    marginRight: 5
  },
  textContainer: {
    flexDirection: "column"
  }
});
export default ChangeRequestItem;
