import { Button, StyleSheet, Text, View } from "react-native";
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
      }, 1);
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
      <Text>{getTime(miliseconds)}</Text>
      <Button
        onPress={() => {
          setRunning((running) => !running);
        }}
        title="Click to start time"
      />
      
      <Text>Fastest solve: {getTime(record)}</Text>
      <Button
        onPress={() => {
          setRecord(0);
        }}
        title="Clear Best Time"
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
