"use client";

import { useState, useCallback } from "react";
import { apiGateway } from "../gateway/api.gateway";
import { GetUsersDTO } from "../gateway/api.gateway.dto";

export const useGetUserById = () => {
  const [data, setData] = useState<GetUsersDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUserById = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiGateway.getUserById(id);
      setData(response);
    } catch (err) {
      console.error(err);
      setError("Erro ao buscar usuário");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchUserById };
};