import { create } from 'zustand';
import { AuthService } from '~/services/auth';
const authService = new AuthService();
interface User {
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

interface RegisterState {
  error: boolean | null;
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string | null;
  register: (user: Register) => Promise<void>;
}

export const useRegisterStore = create<RegisterState>((set) => ({
  error: null,
  status: 'idle',
  message: null,
  register: async (user) => {
    try {
      set({ status: 'loading', error: false, message: null });
      const data = await authService.userRegister(user);
      set({ status: 'success', error: false, message: data.response.message });
    } catch (error: any) {
      const errorMessage = error?.message || error?.data.message || error?.response.data.message;
      set({ status: 'error', error: true, message: errorMessage });
      throw error;
    }
  },
}));
