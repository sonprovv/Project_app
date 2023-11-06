import { View, Text, ScrollView } from "react-native";
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
                <View
                    style={{
                        width: 142,
                        height: 150,
                        backgroundColor: "white",
                        marginVertical: 1,
                        opacity: 0.1,
                    }}
                >
                </View>
            </View>
        );
    }
    const Posts = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, backgroundColor: 'black' }}
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        paddingVertical: 5,
                        justifyContent: "space-between",
                    }}
                >
                    {squares}
                </View>
                
            </ScrollView>
        );
    };
    const Tags = () => {
        return (
            <View style={{ backgroundColor: "#000", flex: 1 }}>
                <Text style={{ color: "#fff" }}>Tags</Text>
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
                            : require("../../assets/logo/grid-tab.png");
                    } else if (route.name === "Tags") {
                        iconName = focused
                            ? require("../../assets/logo/tags-tab.png")
                            : require("../../assets/logo/tags-tab.png");
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
