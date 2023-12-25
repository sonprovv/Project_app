import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
import { POSTS } from "../data/post";
import BottomTabs1 from "../components/home/BottomTabs";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
});

export default HomeScreen;
