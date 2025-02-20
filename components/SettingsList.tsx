import React from 'react';
import { StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { useAuth } from '@/contexts/AuthContext';

type SettingItem = {
  id: string;
  title: string;
  type: 'toggle' | 'button';
  value?: boolean;
  action?: string;
};

const settings: SettingItem[] = [
  {
    id: '1',
    title: 'Notifications',
    type: 'toggle',
    value: true,
  },
  {
    id: '2',
    title: 'Mode Sombre',
    type: 'toggle',
    value: false,
  },
  {
    id: '3',
    title: 'Confidentialité',
    type: 'button',
  },
  {
    id: '4',
    title: 'Déconnexion',
    type: 'button',
    action: 'signOut',
  },
];

export function SettingsList() {
  const { signOut } = useAuth();

  const handlePress = (item: SettingItem) => {
    if (item.action === 'signOut') {
      signOut();
    }
  };

  const renderItem = (item: SettingItem) => (
    <TouchableOpacity
      key={item.id}
      style={styles.settingItem}
      onPress={() => handlePress(item)}
    >
      <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
      {item.type === 'toggle' && (
        <Switch
          value={item.value}
          onValueChange={() => {}}
          trackColor={{ false: '#767577', true: '#FF4B6A' }}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      {settings.map(renderItem)}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
}); 