import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ToastAndroid,
    Image,
    TextInput,
    StyleSheet,
} from "react-native";
import React from "react";

const EditProfile = ({ route, navigation }) => {
    const { name, accountName, profileImage } = route.params;
    const TostMessage = () => {
        ToastAndroid.show("Edit Successfully !", ToastAndroid.SHORT);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: "#f9f9f9", fontSize: 14 }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.heading}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        TostMessage();
                        navigation.goBack();
                    }}
                >
                    <Text style={{ color: "#3897F0", fontSize: 14 }}>Done</Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 20, alignItems: "center" }}>
                <Image
                    source={profileImage}
                    style={{ width: 80, height: 80, borderRadius: 100 }}
                />
                <Text style={{ color: "#3897F0", marginTop: 10 }}>
                    Change Profile Photo
                </Text>
            </View>
            <View style={{ marginHorizontal: 15 }}>
                <View style={styles.center}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>Name</Text>
                    <TextInput
                        placeholder="Name"
                        defaultValue={name}
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.center}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>
                        Username
                    </Text>
                    <TextInput
                        placeholder="Name"
                        defaultValue={accountName}
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.center}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>Website</Text>
                    <TextInput
                        placeholder="Website"
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.center}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>Bio</Text>
                    <TextInput
                        placeholder="Bio"
                        style={styles.inputFieldBio}
                    />
                </View>
            </View>
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#FFFFFF26",
                    marginHorizontal: 15,
                }}
            >
                <TouchableOpacity>
                    <Text style={{ color: "#3897F0", fontSize: 15 }}>
                        Switch to Professional Account
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 15 }}>
                <Text style={styles.title}>Private Information</Text>
                <View style={styles.center}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>Email</Text>
                    <TextInput
                        placeholder="Email"
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.center}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>Phone</Text>
                    <TextInput
                        placeholder="Phone"
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.center}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>Gender</Text>
                    <TextInput
                        placeholder="Gender"
                        style={styles.inputField}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 15,
    },
    heading: {
        color: "#f9f9f9",
        fontSize: 16,
        fontWeight: "600",
    },
    center: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputField: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: "#FFFFFF26",
        color: "#fff",
        width: "80%",
        padding: 15,
    },
    inputFieldBio:{
        fontSize: 16,
        color: "#fff",
        width: "80%",
        padding: 15,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 10,
    },
});
