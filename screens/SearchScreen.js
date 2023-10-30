import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import SearchBox from "../components/search/SearchBox";
import TopicSearch from "../components/search/TopicSearch";
import SearchContent from "../components/search/SearchContent";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchScreen = () => {
    return (
        <SafeAreaView
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                position: "relative",
            }}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <SearchBox />
                <TopicSearch />
                <SearchContent />
                <TouchableOpacity
                    style={{
                        margin: 25,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <AntDesign
                        name="pluscircleo"
                        style={{ fontSize: 40, opacity: 0.5, color: "#fff" }}
                    />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchScreen;
