import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    SafeAreaView,
} from "react-native";
import React, { useState } from "react";

const AddImage = () => {
    const recentsData = [
        { id: "1", image: require("../assets/photo/image1.jpg") },
        { id: "2", image: require("../assets/photo/image2.jpg") },
        { id: "3", image: require("../assets/photo/image3.jpg") },
        { id: "4", image: require("../assets/photo/image4.jpg") },
        { id: "5", image: require("../assets/photo/image5.jpg") },
        { id: "6", image: require("../assets/photo/image6.jpg") },
        { id: "7", image: require("../assets/photo/image7.jpg") },
        { id: "8", image: require("../assets/photo/image8.jpg") },
        { id: "9", image: require("../assets/photo/image9.jpg") },
        { id: "10", image: require("../assets/photo/image10.jpg") },
        { id: "11", image: require("../assets/photo/image11.jpg") },
        { id: "12", image: require("../assets/photo/image12.jpg") },
        { id: "13", image: require("../assets/photo/image13.jpg") },
        { id: "14", image: require("../assets/photo/image14.jpg") },
        { id: "15", image: require("../assets/photo/image15.jpg") },
        { id: "16", image: require("../assets/photo/image16.jpg") },
        { id: "17", image: require("../assets/photo/image17.jpg") },
        { id: "18", image: require("../assets/photo/image18.jpg") },
        { id: "19", image: require("../assets/photo/image19.jpg") },
        { id: "20", image: require("../assets/photo/image20.jpg") },
        // Add more images as needed
    ];
    const [selectedImage, setSelectedImage] = useState(null);

    const renderRecentItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedImage(item.image)}>
            <Image
                style={{ width: 100, flex: 1, height: 100, margin: 1 }}
                source={item.image}
            />
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.topbar}>
                <TouchableOpacity style={{ position: "absolute", left: 18 }}>
                    <Text
                        style={{
                            color: "#FFFFFF",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        Cancel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                >
                    <Text
                        style={{
                            color: "#FFFFFF",
                            fontSize: 18,
                            fontWeight: "bold",
                            marginRight: 5,
                        }}
                    >
                        Recents
                    </Text>
                    <Image
                        source={require("../assets/image/OtherAlbums.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: "absolute", right: 18 }}>
                    <Text
                        style={{
                            color: "#3897F0",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        Next
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.rectangle}>
                {selectedImage && (
                    <Image
                        style={{ width: "100%", height: "100%", flex: 1 }}
                        source={selectedImage}
                    />
                )}

                <View style={styles.action}>
                    <TouchableOpacity>
                        <Image
                            source={require("../assets/image/Boomerang.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require("../assets/image/CombinePhotos.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mutiple}>
                        <Image source={require("../assets/image/Icon.png")} />
                        <Text style={{ color: "white", fontWeight: "bold" }}>
                            {" "}
                            SELECT MUTIPLE
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.recents}>
                <FlatList
                    data={recentsData}
                    renderItem={renderRecentItem}
                    keyExtractor={(item) => item.id}
                    numColumns={4} // Display 4 images in each row
                    showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
                />
            </View>

            <View style={styles.bottombar}>
                <TouchableOpacity style={styles.tabbar}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                        Library
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabbar}>
                    <Text style={{ color: "white" }}>Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabbar}>
                    <Text style={{ color: "white" }}>Video</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    topbar: {
        height: 44,
        flexDirection: "row",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
    rectangle: {
        flex: 1,
        backgroundColor: "pink",
    },
    action: {
        width: 250,
        flexDirection: "row",
        position: "absolute",
        bottom: 10,
        right: 15,
        justifyContent: "space-between",
    },
    mutiple: {
        width: 170,
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E1E1E",
        borderRadius: 50,
        opacity: 0.8,
    },
    recents: {
        height: 320,
    },
    bottombar: {
        height: 70,
        backgroundColor: "black",
        flexDirection: "row",
    },
    tabbar: {
        width: "33.33%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
});

export default AddImage;
