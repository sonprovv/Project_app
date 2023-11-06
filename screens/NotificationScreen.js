import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { FRIENDPROFILEDATA } from "../data/friendProfileData";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const NotificationScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    padding: 10,
                    color: "#fff",
                }}
            >
                Activity
            </Text>
            <Divider />
            <ScrollView style={{ margin: 10 }}>
                <Text
                    style={{ fontWeight: "600", color: "#fff", fontSize: 15 }}
                >
                    New
                </Text>
                {FRIENDPROFILEDATA.slice(2, 4).map((data, index) => {
                    const [follow, setFollow] = useState(data.follow);
                    return (
                        <View key={index} style={{ width: "100%" }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    paddingVertical: 20,
                                    width: "100%",
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        maxWidth: "64%",
                                    }}
                                >
                                    <Image
                                        source={data.profileImage}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 100,
                                            marginRight: 10,
                                        }}
                                    />
                                    <Text
                                        style={{ fontSize: 15, color: "#fff" }}
                                        onPress={() => navigation.push('FriendProfile', {
                                            name: data.name,
                                            profileImage: data.profileImage,
                                            follow: data.follow,
                                            post: data.posts,
                                            followers: data.followers,
                                            following: data.following
                                        })}
                                    >
                                        <Text style={{ fontWeight: "bold" }}>
                                            {data.name}
                                        </Text>{" "}
                                        , who you might know, is on instagram
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setFollow(!follow)}
                                    style={{ width: follow ? 72 : 68 }}
                                >
                                    <View
                                        style={{
                                            width: "100%",
                                            height: 30,
                                            borderRadius: 5,
                                            backgroundColor: follow
                                                ? null
                                                : "#3493d9",
                                            borderWidth: follow ? 1 : 0,
                                            borderColor:
                                                "rgba(255, 255, 255, 0.15)",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Text style={{ color: "#fff" }}>
                                            {follow ? "Following" : "Follow"}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })}
                <Text
                    style={{
                        color: "#fff",
                        fontWeight: "bold",
                        paddingVertical: 10,
                    }}
                >
                    Suggestions for you
                </Text>
                {FRIENDPROFILEDATA.slice(5.12).map((data, index) => {
                    const [follow, setFollow] = useState(data.follow);
                    const [close, setClose] = useState(false);
                    return (
                        <View key={index}>
                            {close ? null : (
                                <View
                                    style={{
                                        paddingVertical: 10,
                                        flexDirection: "row",
                                        width: "100%",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <View>
                                        <TouchableOpacity
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                maxWidth: "64%",
                                            }}
                                            
                                        onPress={() => navigation.push('FriendProfile', {
                                            name: data.name,
                                            profileImage: data.profileImage,
                                            follow: data.follow,
                                            post: data.posts,
                                            followers: data.followers,
                                            following: data.following
                                        })}
                                        >
                                            <Image
                                                source={data.profileImage}
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: 99,
                                                    marginRight: 10,
                                                }}
                                            />
                                            <View style={{ width: "100%" }}>
                                                <Text
                                                    style={{
                                                        color: "#fff",
                                                        fontSize: 15,
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {data.name}
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: "#fff",
                                                        fontSize: 13,
                                                        opacity: 0.5,
                                                    }}
                                                >
                                                    {data.accountName}
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: "#fff",
                                                        fontSize: 13,
                                                        opacity: 0.5,
                                                    }}
                                                >
                                                    Suggested for you
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        {follow ? (
                                            <TouchableOpacity
                                                style={{
                                                    width: follow ? 90 : 68,
                                                }}
                                                onPress={() =>
                                                    setFollow(!follow)
                                                }
                                            >
                                                <View
                                                    style={{
                                                        width: "100%",
                                                        height: 30,
                                                        borderRadius: 5,
                                                        backgroundColor: follow
                                                            ? null
                                                            : "#3493d9",
                                                        borderWidth: follow
                                                            ? 1
                                                            : 0,
                                                        borderColor:
                                                            "rgba(255, 255, 255, 0.15)",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            color: "#fff",
                                                        }}
                                                    >
                                                        {follow
                                                            ? "Following"
                                                            : "Follow"}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        ) : (
                                            <>
                                                <TouchableOpacity
                                                    style={{
                                                        width: follow ? 90 : 68,
                                                    }}
                                                    onPress={() =>
                                                        setFollow(!follow)
                                                    }
                                                >
                                                    <View
                                                        style={{
                                                            width: "100%",
                                                            height: 30,
                                                            borderRadius: 5,
                                                            backgroundColor:
                                                                follow
                                                                    ? null
                                                                    : "#3493d9",
                                                            borderWidth: follow
                                                                ? 1
                                                                : 0,
                                                            borderColor:
                                                                "rgba(255, 255, 255, 0.15)",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                        }}
                                                    >
                                                        <Text
                                                            style={{
                                                                color: "#fff",
                                                            }}
                                                        >
                                                            {follow
                                                                ? "Following"
                                                                : "Follow"}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{
                                                        paddingHorizontal: 10,
                                                    }}
                                                    onPress={() =>
                                                        setClose(true)
                                                    }
                                                >
                                                    <AntDesign
                                                        name="close"
                                                        style={{
                                                            fontSize: 15,
                                                            color: "#fff",
                                                            opacity: 0.8,
                                                        }}
                                                    />
                                                </TouchableOpacity>
                                            </>
                                        )}
                                    </View>
                                </View>
                            )}
                        </View>
                    );
                })}
                <TouchableOpacity
                    style={{ alignItems: "center", marginTop: 10 }}
                >
                    <Text style={{ color: "#3493d9" }}>
                        See All Suggestions
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NotificationScreen;
