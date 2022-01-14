import { StyleSheet } from 'react-native';
import { color } from '@theme';

export const authStyles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    lineHeight: 33,
    color: color.mainText,
  },
  formWrapper: {
    marginTop: 170,
    marginBottom: 40,
    paddingHorizontal: 40,
  },
  form: {
    marginTop: 56,
  },
  formTitleText: {
    fontSize: 27,
    lineHeight: 30,
    color: color.mainText,
    textAlign: 'center',
  },
  forgotPasswordText: {
    fontSize: 16,
    lineHeight: 24,
    color: color.mainText,
    textAlign: 'right',
  },
  footerText: {
    fontSize: 16,
    lineHeight: 24,
    color: color.mainText,
    textAlign: 'center',
    marginTop: 30,
  },
});

export const mainTabStyles = StyleSheet.create({
  text: {
    fontSize: 32,
    lineHeight: 36,
    color: color.white,
  },
});
