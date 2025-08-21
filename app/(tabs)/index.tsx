import { Stack } from 'expo-router';
import { JSX } from 'react';
import { StyleSheet, View } from 'react-native';
import { DataBar } from '~/components/commons/DataBar';
import { ItemContent } from '~/components/commons/ItemContent';

export default function Home(): JSX.Element {
  const inventoryLabels: string[] = ['Medicamentos', 'Cosméticos', 'Suplementos', 'Higiene'];
  const inventoryData: number[] = [75, 100, 45, 30];
  const inventoryColors: string[] = ['#007BFF', '#28A745', '#FFC107', '#DC3545'];

  return (
    <>
      <Stack.Screen options={{ title: 'Tab' }} />
      <View style={styles.container}>
        <ItemContent
          headerTitle="Estado del inventario"
          headerButtons={[{ content: 'Ver todos', onPress: () => console.log('Ver todos') }]}>
          <DataBar labels={inventoryLabels} data={inventoryData} colors={inventoryColors} />
        </ItemContent>
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
