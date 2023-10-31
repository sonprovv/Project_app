import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const NotificationScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    borderBottomWidth: 0.5,
                    borderBottomColor: "#ffffff",
                    padding: 10,
                    color: '#fff'
                }}
            >
                NotificationScreen
            </Text>
        </SafeAreaView>
    );
};

export default NotificationScreen;
