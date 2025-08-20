import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Platform, Pressable, ScrollView, Text, ToastAndroid, View } from 'react-native';
import CheckboxLabel from '~/components/CheckboxLabel';
import FlexibleButton from '~/components/FlexibleButton';
import FormInput from '~/components/FormInput';
import { ArrowRightSvg, PasswordSvg, UserSvg } from '~/components/Icons';
import { useAuthStore } from '~/store/auth';
const LOGIN_LOGO = require('../../assets/img/login_img.png');

export default function Login() {
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { status, login, user } = useAuthStore();
  const router = useRouter();
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const showToast = (message: string) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      alert(message);
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError('Correo electrónico no válido');
      valid = false;
    } else {
      setEmailError(null);
    }

    if (!password || password.trim() === '') {
      setPasswordError('La contraseña es obligatoria');
      valid = false;
    } else {
      setPasswordError(null);
    }

    return valid;
  };

  // Mover a una carpeta utils
  const getFriendlyErrorMessage = (message: string) => {
    if (!message) return 'Error desconocido, por favor intenta nuevamente';

    if (message.includes('401')) {
      setEmailError('Usuario o contraseña incorrectos.');
      setPasswordError('Usuario o contraseña incorrectos.');
      return 'Usuario o contraseña incorrectos.';
    }
    if (message.toLowerCase().includes('network')) {
      showToast('No se pudo conectar con el servidor. Verifica tu conexión a internet.');
      return 'No se pudo conectar con el servidor.';
    }

    return message;
  };

  const handleSubmit = async () => {
    if (status === 'checking') return;
    if (!validateForm()) return;

    try {
      await login(email, password);
    } catch (error: any) {
      const friendlyMessage = getFriendlyErrorMessage(error.message);
      friendlyMessage;
    }
  };

  useEffect(() => {
    if (status === 'authenticated' && user?.role.toLowerCase() === 'admin') {
      router.push('/(tabs)/two');
    }
  }, [status, user, router]);

  return (
    <ScrollView className="flex-1 bg-white px-7">
      <View>
        <View>
          <View className="flex w-full items-center justify-center">
            <Image source={LOGIN_LOGO} className="h-[240px] w-[240px]" resizeMode="contain" />
          </View>
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
              label="Correo electronico"
              hintText="Ingresa su correo electronico"
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
            <View className="flex w-full flex-row justify-between px-2 py-5">
              <View className="flex flex-row gap-3">
                <CheckboxLabel
                  labelStyle={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}
                  checked={checked}
                  setChecked={setChecked}
                  label={'Recordarme'}
                />
              </View>
              <Pressable>
                <Text
                  style={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}
                  className="text-[#007BFF]">
                  ¿Olvidaste tu contraseña?
                </Text>
              </Pressable>
            </View>
            <FlexibleButton
              title={`${status === 'checking' ? 'cargando...' : 'Iniciar sesión'}`}
              onPress={handleSubmit}
              iconSuffix={<ArrowRightSvg width={12} height={12} />}
              disabled={status === 'checking'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
