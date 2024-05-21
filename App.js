import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CabecalhoComponent from "./src/components/CabecalhoComponent";
import CorpoComponent from "./src/components/CorpoComponent";
import RodapeComponent from "./src/components/RodapeComponnent";
import styles from "./src/styles/StylesheetComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <CabecalhoComponent />
      <CorpoComponent />
      <RodapeComponent />
      <StatusBar style="auto" />
    </View>
  );
}
