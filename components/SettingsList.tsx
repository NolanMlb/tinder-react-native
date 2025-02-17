import React from 'react';
import { StyleSheet, TouchableOpacity, Switch, useColorScheme } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

type SettingItem = {
  id: string;
  title: string;
  type: 'toggle' | 'button';
  value?: boolean;
  onPress?: () => void;
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
    onPress: () => {
      const colorScheme = useColorScheme();
      const newColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
      // TODO: Add logic to persist color scheme preference
    },
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
  },
];

export function SettingsList() {
  const renderItem = (item: SettingItem) => (
    <TouchableOpacity
      key={item.id}
      style={styles.settingItem}
      onPress={item.onPress}
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