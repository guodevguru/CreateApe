import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, KeyboardType } from 'react-native';

import { color } from '@theme';
import { styles } from './styles';
import AlertIcon from '@assets/icons/alert.svg';
import EyeIcon from '@assets/icons/eye.svg';
import EyeOffIcon from '@assets/icons/eye_off.svg';

interface Props {
  caption: string;
  value: string;
  onChangeValue: (text: string) => void;
  onBlur: (e: any) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  error?: string | null;
  keyboardType?: KeyboardType;
}

export const Input: React.FC<Props> = ({
  caption,
  value,
  onChangeValue,
  onBlur,
  placeholder = '',
  secureTextEntry = false,
  autoCapitalize = 'none',
  error,
  keyboardType = 'default',
}) => {
  const [passwordInvisible, setPasswordInvisible] = useState<boolean>(secureTextEntry);

  const toggleSecureEntry = () => {
    setPasswordInvisible(visible => !visible);
  };

  return (
    <View>
      <Text style={styles.captionText}>{caption}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          placeholderTextColor={color.palette.darkGray}
          placeholder={placeholder}
          secureTextEntry={passwordInvisible}
          style={styles.input}
          value={value}
          onChangeText={onChangeValue}
          onBlur={onBlur}
        />
        {secureTextEntry ? (
          <TouchableOpacity onPress={toggleSecureEntry} style={styles.iconWrapper}>
            {passwordInvisible ? <EyeIcon /> : <EyeOffIcon />}
          </TouchableOpacity>
        ) : error ? (
          <View style={styles.iconWrapper}>
            <AlertIcon />
          </View>
        ) : null}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </View>
  );
};
