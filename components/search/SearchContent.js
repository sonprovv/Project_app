import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const SearchContent = (props) => {
    const searchData = [
        {
            id: 0,
            images: [
                require("../../assets/post/post1.jpeg"),
                require("../../assets/post/post2.jpeg"),
                require("../../assets/post/post3.jpeg"),
                require("../../assets/post/post4.jpeg"),
                require("../../assets/post/post5.jpeg"),
                require("../../assets/post/post6.jpeg"),
            ],
        },
        {
            id: 1,
            images: [
                require("../../assets/post/post7.jpeg"),
                require("../../assets/post/post8.jpeg"),
                require("../../assets/post/post9.jpeg"),
                require("../../assets/post/post10.jpeg"),
                require("../../assets/post/post11.jpeg"),
                require("../../assets/post/post12.jpeg"),
            ],
        },
        {
            id: 2,
            images: [
                require("../../assets/post/post13.jpeg"),
                require("../../assets/post/post14.jpeg"),
                require("../../assets/post/post15.jpeg"),
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
                                            onPressIn={() =>
                                                props.data(imageData)
                                            }
                                            onPressOut={() => props.data(null)}
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
                                                onPressIn={() =>
                                                    props.data(imageData)
                                                }
                                                onPressOut={() =>
                                                    props.data(null)
                                                }
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
                                <TouchableOpacity
                                    onPressIn={() => props.data(data.images[5])}
                                    onPressOut={() => props.data(null)}
                                >
                                    <Image
                                        source={data.images[5]}
                                        style={{ width: 142, height: 302 }}
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
                                <TouchableOpacity
                                    onPressIn={() => props.data(data.images[2])}
                                    onPressOut={() => props.data(null)}
                                    style={{ paddingRight: 2 }}
                                >
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
                                                onPressIn={() =>
                                                    props.data(imageData)
                                                }
                                                onPressOut={() =>
                                                    props.data(null)
                                                }
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
