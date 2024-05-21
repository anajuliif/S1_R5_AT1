import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/StylesheetComponent';

export default function RodapeComponent() {
  return (
    <View style={styles.rodape}>
      <Text>Rodapé</Text>
      <StatusBar style="auto" />
    </View>
  );
}