import React from 'react';
import { TextInput as RNTextInput, StyleSheet, TextInputProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export function TextInput(props: TextInputProps) {
  const backgroundColor = useThemeColor({ light: '#f5f5f5', dark: '#333' });
  const color = useThemeColor({ light: '#000', dark: '#fff' });

  return (
    <RNTextInput
      style={[
        styles.input,
        { backgroundColor, color },
        props.style,
      ]}
      placeholderTextColor="#888"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    borderRadius: 8,
    fontSize: 16,
  },
}); 