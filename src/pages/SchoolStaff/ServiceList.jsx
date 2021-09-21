import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, BackHandler, View } from "react-native";

import { useHistory } from "react-router-native";
import ServiceItemm from "./ServiceItem";
// import { getBuses } from "../../actions/companyStaffActions";
import getSchoolBusesInfo from "../../actions/schoolStaffActions";
import api from "../../api";

const ServiceListt = () => {
  const history = useHistory();
  const [buses, setBuses] = useState([]);

  const backToHome = () => {
    history.push("/schoolStaffHome");
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);
  useEffect(async () => {
    {
      api.getSchoolBusesInfo().then((output) => {
        console.log(`Buses: ${JSON.stringify(output)}`);
        setBuses(output);
      });
    }
  }, []);

  return (
    <View style={styles.body}>
      <FlatList
        style={styles.flatlist}
        data={buses}
        renderItem={({ item }) => <ServiceItemm item={item} />}
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

export default ServiceListt;
