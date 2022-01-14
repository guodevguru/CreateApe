import { StyleSheet } from 'react-native';
import { color } from '@theme';

export const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 64,
  },
  modalView: {
    backgroundColor: color.white,
    borderRadius: 4,
    paddingVertical: 42,
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: 21,
    lineHeight: 24,
    color: '#010303',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#010303',
    textAlign: 'center',
    marginTop: 24,
  },
  buttonWrapper: {
    paddingHorizontal: 10,
    marginTop: 30,
  },
});
