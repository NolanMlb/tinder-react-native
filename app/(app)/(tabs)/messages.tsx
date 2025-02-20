import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { MessagesList } from '@/components/MessagesList';

export default function MessagesScreen() {
  return (
    <ThemedView style={styles.container}>
      <MessagesList />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
}); 