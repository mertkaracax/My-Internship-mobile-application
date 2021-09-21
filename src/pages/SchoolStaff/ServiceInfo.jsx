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

const ServiceInfoo = () => {
  const history = useHistory();
  const location = useLocation();
  const obje = location.state.object;

  const backToHome = () => {
    history.push("/serviceListt");
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.body}>
      <Image style={styles.avatar} source={{ uri: obje.ServiceBus.Photo.Contents }} />
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Hat Numarası:</Text>
          <Text style={styles.normal}>{obje.ServiceBus.Number}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Hat adı:</Text>
          <Text style={styles.normal}>{obje.ServiceBus.Name}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Araç Plakası:</Text>
          <Text style={styles.normal}>{obje.ServiceBus.Plate}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Hostess:</Text>
          <Text style={styles.normal}>{obje.ServiceBus.Hostess.Name}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Driver:</Text>
          <Text style={styles.normal}>{obje.ServiceBus.Driver.Name}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Okula gidiş rotası:</Text>
          <TouchableOpacity
            onPress={() => history.push("/mapPagee")}
            style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "#2cb1ee", marginRight: 2 }}>Göster</Text>
            <Image tintColor="#2cb1ee" />
          </TouchableOpacity>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Eve dönüş rotası:</Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => history.push("/mapPagee")}>
            <Text style={{ color: "#2cb1ee", marginRight: 2 }}>Göster</Text>
            <Image tintColor="#2cb1ee" />
          </TouchableOpacity>
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
    width: "100%"
  },
  avatar: {
    width: "31%",
    height: "20%",
    marginBottom: "5%"
  },
  listContainer: {
    backgroundColor: "white",
    width: "95%",
    height: "75%",
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
    height: "14.28%"
  },
  bold: {
    fontSize: 16,
    fontWeight: "bold"
  },
  normal: {
    fontSize: 16
  }
});

export default ServiceInfoo;
