import { ViewStyle } from 'react-native';

const Container: ViewStyle = {
  flex: 1,
};

const CenterContainer: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const Row: ViewStyle = {
  flexDirection: 'row',
};

const RowHCenter: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

const RowVCenter: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
};

const RowHVCenter: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const ColumnHCenter: ViewStyle = {
  alignItems: 'center',
};

const ColumnVCenter: ViewStyle = {
  justifyContent: 'center',
};

const ColumnHVCenter: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const commonStyles = {
  Container,
  CenterContainer,
  Row,
  RowHCenter,
  RowVCenter,
  RowHVCenter,
  ColumnHCenter,
  ColumnVCenter,
  ColumnHVCenter,
};
