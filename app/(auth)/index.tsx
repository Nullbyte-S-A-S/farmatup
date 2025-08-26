import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  BackHandler,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CheckboxLabel from '~/components/CheckboxLabel';
import FlexibleButton from '~/components/FlexibleButton';
import FormInput from '~/components/commons/FormInput';
import { ArrowRightSvg, PasswordSvg, UserSvg } from '~/components/commons/Icons';
import ChangePasswordModal from '~/components/modals/ChangePasswordModal';
import { authService } from '~/services/auth';
import { useAuthStore } from '~/store/auth';

import { getFriendlyErrorMessage } from '~/helpers/errors';
import { showToast } from '~/helpers/toast';
import { validateEmail } from '~/helpers/validation';

const LOGIN_LOGO = require('../../assets/img/login_img.png');

// ------------------ Component ------------------
export default function Login() {
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const { status, login, user } = useAuthStore();
  const router = useRouter();

  // ------------------ Validación ------------------
  const validateForm = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Correo electrónico no válido');
      valid = false;
    } else {
      setEmailError(null);
    }

    if (!password.trim()) {
      setPasswordError('La contraseña es obligatoria');
      valid = false;
    } else {
      setPasswordError(null);
    }

    return valid;
  };

  // ------------------ Handlers ------------------
  const handleSubmit = async () => {
    if (status === 'checking') return;
    if (!validateForm()) return;

    try {
      await login(email, password);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      showToast(getFriendlyErrorMessage(message));

      if (message.includes('401')) {
        setEmailError('Usuario o contraseña incorrectos.');
        setPasswordError('Usuario o contraseña incorrectos.');
      }
    }
  };

  const handlePasswordChange = async (newPass: string, confirmPass: string) => {
    try {
      const message = await authService.changePassword(newPass, confirmPass);
      showToast(message);
      setShowModal(false);

      useAuthStore.setState((state) => ({
        user: state.user ? { ...state.user, forcePasswordChange: false } : state.user,
      }));
      setPassword('');
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      showToast(getFriendlyErrorMessage(message));
    }
  };

  // ------------------ BackHandler ------------------
  useEffect(() => {
    const onBackPress = () => {
      if (showModal) return true;
      return false;
    };
    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => subscription.remove();
  }, [showModal]);

  // ------------------ Auth Flow ------------------
  useEffect(() => {
    if (status !== 'authenticated' || !user) return;

    if (user.forcePasswordChange) {
      setShowModal(true);
      return;
    }

    if (user) {
      router.replace('/(tabs)');
    }
  }, [status, user, router]);

  // ------------------ UI ------------------
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView className="flex-1 bg-white px-7" keyboardShouldPersistTaps="handled">
        <View>
          {/* Logo */}
          <View className="flex w-full items-center justify-center">
            <Image source={LOGIN_LOGO} className="h-[240px] w-[240px]" resizeMode="contain" />
          </View>

          {/* Formulario */}
          <View className="flex w-full items-center justify-center">
            <View className="w-[279px]">
              <Text
                style={{ fontFamily: 'Inter_700Bold', fontSize: 26 }}
                className="text-center text-[#23305D]">
                Iniciar sesión
              </Text>
              <Text
                style={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}
                className="py-2 text-center text-[#8A899C]">
                Ingrese un nombre de usuario y tu contraseña para continuar
              </Text>
            </View>

            <FormInput
              label="Correo electrónico"
              hintText="Ingresa tu correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              value={email}
              onChangeText={setEmail}
              iconPrefix={<UserSvg width={20} height={20} color="#007BFF" />}
              errorMessage={emailError || undefined}
              hasError={!!emailError}
            />

            <FormInput
              label="Contraseña"
              hintText="Ingresa tu contraseña"
              autoCapitalize="none"
              isPassword
              value={password}
              onChangeText={setPassword}
              iconPrefix={<PasswordSvg width={20} height={20} color="#007BFF" />}
              errorMessage={passwordError || undefined}
              hasError={!!passwordError}
            />

            {/* Opciones */}
            <View className="flex w-full flex-row justify-between px-2 py-5">
              <CheckboxLabel
                labelStyle={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}
                checked={checked}
                setChecked={setChecked}
                label="Recordarme"
              />
              <Pressable>
                <Text
                  style={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}
                  className="text-[#007BFF]">
                  ¿Olvidaste tu contraseña?
                </Text>
              </Pressable>
            </View>

            {/* Botón */}
            <FlexibleButton
              title={status === 'checking' ? 'Cargando...' : 'Iniciar sesión'}
              onPress={handleSubmit}
              iconSuffix={<ArrowRightSvg width={12} height={12} />}
              disabled={status === 'checking'}
            />
          </View>
        </View>
      </ScrollView>

      {/* Modal de cambio de contraseña */}
      <ChangePasswordModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handlePasswordChange}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
