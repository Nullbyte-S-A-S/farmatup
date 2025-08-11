import { Stack } from 'expo-router';

import { StyleSheet, View } from 'react-native';
import { TabletSvg } from '~/components/Icons';
import { ItemCard } from '~/components/ItemCard';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab ' }} />
      <View style={styles.container}>
        <ItemCard title={'Total productos'} content={'1,532 items'} icon={<TabletSvg />}
          isBackgroundIcon backgroundIcon='#DBEAFE' />
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
