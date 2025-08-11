import api from '~/api/ApiConfig';

interface User {}

export class AuthService {
  //TODO: DEBERIA DE REGRESAR EL USUARIO
  async login({ email, password }: { email: string; password: string }): Promise<void> {
    const response = await api.post('/login', { email, password });
  }
}
