import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  BackHandler,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";
import api from "../../api";

const ChangeRequestDetail = () => {
  // let school = "empty";
  const history = useHistory();
  const location = useLocation();
  const request = location.state.object;
  const [data, setData] = useState("");

  const backToHome = () => {
    history.push("/ChangeRequests");
    return true;
  };

  useEffect(async () => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    return () => backHandler.remove();
  }, []);

  useEffect(async () => {
    api.getChangeRequestDetail(request.ChangeRequestId).then((output) => {
      console.log(output);
      setData(output);
    });
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Talep: </Text>
          <Text style={styles.normal}>{data.Title}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Veli: </Text>
          <Text style={styles.normal}>{data.CreatedByName}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Öğrenci: </Text>
          <Text style={styles.normal}>{data.StudentName}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Karşılayıcı: </Text>
          <Text style={styles.normal}>
            {request.Param[1][0].Name} {request.Param[1][0].Surname}{" "}
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>İstenilen Tarih: </Text>
          <Text style={styles.normal}>{data.RequestedDate}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Oluşturulma Tarihi: </Text>
          <Text style={styles.normal}>{data.CreatedOn}</Text>
        </View>
        <View style={styles.listItem2}>
          <Text style={styles.bold}>Açıklama</Text>
          <Text style={styles.normal}>{data.Context}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>YENİ DURAK ÖNER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
    paddingVertical: "5%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },
  listContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "95%",
    borderRadius: 4,
    alignItems: "center"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
    width: "96%",
    height: "12.37%",
    backgroundColor: "#1A232B",
    marginBottom: "0.5%"
  },
  listItem2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A232B",
    width: "96%",
    height: "20%"
  },
  bold: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#31A8E9"
  },
  normal: {
    fontSize: 18,
    color: "#CED0D8"
  },
  btn: {
    backgroundColor: "#0E68AD",
    alignItems: "center",
    justifyContent: "center",
    width: "96%",
    height: "8%",
    borderRadius: 4
  }
});

export default ChangeRequestDetail;
