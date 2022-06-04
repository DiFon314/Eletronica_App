import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo de Eletrônica</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c3c73',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: '24pt',
    fontWeight: 'bold',
    color: 'white',
  }
});
