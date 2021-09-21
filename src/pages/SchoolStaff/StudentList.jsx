import React, { useEffect, useState } from "react";
import { FlatList, BackHandler, StyleSheet, View } from "react-native";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";
import StudentItem from "./StudentItem";
import api from "../../api";

const StudentListt = () => {
  const history = useHistory();

  const [students, setStudents] = useState([]);

  const backToHome = () => {
    history.push("/schoolStaffHome");
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    api.getStudentsSchoolStaff().then((output) => {
      console.log("burası mı");
      setStudents(output);
    });
  }, []);

  return (
    <View style={styles.body}>
      <FlatList
        data={students}
        renderItem={({ item }) => <StudentItem item={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F1F4F5"
  }
});

export default StudentListt;
