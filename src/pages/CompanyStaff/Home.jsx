import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { useHistory } from "react-router-native";
import BackHandlerExit from "../../Helpers/RouteMethods";

const CompanyStaffHome = () => {
  const history = useHistory();

  BackHandlerExit();
  return (
    <View style={styles.mainView}>
      <View style={styles.halfView}>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={() => {
            history.push("/schoolInfo");
          }}>
          <Image style={styles.icons} source={require("../../assets/CompanyStaff/school-2.png")} />
          <Text style={{ color: "#31A8E9", marginTop: "10%", fontSize: 15, fontWeight: "bold" }}>
            Okul Bilgileri
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItems} onPress={() => history.push("/serviceList")}>
          <Image style={styles.icons} source={require("../../assets/CompanyStaff/bus.png")} />
          <Text style={{ color: "#31A8E9", marginTop: "10%", fontSize: 15, fontWeight: "bold" }}>
            Servisler
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={() => {
            history.push("/hostessList");
          }}>
          <Image style={styles.icons} source={require("../../assets/CompanyStaff/hostess-2.png")} />
          <Text style={{ color: "#31A8E9", marginTop: "10%", fontSize: 15, fontWeight: "bold" }}>
            Hostesler
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.halfView}>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={() => {
            history.push("/studentList");
          }}>
          <Image style={styles.icons} source={require("../../assets/CompanyStaff/student.png")} />
          <Text style={{ color: "#31A8E9", marginTop: "10%", fontSize: 15, fontWeight: "bold" }}>
            Öğrenciler
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={() => {
            history.push("/changeRequests");
          }}>
          <Image
            style={styles.icons}
            source={require("../../assets/CompanyStaff/exchange-2.png")}
          />
          <Text style={{ color: "#31A8E9", marginTop: "10%", fontSize: 15, fontWeight: "bold" }}>
            Değişiklik Talepleri
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={() => {
            history.push("/driverList");
          }}>
          <Image style={styles.icons} source={require("../../assets/CompanyStaff/driver-2.png")} />
          <Text style={{ color: "#31A8E9", marginTop: "10%", fontSize: 15, fontWeight: "bold" }}>
            Sürücüler
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    flexDirection: "row",
    backgroundColor: "black"
  },
  halfView: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "100%"
  },
  menuItems: {
    borderRadius: 4,
    width: "95%",
    height: "31%",
    alignItems: "center",
    justifyContent: "center",
    margin: "2%",
    backgroundColor: "#1A232B"
  },
  icons: {
    width: 80,
    height: 80
  }
});

export default CompanyStaffHome;
