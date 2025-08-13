import { create } from 'zustand';
import { AuthService } from '~/services/auth';

const service = new AuthService();

interface User {}

interface AuthState {
  user: User | null;
  errorMessage: string | null;
  status: 'checking' | 'no-authenticate' | 'authenticate';
  login: (email: string, password: string) => void;
}

export const AuthStore = create<AuthState>((set) => ({
  user: null,
  errorMessage: null,
  status: 'checking',
  login: (email, password) => {
    try {
      const response = service.login({ email, password });
    } catch (error) {}
  },
}));
