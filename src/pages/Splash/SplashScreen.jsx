/* eslint-disable global-require */
import React, { useEffect, useState } from "react";
import { Text, Image, View, StyleSheet, Animated } from "react-native";
import { useHistory } from "react-router-native";
import OneSignal from "react-native-onesignal";
import { refreshAPPs } from "../../actions/actions";

export default function SplashScreen() {
  const history = useHistory();
  const [opacity, setOp] = useState(0);
  const [bgOp, setBgOp] = useState(1);
  async function opacityUp() {
    setTimeout(() => {
      console.log("loading");
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 500; i++) {
        setTimeout(() => {
          setOp(i / 500);
          // console.log(i / 100);
        }, 0);
      }
    });
  }
  async function opacityDown() {
    setTimeout(() => {
      console.log("loadingbg");
      // eslint-disable-next-line no-plusplus
      for (let i = 650; i > 450; i--) {
        setTimeout(() => {
          setBgOp(i / 650);
          setTimeout(() => {
            let a = 1;
          }, 500);
        }, 0);
      }
    });
  }
  useEffect(async () => {
    await opacityUp();
    await opacityDown();
    // await opacityDown();
  }, []);

  useEffect(() => {
    OneSignal.setAppId("dff4d368-42f8-47bb-8973-954c5e8ac8fd");
    console.log("OneSignal is set!\n");

    OneSignal.setNotificationWillShowInForegroundHandler((recievedEvent) => {
      refreshAPPs();
      const notif = recievedEvent.getNotification();
      console.log("OneSignal foreground notification:", notif.body);
      setTimeout(() => recievedEvent.complete(notif), 0);
    });

    OneSignal.setInAppMessageClickHandler((clickedEvent) => {
      refreshAPPs();
      console.log("OneSignal message click:", clickedEvent);
    });

    OneSignal.setNotificationOpenedHandler((notifiedEvent) => {
      refreshAPPs();
      const notif = notifiedEvent.getNotification();
      console.log("OneSignal In APP notification:", notif.body);
      setTimeout(() => notifiedEvent.complete(notif), 0);
    });
  }, []);

  setTimeout(() => {
    history.push("/login");
  }, 2000);
  //#010811
  return (
    <View
      opacity={bgOp}
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
      }}>
      <Image
        opacity={opacity}
        style={styles.img}
        fadeDuration={50}
        source={require("../../assets/delta.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    height: 90,
    width: 335,
    borderWidth: 1,
    borderRadius: 10
  }
});
