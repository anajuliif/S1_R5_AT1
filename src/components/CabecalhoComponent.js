import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/StylesheetComponent';

export default function CabecalhoComponent() {
  return (
    <View style={styles.cabecalho}>
      <Text>Cabeçalho</Text>
      <StatusBar style="auto" />
    </View>
  );
}