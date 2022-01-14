import { StyleSheet } from 'react-native';
import { color } from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 58,
    paddingHorizontal: 40,
  },
  subTitleText: {
    fontSize: 16,
    lineHeight: 24,
    color: color.mainText,
    marginTop: 22,
    width: 240,
  },
  buttonWrapper: {
    marginTop: 22,
  },
});
