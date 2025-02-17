import React from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

type Message = {
  id: string;
  name: string;
  lastMessage: string;
  avatar: string;
  timestamp: string;
};

const mockMessages: Message[] = [
  {
    id: '1',
    name: 'Elon Musk',
    lastMessage: 'Hi man ! It\'s Elon !',
    avatar: '',
    timestamp: '10:30',
  },
  {
    id: '2',
    name: 'Thomas',
    lastMessage: 'On se voit demain ?',
    avatar: 'https://placekitten.com/101/101',
    timestamp: '09:15',
  },
];

export function MessagesList() {
  const renderMessage = ({ item }: { item: Message }) => (
    <TouchableOpacity style={styles.messageItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <ThemedView style={styles.messageContent}>
        <ThemedView style={styles.messageHeader}>
          <ThemedText type="subtitle">{item.name}</ThemedText>
          <ThemedText style={styles.timestamp}>{item.timestamp}</ThemedText>
        </ThemedView>
        <ThemedText numberOfLines={1}>{item.lastMessage}</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={mockMessages}
      renderItem={renderMessage}
      keyExtractor={item => item.id}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
}); 