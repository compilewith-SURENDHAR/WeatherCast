import React, { useEffect, useState } from 'react';
import {
    FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const data = [
    { key: '1', value: 'city' },
    { key: '2', value: 'feels like' },
    { key: '3', value: 'wind speed' },
    { key: '4', value: 'humidity' },
    { key: '5', value: 'pressure' },
    { key: '6', value: 'desc' },
  ];

const CurrentWeather = ({navigation, route}) =>{
  
  const {city} = route.params
  const [WeatherData, setWeatherData] = useState(null)
  const temp = (`${WeatherData?.main?.feels_like}` - 273.15).toFixed(2)
  const min =(`${WeatherData?.main?.temp_min} ` - 273.15).toFixed(2)
  const max = (`${WeatherData?.main?.temp_max} ` - 273.15).toFixed(2)
  const curTemp = (`${WeatherData?.main?.temp} ` - 273.15).toFixed(2)

  const renderWeatherInfo = {
    '1': `${WeatherData?.name}`,
    '2': `${temp}°C`, // You can add logic to handle precipitation here
    '3': `${WeatherData?.wind?.speed} m/s`,
    '4': `${WeatherData?.main?.humidity}%`,
    '5': `${WeatherData?.main?.pressure} hPa`,
    '6': `${WeatherData?.weather?.[0]?.description}`,
  };

    const renderItem = ({ item }) => {
        return (
        <View style={styles.box}>
            <Text style={styles.infoHeader}>{item.value}</Text>
            <Text style={styles.info}>{renderWeatherInfo[item.key]}</Text>
        </View>);
      }

    const backButton = () => {
      navigation.navigate('Home')
    }

    const fetchData = async() => {
      const API_KEY = '109f4964800b1a97a0894a68887dfc1c'
      const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      const response = await fetch(api_url)
      
      const data = await response.json();
         // Set weather data received from the API
      setWeatherData(data)
    }

    useEffect( () =>{
      fetchData()
    }, [city])
    console.log(WeatherData)

  return(
    <View style={styles.container}>
      <Text style={styles.currentTemp}>{curTemp} °C</Text>
      <View style={styles.minMaxTemp}>
        <View style={styles.minMaxBox}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>min</Text>
            <Text style={styles.Texts}>{min} °C</Text>
        </View>
        <View style={styles.minMaxBox}>
            <Text style={{ fontSize: 18,fontWeight: 'bold' }}>max</Text>
            <Text style={styles.Texts}>{max} °C</Text>
        </View>
      </View>
      <View style={styles.grid}>
        <FlatList
            data={data}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.navbutton} onPress={backButton}>
          <Text style={styles.buttonText}>back</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navbutton}>
          <Text style={styles.buttonText}>more</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default CurrentWeather

const styles = StyleSheet.create(
  {
    container : {
      height : '100%',
      backgroundColor: '#083D56',
      padding: 15,
    },
    currentTemp : {
        textAlign: 'center',
        fontSize: 45,
        fontWeight: '900',
        color: 'black'
        
    },
    minMaxTemp : {
        flexDirection: 'row',
        padding: 10,
        justifyContent:'center'
    },
    minMaxBox : {
        padding: 5,
        margin: 10,
        borderBottomWidth: 4,
        borderRadius: 14,
        height:85,
        //aspectRatio: 1.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    grid : {
        justifyContent: 'center',
        alignItems : 'center',
        margin: 10
    },
    box : {
        height: 130,
        margin: 7,
        aspectRatio: 1,
        borderWidth: 3,
        borderRadius: 17,
        padding: 8,
        alignItems: 'center',
        backgroundColor: '#161A30'
    },
    buttonContainer : {
      flexDirection : 'row',
      margin: 15,
      padding : 10,
      justifyContent: 'space-between'
    },
    navbutton : {
      borderWidth: 3,
      borderRadius: 16,
      borderColor: '#3081D0',
      padding: 10,
      height: 50,
      aspectRatio: 1.75,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText : {
      fontSize: 20,
      fontWeight: '900',
      color: '#3081D0'
    },
    info : {
      color: '#3081D0',
      fontSize: 22,
      fontStyle: 'italic'
    },
    infoHeader : {
      fontWeight: '600',
      fontSize: 18,
      color: 'white',
      borderBottomWidth: 3,
      borderColor: 'white',
      marginBottom: 12
    },
    Texts : {
      fontSize: 25,
      fontWeight: '900'
    }

  }
)