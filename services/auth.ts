import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '~/api/ApiConfig';

interface User {
  id: number;
  fullname: string;
  email: string;
  role: string;
  forcePasswordChange?: boolean;
}

interface Register extends User {
  num_cel: string;
  id_type: string;
  num_id: string;
  image: string;
  branch_id: number;
}

interface Response {
  message: string;
  token: string;
  user: User & { forcePasswordChange: boolean };
}

export class AuthService {
  async login({ email, password }: { email: string; password: string }): Promise<Response> {
    try {
      const { data } = await api.post<Response>('/login', { email, password });

      const user: User & { forcePasswordChange: boolean } = {
        id: data.user.id,
        fullname: data.user.fullname,
        email: data.user.email,
        role: data.user.role,
        forcePasswordChange: data.user.forcePasswordChange ?? false,
      };

      if (!data.token) throw Error('Este usuario no se encuentra registrado');

      await AsyncStorage.multiSet([
        ['token', data.token],
        ['user', JSON.stringify(user)],
      ]);

      return { user, message: data.message, token: data.token };
    } catch (err: any) {
      const msj = err?.response?.data?.message || err?.message || 'Error al intentar loguear';
      throw new Error(msj);
    }
  }

  async changePassword(newPassword: string, confirmPassword: string) {
    const token = await AsyncStorage.getItem('token');
    if (!token) throw new Error('No autorizado');

    try {
      const { data } = await api.post(
        '/change-password',
        { newPassword, confirmPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return data.message as string;
    } catch (err: any) {
      const msj =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.message ||
        'Error al intentar cambiar la contraseña';
      throw new Error(msj);
    }
  }

  async userRegister(
    resp: Omit<Register, 'id'>
  ): Promise<{ response: Omit<Response, 'token' | 'user'> }> {
    try {
      const { data } = await api.post('/register', { ...resp });
      return { response: data.message };
    } catch (err: any) {
      const msj =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.message ||
        'Error al intentar registrar este usuario';
      throw new Error(msj);
    }
  }
}

export const authService = new AuthService();
