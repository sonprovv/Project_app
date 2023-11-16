import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{marginTop: 240}}
        source={require('../assets/image/InstagramLogo.png')}
      />
      <Image
        style={{marginTop: 52}}
        source={require('../assets/image/Oval.png')}
      />
      <Text style={styles.usertext}>jacob_w</Text>
      <TouchableOpacity style={styles.login}>
        <Text style={{color: '#FFFFFF',fontWeight:'bold'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: 30}}>
        <Text style={{color:'#3797EF', fontWeight:'bold'}}>Switch accounts</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.register}>
        <Text style={{color:'#818181',marginTop:18}}>Don’t have an account?
          <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>  Sign up.</Text>
        </Text>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems:'center'
    },
    usertext:{
      color:'white',
      marginTop:13,
      fontWeight:'bold'
    },
    login:{
      marginTop:12,
      width:307,
      height:44,
      backgroundColor: '#3797EF',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:4,
    },
    register:{
      width: '100%',
      position:'absolute',
      bottom: 30,
      borderWidth: 1,
      borderTopColor:'#262626',
      alignItems:'center'
    }
  })

export default LoginScreen