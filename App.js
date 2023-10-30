import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignedInStack from "./navigation";
import ProfileScreen from "./screens/ProfileScreen";

export default function App() {
    return <SignedInStack />;
}
