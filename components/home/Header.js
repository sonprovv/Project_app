import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={[styles.icon, styles.iconcamera]}
                    source={require("../../assets/logo/camera.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={require("../../assets/logo/instagram-logo.png")}
                />
            </TouchableOpacity>
            <View style={styles.containerRight}>
            <TouchableOpacity>
                <Image
                    style={styles.icon}
                    source={require("../../assets/logo/IGTV.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={[styles.icon, styles.iconmes]}
                    source={require("../../assets/logo/Messanger.png")}
                />
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerRight:{
        flexDirection: 'row',
        alignItems: 'center',

    },
    icon:{
        width: 24,
        height: 24,   
    },
    iconmes:{
        marginLeft: 18,
    },
    iconcamera:{
        marginRight: 42,
    }
});

export default Header;
