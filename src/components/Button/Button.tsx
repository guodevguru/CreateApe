import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { color } from '@theme';
import { styles } from './styles';

interface Props {
  label?: string;
  type?: 'fill' | 'outline';
  disabled?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<Props> = ({
  label = '',
  type = 'fill',
  disabled = false,
  onPress,
}) => {
  const backgroundColor = type === 'fill' ? color.primary : color.transparent;
  const borderColor = type === 'fill' ? color.primary : color.white;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, { backgroundColor, borderColor, opacity: disabled ? 0.4 : 1 }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
