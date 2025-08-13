import React, { JSX } from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { ItemConten } from '~/components/ItemConten';
import { DataBar } from '~/components/DataBar';

export default function Home(): JSX.Element {
  const inventoryLabels: string[] = ["Medicamentos", "Cosméticos", "Suplementos", "Higiene"];
  const inventoryData: number[] = [75, 100, 45, 30];
  const inventoryColors: string[] = ["#007BFF", "#28A745", "#FFC107", "#DC3545"];

  return (
    <>
      <Stack.Screen options={{ title: 'Tab' }} />
      <View style={styles.container}>
        <ItemConten
          headerTitle="Estado del inventario"
          headerButtons={[
            { content: "Ver todos", onPress: () => console.log("Ver todos") },
          ]}
        >
          <DataBar
            labels={inventoryLabels}
            data={inventoryData}
            colors={inventoryColors}
          />
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