import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CardRadioGroup from '~/components/CardRadioGroup';
import FormInput from '~/components/commons/FormInput';
import { ArrowRightSvg, Email, EmailVerify, Phone, Userprofile } from '~/components/commons/Icons';
import FlexibleButton from '~/components/FlexibleButton';
import { UserProfileHeader } from '~/components/register/UserProfileHeader';
import { showToast } from '~/helpers/toast';
import { useRegisterStore } from '~/store/register';

interface dataForm {
  fullName: string;
  documentType: string;
  documentNumber: string;
  selected: boolean;
  branch: string;
  email: string;
  confirmEmail?: string;
  phoneNumber: string;
}

const initialForm: dataForm = {
  fullName: '',
  documentType: '',
  documentNumber: '',
  selected: false,
  branch: '',
  email: '',
  confirmEmail: '',
  phoneNumber: '',
};

interface ErrorMessages {
  fullName: string;
  documentType: string;
  documentNumber: string;
  branch: string;
  email: string;
  confirmEmail: string;
  phoneNumber: string;
}

export default function Register() {
  const { register, error, status, message } = useRegisterStore();
  const [form, setForm] = useState<dataForm>(initialForm);
  const [messageError, setMessageError] = useState<ErrorMessages>(initialForm as ErrorMessages);

  useEffect(() => {
    if (status === 'success') {
      setForm(initialForm);
      showToast(message || 'Usuario registrado. Verifica tu correo.');
    } else if (error) {
      showToast(message || 'Error en el registro. Inténtalo de nuevo.');
    }
  }, [status, error, message]);

  const validators: Record<
    keyof ErrorMessages,
    ((value: string, form: dataForm) => string | null)[]
  > = {
    fullName: [(v) => (!v ? 'Nombre completo es requerido' : null)],
    documentType: [(v) => (!v ? 'Tipo de documento es requerido' : null)],
    documentNumber: [(v) => (!v ? 'Número de identificación es requerido' : null)],
    branch: [(v) => (!v ? 'Sucursal es requerida' : null)],
    email: [(v) => (!v ? 'Correo electrónico es requerido' : null)],
    confirmEmail: [
      (v) => (!v ? 'Confirmar correo electrónico es requerido' : null),
      (_, f) =>
        f.email && f.confirmEmail && f.email !== f.confirmEmail ? 'Los correos no coinciden' : null,
    ],
    phoneNumber: [
      (v) => (!v ? 'Número de celular es requerido' : null),
      (v) => (!/^[0-9]{10}$/.test(v) ? 'Número de celular inválido' : null),
    ],
  };

  const validateForm = () => {
    const newMessageError: ErrorMessages = {
      fullName: '',
      documentType: '',
      documentNumber: '',
      branch: '',
      email: '',
      confirmEmail: '',
      phoneNumber: '',
    };

    let isValid = true;

    (Object.keys(validators) as (keyof ErrorMessages)[]).forEach((field) => {
      for (const rule of validators[field]) {
        const error = rule(form[field] ?? '', form);
        if (error) {
          newMessageError[field] = error;
          isValid = false;
          break;
        }
      }
    });

    setMessageError(newMessageError);
    return isValid;
  };

  const handleForm = () => {
    if (validateForm()) {
      register({
        fullname: form.fullName,
        email: form.email,
        role: form.selected ? 'EMPLOYED' : 'ADMIN',
        num_cel: form.phoneNumber,
        id_type: form.documentType,
        num_id: form.documentNumber,
        image: 'https://i.pravatar.cc/300',
        branch_id: form.branch === 'Mayales' ? 1 : 2,
        forcePasswordChange: true,
      });
    }
  };

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
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={30}
      enableOnAndroid={true}>
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
              keyboardType="number-pad"
              onChangeText={(text: string) => setForm({ ...form, documentNumber: text })}
              onSelectOption={(option: string) => setForm({ ...form, documentType: option })}
              hasError={!!messageError.documentType || !!messageError.documentNumber}
              errorMessage={messageError.documentType || messageError.documentNumber}
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
              onSelectOption={(option: string) => setForm({ ...form, branch: option })}
              hasError={!!messageError.branch}
              errorMessage={messageError.branch}
            />

            <FormInput
              label={'Correo electrónico'}
              autoCapitalize="none"
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
              autoCapitalize="none"
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
              hintText="3001234567"
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
              title={`${status === 'loading' ? 'Cargando...' : 'Crear cuenta'}`}
              iconSuffix={<ArrowRightSvg width={12} height={12} />}
              onPress={handleForm}
            />
          </View>
          <View style={{ marginTop: 60 }} />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}
