import { Image, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import SearchScreen from "./screens/SearchScreen";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import NotificationScreen from "./screens/NotificationScreen";
import FriendProfile from "./components/notification/FriendProfile";
import EditProfile from "./components/profile/EditProfile";
import ProfileScreen from "./screens/ProfileScreen";
import MessagesScreen from "./screens/MessagesScreen";
import CameraPictureShot from "./screens/CameraPictureShot";
import AddImage from "./screens/AddImage";
import MyLive from "./screens/MyLive";

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

                tabBarIcon: ({ focused }) => {
                    if (route.name === "Home") {
                        source = focused
                            ? require("./assets/logo/home.png")
                            : require("./assets/logo/home-outline.png");
                    } else if (route.name === "Search") {
                        source = focused
                            ? require("./assets/logo/search.png")
                            : require("./assets/logo/search-outline.png");
                    } else if (route.name === "Add") {
                        source = focused
                            ? require("./assets/logo/post.png")
                            : require("./assets/logo/post-outline.png");
                    } else if (route.name === "Notification") {
                        source = focused
                            ? require("./assets/logo/heart.png")
                            : require("./assets/logo/heart-outline.png");
                    } else if (route.name === "Profile") {
                        source = focused
                            ? require("./assets/logo/profile.png")
                            : require("./assets/logo/profile-outline.png");
                    }
                    return <Image source={source} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Add" component={AddImage} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

const MyDrawer = () => {
    const Archive = () => {
        return (
            <SafeAreaView>
                <Text>Archive</Text>
            </SafeAreaView>
        )
    }
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Archive" component={Archive} />
        </Drawer.Navigator>
    )
}

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
                <Stack.Screen name="FriendProfile" component={FriendProfile} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="Camera" component={CameraPictureShot} />
                <Stack.Screen name="MyLive" component={MyLive} />
                
            </Stack.Navigator>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
        </NavigationContainer>
    );
};

export default SignedInStack;
