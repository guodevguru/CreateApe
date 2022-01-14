import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome, GetStarted, Login, Register } from '@screens';
import { SCREENS } from './screens';

const AuthStack = createNativeStackNavigator();
export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName={SCREENS.WELCOME} screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={SCREENS.WELCOME} component={Welcome} />
      <AuthStack.Screen name={SCREENS.GET_STARTED} component={GetStarted} />
      <AuthStack.Screen name={SCREENS.LOGIN} component={Login} />
      <AuthStack.Screen name={SCREENS.REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};
