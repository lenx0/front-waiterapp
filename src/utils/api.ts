import axios from "axios";

const API_BASE_URL = "http://localhost:3001";
export interface LoginCredentials {
  email: string;
  password: string;
}

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const login = async (credentials: LoginCredentials): Promise<string> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    const token = response.data.token;

    if (token) {
      localStorage.setItem("authToken", token);
      return token;
    } else {
      throw new Error("Token não retornado pelo servidor.");
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw new Error("Falha ao fazer login. Tente novamente.");
  }
};
