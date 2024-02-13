import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase/app"
import "firebase/auth"
import initFirebase from "./config/FirebaseConnect.js"

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
    </View>
  );
}
