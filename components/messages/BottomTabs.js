import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const BottomTabs = () => {
    return (
        <TouchableOpacity style={styles.wrapper}>
            <View style={styles.container}>
                <Image
                    source={require("../../assets/logo/camera-bottom-chat.png")}
                    style={styles.image}
                />
                <Text style={{ color: "#3897F0" }}>Camera</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: "100%",
        bottom: "3%",
        padding: 15,
        zIndex: 1,
        backgroundColor: "#121212",
    },
    image: {},
    container: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
    },
});
export default BottomTabs;
