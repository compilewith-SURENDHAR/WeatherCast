import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MyStack from './src/Navigation';

const App = () =>{
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create(
  {
    container : {
      height : '100%',
    }
  }
)