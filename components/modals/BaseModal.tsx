import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

type BaseModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  blockBack?: boolean;
  containerStyle?: object;
};

export default function BaseModal({
  visible,
  onClose,
  children,
  blockBack = false,
  containerStyle,
}: BaseModalProps) {
  return (
    <Modal
      isVisible={visible}
      backdropColor="black"
      backdropOpacity={0.3}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={styles.modal}
      useNativeDriver
      avoidKeyboard
      onBackdropPress={blockBack ? () => {} : onClose}
      onBackButtonPress={blockBack ? () => {} : onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.content, containerStyle]}>
        {children}
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 36,
  },
});
