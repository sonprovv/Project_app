import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    Pressable,
    TouchableOpacity,
} from "react-native";
import React from "react";

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ backgroundColor: "#000", alignItems: "center", flex: 1 }}
        >
            <View style={{ width: "100%", height: 44, paddingLeft: 14 }}>
                <Image source={require("../assets/img/Back.png")} />
            </View>

            <Image
                source={require("../assets/img/InstagramLogo.png")}
                style={{ marginTop: 80, marginBottom: 40 }}
            />
            <TextInput
                style={{
                    height: 44,
                    width: "85%",
                    marginTop: 12,
                    color: "white",
                    borderRadius: 5,
                    // border: 0.5,
                    paddingLeft: 15,
                }}
                placeholderTextColor="rgba(255, 255, 255, 0.60)"
                backgroundColor="rgba(255, 255, 255, 0.20)"
                textAlign="left"
                placeholder="Email or number phone"
            />
            <TextInput
                style={{
                    height: 44,
                    width: "85%",
                    margin: 12,
                    color: "white",
                    borderRadius: 5,
                    // border: 0.5,
                    paddingLeft: 15,
                }}
                placeholderTextColor="rgba(255, 255, 255, 0.60)"
                backgroundColor="rgba(255, 255, 255, 0.20)"
                textAlign="left"
                placeholder="Password"
            />
            <View style={{ width: "85%" }}>
                <Text style={{ color: "#3797EF", textAlign: "right" }}>
                    Forgot password?
                </Text>
            </View>

            <Pressable
                style={{
                    backgroundColor: "#3797EF",
                    width: "85%",
                    height: 44,
                    borderRadius: 5,
                    marginTop: 30,
                }}
                onPress={() => navigation.navigate("LoginScreen")}
            >
                <Text
                    style={{
                        textAlign: "center",
                        lineHeight: 44,
                        color: "#fff",
                        fontSize: 14,
                    }}
                >
                    Login
                </Text>
            </Pressable>

            <View
                style={{
                    flexDirection: "row",
                    marginTop: 30,
                    justifyContent: "center",
                    borderWidth: 1,
                    width: "85%",
                    borderBottomColor: "rgba(255, 255, 255, 0.15)",
                    marginBottom: 42,
                }}
            >
                <Image
                    source={require("../assets/img/Icon.png")}
                    style={{ marginBottom: 2, marginRight: 4 }}
                />
                <Text
                    style={{
                        color: "#3797EF",
                        marginBottom: 42,
                    }}
                >
                    Log in with Facebook
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate("SignUpScreen")}
                style={{ flexDirection: "row" }}
            >
                <Text style={{ color: "white" }}>Don’t have an account?</Text>
                <Text style={{ color: "#3797EF" }}> Sign up.</Text>
            </TouchableOpacity>
            <View
                style={{
                    height: 80,
                    alignItems: "center",
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                }}
            >
                <Text style={{ color: "white", lineHeight: 80 }}>
                    Instagram from Facebook
                </Text>
            </View>
        </SafeAreaView>
    );
};
export default LoginScreen;
