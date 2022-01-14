import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { selectUser } from '@selectors/auth';
import { AuthNavigator } from './AuthNavigator';
import { MainTabNavigator } from './MainTabNavigator';

export const AppNavigator: React.FC = () => {
  const user = useSelector(selectUser);
  return (
    <NavigationContainer>{user ? <MainTabNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};

export * from './screens';
