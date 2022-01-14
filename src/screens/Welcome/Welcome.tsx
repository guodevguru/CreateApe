import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button, Wrapper } from '@components';
import { NavigationParamList } from '@navigators';
import { styles } from './styles';
import { authStyles } from '../styles';

export const Welcome: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationParamList, 'Welcome'>>();

  const handleGetStarted = () => {
    navigation.navigate('Get Started');
  };

  return (
    <Wrapper hasBackgroundImage={true} hasGradient={true}>
      <View style={styles.container}>
        <Text style={authStyles.titleText}>Welcome</Text>
        <Text style={styles.subTitleText}>
          Obtain unfiltered insight on how others like you excel at life and business on a daily
          basis.
        </Text>
        <View style={styles.buttonWrapper}>
          <Button label="Get Started" onPress={handleGetStarted} />
        </View>
      </View>
    </Wrapper>
  );
};
