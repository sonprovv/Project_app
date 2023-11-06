import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import TopBar from "../components/profile/TopBar";
import { ProfileBody, ProfileButtons } from "../components/profile/ProfileBody";

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ProfileBody
                name="Nguyễn Hiếu"
                accountName="hieeus.ngx"
                profileImage={require("../assets/user/user1.jpeg")}
                followers="20"
                following="18"
                post="0"
            />
            <ProfileButtons id={0} name="Nguyễn Hiếu"
                accountName="hieeus.ngx"
                profileImage={require("../assets/user/user1.jpeg")} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
});

export default ProfileScreen;
