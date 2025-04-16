"use client";

import { useState } from "react";
import { apiGateway } from "../gateway/api.gateway";

export const useDeleteUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const deleteUser = async (id: string) => {
    setLoading(true);
    try {
      const response = await apiGateway.deleteUser({ id });

      if (response.status === 200) {
        setSuccess(true);
        return response.data;
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao deletar usuário");
    } finally {
      setLoading(false);
    }
  };

  return { deleteUser, loading, error, success };
}