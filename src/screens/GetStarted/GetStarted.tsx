import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button, Wrapper } from '@components';
import { NavigationParamList } from '@navigators';
import { styles } from './styles';
import { authStyles } from '../styles';

export const GetStarted: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationParamList, 'Get Started'>>();

  const handleApply = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Wrapper hasBackgroundImage={true} hasGradient={true}>
      <View style={styles.container}>
        <Text style={authStyles.titleText}>
          Gain access to a large, highly influential network of entrepreneurs{' '}
        </Text>
        <View style={styles.buttonWrapper}>
          <Button label="Apply Now!" onPress={handleApply} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button label="Log in" type="outline" onPress={handleLogin} />
        </View>
      </View>
    </Wrapper>
  );
};
