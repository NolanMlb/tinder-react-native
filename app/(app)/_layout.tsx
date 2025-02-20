import { Stack } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';

export default function AppLayout() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
} 