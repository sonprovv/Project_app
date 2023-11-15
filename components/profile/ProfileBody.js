import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import TopBar from "./TopBar";
import { useNavigation } from "@react-navigation/native";

export const ProfileBody = ({
    name,
    accountName,
    profileImage,
    post,
    followers,
    following,
}) => {
    return (
        <View>
            {accountName ? (
                <View>
                    <TopBar accountName={accountName} />
                </View>
            ) : null}
            <View style={styles.info}>
                <View style={{ alignItems: "center" }}>
                    <Image source={profileImage} style={styles.avatar} />
                    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.number}>{post}</Text>
                    <Text style={{ color: "#fff" }}>Posts</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.number}>{followers}</Text>
                    <Text style={{ color: "#fff" }}>Follower</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.number}>{following}</Text>
                    <Text style={{ color: "#fff" }}>Following</Text>
                </View>
            </View>
        </View>
    );
};

export const ProfileButtons = ({ id, name, accountName, profileImage }) => {
    const navigation = useNavigation();
    const [follow, setFollow] = useState(follow);
    return (
        <>
            {id === 0 ? (
                <View>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.push("EditProfile", {
                                name: name,
                                accountName: accountName,
                                profileImage: profileImage,
                            })
                        }
                    >
                        <View style={styles.btnEditProfile}>
                            <Text style={{ color: "#fff", fontWeight: "bold" }}>
                                Edit Profile
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.rowButton}>
                    <TouchableOpacity
                        onPress={() => setFollow(!follow)}
                        style={{ width: "40%" }}
                    >
                        <View
                            style={[
                                styles.btn,
                                {
                                    backgroundColor: follow ? null : "#3493d9",
                                    borderWidth: follow ? 1 : 0,
                                    width: "100%",
                                },
                            ]}
                        >
                            <Text style={{ color: "#fff" }}>
                                {follow ? "Following" : "Follow"}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.btn,
                            {
                                width: "40%",
                                borderWidth:1,
                            },
                        ]}
                    >
                        <Text style={{ color: "#fff" }}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.btn,
                            {
                                width: "8%",
                                borderWidth:1,
                            },
                        ]}
                    >
                        <Image
                            source={require("../../assets/logo/accounts-list.png")}
                        />
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    info: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 20,
    },
    avatar: {
        resizeMode: "cover",
        width: 80,
        height: 80,
        borderRadius: 99,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        paddingVertical: 5,
    },
    number: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    btnEditProfile: {
        width: "100%",
        height: 35,
        borderRadius: 5,
        borderColor: "rgba(255, 255, 255, 0.15)",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    rowButton: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    btn: {
        height: 35,
        borderRadius: 5,
        borderColor: "rgba(255, 255, 255, 0.15)",
        justifyContent: "center",
        alignItems: "center",

    },
});
