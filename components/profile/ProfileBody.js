import { View, Text, Image, TouchableOpacity } from "react-native";
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
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    paddingVertical: 20,
                }}
            >
                <View style={{ alignItems: "center" }}>
                    <Image
                        source={profileImage}
                        style={{
                            resizeMode: "cover",
                            width: 80,
                            height: 80,
                            borderRadius: 99,
                        }}
                    />
                    <Text
                        style={{
                            color: "#fff",
                            fontWeight: "bold",
                            paddingVertical: 5,
                        }}
                    >
                        {name}
                    </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        {post}
                    </Text>
                    <Text style={{ color: "#fff" }}>Posts</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        {followers}
                    </Text>
                    <Text style={{ color: "#fff" }}>Follower</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        {following}
                    </Text>
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
                        <View
                            style={{
                                width: "100%",
                                height: 35,
                                borderRadius: 5,
                                borderColor: "rgba(255, 255, 255, 0.15)",
                                borderWidth: 1,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ color: "#fff", fontWeight: "bold" }}>
                                Edit Profile
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => setFollow(!follow)}
                        style={{ width: "40%" }}
                    >
                        <View
                            style={{
                                width: "100%",
                                height: 35,
                                borderRadius: 5,
                                backgroundColor: follow ? null : "#3493d9",
                                borderWidth: follow ? 1 : 0,
                                borderColor: "rgba(255, 255, 255, 0.15)",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ color: "#fff" }}>
                                {follow ? "Following" : "Follow"}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: "40%",
                            height: 35,
                            borderWidth: 1,
                            borderColor: "rgba(255, 255, 255, 0.15)",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 5,
                        }}
                    >
                        <Text style={{ color: "#fff" }}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: "8%",
                            height: 35,
                            borderWidth: 1,
                            borderColor: "rgba(255, 255, 255, 0.15)",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 5,
                        }}
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
