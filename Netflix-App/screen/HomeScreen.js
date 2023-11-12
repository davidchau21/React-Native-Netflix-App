import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Headers from '../components/Headers'
import TrendingComponent from '../components/TrendingComponent';
import MoviesRows from '../components/MoviesRows';

const HomeScreen = () => {
  console.log('Rendering HomeScreen');
  return (
    <ScrollView style={{flex:1,backgroundColor:"black"}}>
      <Headers/>

      <TrendingComponent/>

      <MoviesRows/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})