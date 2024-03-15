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
import Goods from '../screens/Goods';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Start = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name = "Goods" component={Goods} options={{headerShown: false}} />
            <Stack.Screen name = "Payment" component={Payment}  options={{headerShown: false}} />
            <Stack.Screen name = "Payment_Success" component={Payment_Success} options={{headerShown: false}}/>
            <Stack.Screen name = "Setting" component={Setting} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Start;