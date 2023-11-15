import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React from "react";

const Search = () => {
    return (
        <View style={styles.inputField}>
            <Image source={require('../../assets/logo/search-mes.png')} style={{marginRight: 10}} />
            <TextInput
                placeholderTextColor="#8E8E93"
                placeholder="Search"
                autoCapitalize="none"
                style={{fontSize: 16, color:'#fff', width: '90%'}}
                
            >
                
            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    inputField: {
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#262626",
        marginBottom: 10,
        marginHorizontal: 15,
    },
});
export default Search;
