import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { SettingsList } from '@/components/SettingsList';

export default function SettingsScreen() {
  return (
    <ThemedView style={styles.container}>
      <SettingsList />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
}); 