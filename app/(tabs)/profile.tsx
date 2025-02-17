import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ProfileInfo } from '@/components/ProfileInfo';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ProfileInfo />
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