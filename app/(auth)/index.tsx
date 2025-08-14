import { View, Image, Text, ScrollView, Pressable } from 'react-native'
import { ArrowRightSvg, PasswordSvg, UserSvg } from '~/components/Icons';
import { useEffect, useState } from 'react';
import CheckboxLabel from '~/components/CheckboxLabel';
import FormInput from '~/components/FormInput';
import FlexibleButton from '~/components/FlexibleButton';
import { useAuthStore } from '~/store/auth';
import { useRouter } from 'expo-router';
const LOGIN_LOGO = require("../../assets/img/login_img.png");

export default function Login() {
    const [checked, setChecked] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const { status, login, user } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        let role = user?.role.toLowerCase();
        if (status === 'authenticated' && role === 'admin') {
            router.navigate("/(tabs)/two")
        }
    }, [status, user, router])


    const handleSubmit = async () => {
        await login(email, password);
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

                        <FormInput
                            label='Correo electronico'
                            hintText="Ingresa su correo electronico"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                            iconPrefix={<UserSvg width={20} height={20} color="#007BFF" />}
                        />
                        <FormInput
                            label='Contraseña'
                            hintText="Ingresa tu contraseña"
                            keyboardType="visible-password"
                            isPassword
                            value={password}
                            onChangeText={setPassword}
                            iconPrefix={<PasswordSvg width={20} height={20} color="#007BFF" />}

                        />
                        <View className='w-full py-5 px-2 flex flex-row justify-between'>
                            <View className='flex flex-row gap-3'>
                                <CheckboxLabel labelStyle={{ fontFamily: 'Inter_500Medium', fontSize: 12 }} checked={checked} setChecked={setChecked} label={"Recordarme"} />
                            </View>
                            <Pressable>
                                <Text
                                    style={{ fontFamily: 'Inter_500Medium', fontSize: 12 }}
                                    className='text-[#007BFF]'>¿Olvidaste tu contraseña?</Text>
                            </Pressable>
                        </View>
                        <FlexibleButton title={`${status === 'checking' ? "cargando..." : 'Iniciar sesión'}`} onPress={handleSubmit} iconSuffix={<ArrowRightSvg width={12} height={12} />} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
