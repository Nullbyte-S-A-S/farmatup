import { create } from 'zustand';
import { AuthService } from '~/services/auth';

const authService = new AuthService();

interface User {
  id: number;
  fullname: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  errorMessage: string | null;
  status: 'checking' | 'no-authenticate' | 'authenticated';
  login: (email: string, password: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  errorMessage: null,
  status: 'checking',
  login: async (email, password) => {
    set({ status: 'checking', errorMessage: null });
    try {
      const res = await authService.login({ email, password });
      set({ status: 'authenticated', user: res.user });
    } catch (error: any) {
      set({
        status: 'no-authenticate',
        errorMessage: error?.message || error?.data.message || error?.response.data.message,
      });
    }
  },
}));
