import '../global.css';

import { Slot } from 'expo-router';

//TODO: INDICA LA RUTA INICIAL
export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <Slot />
  );
}
