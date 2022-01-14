import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { commonStyles } from '@theme';
import { styles } from './styles';
import BackIcon from '@assets/icons/back.svg';

interface Props {
  hasBackgroundImage?: boolean;
  hasGradient?: boolean;
  hasBackButton?: boolean;
  onBackButtonPress?: () => void;
}

export const Wrapper: React.FC<Props> = ({
  hasBackgroundImage = false,
  hasGradient = false,
  hasBackButton = false,
  onBackButtonPress,
  children,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[commonStyles.Container, styles.container]}>
      {hasBackgroundImage ? (
        <Image source={require('@assets/images/background.png')} style={styles.backgroundImage} />
      ) : null}
      {hasGradient ? (
        <LinearGradient
          colors={[
            '#000D16F2',
            '#000D165E',
            '#000D1600',
            '#000D1682',
            '#000D16E7',
            '#000D16',
            '#000D16',
            '#000D16',
          ]}
          style={StyleSheet.absoluteFillObject}
        />
      ) : null}
      <View style={styles.childContainer}>{children}</View>
      {hasBackButton ? (
        <View style={[styles.backButtonWrapper, { top: insets.top + 35 }]}>
          <TouchableOpacity style={styles.backButton} onPress={onBackButtonPress}>
            <BackIcon />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
