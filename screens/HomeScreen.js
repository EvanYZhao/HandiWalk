import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import InputField from "../components/InputField";
import { useState } from 'react'

const HomeScreen = ({ navigation }) => {
  const [start, setStart] = useState(null)
  const [dest, setDest] = useState(null)
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>HandiWalk</Text>
      <Text style={{ fontSize: 18 }}>Where would you like to go today?</Text>
      <InputField label="Enter Your Starting Point" setLocation={setStart}/>
      <InputField label="Enter Your Destination" setLocation={setDest}/>
      <StatusBar style="auto" />
      <Button title="Get route" onPress={() => navigation.navigate("Map", {start: start, destination: dest})} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
