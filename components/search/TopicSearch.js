import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { TOPIC } from "../../data/topic";

const TopicSearch = () => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: 5, marginBottom: 8 }}
        >
            {TOPIC.map((top, index) => (
                <TouchableOpacity key={index} style={styles.topic}>
                    <Image source={top.icon} />
                    <Text style={{ color: "#fff", fontSize: 16 }}>
                        {top.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    topic: {
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: "#444",
        borderRadius: 5,
        marginRight: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
});

export default TopicSearch;
