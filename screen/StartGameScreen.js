import react from "react";
import { View, Text, StyleSheet, Button } from "react-native-web";

import Card from "../components/card";
import Colors from "../constants/colors";
import Input from "../components/input";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game !</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.innerTitle}>Select a Number </Text>
        <Input style={styles.input} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={Colors.secondary} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItem: "center",
  },
  innerTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 0,
    width: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
    paddingVertical: 30,
    padding: 10,
  },
  button: {
    width: 80,
  },
  input: {
    width: 40,
  },
});

export default StartGameScreen;
