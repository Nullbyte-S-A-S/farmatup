import { View, Image, Text, TextInput, ScrollView, Pressable } from 'react-native'
import Checkbox from 'expo-checkbox';
import { useFonts, Inter_700Bold, Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter';
import { ArrowRightSvg, EyeSvg, PasswordSvg, UserSvg } from '~/components/Icons';
import { useState } from 'react';
const LOGIN_LOGO = require("../../assets/img/login_img.png");

export default function AuthIndex() {
    const [checked, setChecked] = useState(false);

    let [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_500Medium,
        Inter_400Regular,
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <ScrollView className="flex-1 bg-white px-7">
            <View>
                <View>
                    <View className='w-full flex justify-center items-center'>
                        <Image
                            source={LOGIN_LOGO}
                            className='w-[240px] h-[240px]'
                            resizeMode='contain'
                        />
                    </View>
                    <View className='w-full flex justify-center items-center'>
                        <View className='w-[279px]'>
                            <Text
                                style={{ fontFamily: 'Inter_700Bold', fontSize: 26 }}
                                className='text-[#23305D] text-center'
                            >
                                Iniciar sesión
                            </Text>
                            <Text
                                style={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}
                                className='text-center py-2 text-[#8A899C]'
                            >Ingrese un nombre de usuario y tu contraseña para continuar</Text>
                        </View>
                        <View
                            className="border w-[312px] h-[56px] px-[14px] py-[7px] mt-7"
                            style={{ borderRadius: 10, borderColor: '#E6E6F4', borderWidth: 1 }}
                        >
                            <Text
                                style={{ fontFamily: 'Inter_400Regular' }}
                                className="text-[8px] text-[#6B7280] mb-[2px] ml-2">
                                Nombre de usuario
                            </Text>

                            <View className="flex-row items-center">
                                <UserSvg width={20} height={20} color="#007BFF" />

                                <TextInput
                                    placeholder="Ingresa tu usuario"
                                    keyboardType="default"
                                    placeholderTextColor="#9CA3AF"
                                    className="ml-2 flex-1 text-[14px]"
                                    style={{ padding: 0 }}
                                />
                            </View>
                        </View>
                        <View
                            className="border w-[312px] h-[56px] px-[14px] py-[7px] mt-4"
                            style={{ borderRadius: 10, borderColor: '#E6E6F4', borderWidth: 1 }}
                        >
                            <Text
                                style={{ fontFamily: 'Inter_400Regular' }}
                                className="text-[8px] text-[#6B7280] mb-[2px] ml-2">
                                Nombre de usuario
                            </Text>

                            <View className="flex-row items-center">
                                <PasswordSvg width={20} height={20} color="#007BFF" />

                                <TextInput
                                    placeholder="Ingresa tu usuario"
                                    keyboardType="visible-password"
                                    placeholderTextColor="#9CA3AF"
                                    className="ml-2 flex-1 text-[14px]"
                                    style={{ padding: 0 }}
                                />
                                <EyeSvg width={20} height={20} />
                            </View>
                        </View>
                        <View className='w-full py-5 px-2 flex flex-row justify-between'>
                            <View className='flex flex-row gap-3'>
                                <Checkbox value={checked} onValueChange={setChecked} />
                                <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}
                                    className='text-[#6B7280] text-center'>Recordarme</Text>
                            </View>
                            <Pressable>
                                <Text
                                    style={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}
                                    className='text-[#007BFF]'>¿Olvidaste tu contraseña?</Text>
                            </Pressable>
                        </View>
                        <Pressable
                            style={{ borderRadius: 10 }}
                            className="w-[312px] h-[56px] px-[14px] py-[7px] bg-[#007BFF] mt-4
                             flex flex-row gap-4 items-center justify-center"
                        >
                            <Text
                                style={{ fontFamily: 'Inter_500Medium', fontSize: 14 }}
                                className="text-white text-center"
                            >
                                Iniciar sesión
                            </Text>
                            <View className='text-center'>
                                <ArrowRightSvg width={12} height={12} />
                            </View>
                        </Pressable>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
