import React from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { usePokemons } from '@/hooks/usePokemons';

type Message = {
  id: string;
  name: string;
  lastMessage: string;
  avatar: ImageSourcePropType;
  timestamp: string;
};

export function MessagesList() {
  const { data: pokemons } = usePokemons();

  const mockMessages: Message[] = (pokemons || [])
    .slice(0, 10)
    .sort(() => Math.random() - 0.5)
    .map(pokemon => {
      const messages = [
        `Hey! I'm ${pokemon.age} years old and I live in ${pokemon.location}!`,
        `Want to battle sometime?`,
        `I heard you're a great trainer!`,
        `Looking for new friends in ${pokemon.location}`,
        `Love meeting new people!`,
        `What's your favorite type?`,
        `Been training a lot lately`,
        `Ready for some adventures?`,
        `Hope to hear from you soon!`,
        `Let's explore ${pokemon.location} together!`
      ];
      return {
        id: pokemon.id.toString(),
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        lastMessage: messages[Math.floor(Math.random() * messages.length)],
        avatar: { uri: pokemon.avatar },
        timestamp: `${Math.floor(Math.random() * 12)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`
      };
    });
  
  const renderMessage = ({ item }: { item: Message }) => (
    <TouchableOpacity style={styles.messageItem}>
      <Image source={item.avatar} style={styles.avatar} />
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