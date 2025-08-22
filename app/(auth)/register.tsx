import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import CardRadioGroup from '~/components/CardRadioGroup';
import FormInput from '~/components/commons/FormInput';
import { ArrowRightSvg, Email, EmailVerify, Phone, Userprofile } from '~/components/commons/Icons';
import FlexibleButton from '~/components/FlexibleButton';
import { UserProfileHeader } from '~/components/register/UserProfileHeader';
interface dataForm {
  fullName: string;
  documentNumber: string;
  selected: boolean;
  branch: string;
  email: string;
  confirmEmail?: string;
  phoneNumber: string;
}

export default function Register() {
  const [form, setForm] = useState<dataForm>({
    fullName: '',
    documentNumber: '',
    selected: false,
    branch: '',
    email: '',
    confirmEmail: '',
    phoneNumber: '',
  });

  const [messageError, setMessageError] = useState({
    fullName: '',
    documentNumber: '',
    branch: '',
    email: '',
    confirmEmail: '',
    phoneNumber: '',
  });

  const options = [
    {
      icon: <Email size={24} color="#007AFF" />,
      title: 'Trabajador',
      description: 'Atención y ventas en farmacia',
    },
    {
      icon: <Userprofile size={24} color="#007AFF" />,
      title: 'Administrador',
      description: 'Gestión de sucursales y personal',
    },
  ];

  const validateForm = useMemo(() => {
    let isValid = true;
    const newMessageError = { ...messageError };

    if (!form.fullName) {
      newMessageError.fullName = 'Nombre completo es requerido';
      isValid = false;
    }

    if (!form.documentNumber) {
      newMessageError.documentNumber = 'Número de identificación es requerido';
      isValid = false;
    }

    if (!form.branch) {
      newMessageError.branch = 'Sucursal es requerida';
      isValid = false;
    }

    if (!form.email) {
      newMessageError.email = 'Correo electrónico es requerido';
      isValid = false;
    }
    if (!form.confirmEmail) {
      newMessageError.confirmEmail = 'Confirmar correo electrónico es requerido';
      isValid = false;
    }

    if (form.email !== form.confirmEmail) {
      newMessageError.confirmEmail = 'Los correos no coinciden';
      isValid = false;
    }

    if (!form.phoneNumber) {
      newMessageError.phoneNumber = 'Número de celular es requerido';
      isValid = false;
    }
    if (form.phoneNumber.length < 13 || RegExp(/^[0-9]{10}$/).test(form.phoneNumber)) {
      newMessageError.phoneNumber = 'Número de celular inválido';
      isValid = false;
    }

    setMessageError(newMessageError);
    return isValid;
  }, [form, messageError]);

  const handleForm = () => {
    if (validateForm) {
      console.log('hello');
    }
  };

  return (
    <ScrollView>
      <View className="flex-1 bg-white">
        <UserProfileHeader />
        <View className="px-8">
          <FormInput
            label={'Nombre completo'}
            hintText="Ingresa nombre completo"
            keyboardType="default"
            value={form.fullName}
            onChangeText={(text: string) => setForm({ ...form, fullName: text })}
            hasError={!!messageError.fullName}
            errorMessage={messageError.fullName}
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
            value={form.documentNumber}
            onChangeText={(text: string) => setForm({ ...form, documentNumber: text })}
            hasError={!!messageError.documentNumber}
            errorMessage={messageError.documentNumber}
            options={['CC', 'TI']}
          />
          <View className="mt-4">
            <CardRadioGroup
              options={options}
              selectedValue={form.selected ? 'Trabajador' : 'Administrador'}
              onValueChange={(value) => setForm({ ...form, selected: value === 'Trabajador' })}
            />
          </View>
          <FormInput
            label={'Sucursal'}
            selectHintText="Seleciona la sucursal"
            type="select"
            options={['Mayales', 'Nullbyte']}
            value={form.branch}
            onChangeText={(text: string) => setForm({ ...form, branch: text })}
            hasError={!!messageError.branch}
            errorMessage={messageError.branch}
          />
          <FormInput
            label={'Correo electrónico'}
            hintText="Correo@ejemplo.com"
            keyboardType="email-address"
            autoComplete="email"
            value={form.email}
            onChangeText={(text: string) => setForm({ ...form, email: text })}
            hasError={!!messageError.email}
            errorMessage={messageError.email}
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
            value={form.confirmEmail}
            onChangeText={(text: string) => setForm({ ...form, confirmEmail: text })}
            hasError={!!messageError.confirmEmail}
            errorMessage={messageError.confirmEmail}
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
            value={form.phoneNumber}
            onChangeText={(text: string) => setForm({ ...form, phoneNumber: text })}
            hasError={!!messageError.phoneNumber}
            errorMessage={messageError.phoneNumber}
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
            onPress={() => {
              handleForm();
            }}
          />
        </View>
        <View style={{ marginTop: 60 }} />
      </View>
    </ScrollView>
  );
}
