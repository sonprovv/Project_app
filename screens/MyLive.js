import { StyleSheet, Text, View, Image, FlatList, StatusBar, Pressable, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'
import { Camera } from 'expo-camera'

const MyLive = () => {
    const cameraRef = useRef(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const scrollViewRef = useRef(null)
    const handleComment = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, { id: comments.length + 1, user: 'nghieu2103', content: newComment }]);
            setNewComment('');
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    };

    const renderComment = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('../assets/image/Oval.png')} />
            <Text style={{ color: 'white' }}>{item.user}: </Text>
            <Text style={{ color: 'white' }}>{item.content}</Text>
        </View>
    );

    const handleIconMenuPress = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, { id: comments.length + 1, user: 'nghieu2103', content: newComment }]);
            setNewComment('');
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={{ flex: 1 }}>
                <Camera
                    style={{ flex: 1 }}
                    ref={cameraRef}
                    type={Camera.Constants.Type.front}
                    autoFocus={Camera.Constants.AutoFocus.on}
                >
                    <View style={styles.topbar}>
                        <Image style={{ position: 'absolute', left: 13 }}
                            source={require('../assets/image/ChangeCamera.png')}
                        />
                        <View style={styles.livestatus}>
                            <Text style={{ color: '#F2F2F2', fontSize: 12, fontWeight: 'bold' }}>LIVE</Text>
                        </View>
                        <View style={styles.viewcounter}>
                            <Text style={{ color: '#F2F2F2', fontWeight: 'bold' }}>
                                <Image
                                    source={require('../assets/image/ViewsIcon.png')}
                                /> 1
                            </Text>
                        </View>
                        <Text style={{ color: '#F2F2F2', position: 'absolute', right: 15, fontWeight: 'bold' }}>End</Text>
                    </View>
                    <ScrollView style={styles.notification} ref={scrollViewRef} // Attach the ref to the ScrollView
                        onContentSizeChange={() => {
                            scrollViewRef.current.scrollToEnd({ animated: true });
                        }}>
                        <Text style={{ color: '#8B8B8D', width: 300, marginBottom: 10 }}>We're telling your followers that you've started a live video.</Text>
                        <Text style={{ color: '#8B8B8D' }}>Hang on! We're telling more followers to join your video.</Text>
                        <View style={styles.joinedperson}>
                            <Image style={{ marginRight: 10}}
                                source={require('../assets/image/UserPicture2.png')}
                            />
                            <Text style={{ color: '#F2F2F2', fontWeight: 'bold' }}>maxjacobson joined</Text>
                            <Pressable style={styles.wave}>
                                <Text style={{ color: '#F2F2F2', fontWeight: 'bold' }}>👋 Wave</Text>
                            </Pressable>
                        </View>
                        <FlatList
                            data={comments}
                            renderItem={renderComment}
                            keyExtractor={(item) => item.id.toString()}
                        >
                        </FlatList>
                    </ScrollView>
                </Camera>
            </View>

            <View style={styles.bottombar}>
                <View style={styles.comment}>
                    <TextInput placeholder='Comment'
                        placeholderTextColor='#666666'
                        style={{ color: 'white' }}
                        value={newComment}
                        onChangeText={(text) => setNewComment(text)} />
                    <Pressable onPress={handleIconMenuPress} style={{ marginLeft: 35 }}>
                        <Image source={require('../assets/image/Messanger.png')} />
                    </Pressable>
                </View>


                <Image
                    source={require('../assets/image/IconMenu.png')}
                />
                <Image
                    source={require('../assets/image/Emoji.png')}
                />
                <Image
                    source={require('../assets/image/FaceMasks.png')}
                />
                <Image
                    source={require('../assets/image/Rectangle2.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    topbar: {
        width: '100%',
        height: 51,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    livestatus: {
        width: 45,
        height: 27,
        backgroundColor: '#C80083',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4.5,
        marginRight: 8
    },
    viewcounter: {
        width: 37,
        height: 27,
        backgroundColor: '#737779',
        borderRadius: 4.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    notification: {
        width: '100%',
        height: 130,
        marginLeft: 10,
        marginBottom: 10,
        position: 'absolute',
        bottom: 0,

    },
    joinedperson: {
        width: 355,
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom:10
    },
    wave: {
        width: 85,
        height: '100%',
        position: 'absolute',
        right: 0,
        backgroundColor: '#F7F7F7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 21,
        opacity: 0.4
    },
    bottombar: {
        width: '100%',
        height: 101,
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    comment: {
        width: 170,
        height: 50,
        borderWidth: 1,
        borderColor: '#797979',
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default MyLive