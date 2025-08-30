import { Stack } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { useAuthStore } from '~/store/auth';
import '../global.css';

function LoadingOverlay() {
  return (
    <View className="absolute inset-0 flex-1 items-center justify-center bg-white/70">
      <ActivityIndicator size="large" color="#007BFF" />
    </View>
  );
}

export default function RootLayout() {
  const { user, status } = useAuthStore();

  return (
    <MenuProvider>
      <View className="flex-1">
        <Stack screenOptions={{ headerShown: false }}>
          {!user ? (
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          ) : (
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          )}
        </Stack>

        {status === 'checking' && <LoadingOverlay />}
      </View>
    </MenuProvider>
  );
}
