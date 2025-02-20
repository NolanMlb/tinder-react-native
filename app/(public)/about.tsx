import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>À propos</ThemedText>
      <ThemedText>
        Cette application est un clone de Tinder créé avec React Native et Expo.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
}); 