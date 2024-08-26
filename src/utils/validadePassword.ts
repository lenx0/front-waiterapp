export const validatePassword = (password: string): string | null => {
  if (password.length < 8) {
    return "Credenciais incorretas";
  }
  return null;
};
