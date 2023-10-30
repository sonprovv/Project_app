import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/messages/Header";
import Search from "../components/messages/Search";
import Chat from "../components/messages/Chat";
import BottomTabs from "../components/messages/BottomTabs";

const MessagesScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Search />
            <Chat />
            <BottomTabs />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
});

export default MessagesScreen;
