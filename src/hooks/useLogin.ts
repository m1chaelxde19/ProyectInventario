import { useState } from "react";
import type { LoginRequest } from "../model/authModel";
import { authLogin } from "../services/AuthService";

export default function useLogin() {
  const [loading, setLoading] = useState(false);

  const login = async (authData: LoginRequest) => {
    setLoading(true);
    try {
      const data = await authLogin(authData);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
}
