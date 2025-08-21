import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native';
import { ArrowBack, Userprofile } from '~/components/commons/Icons';
export const UserProfileHeader = () => {
  return (
    <>
      <LinearGradient
        colors={['#66B0FF', '#FFFFFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="h-[262px] w-full rounded-b-[70%]"
      />
      <TouchableOpacity
        activeOpacity={0.7}
        className="absolute left-8 top-12 rounded-lg bg-white p-1">
        <ArrowBack />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} className="flex w-full items-center justify-center">
        <View
          className="absolute bottom-[90px] flex h-[102px] w-[102px] items-center justify-center rounded-full
                    border-[3px] border-white bg-[#509AFF]">
          <Userprofile color="#fff" />
        </View>
        <Text className="absolute bottom-[60px] w-full text-center text-white">
          Añade una foto del perfil (opcional)
        </Text>
      </TouchableOpacity>
    </>
  );
};
