import { Image, StatusBar } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import SearchScreen from "./screens/SearchScreen";
import NewPostScreen from "./screens/NewPostScreen";
import NotificationScreen from "./screens/NotificationScreen";
import Ionic from "react-native-vector-icons/Ionicons";

const home_icon = require("./assets/logo/home.png");

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MyTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: 65,
                    backgroundColor: "#000",
                    paddingTop: 10,
                },

                tabBarIcon: ({ focused}) => {
                    if (route.name === "Home") {
                        source = focused
                            ? require("./assets/logo/home.png")
                            : require("./assets/logo/home-outline.png");
                    } else if (route.name === "Search") {
                        source = focused
                            ? require("./assets/logo/search.png")
                            : require("./assets/logo/search-outline.png");
                    } else if (route.name === "Add") {
                        source = require("./assets/logo/post.png");
                    } else if (route.name === "Notification") {
                        source = focused
                            ? require("./assets/logo/heart.png")
                            : require("./assets/logo/heart-outline.png");
                    } else if (route.name === "Profile") {
                        source = focused
                            ? require("./assets/logo/profile.png")
                            : require("./assets/logo/profile-outline.png")
                    }
                    return <Image source={source} style={{width: 30}}/>;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Add" component={NewPostScreen} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="MyTab" component={MyTab} />
                <Stack.Screen
                    name="MessagesScreen"
                    component={MessagesScreen}
                />
            </Stack.Navigator>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
        </NavigationContainer>
    );
};

export default SignedInStack;
