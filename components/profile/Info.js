import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { USER } from "../../data/user";

const Info = () => {
    return (
        // <View style={styles.wrapper}>
        //     <View style={styles.container}>
        //     <Image
        //         source={{ uri: USER[0].image }}
        //         style={styles.imageProfile}
        //     />
        //     <View style={styles.box}>
        //         <Text style={styles.number}>{USER[0].posts}</Text>
        //         <Text style={styles.text}>Posts</Text>
        //     </View>
        //     <View style={styles.box}>
        //         <Text style={styles.number}>{USER[0].followers}</Text>
        //         <Text style={styles.text}>Followers</Text>
        //     </View>
        //     <View style={styles.box}>
        //         <Text style={styles.number}>{USER[0].following}</Text>
        //         <Text style={styles.text}>Following</Text>
        //     </View>
        //     </View>
        //     <View>
        //         <Text>{USER[0]}.user</Text>
        //     </View>
        // </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 15,
    },
    imageProfile: {
        width: 100,
        height: 100,
        borderRadius: 99,
        borderWidth: 3,
        borderColor: "#ff8501",
    },
    box: {
        alignItems: "center",
    },
    number: {
        color: "#F9F9F9",
        fontWeight: "600",
        fontSize: 16,
    },
    text: {
        color: "#f9f9f9",
        fontSize: 13,
    },
});

export default Info;
