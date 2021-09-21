import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, BackHandler, View, ActivityIndicator } from "react-native";
import ServiceItem from "./ServiceItem";
import { useHistory } from "react-router-native";
import api from "../../api";

const ServiceList = () => {
  let history = useHistory();
  const [buses, setBuses] = useState([]);
  const [loading, setLoad] = useState(1);
  const backToHome = () => {
    history.push("/csHome");
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);
  useEffect(async () => {
    {
      api.getRoutes().then((output) => {
        console.log("Buses: " + JSON.stringify(output));
        setBuses(output);
        setLoad(0);
      });
    }
  }, []);

  return (
    <View style={styles.body}>
      <ActivityIndicator opacity={loading} style={styles.indicator} size="large" color="#0000ff" />
      <FlatList
        style={styles.flatlist}
        data={buses}
        renderItem={({ item }) => <ServiceItem item={item}></ServiceItem>}
        keyExtractor={(item, index) => index}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "black"
  },
  indicator: {
    position: "relative",
    top: "50%",
    height: 1
  }
});

export default ServiceList;
