import { MenuProvider } from 'react-native-popup-menu';
import '../global.css';

import { Slot } from 'expo-router';

//TODO: INDICA LA RUTA INICIAL
export const unstable_settings = {
  initialRouteName: '(auth)',
};

export default function RootLayout() {
  return (
    <MenuProvider>
      <Slot />
    </MenuProvider>
  );
}
