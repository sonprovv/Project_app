import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
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
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginHorizontal: 15,
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../../assets/logo/back.png")}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>

                <Text
                    style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "bold",
                    }}
                >
                    {name}
                </Text>
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
            <Text
                style={{
                    paddingVertical: 10,
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#fff",
                    marginHorizontal: 15,
                }}
            >
                Suggested for you
            </Text>
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
                                      <View
                                          style={{
                                              width: 160,
                                              height: 200,
                                              margin: 3,
                                              justifyContent: "center",
                                              alignItems: "center",
                                              borderWidth: 0.5,
                                              borderColor:
                                                  "rgba(255, 255, 255, 0.15)",
                                              borderRadius: 2,
                                              position: "relative",
                                          }}
                                      >
                                          <TouchableOpacity
                                              style={{
                                                  position: "absolute",
                                                  top: 10,
                                                  right: 10,
                                              }}
                                              onPress={() => setClose(true)}
                                          >
                                              <AntDesign
                                                  name="close"
                                                  style={{
                                                      fontSize: 20,
                                                      color: "#fff",
                                                      opacity: 0.5,
                                                  }}
                                              />
                                          </TouchableOpacity>
                                          <Image
                                              source={data.profileImage}
                                              style={{
                                                  width: 80,
                                                  height: 80,
                                                  borderRadius: 99,
                                                  margin: 10,
                                              }}
                                          />
                                          <Text
                                              style={{
                                                  color: "#fff",
                                                  fontWeight: "bold",
                                                  fontSize: 16,
                                              }}
                                          >
                                              {data.name}
                                          </Text>
                                          <Text
                                              style={{
                                                  color: "#fff",
                                                  fontSize: 12,
                                              }}
                                          >
                                              {data.accountName}
                                          </Text>
                                          <TouchableOpacity
                                              style={{
                                                  width: "80%",
                                                  paddingVertical: 10,
                                              }}
                                              onPress={() => setIsFollow(!isFollow)}
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
