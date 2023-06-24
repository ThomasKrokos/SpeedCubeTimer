import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

const Timer = () => {
  // Not actually miliseconds but hundreths of a second but thats too long of a name
  const [miliseconds, setMiliseconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [record, setRecord] = useState(0);

  useEffect(() => {
    let interval: any;
    if (running) {
      if (miliseconds != 0) {
        setMiliseconds(0);
      }
      interval = setInterval(() => {
        setMiliseconds((miliseconds) => {
          return (miliseconds = miliseconds + 1);
        });
      }, 10);
    } else if (!running) {
      if (record == 0 || miliseconds < record) setRecord(miliseconds);
    }
    return () => clearInterval(interval);
  }, [running]);

  // function to format timer to clock
  const getTime = (ms: number) => {
    if (ms == 0) return 0;

    const h = Math.floor(ms / 360000);
    const m = Math.floor((ms % 360000) / 6000);
    const s = Math.floor(((ms % 360000) % 6000) / 100);
    ms = Math.floor(((ms % 360000) % 6000) % 100);

    const hDisplay = h > 0 ? h + ":" : "";
    const mDisplay = m > 0 ? (m < 10 ? "0" + m + ":" : m + ":") : "";

    return hDisplay + mDisplay + (s < 10 ? "0" + s : s) + "." + ms;
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            setRunning((running) => !running);
          }}
        >
          <View style={styles.touchScreen}>
            <Text style={styles.buttonText}>{getTime(miliseconds)}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View>
        <Text style={styles.text}>
          {record ? "Best Time: " + getTime(record) : null}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            setRecord(0);
          }}
        >
          <Text style={styles.text}>Clear Best Time</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default Timer;

/**
 * https://reactnative.dev/docs/style
 * https://reactnative.dev/docs/height-and-width
 * https://reactnative.dev/docs/view
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#b0ffb0",
  },

  touchScreen: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    marginBottom: "5%",
  },
  buttonText: {
    color: "#666666",
    flex: 1,
    padding: 20,
    marginTop: "70%",
    fontSize: "50%",
    fontWeight: "bold",
  },

  text: {
    color: "#666666",
  },
  button: {
  },
});
