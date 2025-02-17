import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

export function ProfileInfo() {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('../assets/images/elon.jpg')}
        style={styles.profileImage}
      />
      
      <ThemedView style={styles.infoSection}>
        <ThemedText type="subtitle">John Doe, 25</ThemedText>
        <ThemedText>Paris, France</ThemedText>
      </ThemedView>

      <ThemedView style={styles.bioSection}>
        <ThemedText type="subtitle">À propos de moi</ThemedText>
        <ThemedText>
          Passionné de voyages et de photographie. Amateur de bons restaurants et de concerts.
        </ThemedText>
      </ThemedView>

      <TouchableOpacity style={styles.editButton}>
        <ThemedText type="defaultSemiBold">Modifier le profil</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  infoSection: {
    alignItems: 'center',
    gap: 8,
  },
  bioSection: {
    width: '100%',
    padding: 16,
    gap: 8,
  },
  editButton: {
    padding: 16,
    backgroundColor: '#FF4B6A',
    borderRadius: 8,
  },
}); 