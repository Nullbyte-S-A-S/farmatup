import { Stack } from 'expo-router';

import { StyleSheet, View, Text } from 'react-native';
import { ItemConten } from '~/components/ItemConten';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab ' }} />
      <View style={styles.container}>
        <ItemConten
          headerTitle="Mis Tareas"
          headerButtons={[
            { content: "Editar", onPress: () => console.log("Editar") },
          ]}
        >
          <Text>Contenido aquí</Text>
        </ItemConten>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
