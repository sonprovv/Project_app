import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image } from "react-native";

const BottomTab = () => {
    const Tab = createMaterialTopTabNavigator();

    let squares = [];
    let numberOfSquare = 7;

    for (let index = 0; index < numberOfSquare; index++) {
        squares.push(
            <View key={index}>
                <View style={styles.image}></View>
            </View>
        );
    }
    const Posts = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, backgroundColor: "black" }}
            >
                <View style={styles.squares}>{squares}</View>
            </ScrollView>
        );
    };
    const Tags = () => {
        return (
            <View style={styles.container}>
                <View style={styles.iconCamera}>
                    <Image
                        source={require("../../assets/logo/camera.png")}
                        style={{ width: 60, height: 60 }}
                    />
                </View>
                <Text style={styles.desc}>Chưa có bài viết</Text>
            </View>
        );
    };
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#000",
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "white",
                },
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    if (route.name === "Posts") {
                        iconName = focused
                            ? require("../../assets/logo/grid-tab.png")
                            : require("../../assets/logo/grid-tab-onPressOut.png");
                    } else if (route.name === "Tags") {
                        iconName = focused
                            ? require("../../assets/logo/tags-tab.png")
                            : require("../../assets/logo/tags-tab-onPressOut.png");
                    }
                    return <Image source={iconName} />;
                },
            })}
        >
            <Tab.Screen name="Posts" component={Posts} />
            <Tab.Screen name="Tags" component={Tags} />
        </Tab.Navigator>
    );
};

export default BottomTab;

const styles = StyleSheet.create({
    image: {
        width: 142,
        height: 150,
        backgroundColor: "white",
        marginVertical: 1,
        opacity: 0.1,
    },
    squares: {
        flexWrap: "wrap",
        flexDirection: "row",
        paddingVertical: 5,
        justifyContent: "space-between",
    },
    container: {
        backgroundColor: "#000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    iconCamera: {
        padding: 10,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 100,
        margin: 20,
    },
    desc: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
});
