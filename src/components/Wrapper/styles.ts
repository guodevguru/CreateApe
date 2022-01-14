import { StyleSheet } from 'react-native';
import { color } from '@theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
  },
  childContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backButtonWrapper: {
    position: 'absolute',
    left: 22,
    top: 80,
  },
  backButton: {
    paddingHorizontal: 10,
  },
});
