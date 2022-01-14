import React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Input, Wrapper } from '@components';
import { NavigationParamList } from '@navigators';
import { setUser } from '@actions/auth';
import { authStyles } from '../styles';

const validationSchema = Yup.object().shape({
  email: Yup.string().label('Email').email('Enter a valid email').required('Email is required'),
  password: Yup.string()
    .label('Password')
    .required('Password is required')
    .min(6, 'Password must have more than 6 characters '),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
});

export const Register: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<NavigationParamList, 'Register'>>();

  const goBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = (values: { email: string }) => {
    dispatch(setUser({ email: values.email }));
  };

  return (
    <Wrapper hasBackButton onBackButtonPress={goBack}>
      <KeyboardAwareScrollView>
        <View style={authStyles.formWrapper}>
          <Text style={authStyles.formTitleText}>Register</Text>
          <Formik
            initialValues={{ email: '', password: '', passwordConfirmation: '' }}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            {({ handleBlur, handleChange, handleSubmit, values, errors, touched, isValid }) => (
              <View style={authStyles.form}>
                <View>
                  <Input
                    caption="Email"
                    placeholder="Type your email"
                    keyboardType="email-address"
                    value={values.email}
                    onChangeValue={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={touched.email && errors.email ? errors.email : null}
                  />
                </View>
                <View style={{ marginTop: 28 }}>
                  <Input
                    caption="Password"
                    placeholder="Type your password"
                    secureTextEntry={true}
                    value={values.password}
                    onChangeValue={handleChange('password')}
                    onBlur={handleBlur('password')}
                    error={touched.password && errors.password ? errors.password : null}
                  />
                </View>
                <View style={{ marginTop: 28 }}>
                  <Input
                    caption="Confirm Password"
                    placeholder="Type your password"
                    secureTextEntry={true}
                    value={values.passwordConfirmation}
                    onChangeValue={handleChange('passwordConfirmation')}
                    onBlur={handleBlur('passwordConfirmation')}
                    error={
                      touched.passwordConfirmation && errors.passwordConfirmation
                        ? errors.passwordConfirmation
                        : null
                    }
                  />
                </View>
                <View style={{ marginTop: 32 }}>
                  <Button label="Register" disabled={!isValid} onPress={handleSubmit} />
                  <Text style={authStyles.footerText}>
                    Already member?{' '}
                    <Text
                      style={[authStyles.footerText, { fontWeight: '800' }]}
                      onPress={handleLogin}
                    >
                      Log in
                    </Text>
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};
