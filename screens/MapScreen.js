import Dodd from '../assets/Dodd_Hall-1.jpg';
import Young from '../assets/Young_Hall-1.jpg';
import logo from '../assets/tree.png';

import { useFonts, PalanquinDark_400Regular } from '@expo-google-fonts/palanquin-dark';
import { StyleSheet, Text, View, Button, FlatList, Image, Animated, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { PinchGestureHandler, State } from "react-native-gesture-handler"

const Directions = ({ isYoung }) => {
  let [fontsLoaded] = useFonts({
    PalanquinDark_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const CrosswalkToDodd = [
    { direction: 'Cross De Neve crosswalk and turn left', icon: 'return-up-back' },
    { direction: 'Follow sidewalk, continuing straight', icon: 'arrow-up' },
    { direction: 'Near the Anderson School of Business, take the elevator near the stairs to the top', icon: 'arrow-up' },
    { direction: 'Exit the elevator and turn right', icon: 'return-up-forward' },
    { direction: 'Continue straight', icon: 'arrow-up' },
    { direction: 'After passing Campbell Hall, turn left', icon: 'return-up-back' },
    { direction: 'Turn right with the street', icon: 'return-up-forward' },
    { direction: 'Continue straight and turn right in front of LuValle Commons', icon: 'return-up-forward' },
    { direction: 'After passing Dodd Hall, turn left along sidewalk', icon: 'return-up-back' },
    { direction: 'Turn left at the back of Dodd Hall', icon: 'return-up-back' },
    { direction: 'You have arrived', icon: 'checkmark' },
  ]

  const CrosswalkToYoung = [
    { direction: 'Cross De Neve crosswalk and turn right', icon: 'return-up-forward' },
    { direction: 'Turn left into Tennis Courts Stadium', icon: 'return-up-back' },
    { direction: 'Follow the path along the route to the elevator', icon: 'arrow-up' },
    { direction: 'Take the elevator down to the ground floor', icon: 'arrow-down' },
    { direction: 'Turn left after leaving the elevator', icon: 'return-up-back' },
    { direction: 'Head straight along the path right of Pauley Pavilion', icon: 'arrow-up' },
    { direction: 'Turn left when Pauley Pavilion ends', icon: 'return-up-back' },
    { direction: 'Keep straight and then turn right onto Bruin Walk', icon: 'return-up-forward' },
    { direction: 'Turn left opposite to Kerckhoff Hall', icon: 'return-up-back' },
    { direction: 'Go straight and turn right to take the accessible path, going towards Boelter Hall', icon: 'return-up-forward' },
    { direction: 'Go straight past the tables outside Kerckhoff Hall', icon: 'arrow-up' },
    { direction: 'Turn left onto the diagonal path cutting through the grass', icon: 'return-up-back' },
    { direction: 'Cross the street at the crosswalk', icon: 'arrow-up' },
    { direction: 'Take the shortcut through the Mathematical Sciences tunnel', icon: 'arrow-up' },
    { direction: 'Go directly towards Young Hall', icon: 'arrow-up' },
    { direction: 'Use the accessible ramp towards CS50', icon: 'return-up-forward' },
    { direction: 'You have arrived', icon: 'checkmark' },
  ]

  return (
    <FlatList
      data={(isYoung) ? CrosswalkToYoung : CrosswalkToDodd}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={{ paddingRight: 20, width: 325, fontFamily: 'PalanquinDark_400Regular' }}>{item.direction}</Text>
          <Ionicons name={item.icon} size={25} color="black" />
        </View>
      )}
    />
  )
}

const { width } = Dimensions.get("window")

const MapScreen = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    PalanquinDark_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }


  scale = new Animated.Value(1)
  onZoomEventFunction = Animated.event(
    [{
      nativeEvent: { scale: this.scale }
    }],
    {
      useNativeDriver: true
    }
  )

  OnZoomStateChangeFunction = (event) => {
    if (event.nativeEvent.oldState == State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true
      }).start()
    }
  }

  const { destination } = route.params;

  let isYoung = false;

  if (destination.search('odd') == -1) {
    isYoung = true;
  }

  const today = new Date();
  const offset = (isYoung) ? 30 : 23;
  today.setMinutes(today.getMinutes() + offset);
  const ETAwithSeconds = today.toLocaleTimeString('en-US').split(' ');
  const ETA = ETAwithSeconds[0].slice(0, -3) + " " + ETAwithSeconds[1];

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.logo} source={logo} />
        <PinchGestureHandler
          onGestureEvent={this.onZoomEventFunction}
          onHandlerStateChange={this.onZoomStateChangeFunction}
        >
          <Animated.Image style={{
            width: width,
            height: 200, transform: [{ scale: this.scale }],
            resizeMode: 'contain',
            borderRadius: 18,
          }}
            source={(isYoung) ? Young : Dodd} />
        </PinchGestureHandler>
      </View>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 30, fontFamily: 'PalanquinDark_400Regular' }}>ETA: {ETA}</Text>
      <Directions isYoung={isYoung} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87cefa',
    alignItems: 'center',
    justifyContent: "space-between",
    textAlignVertical: 'center'
  },
  map_style: {
    width: 500,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 18,
  },
  item: {
    padding: 20,
    flexDirection: 'row',
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  }
});

export default MapScreen;
