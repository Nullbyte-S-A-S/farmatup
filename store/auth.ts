import { create } from 'zustand';
import { AuthService } from '~/services/auth';

const service = new AuthService();

interface User {
  id: number;
  fullname: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  errorMessage: string | null;
  status: 'checking' | 'no-authenticate' | 'authenticate';
  login: (email: string, password: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  errorMessage: null,
  status: 'checking',
  login: async (email, password) => {
    set({ status: 'checking', errorMessage: null });
    try {
      const { user } = await service.login({ email, password });
      set({ user: user, errorMessage: null, status: 'authenticate' });
    } catch (error: any) {
      const msj =
        error?.message || error?.data.message || error?.reponse.data.message || 'Error al loguear';
      set({ user: null, errorMessage: msj, status: 'no-authenticate' });
    }
  },
}));
