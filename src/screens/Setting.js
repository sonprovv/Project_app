import React, { useEffect, useState, useRef } from 'react';
import {
    ScrollView,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Setting = () => {
    useEffect(() => {
        StatusBar.setBackgroundColor('#81d773'); // thay doi mau taskbar
    }, []);

    return (
        <SafeAreaView
            style={{
                flex: 100
            }}
        >
            <View
                style={{
                    flex: 8,
                    flexDirection: 'row',
                }}
            >
                <Text>Setting</Text>
                <TouchableOpacity
                    onPress={() => {

                    }}
                >
                    <Image source={require("../icon/setting.png")} />
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <View>
                        <Image source={require("../icon/asa.png")} />
                        <Text>Enami Asa</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Image source={require("../icon/setting.png")} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {

                    }}
                >
                    <Image source={require("../icon/setting.png")} />
                    <Text>Create a new account</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Image source={require("../icon/setting.png")} />
                        <Text>Goods</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Image source={require("../icon/setting.png")} />
                        <Text>Purchased goods</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Image source={require("../icon/setting.png")} />
                        <Text>Being transported</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Image source={require("../icon/setting.png")} />
                        <Text>Favorite</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {

                    }}>
                    <Text>More</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={()=>{

                    }}
                >
                    <Image source={require("../icon/setting.png")}/>
                    <Text>Setting & Access</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{

                    }}
                >
                    <Image source={require("../icon/setting.png")}/>
                    <Text>Support & Help</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{

                    }}
                >
                    <Image source={require("../icon/setting.png")}/>
                    <Text>Comments</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{

                }}>
                    <Text>Sign out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Setting;