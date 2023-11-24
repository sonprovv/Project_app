import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TextInput,
    Animated,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
    widthPercentageToDP,
    heightPercentageToDP,
} from "react-native-responsive-screen";

const StoryScreen = () => {
    useEffect(() => {
        let timer = setTimeout(() => {}, 5000);

        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false,
        }).start();
        return clearTimeout(timer);
    }, []);

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ["0%", "100%"],
    });
    return (
        <SafeAreaView style={{ backgroundColor: "#000", flex: 1 }}>
            <View>
                <View style={styles.headerContentStory}>
                    <View style={styles.TimeLine}>
                        <Animated.View
                            style={{
                                height: "100%",
                                backgroundColor: "white",
                                width: progressAnimation,
                            }}
                        ></Animated.View>
                    </View>
                    <View style={styles.User}>
                        <Image
                            source={require("../assets/img/Rectangle.png")}
                            style={styles.UserIcon}
                        />
                        <Text style={{ color: "white" }}>Nguyen_hieu</Text>
                        <Text style={{ color: "rgba(255, 255, 255, 0.40)" }}>
                            4h
                        </Text>
                    </View>
                </View>

                <Image
                    source={require("../assets/img/Rectangle.png")}
                    style={{
                        width: widthPercentageToDP("100%"),
                        height: heightPercentageToDP("83%"),
                        borderRadius: 8,
                    }}
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.comment}>
                    <Image
                        source={require("../assets/img/Picture.png")}
                        style={{ marginLeft: 7 }}
                    />
                    <TextInput
                        placeholder="Send Message"
                        placeholderTextColor="#fff"
                    />
                </View>
                <Image source={require("../assets/img/Messanger.png")} />
                <Image source={require("../assets/img/More.png")} />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    headerContentStory: {
        width: widthPercentageToDP("100%"),
        height: 58,
        position: "absolute",
        zIndex: 1,
    },
    TimeLine: {
        width: "95%",
        height: 2,
        backgroundColor: "gray",
        marginTop: 8,
        borderRadius: 1,
        alignSelf: "center",
    },
    User: {
        marginTop: 8,
        width: "95%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    UserIcon: {
        width: 32,
        height: 32,
        backgroundColor: "#000",
        borderRadius: 999,
    },
    comment: {
        width: 275,
        height: 45,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "rgba(255, 255, 255, 0.40)",
        borderWidth: 1,
        borderRadius: 21.5,
        gap: 13,
    },
    footer: {
        width: "98%",
        height: 95,
        position: "absolute",
        bottom: 0,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 40,
    },
});

export default StoryScreen;
