import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ () => navigation.goBack()}>
        <Image style={styles.icon} source={require("../../assets/logo/back.png")}/>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: '5'}}>
        <Text style={{color: 'white', fontWeight: "600", fontSize: 16}}>hieeus.ngx</Text>
        <Image source={require('../../assets/logo/accounts-list.png')} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.icon} source={require("../../assets/logo/add.png")}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    }
})
export default Header