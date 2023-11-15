import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { ProfileBody, ProfileButtons } from "../components/profile/ProfileBody";
import { ScrollView } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import BottomTab from "../components/profile/BottomTab";

const ProfileScreen = ({navigation}) => {
    let circles = [];
    let numberOfCircle = 10;
    for (let index = 0; index < numberOfCircle; index++) {
        circles.push(
            <View key={index}>
                {index === 0 ? (
                    <View style={styles.addCollection}>
                        <Entypo
                            name="plus"
                            style={{ fontSize: 40, color: "#fff" }}
                        />
                    </View>
                ) : (
                    <View style={styles.collection}></View>
                )}
            </View>
        );
    }
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
            <ProfileButtons
                id={0}
                name="Nguyễn Hiếu"
                accountName="hieeus.ngx"
                profileImage={require("../assets/user/user1.jpeg")}
            />
            <View style={{ marginTop: 15 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {circles}
                </ScrollView>
            </View>
            <BottomTab />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    addCollection: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 1,
        opacity: 0.7,
        borderColor: "#fff",
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    collection: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 1,
        opacity: 0.1,
        borderColor: "#fff",
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
});

export default ProfileScreen;
