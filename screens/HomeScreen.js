import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useFonts, PalanquinDark_400Regular } from '@expo-google-fonts/palanquin-dark';
import { StatusBar } from "expo-status-bar";
import InputField from "../components/InputField";
import { useState } from 'react';
import logo from '../assets/tree.jpg';


const HomeScreen = ({ navigation }) => {
  const [start, setStart] = useState(null)
  const [dest, setDest] = useState(null)

  let [fontsLoaded] = useFonts({
    PalanquinDark_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={{ fontSize: 18, fontFamily: 'PalanquinDark_400Regular' }}>Where would you like to go today?</Text>
      <InputField label="Enter Your Starting Point" setLocation={setStart} />
      <InputField label="Enter Your Destination" setLocation={setDest} />
      <StatusBar style="auto" />
      <Button title="Get route" onPress={() => navigation.navigate("Map", { start: start, destination: dest })} />
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
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  }
});

export default HomeScreen;
