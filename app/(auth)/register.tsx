import { ScrollView, View } from 'react-native';
import { UserProfileHeader } from '~/components/register/UserProfileHeader';

export default function Register() {
  return (
    <ScrollView>
      <View className="flex-1 bg-white">
        <UserProfileHeader />
      </View>
    </ScrollView>
  );
}
