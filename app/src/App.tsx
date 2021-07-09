import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabsScreen from './screens/App';

//do a get request to the server 

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor="black" />
      <TabsScreen/>
    </View>
  );
}

