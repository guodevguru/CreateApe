import React from 'react';
import { Text, View } from 'react-native';
import { Wrapper } from '@components';
import { commonStyles } from '@theme';

import { mainTabStyles } from '../styles';

export const Income: React.FC = () => {
  return (
    <Wrapper>
      <View style={commonStyles.CenterContainer}>
        <Text style={mainTabStyles.text}>Income</Text>
      </View>
    </Wrapper>
  );
};
