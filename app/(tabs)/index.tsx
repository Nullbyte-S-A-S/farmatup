import React from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { ItemConten } from '~/components/ItemConten';
import { DataLine } from '~/components/DataLine';


export default function Home() {

  return (
    <>
      <Stack.Screen options={{ title: 'Tab' }} />
      <View style={styles.container}>
        <ItemConten
          headerTitle="Ventas diarias"
          headerButtons={[
            { content: "Ver más", onPress: () => console.log("Ver más") },
          ]}
        >
          <DataLine label={["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]}
            data={[800, 900, 1100, 950, 1200, 1350, 1250]} />
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