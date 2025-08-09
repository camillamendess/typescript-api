import { useState } from "react";
import { apiGateway } from "../gateway/api.gateway";

interface UpdateUserProps {
  id: string;
  img?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
}

export const useUpdateUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);


  const updateUser = async (user: UpdateUserProps) => {
    setLoading(true);
    try {
      const response = await apiGateway.updateUser(user);

      if (response.status === 201) {
        setSuccess(true);
        setLoading(false);
        return response.data;
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao atualizar usuário");
    } finally {
      setLoading(false);
    }
  }

  return { updateUser, loading, error, success };
}