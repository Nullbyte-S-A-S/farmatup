import api from '~/api/ApiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: number;
  fullname: string;
  email: string;
  role: string;
}

interface LoginResposne {
  message: string;
  token: string;
  user: User;
}

export class AuthService {
  async login({ email, password }: { email: string; password: string }): Promise<LoginResposne> {
    try {
      const { data } = await api.post<{ token: string; user: User; message: string }>('/login', {
        email,
        password,
      });

      if (!data.token) {
        throw new Error('Usuario invalido');
      }

      const user: User = {
        id: data.user.id,
        fullname: data.user.fullname,
        email: data.user.email,
        role: data.user.role,
      };

      await AsyncStorage.multiMerge([
        ['toke', data.token],
        ['user', JSON.stringify(data.user)],
      ]);

      return {
        user,
        message: data.message,
        token: data.token,
      };
    } catch (err: any) {
      const msj = err?.response.data.message || err?.message || 'Error al intentanr loguear';
      throw Error(msj);
    }
  }
}
