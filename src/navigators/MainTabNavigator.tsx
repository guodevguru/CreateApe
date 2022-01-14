import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Income, Adventures, Library } from '@screens';
import { color } from '@theme';
import { SCREENS } from './screens';
import HomeSVG from '@assets/icons/home.svg';
import HomeActiveSVG from '@assets/icons/home_active.svg';
import IncomeSVG from '@assets/icons/income.svg';
import IncomeActiveSVG from '@assets/icons/income_active.svg';
import AdventuresSVG from '@assets/icons/adventures.svg';
import AdventuresActiveSVG from '@assets/icons/adventures_active.svg';
import LibrarySVG from '@assets/icons/library.svg';
import LibraryActiveSVG from '@assets/icons/library_active.svg';

const HomeStack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={SCREENS.HOME} component={Home} />
    </HomeStack.Navigator>
  );
};

const IncomeStack = createNativeStackNavigator();
const IncomeNavigator = () => {
  return (
    <IncomeStack.Navigator screenOptions={{ headerShown: false }}>
      <IncomeStack.Screen name={SCREENS.INCOME} component={Income} />
    </IncomeStack.Navigator>
  );
};

const AdventuresStack = createNativeStackNavigator();
const AdventuresNavigator = () => {
  return (
    <AdventuresStack.Navigator screenOptions={{ headerShown: false }}>
      <AdventuresStack.Screen name={SCREENS.ADVENTURES} component={Adventures} />
    </AdventuresStack.Navigator>
  );
};

const LibraryStack = createNativeStackNavigator();
const LibraryNavigator = () => {
  return (
    <LibraryStack.Navigator screenOptions={{ headerShown: false }}>
      <LibraryStack.Screen name={SCREENS.LIBRARY} component={Library} />
    </LibraryStack.Navigator>
  );
};

const MainTab = createBottomTabNavigator();
export const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.palette.white,
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        tabBarStyle: {
          backgroundColor: color.black,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          lineHeight: 16,
        },
        headerShown: false,
      }}
      initialRouteName={SCREENS.HOME_TAB}
    >
      <MainTab.Screen
        component={HomeNavigator}
        name={SCREENS.HOME_TAB}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <HomeActiveSVG />;
            } else {
              return <HomeSVG />;
            }
          },
        }}
      />
      <MainTab.Screen
        component={IncomeNavigator}
        name={SCREENS.INCOME_TAB}
        options={{
          tabBarLabel: 'Income',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <IncomeActiveSVG />;
            } else {
              return <IncomeSVG />;
            }
          },
        }}
      />
      <MainTab.Screen
        component={AdventuresNavigator}
        name={SCREENS.ADVENTURES_TAB}
        options={{
          tabBarLabel: 'Adventures',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <AdventuresActiveSVG />;
            } else {
              return <AdventuresSVG />;
            }
          },
        }}
      />
      <MainTab.Screen
        component={LibraryNavigator}
        name={SCREENS.LIBRARY_TAB}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <LibraryActiveSVG />;
            } else {
              return <LibrarySVG />;
            }
          },
        }}
      />
    </MainTab.Navigator>
  );
};
