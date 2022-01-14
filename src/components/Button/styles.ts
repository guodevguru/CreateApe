import { StyleSheet } from 'react-native';
import { color } from '@theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderWidth: 1,
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '600',
    color: color.white,
  },
});
