import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { USER } from "../../data/user";

const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USER.map((story, index) => (
                    <TouchableOpacity
                        key={index}
                        style={{ alignItems: "center" }}
                    >
                        <Image
                            source={{ uri: story.image }}
                            style={styles.story}
                        />
                        <Text style={{ color: "white" }}>
                            {story.user.length > 10
                                ? story.user.slice(0, 9).toLowerCase() + "..."
                                : story.user.toLowerCase()}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 99,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 3,
        borderColor: "#ff8501",
    },
});

export default Stories;
