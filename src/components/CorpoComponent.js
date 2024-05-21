import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/StylesheetComponent';

export default function CorpoComponent() {
  return (
    <View style={styles.corpo}>
      <Text>Corpo</Text>
      <StatusBar style="auto" />
    </View>
  );
}