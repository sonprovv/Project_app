import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";

const SearchBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputField}>
                <Image
                    source={require("../../assets/logo/search-mes.png")}
                    style={{ marginRight: 10 }}
                />
                <TextInput
                    placeholderTextColor="#8E8E93"
                    placeholder="Search"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    style={{ fontSize: 16, color: "#fff" }}
                ></TextInput>
            </View>
            <TouchableOpacity style={{ width: 30, height: 30 }}>
                <Image
                    source={require("../../assets/logo/live.png")}
                    style={{ width: 20, height: 20 }}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputField: {
        minWidth: "87%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        padding: 12,
        backgroundColor: "#262626",
        marginBottom: 10,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 5,
    },
});
export default SearchBox;
