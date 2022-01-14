import React from 'react';
import Modal from 'react-native-modal';
import { Text, View } from 'react-native';
import { Button } from '@components';
import { styles } from './styles';

interface Props {
  visible: boolean;
  email: string;
  onClose: () => void;
}

export const PasswordInvalidModal: React.FC<Props> = ({ visible, email, onClose }) => {
  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}
    >
      <View style={styles.modalView}>
        <Text style={styles.headerText}>{'Incorrect\npassword'}</Text>
        <Text style={styles.text}>
          The password you entered for{' '}
          <Text style={[styles.text, { fontWeight: '600' }]}>{email}</Text> is incorrect. Please Try
          again.
        </Text>
        <View style={styles.buttonWrapper}>
          <Button label="Try Again" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};
