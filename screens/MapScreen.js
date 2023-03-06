import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

const MapScreen = ({ navigation, route }) => {
  const {start, destination} = route.params; //Start and Destination Locations From User
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Find a new route"
        onPress={() => navigation.navigate("Home")}
      />
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

export default MapScreen;
