import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, BackHandler, View, Button } from "react-native";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";
import api from "../../api";
import ChangeRequestItemm from "./ChangeRequestItem";

const ChangeRequestDetaill = () => {
  const [school, setSchool] = useState(" - ");
  const [title, setTitle] = useState(" - ");
  const [context, setContext] = useState(" - ");
  const [studentName, setStudentName] = useState(" - ");
  const [createdOn, setCreatedOn] = useState(" - ");
  const [createdByPhoneNumber, setCreatedByPhoneNumber] = useState(" - ");

  const location = useLocation();
  const obje = location.state.object;

  // let school = "empty";
  const history = useHistory();

  const backToHome = () => {
    history.push("/changeRequestss");
    return true;
  };

  useEffect(async () => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    return () => backHandler.remove();
  }, []);

  useEffect(async () => {
    api.getChangeRequestDetaill().then((output) => {
      // console.log(output);
      // const data = output;
      // setSchool(data);
      // setTitle(data.title);
      // setContext(data.context);
      // setStudentName(data.studentName);
      // setCreatedOn(data.createdOn);
      // setCreatedByPhoneNumber(data.createdByPhoneNumber);

      setTimeout(() => {
        console.log(`X: ${JSON.stringify(school)}`);
      }, 2000);
    });
  }, []);

  return (
    <View style={styles.body}>
      <Image style={styles.avatar} source={require("../../assets/SchoolStaff/exchange.png")} />
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Name:</Text>
          <Text style={styles.normal}>{obje.CreatedByName}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}> Title: </Text>
          <Text style={styles.normal}>{obje.Title}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Öğrenci:</Text>
          <Text style={styles.normal}>{obje.StudentName}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Telefon numarası:</Text>
          <Text style={styles.normal}>{obje.CreatedByPhoneNumber}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F1F4F5",
    paddingTop: 10,
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: "5%"
  },
  listContainer: {
    backgroundColor: "white",
    width: "95%",
    height: "65%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#0253BD"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0253BD",
    padding: "5%",
    width: "100%",
    height: "25%"
  },
  bold: {
    fontSize: 16,
    fontWeight: "bold"
  },
  normal: {
    fontSize: 16
  }
});

export default ChangeRequestDetaill;
