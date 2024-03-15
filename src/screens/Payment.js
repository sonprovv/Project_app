import React, { useEffect, useState, useRef } from 'react';
import {
    ScrollView,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';


import Payment from './Payment';
import { UIButton } from '../components';


const Payment = ({ navigation }) => {
    const [tick1, setTick1] = useState(false);
    const [tick2, setTick2] = useState(false);
    const [tick3, setTick3] = useState(false);

    const handlePress1 = () => {
        setTick1(check => !check);
    };
    const handlePress2 = () => {
        setTick2(check => !check);
    };
    const handlePress3 = () => {
        setTick3(check => !check);
    };


    useEffect(() => {
        StatusBar.setBackgroundColor('#81d773'); // thay doi mau taskbar
    }, []);
    return (
        <SafeAreaView
            style={{
                flex: 100,
                backgroundColor: '#f4f8f4',
            }}
        >
            <View
                style={{
                    flex: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                    top: 0,
                    left: 0,
                    height: 80,
                    elevation: 5,
                    backgroundColor: '#ffffff',
                }}
            >
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 28,
                        }}
                    >Thanh Toán</Text>
                    <Text
                        style={{
                            color: 'red',
                            fontSize: 15,
                        }}
                    >(3 sản phẩm)</Text>
                </View>
                <TouchableOpacity
                    style={{
                        width: 80,
                        height: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: -10,
                        left: -10,
                    }}
                >
                    <Image
                        style={{
                            // backgroundColor: '#ccc',
                            // flex: 1,
                            width: 30,
                            height: 30,
                            objectFit: 'cover'
                            // marginHorizontal: 13,

                        }}
                        source={
                            require('../assets/icon/left2.png')
                        }
                    />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flex: 82,
                    // backgroundColor: 'red',
                    flexDirection: 'row'
                }}
            >
                <ScrollView>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            height: 150,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                        }}
                    >

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            height: 150,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={
                                require('../assets/img/sp.png')
                            }
                            style={{
                                width: 130,
                                height: 140,
                                marginHorizontal: 5,
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                marginHorizontal: 5,
                            }}
                        >
                            <Text
                                style={{
                                    color: '#000',
                                    marginVertical: 10,
                                }}
                            >Sản phẩm dưỡng sáng da INNISFREE Vitamin C Green Tea Enzyme Brightening Serum</Text>
                            <Text
                                style={{
                                    color: '#ff5151',
                                }}
                            >399.000đ</Text>
                        </View>
                        <View>
                            <UIButton
                                onPress={
                                    handlePress1
                                }
                                isSelected={tick1}
                            />

                        </View>

                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            height: 150,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={
                                require('../assets/img/sp.png')
                            }
                            style={{
                                width: 130,
                                height: 140,
                                marginHorizontal: 5,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                marginHorizontal: 5,
                            }}
                        >
                            <Text
                                style={{
                                    color: '#000',
                                    marginVertical: 10,
                                }}
                            >Sản phẩm dưỡng sáng da INNISFREE Vitamin C Green Tea Enzyme Brightening Serum</Text>
                            <Text
                                style={{
                                    color: '#ff5151',
                                }}
                            >399.000đ</Text>
                        </View>
                        <View>
                            <UIButton
                                onPress={
                                    handlePress2
                                }
                                isSelected={tick2}
                            />
                        </View>
                    </View>
                    < View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            height: 150,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={
                                require('../assets/img/sp.png')
                            }
                            style={{
                                width: 130,
                                height: 140,
                                marginHorizontal: 5,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                marginHorizontal: 5,
                            }}
                        >
                            <Text
                                style={{
                                    color: '#000',
                                    marginVertical: 10,
                                }}
                            >Sản phẩm dưỡng sáng da INNISFREE Vitamin C Green Tea Enzyme Brightening Serum</Text>
                            <Text
                                style={{
                                    color: '#ff5151',
                                }}
                            >399.000đ</Text>
                        </View>
                        <View>
                            <UIButton
                                onPress={
                                    handlePress3
                                }
                                isSelected={tick3}
                            />

                        </View>
                    </View>
                </ScrollView>
            </View>
            <View
                style={{
                    flex: 10,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                }}
            >
                <View
                    style={{
                        flex: 1,
                        // flexDirection: 'row',
                        alignItems: 'center',
                        // justifyContent:'flex-start',
                    }}
                >
                    <Text
                        style={{
                            flex: 1,
                            color: '#ff5151',
                            fontSize: 25,
                            marginStart: 10,
                            fontWeight: 'bold',
                            // justifyContent: 'center',
                        }}
                    >Tổng:</Text>
                    <Text
                        style={{
                            flex: 1,
                            fontSize: 20,
                            color: '#ff5151',
                            // marginEnd: 20,
                        }}
                    >399.000đ</Text>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("Payment")
                    }
                    style={{
                        backgroundColor: '#FF5151',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 20,
                        }}
                    >Mua ngay</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Payment;