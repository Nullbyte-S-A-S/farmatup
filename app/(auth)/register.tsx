import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Userprofile } from '~/components/Icons';

export default function Register() {
    return (
        <ScrollView>
            <View className="flex-1 bg-white">
                <LinearGradient
                    colors={['#66B0FF', '#FFFFFF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    className="w-full h-[262px] rounded-b-[70%]"
                />

                <TouchableOpacity
                    activeOpacity={0.8}
                    className="w-full flex justify-center items-center"
                >
                    <View
                        className="w-[102px] h-[102px] flex justify-center items-center bg-[#509AFF] rounded-full border-[3px]
                    border-white absolute bottom-[90px]"
                    >
                        <Userprofile color='#fff' />
                    </View>
                    <Text className="w-full text-white text-center absolute bottom-[60px]">
                        Añade una foto del perfil (opcional)
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
