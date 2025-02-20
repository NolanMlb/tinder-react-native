import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
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
}); 