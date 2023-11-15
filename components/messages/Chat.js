import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { MES } from "../../data/mes";

const Chat = () => {
    return (
        <View style={{ marginHorizontal: 15 }}>
            <ScrollView>
                {MES.map((mes, index) => (
                    <TouchableOpacity key={index} style={styles.container}>
                        <View style={styles.containerLeft}>
                            <Image
                                source={{ uri: mes.image }}
                                style={styles.image}
                            />
                            <View style={{ marginLeft: 10 }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#F9F9F9",
                                            fontSize: 16,
                                        }}
                                    >
                                        {mes.user}
                                    </Text>
                                    <Image
                                        source={{ uri: mes.verified }}
                                        style={styles.verified}
                                    />
                                </View>
                                <Text
                                    style={{ color: "#555555", fontSize: 16 }}
                                >
                                    {mes.message.length > 28
                                        ? mes.message.slice(0, 27) + "..."
                                        : mes.message}
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text
                                style={{
                                    color: "#666666",
                                    alignSelf: "flex-end",
                                }}
                            >
                                · now
                            </Text>
                            <TouchableOpacity style={{ marginLeft: 20 }}>
                                <Image
                                    source={require("../../assets/logo/camera-chat.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    containerLeft: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#ff8501",
    },
    verified: {
        width: 20,
        height: 20,
    },
});
export default Chat;
