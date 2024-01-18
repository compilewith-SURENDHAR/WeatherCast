import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CurrentWeather from './CurrentWeather';
import Home from './Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="CurrentWeather" component={CurrentWeather} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default MyStack