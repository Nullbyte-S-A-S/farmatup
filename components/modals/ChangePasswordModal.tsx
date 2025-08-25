import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FormInput from '~/components/commons/FormInput';
import { PasswordSvg } from '~/components/commons/Icons';
import FlexibleButton from '~/components/FlexibleButton';
import BaseModal from './BaseModal';

type ChangePasswordModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (newPassword: string, confirmPassword: string) => void;
};

export default function ChangePasswordModal({
  visible,
  onClose,
  onSubmit,
}: ChangePasswordModalProps) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const newPasswordRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      setNewPassword('');
      setConfirmPassword('');
      setError('');

      setTimeout(() => {
        newPasswordRef.current?.focus();
      }, 400);
    }
  }, [visible]);

  const handleSave = () => {
    if (!newPassword || !confirmPassword) {
      setError('Ambos campos son obligatorios');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');
    onSubmit?.(newPassword, confirmPassword);
  };

  return (
    <BaseModal visible={visible} onClose={onClose} blockBack>
      <View style={styles.header}>
        <Text style={styles.title}>Cambia tu contraseña</Text>
        <Text style={styles.subtitle}>
          Es hora de cambiar tu contraseña temporal {'\n'} y establecer una nueva
        </Text>
      </View>

      <FormInput
        ref={newPasswordRef}
        label="Nueva contraseña"
        autoCapitalize="none"
        type="password"
        autoComplete="password"
        hintText="Ingresa tu nueva contraseña"
        isPassword
        value={newPassword}
        onChangeText={setNewPassword}
        iconPrefix={<PasswordSvg width={20} height={20} color="#007BFF" />}
        hasError={!!error}
      />
      <FormInput
        label="Confirmar nueva contraseña"
        autoCapitalize="none"
        type="password"
        autoComplete="password"
        hintText="Vuelve a ingresar la nueva contraseña"
        isPassword
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        iconPrefix={<PasswordSvg width={20} height={20} color="#007BFF" />}
        errorMessage={error ? error : undefined}
        hasError={!!error}
      />

      <FlexibleButton title="Cambiar contraseña" style={{ marginTop: 20 }} onPress={handleSave} />
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#1A2344',
  },
  subtitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#8A899C',
    textAlign: 'center',
    marginTop: 4,
  },
});
