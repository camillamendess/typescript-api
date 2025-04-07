"use client";

import { useState, useEffect, useCallback } from "react";
import { apiGateway } from "../gateway/api.gateway";
import { GetUsersDTO } from "../gateway/api.gateway.dto";

export const useGetUsers = () => {
  const [data, setData] = useState<GetUsersDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiGateway.getUsers();
      console.log("response", response);
      setData(response.data);
    } catch (err) {
      console.error(err);
      setError("Erro ao buscar usuários");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { data, loading, error, refetch: fetchUsers };
};
