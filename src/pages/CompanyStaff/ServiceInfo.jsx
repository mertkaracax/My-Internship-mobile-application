import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  BackHandler,
  SafeAreaView
} from "react-native";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";
import api from "../../api";
import { callNumber } from "../../Helpers/callMethod";

const ServiceInfo = () => {
  const history = useHistory();
  const location = useLocation();
  const x = location.state.object;
  const backToHome = () => {
    history.push("/serviceList");
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    console.log("ServiceInfoPage => " + JSON.stringify(x));
    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.body}>
      <Image style={styles.avatar} source={{ uri: x.BusPhoto.Contents }} />
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Hat Numarası:</Text>
          <Text style={styles.normal}>{x.Number}</Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.bold}>Hat adı:</Text>
          <Text style={styles.normal}>{x.Name}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Araç Plakası:</Text>
          <Text style={styles.normal}>{x.BusName}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Hostes:</Text>
          <View style={styles.nameAndIconContainer}>
            <Text style={styles.normal}>{x.HostessName}</Text>
            <TouchableOpacity
              onPress={() => {
                callNumber("5545465399");
              }}>
              <Image
                style={styles.icon}
                source={require("../../assets/CompanyStaff/telephone.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Sürücü:</Text>
          <View style={styles.nameAndIconContainer}>
            <Text style={styles.normal}>{x.DriverName}</Text>
            <TouchableOpacity
              onPress={() => {
                callNumber("5545465399");
              }}>
              <Image
                style={styles.icon}
                source={require("../../assets/CompanyStaff/telephone.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Okula gidiş rotası:</Text>
          <TouchableOpacity
            onPress={() => history.push("/mapPage")}
            style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "#D2D9E3", marginRight: 3 }}>Göster</Text>
            <Image tintColor="white" style={styles.img} source={require("../../assets/map.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Eve dönüş rotası:</Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => history.push("/mapPage")}>
            <Text style={{ color: "#D2D9E3", marginRight: 3 }}>Göster</Text>
            <Image tintColor="white" style={styles.img} source={require("../../assets/map.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
    paddingTop: 10,
    alignItems: "center",
    width: "100%"
  },
  avatar: {
    width: "31%",
    height: "20%",
    marginBottom: "5%"
  },
  listContainer: {
    backgroundColor: "black",
    width: "95%",
    height: "80%"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1A232B",
    padding: "5%",
    width: "100%",
    height: "12%",
    backgroundColor: "#1A232B",
    marginBottom: "1.5%"
  },
  bold: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#31A8E9"
  },
  normal: {
    fontSize: 18,
    color: "#D2D9E3"
  },
  img: {
    height: 25,
    width: 25,
    marginLeft: 5
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 7,
    tintColor: "white"
  },
  nameAndIconContainer: {
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default ServiceInfo;
