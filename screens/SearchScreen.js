import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Dimensions,
    StatusBar,
    Image,
} from "react-native";
import React, { useState } from "react";
import SearchBox from "../components/search/SearchBox";
import TopicSearch from "../components/search/TopicSearch";
import SearchContent from "../components/search/SearchContent";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import { StyleSheet } from "react-native";

const SearchScreen = () => {
    const [image, setImage] = useState(null);

    const getData = (data) => {
        setImage(data);
    };

    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SearchBox />
                <TopicSearch />
                <SearchContent data={getData} />
                <TouchableOpacity style={styles.cta}>
                    <AntDesign name="pluscircleo" style={styles.icon_cta} />
                </TouchableOpacity>
            </ScrollView>
            {image ? (
                <View style={styles.box}>
                    <StatusBar backgroundColor="#525252" />
                    <View
                        style={{
                            position: "absolute",
                            top: windowHeight / 6,
                            left: windowWidth / 15,
                            backgroundColor: "#000",
                            width: 370,
                            height: 495,
                            borderRadius: 15,
                            zIndex: 1,
                            // elevation: 50,
                        }}
                    >
                        <View style={styles.headerModal}>
                            <Image source={image} style={styles.userImage} />
                            <View style={{ paddingLeft: 8 }}>
                                <Text style={styles.userName}>hieeus</Text>
                            </View>
                        </View>
                        <Image source={image} style={styles.imageModal} />
                        <View style={styles.footerModal}>
                            <Image
                                source={require("../assets/logo/heart-outline.png")}
                            />
                            <Image
                                source={require("../assets/logo/comment.png")}
                            />
                            <Image
                                source={require("../assets/logo/share.png")}
                            />
                        </View>
                    </View>
                </View>
            ) : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        position: "relative",
    },
    cta: {
        margin: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    icon_cta: {
        fontSize: 40,
        opacity: 0.5,
        color: "#fff",
    },
    box: {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "110%",
        backgroundColor: "rgba(52,52,52,0.8)",
    },
    headerModal: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 100,
    },
    userName: {
        fontSize: 14,
        fontWeight: "600",
        color: "white",
    },
    imageModal: {
        width: "100%",
        height: "80%",
    },
    footerModal: {
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 8,
    },
});

export default SearchScreen;
