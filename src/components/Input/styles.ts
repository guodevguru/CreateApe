import { StyleSheet } from 'react-native';
import { color } from '@theme';

export const styles = StyleSheet.create({
  captionText: {
    fontSize: 20,
    lineHeight: 22,
    color: color.white,
  },
  inputWrapper: {
    position: 'relative',
    paddingBottom: 22,
  },
  input: {
    fontSize: 18,
    lineHeight: 24,
    color: color.white,
    paddingVertical: 10,
    borderBottomColor: color.white,
    borderBottomWidth: 1,
    paddingRight: 20,
    marginTop: 10,
  },
  iconWrapper: {
    position: 'absolute',
    right: 0,
    top: 22,
  },
  errorText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 16,
    color: color.danger,
  },
});
