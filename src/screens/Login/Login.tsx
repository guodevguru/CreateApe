import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Input, Wrapper } from '@components';
import { IAuthError } from '@models';
import { NavigationParamList } from '@navigators';
import { setUser } from '@actions/auth';
import { PasswordInvalidModal } from './components/PasswordInvalidModal';
import { authStyles } from '../styles';

const validationSchema = Yup.object().shape({
  email: Yup.string().label('Email').email('Enter a valid email').required('Email is required'),
  password: Yup.string()
    .label('Password')
    .required('Password is required')
    .min(6, 'Password must have more than 6 characters '),
});

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<NavigationParamList, 'Login'>>();
  const [error, setError] = useState<IAuthError | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const goBack = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleLogin = (values: { email: string; password: string }) => {
    if (values.email !== 'hello@gmail.com') {
      setError({ email: 'The email entered is not registered' });
    } else if (values.password !== 'password123') {
      setEmail(values.email);
      setModalVisible(true);
    } else {
      dispatch(setUser({ email: values.email }));
    }
  };

  return (
    <Wrapper hasBackButton onBackButtonPress={goBack}>
      <KeyboardAwareScrollView>
        <View style={authStyles.formWrapper}>
          <Text style={authStyles.formTitleText}>Log In</Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ handleBlur, handleChange, handleSubmit, values, errors, touched, isValid }) => (
              <View style={authStyles.form}>
                <View>
                  <Input
                    caption="Email"
                    placeholder="Type your email"
                    keyboardType="email-address"
                    value={values.email}
                    onChangeValue={(text: string) => {
                      setError(null);
                      handleChange('email')(text);
                    }}
                    onBlur={handleBlur('email')}
                    error={
                      error?.email
                        ? error?.email
                        : touched.email && errors.email
                        ? errors.email
                        : null
                    }
                  />
                </View>
                <View style={{ marginTop: 42 }}>
                  <Input
                    caption="Password"
                    placeholder="Type your password"
                    secureTextEntry={true}
                    value={values.password}
                    onChangeValue={(text: string) => {
                      setError(null);
                      handleChange('password')(text);
                    }}
                    onBlur={handleBlur('password')}
                    error={touched.password && errors.password ? errors.password : null}
                  />
                </View>
                <TouchableOpacity>
                  <Text style={authStyles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 120 }}>
                  <Button label="Sign in" disabled={!isValid} onPress={handleSubmit} />
                  <Text style={authStyles.footerText}>
                    Not a member?{' '}
                    <Text
                      style={[authStyles.footerText, { fontWeight: '800' }]}
                      onPress={handleRegister}
                    >
                      Join the Club
                    </Text>
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
      <PasswordInvalidModal visible={modalVisible} email={email} onClose={closeModal} />
    </Wrapper>
  );
};
