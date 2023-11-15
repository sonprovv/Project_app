import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { ProfileBody, ProfileButtons } from "../profile/ProfileBody";
import { FRIENDPROFILEDATA } from "../../data/friendProfileData";
import AntDesign from "react-native-vector-icons/AntDesign";

const FriendProfile = ({ route, navigation }) => {
    const { name, profileImage, follow, post, followers, following } =
        route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000", padding: 10 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../../assets/logo/back.png")}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>

                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity>
                    <Image source={require("../../assets/logo/menu.png")} />
                </TouchableOpacity>
            </View>
            <ProfileBody
                name={name}
                profileImage={profileImage}
                post={post}
                followers={followers}
                following={following}
            />
            <ProfileButtons id={1} />
            <Text style={styles.title}>Suggested for you</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 10 }}
            >
                {name === FriendProfile.name
                    ? null
                    : FRIENDPROFILEDATA.map((data, index) => {
                          const [isFollow, setIsFollow] = useState(false);
                          const [close, setClose] = useState(false);
                          return (
                              <View key={index}>
                                  {data.name === name || close ? null : (
                                      <View style={styles.section}>
                                          <TouchableOpacity
                                              style={styles.locationClose}
                                              onPress={() => setClose(true)}
                                          >
                                              <AntDesign
                                                  name="close"
                                                  style={styles.btnClose}
                                              />
                                          </TouchableOpacity>
                                          <Image
                                              source={data.profileImage}
                                              style={styles.profileImage}
                                          />
                                          <Text style={styles.suggestName}>
                                              {data.name}
                                          </Text>
                                          <Text
                                              style={styles.suggestAccountName}
                                          >
                                              {data.accountName}
                                          </Text>
                                          <TouchableOpacity
                                              style={{
                                                  width: "80%",
                                                  paddingVertical: 10,
                                              }}
                                              onPress={() =>
                                                  setIsFollow(!isFollow)
                                              }
                                          >
                                              <View
                                                  style={{
                                                      width: "100%",
                                                      height: 30,
                                                      borderRadius: 5,
                                                      backgroundColor: isFollow
                                                          ? null
                                                          : "#3493d9",
                                                      borderWidth: isFollow
                                                          ? 1
                                                          : 0,
                                                      borderColor:
                                                          "rgba(255, 255, 255, 0.15)",
                                                      justifyContent: "center",
                                                      alignItems: "center",
                                                  }}
                                              >
                                                  <Text
                                                      style={{ color: "#fff" }}
                                                  >
                                                      {isFollow
                                                          ? "Following"
                                                          : "Follow"}
                                                  </Text>
                                              </View>
                                          </TouchableOpacity>
                                      </View>
                                  )}
                              </View>
                          );
                      })}
            </ScrollView>
        </SafeAreaView>
    );
};

export default FriendProfile;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 15,
    },
    name: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    title: {
        paddingVertical: 10,
        fontWeight: "bold",
        fontSize: 15,
        color: "#fff",
        marginHorizontal: 15,
    },
    section: {
        width: 160,
        height: 200,
        margin: 3,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 2,
        position: "relative",
    },
    locationClose: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    btnClose: {
        fontSize: 20,
        color: "#fff",
        opacity: 0.5,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 99,
        margin: 10,
    },
    suggestName: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    suggestAccountName: {
        color: "#fff",
        fontSize: 12,
    },
});
