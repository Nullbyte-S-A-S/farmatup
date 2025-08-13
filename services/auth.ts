import api from '~/api/ApiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: number;
  fullname: string;
  email: string;
  role: string;
}

interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

export class AuthService {
  async login({ email, password }: { email: string; password: string }): Promise<LoginResponse> {
    try {
      const { data } = await api.post<LoginResponse>('/login', {
        email,
        password,
      });

      const user: User = {
        id: data.user.id,
        fullname: data.user.fullname,
        email: data.user.email,
        role: data.user.role,
      };

      await AsyncStorage.multiSet([
        ['token', data.token],
        ['user', JSON.stringify(user)],
      ]);

      return {
        user,
        message: data.message,
        token: data.token,
      };
    } catch (err: any) {
      const msj = err?.response?.data?.message || err?.message || 'Error al intentar loguear';
      throw new Error(msj);
    }
  }
}
