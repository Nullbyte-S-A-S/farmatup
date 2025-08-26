import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function InventoryScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        className="flex-1 px-7"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View className="flex-1 items-center justify-center">
          <Text>Inventario</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
