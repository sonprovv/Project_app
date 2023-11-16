import { StatusBar, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity,SafeAreaView } from 'react-native'

import React, { useState, useRef } from 'react'
import { Camera } from 'expo-camera'


const CameraPictureShot = ({navigation}) => {
  const cameraRef = useRef(null);
  const [image, setImage] = useState();

  const takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);

      // Lưu ảnh vào bộ nhớ thiết bị
      MediaCapture.saveToCameraRoll(data.uri, 'photo')
        .then((response) => {
          console.log('Saved to camera roll:', response);
        })
        .catch((error) => {
          console.error('Error saving to camera roll:', error);
        });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.camera}>
        <Camera
          style={{ flex: 1 }}
          ref={cameraRef}
          type={Camera.Constants.Type.front}
          autoFocus={Camera.Constants.AutoFocus.on}
        >
          <View style={styles.topbar}>
            <Image
              style={{ position: 'absolute', left: 0 }}
              source={require('../assets/image/Settings.png')}
            />
            <TouchableOpacity style={{ position: 'absolute', right: 0 }} onPress={() => navigation.goBack()}>

            <Image
              
              source={require('../assets/image/Back.png')}
            />
            </TouchableOpacity>
          </View>

          <View style={styles.takecamera}>
            <Image
              source={require('../assets/image/Rectangle3.png')}
            />
            <Image
              source={require('../assets/image/Light.png')}
            />
            <TouchableOpacity onPress={takePicture}>
              <Image source={require('../assets/image/ShotButton.png')} />
            </TouchableOpacity>
            <Image
              source={require('../assets/image/ChangeCamera.png')}
            />
            <Image
              source={require('../assets/image/FaceMask.png')}
            />
          </View>
        </Camera>
      </View>

      <View style={styles.bottombar}>
        <ScrollView horizontal >
          <Text style={{ color: '#B2B2B2', marginLeft: 15, marginLeft: 180 }}>TYPE</Text>
          <Text style={{ color: '#B2B2B2', marginLeft: 15 }}>LIVE</Text>
          <Text style={{ color: '#B2B2B2', marginLeft: 15, color: '#FFFFFF' }}>NORMAL</Text>
          <Text style={{ color: '#B2B2B2', marginLeft: 15 }}>BOOMERANG</Text>
          <Text style={{ color: '#B2B2B2', marginLeft: 15 }}>NIGHTMODE</Text>
          <Text style={{ color: '#B2B2B2', marginLeft: 15 }}>PORTRAIT</Text>
          <Text style={{ color: '#B2B2B2', marginLeft: 15 }}>MONOCHROME</Text>
          <Text style={{ color: '#B2B2B2', marginLeft: 15 }}>MACRO</Text>
          <Text style={{ color: '#B2B2B2', marginLeft: 15, marginRight: 185 }}>SUPER</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  topbar: {
    height: 52,
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
    marginHorizontal: 20
  },
  camera: {
    flex: 1,
  },
  takecamera: {
    width: '100%',
    height: 125,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 25,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottombar: {
    width: '100%',
    height: 101,
    paddingTop: 25
  }
})
export default CameraPictureShot