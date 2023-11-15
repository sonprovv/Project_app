import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { FRIENDPROFILEDATA } from "../data/friendProfileData";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { POSTS } from "../data/post";

const NotificationScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Notification</Text>
            <Divider />
            <ScrollView style={{ margin: 10 }}>
                <Text style={styles.newTitle}>New</Text>
                {FRIENDPROFILEDATA.slice(2, 4).map((data, index) => {
                    const [follow, setFollow] = useState(data.follow);
                    return (
                        <View key={index} style={{ width: "100%" }}>
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.content}>
                                    <Image
                                        source={data.profileImage}
                                        style={styles.avatar}
                                    />
                                    <Text
                                        style={styles.name}
                                        onPress={() =>
                                            navigation.push("FriendProfile", {
                                                name: data.name,
                                                profileImage: data.profileImage,
                                                follow: data.follow,
                                                post: data.posts,
                                                followers: data.followers,
                                                following: data.following,
                                            })
                                        }
                                    >
                                        <Text style={{ fontWeight: "bold" }}>
                                            {data.name}
                                        </Text>
                                        , who you might know, is on instagram
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setFollow(!follow)}
                                    style={{ width: follow ? 72 : 68 }}
                                >
                                    <View
                                        style={[
                                            styles.btnFollow,
                                            {
                                                backgroundColor: follow
                                                    ? null
                                                    : "#3493d9",
                                                borderWidth: follow ? 1 : 0,
                                            },
                                        ]}
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
                <Text style={styles.newTitle}>This Week</Text>
                {POSTS.map((post, index) => (
                    <View key={index}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingVertical: 10,
                                }}
                            >
                                <Image
                                    source={post.profile_picture}
                                    style={styles.avatar}
                                />
                                <Text style={styles.name}>
                                    <Text style={{ fontWeight: "bold" }}>
                                        {post.user}
                                    </Text>
                                    , add a new post
                                </Text>
                            </TouchableOpacity>
                            <Image
                                source={{ uri: post.imageURL }}
                                style={{ width: 60, height: 60 }}
                            />
                        </View>
                    </View>
                ))}
                <Text style={styles.suggestionTitle}>Suggestions for you</Text>
                {FRIENDPROFILEDATA.slice(5.12).map((data, index) => {
                    const [follow, setFollow] = useState(data.follow);
                    const [close, setClose] = useState(false);
                    return (
                        <View key={index}>
                            {close ? null : (
                                <View style={styles.row}>
                                    <View>
                                        <TouchableOpacity
                                            style={styles.content}
                                            onPress={() =>
                                                navigation.push(
                                                    "FriendProfile",
                                                    {
                                                        name: data.name,
                                                        profileImage:
                                                            data.profileImage,
                                                        follow: data.follow,
                                                        post: data.posts,
                                                        followers:
                                                            data.followers,
                                                        following:
                                                            data.following,
                                                    }
                                                )
                                            }
                                        >
                                            <Image
                                                source={data.profileImage}
                                                style={styles.avatar}
                                            />
                                            <View style={{ width: "100%" }}>
                                                <Text
                                                    style={[
                                                        styles.name,
                                                        { fontWeight: "bold" },
                                                    ]}
                                                >
                                                    {data.name}
                                                </Text>
                                                <Text
                                                    style={styles.accountName}
                                                >
                                                    {data.accountName}
                                                </Text>
                                                <Text style={styles.desc}>
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
                                                    style={[
                                                        styles.btnFollow,
                                                        {
                                                            backgroundColor:
                                                                follow
                                                                    ? null
                                                                    : "#3493d9",
                                                            borderWidth: follow
                                                                ? 1
                                                                : 0,
                                                        },
                                                    ]}
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
                                                        style={[
                                                            styles.btnFollow,
                                                            {
                                                                backgroundColor:
                                                                    follow
                                                                        ? null
                                                                        : "#3493d9",
                                                                borderWidth:
                                                                    follow
                                                                        ? 1
                                                                        : 0,
                                                            },
                                                        ]}
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
                                                        style={styles.btnClose}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        color: "#fff",
    },
    newTitle: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 15,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        width: "100%",
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10,
    },
    name: {
        fontSize: 15,
        color: "#fff",
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "64%",
    },
    suggestionTitle: {
        color: "#fff",
        fontWeight: "bold",
        paddingVertical: 10,
    },
    btnFollow: {
        width: "100%",
        height: 30,
        borderRadius: 5,
        borderColor: "rgba(255, 255, 255, 0.15)",
        justifyContent: "center",
        alignItems: "center",
    },
    accountName: {
        color: "#fff",
        fontSize: 13,
        opacity: 0.5,
    },
    desc: {
        color: "#fff",
        fontSize: 13,
        opacity: 0.5,
    },
    btnClose: {
        fontSize: 15,
        color: "#fff",
        opacity: 0.8,
    },
});

export default NotificationScreen;
