import React, { useState } from 'react';
import {
  Button,
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

const Home = ({navigation}) =>{
    const [City, setCity] = useState('')

    const handleSearch = () => {
        navigation.navigate('CurrentWeather', { city: City });
    }

    const handlePressOutside = () => {
        Keyboard.dismiss();
      };

    return(
    <TouchableWithoutFeedback onPress={handlePressOutside}>
    <View style={styles.container}>
        <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/010/989/785/original/sunny-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png'}} 
            style={styles.logo}/>
        <TextInput
        style ={styles.searchbar} placeholder='enter the city'
        value={City} onChangeText={setCity}
        />
        <Button title="Search" onPress={handleSearch} />
    </View>
    </TouchableWithoutFeedback>
    )
}

export default Home

const styles = StyleSheet.create(
  {
    container : {
      height : '100%',
      backgroundColor: '#161A30',
      justifyContent: 'center',
    },
    searchbar : {
        borderWidth: 4,
        borderColor: '#3081D0',
        borderRadius: 12,
        margin: 10,
        padding: 15,
        fontSize: 23,
        backgroundColor: 'white',
        textAlign: 'center'
    },
    logo : {
        height : 195,
        aspectRatio: 1,
        marginLeft: 99
    }
  }
)