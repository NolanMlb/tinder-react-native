import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { SwipeCard } from '@/components/SwipeCard';

export default function MatchScreen() {
  return (
    <ThemedView style={styles.container}>
      <SwipeCard />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
