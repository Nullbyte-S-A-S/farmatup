export const getFriendlyErrorMessage = (message: string) => {
  if (!message) return 'Error desconocido, por favor intenta nuevamente';
  if (message.includes('401')) {
    return 'Usuario o contraseña incorrectos.';
  }
  if (message.toLowerCase().includes('network')) {
    return 'No se pudo conectar con el servidor.';
  }
  return message;
};
