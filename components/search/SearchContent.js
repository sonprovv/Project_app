import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const SearchContent = () => {
    const searchData = [
        {
            id: 0,
            images: [
                require("../../assets/post/post1.png"),
                require("../../assets/post/post2.png"),
                require("../../assets/post/post3.png"),
                require("../../assets/post/post4.png"),
                require("../../assets/post/post5.png"),
                require("../../assets/post/post6.png"),
            ],
        },
        {
            id: 1,
            images: [
                require("../../assets/post/post7.png"),
                require("../../assets/post/post8.png"),
                require("../../assets/post/post9.png"),
                require("../../assets/post/post10.png"),
                require("../../assets/post/post11.png"),
                require("../../assets/post/post12.png"),
            ],
        },
        {
            id: 2,
            images: [
                require("../../assets/post/post13.png"),
                require("../../assets/post/post14.png"),
                require("../../assets/post/post15.png"),
            ],
        },
    ];

    return (
        <View>
            {searchData.map((data, index) => {
                return (
                    <View>
                        {data.id === 0 ? (
                            <View
                                style={{
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                }}
                            >
                                {data.images.map((imageData, imgIndex) => {
                                    return (
                                        <TouchableOpacity
                                            style={{ paddingBottom: 2 }}
                                        >
                                            <Image
                                                source={imageData}
                                                style={{
                                                    width: 142,
                                                    height: 150,
                                                }}
                                            />
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        ) : null}
                        {data.id === 1 ? (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        justifyContent: "space-between",
                                        width: 286,
                                    }}
                                >
                                    {data.images
                                        .slice(0, 4)
                                        .map((imageData, imgIndex) => (
                                            <TouchableOpacity
                                                style={{ paddingBottom: 2 }}
                                            >
                                                <Image
                                                    source={imageData}
                                                    style={{
                                                        width: 142,
                                                        height: 150,
                                                    }}
                                                />
                                            </TouchableOpacity>
                                        ))}
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={data.images[5]}
                                        style={{ width: 142, height: 300 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        ) : null}
                        {data.id === 2 ? (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <TouchableOpacity style={{ paddingRight: 2 }}>
                                    <Image
                                        source={data.images[2]}
                                        style={{ width: 285, height: 300 }}
                                    />
                                </TouchableOpacity>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        justifyContent: "space-between",
                                        width: 142,
                                    }}
                                >
                                    {data.images
                                        .slice(0, 2)
                                        .map((imageData, imgIndex) => (
                                            <TouchableOpacity
                                                style={{ paddingBottom: 2 }}
                                            >
                                                <Image
                                                    source={imageData}
                                                    style={{
                                                        width: 142,
                                                        height: 150,
                                                    }}
                                                />
                                            </TouchableOpacity>
                                        ))}
                                </View>
                            </View>
                        ) : null}
                    </View>
                );
            })}
        </View>
    );
};

export default SearchContent;
