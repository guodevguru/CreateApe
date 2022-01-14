import { StyleSheet } from 'react-native';
import { color } from '@theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  logoutButton: {
    position: 'absolute',
    right: 30,
    top: 80,
  },
  logoutButtonText: {
    fontSize: 16,
    lineHeight: 19,
    color: color.white,
  },
});
