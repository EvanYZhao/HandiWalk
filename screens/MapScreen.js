import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Map from '../assets/Map.png';

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style= {{alignItems: 'center'}}>
        <Text style={{marginTop: 20}}>HandiWalk</Text>
        <Image style={styles.map_style}source={Map}/>
      </View>
      <View>
       <Text>TEST</Text>    
       <Text>HELLO</Text>  
      </View>
      
      <Button
        title="Find a new route"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ed',
    alignItems: 'center',
    justifyContent: "space-between",
    textAlignVertical: 'center'
  },
  phillip: {
    flex:1,
    backgroundColor: 'red',
  },
  map_style: {
    width: 360,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 18,
  }
});

export default MapScreen