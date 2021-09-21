// import MapView, { Marker } from "react-native-maps";

import { StyleSheet, View, SearchBar, BackHandler } from "react-native";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-native";
import api from "../../api";

const MapPagee = () => {
  const history = useHistory();
  const backToHome = () => {
    history.push("/serviceListt");
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    api.getSchoolBusStops().then((output) => {
      console.log(output);
      // setStudents(output);
    });
  }, []);

  return (
    <View style={styles.BackView}>
      {/* <SearchBar
        style={styles.bar}
        useRef="searchBar"
        textFieldBackgroundColor="white"
        placeholder="Arama"
        textColor="white"
        showsCancelButtonWhileEditing={false}
      /> */}
      {/* <MapView
        showsScale
        showsMyLocationButton
        showsTraffic
        showsUserLocation
        followsUserLocation
        userLocationAnnotationTitle="you are here"
        // customMapStyle={mapStyle}
        style={{ flex: 1 }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  BackView: {
    flex: 1,
    backgroundColor: "#171818"
  },
  bar: {
    height: 30,
    width: "80%",
    alignSelf: "center",
    marginVertical: 5
  },
  text1: {
    textAlign: "center",
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    margin: 5
  },
  text2: {
    marginLeft: 7,
    fontSize: 20,
    color: "#31A8E9"
  },
  Icons: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    backgroundColor: "#1A232B",
    height: 50,
    width: 380,
    justifyContent: "center",
    marginBottom: 2,
    alignSelf: "center"
  }
});

export default MapPagee;
