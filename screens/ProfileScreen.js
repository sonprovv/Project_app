import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import TopBar from '../components/profile/TopBar'
import Info from '../components/profile/Info'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <Info />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    }
})

export default ProfileScreen