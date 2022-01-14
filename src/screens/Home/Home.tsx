import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Wrapper } from '@components';
import { logout } from '@actions/auth';
import { commonStyles } from '@theme';
import { styles } from './styles';
import { mainTabStyles } from '../styles';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <View style={[commonStyles.CenterContainer, styles.container]}>
        <Text style={mainTabStyles.text}>Home</Text>
        <TouchableOpacity
          style={[styles.logoutButton, { top: insets.top + 35 }]}
          onPress={handleLogout}
        >
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
};
