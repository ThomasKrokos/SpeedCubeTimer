import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

const Timer = () => {
  const [miliseconds, setMiliseconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [record, setRecord] = useState(0);

  useEffect(() => {
    let interval: any;
    if (running) {
      if(miliseconds != 0){
        setMiliseconds(0)
      }
      interval = setInterval(() => {
        setMiliseconds((miliseconds) => {
          return miliseconds = (miliseconds + 1);
        });
      }, 10);
    } else if (!running) {
      setRecord(miliseconds)

    }


    return () => clearInterval(interval);
  }, [running]);

  return (
    <View style={styles.container}>
      <Text>{miliseconds}</Text>
      <Button
        onPress={() => {
          setRunning((running) => !running);
        }}
        title="Press Me"
      />

<Text>Last solve: {record}</Text>

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
