import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import CardRadioGroup from '~/components/CardRadioGroup';
import FormInput from '~/components/commons/FormInput';
import { ArrowRightSvg, Email, EmailVerify, Phone, Userprofile } from '~/components/commons/Icons';
import FlexibleButton from '~/components/FlexibleButton';
import { UserProfileHeader } from '~/components/register/UserProfileHeader';

export default function Register() {
  const [selected, setSelected] = useState('Opción A');

  const options = [
    {
      icon: <Email size={24} color="#007AFF" />,
      title: 'Opción A',
      description: 'Descripción de la opción A',
    },
    {
      icon: <Userprofile size={24} color="#007AFF" />,
      title: 'Opción B',
      description: 'Descripción de la opción B',
    },
  ];

  return (
    <ScrollView>
      <View className="flex-1 bg-white">
        <UserProfileHeader />
        <View className="px-8">
          <FormInput
            label={'Nombre completo'}
            hintText="Ingresa nombre completo"
            keyboardType="default"
            iconPrefix={
              <View className="ml-2 mt-1">
                <Userprofile size={18} color="#007BFF" />
              </View>
            }
          />
          <FormInput
            label={'Número de identificación'}
            hintText="Número de documento"
            selectHintText="Doc"
            type="select+input"
            options={['CC', 'TI']}
          />
          <View className="mt-4">
            <CardRadioGroup
              options={options}
              selectedValue={selected}
              onValueChange={(value) => setSelected(value)}
            />
          </View>
          <FormInput
            label={'Sucursal'}
            selectHintText="Seleciona la sucursal"
            type="select"
            options={['Mayales', 'Nullbyte']}
          />
          <FormInput
            label={'Correo electrónico'}
            hintText="Correo@ejemplo.com"
            keyboardType="email-address"
            autoComplete="email"
            iconPrefix={
              <View className="ml-2 mt-1">
                <Email size={18} />
              </View>
            }
          />
          <FormInput
            label={'Confirmar correo'}
            hintText="Confirmar correo electrónico"
            autoComplete="email"
            keyboardType="email-address"
            iconPrefix={
              <View className="ml-2 mt-1">
                <EmailVerify size={20} />
              </View>
            }
          />
          <FormInput
            label={'Número de celular'}
            hintText="+57 000 000 0000"
            keyboardType="phone-pad"
            iconPrefix={
              <View className="ml-2 mt-1">
                <Phone size={18} />
              </View>
            }
          />
          <FlexibleButton
            style={{ marginTop: 12 }}
            title={`${'Crear cuenta'}`}
            iconSuffix={<ArrowRightSvg width={12} height={12} />}
            onPress={function (): void {}}
          />
        </View>
        <View style={{ marginTop: 60 }} />
      </View>
    </ScrollView>
  );
}
