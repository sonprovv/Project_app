import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

export const bottomTabIcons = [
    {
        name: "Home",
        active: "https://img.icons8.com/fluency-systems-regular/48/ffffff/home--v1.png",
        inactive:
            "https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png",
    },
    {
        name: "Search",
        active: "https://img.icons8.com/ios/50/ffffff/search--v1.png",
        inactive: "https://img.icons8.com/ios-filled/50/ffffff/search--v1.png",
    },
    {
        name: "Add",
        active: "https://img.icons8.com/fluency-systems-regular/48/ffffff/plus-2-math.png",
        inactive:
            "https://img.icons8.com/ios-glyphs/30/ffffff/filled-plus-2-math.png",
    },
    {
        name: "Notification",
        active: "https://img.icons8.com/material-outlined/48/ffffff/like--v1.png",
        inactive: "https://img.icons8.com/material-rounded/24/ffffff/like--v1.png",
    },
    {
        name: "Profile",
        active: "https://img.icons8.com/material-outlined/48/ffffff/user-male-circle.png",
        inactive:
            "https://img.icons8.com/material/24/ffffff/user-male-circle--v1.png",
    },
];

const BottomTabs = ({ icons }) => {

    const [activeTab, setActiveTab] = useState("Home");

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)} >
            <Image
                source={{
                    uri: activeTab == icon.name ? icon.inactive : icon.active,
                }}
                style={styles.icon}
            />
        </TouchableOpacity>
    );
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: "100%",
        bottom: "3%",
        zIndex: 1,
        backgroundColor: "gray",
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "black",
        paddingTop: 6,
    },
    icon: {
        width: 30,
        height: 30,
    },
});

export default BottomTabs;
