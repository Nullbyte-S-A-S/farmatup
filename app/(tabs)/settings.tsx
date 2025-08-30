import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import ProfileCard from '~/components/settings/ProfileCard';
import SettingsContentSection from '~/components/settings/SettingsContentSections';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        className="mt-3 flex-1 px-7"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View className="w-full flex-1 items-center bg-[#F3F4F6] pb-28">
          <ProfileCard
            className="mb-5"
            image="https://whitenessproject.org/img/Alfredo.jpg"
            name="Carlos Rodriguez"
            role="Administrador"
            branch="Sucursal Norte"
            onEdit={() => console.log('Editar perfil')}
          />
          <SettingsContentSection
            notifications={notifications}
            setNotifications={setNotifications}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
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
