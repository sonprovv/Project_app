import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const TopBar = ({ accountName }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: 21 }}></View>
            <TouchableOpacity style={styles.profileName}>
                <Text style={styles.name}>{accountName}</Text>
                <Image
                    source={require("../../assets/logo/accounts-list.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("../../assets/logo/menu.png")} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        alignItems: "center",
    },
    profileName: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    name: {
        color: "#F9F9F9",
        fontWeight: "600",
        fontSize: 16,
    },
});

export default TopBar;
