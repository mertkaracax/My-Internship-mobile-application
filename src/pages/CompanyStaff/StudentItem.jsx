import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import { useHistory } from "react-router-native";
//{ uri: item.Avatar.Contents }
const StudentItem = ({ item }) => {
  const history = useHistory();
  return (
    <TouchableOpacity
      style={styles.view}
      // onPress={() => navigation.navigate("StudentInfo", { name: item.name })}
      onPress={() => history.push("/studentInfo", { object: item })}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={require("../../assets/CompanyStaff/student.png")} />
        <Text style={styles.text}>
          {item.Name} {item.Surname}
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
    width: "96%",
    height: 90,
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
    width: 30,
    tintColor: "black"
  }
});
export default StudentItem;
