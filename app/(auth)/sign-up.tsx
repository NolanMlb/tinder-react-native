import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { TextInput } from '@/components/TextInput';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'expo-router';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { signIn } = useAuth();

  const handleSignUp = async () => {
    try {
      // TODO: Add sign up logic
      await signIn(email, password);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Inscription</ThemedText>
      
      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <ThemedText style={styles.buttonText}>S'inscrire</ThemedText>
      </TouchableOpacity>

      <Link href="/(auth)/sign-in" asChild>
        <TouchableOpacity>
          <ThemedText>Déjà un compte ? Se connecter</ThemedText>
        </TouchableOpacity>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    gap: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#FF4B6A',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
}); 